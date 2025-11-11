import { 
  Calendar, User, Clock, ArrowRight, Tag, BookOpen, ChevronRight, Target,
  Lightbulb, TrendingUp, Users, Star, HelpCircle, MessageSquare, Mail,
  Sparkles, Award, CheckCircle2, Zap, Search, Filter, Anchor, Home, Leaf,
  ShieldCheck, Flame, Palette, AlertTriangle, Wrench, HeartPulse, BarChart3
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Choosing the Right Marine Plywood for Your Boat Project',
    excerpt: 'Marine plywood is specifically engineered to withstand moisture and humidity. Learn about BWP grade certification, core construction, and why The Trees Bhima Marine is the gold standard for marine applications.',
    author: 'Rajesh Kumar',
    date: 'November 4, 2024',
    readTime: '6 min read',
    category: 'Marine Applications',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=500&fit=crop',
    featured: true,
    trending: true,
  },
  {
    id: '2',
    title: '5 Signs You Need to Replace Your Kitchen Cabinets',
    excerpt: 'Kitchen cabinets endure daily wear and tear. Discover the telltale signs of damage, warping, and moisture issues that indicate it\'s time for an upgrade with high-quality plywood.',
    author: 'Priya Sharma',
    date: 'November 1, 2024',
    readTime: '5 min read',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop',
    trending: true,
  },
  {
    id: '3',
    title: 'Sustainable Forestry: How FSC Certification Protects Our Future',
    excerpt: 'FSC certification ensures responsible forest management. Learn how The Trees Plywood sources timber sustainably and contributes to environmental conservation while delivering premium quality.',
    author: 'Dr. Anand Patel',
    date: 'October 29, 2024',
    readTime: '7 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
    trending: true,
  },
  {
    id: '4',
    title: 'Commercial vs Residential Plywood: Understanding the Difference',
    excerpt: 'Not all plywood is created equal. Explore the key differences between commercial-grade and residential plywood in terms of durability, cost, and ideal applications for your project.',
    author: 'Amit Singh',
    date: 'October 27, 2024',
    readTime: '6 min read',
    category: 'Product Guide',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop',
  },
  {
    id: '5',
    title: 'Fire-Resistant Plywood: Safety Standards and Applications',
    excerpt: 'Fire safety is paramount in construction. Learn about fire-retardant plywood, IS:5509 standards, flame spread ratings, and where fire-resistant materials are mandatory.',
    author: 'Suresh Reddy',
    date: 'October 25, 2024',
    readTime: '5 min read',
    category: 'Safety & Standards',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=500&fit=crop',
  },
  {
    id: '6',
    title: 'Top 10 Interior Design Trends Using Premium Plywood',
    excerpt: 'From natural wood finishes to contemporary patterns, premium plywood like Samrat and Ujval is transforming modern interiors. Discover the latest trends in textured laminates and veneer designs.',
    author: 'Neha Kapoor',
    date: 'October 22, 2024',
    readTime: '8 min read',
    category: 'Design Trends',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop',
  },
  {
    id: '7',
    title: 'How to Store Plywood Correctly to Prevent Warping',
    excerpt: 'Proper storage is critical for maintaining plywood quality. Learn professional tips on stacking, humidity control, ventilation, and protection from direct sunlight.',
    author: 'Vikram Malhotra',
    date: 'October 20, 2024',
    readTime: '4 min read',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop',
  },
  {
    id: '8',
    title: 'Understanding E0 and E1 Emission Standards in Plywood',
    excerpt: 'Indoor air quality matters. Understand formaldehyde emission standards, health impacts, and why E0-grade plywood from The Trees ensures a safer living environment.',
    author: 'Dr. Meera Gupta',
    date: 'October 18, 2024',
    readTime: '6 min read',
    category: 'Health & Safety',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
  },
  {
    id: '9',
    title: 'Plywood vs MDF vs Particle Board: A Complete Comparison',
    excerpt: 'Choosing the right material can make or break your project. We compare strength, moisture resistance, cost, and best-use scenarios for each engineered wood product.',
    author: 'Arun Verma',
    date: 'October 15, 2024',
    readTime: '7 min read',
    category: 'Product Comparison',
    image: 'https://images.unsplash.com/photo-1614963617870-c2e6b4a5be6f?w=800&h=500&fit=crop',
  },
  {
    id: '10',
    title: 'The Ultimate Guide to Plywood Thickness Selection',
    excerpt: 'Choosing the right thickness is crucial for structural integrity. From 4mm panels to 25mm boards, learn which thickness suits your specific application needs.',
    author: 'Rajesh Kumar',
    date: 'October 12, 2024',
    readTime: '6 min read',
    category: 'Product Guide',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=500&fit=crop',
  },
  {
    id: '11',
    title: 'Creating Stunning Feature Walls with Decorative Plywood',
    excerpt: 'Transform your space with decorative plywood panels. Explore texture options, installation techniques, and design ideas for creating eye-catching accent walls.',
    author: 'Neha Kapoor',
    date: 'October 10, 2024',
    readTime: '5 min read',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=500&fit=crop',
  },
  {
    id: '12',
    title: 'Waterproofing Techniques for Bathroom Plywood Applications',
    excerpt: 'Bathrooms present unique moisture challenges. Learn about marine-grade options, sealing methods, and installation best practices for wet areas.',
    author: 'Amit Singh',
    date: 'October 8, 2024',
    readTime: '6 min read',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop',
  },
];

const categories = [
  'All',
  'Marine Applications',
  'Interior Design',
  'Sustainability',
  'Product Guide',
  'Design Trends',
  'Safety & Standards',
  'Maintenance Tips',
  'Health & Safety',
  'Product Comparison',
];

interface BlogsPageProps {
  onBlogSelect?: (blogId: string) => void;
  onNavigate?: (page: string) => void;
}

export function BlogsPage({ onBlogSelect, onNavigate }: BlogsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = blogPosts.find(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending && !post.featured).slice(0, 3);
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === activeCategory && !post.featured);

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
                  Blog & Articles
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Insights & Inspiration"
        subtitle="Expert Tips and Industry Trends"
        description="Discover expert advice, design trends, sustainability insights, and practical tips from The Trees plywood specialists to help you make informed decisions."
        image="https://images.unsplash.com/photo-1681392119244-6d06728b5ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzYyMjM0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Latest Updates"
        badgeIcon={BookOpen}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '50+', label: 'Articles Published' },
          { value: 'Weekly', label: 'New Updates' },
          { value: '10K+', label: 'Monthly Readers' },
        ]}
      />

      {/* Why Read Our Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Read Our Blog"
            badgeIcon={Target}
            title="Expert Knowledge at Your Fingertips"
            subtitle="Stay informed with industry insights, practical tips, and expert guidance from plywood specialists"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Expert Insights',
                desc: 'Learn from industry professionals with decades of experience in plywood manufacturing',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Industry Trends',
                desc: 'Stay ahead with the latest design trends, innovations, and market developments',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: CheckCircle2,
                title: 'Practical Tips',
                desc: 'Get actionable advice on installation, maintenance, and product selection',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Award,
                title: 'Quality Content',
                desc: 'Well-researched articles backed by technical expertise and real-world experience',
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

      {/* Topic Guide Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Content Topics"
            badgeIcon={BookOpen}
            title="What We Write About"
            subtitle="Explore our comprehensive library of articles organized by topic to find exactly what you need"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Anchor,
                category: 'Marine Applications',
                description: 'BWP grade plywood for boats, docks, and coastal structures',
                color: 'from-blue-500 to-blue-600',
                count: blogPosts.filter(p => p.category === 'Marine Applications').length
              },
              {
                icon: Home,
                category: 'Interior Design',
                description: 'Design trends, decorative panels, and aesthetic solutions',
                color: 'from-purple-500 to-purple-600',
                count: blogPosts.filter(p => p.category === 'Interior Design').length
              },
              {
                icon: Leaf,
                category: 'Sustainability',
                description: 'FSC certification, responsible forestry, and eco-friendly practices',
                color: 'from-green-500 to-green-600',
                count: blogPosts.filter(p => p.category === 'Sustainability').length
              },
              {
                icon: ShieldCheck,
                category: 'Product Guide',
                description: 'Choosing the right plywood type and grade for your needs',
                color: 'from-indigo-500 to-indigo-600',
                count: blogPosts.filter(p => p.category === 'Product Guide').length
              },
              {
                icon: Palette,
                category: 'Design Trends',
                description: 'Latest interior trends and innovative plywood applications',
                color: 'from-pink-500 to-pink-600',
                count: blogPosts.filter(p => p.category === 'Design Trends').length
              },
              {
                icon: Flame,
                category: 'Safety & Standards',
                description: 'Fire safety, building codes, and industry certifications',
                color: 'from-red-500 to-red-600',
                count: blogPosts.filter(p => p.category === 'Safety & Standards').length
              },
              {
                icon: Wrench,
                category: 'Maintenance Tips',
                description: 'Storage, care, installation, and preservation techniques',
                color: 'from-orange-500 to-orange-600',
                count: blogPosts.filter(p => p.category === 'Maintenance Tips').length
              },
              {
                icon: HeartPulse,
                category: 'Health & Safety',
                description: 'Indoor air quality, emission standards, and health impacts',
                color: 'from-rose-500 to-rose-600',
                count: blogPosts.filter(p => p.category === 'Health & Safety').length
              },
              {
                icon: BarChart3,
                category: 'Product Comparison',
                description: 'Compare plywood, MDF, particle board, and other materials',
                color: 'from-cyan-500 to-cyan-600',
                count: blogPosts.filter(p => p.category === 'Product Comparison').length
              },
            ].map((topic, idx) => (
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
                  onClick={() => setActiveCategory(topic.category)}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <topic.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-trees-primary mb-2 group-hover:text-trees-secondary transition-colors">
                    {topic.category}
                  </h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs font-semibold text-gray-500">
                      {topic.count} {topic.count === 1 ? 'Article' : 'Articles'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-trees-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageContainer className="space-y-20">
        {/* Category Filter */}
        <section>
          <ModernSectionHeader
            badge="Quick Filter"
            badgeIcon={Filter}
            title="Filter by Category"
            subtitle="Use these quick filter buttons to instantly view articles from a specific topic"
          />

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const count = category === 'All' 
                ? blogPosts.length 
                : blogPosts.filter(p => p.category === category).length;
              
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full transition-all duration-200 font-medium ${
                    category === activeCategory
                      ? 'bg-trees-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-trees-primary hover:text-trees-primary hover:bg-trees-primary/5'
                  }`}
                >
                  {category} ({count})
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <section>
            <div className="inline-block bg-trees-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-trees-primary font-semibold text-sm flex items-center gap-2">
                <Star className="w-4 h-4" />
                Featured Article
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onBlogSelect?.(featuredPost.id)}
              className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 hover:shadow-2xl transition-all duration-300 text-left w-full cursor-pointer"
            >
              <div className="relative h-[400px] md:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-trees-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-trees-primary" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-trees-primary" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-trees-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <ModernButton 
                    variant="primary" 
                    size="sm" 
                    icon={<ArrowRight />}
                    onClick={(e) => {
                      e.stopPropagation();
                      onBlogSelect?.(featuredPost.id);
                    }}
                  >
                    Read Article
                  </ModernButton>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Trending Posts */}
        {activeCategory === 'All' && trendingPosts.length > 0 && (
          <section>
            <ModernSectionHeader
              badge="Trending Now"
              badgeIcon={TrendingUp}
              title="Most Popular Articles"
              subtitle="Our most-read articles this month"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {trendingPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => onBlogSelect?.(post.id)}
                  className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/95 backdrop-blur-sm text-trees-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="bg-trees-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-trees-primary" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-trees-primary" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h4 className="text-trees-secondary mb-3 line-clamp-2 group-hover:text-trees-primary transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-trees-primary font-medium text-sm hover:gap-2 flex items-center gap-1 transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section>
          <ModernSectionHeader
            badge="Latest Articles"
            badgeIcon={BookOpen}
            title={activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
            subtitle={activeCategory === 'All' 
              ? 'Explore our complete library of expert articles and guides'
              : `Browse articles in the ${activeCategory} category`
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => onBlogSelect?.(post.id)}
                className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-trees-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-trees-primary" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-trees-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-trees-secondary mb-3 line-clamp-2 group-hover:text-trees-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-trees-primary font-medium text-sm hover:gap-2 flex items-center gap-1 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500 text-sm mb-6">Try selecting a different category</p>
              <ModernButton
                variant="outline"
                onClick={() => setActiveCategory('All')}
              >
                View All Articles
              </ModernButton>
            </div>
          )}
        </section>
      </PageContainer>

      {/* Blog Statistics */}
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
            <h2 className="text-white mb-4">Our Blog Impact</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Helping thousands of professionals and homeowners make informed decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Published Articles', icon: BookOpen },
              { value: '10K+', label: 'Monthly Readers', icon: Users },
              { value: 'Weekly', label: 'New Content', icon: Sparkles },
              { value: '98%', label: 'Helpful Rating', icon: Star },
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
            badge="Reader Feedback"
            badgeIcon={Star}
            title="What Our Readers Say"
            subtitle="See how our blog helps professionals and enthusiasts make better decisions"
          />
          <Testimonials />
        </div>
      </section>

      {/* Blog FAQ */}
      <section className="section-padding bg-white">
        <PageContainer>
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Blog FAQ"
            subtitle="Common questions about our articles, content updates, and contributions"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="frequency" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How often do you publish new articles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We publish new articles weekly, covering a range of topics from product guides and design trends 
                  to sustainability insights and maintenance tips. Subscribe to our newsletter to get notified when 
                  new content is published. We also regularly update existing articles to ensure information stays 
                  current and accurate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="topics" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I request specific topics to be covered?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! We value reader input and regularly take topic suggestions. If there's a specific 
                  aspect of plywood, design, or construction you'd like us to cover, please contact us through 
                  our Contact page or email us directly. We review all suggestions and prioritize topics based on 
                  reader interest and expertise availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="authors" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Who writes your blog articles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our articles are written by a team of industry experts including experienced architects, 
                  interior designers, product specialists, and sustainability consultants. Each author brings 
                  years of hands-on experience and deep technical knowledge. All articles are reviewed by our 
                  editorial team to ensure accuracy, clarity, and practical value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="newsletter" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What do I get with the newsletter subscription?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Newsletter subscribers receive weekly digests featuring new articles, exclusive tips, product 
                  updates, and industry insights. You'll also get early access to in-depth guides, special offers, 
                  and invitations to webinars. We respect your privacy and never spam - you can unsubscribe 
                  anytime with one click.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I share or reference blog articles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! We encourage sharing our content. All articles can be freely shared on social media, 
                  referenced in presentations, or used for educational purposes. We only ask that you provide 
                  proper attribution and link back to the original article. For commercial use or republishing, 
                  please contact us for permission.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Have more questions?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => onNavigate?.('contact')}
              >
                Contact Our Team
              </ModernButton>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Newsletter Subscription CTA */}
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
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">Stay Updated</span>
            </div>
            <h2 className="text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Get the latest articles, industry insights, and exclusive content delivered directly to your inbox every week
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60"
              />
              <MagneticButton strength={0.2}>
                <ModernButton 
                  variant="light" 
                  size="md"
                >
                  Subscribe Now
                </ModernButton>
              </MagneticButton>
            </div>
            <p className="text-sm text-white/70">
              Join 10,000+ subscribers • No spam • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
