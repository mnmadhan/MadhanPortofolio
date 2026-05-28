import { useEffect, useRef, useState } from "react";

/**
 * useInView — triggers once when element enters viewport.
 * Fixed: uses rootMargin instead of threshold alone so staggered
 * children animate individually, not all at once.
 */
export function useInView(threshold = 0.1, rootMargin = "0px 0px -60px 0px") {
  const ref    = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
