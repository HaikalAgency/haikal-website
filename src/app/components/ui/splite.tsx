'use client'

import { Suspense, lazy, useRef, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isReset = useRef(false)

  useEffect(() => {
    // Helper to force the robot to look completely straight (stand up)
    const dispatchCenter = () => {
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const pointerEvent = new PointerEvent('pointermove', {
          clientX: centerX,
          clientY: centerY,
          bubbles: true,
          cancelable: true,
          pointerId: 1,
          pointerType: 'mouse',
          isPrimary: true,
        });
        
        Object.defineProperty(pointerEvent, 'offsetX', { get: () => rect.width / 2 });
        Object.defineProperty(pointerEvent, 'offsetY', { get: () => rect.height / 2 });
        canvas.dispatchEvent(pointerEvent);
      }
    };

    const dispatchPointerMove = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      
      // If user scrolls past 60% of the screen height, freeze the robot in a standing up position
      if (window.scrollY > window.innerHeight * 0.6) {
        if (!isReset.current) {
          dispatchCenter();
          isReset.current = true;
        }
        return;
      }

      // We are back in the hero section
      isReset.current = false;

      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        
        const pointerEvent = new PointerEvent('pointermove', {
          clientX,
          clientY,
          bubbles: true,
          cancelable: true,
          pointerId: 1,
          pointerType: 'mouse',
          isPrimary: true,
        });
        
        Object.defineProperty(pointerEvent, 'offsetX', { get: () => clientX - rect.left });
        Object.defineProperty(pointerEvent, 'offsetY', { get: () => clientY - rect.top });
        canvas.dispatchEvent(pointerEvent);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const canvas = containerRef.current?.querySelector('canvas');
      // Only proxy the event if we aren't hovering directly over the canvas
      if (canvas && e.target !== canvas) {
        dispatchPointerMove(e.clientX, e.clientY);
      }
    };

    const handleScroll = () => {
      // Force stand-up if they just scrolled down past the hero without moving the mouse
      if (window.scrollY > window.innerHeight * 0.6) {
        if (!isReset.current) {
          dispatchCenter();
          isReset.current = true;
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div ref={containerRef} className={className}>
        <Spline
          scene={scene}
          className="w-full h-full"
        />
      </div>
    </Suspense>
  )
}
