import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  icon?: React.ElementType;
  suffix?: string;
  isStatic?: boolean;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix = '',
  delay = 0,
  isStatic = false, // add this
}: {
  icon?: React.ElementType;
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
  isStatic?: boolean;
}) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const hasPlus = value.includes('+') || suffix === '+';
  const hasPercent = value.includes('%') || suffix === '%';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-4">
          <Icon className="w-6 h-6 text-trees-primary" />
        </div>
      )}

      {/* Animated Value */}
     {/* Animated or Static Value */}
<div className="text-5xl font-bold mb-2 flex items-baseline gap-1">
  {isStatic ? (
    <span>{value}</span>
  ) : (
    <>
      <AnimatedCounter value={numericValue} suffix="" />
      {hasPlus && <span className="text-4xl font-bold">+</span>}
      {hasPercent && <span className="text-4xl font-bold">%</span>}
    </>
  )}
</div>


      {/* Label */}
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
       <StatCard
  key={index}
  icon={stat.icon || Award}
  value={stat.value}
  label={stat.label}
  suffix={stat.suffix}
  delay={index * 0.1}
  isStatic={stat.isStatic}
/>

      ))}
    </section>
  );
}
