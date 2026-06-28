import { useState, useEffect } from 'react';

const useScrollReveal = (ref, options = {}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isRevealed;
};

export default useScrollReveal;
