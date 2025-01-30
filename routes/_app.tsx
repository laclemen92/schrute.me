import { defineApp } from "$fresh/server.ts";
import type { State } from "@/plugins/session.ts";
import { Header } from "@/components/Header.tsx";

export default defineApp<State>((_, ctx) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-url-shortener</title>
        <link rel="stylesheet" href="/styles.css" />
        <script
          defer
          async
          src="https://unpkg.com/flowbite@1.7.0/dist/flowbite.min.js"
        >
        </script>
      </head>
      <body>
      <div class="bg-white min-h-screen flex flex-col">
          <Header url={ctx.url} sessionUser={ctx.state?.sessionUser} />
          <div class="flex flex-row md:mx-8 mx-4 pt-8 pb-20 flex-auto flex-grow min-h-0">
            <div class="flex flex-col flex-1 gap-3 grow max-w-full">
              <ctx.Component />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
});
