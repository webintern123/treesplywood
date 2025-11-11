import { 
  FileText, AlertCircle, Scale, ShieldCheck, Ban, RefreshCw, BookOpen,
  Package, CreditCard, Truck, RotateCcw, Shield, Users, Gavel,
  AlertTriangle, CheckCircle2, Mail, Phone, MapPin, Sparkles,
  ArrowRight, XCircle, Clock, FileCheck, Zap, Globe, Link2,
  MessageSquare, UserX, FileSignature, Briefcase, CloudOff, Send,
  GraduationCap, Handshake
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { motion } from 'motion/react';
import { useState } from 'react';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: ShieldCheck },
    { id: 'age-requirements', title: 'Age Requirements', icon: UserX },
    { id: 'use-of-website', title: 'Use of Website', icon: BookOpen },
    { id: 'products', title: 'Products & Services', icon: Package },
    { id: 'orders', title: 'Orders & Payments', icon: CreditCard },
    { id: 'delivery', title: 'Delivery & Shipping', icon: Truck },
    { id: 'returns', title: 'Returns & Cancellations', icon: RotateCcw },
    { id: 'warranty', title: 'Warranty Terms', icon: Shield },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Scale },
    { id: 'third-party', title: 'Third-Party Links', icon: Link2 },
    { id: 'user-conduct', title: 'User Conduct', icon: Users },
    { id: 'electronic', title: 'Electronic Communications', icon: MessageSquare },
    { id: 'professional', title: 'Professional Advice', icon: GraduationCap },
    { id: 'indemnification', title: 'Indemnification', icon: Handshake },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: AlertCircle },
    { id: 'disclaimer', title: 'Disclaimer', icon: AlertTriangle },
    { id: 'privacy', title: 'Privacy & Data', icon: FileCheck },
    { id: 'dispute', title: 'Dispute Resolution', icon: Gavel },
    { id: 'termination', title: 'Termination', icon: XCircle },
    { id: 'force-majeure', title: 'Force Majeure', icon: CloudOff },
    { id: 'assignment', title: 'Assignment', icon: Briefcase },
    { id: 'notices', title: 'Legal Notices', icon: Send },
    { id: 'entire-agreement', title: 'Entire Agreement', icon: FileSignature },
    { id: 'governing-law', title: 'Governing Law', icon: Scale },
    { id: 'changes', title: 'Changes to Terms', icon: RefreshCw },
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

  const legalStats = [
    { value: '25+', label: 'Years in Business' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '100%', label: 'Transparent Terms' },
  ];

  const prohibitedUses = [
    'Violating applicable laws or regulations',
    'Transmitting harmful code, viruses, or malicious software',
    'Engaging in unauthorized access or disruption of services',
    'Reproducing or copying content without permission',
    'Impersonating others or providing false information',
    'Harvesting or collecting user information',
    'Interfering with security features',
    'Using automated systems without authorization',
  ];

  const returnConditions = [
    { title: 'Return Window', description: 'Products may be returned within 7 days of delivery' },
    { title: 'Condition', description: 'Items must be unused, in original packaging, with all tags attached' },
    { title: 'Custom Orders', description: 'Customized or cut-to-size products are non-returnable' },
    { title: 'Documentation', description: 'Original invoice and delivery receipt required' },
  ];

  const liabilityExclusions = [
    'Indirect, incidental, or consequential damages',
    'Loss of profits, revenue, or business opportunities',
    'Data loss or corruption',
    'Service interruptions or delays',
    'Third-party content or actions',
    'Product performance issues due to improper installation',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Clear Terms, Fair Business"
        description="These terms outline the rules and regulations for using our website and services. We believe in transparent, fair, and straightforward business practices."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        badge="Last Updated: November 4, 2025"
        badgeIcon={Scale}
        height="md"
        overlayOpacity="medium"
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Legal Team
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
                onClick={() => onNavigate('privacy')}
              >
                Privacy Policy
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* Trust Stats */}
      <section className="py-12 bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <AnimatedStats stats={legalStats} />
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
                  Table of Contents
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
                className="glass-card rounded-xl p-5 border border-blue-500/20 bg-blue-50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 text-sm mb-1">Legally Binding</p>
                    <p className="text-xs text-blue-700">These terms constitute a legal agreement</p>
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
                <p className="text-gray-500 mt-2">Effective Date: November 1, 2025</p>
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
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-trees-secondary text-2xl md:text-3xl mb-2">Welcome to The Trees Plywood</h2>
                    <p className="text-trees-primary font-medium">Agreement for Use of Our Services</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to The Trees Plywood website. These Terms and Conditions ("Terms") govern your access to and use of our website, products, and services. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                  </p>
                  <p>
                    These Terms apply to all visitors, users, customers, and others who access or use our services, whether you are browsing our website, requesting quotes, placing orders, or engaging with us in any capacity.
                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">Important Notice</p>
                    <p className="text-sm">
                      Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our website or services. Your continued use of our services constitutes acceptance of these Terms and any future modifications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Acceptance of Terms */}
            <motion.section 
              id="acceptance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={ShieldCheck}
                badge="Agreement"
                title="Acceptance of Terms"
                subtitle="Your agreement to these terms"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    By accessing and using The Trees Plywood website and services, you accept and agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms applicable to specific services you use.
                  </p>
                  <p>
                    These Terms create a legally binding agreement between you and The Trees Plywood. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900 mb-1">Modification Rights</p>
                        <p className="text-sm text-yellow-700">
                          We reserve the right to modify, update, or change these Terms at any time. Material changes will be notified through our website or via email. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Age Requirements - NEW */}
            <motion.section 
              id="age-requirements"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 bg-orange-50/30 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserX className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Age Requirements</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our website and services are intended for use by individuals who are at least 18 years of age or the age of majority in their jurisdiction, whichever is greater. By using our website, you represent and warrant that you meet these age requirements.
                </p>
                <p className="leading-relaxed">
                  If you are under the required age, you may only use our website under the supervision of a parent or legal guardian who agrees to be bound by these Terms. Parents and guardians are responsible for monitoring and supervising their children's use of our services.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-orange-900 mb-1">Legal Capacity Required</p>
                      <p className="text-sm text-orange-700">
                        You must have the legal capacity to enter into binding contracts. If you do not meet these requirements, you must not use our services. We reserve the right to request proof of age at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Use of Website */}
            <motion.section 
              id="use-of-website"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Use of Website</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Permitted Use</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You may use our website for lawful purposes only, including browsing products, requesting information, placing orders, and accessing resources. You are granted a limited, non-exclusive, non-transferable license to access and use our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Prohibited Uses</h3>
                  <p className="text-gray-700 mb-4">You agree not to use our website or services for any of the following purposes:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {prohibitedUses.map((use, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-3"
                      >
                        <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{use}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Products & Services */}
            <motion.section 
              id="products"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Package}
                badge="Products"
                title="Products & Services"
                subtitle="Information about our offerings"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Product Information</h3>
                    <p className="leading-relaxed">
                      We strive to provide accurate product descriptions, specifications, images, and pricing information. However, we do not warrant that product information is complete, reliable, current, or error-free. Product colors, textures, and dimensions may vary slightly from images due to photography and screen display limitations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Pricing and Availability</h3>
                    <div className="space-y-3">
                      {[
                        'All prices are subject to change without prior notice',
                        'Product availability may vary based on location, stock levels, and demand',
                        'We reserve the right to limit quantities, discontinue products, or refuse orders',
                        'Custom quotes are valid for 30 days unless otherwise specified',
                        'Bulk order pricing may differ from standard rates - contact us for quotes',
                        'Prices displayed are exclusive of taxes, which will be added at checkout'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Technical Specifications</h3>
                    <p className="leading-relaxed">
                      Technical specifications are provided for reference purposes. Actual product performance may vary based on installation methods, environmental conditions, and usage patterns. We recommend consulting our technical team for specific application requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Orders & Payments */}
            <motion.section 
              id="orders"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Orders & Payments</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Order Process</h3>
                  <p className="leading-relaxed mb-3">
                    Orders can be placed through our website, via email, phone, or through our authorized dealers. The ordering process typically involves:
                  </p>
                  <div className="space-y-2">
                    {['Product selection and specification', 'Quote request and approval', 'Order confirmation and advance payment', 'Production and quality check', 'Delivery scheduling and dispatch'].map((step, index) => (
                      <div key={index} className="flex items-center gap-3 bg-trees-primary/5 rounded-lg p-3">
                        <div className="w-6 h-6 rounded-full bg-trees-primary text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Order Acceptance</h3>
                  <p className="leading-relaxed">
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product unavailability, pricing errors, suspected fraudulent activity, or failure to meet credit requirements. If an order is cancelled after payment, we will issue a full refund.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Payment Terms</h3>
                  <p className="leading-relaxed mb-3">
                    Payment terms will be specified in your quotation or invoice. We accept various payment methods including bank transfers, checks, and online payments. Standard payment terms are:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <p>• <strong>New Customers:</strong> 100% advance payment before production</p>
                    <p>• <strong>Established Customers:</strong> 50% advance, 50% before delivery (subject to credit approval)</p>
                    <p>• <strong>Bulk Orders:</strong> Customized payment terms available upon request</p>
                    <p>• <strong>Credit Terms:</strong> Available for qualified businesses after credit assessment</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Minimum Order Quantity</h3>
                  <p className="leading-relaxed">
                    Certain products may have minimum order quantity (MOQ) requirements based on production efficiencies and logistics. MOQs will be clearly communicated during the quotation process. Smaller quantities may be available at premium pricing.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Delivery & Shipping */}
            <motion.section 
              id="delivery"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Truck}
                badge="Logistics"
                title="Delivery & Shipping"
                subtitle="How we get products to you"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Delivery Timeline</h3>
                    <p className="leading-relaxed mb-4">
                      Delivery timelines vary based on product availability, order quantity, customization requirements, and delivery location. Standard delivery timelines are:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-medium text-green-900 mb-1">Stock Items</p>
                        <p className="text-sm text-green-700">3-7 business days</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-medium text-blue-900 mb-1">Custom Orders</p>
                        <p className="text-sm text-blue-700">10-15 business days</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="font-medium text-purple-900 mb-1">Bulk Orders</p>
                        <p className="text-sm text-purple-700">15-30 business days</p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="font-medium text-orange-900 mb-1">Special Products</p>
                        <p className="text-sm text-orange-700">As per agreement</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Shipping Costs</h3>
                    <p className="leading-relaxed">
                      Shipping costs are calculated based on order value, weight, volume, delivery location, and chosen shipping method. Delivery charges will be clearly stated in your quotation. For large orders, we may offer free or discounted shipping. Insurance and special handling requirements may incur additional charges.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Delivery Inspection</h3>
                    <p className="leading-relaxed mb-3">
                      Upon delivery, customers must:
                    </p>
                    <div className="space-y-2">
                      {[
                        'Inspect the shipment for damage or discrepancies immediately',
                        'Note any visible damage on the delivery receipt',
                        'Report any issues within 24 hours of delivery',
                        'Retain all packaging materials until inspection is complete'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Truck className="w-4 h-4 text-trees-primary flex-shrink-0 mt-1" />
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900 mb-1">Delays and Force Majeure</p>
                        <p className="text-sm text-yellow-700">
                          While we strive to meet delivery timelines, we are not liable for delays caused by circumstances beyond our control, including natural disasters, strikes, transportation issues, or government actions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Returns & Cancellations */}
            <motion.section 
              id="returns"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Returns & Cancellations</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Return Policy</h3>
                  <p className="leading-relaxed mb-4">
                    We accept returns under specific conditions to ensure fairness to all parties. Returns are subject to the following terms:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {returnConditions.map((condition, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:border-trees-primary/30 transition-colors"
                      >
                        <h4 className="font-semibold text-trees-secondary mb-2 text-sm">{condition.title}</h4>
                        <p className="text-xs text-gray-600">{condition.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Non-Returnable Items</h3>
                  <p className="leading-relaxed mb-3">The following items cannot be returned:</p>
                  <div className="space-y-2">
                    {[
                      'Customized or cut-to-size products',
                      'Products with visible signs of use or installation',
                      'Items damaged due to improper handling or storage',
                      'Products ordered as per special customer specifications'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-red-50 rounded-lg p-3">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Order Cancellations</h3>
                  <p className="leading-relaxed">
                    Orders may be cancelled before production begins. Once production has commenced, cancellation may not be possible or may incur charges. Cancellation requests must be submitted in writing. Refunds for cancelled orders will be processed within 7-10 business days after deducting any applicable cancellation charges.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Refund Process</h3>
                  <p className="leading-relaxed">
                    Approved refunds will be processed to the original payment method within 10-15 business days. Shipping charges are non-refundable unless the return is due to our error. Return shipping costs are the customer's responsibility unless the product is defective or incorrect.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Warranty Terms */}
            <motion.section 
              id="warranty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Shield}
                badge="Protection"
                title="Warranty Terms"
                subtitle="Product quality guarantee"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Our products come with manufacturer warranties that cover defects in materials and workmanship under normal use and proper installation. Warranty terms vary by product type and are specified in product documentation.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Warranty Coverage
                    </h4>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• <strong>Standard Products:</strong> 1-5 years depending on product category</p>
                      <p>• <strong>Premium Products:</strong> Extended warranty up to 10 years</p>
                      <p>• <strong>Structural Defects:</strong> Coverage for manufacturing defects</p>
                      <p>• <strong>Performance Issues:</strong> Subject to proper installation and usage</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Warranty Exclusions</h3>
                    <p className="leading-relaxed mb-3">
                      Warranties do not cover damage resulting from:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        'Improper installation or handling',
                        'Exposure to extreme conditions',
                        'Normal wear and tear',
                        'Unauthorized modifications',
                        'Acts of nature or accidents',
                        'Chemical or water damage'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Detailed Warranty Information:</strong> For complete warranty terms, conditions, and claim procedures, please visit our{' '}
                      <button 
                        onClick={() => onNavigate('warranty')}
                        className="text-trees-primary hover:underline font-medium"
                      >
                        Warranty Policy page
                      </button>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section 
              id="intellectual-property"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, images, videos, audio clips, digital downloads, data compilations, and software, is the property of The Trees Plywood or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Copyright</h3>
                  <p className="leading-relaxed">
                    The compilation of all content on this website is the exclusive property of The Trees Plywood and is protected by copyright law. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our express written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Trademarks</h3>
                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5">
                    <p className="font-medium text-trees-secondary mb-2">
                      <strong>Trademark Notice:</strong>
                    </p>
                    <p className="text-sm">
                      "The Trees Plywood," "The Trees," our logo, and all related names, logos, product and service names, designs, and slogans are trademarks of The Trees Plywood or its affiliates. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on this website are the trademarks of their respective owners.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Limited License</h3>
                  <p className="leading-relaxed">
                    You are granted a limited, revocable, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. This license does not include the right to download (other than page caching) or modify any portion of the website without our express written consent.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Third-Party Links - NEW */}
            <motion.section 
              id="third-party"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Link2 className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Third-Party Links & Websites</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites, applications, or services that are not owned or controlled by The Trees Plywood. We provide these links for your convenience and reference only.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900 mb-2">No Endorsement or Control</p>
                      <p className="text-sm text-yellow-700 mb-3">
                        We do not endorse, monitor, or have any control over third-party websites or their content. The inclusion of any link does not imply our approval or endorsement of the linked site, its operator, or its content.
                      </p>
                      <p className="text-sm text-yellow-700">
                        We are not responsible for examining or evaluating the content, accuracy, completeness, availability, or quality of third-party websites, nor do we warrant the offerings of any third-party businesses or individuals.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Your Responsibility</h3>
                  <div className="space-y-2">
                    {[
                      'Review the terms and privacy policies of any third-party websites before use',
                      'We assume no liability for your interactions with third-party websites',
                      'Any transactions with third parties are solely between you and that party',
                      'Report any inappropriate or harmful third-party content to us',
                      'Use caution when providing personal information to external sites'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <Link2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm italic">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit or use.
                </p>
              </div>
            </motion.section>

            {/* User Conduct */}
            <motion.section 
              id="user-conduct"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">User Conduct & Responsibilities</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  As a user of our website and services, you agree to conduct yourself responsibly and in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Account Security</h3>
                  <div className="space-y-2">
                    {[
                      'Choose a strong, unique password for your account',
                      'Do not share your login credentials with others',
                      'Notify us immediately of any unauthorized account access',
                      'Log out after using shared or public computers'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-50 rounded-lg p-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Prohibited Activities</h3>
                  <p className="leading-relaxed mb-3">
                    You agree not to engage in any activities that could harm our business, users, or website, including:
                  </p>
                  <div className="space-y-2">
                    {[
                      'Attempting to gain unauthorized access to our systems',
                      'Interfering with the proper working of our website',
                      'Using automated tools to access or scrape content',
                      'Posting false, misleading, or defamatory information',
                      'Violating any applicable laws or regulations',
                      'Infringing on intellectual property rights'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-red-50 rounded-lg p-3">
                        <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Electronic Communications - NEW */}
            <motion.section 
              id="electronic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Electronic Communications</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  By using our website and services, you consent to receive electronic communications from us. These communications may include notices about your account, transactional information, marketing materials, and other information concerning or related to our services.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-semibold text-blue-900 mb-3">Types of Communications</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Transactional:</strong> Order confirmations, shipping updates, invoices, and account notifications</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Service-Related:</strong> Technical updates, security alerts, policy changes, and support responses</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Marketing:</strong> Newsletters, promotional offers, product announcements (opt-out available)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Informational:</strong> Industry insights, guides, resources, and educational content</p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                  You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. You may opt out of promotional communications at any time by following the unsubscribe instructions in our emails or by contacting us directly.
                </p>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Email Delivery:</strong> You are responsible for maintaining valid and current email address(es) and phone numbers for receiving communications. We are not responsible for communications that are undeliverable due to outdated or incorrect contact information.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Professional Advice Disclaimer - NEW */}
            <motion.section 
              id="professional"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 bg-purple-50/30 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Professional Advice Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  The information, recommendations, and guidance provided on our website and through our services are for general informational purposes only and should not be considered as professional architectural, engineering, construction, or legal advice.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-purple-900 mb-2">Consult Qualified Professionals</p>
                      <p className="text-sm text-purple-700 mb-3">
                        Our products require proper installation by qualified professionals. Always consult with licensed architects, engineers, contractors, or other qualified professionals before:
                      </p>
                      <div className="space-y-1 text-sm text-purple-700 ml-4">
                        <p>• Starting any construction or renovation project</p>
                        <p>• Making structural modifications to buildings</p>
                        <p>• Selecting materials for specific applications</p>
                        <p>• Determining load-bearing or structural requirements</p>
                        <p>• Ensuring compliance with local building codes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Product specifications, installation guidelines, and technical data sheets are provided as general references. Actual performance may vary based on installation methods, environmental conditions, usage patterns, and other factors. We strongly recommend professional assessment for your specific application.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>No Liability:</strong> We accept no liability for damages resulting from failure to obtain appropriate professional advice or from improper installation, use, or application of our products. Always follow manufacturer guidelines and local building regulations.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Indemnification - NEW */}
            <motion.section 
              id="indemnification"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Handshake}
                badge="Legal Protection"
                title="Indemnification"
                subtitle="Your agreement to protect our company"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    You agree to defend, indemnify, and hold harmless The Trees Plywood, its affiliates, subsidiaries, directors, officers, employees, agents, suppliers, and partners from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Your Use of Services',
                        desc: 'Any use or misuse of our website, products, or services by you or anyone using your account'
                      },
                      {
                        title: 'Violation of Terms',
                        desc: 'Your violation of these Terms and Conditions or any applicable laws or regulations'
                      },
                      {
                        title: 'Infringement',
                        desc: 'Your infringement of any intellectual property or other rights of any third party'
                      },
                      {
                        title: 'User Content',
                        desc: 'Any content, information, or material you submit, post, or transmit through our services'
                      },
                      {
                        title: 'Third-Party Claims',
                        desc: 'Any claims by third parties arising from your actions or omissions related to our services'
                      },
                      {
                        title: 'Product Installation',
                        desc: 'Improper installation, use, or application of our products contrary to guidelines'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-trees-secondary mb-1 text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900 mb-1">Defense and Settlement</p>
                        <p className="text-sm text-red-700">
                          This indemnification obligation will survive termination of these Terms. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defense of such claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section 
              id="limitation-liability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={AlertCircle}
                badge="Liability"
                title="Limitation of Liability"
                subtitle="Understanding our legal limitations"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    To the fullest extent permitted by applicable law, The Trees Plywood, its directors, employees, partners, agents, suppliers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {liabilityExclusions.map((exclusion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm">{exclusion}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-6">
                    <h4 className="font-semibold text-orange-900 mb-2">Maximum Liability</h4>
                    <p className="text-sm text-orange-700">
                      In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing or using our website or services, or the value of your order, whichever is greater, during the twelve (12) months preceding the claim.
                    </p>
                  </div>

                  <p className="text-sm italic">
                    Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitations may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by law.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Disclaimer */}
            <motion.section 
              id="disclaimer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 bg-yellow-50/50 border border-yellow-200 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Disclaimer of Warranties</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our website, products, and services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                </p>
                <p className="leading-relaxed">
                  We do not warrant that:
                </p>
                <div className="space-y-2 ml-4">
                  {[
                    'Our website will be uninterrupted, timely, secure, or error-free',
                    'The results obtained from using our website will be accurate or reliable',
                    'The quality of any products, services, information, or other material obtained through our website will meet your expectations',
                    'Any errors in the website will be corrected',
                    'Our servers or communications are free of viruses or other harmful components'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed mt-4">
                  Product performance depends on proper installation, usage, and environmental conditions. We strongly recommend consulting with our technical team for specific application requirements and following all installation guidelines.
                </p>
              </div>
            </motion.section>

            {/* Privacy & Data */}
            <motion.section 
              id="privacy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Privacy & Data Protection</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="leading-relaxed">
                  By using our website and services, you acknowledge that you have read and understood our Privacy Policy and consent to the collection, use, and disclosure of your information as described therein.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">Read Our Privacy Policy</p>
                        <p className="text-sm text-blue-700">
                          Learn more about how we collect, use, and protect your personal information, including your rights under GDPR and CCPA.
                        </p>
                      </div>
                    </div>
                  </div>
                  <MagneticButton strength={0.15}>
                    <ModernButton
                      variant="primary"
                      size="sm"
                      icon={<Shield className="w-4 h-4" />}
                      onClick={() => onNavigate('privacy')}
                    >
                      View Privacy Policy
                    </ModernButton>
                  </MagneticButton>
                </div>
              </div>
            </motion.section>

            {/* Dispute Resolution */}
            <motion.section 
              id="dispute"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Dispute Resolution</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  We are committed to resolving any disputes amicably and efficiently. If you have a concern or complaint, we encourage you to contact us first so we can attempt to resolve the issue informally.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Resolution Process</h3>
                  <div className="space-y-3">
                    {[
                      { step: 'Contact Us', desc: 'Reach out to our customer service team with your concern' },
                      { step: 'Investigation', desc: 'We will investigate the matter and respond within 7 business days' },
                      { step: 'Negotiation', desc: 'Work with us to find a mutually acceptable solution' },
                      { step: 'Escalation', desc: 'If unresolved, escalate to senior management' },
                      { step: 'Mediation', desc: 'Consider mediation before pursuing legal action' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-trees-secondary mb-1">{item.step}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Arbitration</h3>
                  <p className="leading-relaxed">
                    If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended. The arbitration shall be conducted in Hyderabad, Telangana, India, and the language of arbitration shall be English.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Class Action Waiver:</strong> You agree to bring claims against us only in your individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section 
              id="termination"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Termination</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend your access to our website and services, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                </p>
                <p className="leading-relaxed">
                  Upon termination, your right to use our website will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900 mb-1">Grounds for Termination</p>
                      <p className="text-sm text-red-700">
                        Your account or access may be terminated if you violate these Terms, engage in fraudulent activity, abuse our services, or for any other reason we deem necessary to protect our business or other users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Force Majeure - NEW */}
            <motion.section 
              id="force-majeure"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <CloudOff className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Force Majeure</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Neither party shall be liable for any failure or delay in performing its obligations under these Terms where such failure or delay results from circumstances beyond its reasonable control (a "Force Majeure Event").
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-trees-secondary mb-3">Force Majeure Events Include:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Acts of God (earthquakes, floods, storms, fires)',
                      'War, terrorism, riots, or civil disturbances',
                      'Government actions, embargoes, or sanctions',
                      'Epidemics, pandemics, or public health emergencies',
                      'Labor strikes or industrial disputes',
                      'Transportation or logistics disruptions',
                      'Utility failures or telecommunications outages',
                      'Supplier failures or material shortages'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CloudOff className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Effect of Force Majeure</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Performance obligations are suspended during the Force Majeure Event</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Affected party must notify the other party promptly</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Reasonable efforts must be made to mitigate the effects</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Either party may terminate if event continues for more than 60 days</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm italic">
                  Force Majeure Events do not excuse payment obligations for products or services already delivered.
                </p>
              </div>
            </motion.section>

            {/* Assignment - NEW */}
            <motion.section 
              id="assignment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Assignment</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  You may not assign, transfer, or delegate any of your rights or obligations under these Terms without our prior written consent. Any attempted assignment in violation of this provision shall be null and void.
                </p>
                <p className="leading-relaxed">
                  We reserve the right to freely assign, transfer, or delegate our rights and obligations under these Terms, in whole or in part, without restriction. This includes, without limitation, assignment in connection with a merger, acquisition, corporate reorganization, or sale of substantially all of our assets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900 mb-1 text-sm">You Cannot Assign</p>
                        <p className="text-xs text-red-700">
                          Your rights and obligations are personal to you and cannot be transferred without our written approval
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900 mb-1 text-sm">We May Assign</p>
                        <p className="text-xs text-green-700">
                          We retain the right to assign our rights and obligations, including in business transactions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm mt-4">
                  These Terms will inure to the benefit of and be binding upon the parties, their successors, and permitted assigns.
                </p>
              </div>
            </motion.section>

            {/* Legal Notices - NEW */}
            <motion.section 
              id="notices"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Legal Notices & Communications</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  All legal notices, demands, and other formal communications related to these Terms must be in writing and shall be deemed to have been duly given when delivered in person, by courier, by certified or registered mail (return receipt requested), or by email with confirmation of receipt.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Notices to Us
                    </h4>
                    <p className="text-sm text-blue-800 mb-3">Legal notices to The Trees Plywood should be sent to:</p>
                    <div className="space-y-2 text-sm text-blue-700">
                      <p className="font-medium">The Trees Plywood</p>
                      <p>Legal Department</p>
                      <p>Sri Krishna Heights, Madhapur</p>
                      <p>Hyderabad, Telangana 500018</p>
                      <p>India</p>
                      <p className="mt-3"><strong>Email:</strong> legal@thetreesplywood.com</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Notices to You
                    </h4>
                    <p className="text-sm text-green-800 mb-3">We may provide notices to you by:</p>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Email to your registered address</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Posting on our website</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Mail to your billing address</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Any other reasonable means</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Responsibility:</strong> You are responsible for keeping your contact information current. Notices sent to your last known address will be deemed effective even if you no longer use that address.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Entire Agreement - NEW */}
            <motion.section 
              id="entire-agreement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={FileSignature}
                badge="Complete Agreement"
                title="Entire Agreement"
                subtitle="The complete terms between us"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    These Terms and Conditions, together with our Privacy Policy, Warranty Policy, and any additional terms you agree to when using specific features of our services, constitute the entire agreement between you and The Trees Plywood regarding your use of our website and services.
                  </p>

                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5">
                    <h4 className="font-semibold text-trees-secondary mb-3">Documents Included</h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Terms & Conditions', desc: 'This document', page: 'terms' },
                        { name: 'Privacy Policy', desc: 'Data protection and privacy rights', page: 'privacy' },
                        { name: 'Warranty Policy', desc: 'Product warranty terms', page: 'warranty' },
                        { name: 'Additional Terms', desc: 'Service-specific agreements' }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
                          <div className="flex items-center gap-3">
                            <FileSignature className="w-4 h-4 text-trees-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">{doc.name}</p>
                              <p className="text-xs text-gray-600">{doc.desc}</p>
                            </div>
                          </div>
                          {doc.page && (
                            <button
                              onClick={() => onNavigate(doc.page)}
                              className="text-trees-primary hover:underline text-xs font-medium"
                            >
                              View →
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Supersedes Prior Agreements</h3>
                    <p className="leading-relaxed mb-3">
                      These Terms supersede all prior or contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the subject matter herein.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">No oral agreements or representations are binding</p>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Previous versions of these Terms are replaced by this version</p>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Amendments must be in writing and signed by both parties</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Severability & Waiver</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-sm mb-2">Severability</p>
                        <p className="text-sm text-gray-600">
                          If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-sm mb-2">Waiver</p>
                        <p className="text-sm text-gray-600">
                          Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. A waiver of any breach of these Terms will not constitute a waiver of any subsequent breach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Governing Law */}
            <motion.section 
              id="governing-law"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Governing Law & Jurisdiction</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                </p>
                <p className="leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.
                </p>
                <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section 
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Changes to Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We reserve the right to update, modify, or replace these Terms and Conditions at any time at our sole discretion. Material changes will be communicated by:
                </p>
                
                <div className="space-y-2 ml-4">
                  {[
                    'Posting the new Terms on this page with an updated "Last Updated" date',
                    'Sending email notifications to registered users for significant changes',
                    'Displaying a prominent notice on our website homepage',
                    'Requiring acceptance of new Terms before continued use (for major changes)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed mt-4">
                  Changes become effective immediately upon posting. Your continued use of our website and services after any changes constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically to stay informed of any updates.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Version:</strong> 2.0 | <strong>Last Updated:</strong> November 4, 2025 | <strong>Effective Date:</strong> November 1, 2025
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
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-trees-secondary text-2xl md:text-3xl mb-3">Questions About These Terms?</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    If you have any questions, concerns, or require clarification about these Terms and Conditions, our legal team is here to help.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-4 border border-trees-primary/20">
                    <Mail className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Email</p>
                    <p className="text-xs text-gray-600">legal@thetreesplywood.com</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-trees-primary/20">
                    <Phone className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Phone</p>
                    <p className="text-xs text-gray-600">+91 9091744744</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-trees-primary/20">
                    <MapPin className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Address</p>
                    <p className="text-xs text-gray-600">Madhapur, Hyderabad 500018</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="primary"
                      size="lg"
                      icon={<Mail className="w-5 h-5" />}
                      onClick={() => onNavigate('contact')}
                    >
                      Contact Legal Team
                    </ModernButton>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="outline"
                      size="lg"
                      icon={<Shield className="w-5 h-5" />}
                      onClick={() => onNavigate('privacy')}
                    >
                      View Privacy Policy
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
              <Sparkles className="w-5 h-5" />
              <span>Transparent Business, Quality Products</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Experience fair terms, quality products, and exceptional service with The Trees Plywood
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Package className="w-6 h-6" />}
                  onClick={() => onNavigate('products')}
                >
                  Browse Products
                </ModernButton>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Mail className="w-6 h-6" />}
                  onClick={() => onNavigate('contact')}
                  className="border-white text-white hover:bg-white/10"
                >
                  Get Quote
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
