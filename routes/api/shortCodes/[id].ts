import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";
import type { SignedInState } from "@/plugins/session.ts";
import { ShortCodeService } from "@/services/ShortCodeService.ts";
import { sanitizeUrl } from "@/utils/validation.ts";

export const handler: Handlers<undefined, SignedInState> = {
  async PATCH(req, ctx) {
    // Must be signed in
    if (!ctx.state.sessionUser) {
      return Response.json(
        { error: "Authentication required" },
        { status: STATUS_CODE.Unauthorized },
      );
    }

    const id = ctx.params.id;
    const shortCodeService = new ShortCodeService();
    
    // Check if short code exists and belongs to user
    const existingShortCode = await shortCodeService.getShortCode(id);
    if (!existingShortCode) {
      return Response.json(
        { error: "Short code not found" },
        { status: STATUS_CODE.NotFound },
      );
    }

    if (existingShortCode.userLogin !== ctx.state.sessionUser.login || existingShortCode.userLogin === null) {
      return Response.json(
        { error: "Access denied" },
        { status: STATUS_CODE.Forbidden },
      );
    }

    const body = await req.json();
    
    // Validate and sanitize updates
    const updates: { title?: string; url?: string; redirectTime?: number } = {};
    
    if (body.title !== undefined) {
      if (typeof body.title !== "string" || body.title.trim().length === 0) {
        return Response.json(
          { error: "Title must be a non-empty string" },
          { status: STATUS_CODE.BadRequest },
        );
      }
      updates.title = body.title.trim();
    }

    if (body.url !== undefined) {
      if (typeof body.url !== "string" || body.url.trim().length === 0) {
        return Response.json(
          { error: "URL must be a non-empty string" },
          { status: STATUS_CODE.BadRequest },
        );
      }
      try {
        updates.url = sanitizeUrl(body.url);
      } catch {
        return Response.json(
          { error: "Invalid URL format" },
          { status: STATUS_CODE.BadRequest },
        );
      }
    }

    if (body.redirectTime !== undefined) {
      if (typeof body.redirectTime !== "number" || body.redirectTime < 0 || body.redirectTime > 30) {
        return Response.json(
          { error: "Redirect time must be between 0 and 30 seconds" },
          { status: STATUS_CODE.BadRequest },
        );
      }
      updates.redirectTime = body.redirectTime;
    }

    try {
      const updatedShortCode = await shortCodeService.updateShortCode(id, updates);
      if (!updatedShortCode) {
        return Response.json(
          { error: "Failed to update short code" },
          { status: STATUS_CODE.InternalServerError },
        );
      }

      return Response.json(updatedShortCode, { status: STATUS_CODE.OK });
    } catch (error) {
      return Response.json(
        { error: "Failed to update short code" },
        { status: STATUS_CODE.InternalServerError },
      );
    }
  },

  async DELETE(_req, ctx) {
    // Must be signed in
    if (!ctx.state.sessionUser) {
      return Response.json(
        { error: "Authentication required" },
        { status: STATUS_CODE.Unauthorized },
      );
    }

    const id = ctx.params.id;
    const shortCodeService = new ShortCodeService();
    
    // Check if short code exists and belongs to user
    const existingShortCode = await shortCodeService.getShortCode(id);
    if (!existingShortCode) {
      return Response.json(
        { error: "Short code not found" },
        { status: STATUS_CODE.NotFound },
      );
    }

    if (existingShortCode.userLogin !== ctx.state.sessionUser.login || existingShortCode.userLogin === null) {
      return Response.json(
        { error: "Access denied" },
        { status: STATUS_CODE.Forbidden },
      );
    }

    try {
      await shortCodeService.deleteShortCode(id);
      return Response.json(
        { success: true },
        { status: STATUS_CODE.OK },
      );
    } catch (error) {
      return Response.json(
        { error: "Failed to delete short code" },
        { status: STATUS_CODE.InternalServerError },
      );
    }
  },
};