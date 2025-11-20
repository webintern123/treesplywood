import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface AdvancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: '3d' | 'glow' | 'magnetic' | 'tilt';
  variant?: 'glass' | 'default';
  gradient?: boolean;
  onClick?: () => void; // ← added
}

export function AdvancedCard({
  children,
  className = '',
  hoverEffect = '3d',
  variant = 'default',
  gradient = false,
  onClick, // ← accept it here
}: AdvancedCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === 'magnetic' || hoverEffect === 'tilt') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  const get3DHover = () => ({ scale: 1.05, rotateX: -5, rotateY: 5, transition: { duration: 0.3 } });
  const getGlowHover = () => ({
    boxShadow: '0 20px 60px rgba(160, 82, 44, 0.3), 0 0 0 1px rgba(160, 82, 44, 0.2)',
    transition: { duration: 0.3 },
  });
  const getMagneticHover = () => ({
    x: mousePosition.x * 20,
    y: mousePosition.y * 20,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  });
  const getTiltHover = () => ({
    rotateX: mousePosition.y * -10,
    rotateY: mousePosition.x * 10,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  });

  const getHoverEffect = () => {
    switch (hoverEffect) {
      case '3d': return get3DHover();
      case 'glow': return getGlowHover();
      case 'magnetic': return getMagneticHover();
      case 'tilt': return getTiltHover();
      default: return {};
    }
  };

  const variantClass = variant === 'glass' ? 'glass-card' : 'bg-white shadow-md';

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // ← add this
      whileHover={getHoverEffect()}
      className={`${variantClass} rounded-2xl relative overflow-hidden group ${className}`}

      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {gradient && (
  <motion.div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(circle at 50% 0%, rgba(160, 82, 44, 0.15), transparent 70%)',
    }}
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  />
)}


      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(255,255,255,0.1), transparent 50%)`,
        }}
        animate={{ opacity: mousePosition.x !== 0 || mousePosition.y !== 0 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10">{children}</div>

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-trees-primary/5 rounded-full blur-3xl" />
    </motion.div>
  );
}
