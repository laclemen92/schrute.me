import { Handlers, PageProps } from "$fresh/server.ts";
import { SignedInState } from "@/plugins/session.ts";
import { ShortCodeService } from "@/services/ShortCodeService.ts";
import type { ShortCode } from "@/models/ShortCode.ts";
import DashboardComponent from "@/islands/DashboardComponent.tsx";

interface DashboardData {
  shortCodes: ShortCode[];
  user: {
    login: string;
    name: string;
  };
}

export const handler: Handlers<DashboardData, SignedInState> = {
  async GET(_req, ctx) {
    // Redirect if not signed in
    if (!ctx.state.sessionUser) {
      return new Response("", {
        status: 302,
        headers: { Location: "/signin" },
      });
    }

    const shortCodeService = new ShortCodeService();
    const shortCodes = await shortCodeService.getUserShortCodes(
      ctx.state.sessionUser.login,
    );

    return ctx.render({
      shortCodes,
      user: ctx.state.sessionUser,
    });
  },
};

export default function Dashboard({ data }: PageProps<DashboardData>) {
  return (
    <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div class="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div class="text-center mb-8">
          <h1 class="text-5xl font-bold mb-4 text-gray-800">
            <span class="text-yellow-600">Schrute.Me</span> Dashboard
          </h1>
          <p class="text-lg text-gray-600">
            Welcome back, <strong>{data.user.name}</strong>! Here are your short URLs.
          </p>
        </div>

        {/* Quick Actions */}
        <div class="mb-8 text-center">
          <a
            href="/new/short"
            class="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <span class="mr-2">🎯</span>
            Create New Short URL
          </a>
        </div>

        {/* Dashboard Component */}
        <DashboardComponent shortCodes={data.shortCodes} />
      </div>
    </div>
  );
}