import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ModernSectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function ModernSectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}: ModernSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} gap-2 mb-16 ${className}`}>
  {badge && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trees-primary/10 text-trees-primary font-semibold text-sm"
    >
      {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
      <span>{badge}</span>
    </motion.div>
  )}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} gap-1`}
  >
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-nowrap"
    >
      {title}
    </motion.h2>

    {subtitle && (
      <motion.p
        className={`text-lg md:text-xl text-gray-600 leading-relaxed ${align === 'center' ? 'text-center max-w-[80%]' : 'text-left max-w-3xl'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
</div>

  );
}
