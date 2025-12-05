import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calculator, Lightbulb, BookOpen, MapPin, Briefcase, Mail, HelpCircle, Download, Package, Scale, Search } from 'lucide-react';
import { ModernButton } from '../design-system/ModernButton';
import { GlobalSearch } from '../GlobalSearch';
import logoImage from '../../assets/logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, category?: 'All' | 'Plywood' | 'Doors') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigation structure with dropdowns
  const navStructure = [
    { name: 'Home', id: 'home', type: 'link' },
    { name: 'About', id: 'about', type: 'link' },
    { 
      name: 'Products', 
      id: 'products', 
      type: 'dropdown',
      items: [
        { name: 'All Products', id: 'products', key: 'all-products', description: 'Browse our complete catalog', icon: BookOpen, category: 'All' as const },
        { name: 'Plywood', id: 'products', key: 'plywood-products', description: 'Premium quality plywood', icon: BookOpen, category: 'Plywood' as const },
        { name: 'Doors', id: 'products', key: 'doors-products', description: 'Elegant door solutions', icon: BookOpen, category: 'Doors' as const },
      ]
    },
    { 
      name: 'Tools', 
      id: 'tools', 
      type: 'dropdown',
      items: [
        { name: 'Plywood Calculator', id: 'calculator', description: 'Calculate plywood needed for your project', icon: Calculator },
        { name: 'Product Comparison', id: 'comparison', description: 'Compare products side-by-side', icon: Scale },
      ]
    },
    { 
      name: 'Resources', 
      id: 'resources', 
      type: 'dropdown',
      items: [
        { name: 'Projects Gallery', id: 'projects', description: 'Inspiring project showcase', icon: Lightbulb },
        { name: 'Blogs & Articles', id: 'blogs', description: 'Industry insights & tips', icon: BookOpen },
        { name: 'Downloads Center', id: 'downloads', description: 'Catalogs, guides & certificates', icon: Download },
        { name: 'Request Samples', id: 'sample-request', description: 'Free product samples delivered', icon: Package },
        { name: 'FAQ', id: 'faq', description: 'Common questions answered', icon: HelpCircle },
        { name: 'Find a Dealer', id: 'dealers', description: 'Locate authorized dealers', icon: MapPin },
      ]
    },
    { name: 'Contact', id: 'contact', type: 'link' },
  ];

  const handleNavigateAndClose = (pageId: string, category?: 'All' | 'Plywood' | 'Doors') => {
    onNavigate(pageId, category);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Global keyboard shortcut for search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.navbar-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="w-full glass-strong border-b border-white/30 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-5 sm:py-6">
            
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <img 
  src={logoImage} 
  alt="The Trees Plywood" 
  className="h-10 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
/>


            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navStructure.map((item) => {
                if (item.type === 'link') {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigateAndClose(item.id)}
                      className={`px-4 py-2 transition-all duration-200 font-medium relative ${
                        currentPage === item.id
                          ? 'text-trees-primary'
                          : 'text-gray-700 hover:text-trees-primary'
                      }`}
                    >
                      {item.name}
                      {currentPage === item.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-trees-primary"></span>
                      )}
                    </button>
                  );
                }

                // Dropdown menu (clickable)
                return (
                  <div key={item.id} className="relative navbar-dropdown">
                    <button
                      className={`px-4 py-2 transition-all duration-200 font-medium relative flex items-center gap-1 ${
                        item.items?.some(subItem => subItem.id === currentPage)
                          ? 'text-trees-primary'
                          : 'text-gray-700 hover:text-trees-primary'
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                      {item.items?.some(subItem => subItem.id === currentPage) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-trees-primary"></span>
                      )}
                    </button>

                    {openDropdown === item.id && item.items && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-[#F5F1ED] rounded-xl shadow-xl border border-gray-200/50 overflow-hidden animate-fade-in-up z-50">
                        <div className="p-3">
                          <div className="text-xs text-gray-600 px-3 py-2">
                            {item.name === 'Tools' ? 'Design & Planning Tools' : 
                             item.name === 'Resources' ? 'Helpful Resources' : 
                             'Product Categories'}
                          </div>
                          <div className="mt-1 space-y-0.5">
                            {item.items.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleNavigateAndClose(subItem.id, (subItem as any).category)}
                                  className="w-full text-left px-3 py-3 hover:bg-white/60 rounded-lg transition-all duration-200 group"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                      <Icon className="w-5 h-5 text-trees-primary/70" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-gray-600 mt-0.5">
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Search & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="px-3 py-2 text-gray-700 hover:text-trees-primary transition-colors duration-200 flex items-center gap-2 hover:bg-[#A0522C]/5 rounded-lg"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <ModernButton variant="primary" size="sm" onClick={() => onNavigate('sample-request')}>
                Request Sample
              </ModernButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden bg-white/80 hover:bg-white border border-gray-200 p-2.5 rounded-xl transition-all duration-200 hover:shadow-md active:scale-95 text-trees-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-lg animate-fade-in-up">
              {/* Mobile Search Button */}
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-[#A0522C]/5 hover:bg-[#A0522C]/10 rounded-xl transition-all duration-200 border border-[#A0522C]/10 active:scale-[0.98]"
              >
                <Search className="w-5 h-5 text-[#A0522C]" />
                <span className="text-[#432011] font-medium">Search Website</span>
              </button>

              {navStructure.map((item) => {
                if (item.type === 'link') {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigateAndClose(item.id)}
                      className={`w-full text-left px-4 py-2.5 transition-all duration-200 font-medium border-l-2 ${
                        currentPage === item.id
                          ? 'text-trees-primary border-trees-primary bg-trees-primary/5'
                          : 'text-gray-700 border-transparent hover:text-trees-primary hover:border-trees-primary/30'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                }

                return (
                  <div key={item.id} className="border-l-2 border-transparent">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500">
                      {item.name}
                    </div>
                    <div className="space-y-1">
                      {item.items?.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavigateAndClose(subItem.id, (subItem as any).category)}
                            className="w-full text-left px-4 py-2 hover:bg-trees-primary/10 transition-all duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4 text-trees-primary flex-shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-gray-800">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {subItem.description}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div className="pt-2">
                <ModernButton variant="primary" size="sm" className="w-full" onClick={() => handleNavigateAndClose('sample-request')}>
                  Request Sample
                </ModernButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Search Modal */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(page: string) => onNavigate(page)} // ignore category
      />
    </nav>
  );
}
