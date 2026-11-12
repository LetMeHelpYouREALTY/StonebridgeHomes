import { component$ } from '@builder.io/qwik';
import { FAQS } from '~/config/site';

export const FaqSection = component$(() => {
  return (
    <section class="faq-section" id="faq">
      <div class="container-max">
        <div class="section-intro">
          <p class="section-kicker">Stonebridge answers</p>
          <h2>Questions buyers ask first</h2>
        </div>
        <div class="faq-list">
          {FAQS.map((faq) => (
            <details key={faq.question} class="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});
