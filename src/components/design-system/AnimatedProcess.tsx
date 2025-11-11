import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface AnimatedProcessProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export function AnimatedProcess({ steps, title, subtitle }: AnimatedProcessProps) {
  return (
    <section className="py-6">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text text-4xl font-semibold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-trees-primary/20 via-trees-primary/40 to-trees-primary/20 transform -translate-y-1/2" />

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessStepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group h-full"
      >
        {/* Background Gradient on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(160, 82, 44, 0.1), transparent 70%)',
          }}
        />

        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: index * 0.15 + 0.2,
          }}
          className="relative z-10 mx-auto w-16 h-16 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
        >
          <span className="text-white text-2xl font-bold">{step.number}</span>
          
          {/* Rotating Border */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/30"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{
            delay: index * 0.15 + 0.3,
            duration: 0.4,
          }}
          whileHover={{ rotate: 360 }}
          className="mx-auto w-14 h-14 bg-trees-primary/10 rounded-xl flex items-center justify-center mb-4 relative z-10"
        >
          <Icon className="w-7 h-7 text-trees-primary" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
          className="relative z-10"
        >
          <h3 className="text-trees-secondary font-semibold text-lg mb-3">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>

        {/* Check Mark (appears on hover) */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2 }}
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>

        {/* Decorative Corner */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-trees-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </motion.div>

      {/* Connector Arrow (Desktop Only) */}
      {index < 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            delay: index * 0.15 + 0.6,
            duration: 0.4,
          }}
          className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
        >
          <div className="w-8 h-8 bg-white border-4 border-trees-primary/30 rounded-full flex items-center justify-center shadow-md">
            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-trees-primary"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Vertical Timeline Variation
export function VerticalTimeline({ steps, title, subtitle }: AnimatedProcessProps) {
  return (
    <section className="py-6">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text text-4xl font-semibold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-trees-primary/20 via-trees-primary/40 to-trees-primary/20" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative pl-24 group"
    >
      {/* Circle Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: index * 0.2 + 0.1,
        }}
        className="absolute left-0 w-16 h-16 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
      >
        <Icon className="w-8 h-8 text-white" />
        
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-trees-primary"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ x: 8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-2xl p-6 hover-lift"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-trees-primary font-bold text-xl">{step.number}</span>
          <h3 className="text-trees-secondary font-semibold text-xl">{step.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}
