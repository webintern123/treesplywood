import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ModernCardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient' | 'glass';
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ModernCard({
  children,
  variant = 'default',
  hoverable = true,
  className = '',
  onClick,
}: ModernCardProps) {
  const variants = {
    default: 'modern-card',
    elevated: 'elevated-card',
    outlined: 'bg-white border-2 border-gray-200 rounded-2xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-lg',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg',
  };

  const hoverClass = hoverable ? 'cursor-pointer' : '';
  const clickable = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { y: -4 } : {}}
      onClick={onClick}
      className={`${variants[variant]} ${hoverClass} ${clickable} ${className}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      {children}
    </motion.div>
  );
}

// ----------------- Header -----------------
interface CardHeaderProps {
  icon?: ReactNode;
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function CardHeader({ icon, badge, title, subtitle, className = '' }: CardHeaderProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {(icon || badge) && (
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center text-trees-primary">
              {icon}
            </div>
          )}
          {badge && (
            <span className="px-3 py-1 rounded-full bg-trees-primary/10 text-trees-primary text-[14px] font-medium">
              {badge}
            </span>
          )}
        </div>
      )}

      <div>
        {/* H3 - 20px, semibold */}
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>

        {/* Secondary text - 14px, semibold */}
        {subtitle && (
          <p className="text-[14px] font-semibold text-gray-600 leading-snug">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ----------------- Body -----------------
interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`mt-4 text-[16px] font-normal text-gray-700 ${className}`}>
      {children}
    </div>
  );
}

// ----------------- Footer -----------------
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
