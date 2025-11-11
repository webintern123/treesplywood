import { useState } from 'react';
import { 
  Package, Filter, Shield, Award, Sparkles, ArrowRight, 
  CheckCircle2, ChevronRight, Star, Download, FileText, Layers,
  Lightbulb, Droplets, Sofa, Building2, Flame, MapPin, HelpCircle
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { PageHero } from '../components/PageHero';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { Separator } from '../components/ui/separator';
import { Testimonials } from '../components/Testimonials';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { motion } from 'motion/react';
import { products, categories, plywoodSubcategories } from '../data/products';

const handleDownload = (filePath: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = filePath; // Path to your file
  link.download = fileName; // File name for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


interface ProductsPageProps {
  onNavigate?: (page: string) => void;
  onProductSelect?: (productId: string) => void;
  initialCategory?: 'All' | 'Plywood' | 'Doors';
}

export function ProductsPage({ onNavigate = () => {}, onProductSelect, initialCategory = 'All' }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Plywood');

  // Filtering logic (limit Plywood to 6 cards)
const filteredProducts =
  selectedCategory === 'All'
    ? products
    : selectedCategory === 'Plywood'
      ? products
          .filter((product) => product.category === 'Plywood')
          .slice(0, 6)
      : products.filter((product) => product.category === selectedCategory);


  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => onNavigate('home')}
                  className="cursor-pointer hover:text-trees-primary transition-colors"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-trees-primary font-semibold">
                  Products
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Premium Plywood Collection"
        subtitle="Quality Meets Innovation"
        description="Explore our range of BWP-grade, marine plywood solutions designed for every application - from residential interiors to commercial projects."
        image="https://images.unsplash.com/photo-1753771145110-b3ddcd1b0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwc3RhY2t8ZW58MXx8fHwxNzYyMTU2NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="ISO Certified"
        badgeIcon={Shield}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: '15+', label: 'Products' },
          { value: '3', label: 'Categories' },
          { value: '30-Year', label: 'Warranty' },
        ]}
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => {
                  const element = document.getElementById('product-catalog');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Catalog
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Get Quote
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* Filters */}
      <section id="product-catalog" className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
  setSelectedCategory(category as 'All' | 'Plywood' | 'Doors');
  if (category !== 'Plywood') {
    setSelectedSubcategory('All Plywood');
  }
}}

                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-trees-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Subcategory Dropdown */}
            {selectedCategory === 'Plywood' && (
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-trees-primary focus:outline-none font-medium text-gray-800"
                >
                  {plywoodSubcategories.map((subcat) => (
                    <option key={subcat} value={subcat}>
                      {subcat}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModernCard variant="elevated" hoverable onClick={() => onProductSelect ? onProductSelect(product.id) : onNavigate(`product-detail?id=${product.id}`)}>
                    {/* Product Image */}
                    <div className="relative h-72 rounded-t-2xl overflow-hidden group">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-1.5 rounded-full bg-trees-primary text-white text-sm font-bold shadow-lg flex items-center gap-1.5">
                            <Star className="w-4 h-4" />
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {/* Product Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>

                        <p className="text-white/90 text-lg">{product.tagline}</p>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-4">
                      {/* Subcategory */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-trees-primary/10 text-trees-primary text-sm font-semibold">
                        {product.subcategory || product.category}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700">{product.description}</p>

                      {/* Key Features */}
                      <div className="space-y-2">
                        {product.keyFeatures.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-trees-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Thickness Options */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">Available Thickness:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.thicknesses.slice(0, 5).map((thickness) => (
                            <span
                              key={thickness}
                              className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 text-xs font-medium"
                            >
                              {thickness}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <ModernButton
                        variant="outline"
                        size="md"
                        fullWidth
                        icon={<ChevronRight className="w-5 h-5" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductSelect ? onProductSelect(product.id) : onNavigate(`product-detail?id=${product.id}`);
                        }}
                      >
                        View Details
                      </ModernButton>
                    </div>
                  </ModernCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Showing <span className="font-bold text-trees-primary">{filteredProducts.length}</span> products
            </p>
          </div>
        </div>
      </section>

      {/* Product Comparison CTA */}
      <section className="section-padding bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-trees-primary/10 flex items-center justify-center">
              <Layers className="w-10 h-10 text-trees-primary" />
            </div>
            <h3 className="mb-4">Can't Decide Between Products?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Use our product comparison tool to compare specifications, features, and warranties side-by-side
            </p>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onNavigate('comparison')}
              >
                Compare Products
              </ModernButton>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Quality Standards"
            badgeIcon={Shield}
            title="Certified Excellence"
            subtitle="Our products meet the highest quality and safety standards recognized globally"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                name: 'IS: 710 BWP', 
                desc: 'Boiling Waterproof Marine Grade Standard',
                icon: Shield
              },
              { 
                name: 'IS: 303', 
                desc: 'Interior Grade Plywood Certification',
                icon: CheckCircle2
              },
              { 
                name: 'IS: 5509', 
                desc: 'Fire Retardant Safety Standard',
                icon: Flame
              },
              { 
                name: 'E0 Grade', 
                desc: 'Zero Formaldehyde Emission Level',
                icon: Sparkles
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                    <cert.icon className="w-8 h-8 text-trees-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Choose by Need"
            badgeIcon={Lightbulb}
            title="Select by Application"
            subtitle="Not sure which product? We'll help you choose based on your project requirements"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: 'Kitchen & Bathrooms',
                products: 'Bhima, Samrat',
                desc: 'Marine-grade waterproof plywood for wet areas',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Sofa,
                title: 'Furniture & Interiors',
                products: 'Samrat, Ujval',
                desc: 'Premium finish for visible surfaces and cabinetry',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                icon: Building2,
                title: 'Structural Projects',
                products: 'Ananta, Vajra',
                desc: 'High-strength load-bearing applications',
                gradient: 'from-green-500 to-green-600'
              },
              {
                icon: Flame,
                title: 'Fire Safety Zones',
                products: 'Agni',
                desc: 'Fire-retardant certified for safety-critical areas',
                gradient: 'from-red-500 to-red-600'
              },
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated">
                  <div className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg`}>
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{app.title}</h4>
                    <p className="text-sm text-gray-600">{app.desc}</p>
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-trees-primary">{app.products}</p>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Catalog Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-trees-primary to-trees-secondary rounded-3xl p-12 text-white text-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 border-4 border-white rounded-full" />
              <div className="absolute bottom-0 left-0 w-80 h-80 border-4 border-white rounded-full" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
              >
                <Download className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-white mb-4">Download Product Catalog</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Get our complete product catalog with detailed specifications, technical datasheets, 
                and installation guides in PDF format
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
  <ModernButton
    variant="light"
    size="lg"
    icon={<Download className="w-5 h-5" />}
    onClick={() => handleDownload('src/files/Catalogue-2024.pdf', 'catalogue.pdf')}
  >
    Download Catalog
  </ModernButton>

  <ModernButton
    variant="outline"
    size="lg"
    icon={<FileText className="w-5 h-5" />}
    onClick={() => handleDownload('src/files/Catalogue-2024.pdf', 'technical-doc.pdf')}
    className="border-white text-white hover:bg-white/20"
  >
    Technical Datasheets
  </ModernButton>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Request Banner */}
      <section className="section-padding bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 border border-trees-primary/20 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trees-primary/10 text-trees-primary mb-6">
                  <Package className="w-4 h-4" />
                  <span className="font-semibold text-sm">Free Samples</span>
                </div>
                <h3 className="mb-4">Want to Feel the Quality?</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Request free physical samples of any product delivered to your location. 
                  Experience our quality firsthand before making a decision.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Free delivery to your location',
                    'Multiple product samples available',
                    'No obligation to purchase',
                    'Expert consultation included'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => onNavigate('sample-request')}
                  >
                    Request Free Samples
                  </ModernButton>
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2FtcGxlcyUyMHN3YXRjaGVzfGVufDF8fHx8MTc2MjI0ODczM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Plywood Samples"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Peace of Mind"
            badgeIcon={Shield}
            title="Comprehensive Warranties"
            subtitle="We stand behind every sheet with industry-leading warranties on structural integrity and bonding"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                years: '30', 
                products: 'Samrat', 
                gradient: 'from-amber-500 to-amber-600',
                desc: 'Premium grade warranty'
              },
              { 
                years: '20', 
                products: 'Vajra', 
                gradient: 'from-gray-400 to-gray-500',
                desc: 'Extended protection'
              },
              { 
                years: 'Lifetime', 
                products: 'Ananta, Agni, Bhima', 
                gradient: 'from-trees-primary to-trees-secondary',
                desc: 'Ultimate peace of mind'
              },
            ].map((warranty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${warranty.gradient} rounded-2xl p-8 text-white text-center shadow-xl h-full relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <Shield className="w-14 h-14 mx-auto mb-4 drop-shadow-lg" />
                    <div className="text-6xl font-bold mb-2">{warranty.years}</div>
                    <p className="text-2xl font-semibold mb-3">
                      {warranty.years === 'Lifetime' ? 'Guarantee' : 'Year Warranty'}
                    </p>
                    <Separator className="my-4 bg-white/30" />
                    <p className="text-white/90 mb-2">{warranty.products}</p>
                    <p className="text-sm text-white/80">{warranty.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <ModernButton
              variant="outline"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
              onClick={() => onNavigate('warranty')}
            >
              Learn About Our Warranty Program
            </ModernButton>
          </div>
        </div>
      </section>

      {/* Dealer Locator */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-trees-primary/10 to-trees-secondary/10 rounded-3xl p-12 text-center border border-trees-primary/20">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-trees-primary/10 flex items-center justify-center"
              >
                <MapPin className="w-10 h-10 text-trees-primary" />
              </motion.div>
              <h3 className="mb-4">Find Products Near You</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Visit our 500+ authorized dealers across India to see and feel our products in person. 
                Get expert advice and immediate availability.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="primary"
                    size="lg"
                    icon={<MapPin className="w-5 h-5" />}
                    onClick={() => onNavigate('dealers')}
                  >
                    Locate Dealers
                  </ModernButton>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="outline"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => onNavigate('contact')}
                  >
                    Contact Sales Team
                  </ModernButton>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews/Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Customer Stories"
            badgeIcon={Star}
            title="What Our Customers Say"
            subtitle="Real feedback from professionals and homeowners who trust The Trees"
          />
          <Testimonials />
        </div>
      </section>

      {/* Product FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our products"
          />

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="bwp-bwr" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What's the difference between BWP and BWR grade plywood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  BWP (Boiling Water Proof) is marine-grade plywood with 100% waterproof guarantee, 
                  ideal for high-moisture areas like kitchens, bathrooms, and coastal regions. It uses 
                  phenolic resin adhesive. BWR (Boiling Water Resistant) is moisture-resistant for indoor 
                  use with normal humidity levels, perfect for furniture and interior applications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What warranty do you offer on your plywood products?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We offer industry-leading warranties: Samrat (30 years), Vajra (20 years), and 
                  Ananta, Agni, Bhima (Lifetime guarantee on structural integrity and bonding). 
                  All warranties cover manufacturing defects, delamination, and bonding failures under 
                  normal usage conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="thickness" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What thickness should I choose for different applications?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <ul className="space-y-2 mt-2">
                    <li><strong>6mm-9mm:</strong> Wall paneling, cabinet backs, decorative work</li>
                    <li><strong>12mm:</strong> Kitchen cabinets, wardrobe shutters, furniture</li>
                    <li><strong>16mm-19mm:</strong> Table tops, heavy furniture, structural applications</li>
                    <li><strong>25mm:</strong> Heavy-duty doors, structural panels requiring maximum strength</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Are your products certified and safe for indoor use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, all our products are certified to relevant Indian Standards (IS:710, IS:303, IS:5509). 
                  Our premium range meets E0 emission standards (zero formaldehyde emission), making them 
                  completely safe for indoor residential use including children's rooms and bedrooms. We also 
                  have FSC certification for sustainable forestry.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="marine" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I use marine plywood for outdoor applications?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  While our BWP marine-grade plywood (Bhima, Samrat) is 100% waterproof and highly durable, 
                  it's designed primarily for interior wet areas. For direct outdoor exposure, additional 
                  weatherproofing treatment and protective coatings are recommended. Contact our technical 
                  team for specific outdoor project guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fire" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Which product is best for fire-safety requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our Agni range is specifically designed for fire-safety applications. It's certified to 
                  IS:5509 fire retardant standards, making it ideal for commercial buildings, hotels, 
                  hospitals, schools, and public spaces where fire safety codes are mandatory. It delays 
                  flame spread and reduces smoke generation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="samples" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I get product samples before ordering?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! We offer free sample delivery to help you make an informed decision. You can 
                  request samples of multiple products to compare quality, finish, and texture. Use our 
                  Sample Request page or contact our sales team to get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What are the delivery timelines and charges?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Delivery timelines vary by location: metro cities (2-3 days), tier-2 cities (4-5 days), 
                  remote areas (7-10 days). Delivery charges depend on order value and distance. Bulk orders 
                  may qualify for free delivery in most metro areas. Contact our sales team for 
                  specific delivery quotes for your location.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onNavigate('faq')}
              >
                View All FAQs
              </ModernButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Choose Us"
            badgeIcon={Award}
            title="Quality You Can Trust"
            subtitle="Every sheet backed by decades of expertise and rigorous testing"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'BWP Certified',
                desc: '100% boiling waterproof as per IS:710 marine standards'
              },
              {
                icon: Award,
                title: 'Long Warranties',
                desc: 'Up to 30 years warranty on premium products'
              },
              {
                icon: Sparkles,
                title: 'Zero Emission',
                desc: 'E0 grade formaldehyde emission for safe interiors'
              },
            ].map((feature, idx) => (
              <ModernCard key={idx} variant="elevated">
                <div className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-trees-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Our experts are here to help you select the perfect plywood for your project requirements.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ModernButton
                variant="light"
                size="xl"
                icon={<ArrowRight className="w-6 h-6" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Our Experts
              </ModernButton>
              <ModernButton
                variant="outline"
                size="xl"
                icon={<Package className="w-6 h-6" />}
                onClick={() => onNavigate('calculator')}
                className="border-white text-white hover:bg-white/20"
              >
                Calculate Needs
              </ModernButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
