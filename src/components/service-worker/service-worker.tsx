import { component$ } from '@builder.io/qwik';

export const ServiceWorkerRegister = component$(() => {
  return (
    <script
      dangerouslySetInnerHTML={`
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
              .then(function(registration) {
                console.log('SW registered: ', registration);
              })
              .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
              });
          });
        }
      `}
    />
  );
});

