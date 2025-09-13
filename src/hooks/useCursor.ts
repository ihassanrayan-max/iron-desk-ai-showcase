import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;
    
    if (!cursor || !cursorTrail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const updateCursor = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      // Even smoother trail
      trailX += (mouseX - trailX) * 0.05;
      trailY += (mouseY - trailY) * 0.05;

      cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
      cursorTrail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;

      // Update CSS custom properties for cursor gradient
      document.documentElement.style.setProperty('--cursor-x', `${(mouseX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--cursor-y', `${(mouseY / window.innerHeight) * 100}%`);

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        cursor.style.transform += ' scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return { cursorRef, cursorTrailRef };
};