import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
        }
      },
      { threshold, rootMargin }
    );

    element.classList.add('scroll-reveal');
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
};

export const useScrollProgress = () => {
  useEffect(() => {
    const progressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
};