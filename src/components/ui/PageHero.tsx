import { component$, Slot } from '@builder.io/qwik';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Pass true on the homepage to render a full-height hero. */
  tall?: boolean;
};

export const PageHero = component$<Props>(({ eyebrow, title, intro, image, imageAlt, tall }) => {
  return (
    <section class={`hero-media flex items-end ${tall ? 'min-h-[88vh] py-24 md:py-32' : 'min-h-[60vh] py-20 md:py-28'}`}>
      <picture>
        <source srcset={`/images/${image}-960.webp 960w, /images/${image}.webp 1600w`} type="image/webp" />
        <img
          src={`/images/${image}.jpg`}
          srcset={`/images/${image}-960.jpg 960w, /images/${image}.jpg 1600w`}
          sizes="100vw"
          alt={imageAlt}
          width="1600"
          height="893"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div class="container-max relative w-full">
        <p class="eyebrow text-stone-gold">{eyebrow}</p>
        <h1
          class={`mt-5 max-w-4xl font-serif font-semibold leading-[1.05] text-white ${
            tall ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'
          }`}
        >
          {title}
        </h1>
        <div class="rule-gold mt-7" />
        <p class="mt-6 max-w-2xl text-lg leading-8 text-stone-sand/90 md:text-xl">{intro}</p>
        <div class="mt-9 flex flex-wrap gap-3">
          <Slot />
        </div>
      </div>
    </section>
  );
});
