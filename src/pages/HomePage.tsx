import { 
  ArrowRight, Leaf, Sparkles, Award, Hammer, Ship, Building2, Home, Sofa, 
  Image as ImageIcon, Shield, CheckCircle2, Layers, TestTube, PackageCheck, 
  Truck, Trophy, Star, TrendingUp, Mail, Play, BookOpen, ArrowUpRight, 
  MapPin, Calculator, Download, HelpCircle, FileText, Package, ChevronRight,
  Factory, Zap, Users, Globe, Plus, Minus,Lightbulb,Palette,LifeBuoy, Headphones
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from '../assets/hero.png';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard, CardHeader, CardBody, CardFooter } from '../components/design-system/ModernCard';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { AnimatedProcess } from '../components/design-system/AnimatedProcess';
import { ParallaxSection, FloatingElement, ScrollReveal } from '../components/design-system/ParallaxSection';
import { TextReveal } from '../components/design-system/TextReveal';
import { ApplicationCard } from '../components/design-system/ApplicationCard';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { PageHero } from '../components/PageHero';
import { Testimonials } from '../components/Testimonials';
import { Certifications } from '../components/Certifications';
import { SEOHead, generateOrganizationSchema } from '../components/SEOHead';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { validateEmail } from '../utils/validation';

// Typewriter Taglines Component
function TypewriterTaglines({ taglines }: { taglines: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(taglines[index].slice(0, charIndex + 1));
      setCharIndex((prev) => {
        if (prev + 1 === taglines[index].length) {
          setTimeout(() => setIndex((i) => (i + 1) % taglines.length), 2000);
          return 0;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [charIndex, index, taglines]);

  return <h3 className="text-xl font-semibold text-gray-700 text-center mb-10">{display}</h3>;
}


interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      toast.success('Successfully subscribed! Check your inbox for confirmation.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* SEO Meta Tags */}
      <SEOHead
        title="Premium Plywood Manufacturer"
        description="India's most trusted plywood brand. Discover premium quality plywood solutions with marine-grade waterproofing and sustainable forestry. Building excellence since 1998."
        keywords="plywood, premium plywood, marine plywood, waterproof plywood, sustainable plywood, furniture plywood, The Trees"
        ogType="website"
        structuredData={generateOrganizationSchema()}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-trees-primary to-trees-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Enhanced Hero Section */}
      <PageHero
  title={`Born from Nature,\nBuilt for Generations`}
  subtitle="India’s No.1 Leading Brand: Certified & Trusted"
  description="Tree’s Plywood keeps your spaces Safe, Warm, and long-lasting with Eco-Safe Practices, Tested Durability, and a Touch of Nature."
  images={[
    heroImage,
    'https://images.unsplash.com/photo-1598954385478-53e5b3c970ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1iZXIlMjB3b29kJTIwcGlsZXxlbnwxfHx8fDE3NjIyMzU1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1649059270820-aa674ea81f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwaW5kdXN0cnklMjBzYXdtaWxsfGVufDF8fHx8MTc2MjIzNTU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1629085281900-455f2f1fc5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjIyMzU1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ]}
  autoSlideInterval={5000}
  badge="Crafting Stronger Homes Since 1998"
  badgeIcon={Sparkles}
  height="xl"
  overlayOpacity="medium"
  showIndicators={true}
  stats={[
    { value: '25+', label: 'Years of Expertise' },
    { value: '500+', label: 'Dealer Partners Across India' },
    { value: '10,000+', label: 'Homes & Projects Delivered with Trust.' },
  ]}
  actions={
    <div className="flex flex-wrap gap-4">
      <MagneticButton strength={0.2}>
        <ModernButton
          variant="light"
          size="xl"
          icon={<ArrowRight className="w-6 h-6" />}
          onClick={() => onNavigate('products')}
        >
          Explore Products
        </ModernButton>
      </MagneticButton>
      <MagneticButton strength={0.2}>
        <ModernButton
          variant="outline-light"
          size="xl"
          icon={<Calculator className="w-6 h-6" />}
          onClick={() => onNavigate('calculator')}
        >
          Calculate Needs
        </ModernButton>
      </MagneticButton>
    </div>
  }
/>


      {/* Quick Highlights - Moved Below Hero */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Shield, text: '100% BWP' },
                { icon: Award, text: 'IS:710 Certified' },
                { icon: Leaf, text: 'E0 Emission' },
                { icon: Trophy, text: '30Yr Warranty' },
                { icon: CheckCircle2, text: 'Anti-Termite' },
                { icon: Sparkles, text: 'Calibrated' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-trees-primary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
  <div className="container mx-auto px-6">
    <AnimatedStats
      stats={[
        { value: '25+', label: 'Years Expertise', icon: Award },
        { value: '500+', label: 'Dealer Partners Across India', icon: Users },
        { value: '10,000+', label: 'Homes & Projects Delivered with Trust.', icon: Trophy },
      ]}
    />
  </div>
</section>
{/* Nature-Strength / Layered Features Section */}
<section className="section-padding bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <ModernSectionHeader
      badge="Nature-Strength, Industry-Tested"
      badgeIcon={Sparkles}
      title="Tree’s Plywood Strength, Layer by Layer"
      subtitle="From marine-grade waterproofing to zero-emission plywood, Tree’s Plywood blends strength, safety, and sustainability in every layer — perfect for kitchens, wardrobes, and heavy-duty projects alike."
    />

    {/* Optional Rotating Taglines */}
    <div className="text-center mb-10">
     <TypewriterTaglines
  taglines={[
    'Strength of Earth, Soul of Nature.',
    'Built to Protect. Designed to Last.',
    'Earth. Nature. Strength.',
    'More Than Sheets - We Build Legacies.'
  ]}
/>

    </div>

    {/* Layered Strength Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: Leaf, title: 'E0/E1 Zero-Emission Plywood' },
        { icon: Shield, title: '100% BWP Waterproof Protection' },
        { icon: TrendingUp, title: 'Fire-Retardant Technology' }, // replace with actual icon
        { icon: Trophy, title: 'Anti-Termite & Borer Shield' },
        { icon: Layers, title: 'Hexadic Calibrated Finish' },
        { icon: Award, title: 'IS:10701 Certified Structural Grade' },
        { icon: Ship, title: 'IS:710 Certified Marine Grade' },
        { icon: Globe, title: 'FSC Eco-Friendly' },
        { icon: Star, title: 'Long-Life Warranty' },
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
            <feature.icon className="w-6 h-6 text-trees-primary" />
          </div>
          <p className="text-gray-800 font-semibold">{feature.title}</p>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12 text-gray-700 font-medium">
      Trusted Plywood for Homes, Designers & Builders Across India.
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Advantages"
            badgeIcon={Sparkles}
            title="Why Choose The Trees Plywood"
            subtitle="At Tree’s Plywood, we deliver durable, sustainable, and high-quality plywood and doors that meet the various needs of our customers. With a focus on strength, innovation, and eco-friendly practices, we create products that last for generations while staying affordable and reliable.  From modern homes to large commercial projects, Tree’s Plywood combines certified quality with modern design needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Guaranteed Quality & Support',
                description: 'We stand by our products with repair and replacement assurance.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Award,
                title: 'IS:10701 Structural Grade Certified',
                description: 'Trusted by 700+ architects and builders for superior load-bearing strength.',
                color: 'from-amber-500 to-orange-600'
              },
              {
                icon: Leaf,
                title: 'Made for Your Needs',
                description: 'Customized solutions for homeowners, designers, and contractors.',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Trophy,
                title: 'Affordable. Reliable. Long-Lasting.',
                description: 'High performance without the high price',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Layers,
                title: 'Tested & Certified Strength',
                description: ' Each sheet goes through rigorous quality checks for durability',
                color: 'from-red-500 to-pink-600'
              },
              {
                icon: Factory,
                title: 'Precision Cutting & On-Time Delivery',
                description: 'Ready-to-use panels that save you time on every project',
                color: 'from-indigo-500 to-blue-600'
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  {/* Gradient accent on top */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${feature.color}`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Products"
            badgeIcon={Package}
            title="Explore Premium Tree’s Plywood Collection"
            subtitle="Discover our wide range of plywood and doors, crafted for style & comfort. Find the perfect match for every space and need.  Strong, sustainable, and engineered for real performance, explore plywood crafted from kitchens to commercial builds."
          />

          <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: 'Samrat',
      subtitle: 'Supreme Quality',
      desc: 'Reliable and cost-effective for everyday interiors',
      features: ['MR Grades', 'BWR Grades', 'Termite & borer safe', 'Durable', 'Long-lasting', 'Economical'],
      badge: 'Best Seller',
      img: 'https://images.unsplash.com/photo-1761294364419-fcbfe2059dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwdmVuZWVyfGVufDF8fHx8MTc2MTk5MjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      
    },
    {
      title: 'Bhima',
      subtitle: 'The Legend',
      desc: 'High-strength plywood for heavy-duty performance.',
      features: ['Structural Grade (IS:10701)', 'High load-bearing & screw-holding strength', 'Triple preservative treatment'],
      badge: 'Marine Grade',
      img: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBncmFkZSUyMHBseXdvb2R8ZW58MXx8fHwxNzYxOTkyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      
    },
    {
      title: 'Ananta',
      subtitle: 'Endless Strength',
      desc: 'Built for high-load applications with zero core gaps',
      features: ['100% BWP / Marine Grade', 'IS:10701 Structural Certified', 'Anti-Termite & Anti-Fungal Protection'],
      badge: 'Premium',
      img: 'https://images.unsplash.com/photo-1554230253-017daba2b631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGx5d29vZCUyMHdvb2QlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MTk5MjIxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      
    },
  ].map((product, idx) => (
    <ModernCard key={idx} variant="elevated">
      <div className="relative h-64 rounded-t-2xl overflow-hidden group">
        <ImageWithFallback
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 rounded-full bg-trees-primary text-white text-sm font-bold shadow-lg">
            {product.badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-3xl font-bold mb-1 text-white">{product.title}</h3>
          <p className="text-white/90">{product.subtitle}</p>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-gray-700">{product.desc}</p>
        
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium">
              {feature}
            </span>
          ))}
        </div>

       

        <ModernButton
          variant="outline"
          size="md"
          fullWidth
          icon={<ChevronRight className="w-5 h-5" />}
          onClick={() => onNavigate('products')}
        >
          View Details
        </ModernButton>
      </div>
    </ModernCard>
  ))}
</div>

          <div className="text-center mt-12">
            <ModernButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => onNavigate('products')}
            >
              View All Products
            </ModernButton>
          </div>
        </div>
      </section>
     {/* How is Tree’s Plywood Different & Legacy in Numbers Section */}
<section className="section-padding bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6">
    {/* Modern Section Header */}
    <ModernSectionHeader
      badge="Our Promise"
      badgeIcon={Sparkles}
      title="How is Tree’s Plywood Different?"
      subtitle="At Tree’s Plywood, we go beyond ordinary plywood by combining certified strength, long-lasting durability, and eco-friendly innovation. Every product is crafted to deliver Value & Trust."
    />

    {/* Key Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[
        { icon: Award, title: 'Fire Retardant & Termite Proof Technology' },
        { icon: Ship, title: 'Marine & Moisture Resistant Options' },
        { icon: Leaf, title: 'E0/E1 Zero Emission Eco-Friendly Plywood' },
        { icon: Layers, title: 'Advanced Hexadic Calibrated Tech for Mirror Finish' },
        { icon: TestTube, title: 'Vacuum-Impregnated Anti-Fungal & Anti-Bacterial Coating' },
        { icon: Award, title: 'Superior Adhesives & Imported High-Density Timber' },
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0">
            <feature.icon className="w-6 h-6 text-trees-primary" />
          </div>
          <p className="text-gray-800 font-semibold">{feature.title}</p>
        </motion.div>
      ))}
    </div>

    {/* Spacer between sections */}
    <div className="my-16"></div>

    {/* Our Legacy in Numbers */}
    <div className="container mx-auto px-6 text-center mt-16">

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Our Legacy in Numbers
      </h2>
      <p className="text-gray-700 font-medium mb-8">
        Decades of Excellence, Innovation, and Customer Satisfaction
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '15,000+', label: 'Projects Completed' },
          { value: '25,000+', label: 'Happy Customers' },
          { value: '50+', label: 'Industry Awards' },
          { value: '100%', label: 'Eco-Friendly' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-3xl font-bold text-trees-primary">{stat.value}</h3>
            <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* Our Approach Section */}
<section className="section-padding bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <ModernSectionHeader
      badge="Our Approach"
      badgeIcon={Lightbulb}
      title="From Concept to Completion"
      subtitle="From the very first to the final delivery, we ensure every step is handled with care and attention."
    />

    <div className="max-w-5xl mx-auto mt-12 relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-trees-primary via-trees-secondary to-trees-primary/20" />

      {/* Approach Steps */}
      {[
        {
          title: 'Consultation',
          description: 'We take time to understand your unique needs and project goals.',
          icon: Users,
          side: 'left',
        },
        {
          title: 'Customization',
          description: 'Your needs, ideas, your way—products built exactly to your wants.',
          icon: Palette,
          side: 'right',
        },
        {
          title: 'Manufacturing',
          description: 'Certified materials and top-notch quality you can trust.',
          icon: Factory,
          side: 'left',
        },
        {
          title: 'Delivery',
          description: 'Right on time, with precision cutting and hassle-free service.',
          icon: Truck,
          side: 'right',
        },
        {
          title: 'Support',
          description: 'We will be there for you no matter what - lifetime assistance, repair, and replacement guaranteed.',
          icon: Headphones,
          side: 'left',
        },
      ].map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative grid grid-cols-2 gap-8 mb-16"
        >
          {/* Left Side */}
          <div className={step.side === 'left' ? 'text-right' : ''}>
            {step.side === 'left' && (
              <div className="pr-8">
                <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-end gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-trees-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Center Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary border-4 border-white shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div className={step.side === 'right' ? '' : ''}>
            {step.side === 'right' && (
              <div className="pl-8">
                <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-trees-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* Trusted By Industry Leaders */}
<section className="section-padding bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold text-gray-900 mb-2">Trusted By Industry Leaders</h3>
    <p className="text-gray-600 mb-12">
      Partnering with the best in architecture, construction, and design
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Card Component */}
      {[
        { count: '150+', label: 'Leading Architects' },
        { count: '200+', label: 'Builders & Premium Construction Companies' },
        { count: '300+', label: 'Interior Designers' },
        { count: '100+', label: 'Corporate Offices & Spaces' },
        { count: '50+', label: 'Government Projects' },
        { count: '80+', label: 'Hospitality & Hotels & Resorts' },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <span className="text-5xl font-extrabold text-trees-primary mb-4 block">{item.count}</span>
          <p className="text-gray-700 font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Manufacturing Process - Using AnimatedProcess Component */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="How Tree’s Plywood Creates Strength?"
            badgeIcon={Factory}
            title="Our Manufacturing Process"
            subtitle="Every sheet of Tree’s Plywood is crafted with care, from selecting the right wood to the final quality seal."
          />

          <AnimatedProcess 
            steps={[
              { number: '01', icon: Layers, title: 'Responsible Wood Selection', description: 'Handpicked Gurjan & hardwood veneers sourced from sustainable, certified forests.' },
              { number: '02', icon: TestTube, title: 'Advanced Bonding Technology', description: 'Engineered with BWP-grade PF adhesives for long-lasting strength and moisture resistance.' },
              { number: '03', icon: PackageCheck, title: '50+ Quality Checks', description: 'Every sheet undergoes strict testing for durability, density, moisture, bonding, and performance.' },
              { number: '04', icon: Truck, title: 'Calibrated & Ready to Deliver', description: 'Perfectly smooth, dimensionally stable, and backed by a warranty before it reaches your project.' },
            ]}
          />
        </div>
      </section>

      {/* Applications - Using ApplicationCard Component */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Where We're Used"
            badgeIcon={Hammer}
            title="Where Tree’s Plywood Performs Best?"
            subtitle="-	Strong, Reliable, Built for Every Space"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Kitchen Cabinets', 
                description: 'Built to handle daily moisture, heat, and heavy use.', 
                img: 'https://images.unsplash.com/photo-1649083048428-3d8ed23a3ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTQ0MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['	BWP/MR Grade Options', 'Superior Water Resistance', 'Anti-Termite & Anti-Borer Protection'],
                badge: 'Popular'
              },
              { 
                title: 'Furniture', 
                description: 'Ideal for wardrobes, beds, shelves, and custom designs requiring a flawless finish.', 
                img: 'https://images.unsplash.com/photo-1695687349399-452a14c409be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjE5OTAwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['Calibrated Smooth Surface', '	Zero Core Gaps', 'Premium Strength Layers']
              },
              { 
                title: 'Commercial spaces', 
                description: 'Made for high-traffic areas that demand long-lasting reliability and strength.', 
                img: 'https://images.unsplash.com/photo-1693661391267-ad955aeeb564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxODg3MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['High Load-Bearing Strength', 'Durable & Stable', 'Certified']
              },
              { 
                title: 'Marine Applications', 
                description: 'Boat decks, coastal homes, and outdoor installations with marine-grade quality', 
                img: 'https://images.unsplash.com/photo-1630414818380-ce90b58af597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwZGVjayUyMG1hcmluZSUyMHdvb2R8ZW58MXx8fHwxNzYxOTkwMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['100% BWP Marine Grade', 'Salt & Humidity Resistant', 'Lifetime Warranty'],
                badge: 'Premium'
              },
            ].map((app, idx) => (
              <ApplicationCard
                key={idx}
                title={app.title}
                description={app.description}
                image={app.img}
                badges={app.badges}
                badge={app.badge}
                onLearnMore={() => onNavigate('products')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          
          <Testimonials />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <Certifications />
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-8">
              <Sparkles className="w-5 h-5" />
              <span>Ready to Build Something Strong?</span>
            </div>
            
            <h2 className="text-white mb-6">
              Let’s Create Spaces That Last Longer
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Talk to our team for Expert Guidance, Custom Solutions, and Plywood you can trust for any project — Big or Small.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ModernButton
                variant="light"
                size="xl"
                icon={<ArrowRight className="w-6 h-6" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Us Today
              </ModernButton>
              <ModernButton
                variant="outline"
                size="xl"
                icon={<MapPin className="w-6 h-6" />}
                onClick={() => onNavigate('dealers')}
                className="border-white text-white hover:bg-white/20"
              >
                Find Dealers
              </ModernButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Ask Us Anything - Tree’s Plywood"
            badgeIcon={HelpCircle}
            title="Frequently Asked Questions"
            subtitle="Clear Answers, Honest Guidance, Support you can Trust."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
  q: "Are Your Products Suitable For Commercial & Industrial Spaces?",
  a: `Yes! Our structural-grade products like Bhima, Agni, and Vajra are designed for:

• Offices
• Retail showrooms
• Hotels
• Industrial furniture
• High-traffic public spaces

They offer greater load-bearing capacity, safety, and durability.`
},

              {
  q: "What makes Tree’s Plywood Different from Other Brands?",
  a: `We go beyond basic plywood by offering:
●	E0/E1 low-emission safety (health-friendly for homes)
●	Zero-core-gap construction
●	High-density hardwood core
●	Fire Guard & ATBS termite protection
●	Hexadic 6x calibrated smooth finish
●	50+ quality checks per sheet
Our products are built for long-term performance, backed by industry-leading warranties.
`
},
              {
  q: "How Do I Know How Much Plywood My Project Needs?",
  a: `●	You can use our Free Plywood Calculator on the website.
●	Just enter the measurements and select the application (kitchen, wardrobes, wall panels, etc.).
●	You’ll get an accurate sheet estimate, including optional wastage allowance.
●	Our team can also help you plan BOQs for bigger projects.
`
},
               {
  q: "What Warranty do Tree’s Plywood Products Come With?",
  a: `Each product carries a warranty based on its grade:
●	Ananta & Bhima - Lifetime Guarantee
●	Agni — 15 Years
●	Samrat — 10 Years
●	Vajra — 15 Years
●	Ujval — 10 Years
All warranties cover manufacturing defects, termite/borer damage, and delamination when used as recommended
`
},
               {
  q: "Which Plywood is Best for Kitchen Cabinets?",
  a: `For kitchens, we recommend BWP/MR-resistant plywood like our premium ranges:
●	Ananta (BWP Marine Grade)
●	Bhima (Structural Marine Grade)
Both offer maximum moisture protection, superior bonding, and long-term durability - perfect for daily kitchen use.
`
},
               {
  q: "Is your plywood eco-friendly and safe for homes?",
  a: `Yes! All our plywood is made using:
●	E0 low-formaldehyde adhesives
●	Sustainably sourced timber
●	Energy-efficient manufacturing practices
This makes Tree’s Plywood safe for homes, schools, hospitals, commercial interiors, and environmentally conscious projects.
`
},
               {
  q: "Where can I buy Tree’s Plywood?",
  a: `●	We have 500+ authorized dealers across India.
●	Simply use our Find Dealer tool to locate a nearby store.
●	You can also request free samples, get pricing, or place a bulk project order directly through our website or customer support.
`
},
               {
  q: "Do You Offer Installation Support?",
  a: `Yes, we provide:
●	Installation guides
●	Step-by-step video tutorials
●	Expert technical support
For large projects, we can connect you with trained carpenters and certified installers in your area.
`
},
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-trees-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-5 h-5 text-trees-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.q}
                    </h4>
                  </div>
                  <div className={`w-8 h-8 rounded-lg bg-trees-primary/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                    {openFaqIndex === idx ? (
                      <Minus className="w-5 h-5 text-trees-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-trees-primary" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === idx ? 'auto' : 0,
                    opacity: openFaqIndex === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
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
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold mb-8">
              <Mail className="w-5 h-5" />
              <span>Stay Connected with Tree’s Plywood</span>
            </div>

            <h2 className="text-white mb-6">
              Get Expert tips, Design ideas, and offers straight to your inbox.
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of homeowners, architects, and builders who trust our updates.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-transparent focus:border-trees-primary focus:outline-none text-gray-800 transition-all"
                disabled={isSubscribing}
              />
              <ModernButton
                type="submit"
                variant="primary"
                size="lg"
                icon={isSubscribing ? null : <ArrowRight className="w-5 h-5" />}
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </ModernButton>
            </form>

            <p className="text-gray-400 text-sm mt-6">
             We respect your privacy. Unsubscribe any time. By subscribing, you agree to our{' '}
              <button
                onClick={() => onNavigate('privacy')}
                className="text-white hover:underline"
              >
                Privacy Policy
              </button>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
