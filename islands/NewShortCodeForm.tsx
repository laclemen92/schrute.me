import { useState } from "preact/hooks";
import GiphySearch from "@/islands/GiphySearch.tsx";
import {
  sanitizeUrl,
  validateShortCodeForm,
  type ValidationError,
} from "@/utils/validation.ts";
import type { GiphyGif } from "@/types/giphy.ts";
import { useNotification } from "@/hooks/useNotification.ts";
import NotificationContainer from "@/components/NotificationContainer.tsx";

export default function NewShortCodeForm() {
  const [gif, setGif] = useState<GiphyGif | null>(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [redirectTime, setRedirectTime] = useState(5);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successUrl, setSuccessUrl] = useState<string | null>(null);
  const { notifications, removeNotification, success, error } =
    useNotification();

  const getFieldError = (fieldName: string) => {
    return errors.find((e) => e.field === fieldName)?.message;
  };

  return (
    <>
      <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-8">
        <div class="max-w-3xl mx-auto p-6">
          <NotificationContainer
            notifications={notifications}
            onRemove={removeNotification}
          />

          <div class="text-center mb-8">
            <h1 class="text-5xl font-bold mb-4 text-gray-800">
              Create Your <span class="text-yellow-600">Schrute.Me</span> Link
            </h1>
            <p class="text-lg text-gray-600">
              Share links the Scranton way - with Office GIFs! 📺
            </p>
          </div>

          {successUrl && (
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 class="text-green-800 font-semibold mb-2">
                Success! Your short URL is ready:
              </h3>
              <div class="flex items-center space-x-2">
                <input
                  type="text"
                  value={successUrl}
                  readonly
                  class="flex-1 px-3 py-2 bg-white border border-green-300 rounded text-sm font-mono"
                />
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(successUrl)}
                  class="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                  Copy
                </button>
                <a
                  href={successUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Test
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSuccessUrl(null)}
                class="mt-3 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
              >
                Create Another Short URL
              </button>
            </div>
          )}

          {errors.find((e) => e.field === "form") && (
            <div class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {errors.find((e) => e.field === "form")?.message}
            </div>
          )}

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold mb-4 text-gray-700">
                Choose your GIF
              </h2>
              <GiphySearch
                defaultSearch="michael"
                onChangeGif={(gif) => {
                  setGif(gif);
                }}
              />
              {getFieldError("gif") && (
                <p class="mt-2 text-sm text-red-600">{getFieldError("gif")}</p>
              )}
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div>
                <label
                  htmlFor="url"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  URL to shorten
                </label>
                <input
                  id="url"
                  type="text"
                  placeholder="https://example.com"
                  class={`w-full px-3 py-2 border ${
                    getFieldError("url") ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onInput={(e) => {
                    setUrl((e?.target as HTMLInputElement).value);
                  }}
                  value={url}
                />
                {getFieldError("url") && (
                  <p class="mt-1 text-sm text-red-600">
                    {getFieldError("url")}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="title"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="My awesome link"
                  class={`w-full px-3 py-2 border ${
                    getFieldError("title")
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onInput={(e) => {
                    setTitle((e?.target as HTMLInputElement).value);
                  }}
                  value={title}
                />
                {getFieldError("title") && (
                  <p class="mt-1 text-sm text-red-600">
                    {getFieldError("title")}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="redirectTime"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Redirect Time (seconds)
                </label>
                <input
                  id="redirectTime"
                  type="number"
                  min="0"
                  max="30"
                  class={`w-full px-3 py-2 border ${
                    getFieldError("redirectTime")
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onInput={(e) => {
                    setRedirectTime(
                      parseInt((e?.target as HTMLInputElement).value) || 0,
                    );
                  }}
                  value={redirectTime}
                />
                {getFieldError("redirectTime") && (
                  <p class="mt-1 text-sm text-red-600">
                    {getFieldError("redirectTime")}
                  </p>
                )}
                <p class="mt-1 text-sm text-gray-500">
                  How long to show the GIF before redirecting
                </p>
              </div>
            </div>

            <div class="mt-6">
              <button
                type="button"
                onClick={async () => {
                  // Validate form
                  const validationErrors = validateShortCodeForm({
                    url,
                    title,
                    redirectTime,
                    gif,
                  });
                  if (validationErrors.length > 0) {
                    setErrors(validationErrors);
                    return;
                  }

                  setErrors([]);
                  setIsSubmitting(true);

                  try {
                    const sanitizedUrl = sanitizeUrl(url);
                    const response = await fetch(`/api/shortCodes`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        url: sanitizedUrl,
                        title,
                        redirectTime,
                        gif: gif
                          ? {
                            id: gif.id,
                            title: gif.title,
                            url: gif.images.original.url,
                          }
                          : null,
                      }),
                    });

                    if (!response.ok) {
                      const errorData = await response.json();
                      if (response.status === 429) {
                        error(
                          "Too many requests. Please wait before creating another short URL.",
                        );
                      } else {
                        error(errorData.error || "Failed to create short code");
                      }
                      setIsSubmitting(false);
                      return;
                    }

                    const shortCode = await response.json();
                    const newShortUrl =
                      `${globalThis.location.origin}/${shortCode.id}`;
                    setSuccessUrl(newShortUrl);
                    success(`Short URL created successfully! ${newShortUrl}`);

                    // Reset form
                    setUrl("");
                    setTitle("");
                    setRedirectTime(5);
                    setGif(null);
                    setIsSubmitting(false);
                  } catch (_error) {
                    error("Failed to create short code. Please try again.");
                    setIsSubmitting(false);
                  }
                }}
                disabled={isSubmitting}
                class={`w-full py-4 px-6 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                }`}
              >
                {isSubmitting
                  ? <>⏳ Creating your short code...</>
                  : <>🎯 Create Short Code</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
