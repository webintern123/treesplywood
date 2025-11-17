import { 
  Award, Target, Leaf, Factory, Shield, Sparkles, Users, Globe, 
  TrendingUp, Zap, Calendar, ArrowRight, CheckCircle2, Lightbulb,
  Heart, Trophy, Eye, Compass, Building, Gauge, Microscope, Layers
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { VerticalTimeline } from '../components/design-system/AnimatedProcess';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { PageHero } from '../components/PageHero';
import { Certifications } from '../components/Certifications';
import { Testimonials } from '../components/Testimonials';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <PageHero
        title={"Strength You Can Trust,\nDecades of Craft & Commitment"}
        subtitle="Innovation Rooted in Our Legacy"
        description="What began as a small family initiative has grown into one of India’s most trusted plywood brands. For more than two decades, Tree’s Plywood has stood for quality, sustainability, and meaningful innovation - layer by layer, sheet by sheet."
        image="https://images.unsplash.com/photo-1533692336500-b85cd007c172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMjM0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="25+ Years Strong"
        badgeIcon={Sparkles}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: '500+', label: 'Dedicated Professionals' },
          { value: '10,000+', label: 'Projects Built with Trust ' },
          { value: '500+ Dealers', label: 'Across India & Expanding' },
          
        ]}
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onNavigate('products')}
              >
                Explore Our Products
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Book a Visit
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />
      
      
      
     
      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Purpose"
            badgeIcon={Compass}
            title="Experience That’s Built Into Every Sheet"
            subtitle="The principles that guide our journey and define our future"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-trees-primary/10 h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our goal is to offer plywood that’s strong, safe, and reliable — created responsibly and improved through constant innovation. We help homeowners, designers, and builders bring their ideas to life with confidence.

                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-trees-primary/10 h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-trees-secondary to-trees-primary flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our vision is to lead with excellence by combining nature-friendly manufacturing, modern technology, thoughtful service, and community-first values.
The Values That Guide Us


 </p>
              </div>
            </motion.div>
          </div>

          {/* Purpose Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-trees-primary to-trees-secondary text-white shadow-2xl">
              <Heart className="w-6 h-6" />
              <span className="text-xl font-bold">Building Foundations for Dreams, One Sheet at a Time</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trees-primary/10 text-trees-primary font-semibold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Our Story</span>
              </div>

              <h2>Built on Trust, Growing with Purpose</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Today, our advanced facilities produce thousands of sheets every month — but our core values of trust, quality, and customer satisfaction remain unchanged. But our values remain the same:<br></br>
✔  Uncompromised Quality<br></br>
✔  Sustainable Sourcing<br></br>
✔  Honest Guidance<br></br>
✔  Customer-First Service<br></br>

From kitchens and furniture to large-scale constructions, every sheet we deliver carries a promise of excellence.
 

                </p>
                
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: CheckCircle2, text: 'ISO 9001:2015 – Quality Management' },
                  { icon: Leaf, text: 'FSC Certified – Responsible Forestry' },
                  { icon: Shield, text: 'IS:710 -  Marine Grade Compliance.' },
                   { icon: CheckCircle2, text: '	E0/E1 - Low Emission' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-trees-primary font-medium">
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761819951977-022b27502018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjIxNjk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Factory"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-trees-primary to-trees-secondary text-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <Factory className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-bold text-lg">100K+ Sheets/Month</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Journey"
            badgeIcon={Calendar}
            title="25+ Years Timeline of Growth & Innovation"
            subtitle="From a humble start to becoming a trusted plywood name across India — here’s how our story unfolded."
          />

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-trees-primary via-trees-secondary to-trees-primary/20" />

              {/* Timeline Items */}
              {[
                {
                  year: '1998',
                  title: 'Where It All Began',
                  description: 'Tree’s Plywood began with a simple goal: to create plywood people could trust. Our first unit made just 5,000 sheets a month — but it laid the foundation for everything we’ve built since.',
                  icon: Sparkles,
                  side: 'left'
                },
                {
                  year: '2005',
                  title: 'Growing Strong',
                  description: 'As demand grew, we expanded too — increasing production to 50,000 sheets a month and building a dealer network across 10 states.',
                  icon: TrendingUp,
                  side: 'right'
                },
                {
                  year: '2010',
                  title: 'Raising Quality Standards',
                  description: 'We earned ISO 9001:2015 certification and launched BWP marine-grade plywood with long warranties, raising the bar for quality in the industry.',
                  icon: Award,
                  side: 'left'
                },
                {
                  year: '2015',
                  title: 'Nationwide Presence',
                  description: 'With 500+ dealers across India, Tree’s Plywood became a recognized name.We launched our premium range for furniture and interior applications.',
                  icon: Globe,
                  side: 'right'
                },
                {
                  year: '2018',
                  title: 'Technology for Tomorrow',
                  description: 'We invested in German hot-press machinery and automated calibration systems, elevating precision, bonding, and surface finish.',
                  icon: Factory,
                  side: 'left'
                },
                {
                  year: '2020',
                  title: 'Greener, Safer, Better',
                  description: 'We achieved E0 emission standards and FSC certification, reducing our carbon footprint by 40% while making our plywood safer for homes and families.',
                  icon: Leaf,
                  side: 'right'
                },
                {
                  year: '2024',
                  title: 'Leading the Way',
                  description: 'With a capacity of over 100,000 sheets a month and 10,000+ completed projects, Tree’s Plywood continues to grow as a trusted and innovation-driven brand.',
                  icon: Trophy,
                  side: 'left'
                },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative grid grid-cols-2 gap-8 mb-16 ${
                    milestone.side === 'left' ? '' : ''
                  }`}
                >
                  {/* Left Side */}
                  <div className={milestone.side === 'left' ? 'text-right' : ''}>
                    {milestone.side === 'left' && (
                      <div className="pr-8">
                        <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center justify-end gap-4 mb-3">
                            <span className="text-4xl font-bold text-trees-primary">{milestone.year}</span>
                            <div className="w-14 h-14 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                              <milestone.icon className="w-7 h-7 text-trees-primary" />
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
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
                  <div className={milestone.side === 'right' ? '' : ''}>
                    {milestone.side === 'right' && (
                      <div className="pl-8">
                        <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-14 h-14 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                              <milestone.icon className="w-7 h-7 text-trees-primary" />
                            </div>
                            <span className="text-4xl font-bold text-trees-primary">{milestone.year}</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="How We Make It"
            badgeIcon={Factory}
            title="Designed for Performance, Built with Precision"
            subtitle="Every sheet we produce reflects the care we put into our process — from responsibly sourced timber to precision-calibrated finish. Quality is built into every layer."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Responsible Sourcing', desc: 'FSC-certified Gurjan and hardwood sourced responsibly.' },
              {  icon: Factory, title: 'Strong Bonding', desc: 'BWP-grade, low-VOC adhesives for lasting strength.' },
              {  icon: Shield, title: 'Quality Checked', desc: '50+ tests for bonding, moisture, and durability.' },
              {  icon: Sparkles, title: 'Precision Calibrated', desc: 'Perfect thickness, smooth finish, zero core gaps.' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                
                <div className="w-14 h-14 rounded-xl bg-trees-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-trees-primary" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Facilities - Redesigned */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-trees-primary/5 via-white to-trees-secondary/5" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-trees-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-trees-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <ModernSectionHeader
            badge="Our Capabilities"
            badgeIcon={Building}
            title="State of the Art Facility"
            subtitle="Advanced infrastructure and smart technology are powering every sheet we make."
          />

          {/* Key Stats with Visual Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Building, value: '150,000', label: 'Sq Ft Facility', suffix: '+', gradient: 'from-blue-500 to-blue-600' },
              { icon: Factory, value: '100,000', label: 'Sheets/Month', suffix: '+', gradient: 'from-trees-primary to-orange-600' },
              { icon: Users, value: '500', label: 'Experts', suffix: '+', gradient: 'from-green-500 to-green-600' },
              { icon: Gauge, value: '24/7', label: 'Operations', suffix: '', gradient: 'from-purple-500 to-purple-600' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {stat.value}
                      {stat.suffix && <span className="text-trees-primary">{stat.suffix}</span>}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure Feature Cards with Images */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Advanced Machinery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full hover:shadow-3xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759159091682-3b98f4759367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFjaGluZXJ5JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjIyNDc0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Advanced Manufacturing Machinery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <Factory className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Advanced Machinery</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      'We use modern technology to make every sheet strong, smooth, and reliable.',
                      '6 German hot-press machines for better bonding',
                      'Automated calibration system for perfect thickness (±0.1 mm)',
                      'CNC machines for precise veneer cutting and joining',
                      'High-capacity dryers with proper humidity control',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-trees-primary to-orange-600 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quality Control Lab */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full hover:shadow-3xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGxhYm9yYXRvcnklMjB0ZXN0aW5nfGVufDF8fHx8MTc2MjI0NzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Quality Control Laboratory"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <Microscope className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quality Control Lab</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      'Every sheet passes through a strict testing process to ensure top-notch performance.',
                      'ISO-certified lab with 50+ quality checks',
                      'Boiling water, bond strength & moisture resistance tests',
                      'Formaldehyde (E0) emission testing for safer indoor use',
                      'Digital tools to measure thickness and flatness accurately',

                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Production Capacity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full hover:shadow-3xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzYyMjQ0OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Production Capacity"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Production Capacity</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      'We are equipped to meet projects of every size with consistent quality.',
'100,000+ sheets produced every month',
'Sizes available: 8x4, 7x4, 6x4, 7x3',
'Thickness range: 4 mm to 25 mm across all grades',
'Custom sizes and special orders available',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Storage & Logistics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full hover:shadow-3xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2MjE1MzE1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Storage and Logistics"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Storage & Logistics</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      'Your products stay protected and arrive on time, every time.',
'Climate-controlled warehouse (25,000 sq. ft)',
'Humidity-maintained storage to prevent warping',
'Pan-India supply through 500+ dealers',
'Dedicated delivery fleet for quick and safe dispatch.',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Factory Tour CTA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-trees-primary to-trees-secondary rounded-3xl p-12 text-center overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                >
                  <Factory className="w-10 h-10 text-white" />
                </motion.div>
                
                <h4 className="text-4xl font-bold text-white mb-4">Want to see how we make it?</h4>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Visit our factory and watch how raw timber turns into strong, beautiful plywood.
                </p>
                
                <MagneticButton strength={0.3}>
                  <ModernButton
                    variant="light"
                    size="lg"
                    icon={<Calendar className="w-5 h-5" />}
                    onClick={() => onNavigate('contact')}
                    className="shadow-xl hover:shadow-2xl"
                  >
                    Book a Factory Visit
                  </ModernButton>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Our Values"
            badgeIcon={Heart}
            title="What Guides Us Every Day"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision in Every Sheet',
                desc: 'We make sure every sheet is crafted with care and accuracy, so you always get consistent, reliable quality.'
              },
              {
                icon: Leaf,
                title: 'Caring for the Environment',
                desc: 'We use responsibly sourced wood and low-emission processes because good products should also be good for the planet.'
              },
              {
                icon: Zap,
                title: 'Innovation at Heart',
                desc: 'We keep improving through research and new technology, making our plywood stronger, safer, and better.'
              },
              {
                icon: Users,
                title: 'Customers Come First',
                desc: 'We believe in long-term relationships built on trust, support, and genuine service.'
              },
              {
                icon: Globe,
                title: 'Across India, Close to You',
                desc: 'With 500+ authorized dealers, our products are easily available wherever you are.'
              },
              {
                icon: TrendingUp,
                title: 'Ready for the Future',
                desc: 'We invest in new tools, technology, and ideas to ensure we stay ahead of tomorrow’s needs.'
              },
            ].map((value, idx) => (
              <ModernCard key={idx} variant="elevated">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-trees-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Meet Our Team"
            badgeIcon={Users}
            title="Leadership That Drives Excellence"
            subtitle="Meet the experienced professionals behind The Trees Plywood's success"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                title: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTczMDczNjI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
                experience: '25+ Years',
                bio: 'Visionary leader who founded The Trees with a mission to transform India\'s plywood industry through quality and innovation.',
                icon: Trophy
              },
              {
                name: 'Priya Sharma',
                title: 'Chief Operations Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzMwNzM2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                experience: '18+ Years',
                bio: 'Operations expert ensuring seamless production, quality control, and timely delivery across all facilities.',
                icon: Factory
              },
              {
                name: 'Amit Patel',
                title: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3MzA3MzYyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                experience: '15+ Years',
                bio: 'Technology innovator driving automation, R&D, and implementation of cutting-edge manufacturing systems.',
                icon: Zap
              },
              {
                name: 'Meera Iyer',
                title: 'Head of Sustainability',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTczMDczNjI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
                experience: '12+ Years',
                bio: 'Environmental champion leading our sustainability initiatives, FSC compliance, and green manufacturing practices.',
                icon: Leaf
              },
            ].map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-4 py-2 rounded-full bg-trees-primary text-white text-sm font-bold shadow-lg">
                        {leader.experience}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <leader.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-trees-primary font-semibold mb-4">
                      {leader.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5 rounded-2xl p-8 border border-trees-primary/10">
              <Users className="w-12 h-12 text-trees-primary" />
              <h4 className="text-2xl font-bold text-gray-900">Join Our Growing Team</h4>
              <p className="text-gray-600 max-w-2xl">
                We’re always happy to meet people who care about quality and innovation as much as we do. Explore opportunities to grow with Tree’s Plywood.
              </p>
              <ModernButton
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                View Open Roles
              </ModernButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629517797107-598100ff06f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZvcmVzdCUyMHRyZWVzfGVufDF8fHx8MTc2MjE3MDY4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainable Forestry"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trees-primary/10 text-trees-primary font-semibold text-sm">
                <Leaf className="w-4 h-4" />
                <span>Sustainability</span>
              </div>

              <h2>Caring for Our Planet, One Sheet at a Time</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  At Tree’s Plywood, sustainability is not just a promise; it’s part of who we are. We source all our timber from FSC-certified forests, ensuring the wood we use comes from responsibly managed and protected environments.
                </p>
                <p>
                  We also use low-VOC, E0 emission adhesives, making our plywood safer for your family and kinder to the planet. Over the years, our energy-efficient processes have helped us cut our carbon footprint by 40% and we're still working to do better.
                </p>
              </div>

              <div className="space-y-3">
                
                {[
'	Wood sourced from responsibly managed forests',
'Low-emission, eco-friendly manufacturing',
'Energy & water-efficient processes',
'Long-lasting products that reduce waste',
                  
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-trees-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-trees-primary" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <Certifications />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          
          <Testimonials />
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
              <span>Partner With Excellence</span>
            </div>
            
            <h2 className="text-white mb-6">
              Want to feel the Tree’s Plywood difference for yourself?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of happy customers who trust our plywood for their homes and projects.
 Quality you can feel, backed by 25+ years of experience.

            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ModernButton
                variant="light"
                size="xl"
                icon={<ArrowRight className="w-6 h-6" />}
                onClick={() => onNavigate('products')}
              >
                Explore Products
              </ModernButton>
              <ModernButton
                variant="outline"
                size="xl"
                icon={<Users className="w-6 h-6" />}
                onClick={() => onNavigate('contact')}
                className="border-white text-white hover:bg-white/20"
              >
                Contact Us
              </ModernButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
