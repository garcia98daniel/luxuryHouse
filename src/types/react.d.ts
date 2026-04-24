import { JSX } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
    property: any;
  }
  }
}
