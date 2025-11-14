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
        title="Crafting Excellence for Over 25 Years"
        subtitle="From Heritage to Innovation"
        description="From a small family venture to India's trusted plywood manufacturer, The Trees has been pioneering quality, sustainability, and innovation in every sheet we produce."
        image="https://images.unsplash.com/photo-1533692336500-b85cd007c172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMjM0ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Since 1998"
        badgeIcon={Sparkles}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: '25+', label: 'Years Experience' },
          { value: '500+', label: 'Team Members' },
          { value: '10,000+', label: 'Projects Completed' },
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
                Our Products
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Schedule Visit
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
            title="Mission & Vision"
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
                  ●	Innovate plywood for every need and every space <br></br>
●	Guide customers with clear, practical solutions<br></br>
●	Respect nature through eco-friendly manufacturing<br></br>
●	Build long-term relationships with trust, quality.
 

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
                  To be India’s most trusted plywood brand by making every home and project stronger, safer, and more beautiful.                </p>
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

              <h2>Building Dreams with Quality & Trust</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1998, The Trees Plywood began with a simple mission: to provide India's builders and homeowners with plywood they could trust. What started as a small manufacturing unit has grown into one of the country's most respected plywood brands.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities equipped with German technology, producing over 100,000 sheets monthly. But our core values remain unchanged—uncompromising quality, sustainable practices, and customer satisfaction above all.
                </p>
                <p>
                  From marine-grade plywood for coastal homes to premium veneers for luxury interiors, every sheet that leaves our facility carries 25+ years of expertise and our commitment to excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: CheckCircle2, text: 'ISO 9001:2015 Certified' },
                  { icon: Leaf, text: 'FSC Certified Forests' },
                  { icon: Shield, text: 'IS:710 Compliance' },
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
            title="25+ Years of Excellence"
            subtitle="From humble beginnings to industry leadership—our story of growth and innovation"
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
                  title: 'The Beginning',
                  description: 'Founded with a vision to provide quality plywood. Started with a small manufacturing unit producing 5,000 sheets/month.',
                  icon: Sparkles,
                  side: 'left'
                },
                {
                  year: '2005',
                  title: 'Expansion & Growth',
                  description: 'Doubled production capacity to 50,000 sheets/month. Established dealer network across 10 states.',
                  icon: TrendingUp,
                  side: 'right'
                },
                {
                  year: '2010',
                  title: 'Quality Certification',
                  description: 'Achieved ISO 9001:2015 certification. Introduced marine-grade BWP plywood with 30-year warranty.',
                  icon: Award,
                  side: 'left'
                },
                {
                  year: '2015',
                  title: 'Pan-India Presence',
                  description: 'Crossed 500+ authorized dealers nationwide. Launched premium furniture-grade plywood range.',
                  icon: Globe,
                  side: 'right'
                },
                {
                  year: '2018',
                  title: 'Technology Upgrade',
                  description: 'Invested in German hot press technology and automated calibration systems for precision manufacturing.',
                  icon: Factory,
                  side: 'left'
                },
                {
                  year: '2020',
                  title: 'Green Leadership',
                  description: 'Achieved E0 emission standards and FSC certification. Reduced carbon footprint by 40%.',
                  icon: Leaf,
                  side: 'right'
                },
                {
                  year: '2024',
                  title: 'Industry Leader',
                  description: 'Production capacity exceeds 100,000 sheets/month. Serving 10,000+ projects with 98% customer satisfaction.',
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
            title="Our Manufacturing Excellence"
            subtitle="From sustainably sourced timber to precision-calibrated sheets"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', icon: Leaf, title: 'Sustainable Sourcing', desc: 'FSC-certified Gurjan veneers from ethical forests' },
              { num: '02', icon: Factory, title: 'Advanced Bonding', desc: 'BWP-grade adhesive with low VOC emissions' },
              { num: '03', icon: Shield, title: '50+ Quality Checks', desc: 'Rigorous testing for strength and durability' },
              { num: '04', icon: Sparkles, title: 'Precision Calibration', desc: 'Perfect thickness and zero core gaps' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-trees-primary/10 mb-4">{step.num}</div>
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
            title="World-Class Infrastructure"
            subtitle="State-of-the-art facilities and cutting-edge technology for unmatched quality"
          />

          {/* Key Stats with Visual Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Building, value: '150,000', label: 'Sq Ft Facility', suffix: '+', gradient: 'from-blue-500 to-blue-600' },
              { icon: Factory, value: '100,000', label: 'Sheets/Month', suffix: '+', gradient: 'from-trees-primary to-orange-600' },
              { icon: Users, value: '500', label: 'Skilled Workforce', suffix: '+', gradient: 'from-green-500 to-green-600' },
              { icon: Gauge, value: '24/7', label: 'Production', suffix: '', gradient: 'from-purple-500 to-purple-600' },
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
                      '6 German hot press machines for superior bonding',
                      'Automated thickness calibration system (±0.1mm accuracy)',
                      'CNC veneer cutting and splicing machines',
                      'High-capacity dryers with humidity control',
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
                      'ISO-certified testing facility with 50+ checkpoints',
                      'Boil test, bond strength, and moisture resistance testing',
                      'Formaldehyde emission testing (E0 compliance)',
                      'Digital thickness and flatness measurement',
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
                      '100,000+ sheets per month production capacity',
                      'Multiple size options: 8\'x4\', 7\'x4\', 6\'x4\', 7\'x3\'',
                      'Thickness range: 4mm to 25mm in all grades',
                      'Custom sizing and special orders available',
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
                      'Climate-controlled warehousing (25,000 sq ft)',
                      'Humidity-maintained storage to prevent warping',
                      'Pan-India distribution network via 500+ dealers',
                      'Fleet of delivery vehicles for timely dispatch',
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
                
                <h4 className="text-4xl font-bold text-white mb-4">Want to See Our Facility?</h4>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Schedule a factory visit and witness our manufacturing excellence firsthand. 
                  See how we transform raw timber into premium plywood.
                </p>
                
                <MagneticButton strength={0.3}>
                  <ModernButton
                    variant="light"
                    size="lg"
                    icon={<Calendar className="w-5 h-5" />}
                    onClick={() => onNavigate('contact')}
                    className="shadow-xl hover:shadow-2xl"
                  >
                    Schedule Factory Visit
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
            title="What Drives Us"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision Engineering',
                desc: 'Every sheet meets exacting standards within microns of tolerance'
              },
              {
                icon: Leaf,
                title: 'Environmental Care',
                desc: 'Sustainable forestry practices and E0 emission standards'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                desc: 'Continuous R&D to push boundaries of plywood technology'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                desc: 'Building lasting relationships through quality and service'
              },
              {
                icon: Globe,
                title: 'Pan-India Reach',
                desc: '500+ authorized dealers across every major city'
              },
              {
                icon: TrendingUp,
                title: 'Future Ready',
                desc: 'Investing in technology for tomorrow\'s challenges'
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
                We're always looking for talented individuals who share our passion for quality and innovation. 
                Explore career opportunities at The Trees Plywood.
              </p>
              <ModernButton
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                View Career Opportunities
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

              <h2>Committed to Our Planet</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Sustainability isn't just a buzzword for us—it's embedded in our DNA. We source 100% of our timber from FSC-certified forests, ensuring responsible forestry practices that protect biodiversity and forest ecosystems.
                </p>
                <p>
                  Our manufacturing processes use low-VOC adhesives that meet stringent E0 emission standards, making our plywood safe for your family and the environment. We've also implemented energy-efficient systems that reduce our carbon footprint by 40%.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'FSC-Certified Sustainable Forests',
                  'E0 Emission Standards',
                  '40% Reduced Carbon Footprint',
                  'Zero-Waste Manufacturing Process',
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
          <ModernSectionHeader
            badge="Client Stories"
            badgeIcon={Users}
            title="What Our Clients Say"
            subtitle="Hear from professionals who have trusted The Trees for their projects"
          />
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
              Ready to Experience The Trees Difference?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of satisfied customers who trust The Trees for their projects. Quality plywood backed by 25+ years of expertise.
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
