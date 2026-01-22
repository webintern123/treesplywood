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
  const alignClass = align === 'center'
    ? 'items-center text-center'
    : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClass} gap-3 mb-16 ${className}`}>
      
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-trees-primary/10 text-trees-primary
                     text-[12px] font-medium"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          <span>{badge}</span>
        </motion.div>
      )}

      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`flex flex-col ${alignClass} gap-2`}
      >
        {/* H1 */}
        <motion.h1
          className="text-[30px] font-bold text-gray-900 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Body Text */}
        {subtitle && (
          <motion.p
            className={`text-[16px] font-normal text-gray-600 leading-relaxed
              ${align === 'center' ? 'max-w-3xl' : 'max-w-3xl'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
