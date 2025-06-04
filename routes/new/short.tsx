import NewShortCodeForm from "@/islands/NewShortCodeForm.tsx";

export default function Short() {
  // so let's let them search for a gif or click on "see what's popular" where we just use the trending ones
  // in the office channel if that's possible? or just an empty search?

  // also let them add the url we are re-routing to.
  // on submit we create the shortcode.. probably just 26 + 26 + 10 for now. so how many combos can I do
  // 26 + 26 + 10 means 62 possible. do we exclude similar characters tho? like no I, l, 1?
  // anyway 62 * 62 * 62 etc are permutations so 62, 3844, 238328, 14776336 for 4 characters.
  // so I think schrute.me/abcd will be good. gives 14 million possible permutations with allowing all 62 chars
  // even if we only allow 50 characters then still 6.25 million

  // maybe give it a title?
  // i also want a lisit page where I can see the ones I've created

  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <NewShortCodeForm />
      </div>
    </div>
  );
}
