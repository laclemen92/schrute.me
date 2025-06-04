import { useEffect, useState } from "preact/hooks";
import GiphyComponent from "@/islands/GiphyComponent.tsx";
import type { GiphyGif } from "@/types/giphy.ts";
import Spinner from "@/components/Spinner.tsx";

type selectedGif = {
  index: string | null;
  gifId: string | null;
  gif: GiphyGif | null;
};

export default function GiphySearch(
  { defaultSearch = "", onChangeGif }: {
    defaultSearch: string;
    onChangeGif: (gif: GiphyGif | null) => void;
  },
) {
  const [gifs, setGifs] = useState<GiphyGif[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(defaultSearch);
  const [selectedGif, setSelectedGif] = useState(
    { index: null, gifId: null, gif: null } as selectedGif,
  );

  const fetchGifByTerm = async () => {
    const MAX_SIZE = 9;
    setLoading(true);
    try {
      const response = await fetch(
        `/api/giphy?q=${encodeURIComponent(search)}&limit=${MAX_SIZE}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch GIFs");
      }
      const { data } = await response.json();
      setGifs(data);
    } catch (_err) {
      setError("Failed to fetch GIF");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      fetchGifByTerm();
    }
  }, [search]);

  if (loading) {
    return (
      <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <Spinner size="lg" className="mr-3" />
        <span class="text-gray-600 text-lg">Searching for Office GIFs...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-600">{error}</p>
        <button
          type="button"
          onClick={() => fetchGifByTerm()}
          class="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {!selectedGif.gifId
        ? (
          <div>
            <div class="relative mb-6">
              <input
                type="text"
                placeholder="Search for Office GIFs (e.g., michael, dwight, jim)..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg pr-12"
                onChange={(e) => {
                  const value = (e?.target as HTMLInputElement).value;
                  setSearch(value);
                }}
                value={search}
              />
              {loading && (
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Spinner size="sm" />
                </div>
              )}
            </div>

            {gifs.length > 0
              ? (
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gifs.map((gif: GiphyGif, key: number) => (
                    <GiphyComponent
                      key={gif.id}
                      onClick={(e) => {
                        const indexStr = (e?.target as HTMLInputElement)?.id;
                        const index = parseInt(indexStr, 10);
                        if (!isNaN(index) && gifs[index]) {
                          setSelectedGif({
                            index: indexStr,
                            gifId: gifs[index].id,
                            gif: gifs[index],
                          });
                          onChangeGif(gifs[index]);
                        }
                      }}
                      index={key.toString()}
                      gifId={gif.id}
                    />
                  ))}
                </div>
              )
              : !loading && (
                <div class="text-center py-8">
                  <p class="text-gray-500 mb-4">
                    No Office GIFs found for "{search}"
                  </p>
                  <p class="text-sm text-gray-400">
                    Try searching for "michael", "dwight", "jim", or "pam"
                  </p>
                </div>
              )}
          </div>
        )
        : (
          <div class="text-center">
            <div class="mb-4">
              <p class="text-lg font-semibold text-gray-700 mb-3">
                Selected GIF:
              </p>
              <div class="max-w-sm mx-auto">
                <GiphyComponent gifId={selectedGif.gifId} />
              </div>
            </div>
            <button
              type="button"
              onClick={(_e) => {
                setSelectedGif({ index: null, gifId: null, gif: null });
                onChangeGif(null);
                setSearch("");
              }}
              class="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              Choose Different GIF
            </button>
          </div>
        )}
    </div>
  );
}
