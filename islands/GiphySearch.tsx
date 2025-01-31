import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "preact/hooks";
import GiphyComponent from "@/islands/GiphyComponent.tsx";

type selectedGif = {
  index: string | null;
  gifId: string | null;
  gif: any;
}

export default function GiphySearch({ defaultSearch = '', onChangeGif, apiKey }: { defaultSearch: string; onChangeGif: (gif: any) => void; apiKey: string; }) {
  const [gifs, setGifs] = useState(null as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(defaultSearch);
  const [selectedGif, setSelectedGif] = useState({index: null, gifId: null, gif: null} as selectedGif);

  const giphyFetch = new GiphyFetch(apiKey);


  const fetchGifByTerm = async () => {
    const MAX_SIZE = 9;
    setLoading(true);
    try {
      let { data } = await giphyFetch.search(`@theoffice ${search}`, {
        // rating: 'pg-13',
        limit: MAX_SIZE,
      });
      // const index = Math.floor(Math.random() * Math.min(MAX_SIZE, data.length));

      // if (data.length < MAX_SIZE) {
      //  const { data: nonOfficeData } = await giphyFetch.search(`${search}`, {
      //     // rating: 'pg-13',
      //     limit: MAX_SIZE,
      //   });

      //   console.error('here');

      //   data = data.concat(nonOfficeData);
      // }

      setGifs(data);
    } catch (err) {
      setError('Failed to fetch GIF');
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div>
      {!selectedGif.gifId ? (
        <div>
      <input onChange={(e) => { const value = (e?.target as HTMLInputElement).value; console.error(value); setSearch(value);}}>Gif Search</input><br /><br />
      {gifs ? gifs.map((gif: any, key: any) => (
        <GiphyComponent onClick={(e) => {
          const index = (e?.target as HTMLInputElement)?.id;
          console.error(index);
          console.error({gifs});
          setSelectedGif({ index, gifId: gifs[index].id, gif: gifs[index] });
          onChangeGif(gifs[index]);
        }} 
        index={key}
        gifId={gif.id}
        apiKey={apiKey}
        />
      )) : (
        <p>No GIF found</p>
      )}
      </div>
    ) : (<div>
      <GiphyComponent gifId={selectedGif.gifId} apiKey={apiKey}/>
      <button onClick={(e) => {
        setSelectedGif({index: null, gifId: null, gif: null});
        onChangeGif(null)
        setSearch("");
      }}>Cancel</button>
    </div>)}
    </div>
  );

}
