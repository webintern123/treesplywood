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

const categoryContent = {
  All: {
    heading: "All Products",
    description: "Explore our complete range of plywood, blockboards, and doors — each crafted with care, tested for durability, and trusted across homes, offices, and large projects.",
  },
  Plywood: {
    heading: "Premium Plywood Collection",
    description: "Find the right plywood for kitchens, wardrobes, furniture, and heavy-duty projects that are built for long-term performance.",
  },
  Doors: {
    heading: "Premium Doors Collection",
    description: "Choose from a wide range of doors for interiors, exteriors, and commercial spaces that combine elegance with strength.",
  },
};


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
        title={"Premium Plywood \nCollection for Every Space"}
        subtitle="Built for Strength, Style, and Everyday Use"
        description="Find the right plywood for kitchens, wardrobes, furniture, and heavy-duty projects that are created for strong & long-term performance."
        image="https://images.unsplash.com/photo-1753771145110-b3ddcd1b0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwc3RhY2t8ZW58MXx8fHwxNzYyMTU2NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="ISO Approved Quality"
        badgeIcon={Shield}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: '8+', label: 'Wide Range Products ' },
          { value: '2 Categories', label: 'with Heavy Duty Strength' },
          { value: 'Long-Term', label: 'Warranty' },
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
            {/* Download Button */}
  <MagneticButton strength={0.2}>
    <ModernButton
      variant="outline-light"
      size="lg"
      icon={<Download className="w-5 h-5" />}
      onClick={() =>
        handleDownload('src/files/Catalogue-2024.pdf', 'Catalogue-2024.pdf')
      }
    >
      Download Catalog
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
     <br></br>
      <div className="container mx-auto px-6">
  <ModernSectionHeader
    badge={categoryContent[selectedCategory].heading}
    badgeIcon={Star}
    title={categoryContent[selectedCategory].heading}
    subtitle={categoryContent[selectedCategory].description}
  />
</div>

        
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
  className=" flex items-center justify-center snap-start"
>
  <ModernCard
    variant="elevated"
    hoverable
    className="w-full max-w-xs mx-auto"

    onClick={() =>
      onProductSelect
        ? onProductSelect(product.id)
        : onNavigate(`product-detail?id=${product.id}`)
    }
  >
    {/* Product Image */}
    <div className="relative h-48 rounded-t-2xl overflow-hidden group">

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
       <h3 className="text-base font-semibold text-white">
{product.name}</h3>
       <p className="text-sm text-white/90">
{product.tagline}</p>
      </div>
    </div>

    {/* Product Info */}
    <div className="p-3 space-y-2">

      {/* Subcategory */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-trees-primary/10 text-trees-primary text-xs font-semibold">
  {product.subcategory || product.category}
</div>


      {/* Description */}
     <p className="text-sm text-gray-700 line-clamp-2">

        {product.shortDescription || product.description}
      </p>

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
          onProductSelect
            ? onProductSelect(product.id)
            : onNavigate(`product-detail?id=${product.id}`);
        }}
      >
        View Product
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
            <h3 className="mb-4">Not Sure Which Product to Pick?</h3>
            <p className="text-gray-600 mb-8 text-lg">
               Compare Features, Specs, and Warranties Side-by-Side to Find the Right Fit.
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
            badge="Certified & Trusted Standards"
            badgeIcon={Shield}
            title="Tested, Approved, Reliable, Quality You Can Trust"
            subtitle="Our plywood follows strict safety and performance standards, so you always get reliable, long-lasting quality to meet industry-approved standards."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                name: 'IS:710 (BWP Grade)', 
                desc: 'Strong, waterproof plywood made for heavy moisture areas.',
                icon: Shield
              },
              { 
                name: 'IS: 303', 
                desc: ' Certified for safe and durable interior use.',
                icon: CheckCircle2
              },
              { 
                name: 'IS: 5509', 
                desc: 'Tested for fire safety to meet essential building requirements.',
                icon: Flame
              },
              { 
                name: 'E0 Emission Grade', 
                desc: 'Safe & Low formaldehyde levels for healthier indoor air.',
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
            badge="Select By Your Purpose & Need"
            badgeIcon={Lightbulb}
            title="Pick What Fits Your Project"
            subtitle="If you're unsure which plywood suits your space, here’s a quick guide to help you choose the right one."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: 'Kitchen & Bathrooms',
                products: ' Best Options : Bhima, Samrat',
                desc: 'Made for moisture-heavy areas where durability matters.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Sofa,
                title: 'Furniture & Interiors',
                products: ' Best options: Samrat, Ujval',
                desc: 'Perfect for wardrobes, shelves, panels, and beautiful finishes.',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                icon: Building2,
                title: 'Structural Projects',
                products: ' Best options: Ananta, Vajra',
                desc: 'Ideal for heavy-duty, load-bearing, and long-lasting construction needs.',
                gradient: 'from-green-500 to-green-600'
              },
              {
                icon: Flame,
                title: 'Fire Safety Areas',
                products: ' Best option: Agni',
                desc: 'Designed for safer spaces with added fire protection.',
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
                    <p className="text-xs text-gray-600">{app.desc}</p>

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
              
              <h3 className="text-white mb-4">Product Catalog & Guides, Ready to Download</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Looking for detailed specs or installation info? Download our complete catalog and technical sheets anytime. Explore our full plywood range with clear specs, technical info, and easy installation notes.
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
                  <span className="font-semibold text-sm">Order Free Samples</span>
                </div>
                <h3 className="mb-4">Want to check the quality yourself?</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                   Get free product samples delivered to your doorstep. See the finish, feel the strength, and choose confidently.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Free doorstep delivery",
                     "Choose multiple samples",
                     "No purchase required",
                     "Guidance from our team included"

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
            badge="Backed by Trust"
            badgeIcon={Shield}
            title="Warranties You Can Rely On"
            subtitle="We back every sheet with strong, long-term warranties so you can build with confidence."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                years: '30', 
                products: 'Samrat', 
                gradient: 'from-amber-500 to-amber-600',
                desc: 'Reliable protection for premium interiors.'
              },
              { 
                years: '20', 
                products: 'Vajra', 
                gradient: 'from-gray-400 to-gray-500',
                desc: 'Extra strength backed with long-lasting coverage.'
              },
              { 
                years: 'Lifetime', 
                products: 'Ananta, Agni, Bhima', 
                gradient: 'from-trees-primary to-trees-secondary',
                desc: 'Our strongest grades with assurance that lasts a lifetime.'
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
                    <p className="text-2xl font-semibold mb-3 text-white">
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
              Know More About Our Warranty Program
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
              <h3 className="mb-4">Find Tree’s Plywood Store Dealer Near You</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                 Visit any of our 500+ authorized dealers across India to check our products in person. Get guidance, availability details, and help choosing the right plywood for your project.
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

      

      {/* Product FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Have Questions?"
            badgeIcon={HelpCircle}
            title="Frequently Asked Questions"
            subtitle="Here are quick answers to common doubts about our plywood."
          />

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="bwp-bwr" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What's the difference between BWP and BWR grade plywood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ●	BWP (Boiling Water Proof) is fully waterproof and ideal for places with heavy moisture like kitchens, bathrooms, and coastal homes.<br></br>
●	BWR (Boiling Water Resistant) handles day-to-day moisture and is best suited for indoor furniture and general interiors.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What kind of warranty do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our warranties are designed to give long-term peace of mind:<br></br>
●	Samrat – 30 years<br></br>
●	Vajra – 20 years<br></br>
●	Ananta, Agni, Bhima – Lifetime guarantee<br></br>
All warranties cover issues like bonding failure, manufacturing defects, or delamination under normal use.

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="thickness" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                   Which thickness should I use for my work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <ul className="space-y-2 mt-2">Here’s a simple guide:
                    <li><strong>6-9mm:</strong> Wall panels, backs of cabinets, decorative work</li>
                    <li><strong>12mm:</strong>  Kitchen cabinets, wardrobe shutters, furniture</li>
                    <li><strong>16-19mm:</strong> Tables, heavy furniture, strong structural work</li>
                    <li><strong>25mm:</strong>Doors, frames, and areas needing maximum strength</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Are your plywood products certified and safe for my home?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ●	Yes, All our products meet Indian Standards like IS:710, IS:303, IS:5509.<br></br>
●	Our premium sheets meet E0 emission levels, meaning almost zero formaldehyde - safe for bedrooms, kids’ rooms, and all indoor spaces.<br></br>
●	We also follow FSC-certified sustainable sourcing.<br></br>

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="marine" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can marine plywood be used outdoors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Marine/BWP plywood (Bhima, Samrat) handles moisture very well, but for direct outdoor sunlight and rain, we recommend adding a protective coating or treatment. Our team can guide you based on your project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fire" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Which plywood should I choose for fire-safe areas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our Agni range is designed for fire safety. It follows IS:5509 fire-retardant standards, making it a safe choice for offices, hotels, schools, hospitals, and commercial projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="samples" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                   Can I get samples before buying?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                 Yes! We provide free samples so you can check the quality, finish, and feel before placing an order. Visit the Sample Request page or contact our sales team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How long does delivery take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Delivery time depends on your location:<br></br>
●	Metro cities: 2–3 days<br></br>
●	Tier-2 cities: 4–5 days<br></br>
●	Remote locations: 7–10 days<br></br>
Delivery charges vary with distance and order size. Bulk orders may get free delivery in some areas.

                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still need help?</p>
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
            badge="Why Tree’s Plywood is Different"
            badgeIcon={Award}
            title="Trusted Quality, Every Time"
            subtitle="Every sheet backed by decades of expertise and rigorous testing"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Waterproof Certified',
                desc: 'IS:710 BWP grade for tough, moisture-prone spaces.'
              },
              {
                icon: Award,
                title: 'Long Warranty Coverage',
                desc: 'Premium products backed by up to 30 years of warranty.'
              },
              {
                icon: Sparkles,
                title: 'Health-Safe Plywood',
                desc: ' E0 emission levels for better indoor air quality.'
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
        

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white mb-6">
              Confused About Which Plywood Fits Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
               Don’t worry, our experts will help you make the right choice with ease.
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
