/// <reference lib="deno.unstable" />
import { kv } from "@/utils/db.ts";

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

export interface RateLimitResult {
  allowed: boolean;
  resetTime: number;
  remaining: number;
}

// Rate limit configurations
export const RATE_LIMITS = {
  // 10 URLs per hour for anonymous users
  ANONYMOUS_CREATE: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
  },
  // 50 URLs per hour for authenticated users
  AUTHENTICATED_CREATE: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 50,
  },
  // Burst protection - 1 request per second
  BURST_PROTECTION: {
    windowMs: 1000, // 1 second
    maxRequests: 1,
  },
} as const;

export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  async checkLimit(
    identifier: string,
    action: string = "default",
  ): Promise<RateLimitResult> {
    const key = ["rate_limit", identifier, action];
    const now = Date.now();

    const result = await kv.get<RateLimitEntry>(key);
    const current = result.value;

    // If no entry exists or window has expired, start fresh
    if (!current || now > current.resetTime) {
      const resetTime = now + this.config.windowMs;
      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime,
      };

      await kv.set(key, newEntry, { expireIn: this.config.windowMs });

      return {
        allowed: true,
        resetTime,
        remaining: this.config.maxRequests - 1,
      };
    }

    // Check if limit exceeded
    if (current.count >= this.config.maxRequests) {
      return {
        allowed: false,
        resetTime: current.resetTime,
        remaining: 0,
      };
    }

    // Increment counter
    const updatedEntry: RateLimitEntry = {
      count: current.count + 1,
      resetTime: current.resetTime,
    };

    await kv.set(key, updatedEntry, { expireIn: current.resetTime - now });

    return {
      allowed: true,
      resetTime: current.resetTime,
      remaining: this.config.maxRequests - updatedEntry.count,
    };
  }
}

// Multiple rate limit checker
export async function checkMultipleRateLimits(
  identifier: string,
  isAuthenticated: boolean = false,
): Promise<RateLimitResult> {
  // Always check burst protection
  const burstLimiter = new RateLimiter(RATE_LIMITS.BURST_PROTECTION);
  const burstResult = await burstLimiter.checkLimit(identifier, "burst");
  
  if (!burstResult.allowed) {
    return burstResult;
  }

  // Check main rate limit based on authentication
  const mainConfig = isAuthenticated 
    ? RATE_LIMITS.AUTHENTICATED_CREATE 
    : RATE_LIMITS.ANONYMOUS_CREATE;
  
  const mainLimiter = new RateLimiter(mainConfig);
  const mainResult = await mainLimiter.checkLimit(identifier, "create");

  return mainResult;
}

// Legacy export for backward compatibility
export const shortCodeRateLimit = new RateLimiter(RATE_LIMITS.ANONYMOUS_CREATE);

// Helper function to get client IP
export function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback to a default IP for development
  return "127.0.0.1";
}

// Helper function to format time remaining
export function formatTimeRemaining(resetTime: number): string {
  const now = Date.now();
  const diffMs = resetTime - now;

  if (diffMs <= 0) return "now";

  const diffMinutes = Math.ceil(diffMs / (1000 * 60));
  if (diffMinutes === 1) return "1 minute";
  if (diffMinutes < 60) return `${diffMinutes} minutes`;

  const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
  if (diffHours === 1) return "1 hour";
  return `${diffHours} hours`;
}
