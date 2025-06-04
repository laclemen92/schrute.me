import { Handlers, PageProps } from "$fresh/server.ts";
import type { SignedInState } from "@/plugins/session.ts";

export const handler: Handlers<undefined, SignedInState> = {
  GET(_req, ctx) {
    return ctx.render();
  },
};

export default function Home({ state }: PageProps<undefined, SignedInState>) {
  return (
    <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div class="px-4 py-16 mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div class="mb-12">
            <img
              class="mx-auto mb-8 rounded-full border-4 border-yellow-400 shadow-lg"
              src="/dwight.png"
              width="160"
              height="160"
              alt="Dwight Schrute"
            />
            <h1 class="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to <span class="text-yellow-600">Schrute.Me</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Generate short URLs with{" "}
              <strong>Office-themed GIFs</strong>! Are you an Office fanatic who
              wants to send links to friends with a fun GIF before they get
              there? Then this is for you!
            </p>
          </div>

          {/* Features */}
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-3xl mb-4">🎬</div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Office GIFs
              </h3>
              <p class="text-gray-600">
                Choose from hundreds of hilarious Office GIFs to entertain your
                friends
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-3xl mb-4">⚡</div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Quick & Easy
              </h3>
              <p class="text-gray-600">
                Create short URLs in seconds with our simple, user-friendly
                interface
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="text-3xl mb-4">🔗</div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Custom Timer
              </h3>
              <p class="text-gray-600">
                Set how long the GIF plays before redirecting to your
                destination
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div class="space-y-4">
            {state?.sessionUser ? (
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/dashboard"
                  class="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <span class="mr-2">📊</span>
                  View Dashboard
                </a>
                <a
                  href="/new/short"
                  class="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <span class="mr-2">🎯</span>
                  Create New Short URL
                </a>
              </div>
            ) : (
              <a
                href="/new/short"
                class="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <span class="mr-2">🎯</span>
                Create New Short URL
              </a>
            )}
            <p class="text-sm text-gray-500 mt-4">
              That's what she said! - Michael Scott
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
