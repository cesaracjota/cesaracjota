import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** 'up' (default), 'fade', 'scale' */
  variant?: 'up' | 'fade' | 'scale';
}

const variants = {
  up: {
    hidden:  { opacity: 0, y: 18, filter: 'blur(1px)' },
    visible: { opacity: 1, y: 0,  filter: 'blur(0px)' },
  },
  fade: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden:  { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Reveal — GPU-accelerated scroll-triggered animation.
 * Uses Framer Motion's useInView with a generous negative margin
 * so elements reveal slightly before they enter the viewport
 * (cinematic, not aggressive).
 */
export default function Reveal({ children, className, delay = 0, variant = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // amount: 0 = trigger as soon as 1px enters viewport.
  // margin: negative = pre-trigger before entry — feels smooth/anticipatory.
  const isInView = useInView(ref, { once: true, amount: 0, margin: '-40px 0px -40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration: 0.55,
        delay: delay * 0.07,
        ease: [0.22, 1, 0.36, 1], // Apple-style spring-like easing (ease out expo)
      }}
      style={{ willChange: 'transform, opacity' }}
      className={cn('block', className)}
    >
      {children}
    </motion.div>
  );
}
