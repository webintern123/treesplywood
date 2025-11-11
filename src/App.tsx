import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { GridOverlay } from './components/layout/GridOverlay';
import { BackToTop } from './components/BackToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { DealersPage } from './pages/DealersPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { FAQPage } from './pages/FAQPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import DownloadsPage from './pages/DownloadsPage';
import SampleRequestPage from './pages/SampleRequestPage';
import ComparisonPage from './pages/ComparisonPage';
import SustainabilityPage from './pages/SustainabilityPage';
import QualityPage from './pages/QualityPage';
import InstallationPage from './pages/InstallationPage';
import ProfessionalsPage from './pages/ProfessionalsPage';

type Page = 'home' | 'products' | 'about' | 'blogs' | 'blog-detail' | 'dealers' | 'calculator' | 'projects' | 'contact' | 'product-detail' | 'faq' | 'resources' | 'privacy' | 'terms' | 'warranty' | 'downloads' | 'samples' | 'sample-request' | 'comparison' | 'sustainability' | 'quality' | 'installation' | 'professionals' | '404'|'floating-cta';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState<'All' | 'Plywood' | 'Doors'>('All');

  const handleNavigate = (page: string, category?: 'All' | 'Plywood' | 'Doors') => {
    setCurrentPage(page as Page);
    if (page === 'products' && category) {
      setProductCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogSelect = (blogId: string) => {
    setSelectedBlogId(blogId);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogs = () => {
    setCurrentPage('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  return (
    <ErrorBoundary>
      <div 
        className="min-h-screen relative bg-white"
        style={{ 
          fontFamily: 'var(--font-family-sans)',
        }}
      >
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-trees-primary focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-trees-primary/30"
        >
          Skip to main content
        </a>

      {/* Subtle texture overlay for depth */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(160, 82, 44, 0.02) 0px,
              transparent 1px,
              transparent 2px,
              rgba(160, 82, 44, 0.02) 3px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(67, 32, 17, 0.02) 0px,
              transparent 1px,
              transparent 2px,
              rgba(67, 32, 17, 0.02) 3px
            )
          `,
        }}
      ></div>
      
      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-trees-primary/10 via-transparent to-trees-secondary/15 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Navigation - Full Width */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Page Content */}
        <main id="main-content">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} onProductSelect={handleProductSelect} initialCategory={productCategory} />}
          {currentPage === 'product-detail' && selectedProductId && (
            <ProductDetailPage 
              productId={selectedProductId} 
              onNavigate={handleNavigate}
              onBack={handleBackToProducts}
            />
          )}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
         {currentPage === 'blogs' && (
  <BlogsPage 
    onBlogSelect={handleBlogSelect} 
    onNavigate={handleNavigate} 
  />
)}

          {currentPage === 'blog-detail' && selectedBlogId && (
            <BlogDetailPage 
              blogId={selectedBlogId} 
              onNavigate={handleNavigate}
              onBack={handleBackToBlogs}
            />
          )}
          {currentPage === 'dealers' && <DealersPage onNavigate={handleNavigate} />}
          {currentPage === 'calculator' && <CalculatorPage onNavigate={handleNavigate} />}
          {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
          {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
          {currentPage === 'downloads' && <DownloadsPage onNavigate={handleNavigate} />}
          {(currentPage === 'samples' || currentPage === 'sample-request') && <SampleRequestPage onNavigate={handleNavigate} />}
          {currentPage === 'comparison' && <ComparisonPage onNavigate={handleNavigate} onProductSelect={handleProductSelect} />}
          {currentPage === 'sustainability' && <SustainabilityPage onNavigate={handleNavigate} />}
          {currentPage === 'quality' && <QualityPage onNavigate={handleNavigate} />}
          {currentPage === 'installation' && <InstallationPage onNavigate={handleNavigate} />}
          {currentPage === 'professionals' && <ProfessionalsPage onNavigate={handleNavigate} />}
          {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
          {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
          {currentPage === 'warranty' && <WarrantyPage onNavigate={handleNavigate} />}
          {currentPage === '404' && <NotFoundPage onNavigate={handleNavigate} />}
        </main>

        {/* Footer - Full Width */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Floating CTA Buttons */}
      {/* Floating CTA Page */}
{currentPage === 'floating-cta' && <FloatingCTA onNavigate={handleNavigate} />}

      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Grid Overlay for Development (Press G to toggle) */}
      <GridOverlay />
      
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          expand={false}
          richColors
          closeButton
          duration={3000}
        />
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
}
