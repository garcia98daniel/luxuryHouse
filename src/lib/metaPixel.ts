// Meta Pixel Configuration
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const initMetaPixel = () => {
  if (typeof window === 'undefined' || !META_PIXEL_ID) return;
  if (window.fbq) return;

  (function (f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
    n = f.fbq = function (...args: any[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];

    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
    return true;
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
};

export const trackMetaPixelEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq && META_PIXEL_ID) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackMetaPixelCustomEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq && META_PIXEL_ID) {
    window.fbq('trackCustom', eventName, parameters);
  }
};