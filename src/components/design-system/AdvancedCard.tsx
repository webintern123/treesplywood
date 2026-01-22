import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface AdvancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: '3d' | 'glow' | 'magnetic' | 'tilt';
  variant?: 'glass' | 'default';
  gradient?: boolean;
  onClick?: () => void;
}

export function AdvancedCard({
  children,
  className = '',
  hoverEffect = '3d',
  variant = 'default',
  gradient = false,
  onClick,
}: AdvancedCardProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Track mouse for magnetic/tilt effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === 'magnetic' || hoverEffect === 'tilt') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  // Hover effect logic
  const get3DHover = () => ({ scale: 1.05, rotateX: -5, rotateY: 5, transition: { duration: 0.3 } });
  const getGlowHover = () => ({
    boxShadow: '0 20px 60px rgba(160, 82, 44, 0.3), 0 0 0 1px rgba(160, 82, 44, 0.2)',
    transition: { duration: 0.3 },
  });
  const getMagneticHover = () => ({
    x: mousePosition.x * 15, // slightly reduced for subtlety
    y: mousePosition.y * 15,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  });
  const getTiltHover = () => ({
    rotateX: mousePosition.y * -8,
    rotateY: mousePosition.x * 8,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  });

  const getHoverEffect = () => {
    switch (hoverEffect) {
      case '3d':
        return get3DHover();
      case 'glow':
        return getGlowHover();
      case 'magnetic':
        return getMagneticHover();
      case 'tilt':
        return getTiltHover();
      default:
        return {};
    }
  };

  const variantClass = variant === 'glass' ? 'glass-card' : 'bg-white shadow-md';

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${variantClass} ${className} group cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={getHoverEffect()}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Gradient overlay */}
      {gradient && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(160, 82, 44, 0.15), transparent 70%)',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Light / highlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${
            (mousePosition.y + 1) * 50
          }%, rgba(255,255,255,0.1), transparent 50%)`,
        }}
        animate={{ opacity: mousePosition.x !== 0 || mousePosition.y !== 0 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* Background decorative blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-trees-primary/5 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}
