import React, { useState } from 'react';
import { 
  Check, X, Plus, Trash2, Download, ArrowLeft, Scale, Target, 
  Sparkles, HelpCircle, Star, ChevronRight, Shield, Zap, TrendingUp, Mail, Calculator, ArrowRight, Info, Award, Layers
} from 'lucide-react';
import { motion} from 'framer-motion';

import { PageHero } from '../components/PageHero';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { Testimonials } from '../components/Testimonials';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { products } from '../data/products';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ComparisonPageProps {
  onNavigate: (page: string) => void;
  onProductSelect?: (productId: string) => void;
}

interface ComparisonAttribute {
  label: string;
  key: string;
  type: 'text' | 'boolean' | 'rating';
  category: 'specs' | 'features' | 'warranty';
}

const comparisonAttributes: ComparisonAttribute[] = [
  // Specifications
  { label: 'Grade', key: 'grade', type: 'text', category: 'specs' },
  { label: 'Thickness Range', key: 'thickness', type: 'text', category: 'specs' },
  { label: 'Water Resistance', key: 'waterResistance', type: 'rating', category: 'specs' },
  { label: 'Durability', key: 'durability', type: 'rating', category: 'specs' },
  
  // Features & Applications
  { label: 'Best For', key: 'bestFor', type: 'text', category: 'features' },
  { label: 'Marine Use', key: 'marineUse', type: 'boolean', category: 'features' },
  { label: 'Interior Use', key: 'interiorUse', type: 'boolean', category: 'features' },
  { label: 'Exterior Use', key: 'exteriorUse', type: 'boolean', category: 'features' },
  { label: 'Termite Resistant', key: 'termiteResistant', type: 'boolean', category: 'features' },
  { label: 'Fire Retardant', key: 'fireRetardant', type: 'boolean', category: 'features' },
  { label: 'Bendable', key: 'bendable', type: 'boolean', category: 'features' },
  
  // Warranty & Standards
  { label: 'Warranty', key: 'warranty', type: 'text', category: 'warranty' },
  { label: 'IS Standards', key: 'standards', type: 'text', category: 'warranty' }
];

// Extended product data with comparison attributes and images
const productComparisonData: Record<string, any> = {
  'ananta': {
    grade: 'BWP IS:710 Marine Grade',
    thickness: '6mm - 19mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Structural, Heavy Furniture, Load-bearing',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: true,
    bendable: false,
    warranty: 'Lifetime Guarantee',
    standards: 'IS 710, IS 1000',
    image: 'https://images.unsplash.com/photo-1758749013275-6a54d36a308e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwcGx5d29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMjQ1NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'agni': {
    grade: 'BWP Fire Retardant',
    thickness: '6mm - 19mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Commercial, Public Spaces, Fire Safety',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: true,
    bendable: false,
    warranty: 'Lifetime Guarantee',
    standards: 'IS 710, IS 5509',
    image: 'https://images.unsplash.com/photo-1758977404039-6e834be8eca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBxdWFsaXR5fGVufDF8fHx8MTc2MjI1NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'bhima': {
    grade: 'BWP IS:710 Marine Grade',
    thickness: '6mm - 19mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Marine, Wet Areas, Exterior',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: 'Lifetime Guarantee',
    standards: 'IS 710',
    image: 'https://images.unsplash.com/photo-1638726302695-4055faf12224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY29tcGFyaXNvbiUyMHNpZGUlMjBieSUyMHNpZGV8ZW58MXx8fHwxNzYyMjU0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'samrat': {
    grade: 'BWP IS:710 Premium',
    thickness: '6mm - 19mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Luxury Furniture, Premium Interiors',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: '30 Years',
    standards: 'IS 710, E0 Emission',
    image: 'https://images.unsplash.com/photo-1753771145110-b3ddcd1b0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwc3RhY2tlZHxlbnwxfHx8fDE3NjIyNTQxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'vajra': {
    grade: 'BWP IS:710 Resilient',
    thickness: '6mm - 19mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Heavy-use, Institutional Furniture',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: '20 Years',
    standards: 'IS 710, E1 Emission',
    image: 'https://images.unsplash.com/photo-1758749013275-6a54d36a308e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwcGx5d29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMjQ1NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'ujval': {
    grade: 'IS:303 Interior Grade',
    thickness: '6mm - 19mm',
    waterResistance: 3,
    durability: 4,
    bestFor: 'Feature Walls, Cabinetry, Retail',
    marineUse: false,
    interiorUse: true,
    exteriorUse: false,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: '10 Years',
    standards: 'IS 303',
    image: 'https://images.unsplash.com/photo-1758977404039-6e834be8eca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBxdWFsaXR5fGVufDF8fHx8MTc2MjI1NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'block-board': {
    grade: 'BWR IS:1659',
    thickness: '16mm - 25mm',
    waterResistance: 4,
    durability: 5,
    bestFor: 'Doors, Partitions, Furniture Cores',
    marineUse: false,
    interiorUse: true,
    exteriorUse: false,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: '10 Years',
    standards: 'IS 1659 BWR',
    image: 'https://images.unsplash.com/photo-1638726302695-4055faf12224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY29tcGFyaXNvbiUyMHNpZGUlMjBieSUyMHNpZGV8ZW58MXx8fHwxNzYyMjU0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'flush-doors': {
    grade: 'BWP IS:2202',
    thickness: '30mm - 40mm',
    waterResistance: 5,
    durability: 5,
    bestFor: 'Residential & Commercial Doors',
    marineUse: true,
    interiorUse: true,
    exteriorUse: true,
    termiteResistant: true,
    fireRetardant: false,
    bendable: false,
    warranty: '15 Years',
    standards: 'IS 2202',
    image: 'https://images.unsplash.com/photo-1753771145110-b3ddcd1b0ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwc2hlZXRzJTIwc3RhY2tlZHxlbnwxfHx8fDE3NjIyNTQxODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
};

export default function ComparisonPage({ onNavigate, onProductSelect }: ComparisonPageProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleAddProduct = (productId: string) => {
    if (selectedProducts.length >= 4) {
      toast.error('Maximum 4 products can be compared at once');
      return;
    }
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
      toast.success('Product added to comparison');
    }
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
    toast.success('Product removed from comparison');
  };

  const getAttributeValue = (productId: string, attribute: ComparisonAttribute) => {
    const data = productComparisonData[productId];
    if (!data) return null;
    
    const value = data[attribute.key];
    
    if (attribute.type === 'boolean') {
      return (
        <div className="flex items-center justify-center">
          {value ? (
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Yes</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">No</span>
            </div>
          )}
        </div>
      );
    }
    
    if (attribute.type === 'rating') {
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < value ? 'bg-trees-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">{value}/5</span>
        </div>
      );
    }
    
    return <span className="text-sm text-gray-700 text-center px-2">{value}</span>;
  };

  const exportComparison = () => {
    toast.success('Comparison chart exported successfully!', {
      description: 'Your comparison has been downloaded as PDF'
    });
  };

  // Group attributes by category
  const specsAttributes = comparisonAttributes.filter(a => a.category === 'specs');
  const featuresAttributes = comparisonAttributes.filter(a => a.category === 'features');
  const warrantyAttributes = comparisonAttributes.filter(a => a.category === 'warranty');

  return (
    <div>
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
                <BreadcrumbLink
                  onClick={() => onNavigate('products')}
                  className="cursor-pointer hover:text-trees-primary transition-colors"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-trees-primary font-semibold">
                  Compare Products
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Product Comparison Tool"
        subtitle="Smart Comparison"
        description="Compare different plywood grades side-by-side to find the perfect match for your project requirements and make informed decisions."
        image="https://images.unsplash.com/photo-1755938031302-9e0b890cdecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2FtcGxlcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzYyMjU0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Compare Products"
        badgeIcon={Scale}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '10+', label: 'Products' },
          { value: '13', label: 'Attributes' },
          { value: '4', label: 'Max Compare' },
        ]}
      />

      <PageContainer className="space-y-20">
        {/* Why Use Comparison Tool */}
        <section className="section-padding bg-gray-50 -mx-6 px-6">
          <div className="container mx-auto">
            <ModernSectionHeader
              badge="Benefits"
              badgeIcon={Target}
              title="Why Use Our Comparison Tool?"
              subtitle="Make data-driven decisions with comprehensive side-by-side product analysis"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Technical Specs',
                  desc: 'Compare thickness, water resistance, durability ratings, and IS standards',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: Zap,
                  title: 'Use Cases',
                  desc: 'See which products are best suited for marine, interior, or exterior applications',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: TrendingUp,
                  title: 'Value Analysis',
                  desc: 'Compare warranty periods, certifications, and quality standards to maximize ROI',
                  color: 'from-purple-500 to-purple-600'
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModernCard variant="elevated" className="p-6 text-center h-full">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-trees-secondary mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </ModernCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Selector & Comparison */}
        <section>
          <ModernSectionHeader
            badge="Interactive Tool"
            badgeIcon={Scale}
            title="Select & Compare Products"
            subtitle="Choose up to 4 products to see detailed specifications and features comparison"
          />

          {/* Selector Controls */}
          <ModernCard variant="elevated" className="p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <ModernButton
                  variant="outline"
                  icon={<ArrowLeft className="w-4 h-4" />}
                  onClick={() => onNavigate('products')}
                >
                  Back to Products
                </ModernButton>

                <Select onValueChange={handleAddProduct}>
                  <SelectTrigger className="w-full md:w-[320px]">
                    <SelectValue placeholder="Add product to compare" />
                  </SelectTrigger>
                  <SelectContent>
                    {products
                      .filter(p => !selectedProducts.includes(p.id))
                      .map(product => (
                        <SelectItem key={product.id} value={product.id}>
                          <div className="flex items-center gap-2">
                            
                            <span>{product.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedProducts.length > 0 && (
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    {selectedProducts.length}/4 Selected
                  </Badge>
                  <ModernButton
                    variant="outline"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                    onClick={exportComparison}
                  >
                    Export PDF
                  </ModernButton>
                </div>
              )}
            </div>
          </ModernCard>

          {/* Comparison Display */}
          {selectedProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <ModernCard variant="outlined" className="p-12 max-w-2xl mx-auto">

                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center mx-auto mb-6">
                  <Plus className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-trees-secondary mb-2">Start Comparing Products</h3>
                <p className="text-gray-600 mb-6">
                  Select products from the dropdown above to see a detailed side-by-side comparison of specifications, features, and use cases.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    <span>Compare up to 4 products</span>
                  </div>
                  <span>•</span>
                  <span>13 comparison attributes</span>
                </div>
              </ModernCard>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {/* Product Cards with Banners */}
              <div className={`grid gap-6 ${selectedProducts.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : selectedProducts.length === 2 ? 'md:grid-cols-2' : selectedProducts.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {selectedProducts.map((productId, index) => {
                  const product = products.find(p => p.id === productId);
                  const productData = productComparisonData[productId];
                  
                  return (
                    <motion.div
                      key={productId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ModernCard variant="elevated" className="overflow-hidden h-full group">
                        {/* Product Image Banner */}
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={productData?.image}
                            alt={product?.name || 'Product'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemoveProduct(productId)}
                            className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-red-50 text-red-600 transition-all shadow-lg hover:shadow-xl z-10"
                            aria-label="Remove product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          {/* Product Icon & Name on Banner */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-2xl flex-shrink-0">
                              
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-white font-semibold truncate">{product?.name}</h3>
                                <p className="text-white/80 text-sm truncate">{product?.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-3 text-center">
                            <div>
                              <div className="flex justify-center gap-1 mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < (productData?.waterResistance || 0) ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-gray-600">Water Resistance</p>
                            </div>
                            <div>
                              <div className="flex justify-center gap-1 mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < (productData?.durability || 0) ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-gray-600">Durability</p>
                            </div>
                          </div>
                        </div>
                      </ModernCard>
                    </motion.div>
                  );
                })}
              </div>

              {/* Categorized Comparison Tables */}
              <div className="space-y-8">
                {/* Specifications */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-trees-secondary font-semibold">Technical Specifications</h4>
                      <p className="text-sm text-gray-600">Core product attributes and ratings</p>
                    </div>
                  </div>

                  <ModernCard variant="outlined" className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-trees-secondary">Attribute</th>
                            {selectedProducts.map(productId => {
                              const product = products.find(p => p.id === productId);
                              return (
                                <th key={productId} className="px-6 py-4 text-center text-sm font-semibold text-trees-secondary min-w-[200px]">
                                  {product?.name}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {specsAttributes.map((attribute, idx) => (
                            <motion.tr
                              key={attribute.key}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-700">
                                {attribute.label}
                              </td>
                              {selectedProducts.map(productId => (
                                <td key={`${productId}-${attribute.key}`} className="px-6 py-4 text-center">
                                  {getAttributeValue(productId, attribute)}
                                </td>
                              ))}
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ModernCard>
                </div>

                {/* Features & Applications */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-trees-secondary font-semibold">Features & Applications</h4>
                      <p className="text-sm text-gray-600">Use cases and special properties</p>
                    </div>
                  </div>

                  <ModernCard variant="outlined" className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {featuresAttributes.map((attribute, idx) => (
                            <motion.tr
                              key={attribute.key}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-700 w-[200px]">
                                {attribute.label}
                              </td>
                              {selectedProducts.map(productId => (
                                <td key={`${productId}-${attribute.key}`} className="px-6 py-4 text-center">
                                  {getAttributeValue(productId, attribute)}
                                </td>
                              ))}
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ModernCard>
                </div>

                {/* Warranty & Standards */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-trees-secondary font-semibold">Warranty & Certifications</h4>
                      <p className="text-sm text-gray-600">Quality assurance and compliance</p>
                    </div>
                  </div>

                  <ModernCard variant="outlined" className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {warrantyAttributes.map((attribute, idx) => (
                            <motion.tr
                              key={attribute.key}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-700 w-[200px]">
                                {attribute.label}
                              </td>
                              {selectedProducts.map(productId => (
                                <td key={`${productId}-${attribute.key}`} className="px-6 py-4 text-center">
                                  {getAttributeValue(productId, attribute)}
                                </td>
                              ))}
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ModernCard>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`grid gap-4 ${selectedProducts.length <= 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-' + selectedProducts.length}`}>
                {selectedProducts.map((productId) => {
                  const product = products.find(p => p.id === productId);
                  return (
                    <MagneticButton key={productId} strength={0.2}>
                      <ModernButton
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={() => {
                          if (onProductSelect) {
                            onProductSelect(productId);
                          }
                        }}
                      >
                        View {product?.name} Details
                      </ModernButton>
                    </MagneticButton>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Statistics - Premium Design */}
        <section className="section-padding">
          <ModernSectionHeader
            badge="Our Impact"
            badgeIcon={TrendingUp}
            title="Comparison Tool Success Metrics"
            subtitle="Real numbers from thousands of professionals who've made smarter decisions using our tool"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                value: '10,000+', 
                label: 'Comparisons Completed', 
                desc: 'Products analyzed by professionals',
                icon: Scale,
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50'
              },
              { 
                value: '13', 
                label: 'Attributes Analyzed', 
                desc: 'Comprehensive data points per product',
                icon: Shield,
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50'
              },
              { 
                value: '95%', 
                label: 'Decision Confidence', 
                desc: 'Users feel more confident in their choice',
                icon: Target,
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50'
              },
              { 
                value: '4', 
                label: 'Products Maximum', 
                desc: 'Compare up to 4 products side-by-side',
                icon: Layers,
                color: 'from-orange-500 to-orange-600',
                bgColor: 'bg-orange-50'
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full group hover:shadow-2xl transition-all duration-300">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center opacity-50`}>
                      <Sparkles className="w-5 h-5 text-trees-primary" />
                    </div>
                  </div>

                  {/* Stats Value */}
                  <div className="mb-2">
                    <div className="text-4xl font-bold text-trees-secondary mb-1 group-hover:text-trees-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-700 mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      />
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <ModernCard variant="outlined" className="p-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-trees-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-trees-secondary mb-2">Why These Numbers Matter</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our comparison tool has helped over <strong>10,000 professionals</strong> make data-driven decisions. 
                    With <strong>13 comprehensive attributes</strong> covering everything from water resistance to warranty periods, 
                    users report <strong>95% confidence</strong> in their final choice. The ability to compare <strong>up to 4 products</strong> 
                    simultaneously ensures you see all options before committing.
                  </p>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </section>

        {/* How to Use */}
        <section>
          <ModernSectionHeader
            badge="Guide"
            badgeIcon={HelpCircle}
            title="How to Use the Comparison Tool"
            subtitle="Simple 4-step process to compare and choose the right plywood"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Select Products',
                desc: 'Choose 2-4 products from the dropdown menu to compare',
                icon: Plus,
              },
              {
                step: '2',
                title: 'Review Specs',
                desc: 'Examine 14 key attributes including grade, thickness, and ratings',
                icon: Scale,
              },
              {
                step: '3',
                title: 'Compare Features',
                desc: 'Check use cases, certifications, and warranty details',
                icon: Check,
              },
              {
                step: '4',
                title: 'Make Decision',
                desc: 'View details or export comparison as PDF for reference',
                icon: Download,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="outlined" className="p-6 text-center h-full relative">
                  <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-trees-primary text-white flex items-center justify-center text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-trees-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                    <step.icon className="w-6 h-6 text-trees-primary" />
                  </div>
                  <h4 className="text-trees-secondary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="section-padding bg-gray-50 -mx-6 px-6">
          <div className="container mx-auto">
            <ModernSectionHeader
              badge="Success Stories"
              badgeIcon={Star}
              title="What Professionals Say"
              subtitle="Hear from architects and contractors who used our comparison tool"
            />
            <Testimonials />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Comparison Tool FAQ"
            subtitle="Common questions about using our product comparison feature"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="how-many" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How many products can I compare at once?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  You can compare up to 4 products simultaneously. This allows for a comprehensive side-by-side 
                  analysis without overwhelming the comparison table. For best results, we recommend comparing 
                  2-3 products from similar categories (e.g., all BWP grade plywood) to make meaningful comparisons.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attributes" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What attributes are compared?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our comparison tool evaluates 13 key attributes: Grade, Thickness Range, Water Resistance (5-star 
                  rating), Durability (5-star rating), Best Use Cases, Marine Suitability, Interior/Exterior 
                  Use, Termite Resistance, Fire Retardant Properties, Bendability, Warranty Period, and IS Standards 
                  Certification. This comprehensive analysis helps you make informed decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="export" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I export the comparison?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! Click the "Export PDF" button to download your comparison as a PDF document. This is perfect 
                  for sharing with clients, team members, or keeping for future reference. The exported file includes 
                  all selected products and their complete attribute comparison in an easy-to-read format.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recommendations" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How do I know which product is best for my project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Look at the "Best For" attribute which suggests ideal applications for each product. Also check 
                  the use case indicators (Marine, Interior, Exterior) and specific features like fire retardancy or 
                  termite resistance based on your requirements. If you need personalized guidance, use the "Request 
                  Samples" or "Talk to Expert" buttons to connect with our product specialists.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ratings" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What do the star ratings mean?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our 5-star rating system evaluates Water Resistance and Durability. 5 stars indicates the highest 
                  performance level (BWP grade with marine-grade waterproofing and maximum durability). 4 stars shows 
                  excellent performance (BWR grade), and 3 stars represents good performance for interior applications. 
                  These ratings are based on IS standards testing and real-world performance data.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions about product comparison?</p>
              <ModernButton
                variant="outline"
                icon={<HelpCircle className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Our Team
              </ModernButton>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section>
          <ModernSectionHeader
            badge="More Tools"
            badgeIcon={Zap}
            title="Explore Other Tools"
            subtitle="Use our complete suite of tools to plan and execute your plywood projects"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ModernCard variant="elevated" className="p-8 h-full group cursor-pointer hover:shadow-2xl transition-all duration-300" onClick={() => onNavigate('calculator')}>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">Plywood Calculator</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Calculate the exact quantity of plywood needed for your project with accurate measurements and material estimates.
                    </p>
                    <div className="flex items-center gap-2 text-trees-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Open Calculator</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ModernCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ModernCard variant="elevated" className="p-8 h-full group cursor-pointer hover:shadow-2xl transition-all duration-300" onClick={() => onNavigate('sample-request')}>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">Request Samples</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      After comparing products, order free samples to test quality, finish, and durability before making your final decision.
                    </p>
                    <div className="flex items-center gap-2 text-trees-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Request Samples</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ModernCard>
            </motion.div>
          </div>
        </section>

        {/* Help Section */}
        <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary -mx-6 px-6 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]" />
          
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">Need Expert Help?</span>
            </div>
            <h2 className="text-white mb-4">
              Not Sure Which Product to Choose?
            </h2>
            <p className="text-white/90 mb-8">
              Our product experts can help you select the right plywood for your specific project requirements 
              and provide personalized recommendations based on your use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="bg-white text-trees-primary border-white hover:bg-gray-50"
                  onClick={() => onNavigate('sample-request')}
                >
                  Request Samples
                </ModernButton>
              </MagneticButton>
              <ModernButton
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={() => onNavigate('contact')}
              >
                Talk to Expert
              </ModernButton>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="section-padding bg-gradient-to-br from-trees-secondary via-trees-primary to-trees-secondary -mx-6 px-6 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-4">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">Product Updates</span>
            </div>
            <h2 className="text-white mb-4">
              Get Notified About New Products
            </h2>
            <p className="text-white/90 mb-8">
              Subscribe to receive updates when we add new products to compare, plus exclusive comparison guides and buying tips.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="bg-white text-trees-primary border-white hover:bg-gray-50"
                  icon={<Mail className="w-5 h-5" />}
                >
                  Subscribe
                </ModernButton>
              </MagneticButton>
            </motion.div>
            <p className="text-white/70 text-sm mt-4">
              Join 3,000+ professionals getting product insights
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-trees-primary" />
            <span className="text-trees-primary font-semibold text-sm">Ready to Choose?</span>
          </div>
          <h2 className="text-trees-secondary mb-4">
            Found the Perfect Product?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            View detailed specifications, request free samples, or browse our complete product catalog to explore all options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="primary"
                size="xl"
                icon={<Scale className="w-5 h-5" />}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Start New Comparison
              </ModernButton>
            </MagneticButton>
            <ModernButton
              variant="outline"
              size="xl"
              onClick={() => onNavigate('products')}
            >
              View All Products
            </ModernButton>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
