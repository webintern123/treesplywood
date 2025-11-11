import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ParallaxSection, FloatingElement } from './design-system/ParallaxSection';
import { TextReveal } from './design-system/TextReveal';
import { ReactNode, useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  images?: string[];
  autoSlideInterval?: number; // in milliseconds
  badge?: string;
  badgeIcon?: LucideIcon;
  stats?: {
    value: string;
    label: string;
  }[];
  actions?: ReactNode;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  pattern?: boolean;
  showIndicators?: boolean;
}

export function PageHero({
  title,
  subtitle,
  description,
  image,
  images,
  autoSlideInterval = 5000,
  badge,
  badgeIcon: BadgeIcon,
  stats,
  actions,
  height = 'md',
  overlayOpacity = 'medium',
  pattern = true,
  showIndicators = true,
}: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Determine which images to use
  const imageArray = images || (image ? [image] : []);
  const hasMultipleImages = imageArray.length > 1;

  // Auto-slide effect
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [hasMultipleImages, imageArray.length, autoSlideInterval]);

  const heightClasses = {
    sm: 'min-h-[400px]',
    md: 'min-h-[500px]',
    lg: 'min-h-[600px]',
    xl: 'min-h-[700px]',
  };

  const overlayClasses = {
    light: 'from-trees-secondary/70 via-trees-primary/60 to-trees-secondary/70',
    medium: 'from-trees-secondary/85 via-trees-primary/75 to-trees-secondary/85',
    dark: 'from-trees-secondary/95 via-trees-primary/85 to-trees-secondary/95',
  };

  return (
    <section className={`relative w-full overflow-hidden ${heightClasses[height]}`}>
      {/* Parallax Background Images with Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 1 }
            }}
            className="w-full h-full absolute inset-0"
          >
            <ImageWithFallback
              src={imageArray[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${overlayClasses[overlayOpacity]}`} />
        
        {/* Pattern Overlay */}
        {pattern && (
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
              backgroundSize: '32px 32px' 
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Badge */}
            {badge && (
              <FloatingElement delay={0} duration={3} yOffset={10}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/40 shadow-lg"
                >
                  {BadgeIcon && <BadgeIcon className="w-4 h-4 text-white" />}
                  <span className="text-white font-semibold text-sm">{badge}</span>
                </motion.div>
              </FloatingElement>
            )}

            {/* Title with TextReveal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white mb-6"
            >
              <TextReveal delay={0.5}>
                {title}
              </TextReveal>
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/95 text-xl md:text-2xl mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/90 text-base md:text-lg mb-8 max-w-2xl"
              >
                {description}
              </motion.p>
            )}

            {/* Stats */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-6 md:gap-8 mb-8"
              >
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-white text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-white/70 text-sm">{stat.label}</div>
                      </div>
                      {index < stats.length - 1 && (
                        <div className="h-12 w-px bg-white/30" />
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Actions */}
            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {actions}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

      {/* Slide Indicators */}
      {hasMultipleImages && showIndicators && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {imageArray.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
