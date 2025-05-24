import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const [everInView, setEverInView] = useState(false); // 新增

  useEffect(() => {
    if (!ref.current) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        if (entry.isIntersecting) {
          if (currentScrollY > lastScrollY.current) {
            setShouldAnimate(true);
          } else {
            setShouldAnimate(false);
          }
          setInView(true);
          setEverInView(true); // 只要進入過就設為 true
        }
        lastScrollY.current = currentScrollY;
      },
      options
    );
    observer.observe(ref.current);

    lastScrollY.current = window.scrollY;

    return () => {
      observer.disconnect();
    };
  }, [options]);

  // everInView 代表進入過視窗就一直顯示
  return [ref, inView, shouldAnimate, everInView] as const;
}