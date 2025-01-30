import { type Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";
import type { SignedInState } from "@/plugins/session.ts";
import { ShortCodeService } from "@/services/ShortCodeService.ts";
import { BadRequestError } from "@/utils/http.ts";

export const handler: Handlers<undefined, SignedInState> = {
  async POST(req, ctx) {
    const body = await req.json();
    // if (!body.id) {
    //   throw new BadRequestError("Id is required");
    // }

    const shortCode = {
      userLogin: ctx?.state?.sessionUser?.login || '',
      url: body.url,
      title: body.title,
      redirectTime: body.redirectTime,
      // id: makeShortCode(),
      gif: body.gif,
    };

    const shortCodeService = new ShortCodeService();
    const result = await shortCodeService.createShortCode(shortCode);

    return Response.json(result, { status: STATUS_CODE.Created });
  },

  // async GET(req) {
  //   const body = await req.json();

  //   const shortCodeService = new ShortCodeService();
  //   const result = await shortCodeService.getShortCode(body.id);

  //   return Response.json(result, { status: STATUS_CODE.OK });
  // }
};
