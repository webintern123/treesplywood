import { 
  Shield, CheckCircle2, XCircle, FileText, Clock, Phone, Mail, AlertTriangle,
  Award, Package, Users, BookOpen, Scale, MapPin, Sparkles, ArrowRight,
  Zap, Globe, FileCheck, Briefcase, UserCheck, ClipboardCheck, AlertCircle,
  TrendingUp, Gift
} from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { PageHero } from '../components/PageHero';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { motion } from 'motion/react';
import { useState } from 'react';

interface WarrantyPageProps {
  onNavigate?: (page: string) => void;
}

export function WarrantyPage({ onNavigate }: WarrantyPageProps) {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'coverage', title: 'Warranty Periods', icon: Clock },
    { id: 'whats-covered', title: 'What\'s Covered', icon: CheckCircle2 },
    { id: 'exclusions', title: 'What\'s NOT Covered', icon: XCircle },
    { id: 'conditions', title: 'Warranty Conditions', icon: AlertTriangle },
    { id: 'registration', title: 'Warranty Registration', icon: ClipboardCheck },
    { id: 'transfer', title: 'Warranty Transfer', icon: UserCheck },
    { id: 'claim-process', title: 'Claim Process', icon: FileText },
    { id: 'remedies', title: 'Remedies & Solutions', icon: Award },
    { id: 'commercial', title: 'Commercial Use', icon: Briefcase },
    { id: 'international', title: 'International Warranty', icon: Globe },
    { id: 'dispute', title: 'Dispute Resolution', icon: Scale },
    { id: 'legal', title: 'Legal Terms', icon: FileCheck },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const warrantyPeriods = [
    {
      product: 'Samrat (Premium Plywood)',
      warranty: '30 Years',
      coverage: 'Complete structural integrity and bonding warranty',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      product: 'Vajra (Resilient Plywood)',
      warranty: '20 Years',
      coverage: 'Boiling waterproof bonding warranty',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      product: 'Bhima (Marine Grade)',
      warranty: 'Lifetime',
      coverage: 'Complete waterproof bonding guarantee',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      product: 'Ananta (Structural)',
      warranty: 'Lifetime',
      coverage: 'Structural bonding and durability warranty',
      color: 'from-violet-500 to-purple-600'
    },
    {
      product: 'Agni (Fire-Resistant)',
      warranty: 'Lifetime',
      coverage: 'Fire retardant bonding warranty',
      color: 'from-red-500 to-orange-600'
    },
    {
      product: 'Ujval (Interior)',
      warranty: '10 Years',
      coverage: 'Standard bonding warranty',
      color: 'from-sky-500 to-blue-600'
    },
    {
      product: 'Block Board',
      warranty: '15 Years',
      coverage: 'Core strength and bonding warranty',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      product: 'Flush Doors',
      warranty: '10 Years',
      coverage: 'Frame and panel integrity warranty',
      color: 'from-rose-500 to-pink-600'
    },
  ];

  const trustStats = [
    { value: '30-Year', label: 'Maximum Warranty' },
    { value: '8+', label: 'Premium Options' },
    { value: '99.8%', label: 'Claim Approval Rate' },
  ];

  const coveredItems = [
    {
      title: 'Bonding Failure',
      desc: 'Delamination or separation of veneer layers due to manufacturing defects',
      icon: Shield
    },
    {
      title: 'Core Defects',
      desc: 'Voids, gaps, or inconsistencies in the core construction',
      icon: Package
    },
    {
      title: 'Thickness Variation',
      desc: 'Exceeds ±0.5mm tolerance standards for the specified grade',
      icon: Award
    },
    {
      title: 'Manufacturing Defects',
      desc: 'Surface imperfections or structural flaws from production',
      icon: AlertCircle
    },
    {
      title: 'Waterproof Performance',
      desc: 'For BWP/BWR grade products under normal moisture exposure',
      icon: CheckCircle2
    },
    {
      title: 'Termite Resistance',
      desc: 'For certified anti-termite treated products',
      icon: Shield
    },
    {
      title: 'Borer Resistance',
      desc: 'Protection against wood-boring insects in treated products',
      icon: Shield
    },
    {
      title: 'Structural Integrity',
      desc: 'Warping, bending, or twisting beyond acceptable industry limits',
      icon: Award
    },
  ];

  const exclusions = [
    'Improper installation not following our guidelines',
    'Using products outside their intended purpose or environment',
    'Fire, flood, earthquake, or other Acts of God',
    'Physical damage from impact, scratches, or mishandling',
    'Exposure to moisture or water before proper installation',
    'Normal wear and tear, aging, or color changes over time',
    'Unauthorized modifications or alterations',
    'Natural wood grain variations and color differences',
    'Damage from pests not covered by treatment warranty',
    'Improper storage or transportation damage',
    'Use of incompatible adhesives or finishes',
    'Structural failures due to building movement or settlement'
  ];

  const claimSteps = [
    {
      step: 'Contact Us',
      desc: 'Call warranty helpline or email with product details and issue description',
      icon: Phone,
      color: 'blue'
    },
    {
      step: 'Submit Documents',
      desc: 'Provide invoice, photos, installation details, and warranty registration',
      icon: FileText,
      color: 'green'
    },
    {
      step: 'Inspection',
      desc: 'Our technical team assesses the claim (on-site or remotely)',
      icon: Users,
      color: 'purple'
    },
    {
      step: 'Resolution',
      desc: 'Repair, replacement, or credit as per claim assessment',
      icon: CheckCircle2,
      color: 'emerald'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Warranty & Protection"
        subtitle="Industry-Leading Coverage"
        description="From 10 years to lifetime protection on our premium products. We stand behind every sheet we manufacture with comprehensive warranty coverage and dedicated support."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        badge="Last Updated: November 4, 2025"
        badgeIcon={Shield}
        height="md"
        overlayOpacity="medium"
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
                onClick={() => onNavigate?.('contact')}
              >
                File a Claim
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<ClipboardCheck className="w-5 h-5" />}
                onClick={() => scrollToSection('registration')}
              >
                Register Warranty
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* Trust Stats */}
      <section className="py-12 bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <AnimatedStats stats={trustStats} />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-xl p-6 border border-trees-primary/20"
              >
                <h3 className="font-semibold text-trees-secondary mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-trees-primary" />
                  Quick Navigation
                </h3>
                <nav className="space-y-1 max-h-[500px] overflow-y-auto pr-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 text-sm flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-trees-primary text-white font-medium shadow-md'
                          : 'text-gray-600 hover:bg-trees-primary/10 hover:text-trees-primary'
                      }`}
                    >
                      <section.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-1">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-xl p-5 border border-green-500/20 bg-green-50"
              >
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900 text-sm mb-1">Protected Purchase</p>
                    <p className="text-xs text-green-700">All products covered from day one</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-xl p-4 text-xs text-gray-600 border border-trees-primary/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-trees-primary" />
                  <p className="font-medium text-gray-800">Last Updated</p>
                </div>
                <p className="text-gray-600">November 4, 2025</p>
                <p className="text-gray-500 mt-2">Effective: November 1, 2025</p>
              </motion.div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Introduction */}
            <motion.section 
              id="introduction"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-xl shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-trees-secondary text-2xl md:text-3xl mb-2">Our Quality Commitment</h2>
                    <p className="text-trees-primary font-medium">Industry-Leading Warranty Protection</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At The Trees Plywood, we stand behind the quality of our products with industry-leading warranty coverage. Our warranties protect you against manufacturing defects and ensure long-lasting performance when products are properly installed and maintained.
                  </p>
                  <p>
                    We offer warranty periods ranging from 10 years to lifetime coverage on our premium products, demonstrating our confidence in the exceptional quality and durability of every sheet we manufacture.
                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">Important Notice</p>
                    <p className="text-sm">
                      All warranties are subject to proper installation, usage, and maintenance as per our guidelines. Please read the complete terms below to understand your coverage and responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Warranty Periods */}
            <motion.section 
              id="coverage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Clock}
                badge="Coverage"
                title="Warranty Periods by Product"
                subtitle="Comprehensive protection for every application"
                align="left"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warrantyPeriods.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-xl p-6 space-y-4 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-trees-primary/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-trees-primary">{item.warranty}</span>
                    </div>
                    <div>
                      <h3 className="text-trees-secondary mb-2">{item.product}</h3>
                      <p className="text-gray-600 text-sm">{item.coverage}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-5 bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 mb-1 text-sm">Warranty Starts From</p>
                    <p className="text-xs text-blue-700">
                      The warranty period begins from the date of invoice/purchase. For registered warranties, enhanced benefits may apply.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* What's Covered */}
            <motion.section 
              id="whats-covered"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={CheckCircle2}
                badge="Included"
                title="What's Covered"
                subtitle="Comprehensive protection against defects"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our warranty covers defects in materials and workmanship under normal use conditions:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {coveredItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* What's NOT Covered */}
            <motion.section 
              id="exclusions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={XCircle}
                badge="Exclusions"
                title="What's NOT Covered"
                subtitle="Important limitations to be aware of"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 bg-red-50/30 border border-red-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The warranty does not cover damage resulting from:
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {exclusions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3 bg-white rounded-lg p-3 border border-red-100"
                    >
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Warranty Conditions */}
            <motion.section 
              id="conditions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Warranty Conditions</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  To maintain warranty validity and ensure proper coverage, the following conditions must be met:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Proof of Purchase',
                      desc: 'Original invoice or receipt must be presented for all warranty claims. Keep copies in a safe place.'
                    },
                    {
                      title: 'Professional Installation',
                      desc: 'Products must be installed by qualified professionals following our installation guidelines and industry standards.'
                    },
                    {
                      title: 'Proper Application',
                      desc: 'Products must be used for their intended applications and in appropriate environments as specified.'
                    },
                    {
                      title: 'Regular Maintenance',
                      desc: 'Follow recommended maintenance procedures outlined in our care guidelines and product documentation.'
                    },
                    {
                      title: 'Storage Requirements',
                      desc: 'Prior to installation, products must be stored in dry, covered areas protected from moisture and direct sunlight.'
                    },
                    {
                      title: 'Inspection Access',
                      desc: 'Allow our technical team reasonable access to inspect the product if required for claim verification.'
                    },
                  ].map((condition, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">{condition.title}</p>
                          <p className="text-sm text-gray-600">{condition.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Warranty Registration - NEW */}
            <motion.section 
              id="registration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={ClipboardCheck}
                badge="Optional"
                title="Warranty Registration"
                subtitle="Enhance your protection with registration"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    While not mandatory, registering your warranty provides additional benefits and makes the claim process faster and easier.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Zap, title: 'Faster Claims', desc: 'Pre-verified information speeds up processing' },
                      { icon: Gift, title: 'Extended Benefits', desc: 'Access to exclusive warranty extensions' },
                      { icon: CheckCircle2, title: 'Digital Records', desc: 'Easy access to warranty information online' },
                      { icon: Mail, title: 'Proactive Alerts', desc: 'Reminders and maintenance tips via email' },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <benefit.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-blue-900 mb-1 text-sm">{benefit.title}</p>
                            <p className="text-xs text-blue-700">{benefit.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5 mt-6">
                    <h4 className="font-semibold text-trees-secondary mb-3">How to Register</h4>
                    <div className="space-y-2 text-sm">
                      <p>1. Visit our website or contact customer service within 30 days of purchase</p>
                      <p>2. Provide invoice number, product details, and installation date</p>
                      <p>3. Upload a photo of the installed product (optional but recommended)</p>
                      <p>4. Receive confirmation email with your warranty certificate</p>
                    </div>
                    <MagneticButton strength={0.15}>
                      <ModernButton
                        variant="primary"
                        size="sm"
                        icon={<ClipboardCheck className="w-4 h-4" />}
                        onClick={() => onNavigate?.('contact')}
                        className="mt-4"
                      >
                        Register Now
                      </ModernButton>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Warranty Transfer - NEW */}
            <motion.section 
              id="transfer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Warranty Transfer</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  This warranty is transferable to subsequent owners of the property where the products are installed, subject to the following conditions:
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                  <h4 className="font-semibold text-green-900 mb-3">Transferability Requirements</h4>
                  <div className="space-y-2 text-sm text-green-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Products must remain in the original installation location</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Original purchase documentation must be transferred to new owner</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Warranty transfer must be reported to us within 90 days of ownership change</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Products must be in good condition at time of transfer</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>Remaining warranty period transfers (not extended or renewed)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Transfer Process:</strong> Contact our customer service with the original invoice and new owner details. We'll update our records and issue a transfer confirmation.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Claim Process */}
            <motion.section 
              id="claim-process"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={FileText}
                badge="Process"
                title="How to File a Warranty Claim"
                subtitle="Simple 4-step claim process"
                align="left"
              />

              <div className="grid md:grid-cols-4 gap-6">
                {claimSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 text-center space-y-4 border border-gray-100 hover:border-trees-primary/30 transition-colors"
                  >
                    <div className={`w-12 h-12 bg-${step.color}-500/10 rounded-full flex items-center justify-center mx-auto`}>
                      <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-trees-secondary font-semibold">{step.step}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-6 bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 mb-1">Processing Time</p>
                    <p className="text-sm text-blue-700">
                      Most warranty claims are processed within 7-14 business days from submission. Complex cases may take up to 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Remedies & Solutions - NEW */}
            <motion.section 
              id="remedies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Remedies & Solutions</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Upon approval of a valid warranty claim, we will provide one of the following remedies at our discretion:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Product Replacement',
                      desc: 'Replacement with an equivalent or superior product of equal value',
                      note: 'Most common remedy for manufacturing defects'
                    },
                    {
                      title: 'Repair or Refinishing',
                      desc: 'Professional repair or refinishing of the affected area if practical',
                      note: 'For minor defects or cosmetic issues'
                    },
                    {
                      title: 'Store Credit',
                      desc: 'Credit towards future purchases based on prorated warranty value',
                      note: 'When replacement is not feasible or preferred'
                    },
                    {
                      title: 'Refund',
                      desc: 'Prorated refund based on remaining warranty period',
                      note: 'Rare cases where other remedies are impractical'
                    },
                  ].map((remedy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5"
                    >
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-purple-900 mb-1">{remedy.title}</p>
                          <p className="text-sm text-purple-700 mb-2">{remedy.desc}</p>
                          <p className="text-xs text-purple-600 italic">{remedy.note}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900 mb-1">Labor & Installation Costs</p>
                      <p className="text-sm text-yellow-700">
                        Warranty covers product replacement only. Labor, removal, reinstallation, and associated costs are not covered unless explicitly stated in writing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Commercial Use - NEW */}
            <motion.section 
              id="commercial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Commercial Use Warranty</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Products used in commercial applications are subject to different warranty terms due to higher usage intensity and environmental factors.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Residential Use
                    </h4>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• <strong>Coverage:</strong> Full warranty period</p>
                      <p>• <strong>Samrat:</strong> 30 years</p>
                      <p>• <strong>Bhima/Ananta:</strong> Lifetime</p>
                      <p>• <strong>Other Products:</strong> 10-20 years</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                    <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Commercial Use
                    </h4>
                    <div className="space-y-2 text-sm text-orange-800">
                      <p>• <strong>Coverage:</strong> 50% of residential period</p>
                      <p>• <strong>Samrat:</strong> 15 years</p>
                      <p>• <strong>Bhima/Ananta:</strong> 25 years</p>
                      <p>• <strong>Other Products:</strong> 5-10 years</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Commercial Applications Include:</strong> Hotels, offices, retail stores, restaurants, educational institutions, healthcare facilities, and other high-traffic environments.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* International Warranty - NEW */}
            <motion.section 
              id="international"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">International Warranty</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  For products exported or used outside India, warranty terms may vary based on local conditions, regulations, and service availability.
                </p>

                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-900 mb-2">✓ Warranty Coverage Applies</p>
                    <p className="text-sm text-green-700">
                      All manufacturing defect warranties remain valid internationally, subject to proper documentation and verification.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="font-semibold text-yellow-900 mb-2">⚠ Modified Terms</p>
                    <p className="text-sm text-yellow-700">
                      Warranty periods may be adjusted for extreme climatic conditions. Shipping costs for replacements are customer's responsibility.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-2">ℹ Local Support</p>
                    <p className="text-sm text-blue-700">
                      Contact our international sales team to connect with authorized dealers in your region for local warranty support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Dispute Resolution - NEW */}
            <motion.section 
              id="dispute"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Dispute Resolution</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  If you disagree with our warranty claim decision, we have a fair and transparent dispute resolution process:
                </p>

                <div className="space-y-3">
                  {[
                    { step: 'Appeal', desc: 'Submit a written appeal within 30 days with additional evidence', icon: FileText },
                    { step: 'Review', desc: 'Senior technical team conducts independent review within 15 days', icon: Users },
                    { step: 'Inspection', desc: 'Optional third-party inspection at mutual agreement (costs shared)', icon: CheckCircle2 },
                    { step: 'Final Decision', desc: 'Management review and final determination communicated in writing', icon: Award },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-trees-secondary mb-1">{item.step}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Arbitration:</strong> Unresolved disputes may be submitted to arbitration in Hyderabad, India, as per our{' '}
                    <button 
                      onClick={() => onNavigate?.('terms')}
                      className="text-trees-primary hover:underline font-medium"
                    >
                      Terms & Conditions
                    </button>.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Legal Terms - NEW */}
            <motion.section 
              id="legal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Legal Terms & Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Limitation of Liability</h3>
                  <p className="leading-relaxed text-sm">
                    Our sole obligation under this warranty is to repair or replace defective products. We are not liable for consequential, incidental, or indirect damages including labor costs, loss of use, or any other expenses beyond the product value.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Entire Agreement</h3>
                  <p className="leading-relaxed text-sm">
                    This warranty, along with our{' '}
                    <button onClick={() => onNavigate?.('terms')} className="text-trees-primary hover:underline font-medium">
                      Terms & Conditions
                    </button>
                    {' '}and{' '}
                    <button onClick={() => onNavigate?.('privacy')} className="text-trees-primary hover:underline font-medium">
                      Privacy Policy
                    </button>, constitutes the entire warranty agreement and supersedes all prior warranties or representations.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Governing Law</h3>
                  <p className="leading-relaxed text-sm">
                    This warranty is governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Changes to Warranty</h3>
                  <p className="leading-relaxed text-sm">
                    We reserve the right to modify warranty terms for future purchases. Changes do not affect warranties already in effect. Current warranty version: 2.0 (effective November 1, 2025).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <p className="text-sm">
                    <strong>Consumer Rights:</strong> This warranty gives you specific legal rights, and you may have other rights that vary by jurisdiction. Some states do not allow limitations on warranties, so these limitations may not apply to you.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-br from-trees-primary/10 to-trees-secondary/10 border border-trees-primary/30"
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-trees-secondary text-2xl md:text-3xl mb-3">Need Warranty Support?</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    Our dedicated warranty team is here to help with claims, questions, or technical support.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-5 border border-trees-primary/20">
                    <Phone className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Warranty Helpline</p>
                    <p className="text-xs text-gray-700 mb-1">+91 9091744744</p>
                    <p className="text-xs text-gray-600">Mon-Sat, 9AM-6PM IST</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-5 border border-trees-primary/20">
                    <Mail className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Email Support</p>
                    <p className="text-xs text-gray-700 mb-1">warranty@thetreesplywood.com</p>
                    <p className="text-xs text-gray-600">24-hour response</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-5 border border-trees-primary/20">
                    <MapPin className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Visit Us</p>
                    <p className="text-xs text-gray-700 mb-1">Madhapur, Hyderabad</p>
                    <p className="text-xs text-gray-600">Service center</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="primary"
                      size="lg"
                      icon={<FileText className="w-5 h-5" />}
                      onClick={() => onNavigate?.('contact')}
                    >
                      File a Claim
                    </ModernButton>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="outline"
                      size="lg"
                      icon={<ClipboardCheck className="w-5 h-5" />}
                      onClick={() => scrollToSection('registration')}
                    >
                      Register Warranty
                    </ModernButton>
                  </MagneticButton>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-trees-secondary via-trees-secondary to-[#2a1508] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-8">
              <Shield className="w-5 h-5" />
              <span>Protected by Industry-Leading Warranty</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl mb-6">
              Quality You Can Trust
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Every product backed by comprehensive warranty coverage and dedicated support
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Package className="w-6 h-6" />}
                  onClick={() => onNavigate?.('products')}
                >
                  View Products
                </ModernButton>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Phone className="w-6 h-6" />}
                  onClick={() => onNavigate?.('contact')}
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Support
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
