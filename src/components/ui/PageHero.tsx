import { component$, Slot } from '@builder.io/qwik';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Pass true on the homepage to render a taller hero. */
  tall?: boolean;
};

export const PageHero = component$<Props>(({ eyebrow, title, intro, image, imageAlt, tall }) => {
  return (
    <section class={`hero-media ${tall ? 'py-24 md:py-36' : 'py-16 md:py-24'}`}>
      <picture>
        <source srcset={`/images/${image}-960.webp 960w, /images/${image}.webp 1600w`} type="image/webp" />
        <img
          src={`/images/${image}.jpg`}
          srcset={`/images/${image}-960.jpg 960w, /images/${image}.jpg 1600w`}
          sizes="100vw"
          alt={imageAlt}
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div class="container-max relative">
        <p class="eyebrow text-stone-gold">{eyebrow}</p>
        <h1 class={`mt-3 max-w-4xl font-serif font-bold text-white ${tall ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>
          {title}
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-stone-sand md:text-xl">{intro}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Slot />
        </div>
      </div>
    </section>
  );
});
