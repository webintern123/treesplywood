import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FileText, Package, HelpCircle, BookOpen, TrendingUp } from 'lucide-react';
import { products } from '../data/products';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'page' | 'blog' | 'faq' | 'resource';
  url: string;
  icon: React.ReactNode;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, productId?: string) => void;
}

// Static content for search indexing
const SEARCHABLE_CONTENT: Omit<SearchResult, 'id'>[] = [
  // Pages
  { title: 'Home', description: 'Welcome to The Trees Plywood', type: 'page', url: 'home', icon: <TrendingUp className="w-4 h-4" /> },
  { title: 'Products', description: 'Browse our complete plywood collection', type: 'page', url: 'products', icon: <Package className="w-4 h-4" /> },
  { title: 'About Us', description: 'Learn about The Trees Plywood story', type: 'page', url: 'about', icon: <FileText className="w-4 h-4" /> },
  { title: 'Contact', description: 'Get in touch with our team', type: 'page', url: 'contact', icon: <FileText className="w-4 h-4" /> },
  { title: 'Projects', description: 'View our completed projects and case studies', type: 'page', url: 'projects', icon: <FileText className="w-4 h-4" /> },
  { title: 'Blogs', description: 'Industry insights and plywood guides', type: 'blog', url: 'blogs', icon: <BookOpen className="w-4 h-4" /> },
  { title: 'Dealers', description: 'Find authorized dealers near you', type: 'page', url: 'dealers', icon: <FileText className="w-4 h-4" /> },
  { title: 'Calculator', description: 'Calculate plywood requirements', type: 'page', url: 'calculator', icon: <FileText className="w-4 h-4" /> },
  { title: 'FAQ', description: 'Frequently asked questions', type: 'faq', url: 'faq', icon: <HelpCircle className="w-4 h-4" /> },
  { title: 'Resources', description: 'Brochures, guides, and documentation', type: 'resource', url: 'resources', icon: <FileText className="w-4 h-4" /> },
  { title: 'Downloads', description: 'Download product catalogs and specs', type: 'resource', url: 'downloads', icon: <FileText className="w-4 h-4" /> },
  { title: 'Sample Request', description: 'Request free product samples', type: 'page', url: 'samples', icon: <FileText className="w-4 h-4" /> },
  { title: 'Product Comparison', description: 'Compare plywood specifications', type: 'page', url: 'comparison', icon: <FileText className="w-4 h-4" /> },
  { title: 'Sustainability', description: 'Our commitment to sustainable forestry', type: 'page', url: 'sustainability', icon: <FileText className="w-4 h-4" /> },
  { title: 'Quality Assurance', description: 'Quality standards and certifications', type: 'page', url: 'quality', icon: <FileText className="w-4 h-4" /> },
  { title: 'Installation Guide', description: 'Professional installation instructions', type: 'page', url: 'installation', icon: <FileText className="w-4 h-4" /> },
  { title: 'For Professionals', description: 'Resources for contractors and architects', type: 'page', url: 'professionals', icon: <FileText className="w-4 h-4" /> },
  { title: 'Warranty', description: 'Product warranty information', type: 'page', url: 'warranty', icon: <FileText className="w-4 h-4" /> },
  { title: 'Privacy Policy', description: 'How we protect your data', type: 'page', url: 'privacy', icon: <FileText className="w-4 h-4" /> },
  { title: 'Terms & Conditions', description: 'Terms of service', type: 'page', url: 'terms', icon: <FileText className="w-4 h-4" /> },
];

export function GlobalSearch({ isOpen, onClose, onNavigate }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const foundResults: SearchResult[] = [];

    // Search products
    products.forEach((product) => {
      const matchScore = 
        (product.name.toLowerCase().includes(searchTerm) ? 3 : 0) +
        (product.description.toLowerCase().includes(searchTerm) ? 2 : 0) +
        (product.category.toLowerCase().includes(searchTerm) ? 1 : 0) +
        (product.tagline.toLowerCase().includes(searchTerm) ? 1 : 0) +
        (product.primaryUses.toLowerCase().includes(searchTerm) ? 1 : 0) +
        (product.subcategory?.toLowerCase().includes(searchTerm) ? 1 : 0);

      if (matchScore > 0) {
        foundResults.push({
          id: product.id,
          title: product.name,
          description: product.description,
          type: 'product',
          url: product.id,
          icon: <Package className="w-4 h-4" />,
        });
      }
    });

    // Search pages
    SEARCHABLE_CONTENT.forEach((item, index) => {
      const matchScore = 
        (item.title.toLowerCase().includes(searchTerm) ? 3 : 0) +
        (item.description.toLowerCase().includes(searchTerm) ? 2 : 0);

      if (matchScore > 0) {
        foundResults.push({
          ...item,
          id: `page-${index}`,
        });
      }
    });

    // Sort by relevance and limit results
    setResults(foundResults.slice(0, 8));
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'product') {
      onNavigate('product-detail', result.url);
    } else {
      onNavigate(result.url);
    }
    onClose();
    setQuery('');
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'product':
        return 'bg-[#A0522C]/10 text-[#A0522C]';
      case 'blog':
        return 'bg-blue-100 text-blue-700';
      case 'faq':
        return 'bg-green-100 text-green-700';
      case 'resource':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[10000] px-4"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-[#A0522C]/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-[#A0522C]/10">
                <Search className="w-5 h-5 text-[#A0522C]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, pages, resources..."
                  className="flex-1 bg-transparent outline-none text-[#432011] placeholder:text-[#432011]/40"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-[#432011]/40 hover:text-[#432011] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <kbd className="hidden sm:block px-2 py-1 text-xs bg-[#A0522C]/10 text-[#432011]/60 rounded">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={resultsRef} className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => handleSelect(result)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          index === selectedIndex
                            ? 'bg-[#A0522C]/10'
                            : 'hover:bg-[#A0522C]/5'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-[#A0522C]">
                            {result.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-[#432011] truncate">
                                {result.title}
                              </h4>
                              <span
                                className={`px-2 py-0.5 text-xs rounded-full ${getTypeColor(
                                  result.type
                                )}`}
                              >
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-[#432011]/60 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : query ? (
                  <div className="p-8 text-center text-[#432011]/60">
                    <Search className="w-12 h-12 mx-auto mb-3 text-[#A0522C]/30" />
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-[#432011]/60">
                    <Search className="w-12 h-12 mx-auto mb-3 text-[#A0522C]/30" />
                    <p>Start typing to search...</p>
                    <p className="text-sm mt-1">Products, pages, resources, and more</p>
                  </div>
                )}
              </div>

              {/* Footer Tips */}
              <div className="flex items-center justify-between p-3 bg-[#A0522C]/5 border-t border-[#A0522C]/10 text-xs text-[#432011]/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-white rounded">↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded">↵</kbd>
                    Select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded">ESC</kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
