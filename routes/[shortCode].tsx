import { Handlers, PageProps } from "$fresh/server.ts";
import GiphyComponent from "@/islands/GiphyComponent.tsx";
import { SignedInState } from "@/plugins/session.ts";
import type { ShortCode } from "@/models/ShortCode.ts";
import { ShortCodeService } from "@/services/ShortCodeService.ts";
import Error404 from "@/routes/_404.tsx";
import RedirectingComponent from "@/islands/RedirectingComponent.tsx";

interface Page {
  shortCode: ShortCode;
}

export const handler: Handlers<Page, SignedInState> = {
  async GET(_req, ctx) {
    const id = ctx.params.shortCode;
    const shortCodeService = new ShortCodeService();
    const shortCode = await shortCodeService.getShortCode(id);

    if (shortCode) {
      return ctx.render({
        shortCode,
      });
    }

    return ctx.render(undefined);
  },
};

export default function DisplayShortCode({ data }: PageProps<Page | null>) {
  if (!data) {
    return <Error404 />;
  }

  return (
    <div>
      <h1>{data.shortCode.title}</h1>
      <a href={data.shortCode.url}>
        <img src={data.shortCode.gif.url} alt={data.shortCode.gif.title} />
      </a>
      <RedirectingComponent startTime={data.shortCode.redirectTime || 5} location={data.shortCode.url} />
    </div>
  );
}
