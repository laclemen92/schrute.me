import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";
import { GiphyFetch } from "@giphy/js-fetch-api";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const gifId = ctx.params.id;

    const GIPHY_API_KEY = Deno.env.get("GIPHY_API_KEY");
    if (!GIPHY_API_KEY) {
      return Response.json(
        { error: "GIPHY API key not configured" },
        { status: STATUS_CODE.InternalServerError },
      );
    }

    try {
      const giphyFetch = new GiphyFetch(GIPHY_API_KEY);
      const { data } = await giphyFetch.gif(gifId);

      return Response.json({ data });
    } catch (_error) {
      return Response.json(
        { error: "Failed to fetch GIF" },
        { status: STATUS_CODE.InternalServerError },
      );
    }
  },
};
