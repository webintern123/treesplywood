import { 
  Building2, Home, Store, Briefcase, MapPin, Calendar, Mail, Download, Award, 
  ChevronRight, Lightbulb, Target, Users, CheckCircle2, Star, HelpCircle,
  MessageSquare, ArrowRight, Sparkles, Trophy, TrendingUp, Shield, Zap,
  Filter, Grid3x3, Image as ImageIcon
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { PageHero } from '../components/PageHero';
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

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Villa',
      category: 'Residential',
      location: 'Hyderabad, India ',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1708157644517-06892bf1b96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvbWUlMjB3b29kJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MTk4NzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Interior works fully include wall paneling and custom cabinets made with Samrat plywood. The warm grain finish matched the clean, modern look of the home.',
      products: ['Samrat', 'Ujval'],
      icon: Home,
      area: '4,500 sq ft',
      featured: true,
    },
    {
      id: 2,
      title: 'Upscale Restaurant & Bar',
      category: 'Commercial',
      location: 'Bangalore, India',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1622140739492-f82f386260b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd29vZCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc2MTk4NzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ananta plywood is chosen for its durability and easy upkeep in high-traffic spaces, built for Feature walls, seating, and bar elements.',
      products: ['Ananta', 'Samrat'],
      icon: Store,
      area: '3,200 sq ft',
      featured: true,
    },
    {
      id: 3,
      title: 'Corporate Office Renovation',
      category: 'Commercial',
      location: 'Delhi NCR, India',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1725913137143-8f160e27852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjB3b29kJTIwcGFuZWxzfGVufDF8fHx8MTc2MTk4NzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Agni fire-rated plywood, created for Acoustic panels, partitions, and meeting room finishes to meet strict safety standards',
      products: ['Agni', 'Ananta'],
      icon: Briefcase,
      area: '12,000 sq ft',
      featured: false,
    },
    {
      id: 4,
      title: 'Boutique Hotel Interior',
      category: 'Hospitality',
      location: 'Goa, India',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1631562836199-afa0a3ea4602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwd29vZCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE5ODc0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bhima (Marine Grade) plywood is ideal for humid, coastal weather, made for Guest rooms, lobby features, and outdoor pieces.',
      products: ['Bhima', 'Samrat'],
      icon: Building2,
      area: '8,500 sq ft',
      featured: true,
    },
    {
      id: 5,
      title: 'High-End Retail Store',
      category: 'Retail',
      location: 'Nellore, India ',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1564691848938-d0fc26235733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHdvb2QlMjBmaXh0dXJlc3xlbnwxfHx8fDE3NjE5ODc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Samrat plywood for a premium, clean look created for Display shelves, fixtures, and changing rooms finishes.',
      products: ['Samrat', 'Ananta'],
      icon: Store,
      area: '2,800 sq ft',
      featured: false,
    },
    {
      id: 6,
      title: 'Designer Furniture Collection',
      category: 'Furniture',
      location: 'Multiple Locations',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1631669394390-baf737ef47de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMHBseXdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYxOTg3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Collaborative furniture line featuring chairs and tables. Precise calibration ensured perfect joinery and smooth finishes every time.',
      products: ['Samrat', 'Bhima'],
      icon: Home,
      area: 'Multiple',
      featured: false,
    },
    {
      id: 7,
      title: 'Luxury Apartment Complex',
      category: 'Residential',
      location: 'Chennai, India',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE5ODc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete fit-outs for 24 premium apartments including kitchens, wardrobes, and decorative paneling.',
      products: ['Samrat', 'Ujval', 'Ananta'],
      icon: Home,
      area: '36,000 sq ft',
      featured: false,
    },
    {
      id: 8,
      title: 'Educational Institution',
      category: 'Commercial',
      location: 'Vijayawada, India ',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjB3b29kJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTk4NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Agni plywood for dependable safety and long-term use is made for Fire-rated panels, classroom furniture, and library units.',
      products: ['Agni', 'Ananta'],
      icon: Building2,
      area: '15,000 sq ft',
      featured: false,
    },
    {
      id: 9,
      title: 'Spa & Wellness Center',
      category: 'Hospitality',
      location: 'Hyderabad, India ',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHdvb2QlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE5ODc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bhima marine-grade plywood to withstand constant humidity is built with Treatment rooms and relaxation areas.',
      products: ['Bhima', 'Vajra'],
      icon: Building2,
      area: '5,500 sq ft',
      featured: false,
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Furniture'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
                <BreadcrumbPage className="text-trees-primary font-semibold">
                     Project Gallery
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}  
      <PageHero  
        title={"Inspiring Ideas Turned \n into Beautiful Spaces"}
        subtitle="Real Quality  You Can See"
        description="Take a look at the homes, offices, and commercial spaces built using Tree’s Plywood.
Every project reflects our commitment to quality, strength, and thoughtful design."
        image="https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMHBseXdvb2R8ZW58MXx8fHwxNzYyMjM0ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Our Signature Projects"
        badgeIcon={Award}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: '10,000+', label: 'Projects Completed ' },
          { value: '500+', label: 'Featured Works' },
          { value: '98%', label: 'Client Satisfaction' },
        ]}
      />

      {/* Why Projects Matter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why We Share Our Projects"
            badgeIcon={Target}
            title="Real Creations, Real Stories."
            subtitle="See how architects, designers, and contractors use Tree’s Plywood to bring their ideas to life."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Design Ideas',
                desc: 'Explore how our plywood is used in actual homes, offices, and commercial spaces.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: CheckCircle2,
                title: 'Proven Quality',
                desc: 'View projects that show how well our products hold up in different conditions & environments.',
                color: 'from-green-500 to-green-600'
              },
              {
                
                icon: Users,
                title: 'Trusted by Professionals',
                desc: 'Join thousands of architects and designers who choose Tree’s for quality, reliability, and performance.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Trophy,
                title: 'Award-Winning Work',
                desc: 'Many of the projects featured here have received recognition in design and architecture.',
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

      <PageContainer className="space-y-20">
        {/* Category Filter Section */}
        <section>
          <ModernSectionHeader
            badge="See Our Worked Projects"
            badgeIcon={Filter}
            title="Find What Inspires You"
            subtitle="Find projects based on the type of space you’re working on."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-trees-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-trees-primary hover:text-trees-primary'
                }`}
              >
                {category}
                {category === 'All' && ` (${projects.length})`}
                {category !== 'All' && ` (${projects.filter(p => p.category === category).length})`}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trees-secondary/90 via-trees-secondary/40 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-trees-primary text-white font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-white/95 rounded-lg">
                        <project.icon className="w-4 h-4 text-trees-primary" />
                      </div>
                      <Badge className="bg-white/95 text-trees-primary font-semibold">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-white mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Location & Year */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-trees-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-trees-primary" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Area */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Project Area:</span> {project.area}
                    </p>
                  </div>

                  {/* Products Used */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Products Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.products.map((product, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-trees-primary/10 text-trees-primary px-3 py-1 rounded-full font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500 text-sm">Try selecting a different category</p>
            </div>
          )}
        </section>

        {/* Project Impact Stats */}
        <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden rounded-3xl">
          

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-white mb-4">Our Project Impact</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Creating better spaces across India with quality materials and dependable service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '10,000+', label: 'Projects Completed', icon: Building2 },
                { value: '50M+', label: 'Spaces Built with Our Products', icon: Grid3x3 },
                { value: '98%', label: 'On-Time Delivery', icon: TrendingUp },
                { value: '15+', label: 'Years Experience', icon: Shield },
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

        {/* How We Work Process */}
        <section>
          <ModernSectionHeader
            badge="How We Help You"
            badgeIcon={Zap}
            title="A Smooth Process from Planning to Completion"
            subtitle="From concept to completion, we provide end-to-end support for architects, designers, and contractors"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
              
                title: 'Consultation',
                description: 'Share your project details with our team so we understand exactly what you need.',
                icon: MessageSquare,
              },
              {
                
                title: 'Product Selection',
                description: 'We help you choose the right plywood based on usage, durability, and design style.',
                icon: CheckCircle2,
              },
              {
                
                title: 'Samples & Approval',
                description: 'Get product samples to check finish, strength, and quality before moving ahead.',
                icon: Award,
              },
              {
                
                title: 'Delivery & After-Support',
                description: 'Enjoy timely delivery and ongoing technical help even after installation.',
                icon: Sparkles,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    
                    <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-trees-primary" />
                    </div>
                  </div>
                  <h4 className="text-trees-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </section>
      </PageContainer>

      

      {/* Projects FAQ */}
      <section className="section-padding bg-white">
        <PageContainer>
          <ModernSectionHeader
            badge="Need Help?"
            badgeIcon={HelpCircle}
            title="We’ve Got Answers"
            subtitle="Quick answers about our featured projects and how we can support yours."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="submit" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I submit my project to be featured?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, If you have completed a project using Tree’s Plywood, share your photos and details with our team. Selected projects will be featured on our website and social pages as well.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="connect" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I connect with the architects or designers shown here?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We can help with that. If the featured professional agrees, we’ll connect you. Just tell us which project you’re interested in.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="products" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How do I know which products were used in a project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Each project mentions the plywood types used. If you need more details like thickness or finishes, visit our Products or Downloads page. Our team can also suggest the best products for similar work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Do you support project planning like this?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes. Our team helps with product selection, samples, technical guidance, and installation support. We work with architects, designers, and contractors from start to finish.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="samples" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I request samples of the materials used?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Of course. You can request free samples of any plywood shown in the gallery. Tell us which project inspired you, and we’ll send samples to your office or site.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Have a project in mind?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Our Project Team
              </ModernButton>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
        

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white mb-6">Ready to Bring Your Project to Life?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              
              Our Architecture & Design team is here to help with product selection, samples, and technical 
guidance—every step of the way.

            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Mail className="w-6 h-6" />}
                  onClick={() => onNavigate('professionals')}
                >
                  Contact A&D Team
                </ModernButton>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Download className="w-6 h-6" />}
                  onClick={() => onNavigate('downloads')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Download Guidelines
                </ModernButton>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Award className="w-6 h-6" />}
                  onClick={() => onNavigate('sample-request')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Request Samples
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
