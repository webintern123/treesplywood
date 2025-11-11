import { Home, Search, Package, Phone, FileText, ArrowRight } from 'lucide-react';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { motion } from 'motion/react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const popularPages = [
    { icon: Package, title: 'Products', desc: 'Browse our plywood range', page: 'products' },
    { icon: Phone, title: 'Contact', desc: 'Get in touch with us', page: 'contact' },
    { icon: FileText, title: 'Resources', desc: 'Download catalogs', page: 'resources' },
    { icon: Home, title: 'Home', desc: 'Back to homepage', page: 'home' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-trees-primary/5 via-white to-trees-secondary/5 flex items-center justify-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              {/* Large 404 */}
              <h1 className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-trees-primary to-trees-secondary leading-none">
                404
              </h1>

              {/* Floating Decorations */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-trees-primary/10 blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-trees-secondary/10 blur-2xl"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off. Don't worry, let's get you back on track.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, pages, or resources..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-trees-primary focus:outline-none text-lg transition-colors shadow-lg"
              />
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Popular Pages</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <ModernCard
                    variant="elevated"
                    hoverable
                    onClick={() => onNavigate(page.page)}
                  >
                    <div className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                        <page.icon className="w-8 h-8 text-trees-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {page.title}
                        </h4>
                        <p className="text-sm text-gray-600">{page.desc}</p>
                      </div>
                    </div>
                  </ModernCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ModernButton
              variant="primary"
              size="xl"
              icon={<ArrowRight className="w-6 h-6" />}
              onClick={() => onNavigate('home')}
            >
              Back to Home
            </ModernButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
