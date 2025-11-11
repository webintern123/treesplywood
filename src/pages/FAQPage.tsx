import { HelpCircle, Search, Package, CreditCard, Truck, Wrench, Leaf, Award, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Clock, TrendingUp, Users, Zap, Star, BookOpen, Download, Video, Shield, Target, ChevronRight, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { PageHero } from '../components/PageHero';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { Testimonials } from '../components/Testimonials';
import { SEOHead } from '../components/SEOHead';
import { Input } from '../components/ui/input';
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
import { toast } from 'sonner';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'products', name: 'Products & Specifications', icon: Package },
    { id: 'ordering', name: 'Ordering & Pricing', icon: CreditCard },
    { id: 'shipping', name: 'Shipping & Delivery', icon: Truck },
    { id: 'installation', name: 'Installation & Usage', icon: Wrench },
    { id: 'warranty', name: 'Warranty & Returns', icon: Award },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf },
  ];

  const faqs = [
    // Products & Specifications
    {
      category: 'products',
      question: 'What is the difference between BWP and BWR grade plywood?',
      answer: 'BWP (Boiling Water Proof) grade uses phenolic resin adhesive and can withstand prolonged exposure to water and boiling water. BWR (Boiling Water Resistant) grade uses melamine-based adhesives and offers good moisture resistance but not complete waterproofing. BWP is recommended for marine, coastal, and high-moisture applications, while BWR is suitable for kitchens and bathrooms.',
      popular: true,
    },
    {
      category: 'products',
      question: 'What thickness options are available?',
      answer: 'We offer plywood in various thicknesses: 4mm, 6mm, 8mm, 12mm, 15mm, 18mm, 19mm, and 25mm. Availability may vary by product type. Contact our sales team for specific thickness requirements.',
      popular: true,
    },
    {
      category: 'products',
      question: 'What is the standard size of plywood sheets?',
      answer: 'Our standard sizes are 8\'×4\' (2440×1220mm), 7\'×4\' (2134×1220mm), 7\'×3\' (2134×915mm), 6\'×4\' (1830×1220mm), and 6\'×3\' (1830×915mm). We also offer custom sizes for large projects with minimum order quantities.',
      popular: false,
    },
    {
      category: 'products',
      question: 'What certifications do your products have?',
      answer: 'All our products are IS 303 certified. We also hold ISO 9001:2015 for quality management, FSC certification for sustainable forestry, BIS approval, and meet E0/E1 emission standards for formaldehyde. Certificates are available upon request.',
      popular: true,
    },
    {
      category: 'products',
      question: 'Is your plywood termite and borer resistant?',
      answer: 'Yes, all our plywood products undergo anti-termite and anti-borer treatment as part of our manufacturing process. This protection is covered under our warranty when products are used as intended.',
      popular: false,
    },

    // Ordering & Pricing
    {
      category: 'ordering',
      question: 'How do I get a price quote?',
      answer: 'You can request a quote through our contact form, by calling +91 9091744744, or by emailing sales@thetreesplywood.com. Please provide details about the product type, quantity, thickness, and delivery location for an accurate quote.',
      popular: true,
    },
    {
      category: 'ordering',
      question: 'What is the minimum order quantity?',
      answer: 'Minimum order quantity varies by product and location. For standard products, we typically require a minimum of 10-20 sheets. For custom sizes or special finishes, MOQ may be higher. Contact us for specific requirements.',
      popular: false,
    },
    {
      category: 'ordering',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer competitive pricing for bulk orders and long-term projects. Volume discounts are available for orders above certain thresholds. Contact our sales team to discuss your project requirements.',
      popular: false,
    },
    {
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, cheques, and digital payment methods. For established customers, we offer credit terms after due diligence. Payment terms will be specified in your quotation.',
      popular: false,
    },
    {
      category: 'ordering',
      question: 'Can I order samples before placing a bulk order?',
      answer: 'Absolutely! We provide free product samples (up to 5 types) delivered to your location. This allows you to evaluate quality, finish, and suitability before committing to a full order. Request samples through our Sample Request page.',
      popular: true,
    },

    // Shipping & Delivery
    {
      category: 'shipping',
      question: 'What are the delivery timelines?',
      answer: 'Delivery timelines depend on your location and order quantity. Typically, within city limits: 2-3 days, within state: 5-7 days, outside state: 7-14 days. Custom orders may take additional 7-10 days for production. We\'ll provide estimated delivery dates with your quote.',
      popular: true,
    },
    {
      category: 'shipping',
      question: 'Do you ship pan-India?',
      answer: 'Yes, we ship to all major cities and towns across India. We have a network of logistics partners to ensure safe and timely delivery nationwide.',
      popular: false,
    },
    {
      category: 'shipping',
      question: 'What are the shipping charges?',
      answer: 'Shipping charges are calculated based on delivery location, order volume, and distance. For large orders, we often provide free or subsidized shipping. Exact charges will be included in your quotation.',
      popular: false,
    },
    {
      category: 'shipping',
      question: 'How is the plywood packaged for shipping?',
      answer: 'All plywood is carefully wrapped in protective plastic sheets, strapped securely, and loaded on pallets for transportation. We ensure products are protected from moisture, dust, and damage during transit.',
      popular: false,
    },
    {
      category: 'shipping',
      question: 'Can I track my order?',
      answer: 'Yes, once your order is dispatched, we provide tracking details via SMS and email. You can also call our customer service team for real-time updates on your shipment.',
      popular: true,
    },

    // Installation & Usage
    {
      category: 'installation',
      question: 'How should plywood be stored before installation?',
      answer: 'Store plywood sheets flat in a dry, well-ventilated area away from direct sunlight and moisture. Keep them elevated (not directly on the ground) and covered with a breathable tarp. Avoid storing in humid environments or outdoors.',
      popular: false,
    },
    {
      category: 'installation',
      question: 'Do I need to treat plywood before installation?',
      answer: 'Our plywood comes pre-treated for termites and borers. However, for outdoor applications or high-moisture areas, we recommend applying a waterproof sealant or paint to exposed edges and surfaces for additional protection.',
      popular: false,
    },
    {
      category: 'installation',
      question: 'What adhesive should I use for plywood?',
      answer: 'Use quality wood adhesives like PVA (white glue) for interior applications or waterproof adhesives (like polyurethane or epoxy) for moisture-prone areas. Always follow manufacturer instructions and ensure proper clamping during bonding.',
      popular: false,
    },
    {
      category: 'installation',
      question: 'Can I use plywood for exterior applications?',
      answer: 'BWP (Marine) grade plywood is suitable for exterior applications when properly sealed and painted. MR grade is not recommended for direct outdoor exposure. Always use appropriate protective coatings for exterior use.',
      popular: true,
    },
    {
      category: 'installation',
      question: 'What tools do I need to cut plywood?',
      answer: 'A circular saw, table saw, or jigsaw with a fine-tooth blade works well for cutting plywood. Use a straightedge guide for clean cuts and cut with the good face up to minimize chipping. Always wear safety equipment.',
      popular: false,
    },

    // Warranty & Returns
    {
      category: 'warranty',
      question: 'What is covered under warranty?',
      answer: 'Our warranty covers manufacturing defects including delamination, core voids, bonding failure, and thickness variations beyond tolerance. Coverage duration varies by product (10 years to lifetime). See our Warranty page for complete details.',
      popular: true,
    },
    {
      category: 'warranty',
      question: 'How do I file a warranty claim?',
      answer: 'Contact our warranty helpline at +91 9091744744 or email warranty@thetreesplywood.com with your invoice, photos of the issue, and product details. Our team will guide you through the claim process.',
      popular: false,
    },
    {
      category: 'warranty',
      question: 'What is not covered under warranty?',
      answer: 'Warranty does not cover damage from improper installation, incorrect application, environmental damage (fire/flood), physical damage, improper storage, normal wear and tear, or cosmetic variations in natural wood grain.',
      popular: false,
    },
    {
      category: 'warranty',
      question: 'Can I return or exchange products?',
      answer: 'Returns are accepted within 7 days of delivery only if there are manufacturing defects or if wrong products were delivered. Custom-cut or special-order products cannot be returned. Contact us immediately if you receive damaged goods.',
      popular: false,
    },
    {
      category: 'warranty',
      question: 'Is the warranty transferable?',
      answer: 'Yes, the warranty is transferable to subsequent property owners with proof of original purchase and proper documentation. This adds value to your property and provides peace of mind to buyers.',
      popular: false,
    },

    // Sustainability
    {
      category: 'sustainability',
      question: 'Is your plywood environmentally friendly?',
      answer: 'Yes, we are committed to sustainability. We use FSC-certified timber from responsibly managed forests, low-emission adhesives meeting E0/E1 standards, and optimize our production to minimize waste. We also have water recycling and energy efficiency measures in place.',
      popular: true,
    },
    {
      category: 'sustainability',
      question: 'What is FSC certification?',
      answer: 'FSC (Forest Stewardship Council) certification ensures that timber is sourced from forests that are managed responsibly - protecting biodiversity, preventing deforestation, and supporting local communities. Look for the FSC logo on our products.',
      popular: false,
    },
    {
      category: 'sustainability',
      question: 'What are E0 and E1 emission standards?',
      answer: 'E0 and E1 are emission standards that limit formaldehyde content in wood products. E0 is the strictest (≤0.5 mg/L) and E1 (≤1.5 mg/L) is the European standard. Our products meet these standards, ensuring indoor air quality and safety.',
      popular: false,
    },
    {
      category: 'sustainability',
      question: 'Can plywood be recycled?',
      answer: 'Plywood can be reused for various applications if still in good condition. At end of life, it can be repurposed for furniture, panels, or shredded for particleboard. However, treated plywood should not be burned as it may release harmful fumes.',
      popular: false,
    },
    {
      category: 'sustainability',
      question: 'Do you have any sustainability initiatives?',
      answer: 'Yes, we have implemented rainwater harvesting, solar power for partial energy needs, waste wood recycling programs, and continuous process improvements to reduce our carbon footprint. We publish annual sustainability reports.',
      popular: false,
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = faqs.filter(faq => faq.popular);

  return (
    <div>
      {/* SEO Meta Tags */}
      <SEOHead
        title="FAQ - Frequently Asked Questions | The Trees Plywood"
        description="Find answers to common questions about plywood products, specifications, ordering, shipping, installation, warranty, and sustainability. Expert support available 24/7."
        keywords="plywood FAQ, plywood questions, BWP vs BWR, plywood specifications, plywood warranty, plywood installation, sustainable plywood"
        canonicalUrl="/faq"
      />

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
                  FAQ
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="We're Here to Help"
        description="Find quick answers to common questions about our products, warranties, and services."
        image="https://images.unsplash.com/photo-1759392790299-a8874cabc000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwJTIwZGVza3xlbnwxfHx8fDE3NjIyNTMwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="24/7 Support"
        badgeIcon={HelpCircle}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '35+', label: 'FAQs' },
          { value: '<2hr', label: 'Response Time' },
          { value: '99%', label: 'Satisfaction' },
        ]}
      />

      {/* How to Use FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Quick Guide"
            badgeIcon={Lightbulb}
            title="How to Use This FAQ"
            subtitle="Simple 3-step process to find answers to your questions quickly"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '1',
                icon: Search,
                title: 'Search or Browse',
                desc: 'Use the search bar to find specific topics or browse by category',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                icon: HelpCircle,
                title: 'Read Detailed Answers',
                desc: 'Click on any question to expand and read comprehensive answers',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '3',
                icon: MessageCircle,
                title: 'Still Need Help?',
                desc: 'Contact our support team if you need additional assistance',
                color: 'from-purple-500 to-purple-600'
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-trees-secondary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why FAQ?"
            badgeIcon={Target}
            title="Get Answers Instantly"
            subtitle="Quick solutions to common questions, available 24/7 without waiting for support"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Instant Answers',
                desc: 'Get immediate solutions without waiting for support responses',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Shield,
                title: 'Expert Knowledge',
                desc: 'Curated answers from our technical and customer service experts',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: CheckCircle,
                title: 'Always Updated',
                desc: 'Regularly updated with latest product information and policies',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Star,
                title: '24/7 Available',
                desc: 'Access support information anytime, from anywhere in the world',
                color: 'from-orange-500 to-orange-600'
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
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

      {/* Support Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Commitment"
            badgeIcon={Award}
            title="Expert Support When You Need It"
            subtitle="We're committed to providing exceptional support and quick answers to all your queries"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                value: '<2hr',
                label: 'Response Time',
                desc: 'Average response time for inquiries',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                value: '15K+',
                label: 'Questions Answered',
                desc: 'Total customer queries resolved',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Star,
                value: '4.9/5',
                label: 'Support Rating',
                desc: 'Customer satisfaction score',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: CheckCircle,
                value: '99%',
                label: 'Resolution Rate',
                desc: 'First contact resolution rate',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-trees-primary mb-2">{stat.value}</div>
                  <h4 className="text-trees-secondary mb-2">{stat.label}</h4>
                  <p className="text-xs text-gray-600">{stat.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions Highlight */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Most Asked"
            badgeIcon={Star}
            title="Popular Questions"
            subtitle="Quick answers to the questions we hear most often from our customers"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {popularQuestions.slice(0, 6).map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary/80 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-trees-secondary mb-3">{faq.question}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Browse FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Find Answers"
            badgeIcon={Search}
            title="Search or Browse Questions"
            subtitle="Use search or filter by category to find exactly what you're looking for"
          />

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg glass-card border-trees-primary/20 focus:border-trees-primary"
              />
              {searchQuery && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Badge variant="secondary">
                    {filteredFaqs.length} results
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              const count = faqs.filter(f => cat.id === 'all' ? true : f.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${
                    isActive
                      ? 'bg-trees-primary text-white shadow-lg scale-105'
                      : 'glass-card hover:bg-trees-primary/10 text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{cat.name}</span>
                  {!isActive && (
                    <Badge variant="secondary" className="ml-1">
                      {count}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>

          {/* All FAQs */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-trees-secondary">All Questions</h3>
              <Badge variant="outline" className="text-sm">
                {filteredFaqs.length} questions
              </Badge>
            </div>

            {filteredFaqs.length === 0 ? (
              <ModernCard variant="elevated" className="p-12 text-center">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-gray-700 mb-2">No questions found</h4>
                <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                <ModernButton
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </ModernButton>
              </ModernCard>
            ) : (
              <ModernCard variant="elevated" className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-xl px-6 data-[state=open]:bg-trees-primary/5 data-[state=open]:border-trees-primary/30 transition-all"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5 group">
                        <div className="flex items-start gap-3 pr-4 flex-1">
                          {faq.popular && (
                            <Star className="w-4 h-4 text-trees-primary fill-trees-primary flex-shrink-0 mt-1" />
                          )}
                          <span className="text-gray-800 group-data-[state=open]:text-trees-primary transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed pb-5 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ModernCard>
            )}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Get in Touch"
            badgeIcon={MessageCircle}
            title="Multiple Ways to Reach Us"
            subtitle="Choose the support channel that works best for you. We're here to help!"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Phone Support',
                desc: 'Speak directly with our support team',
                info: '+91 9091744744',
                action: 'Call Now',
                color: 'from-blue-500 to-blue-600',
                onClick: () => window.location.href = 'tel:+919091744744'
              },
              {
                icon: Mail,
                title: 'Email Support',
                desc: 'Detailed inquiries and documentation',
                info: 'support@thetreesplywood.com',
                action: 'Send Email',
                color: 'from-green-500 to-green-600',
                onClick: () => window.location.href = 'mailto:support@thetreesplywood.com'
              },
              {
                icon: MessageCircle,
                title: 'Live Chat',
                desc: 'Quick answers to simple questions',
                info: 'Available 24/7',
                action: 'Start Chat',
                color: 'from-purple-500 to-purple-600',
                onClick: () => toast.info('Live chat feature coming soon!')
              },
            ].map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-8 h-full text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-trees-secondary mb-3">{channel.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {channel.desc}
                  </p>
                  <p className="text-trees-primary mb-6 text-sm font-semibold">{channel.info}</p>
                  <ModernButton 
                    variant="outline" 
                    size="md"
                    fullWidth
                    icon={<channel.icon className="w-4 h-4" />}
                    iconPosition="left"
                    onClick={channel.onClick}
                  >
                    {channel.action}
                  </ModernButton>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Helpful Resources"
            badgeIcon={BookOpen}
            title="Learn More About Our Products"
            subtitle="Explore guides, videos, and documentation to get the most out of your plywood"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Installation Guides',
                desc: 'Step-by-step installation instructions',
                color: 'from-orange-500 to-orange-600',
                page: 'installation'
              },
              {
                icon: Download,
                title: 'Download Center',
                desc: 'Catalogs, brochures, and spec sheets',
                color: 'from-blue-500 to-blue-600',
                page: 'downloads'
              },
              {
                icon: Video,
                title: 'Video Gallery',
                desc: 'Tutorials and product demonstrations',
                color: 'from-purple-500 to-purple-600',
                page: 'resources'
              },
              {
                icon: Award,
                title: 'Warranty Info',
                desc: 'Coverage details and claim process',
                color: 'from-green-500 to-green-600',
                page: 'warranty'
              },
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ModernCard 
                  variant="elevated"
                  className="p-6 h-full cursor-pointer group hover:shadow-xl transition-all duration-300"
                  onClick={() => onNavigate(resource.page)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">{resource.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{resource.desc}</p>
                  <div className="flex items-center text-trees-primary text-sm group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Customer Experiences"
            badgeIcon={Users}
            title="What Our Customers Say About Our Support"
            subtitle="Real feedback from customers about our service and support quality"
          />
          
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ Tips & Best Practices */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Pro Tips"
            badgeIcon={Lightbulb}
            title="Get the Most Out of Our FAQ"
            subtitle="Expert tips to help you find answers faster and use our resources effectively"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Use Keywords',
                desc: 'Search with specific terms like "BWP", "warranty", or "installation" for better results',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Target,
                title: 'Filter by Category',
                desc: 'Narrow down by category (Products, Shipping, Warranty) to see relevant questions only',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Star,
                title: 'Check Popular First',
                desc: 'Start with popular questions - they cover 80% of common queries and concerns',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Download,
                title: 'Download Resources',
                desc: 'For detailed specs, visit our Download Center for PDFs, catalogs, and technical sheets',
                color: 'from-orange-500 to-orange-600'
              },
            ].map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full group hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tip.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">{tip.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{tip.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-8">
              <HelpCircle className="w-5 h-5" />
              <span>Need Help?</span>
            </div>
            
            <h2 className="text-white mb-6">
              Still Have Questions?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Can't find the answer you're looking for? Our expert support team is ready to help with personalized assistance for your specific needs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<MessageCircle className="w-6 h-6" />}
                  onClick={() => onNavigate('contact')}
                >
                  Contact Support
                </ModernButton>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Package className="w-6 h-6" />}
                  onClick={() => onNavigate('sample-request')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Request Samples
                </ModernButton>
              </MagneticButton>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-white/90">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="w-5 h-5" />
                  <p className="font-semibold">Sales</p>
                </div>
                <p className="text-sm text-white/80">+91 9091744744</p>
              </div>
              
              <div className="text-white/90">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-5 h-5" />
                  <p className="font-semibold">Support</p>
                </div>
                <p className="text-sm text-white/80">support@thetreesplywood.com</p>
              </div>
              
              <div className="text-white/90">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <p className="font-semibold">Warranty</p>
                </div>
                <p className="text-sm text-white/80">warranty@thetreesplywood.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
