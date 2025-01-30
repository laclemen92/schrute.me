import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "preact/hooks";
import GiphySearch from "@/islands/GiphySearch.tsx";

export default function NewShortCodeForm() {
  const [gif, setGif] = useState(null as any);
  // const [shortCode, setShortCode] = useState();
  const [ url, setUrl ] = useState('');
  const [title, setTitle] = useState('');
  const [redirectTime, setRedirectTime] = useState(0);



  return (
    <div>
      <h1 class="text-4xl font-bold">Let's make you a short code</h1>
        <h3></h3>
        <div>
          {/* <GiphyComponent gifId="fpXxIjftmkk9y" /> */}
          <GiphySearch defaultSearch="michael" onChangeGif={(gif: any) => { setGif(gif) }} />
          <div>
            <label htmlFor="url">Url:</label>
            <input id="url" onKeyUp={(e) => { setUrl((e?.target as HTMLInputElement).value) }} />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" onKeyUp={(e) => { setTitle((e?.target as HTMLInputElement).value) }} />
          </div>
          <div>
            <label htmlFor="redirectTime">Redirect Time:</label>
            <input id="redirectTime" onKeyUp={(e) => { setRedirectTime(parseInt((e?.target as HTMLInputElement).value)) }} />
          </div>
          <button onClick={async () => {

            const response = await fetch(`/api/shortCodes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ url, title, redirectTime, gif: { id: gif.id, title: gif.title, url: gif.images.fixed_height.url }})
            });

            const shortCode = await response.json();

            globalThis.location.href = `/${shortCode.id}`;
          }}>submit</button>
        </div>
    </div>
  );
}
