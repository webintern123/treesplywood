import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ApplicationCardProps {
  title: string;
  description: string;
  image: string;
  badges: string[];
  badge?: string;
  onLearnMore?: () => void;
}

export function ApplicationCard({ 
  title, 
  description, 
  image, 
  badges,
  badge,
  onLearnMore 
}: ApplicationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Corner Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <span className="text-trees-primary font-semibold text-sm">{badge}</span>
          </motion.div>
        )}

        {/* Title Overlay on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col bg-neutral-50">
        {/* Description */}
        <p className="text-trees-secondary text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 rounded-md bg-amber-50 text-trees-primary text-xs border border-amber-100"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.button
          onClick={onLearnMore}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-trees-primary text-trees-primary font-medium transition-all duration-300 hover:bg-trees-primary hover:text-white group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Learn More</span>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
