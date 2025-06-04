import type { GiphyGif } from "@/types/giphy.ts";

export function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    // Only allow http and https protocols
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function sanitizeUrl(urlString: string): string {
  // Add https:// if no protocol is specified
  if (!urlString.match(/^https?:\/\//)) {
    urlString = "https://" + urlString;
  }
  return urlString;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateShortCodeForm(data: {
  url: string;
  title: string;
  redirectTime: number;
  gif: GiphyGif | null;
}): ValidationError[] {
  const errors: ValidationError[] = [];

  // URL validation
  if (!data.url || data.url.trim() === "") {
    errors.push({ field: "url", message: "URL is required" });
  } else {
    const sanitizedUrl = sanitizeUrl(data.url);
    if (!isValidUrl(sanitizedUrl)) {
      errors.push({ field: "url", message: "Please enter a valid URL" });
    }
  }

  // Title validation
  if (!data.title || data.title.trim() === "") {
    errors.push({ field: "title", message: "Title is required" });
  } else if (data.title.length > 100) {
    errors.push({
      field: "title",
      message: "Title must be less than 100 characters",
    });
  }

  // Redirect time validation
  if (data.redirectTime < 0 || data.redirectTime > 30) {
    errors.push({
      field: "redirectTime",
      message: "Redirect time must be between 0 and 30 seconds",
    });
  }

  // GIF validation
  if (!data.gif || !data.gif.id) {
    errors.push({ field: "gif", message: "Please select a GIF" });
  }

  return errors;
}
