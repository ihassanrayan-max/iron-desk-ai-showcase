import { useCursor } from '@/hooks/useCursor';
import { useScrollProgress } from '@/hooks/useScrollReveal';

const CursorSystem = () => {
  const { cursorRef, cursorTrailRef, cursorGlowRef } = useCursor();
  useScrollProgress();

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorTrailRef} className="cursor-trail" />
      <div ref={cursorGlowRef} className="cursor-glow" />
      <div className="page-background" />
      <div className="scroll-progress">
        <div className="scroll-progress-bar" />
      </div>
      
      {/* Floating orbs for ambient animation */}
      <div className="floating-orb" style={{
        width: '300px',
        height: '300px',
        top: '10%',
        right: '5%',
        animationDelay: '0s'
      }} />
      <div className="floating-orb" style={{
        width: '200px', 
        height: '200px',
        bottom: '20%',
        left: '8%',
        animationDelay: '3s'
      }} />
      <div className="floating-orb" style={{
        width: '150px',
        height: '150px', 
        top: '60%',
        right: '15%',
        animationDelay: '6s'
      }} />
    </>
  );
};

export default CursorSystem;