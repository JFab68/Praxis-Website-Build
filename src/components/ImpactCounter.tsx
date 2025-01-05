import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const ImpactCounter = ({ end, duration = 2000, label, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-xl font-bold text-white mb-2" aria-live="polite">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-gray-200">{label}</div>
    </div>
  );
};

export default ImpactCounter;