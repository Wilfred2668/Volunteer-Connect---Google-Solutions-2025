'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

export default function CountUp({ end, duration = 2000, className = '' }: CountUpProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || !countRef.current) return;

    const start = 0;
    const increment = end / (duration / 16); // 60fps
    let current = start;

    const updateCount = () => {
      current += increment;
      if (current < end) {
        countRef.current!.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        countRef.current!.textContent = end.toLocaleString();
      }
    };

    updateCount();
  }, [end, duration, inView]);

  return <span ref={ref} className={className}><span ref={countRef}>0</span></span>;
} 