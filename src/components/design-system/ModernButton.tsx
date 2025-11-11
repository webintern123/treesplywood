import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'outline-light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: ReactNode;
}

// Combine HTML button props with Motion props
type MotionButtonProps = ModernButtonProps & HTMLMotionProps<'button'>;

export function ModernButton({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}: MotionButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-trees-primary text-white hover:bg-trees-primary-hover shadow-lg hover:shadow-xl active:scale-[0.98]',
    secondary: 'bg-trees-secondary text-white hover:bg-trees-secondary-hover shadow-lg hover:shadow-xl active:scale-[0.98]',
    outline: 'border-2 border-trees-primary text-trees-primary hover:bg-trees-primary hover:text-white active:scale-[0.98]',
    ghost: 'text-trees-primary hover:bg-trees-primary/10 active:scale-[0.98]',
    light: 'bg-white text-trees-primary hover:bg-white/95 shadow-lg hover:shadow-xl active:scale-[0.98]',
    'outline-light': 'border-2 border-white text-white bg-white/10 hover:bg-white hover:text-trees-primary active:scale-[0.98]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
}
