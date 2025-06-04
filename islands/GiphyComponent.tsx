import { useEffect, useState } from "preact/hooks";
import type { GiphyGif } from "@/types/giphy.ts";
import Spinner from "@/components/Spinner.tsx";

export default function GiphyComponent(
  { gifId, index = "0", onClick = (_e) => {} }: {
    gifId: string;
    index?: string;
    onClick?: (e: Event) => void;
  },
) {
  const [gif, setGif] = useState<GiphyGif | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchGifById = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/giphy/${gifId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch GIF");
      }
      const { data } = await response.json();
      setGif(data);
    } catch (_err) {
      setError("Failed to fetch GIF");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gifId) {
      fetchGifById();
    }
  }, [gifId]);

  if (loading) {
    return (
      <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <Spinner size="md" className="mr-2" />
        <span class="text-gray-600">Loading GIF...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div class="w-full">
      {gif
        ? (
          <div class="border border-gray-300/70 hover:border-blue-400 hover:shadow-lg bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105">
            <img
              onClick={onClick}
              id={index}
              src={gif.images.fixed_width.url}
              alt={gif.title}
              class="w-full h-40 object-cover"
            />
            <div class="p-2 bg-white">
              <p
                class="text-xs text-gray-600 text-center truncate"
                title={gif.title}
              >
                {gif.title}
              </p>
            </div>
          </div>
        )
        : <p>No GIF found</p>}
    </div>
  );
}
