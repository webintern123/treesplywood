import { 
  ArrowRight, Leaf, Sparkles, Award, Hammer, Ship, Building2, Home, Sofa, 
  Image as ImageIcon, Shield, CheckCircle2, Layers, TestTube, PackageCheck, 
  Truck, Trophy, Star, TrendingUp, Mail, Play, BookOpen, ArrowUpRight, 
  MapPin, Calculator, Download, HelpCircle, FileText, Package, ChevronRight,
  Factory, Zap, Users, Globe, Plus, Minus
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
        title="Building Excellence with Premium Plywood "
        subtitle="India's Most Trusted Plywood Brand"
        description="Discover premium quality plywood solutions. From marine-grade waterproofing to sustainable forestry, we deliver unmatched quality for your dream spaces."
        images={[
          heroImage,
          'https://images.unsplash.com/photo-1598954385478-53e5b3c970ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1iZXIlMjB3b29kJTIwcGlsZXxlbnwxfHx8fDE3NjIyMzU1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1649059270820-aa674ea81f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwaW5kdXN0cnklMjBzYXdtaWxsfGVufDF8fHx8MTc2MjIzNTU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1629085281900-455f2f1fc5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjIyMzU1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ]}
        autoSlideInterval={5000}
        badge="Premium Since 1998"
        badgeIcon={Sparkles}
        height="xl"
        overlayOpacity="medium"
        showIndicators={true}
        stats={[
          { value: '25+', label: 'Years Excellence' },
          { value: '500+', label: 'Dealers' },
          { value: '10,000+', label: 'Projects' },
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
        { value: '25+', label: 'Years Excellence', icon: Award },
        { value: '500+', label: 'Dealers', icon: Users },
        { value: '10,000+', label: 'Projects', icon: Trophy },
      ]}
    />
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Advantages"
            badgeIcon={Sparkles}
            title="Why Choose The Trees Plywood"
            subtitle="Experience the difference that quality, innovation, and trust make in every sheet"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Waterproof BWP',
                description: 'Boiling Water Proof grade with marine-quality adhesives for ultimate protection in wet areas',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Award,
                title: 'IS:710 Certified',
                description: 'All products meet Indian Standards with rigorous quality testing and certifications',
                color: 'from-amber-500 to-orange-600'
              },
              {
                icon: Leaf,
                title: 'E0 Emission Standards',
                description: 'Eco-friendly manufacturing with zero harmful emissions for healthier indoor air quality',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Trophy,
                title: 'Up to 30-Year Warranty',
                description: 'Industry-leading warranty coverage backed by confidence in our manufacturing excellence',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Layers,
                title: 'Zero Core Gaps',
                description: 'Precision-calibrated sheets with 15-layer construction ensuring superior strength',
                color: 'from-red-500 to-pink-600'
              },
              {
                icon: Factory,
                title: 'Advanced Manufacturing',
                description: 'State-of-the-art facilities with 50+ quality checks per sheet for consistent excellence',
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
            title="Premium Plywood Collection"
            subtitle="Choose from our range of marine-grade, boiling waterproof plywood designed for every application"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Samrat',
                subtitle: 'Supreme Quality',
                desc: 'Premium plywood for high-end interiors with 30-year warranty',
                features: ['30 Years Warranty', 'BWP IS:710', 'E0 Emission'],
                badge: 'Best Seller',
                img: 'https://images.unsplash.com/photo-1761294364419-fcbfe2059dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwdmVuZWVyfGVufDF8fHx8MTc2MTk5MjIxNnww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Bhima',
                subtitle: 'The Legend',
                desc: 'Marine-grade performance for exceptional wet area solutions',
                features: ['Lifetime Guarantee', 'Marine Grade', 'BWP IS:710'],
                badge: 'Marine Grade',
                img: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBncmFkZSUyMHBseXdvb2R8ZW58MXx8fHwxNzYxOTkyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                title: 'Ananta',
                subtitle: 'Endless Strength',
                desc: 'Built for high-load applications with zero core gaps',
                features: ['Lifetime Guarantee', '15 Layers', 'Zero Gaps'],
                badge: 'Premium',
                img: 'https://images.unsplash.com/photo-1554230253-017daba2b631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGx5d29vZCUyMHdvb2QlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MTk5MjIxNXww&ixlib=rb-4.1.0&q=80&w=1080'
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

      {/* Manufacturing Process - Using AnimatedProcess Component */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="How We Make It"
            badgeIcon={Factory}
            title="Our Manufacturing Process"
            subtitle="From premium wood selection to final quality testing, every step ensures excellence"
          />

          <AnimatedProcess 
            steps={[
              { number: '01', icon: Layers, title: 'Wood Selection', description: 'Finest Gurjan veneers from sustainable forests' },
              { number: '02', icon: TestTube, title: 'Advanced Bonding', description: 'BWP grade adhesive technology' },
              { number: '03', icon: PackageCheck, title: 'Quality Testing', description: '50+ quality checks per sheet' },
              { number: '04', icon: Truck, title: 'Ready to Deliver', description: 'Calibrated and warranty certified' },
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
            title="Application Areas"
            subtitle="From kitchens to commercial buildings, our plywood adapts to your vision"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Kitchen Cabinets', 
                description: 'Perfect for moisture-prone areas with superior water resistance and durability', 
                img: 'https://images.unsplash.com/photo-1649083048428-3d8ed23a3ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTQ0MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['BWP Grade', 'Water Resistant', 'Anti-Termite'],
                badge: 'Popular'
              },
              { 
                title: 'Furniture', 
                description: 'Wardrobes, beds, and custom woodwork with premium finish and strength', 
                img: 'https://images.unsplash.com/photo-1695687349399-452a14c409be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjE5OTAwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['Zero Gaps', 'Calibrated', '15 Layers']
              },
              { 
                title: 'Commercial', 
                description: 'Structural support for offices, retail spaces, and high-traffic zones', 
                img: 'https://images.unsplash.com/photo-1693661391267-ad955aeeb564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxODg3MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['High Load', 'Durable', 'Certified']
              },
              { 
                title: 'Marine Areas', 
                description: 'Boat decks, coastal homes, and outdoor installations with marine-grade quality', 
                img: 'https://images.unsplash.com/photo-1630414818380-ce90b58af597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwZGVjayUyMG1hcmluZSUyMHdvb2R8ZW58MXx8fHwxNzYxOTkwMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                badges: ['Marine Grade', '100% BWP', 'Lifetime Warranty'],
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
          <ModernSectionHeader
            badge="Client Reviews"
            badgeIcon={Star}
            title="Trusted by Professionals"
            subtitle="See why architects, designers, and builders choose The Trees Plywood"
          />
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
              <span>Ready to Start Your Project?</span>
            </div>
            
            <h2 className="text-white mb-6">
              Experience Excellence in Every Sheet
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Connect with our team for personalized consultation and discover why thousands of builders trust The Trees Plywood.
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
            badge="Have Questions?"
            badgeIcon={HelpCircle}
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our plywood"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'What is BWP plywood and why is it important?',
                a: 'BWP (Boiling Water Proof) plywood is manufactured with phenolic resin adhesive that makes it 100% waterproof. It\'s essential for wet areas like kitchens, bathrooms, and coastal homes as it resists moisture, fungus, and termites. Our BWP plywood meets IS:710 standards for superior quality.'
              },
              {
                q: 'Which plywood grade should I choose for kitchen cabinets?',
                a: 'For kitchen cabinets, we strongly recommend BWP grade plywood like Samrat (premium) or Bhima (marine grade). These grades offer maximum moisture resistance, zero core gaps, and come with extended warranties (15-30 years), ensuring your kitchen stands the test of time.'
              },
              {
                q: 'What warranty do you offer on your plywood products?',
                a: 'Our warranty varies by product grade: Samrat comes with 30 years, Bhima and Ananta have lifetime guarantees. All warranties cover manufacturing defects, delamination, and termite damage when used as per guidelines. Warranty certificates are provided with every purchase.'
              },
              {
                q: 'How can I calculate how much plywood I need for my project?',
                a: 'Use our free Plywood Calculator tool available on this website. Simply enter your room dimensions and select the application (cabinets, furniture, flooring, etc.). The calculator provides accurate sheet estimates with wastage considerations. You can also download and print the estimate.'
              },
              {
                q: 'What makes The Trees Plywood different from other brands?',
                a: 'We offer E0 emission certification (healthier air quality), zero core gap construction, marine-grade BWP adhesive, precision calibration, and 50+ quality checks per sheet. Our sustainable sourcing and industry-leading warranties (up to lifetime) set us apart in quality and trust.'
              },
              {
                q: 'Is your plywood eco-friendly and safe for indoor use?',
                a: 'Yes! All our plywood meets E0 emission standards, meaning minimal formaldehyde release for healthier indoor air. We source wood from certified sustainable forests and use eco-friendly manufacturing processes. Our products are completely safe for homes, schools, and hospitals.'
              },
              {
                q: 'Where can I buy The Trees Plywood?',
                a: 'We have 500+ authorized dealers across India. Use our Dealer Locator tool to find the nearest stockist. You can also request free samples through our website or contact our team for bulk orders and project quotations.'
              },
              {
                q: 'Do you provide installation services or guidance?',
                a: 'Yes! We offer comprehensive installation guides, video tutorials, and professional support. For large projects, we can connect you with certified installers in your area. Our technical team is available for consultation on best practices and project planning.'
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
              <span>Stay Updated</span>
            </div>

            <h2 className="text-white mb-6">
              Get Expert Tips & Exclusive Offers
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join 10,000+ professionals receiving monthly insights on plywood selection and design trends.
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
              We respect your privacy. Unsubscribe anytime. By subscribing, you agree to our{' '}
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
