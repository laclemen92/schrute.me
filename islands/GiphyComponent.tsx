import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "preact/hooks";

export default function GiphyComponent({ gifId, index = '0', onClick = (e) => {} }: { gifId: string; index?: string; onClick?: (e: Event) => void; }) {
  const [gif, setGif] = useState(null as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const GIPHY_API_KEY = '2c3ZO2E9gRO4m8IWuBXmQJWc6DmiXVqb';
  const giphyFetch = new GiphyFetch(GIPHY_API_KEY);


  const fetchGifById = async () => {
    setLoading(true);
    try {
      const { data } = await giphyFetch.gif(gifId);

      setGif(data);
    } catch (err) {
      setError('Failed to fetch GIF');
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div>
      {gif ? (
        <div class="border border-gray-300/70 hover:border-gray-900 hover:bg-gray-50 bg-white rounded-lg shadow-md shadow-gray-400/20 overflow-hidden">
          <img onClick={onClick} id={index} src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ) : (
        <p>No GIF found</p>
      )}
    </div>
  );

}
