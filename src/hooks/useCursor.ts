import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;
    const cursorGlow = cursorGlowRef.current;
    
    if (!cursor || !cursorTrail || !cursorGlow) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;
    let glowX = 0;
    let glowY = 0;

    const updateCursor = () => {
      // Smooth cursor movement with different easing for each element
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;

      glowX += (mouseX - glowX) * 0.04;
      glowY += (mouseY - glowY) * 0.04;

      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      cursorTrail.style.transform = `translate(${trailX - 6}px, ${trailY - 6}px)`;
      cursorGlow.style.transform = `translate(${glowX - 40}px, ${glowY - 40}px)`;

      // Update CSS custom properties for background effects
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
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        cursor.style.transform += ' scale(1.8)';
        cursor.style.opacity = '1';
        cursorGlow.style.opacity = '0.3';
      }
    };

    const handleMouseLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.8)', '');
      cursor.style.opacity = '0.8';
      cursorGlow.style.opacity = '0.1';
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

  return { cursorRef, cursorTrailRef, cursorGlowRef };
};