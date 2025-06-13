import { headers } from "next/headers";

const idToRequestCount = new Map<string, number>(); // keeps track of individual users
const rateLimiter = {
  windowStart: Date.now(),
  windowSize: 60 * 60 * 1000, // Milliseconds (currently 1 Hour)
};

export const rateLimit = async (actionKey: string, maxRequests: number) => {
  const awaitedHeaders = await headers();
  const ip =
    awaitedHeaders.get("x-forwarded-for") ??
    awaitedHeaders.get("x-real-ip") ??
    "unknown";
  // Check and update current window
  const now = Date.now();
  const isNewWindow = now - rateLimiter.windowStart > rateLimiter.windowSize;

  const key = `${actionKey}-${ip}`;

  if (isNewWindow) {
    rateLimiter.windowStart = now;
    idToRequestCount.set(key, 0);
  }

  // Check and update current request limits
  const currentRequestCount = idToRequestCount.get(key) ?? 0;
  if (currentRequestCount >= maxRequests) {
    throw new Error(
      "You reached the maximum number of requests. Please try again later.",
    );
  }
  idToRequestCount.set(key, currentRequestCount + 1);
};
