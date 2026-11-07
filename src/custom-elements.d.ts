import type { QwikIntrinsicElements } from '@builder.io/qwik';

type RealScoutAttrs = QwikIntrinsicElements['div'] & {
  'agent-encoded-id'?: string;
  'sort-order'?: string;
  'listing-status'?: string;
  'property-types'?: string;
  'price-min'?: string;
  'price-max'?: string;
  'include-name'?: boolean;
  'include-phone'?: boolean;
};

declare module '@builder.io/qwik' {
  namespace QwikJSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutAttrs;
      'realscout-home-value': RealScoutAttrs;
    }
  }
}
