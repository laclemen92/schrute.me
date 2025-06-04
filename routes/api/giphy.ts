import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";
import { GiphyFetch } from "@giphy/js-fetch-api";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const limit = parseInt(url.searchParams.get("limit") || "9");

    const GIPHY_API_KEY = Deno.env.get("GIPHY_API_KEY");
    if (!GIPHY_API_KEY) {
      return Response.json(
        { error: "GIPHY API key not configured" },
        { status: STATUS_CODE.InternalServerError },
      );
    }

    try {
      const giphyFetch = new GiphyFetch(GIPHY_API_KEY);
      const { data } = await giphyFetch.search(`@theoffice ${query}`, {
        limit: Math.min(limit, 25), // Cap at 25 to prevent abuse
      });

      return Response.json({ data });
    } catch (_error) {
      return Response.json(
        { error: "Failed to fetch GIFs" },
        { status: STATUS_CODE.InternalServerError },
      );
    }
  },
};
