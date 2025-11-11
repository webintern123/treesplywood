import { 
  Download, Calculator, Package, Scale, Lightbulb, BookOpen, MapPin, HelpCircle, 
  FileText, Wrench, Award, ArrowRight, Sparkles, ChevronRight, Target, Clock, 
  Rocket, Users, Star, MessageSquare, CheckCircle2, TrendingUp, Shield, Zap
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { AdvancedCard } from '../components/design-system/AdvancedCard';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { MagneticButton } from '../components/design-system/MagneticButton';
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

interface ResourcesPageProps {
  onNavigate?: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps = {}) {
  const resourceCategories = [
    {
      title: 'Planning & Design Tools',
      description: 'Calculate, compare, and plan your perfect project',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      resources: [
        {
          name: 'Plywood Calculator',
          description: 'Calculate exact material requirements for your project with wastage optimization',
          icon: Calculator,
          page: 'calculator',
          badge: 'Interactive Tool',
        },
        {
          name: 'Product Comparison',
          description: 'Compare up to 4 products side-by-side to find the perfect match',
          icon: Scale,
          page: 'comparison',
          badge: 'Compare',
        },
      ],
    },
    {
      title: 'Product Resources',
      description: 'Catalogs, samples, and technical documentation',
      icon: FileText,
      color: 'from-trees-primary to-trees-secondary',
      resources: [
        {
          name: 'Downloads Center',
          description: 'Product catalogs, technical specs, certifications, and installation guides',
          icon: Download,
          page: 'downloads',
          badge: '50+ Files',
        },
        {
          name: 'Request Free Samples',
          description: 'Order up to 5 free product samples delivered to your door',
          icon: Package,
          page: 'sample-request',
          badge: 'Free Shipping',
        },
      ],
    },
    {
      title: 'Inspiration & Learning',
      description: 'Real projects, expert tips, and industry insights',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500',
      resources: [
        {
          name: 'Projects Gallery',
          description: 'Explore stunning projects built with our plywood products',
          icon: Lightbulb,
          page: 'projects',
          badge: '200+ Projects',
        },
        {
          name: 'Blog & Articles',
          description: 'Expert insights, design tips, and industry trends',
          icon: BookOpen,
          page: 'blogs',
          badge: 'Weekly Updates',
        },
      ],
    },
    {
      title: 'Professional Services',
      description: 'Expert support and professional resources',
      icon: Wrench,
      color: 'from-green-500 to-emerald-600',
      resources: [
        {
          name: 'Installation Services',
          description: 'Book professional installation with certified experts',
          icon: Wrench,
          page: 'installation',
          badge: 'Certified',
        },
        {
          name: 'For Professionals',
          description: 'CAD files, bulk pricing, and technical support for architects',
          icon: Award,
          page: 'professionals',
          badge: 'B2B',
        },
      ],
    },
    {
      title: 'Support & Guidance',
      description: 'Get help and find answers to your questions',
      icon: HelpCircle,
      color: 'from-purple-500 to-pink-500',
      resources: [
        {
          name: 'Find a Dealer',
          description: 'Locate authorized dealers and distributors near you',
          icon: MapPin,
          page: 'dealers',
          badge: 'Nationwide',
        },
        {
          name: 'FAQ',
          description: 'Quick answers to commonly asked questions',
          icon: HelpCircle,
          page: 'faq',
          badge: 'Instant Help',
        },
      ],
    },
  ];

  const quickStats = [
    { value: '50+', label: 'Downloadable Resources' },
    { value: '200+', label: 'Project Inspirations' },
    { value: '500+', label: 'Dealers Nationwide' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => onNavigate?.('home')}
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
                  Resources & Tools
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        title="Resources & Tools Hub"
        subtitle="Everything You Need in One Place"
        description="From planning tools and product catalogs to installation guides and expert support—find all the resources you need to make informed decisions and bring your projects to life."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZXMlMjB0b29scyUyMGxpYnJhcnl8ZW58MXx8fHwxNzYyMjM0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Complete Resource Library"
        badgeIcon={Sparkles}
        height="md"
        overlayOpacity="medium"
        stats={quickStats}
      />

      {/* Why Use Our Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Choose Our Resources"
            badgeIcon={Target}
            title="Everything You Need to Succeed"
            subtitle="Comprehensive tools, guides, and support designed to help you at every stage of your project journey"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Save Time',
                desc: 'Quick access to calculators, comparisons, and documentation in one place',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Rocket,
                title: 'Make Better Decisions',
                desc: 'Data-driven tools and expert insights to choose the right products',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Clock,
                title: 'Always Available',
                desc: '24/7 access to tools, downloads, and support resources whenever you need',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Users,
                title: 'Expert Support',
                desc: 'Professional guidance from installation services to technical specifications',
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-trees-primary mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section className="section-padding">
        <PageContainer>
          <div className="space-y-20">
            <div>
              <ModernSectionHeader
                badge="Explore All Resources"
                badgeIcon={Sparkles}
                title="Browse by Category"
                subtitle="Access our comprehensive library of tools, guides, and resources organized to help you at every stage of your project journey"
              />

              <div className="space-y-12">
                {resourceCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.resources.map((resource, resourceIndex) => (
                        <motion.div
                          key={resourceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + resourceIndex * 0.05 }}
                        >
                          <AdvancedCard
  variant="default"           // Allowed values: "glass" | "default"
  hoverEffect="3d"            // Allowed values: "3d" | "glow" | "magnetic" | "tilt"
  className="p-6 cursor-pointer group h-full"
  onClick={() => onNavigate?.(resource.page)}
>

                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-trees-primary group-hover:scale-110 transition-all duration-300">
                                <resource.icon className="w-6 h-6 text-trees-primary group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="group-hover:text-trees-primary transition-colors">
                                    {resource.name}
                                  </h4>
                                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-trees-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                </div>
                                <p className="text-gray-600 text-sm mb-3">
                                  {resource.description}
                                </p>
                                <div className="inline-flex items-center px-3 py-1 bg-trees-primary/10 text-trees-primary rounded-full text-xs font-semibold">
                                  {resource.badge}
                                </div>
                              </div>
                            </div>
                          </AdvancedCard>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Featured Resources - Top Picks */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Most Popular"
            badgeIcon={Star}
            title="Featured Resources"
            subtitle="Our most accessed and valuable resources to jumpstart your project"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: 'Plywood Calculator',
                description: 'Our #1 tool for accurate material estimation',
                stats: '10K+ uses/month',
                color: 'from-blue-500 to-blue-600',
                page: 'calculator'
              },
              {
                icon: Download,
                title: 'Product Catalogs',
                description: 'Complete specifications and technical data',
                stats: '50+ documents',
                color: 'from-trees-primary to-trees-secondary',
                page: 'downloads'
              },
              {
                icon: Lightbulb,
                title: 'Project Gallery',
                description: 'Real installations for design inspiration',
                stats: '200+ projects',
                color: 'from-orange-500 to-red-500',
                page: 'projects'
              },
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div 
                  className="glass-card rounded-2xl p-8 h-full cursor-pointer group"
                  onClick={() => onNavigate?.(resource.page)}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6`}>
                    <resource.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-3 group-hover:text-trees-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-trees-primary">{resource.stats}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-trees-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Impact Stats */}
      <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Trusted by Professionals Nationwide</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our resources help thousands of professionals, architects, and homeowners make better decisions every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Monthly Users', icon: Users },
              { value: '98%', label: 'Satisfaction Rate', icon: Star },
              { value: '10K+', label: 'Downloads/Month', icon: TrendingUp },
              { value: '24/7', label: 'Always Available', icon: Shield },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Customer Stories"
            badgeIcon={Star}
            title="What Our Users Say"
            subtitle="Hear from professionals who use our resources daily to deliver exceptional results"
          />
          <Testimonials />
        </div>
      </section>

      {/* Resources FAQ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Resources FAQ"
            subtitle="Common questions about accessing and using our resource library"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="access" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Are all resources free to access?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! All our digital resources including the plywood calculator, product comparison tool, 
                  downloads center, and project gallery are completely free to access. Some services like 
                  professional installation and sample requests may have associated costs for shipping or service 
                  fees, but all educational and planning resources are free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How often are resources updated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We continuously update our resource library. Product catalogs and technical specifications are 
                  updated quarterly or when new products launch. Our blog is updated weekly with new articles. 
                  The project gallery adds new installations monthly. Calculator tools and technical documents are 
                  reviewed and updated as needed to ensure accuracy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="download" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I download resources for offline use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! Our Downloads Center offers PDF versions of product catalogs, technical specifications, 
                  installation guides, and certification documents that you can download and use offline. 
                  Interactive tools like the calculator need to be accessed online, but you can save or print 
                  your calculation results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="professional" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Are there special resources for professionals?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! Our "For Professionals" section offers specialized resources including CAD files, 
                  BIM objects, technical drawings, bulk pricing information, and dedicated technical support. 
                  Architects, contractors, and designers can also request sample kits and access installation 
                  training materials. Register as a professional to unlock additional resources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What if I can't find what I'm looking for?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  If you can't find a specific resource, please contact our support team through the Contact page. 
                  We're always happy to help you find the information you need or create new resources based on 
                  customer requests. You can also check our FAQ section for quick answers or use the dealer 
                  locator to speak with a local expert.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still need assistance?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => onNavigate?.('contact')}
              >
                Contact Our Support Team
              </ModernButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Explore our complete resource library and discover how The Trees Plywood can help bring your project vision to life
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Calculator className="w-6 h-6" />}
                  onClick={() => onNavigate?.('calculator')}
                >
                  Try Our Calculator
                </ModernButton>
              </MagneticButton>
              <ModernButton
                variant="outline"
                size="xl"
                icon={<Download className="w-6 h-6" />}
                onClick={() => onNavigate?.('downloads')}
                className="border-white text-white hover:bg-white/20"
              >
                Browse Downloads
              </ModernButton>
              <ModernButton
                variant="outline"
                size="xl"
                icon={<Package className="w-6 h-6" />}
                onClick={() => onNavigate?.('sample-request')}
                className="border-white text-white hover:bg-white/20"
              >
                Request Samples
              </ModernButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
