import IconUserCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user-circle.tsx";

interface AvatarProps {
  login?: string | null;
  src?: string;
  alt?: string;
  size: number;
  class?: string;
}

export function Avatar(
  { size, class: className, src, alt }: AvatarProps,
) {
  return (
    <>
      {src
        ? (
          <img
            height={size}
            width={size}
            src={src}
            alt={alt}
            class={`rounded-full inline-block aspect-square size-[${size}px] ${
              className ?? ""
            }`}
            crossOrigin="anonymous"
            loading="lazy"
          />
        )
        : (
          <IconUserCircle
            class={`h-10 w-10`}
            stroke={1.5}
          />
        )}
    </>
  );
}
