/** @format */

import ResizeObserver from 'resize-observer-polyfill';
import { useState, useLayoutEffect } from 'react';
import { useCallbackRef } from './use-callback-ref';

export function useMeasure() {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState({});

  useLayoutEffect(() => {
    function onResize(entries: ResizeObserverEntry[]) {
      if (entries.length > 0) {
        const entry = entries[0];
        setBounds({
          height: entry.contentRect.height,
          width: entry.contentRect.width,
        });
      }
    }

    const observer = new ResizeObserver(onResize);
    if (element) {
      observer.observe(element as unknown as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    bounds,
    ref: attachRef,
  };
}
