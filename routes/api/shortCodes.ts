import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";
import type { SignedInState } from "@/plugins/session.ts";
import { ShortCodeService } from "@/services/ShortCodeService.ts";
import { sanitizeUrl, validateShortCodeForm } from "@/utils/validation.ts";
import { 
  getClientIP, 
  checkMultipleRateLimits, 
  formatTimeRemaining, 
  RATE_LIMITS 
} from "@/utils/rateLimit.ts";

export const handler: Handlers<undefined, SignedInState> = {
  async POST(req, ctx) {
    // Check rate limit with authentication awareness
    const clientIP = getClientIP(req);
    const isAuthenticated = !!ctx?.state?.sessionUser?.login;
    const rateLimitResult = await checkMultipleRateLimits(clientIP, isAuthenticated);

    if (!rateLimitResult.allowed) {
      const timeRemaining = formatTimeRemaining(rateLimitResult.resetTime);
      const maxRequests = isAuthenticated 
        ? RATE_LIMITS.AUTHENTICATED_CREATE.maxRequests 
        : RATE_LIMITS.ANONYMOUS_CREATE.maxRequests;

      return Response.json(
        {
          error: `Too many requests. Please wait ${timeRemaining} before creating another short URL.`,
          resetTime: rateLimitResult.resetTime,
          isAuthenticated,
          maxRequests,
        },
        {
          status: STATUS_CODE.TooManyRequests,
          headers: {
            "X-RateLimit-Limit": maxRequests.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
            "Retry-After": Math.ceil(
              (rateLimitResult.resetTime - Date.now()) / 1000,
            ).toString(),
          },
        },
      );
    }

    const body = await req.json();

    // Validate input
    const validationErrors = validateShortCodeForm(body);
    if (validationErrors.length > 0) {
      return Response.json(
        { errors: validationErrors },
        { status: STATUS_CODE.BadRequest },
      );
    }

    const shortCode = {
      userLogin: ctx?.state?.sessionUser?.login || null,
      url: sanitizeUrl(body.url),
      title: body.title.trim(),
      redirectTime: body.redirectTime,
      gif: body.gif,
    };

    try {
      const shortCodeService = new ShortCodeService();
      const result = await shortCodeService.createShortCode(shortCode);
      const maxRequests = isAuthenticated 
        ? RATE_LIMITS.AUTHENTICATED_CREATE.maxRequests 
        : RATE_LIMITS.ANONYMOUS_CREATE.maxRequests;

      return Response.json(result, {
        status: STATUS_CODE.Created,
        headers: {
          "X-RateLimit-Limit": maxRequests.toString(),
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
        },
      });
    } catch (_error) {
      return Response.json(
        { error: "Failed to create short code" },
        { status: STATUS_CODE.InternalServerError },
      );
    }
  },
  // async GET(req) {
  //   const body = await req.json();

  //   const shortCodeService = new ShortCodeService();
  //   const result = await shortCodeService.getShortCode(body.id);

  //   return Response.json(result, { status: STATUS_CODE.OK });
  // }
};
