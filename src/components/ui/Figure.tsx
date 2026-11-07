import { component$ } from '@builder.io/qwik';

type Props = {
  /** Basename in public/images, without extension. */
  name: string;
  alt: string;
  caption?: string;
  /** Rendered width hint for srcset selection. */
  sizes?: string;
  class?: string;
  priority?: boolean;
};

/** Responsive photo with WebP + JPEG sources at 1600px and 960px. */
export const Figure = component$<Props>(
  ({ name, alt, caption, sizes = '(min-width: 1024px) 50vw, 100vw', class: cls = '', priority = false }) => {
    return (
      <figure class={`card ${cls}`}>
        <picture>
          <source srcset={`/images/${name}-960.webp 960w, /images/${name}.webp 1600w`} type="image/webp" />
          <img
            src={`/images/${name}.jpg`}
            srcset={`/images/${name}-960.jpg 960w, /images/${name}.jpg 1600w`}
            sizes={sizes}
            alt={alt}
            width="1600"
            height="893"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            class="aspect-[16/9] w-full object-cover"
          />
        </picture>
        {caption && <figcaption class="px-5 py-3 text-sm text-stone-mist">{caption}</figcaption>}
      </figure>
    );
  },
);

type StripProps = { items: { name: string; alt: string; caption?: string }[] };

/** Three-up (or two-up) row of photos under a section heading. */
export const PhotoStrip = component$<StripProps>(({ items }) => {
  return (
    <div class={`mt-8 grid gap-6 ${items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {items.map((it) => (
        <Figure key={it.name} name={it.name} alt={it.alt} caption={it.caption} sizes="(min-width: 768px) 33vw, 100vw" />
      ))}
    </div>
  );
});
