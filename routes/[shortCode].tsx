import { Handlers, PageProps } from "$fresh/server.ts";
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
      // Track the click (fire and forget)
      shortCodeService.incrementClickCount(id).catch(console.error);
      
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
    <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex flex-col items-center justify-center p-4">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
          {data.shortCode.title}
        </h1>
        
        {/* GIF Container */}
        <div class="flex justify-center mb-8">
          <div class="max-w-lg w-full bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <img 
              src={data.shortCode.gif.url} 
              alt={data.shortCode.gif.title}
              class="w-full h-auto rounded-lg"
              style="max-height: 400px; object-fit: contain;"
            />
          </div>
        </div>
        
        {/* Redirect Component */}
        <div class="w-full max-w-md mx-auto">
          <RedirectingComponent
            startTime={data.shortCode.redirectTime || 5}
            location={data.shortCode.url}
          />
        </div>
      </div>
    </div>
  );
}
