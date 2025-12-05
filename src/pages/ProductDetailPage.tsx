import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  Phone, 
  Check, 
  Package, 
  Shield, 
  Award,
  FileText,
  Ruler,
  Layers,
  Sparkles,
  ChevronRight,
  Share2,
  Heart,
} from 'lucide-react';
import { products } from '../data/products';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Testimonials } from '../components/Testimonials';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
  onBack: () => void;
}

export function ProductDetailPage({ productId, onNavigate, onBack }: ProductDetailPageProps) {
  const product = products.find(p => p.id === productId);
  const [selectedThickness, setSelectedThickness] = useState(product?.thicknesses[0] || '');
  const [quantity, setQuantity] = useState('1');
  const [isSaved, setIsSaved] = useState(false);

  if (!product) {
    return (
      <PageContainer className="py-20 text-center">
        <h1 className="text-trees-secondary mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <ModernButton variant="primary" icon={<ArrowLeft />} onClick={onBack}>
          Back to Products
        </ModernButton>
      </PageContainer>
    );
  }

  const handleSave = () => {
    setIsSaved(!isSaved);
    alert(`${product.name} has been ${isSaved ? 'removed from' : 'added to'} your wishlist!`);
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: 'Check out this product!',
        url: productUrl,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(productUrl);
      alert('Product link copied to clipboard!');
    }
  };

  const handleDownloadFile = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <PageContainer className="py-4">
          <div className="flex items-center justify-between">
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
                    onClick={onBack}
                    className="cursor-pointer hover:text-trees-primary transition-colors"
                  >
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-trees-primary font-medium">
                    {product.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-trees-primary transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Products</span>
            </button>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="py-12 space-y-16">
        {/* Product Header */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-card">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trees-secondary/40 to-transparent" />
              {product.badge && (
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/95 backdrop-blur-sm text-trees-primary border-trees-primary/20 shadow-lg text-base px-4 py-2">
                    {product.badge}
                  </Badge>
                </div>
              )}
              <div className="absolute top-6 right-6">
                <Badge className="bg-trees-primary text-white shadow-lg text-base px-4 py-2">
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <ModernButton
                variant={isSaved ? 'primary' : 'outline'}
                size="sm"
                icon={<Heart />}
                className="flex-1"
                onClick={handleSave}
              >
                {isSaved ? 'Saved' : 'Save'}
              </ModernButton>

              <ModernButton
                variant="outline"
                size="sm"
                icon={<Share2 />}
                className="flex-1"
                onClick={handleShare}
              >
                Share
              </ModernButton>

             
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-trees-secondary mb-2">{product.name}</h1>
              <p className="text-trees-primary italic">{product.tagline}</p>
              {product.subcategory && (
                <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
                  {product.subcategory}
                </p>
              )}
            </div>

            <p className="text-gray-700">{product.description}</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <Shield className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-trees-secondary">Certified</div>
                <div className="text-xs text-gray-600">Quality</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-trees-secondary">Premium</div>
                <div className="text-xs text-gray-600">Grade</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <Layers className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-trees-secondary">{product.thicknesses.length}</div>
                <div className="text-xs text-gray-600">Sizes</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-base font-semibold text-trees-secondary">Select Thickness</Label>
              <div className="grid grid-cols-5 gap-2">
                {product.thicknesses.map((thickness) => (
                  <button
                    key={thickness}
                    onClick={() => setSelectedThickness(thickness)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all font-semibold ${
                      selectedThickness === thickness
                        ? 'border-trees-primary bg-trees-primary text-white shadow-md scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-trees-primary/50'
                    }`}
                  >
                    {thickness}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold text-trees-secondary">Quantity (Sheets)</Label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="max-w-[120px]"
                />
                <span className="flex items-center text-gray-600">sheets</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ModernButton
                variant="primary"
                size="lg"
                icon={<Mail />}
                className="flex-1"
                onClick={() => onNavigate('contact')}
              >
                Request Quote
              </ModernButton>

              <ModernButton
                variant="outline"
                size="lg"
                icon={<Phone />}
                onClick={() => onNavigate('contact')}
              >
                Call Now
              </ModernButton>
            </div>
          </motion.div>
        </section>

        {/* Tabs Section */}
        <section>
          <Tabs defaultValue="specifications" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-gray-100">
              <TabsTrigger value="specifications" className="py-3 gap-2">
                <FileText className="w-4 h-4" /> Specifications
              </TabsTrigger>
              <TabsTrigger value="features" className="py-3 gap-2">
                <Sparkles className="w-4 h-4" /> Features
              </TabsTrigger>
              <TabsTrigger value="applications" className="py-3 gap-2">
                <Package className="w-4 h-4" /> Applications
              </TabsTrigger>
              <TabsTrigger value="downloads" className="py-3 gap-2">
                <Download className="w-4 h-4" /> Downloads
              </TabsTrigger>
            </TabsList>

            {/* Specifications */}
            <TabsContent value="specifications" className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-trees-secondary mb-6 flex items-center gap-2">
                  <Ruler className="w-6 h-6 text-trees-primary" /> Technical Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <Check className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-800">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-trees-secondary mb-6">Available Thicknesses</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-trees-primary">
                        <th className="text-left py-4 px-4 font-semibold text-trees-secondary">Thickness</th>
                        <th className="text-left py-4 px-4 font-semibold text-trees-secondary">Common Size</th>
                        <th className="text-left py-4 px-4 font-semibold text-trees-secondary">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.thicknesses.map((thickness, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-trees-primary">{thickness}</td>
                          <td className="py-4 px-4 text-gray-700">8' × 4' (2440 × 1220 mm)</td>
                          <td className="py-4 px-4 text-sm text-gray-600">
                            {index === 0 ? 'Heavy furniture, structural applications' :
                             index === 1 ? 'Cabinet backs, drawer bottoms' :
                             index === 2 ? 'Door panels, partition walls' :
                             index === 3 ? 'Light paneling, decorative work' :
                             'Veneering, curved surfaces'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Features */}
            <TabsContent value="features" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {product.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-shape flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-trees-secondary mb-2">{feature}</h4>
                        <p className="text-sm text-gray-600">
                          Premium quality feature ensuring long-lasting performance and reliability.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Applications */}
            <TabsContent value="applications" className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-trees-secondary mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-trees-primary" /> Primary Applications
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{product.primaryUses}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  {product.primaryUses.split(',').map((use, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="w-12 h-12 bg-trees-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Package className="w-6 h-6 text-trees-primary" />
                      </div>
                      <h4 className="text-trees-secondary mb-2">{use.trim()}</h4>
                      <p className="text-sm text-gray-600">Ideal for professional and residential applications</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Downloads */}
            <TabsContent value="downloads" className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-trees-secondary mb-6">Technical Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Product Datasheet', file: 'src/files/Aug -12.docx', size: '2.4 MB' },
                    { name: 'Installation Guide', file: 'src/files/Divya_resume.pdf', size: '1.8 MB' },
                    { name: 'Certification Docs', file: 'src/files/certification.pdf', size: '3.2 MB' },
                    { name: 'Warranty Information', file: 'src/files/warranty.pdf', size: '1.2 MB' },
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-trees-primary transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-trees-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-trees-primary" />
                        </div>
                        <div>
                          <h4 className="text-trees-secondary">{doc.name}</h4>
                          <p className="text-sm text-gray-600">PDF • {doc.size}</p>
                        </div>
                      </div>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        icon={<Download />}
                        onClick={() => handleDownloadFile(doc.file, doc.name)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Inquiry Form */}
        <section className="glass-strong rounded-2xl p-10">
          <div className="max-w-3xl mx-auto">
            <ModernSectionHeader
              badge="Get in Touch"
              badgeIcon={Mail}
              title="Request a Quote"
              subtitle="Fill out the form below and our team will get back to you within 24 hours"
            />
            <form className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity-form">Quantity (Sheets)</Label>
                  <Input id="quantity-form" type="number" placeholder="100" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project requirements..." rows={5} />
              </div>
              <ModernButton
                variant="primary"
                size="lg"
                icon={<Mail />}
                className="w-full"
                onClick={() => onNavigate('contact')}
              >
                Submit Inquiry
              </ModernButton>
            </form>
          </div>
        </section>

        
      </PageContainer>
    </div>
  );
}
