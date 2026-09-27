import { component$ } from '@builder.io/qwik';

export const StructuredData = component$((props: { data: unknown }) => {
  const json = JSON.stringify(props.data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={json}
    />
  );
});

