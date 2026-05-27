import { useEffect, useRef, useState } from "react";

/**
 * useInView — fires once when the element enters the viewport.
 * @param {number} threshold  - 0 to 1, fraction of element visible before firing
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only fire once
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
