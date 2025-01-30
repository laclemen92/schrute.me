import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/dwight.png"
          width="128"
          height="128"
          alt="a stern looking schrute"
        />
        <h1 class="text-4xl font-bold">Welcome to Schrute.Me</h1>
        <h3>This is an awesome place where you can generate short url with an office themed gif! Are you also an office fanatic and want to send a link to a friend but with a fun gif before they get there?? Then this is for you!</h3>
        {/* <Counter count={count} /> */}
        <a href="/new/short">New URL</a>
      </div>
    </div>
  );
}
