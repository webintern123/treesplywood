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
  // PRODUCTS & SPECIFICATIONS
  {
    category: 'products',
    question: 'What is the difference between BWP and BWR plywood?',
    answer: (
      <div className="space-y-1">
        <p>● BWP is fully waterproof and can handle constant exposure to water.</p>
        <p>● BWR handles moisture well but isn’t fully waterproof.</p>
        <p>● Use BWP for bathrooms, kitchens, outdoor, or coastal areas.</p>
        <p>● Use BWR for regular home interiors.</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'products',
    question: 'What thickness options do you offer?',
    answer: (
      <p>
        We provide plywood from 4mm to 25mm, depending on the grade. For special sizes, our team can guide you.
      </p>
    ),
    popular: true,
  },
  {
    category: 'products',
    question: 'What are your standard plywood sizes?',
    answer: (
      <div className="space-y-1">
        <p>Common sizes:</p>
        <p>● 8x4 ft</p>
        <p>● 7x4 ft</p>
        <p>● 7x3 ft</p>
        <p>● 6x4 ft</p>
        <p>● 6x3 ft</p>
        <p>Custom sizes are available for bulk or project orders.</p>
      </div>
    ),
    popular: false,
  },
  {
    category: 'products',
    question: 'Are your products certified?',
    answer: (
      <div className="space-y-1">
        <p>Yes, Our sheets follow:</p>
        <p>● ISI Standards</p>
        <p>● ISO 9001:2015</p>
        <p>● FSC Certified timber</p>
        <p>● E0/E1 low-emission standards</p>
        <p>Certificates are available on request.</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'products',
    question: 'Is your plywood termite and borer resistant?',
    answer: (
      <p>Yes. Every sheet is treated to protect against termites and borers, and this is covered under warranty.</p>
    ),
    popular: false,
  },

  // ORDERING & PRICING
  {
    category: 'ordering',
    question: 'How can I get a price quote?',
    answer: (
      <p>
        You can call us, email us, or fill out the enquiry form. Share your product type, thickness, quantity, and location for an accurate quote.
      </p>
    ),
    popular: true,
  },
  {
    category: 'ordering',
    question: 'What is the minimum order quantity?',
    answer: (
      <p>For most grades, the minimum is 10–20 sheets. Custom orders may require a higher minimum.</p>
    ),
    popular: false,
  },
  {
    category: 'ordering',
    question: 'Do you offer discounts for bulk orders?',
    answer: (
      <p>Yes, large orders and long-term projects get special pricing. Speak to our sales team for details.</p>
    ),
    popular: true,
  },
  {
    category: 'ordering',
    question: 'What payment methods do you accept?',
    answer: (
      <p>We accept bank transfers, cheques, and digital payments. Credit terms may be offered to registered partners.</p>
    ),
    popular: false,
  },
  {
    category: 'ordering',
    question: 'Can I get samples before placing an order?',
    answer: (
      <p>Yes! We offer free samples so you can check the quality before buying.</p>
    ),
    popular: true,
  },

  // SHIPPING & DELIVERY
  {
    category: 'shipping',
    question: 'How long does delivery take?',
    answer: (
      <div className="space-y-1">
        <p>● Within city: 2–3 days</p>
        <p>● Within state: 5–7 days</p>
        <p>● Other states: 7–14 days</p>
        <p>● Custom products may take a bit longer.</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'shipping',
    question: 'Do you deliver across India?',
    answer: <p>Yes, we ship to all major cities and towns.</p>,
    popular: true,
  },
  {
    category: 'shipping',
    question: 'How are shipping charges calculated?',
    answer: (
      <p>Charges depend on your location, quantity, and distance. Bulk orders may get free or discounted shipping.</p>
    ),
    popular: false,
  },
  {
    category: 'shipping',
    question: 'How do you pack plywood for delivery?',
    answer: (
      <p>Sheets are wrapped, strapped, and packed to protect against dust, moisture, and handling damage.</p>
    ),
    popular: false,
  },
  {
    category: 'shipping',
    question: 'Can I track my order?',
    answer: <p>Yes. Once dispatched, you’ll receive tracking details via SMS or email.</p>,
    popular: true,
  },

  // INSTALLATION & USAGE
  {
    category: 'installation',
    question: 'How should plywood be stored before installation?',
    answer: (
      <p>Keep sheets flat, away from sunlight and moisture. Store them in a dry, ventilated area.</p>
    ),
    popular: false,
  },
  {
    category: 'installation',
    question: 'Do I need to add any treatment before using plywood?',
    answer: (
      <p>Our plywood is already treated. For outdoor use, seal the edges and surface for extra protection.</p>
    ),
    popular: true,
  },
  {
    category: 'installation',
    question: 'Which adhesive should I use?',
    answer: (
      <div className="space-y-1">
        <p>● Interiors: PVA/wood glue</p>
        <p>● Wet areas: Waterproof adhesive (PU / epoxy)</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'installation',
    question: 'Can I use plywood outdoors?',
    answer: (
      <p>Yes, BWP and Marine Grade are suitable if sealed properly. MR grade is not recommended outdoors.</p>
    ),
    popular: true,
  },
  {
    category: 'installation',
    question: 'What tools are best for cutting plywood?',
    answer: (
      <p>A circular saw, table saw, or jigsaw with a fine blade gives a clean cut. Use a straight guide for accuracy.</p>
    ),
    popular: false,
  },

  // WARRANTY & RETURNS
  {
    category: 'warranty',
    question: 'What does the warranty cover?',
    answer: (
      <div className="space-y-1">
        <p>Manufacturing issues like:</p>
        <p>● Delamination</p>
        <p>● Core gaps</p>
        <p>● Bonding failure</p>
        <p>● Thickness variations</p>
        <p>● Duration varies by product (10 years to lifetime).</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'warranty',
    question: 'How do I submit a warranty claim?',
    answer: (
      <p>Share your invoice, photos, and product details with our support team. We will guide you through the process.</p>
    ),
    popular: false,
  },
  {
    category: 'warranty',
    question: 'What is not covered under warranty?',
    answer: (
      <div className="space-y-1">
        <p>● Incorrect installation</p>
        <p>● Water damage on MR-grade sheets</p>
        <p>● Improper storage</p>
        <p>● Physical damage</p>
        <p>● Natural variations in veneer</p>
        <p>● Fire or floods</p>
      </div>
    ),
    popular: true,
  },
  {
    category: 'warranty',
    question: 'Can I return plywood?',
    answer: (
      <p>Returns are accepted only for wrong or defective products. Custom sizes cannot be returned.</p>
    ),
    popular: false,
  },
  {
    category: 'warranty',
    question: 'Is the warranty transferable?',
    answer: (
      <p>Yes. It can be transferred to the next property owner with receipts.</p>
    ),
    popular: false,
  },

  // SUSTAINABILITY
  {
    category: 'sustainability',
    question: 'Are your products eco-friendly?',
    answer: (
      <p>Yes. We use FSC-certified wood and low-emission glue to ensure safe indoor air quality.</p>
    ),
    popular: true,
  },
  {
    category: 'sustainability',
    question: 'What does FSC certification mean?',
    answer: (
      <p>It guarantees that the timber comes from forests managed responsibly and ethically.</p>
    ),
    popular: false,
  },
  {
    category: 'sustainability',
    question: 'What are E0 and E1 emission standards?',
    answer: (
      <p>These standards measure formaldehyde emissions. E0 is the safest level for indoor use.</p>
    ),
    popular: true,
  },
  {
    category: 'sustainability',
    question: 'Can plywood be recycled?',
    answer: (
      <p>Yes. It can be reused for furniture, DIY projects, or repurposed for other wood products.</p>
    ),
    popular: false,
  },
  {
    category: 'sustainability',
    question: 'Does Tree’s Plywood follow green practices?',
    answer: (
      <div className="space-y-1">
        <p>Yes. Our initiatives include:</p>
        <p>● Water recycling</p>
        <p>● Solar energy usage</p>
        <p>● Waste management</p>
        <p>● Low-emission adhesives</p>
        <p>● Energy-efficient machinery</p>
      </div>
    ),
    popular: true,
  },
];

  const filteredFaqs = faqs.filter((faq) => {
  const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
  // Convert answer to plain string if needed
  const answerText = typeof faq.answer === 'string' ? faq.answer : '';
  const matchesSearch = 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    answerText.toLowerCase().includes(searchQuery.toLowerCase());
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
        title={"Your Questions, \nAnswered Here – FAQs"}
        subtitle="Want Support? Start Now"
        description="Looking for clarity on grades, warranties, services, quality, or product use? Here are quick answers to everything you may want to know."
        image="https://images.unsplash.com/photo-1759392790299-a8874cabc000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwJTIwZGVza3xlbnwxfHx8fDE3NjIyNTMwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="365 Days Year-Round Support"
        badgeIcon={HelpCircle}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '35+', label: 'Helpful FAQs Listed' },
          { value: 'Within 2 Hours  ', label: 'Fast Support  ' },
          { value: '99%', label: 'Happy Customers' },
        ]}
      />

      {/* How to Use FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Quick Help Guide"
            badgeIcon={Lightbulb}
            title="How to Use This Page - Finding Answers Made Easy"
            subtitle="Find answers in just a few steps"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '1',
                icon: Search,
                title: ' Search or Browse Your Topic',
                desc: 'Type your question in the search bar or explore the categories.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                icon: HelpCircle,
                title: 'Open the Answer',
                desc: ' Click any question to view the full explanation.',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '3',
                icon: MessageCircle,
                title: 'Still Confused?',
                desc: ' Our support team is just a message away.',
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
            badge="Why This FAQ Exists"
            badgeIcon={Target}
            title="Quick Answers Anytime"
            subtitle="We created this FAQ to help you find quick answers without waiting."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Fast Solutions',
                desc: 'Find the most asked questions answered in seconds.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Shield,
                title: 'Expert-Checked',
                desc: 'All answers are verified by our support and technical specialists.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: CheckCircle,
                title: 'Fresh Content',
                desc: 'We update this page as we introduce new products or features.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Star,
                title: 'Always Open',
                desc: ' Help is available round the clock — just scroll and find what you need.',
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
            badge="Our Support Promise"
            badgeIcon={Award}
            title="We're Here Whenever You Need Us"
            subtitle="Whether it's a quick question or detailed guidance, our team is always ready to help."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                value: '<2hrs',
                label: 'Quick Response Time',
                desc: ' We usually reply within a couple of hours.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                value: '15,000+',
                label: 'Questions Answered',
                desc: 'Thousands of customer doubts solved with care.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Star,
                value: '4.9 / 5',
                label: 'Customer Rating',
                desc: ' Loved for our helpful and friendly support.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: CheckCircle,
                value: '99%',
                label: ' Resolution Success',
                desc: 'Most issues are fixed on the first interaction.',
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
            badge="More Trending"
            badgeIcon={Star}
            title="Frequently Asked Questions"
            subtitle="Quick answers to the things people ask us the most."
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
                      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
  {faq.answer}
</p>

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
            badge="Get the Answers You’re Looking For"
            badgeIcon={Search}
            title="Search or filter FAQs to find exactly what you need"
            subtitle="Quick answers to the most common questions about our products, pricing, delivery, installation, warranty, and sustainability."
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
            badge="Stay Updated With Us"
            badgeIcon={MessageCircle}
            title="We're Here to Help"
            subtitle="Reach out in the way that’s easiest for you, our team is always happy to assist."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                desc: 'Have a quick question? Speak directly with our team.',
                info: '+91 9091744744',
                action: 'Call Now',
                color: 'from-blue-500 to-blue-600',
                onClick: () => window.location.href = 'tel:+919091744744'
              },
              {
                icon: Mail,
                title: 'Email Us',
                desc: 'For detailed queries, documents, or support requests.',
                info: 'support@thetreesplywood.com',
                action: 'Send Email',
                color: 'from-green-500 to-green-600',
                onClick: () => window.location.href = 'mailto:support@thetreesplywood.com'
              },
              {
                icon: MessageCircle,
                title: 'Chat With Us',
                desc: 'Need a fast reply? Our chat support is open anytime.',
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
            badge="Useful Resources Info"
            badgeIcon={BookOpen}
            title="Your Go-To Information Hub"
            subtitle="All the important guides and tools you need to plan your project with confidence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Installation Guides',
                desc: 'Clear steps to install and finish your plywood',
                color: 'from-orange-500 to-orange-600',
                page: 'installation'
              },
              {
                icon: Download,
                title: 'Download Center',
                desc: 'Catalogs, brochures, and product details in one place',
                color: 'from-blue-500 to-blue-600',
                page: 'downloads'
              },
              {
                icon: Video,
                title: 'Video Gallery',
                desc: 'Short tutorials and practical demos',
                color: 'from-purple-500 to-purple-600',
                page: 'resources'
              },
              {
                icon: Award,
                title: 'Warranty Information',
                desc: "Know what's covered and how to claim",
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
            badge="On Their Words"
            badgeIcon={Users}
            title="Customer Feedback on Our Support"
            subtitle="Honest reviews from customers about our service, guidance, and product quality."
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
            badge="Helpful Tips"
            badgeIcon={Lightbulb}
            title="Find Answers Quickly"
            subtitle="A few simple ways to get what you need from our FAQ section:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Search Smart',
                desc: 'Use clear words like “BWP”, “warranty”, or “installation” to get the best results.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Target,
                title: 'Pick a Category',
                desc: 'Choose a section such as Product, Delivery, or Warranty to see only related questions.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Star,
                title: 'Start with Popular Questions',
                desc: 'Most common doubts are answered right at the top, its saves time.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Download,
                title: 'Check the Download Center',
                desc: 'If you need detailed specs or brochures, you can download them directly from our resources page.',
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
              <span>Need Assistance?</span>
            </div>
            
            <h2 className="text-white mb-6">
              Still Looking for Answers? Reach out anytime - We’re Here to Help.
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              No worries, our team is always ready to help. Whether it’s product guidance, sample requests, or warranty support, just reach out and we’ll assist you quickly.
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
