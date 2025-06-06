// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_shortCode_ from "./routes/[shortCode].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_giphy from "./routes/api/giphy.ts";
import * as $api_giphy_id_ from "./routes/api/giphy/[id].ts";
import * as $api_shortCodes from "./routes/api/shortCodes.ts";
import * as $api_shortCodes_id_ from "./routes/api/shortCodes/[id].ts";
import * as $dashboard from "./routes/dashboard.tsx";
import * as $index from "./routes/index.tsx";
import * as $new_short from "./routes/new/short.tsx";
import * as $Button from "./islands/Button.tsx";
import * as $DashboardComponent from "./islands/DashboardComponent.tsx";
import * as $GiphyComponent from "./islands/GiphyComponent.tsx";
import * as $GiphySearch from "./islands/GiphySearch.tsx";
import * as $NewShortCodeForm from "./islands/NewShortCodeForm.tsx";
import * as $RedirectingComponent from "./islands/RedirectingComponent.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[shortCode].tsx": $_shortCode_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/giphy.ts": $api_giphy,
    "./routes/api/giphy/[id].ts": $api_giphy_id_,
    "./routes/api/shortCodes.ts": $api_shortCodes,
    "./routes/api/shortCodes/[id].ts": $api_shortCodes_id_,
    "./routes/dashboard.tsx": $dashboard,
    "./routes/index.tsx": $index,
    "./routes/new/short.tsx": $new_short,
  },
  islands: {
    "./islands/Button.tsx": $Button,
    "./islands/DashboardComponent.tsx": $DashboardComponent,
    "./islands/GiphyComponent.tsx": $GiphyComponent,
    "./islands/GiphySearch.tsx": $GiphySearch,
    "./islands/NewShortCodeForm.tsx": $NewShortCodeForm,
    "./islands/RedirectingComponent.tsx": $RedirectingComponent,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
