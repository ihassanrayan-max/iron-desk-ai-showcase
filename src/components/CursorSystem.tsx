import { useCursor } from '@/hooks/useCursor';
import { useScrollProgress } from '@/hooks/useScrollReveal';

const CursorSystem = () => {
  const { cursorRef, cursorTrailRef } = useCursor();
  useScrollProgress();

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorTrailRef} className="cursor-trail" />
      <div className="page-background" />
      <div className="scroll-progress">
        <div className="scroll-progress-bar" />
      </div>
    </>
  );
};

export default CursorSystem;