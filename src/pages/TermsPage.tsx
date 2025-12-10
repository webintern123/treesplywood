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
    { value: '25+', label: 'Years of Trust ' },
    { value: '10,000+', label: 'Customers Served ' },
    { value: '100%', label: 'Transparent Practices' },
  ];

  const prohibitedUses = [
    'Break any laws while using the site',
    'Upload or send anything harmful (like viruses or malicious files)',
    'Try to damage, disable, or interrupt the website',
    'Copy or reuse our content without permission',
    'Pretend to be someone else or submit false details',
    'Collect information about other users',
    'Tamper with any security features',
    'Use bots, scripts, or automated tools without approval.'
  ];

  const returnConditions = [
    { title: 'Return Window', description: 'Products can be returned within 7 days of delivery.' },
    { title: 'Condition of the Product', description: 'Items must be unused, packed in their original materials, and include all labels or documents.' },
    { title: 'Custom Orders', description: 'Any customised item or cut-to-size material cannot be returned.' },
    { title: 'Required Documents', description: 'Please provide the original invoice and delivery receipt when requesting a return.' },
  ];

  const liabilityExclusions = [
    'Indirect or unexpected damages',
'Loss of income, business, or opportunities',
'Loss of data or system-related issues',
'Delays or interruptions in services or deliveries',
'Actions or content from third-party websites or services',
'Product concerns caused by incorrect handling, storage, or installation',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Clear Rules, Trustworthy Service"
        description="Straightforward terms designed to keep our services clear and fair for everyone."
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
                Reach Our Team 
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
                onClick={() => onNavigate('privacy')}
              >
                View Privacy Policy 
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
                    <p className="text-trees-primary font-medium">Understanding How You Can Use Our Website and Services</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Thank you for visiting the Tree’s Plywood website. These Terms explain how you use our website, products, and services. By continuing to browse or interact with us online, you are agreeing to follow these Terms.
                  </p>
                  <p>
                    These Terms apply to everyone who visits our site, whether you are checking product details, asking for a quote, applying for a dealership, or making a purchase.
                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">Please Read Carefully</p>
                    <p className="text-sm">
                     If you do not agree with any part of these Terms, please do not use our website or services. By using our website, you accept these Terms and any updates we may make in the future.
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
                badge="Acceptance "
                title="Agreement to Our Terms"
                subtitle="Your agreement to these terms"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    By using the Tree’s Plywood website or any of our services, you are agreeing to follow these Terms and our Privacy Policy. If you are accessing our services for a business or organisation, you confirm that you have the authority to agree on their behalf.
                  </p>
                  <p>
                    These Terms create a legally binding agreement between you and The Trees Plywood. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900 mb-1">Updates to These Terms</p>
                        <p className="text-sm text-yellow-700">
                          We may revise or update these Terms whenever necessary. If important changes are made, we will share the update on our website or notify you by email. Continuing to use our website after any changes means you accept the updated Terms.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Age & Eligibility</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our website and services are for people who are 18 years or older, or the legal age of adulthood in their area. By using this website, you confirm that you meet this requirement.
                </p>
                <p className="leading-relaxed">
                 If you are younger than the required age, you may use the website only with a parent or legal guardian, and they must agree to these Terms. Parents and guardians are responsible for guiding and supervising how their children use our website.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-orange-900 mb-1">Legal Ability to Use Our Services</p>
                      <p className="text-sm text-orange-700">
                        You should use our services only if you are legally able to enter into agreements. If you do not meet this requirement, please do not use our website. We may ask for age or identity proof if needed.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Use of Our Website</h2>
                <h3 className="text-trees-secondary font-semibold mb-3">How You Can Use the Site</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">You’re welcome to use our website to:</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ●	View our products<br></br>
●	Ask for details or quotations<br></br>
●	Submit enquiries or orders<br></br>
●	Read the information and resources we provide<br></br>
Your access is meant for personal or business use related to Tree’s Plywood.

                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">What You Should Not Do</h3>
                  <p className="text-gray-700 mb-4">To keep the website safe for everyone, you agree not to:</p>
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
                    <h3 className="text-trees-secondary font-semibold mb-3">About Our Products</h3>
                    <p className="leading-relaxed">
                      We aim to share correct and helpful details about our products, including descriptions, specifications, images, and pricing. Some variations may occur, as colours, textures, and sizes can look different on screens or in photos.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Pricing & Availability</h3>
                    <div className="space-y-3">
                      {[
                        'Prices may change from time to time without notice',
'	Availability depends on stock, location, and demand.',
'	We may limit quantities or discontinue products when required.',
'Custom quotations are normally valid for 30 days unless mentioned otherwise.',
'Bulk orders may have different pricing—please contact us for a detailed quote.',
'Taxes and additional charges will be applied as per the final invoice.'

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
                    <h3 className="text-trees-secondary font-semibold mb-3">Technical Details</h3>
                    <p className="leading-relaxed">
                      Technical information is shared to guide you, but actual performance can vary based on installation, environment, and usage. For specific project needs, we recommend speaking with our technical team so you get the right solution.
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
                  <h3 className="text-trees-secondary font-semibold mb-3">How Orders Work</h3>
                  <p className="leading-relaxed mb-3">
                    You can place an order through our website, by email, by phone, or through any of our authorised dealers. The process is straightforward:
                  </p>
                  <div className="space-y-2">
                    {['You choose the product and share your requirements.',
                      'We give you a quotation for approval.',
                       'Once you confirm, the order is booked with the required advance payment.',
                       'We begin production and carry out the quality checks.',
                        'We plan the delivery and arrange the dispatch.'
].map((step, index) => (
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
                  <h3 className="text-trees-secondary font-semibold mb-3">Order Confirmation</h3>
                  <p className="leading-relaxed">
                    All orders are confirmed only after we review availability and details. We may cancel an order if a product is out of stock, if there is a pricing mistake, if the order looks suspicious, or if credit requirements are not met. If we need to cancel an order after you have paid, we will refund the full amount.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Payment Terms</h3>
                  <p className="leading-relaxed mb-3">
                    Your quotation or invoice will clearly mention the payment terms. We accept bank transfers, cheques, and online payments. Typical payment terms are:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <p>• <strong>New Customers:</strong> 100% advance before production</p>
                    <p>• <strong>Regular Customers: </strong>50% advance and the remaining 50% before dispatch (subject to credit approval)</p>
                    <p>• <strong>Bulk Orders:</strong> Payment terms can be discussed and agreed based on order size</p>
                    <p>• <strong>Credit Facility: </strong> Offered to eligible businesses after proper review</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Minimum Order Quantity (MOQ)</h3>
                  <p className="leading-relaxed">
                    Some products may require a minimum order quantity due to production and transport factors. We will inform you of the MOQ during the quotation stage. Smaller quantities may be supplied at a different price.
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
                badge="Shipping"
                title="Logistics & Delivery"
                align="left"
              />
              <h3 className="text-trees-secondary font-semibold mb-3">How We Deliver</h3>
              <p className="leading-relaxed mb-4">
                      We make sure your products reach you safely and on time. Delivery timelines depend on stock, order size, custom requirements, and your location.
                    </p>

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Delivery Timeline</h3>
                    <p className="leading-relaxed mb-4">
                      Delivery timelines vary based on product availability, order quantity, customization requirements, and delivery location. Standard delivery timelines are:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-medium text-green-900 mb-1">Ready Stock: </p>
                        <p className="text-sm text-green-700">3–7 working days</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-medium text-blue-900 mb-1">	Custom Orders: </p>
                        <p className="text-sm text-blue-700">10–15 working days</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="font-medium text-purple-900 mb-1">Bulk Orders</p>
                        <p className="text-sm text-purple-700">15–30 working days</p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="font-medium text-orange-900 mb-1">Special Items: </p>
                        <p className="text-sm text-orange-700">As discussed and agreed</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Delivery Charges</h3>
                    <p className="leading-relaxed">
                      ●	Shipping charges are calculated based on order value, weight, volume, and delivery location.<br></br>
●	All charges will be mentioned clearly in your quotation.<br></br>
●	For large or repeated orders, discounted or free delivery may be provided.<br></br>
●	Additional costs may apply if insurance or special handling is required.

                    </p>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Check Your Delivery</h3>
                    <p className="leading-relaxed mb-3">
                      When your order arrives, please:
                    </p>
                    <div className="space-y-2">
                      {[
                        'Check the goods immediately',
'Note any visible damage on the delivery slip',
'Report any issues within 24 hours',
'Keep the packaging until the issue is resolved'
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
                        <p className="font-medium text-yellow-900 mb-1">Delays</p>
                        <p className="text-sm text-yellow-700">
                          We do our best to deliver on time, but delays can happen due to reasons outside our control—such as weather issues, transport delays, strikes, or government restrictions.
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
                    We accept returns in certain situations to keep the process fair for everyone. Please read the conditions below:
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
                  <p className="leading-relaxed mb-3">We cannot accept returns for:</p>
                  <div className="space-y-2">
                    {[
                      'Custom or cut-to-size items',
                      'Products that show signs of use or installation',
                      'Items damaged due to poor handling or storage',
                      'Products made specifically based on customer instructions'
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
                    Orders can be cancelled only before production begins. Once production has started, cancellation may not be possible or may involve additional charges. All cancellation requests must be sent in writing. Refunds for approved cancellations will be processed within 7–10 business days, after deducting applicable charges.

                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Refunds</h3>
                  <p className="leading-relaxed">
                    Refunds for approved returns will be issued to the original payment method within 10–15 business days.
                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">Please note:</p>
                    <p className="text-sm">
                     Shipping charges are not refundable unless the mistake is ours. Return shipping costs must be covered by the customer, except in cases of wrong or damaged products sent by us
                    </p>
                  </div>
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
                badge="Warranty Terms"
                title="Our Promise of Quality"
                subtitle="Product quality guarantee"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    All our products are backed by manufacturer warranties that cover material or production defects when used and installed the right way. Each product has its own warranty period, which is mentioned in its respective documents.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      What the Warranty Covers
                    </h4>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• <strong>Regular Product Range: </strong> Warranty periods vary from 1 to 5 years.</p>
                      <p>• <strong>Premium Range:</strong> Extended warranty available, up to 10 years.</p>
                      <p>• <strong>Manufacturing Issues: </strong> Covers structural or production defects.</p>
                      <p>• <strong>Performance Concerns: </strong> Valid only when the product is installed and used as recommended.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">What the Warranty Does Not Cover</h3>
                    <p className="leading-relaxed mb-3">
                     The warranty does not apply to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        'Wrong or improper installation',
                        'Rough handling or misuse',
                        'Exposure to extreme weather or moisture beyond recommended limits',
                        'Natural wear and tear',
                        'Changes or alterations made without approval',
                        'Damage caused by accidents, chemicals, or natural events'
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
                      <strong>More Details:</strong> For complete instructions, claim steps, and full warranty conditions, please refer to our.{' '}
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Intellectual Property</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  All the material on this website, such as text, photos, logos, designs, product details, and other content belongs to Tree’s Plywood. These materials are protected under Indian copyright and trademark laws. Please do not copy, reuse, or share our content without getting written permission from us.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Copyright</h3>
                  <p className="leading-relaxed">
                    Everything you see on this site has been created or arranged by Tree’s Plywood. You cannot:
●	Reproduce it<br></br>
●	Upload it elsewhere<br></br>
●	Edit or modify it<br></br>
●	Use it for commercial purposes<br></br>
●	Download and store it for distribution<br></br>
unless we clearly allow it in writing.

                  </p>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Trademarks</h3>
                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5">
                    <p className="font-medium text-trees-secondary mb-2">
                      <strong>Trademark Notice:</strong>
                    </p>
                    <p className="text-sm">
                      The name Tree’s Plywood, our logo, and any product or brand names shown on the website are trademarks of our company. They cannot be used by anyone else without our approval. Other brand names appearing on the site belong to their respective owners.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Limited Use Permission</h3>
                  <p className="leading-relaxed">
                    You may browse our website for personal use.
 This permission does not allow you to:<br></br>
●	Download our content (except normal page viewing)<br></br>
●	Change any part of the website<br></br>
●	Use the material for business or promotional purposes<br></br>
Any other use requires written consent from Tree’s Plywood.

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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Links to Other Websites – Third-Party</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Our website may sometimes include links to other websites for additional information or convenience. These websites are not managed or operated by Tree’s Plywood.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900 mb-2">No Endorsement or Control</p>
                      <p className="text-sm text-yellow-700 mb-3">
                       We do not control what appears on these external websites and are not responsible for their content, services, or updates. Adding a link does not mean we recommend or approve that website or what it offers.
                      </p>
                      <p className="text-sm text-yellow-700">
                        We are not responsible for examining or evaluating the content, accuracy, completeness, availability, or quality of third-party websites, nor do we warrant the offerings of any third-party businesses or individuals.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">When you visit another website through our links:</h3>
                  <div className="space-y-2">
                    {[
                      'You do so at your own choice',
                      '	Any interaction or purchase is directly between you and that website',
,                      
                      'We are not responsible for any issues, losses, or concerns that may arise',
                      'Before using any third-party site, we suggest you read their terms and privacy policies and be careful when sharing your personal information.'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <Link2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm italic">
                 If you come across any harmful or inappropriate link through our website, please inform us so we can review it.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Using Our Website Responsibly</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  We ask all visitors to use our website in a fair and honest way. By using our website or services, you agree to follow the law and respect our business, our team, and other users.<br></br>
                  If you create or use any login details with us, you are responsible for keeping them safe and for everything done through your account.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">Keeping Your Account Safe</h3>
                  <p className="leading-relaxed">
                  Please help keep your account secure by:
                </p>
                <br></br>
                  <div className="space-y-2">
                    {[
                     'Using a strong password that others cannot guess',
'Not sharing your login details with anyone',
'Informing us right away if you notice any unusual or unauthorized activity',
'Signing out when using shared or public computers.'

                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-50 rounded-lg p-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">What Is Not Allowed</h3>
                  <p className="leading-relaxed mb-3">
                    To keep our website safe and reliable, you agree not to:
                  </p>
                  <div className="space-y-2">
                    {[
                      'Try to access areas of the website you are not allowed to use',
'Disrupt or damage how the website works',
'Use software, scripts, or automated tools to collect data from the site',
'Share false, harmful, or misleading information',
'Break any local, state, or national laws',
'Copy or misuse our content, brand name, or materials.'

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
                  When you visit our website or contact us, you allow us to communicate with you through email, phone calls, WhatsApp, or other digital channels you have shared.
                  <br></br>
                  <br></br>
                  We may reach out to you for the following reasons:
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-semibold text-blue-900 mb-3">What We May Contact You About</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Order & Account Updates</strong> Order details, invoices, delivery information, and important account messages</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Service Information</strong>  Replies to your queries, support messages, policy updates, or important service notices</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>Product & Offers</strong>Updates about new products, offers, or company announcements (You can choose to stop any time)
</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p><strong>General Information</strong>Useful updates related to plywood products, usage guidance, or industry-related information</p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                 All online messages and emails we send are considered valid communication.
                </p>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Your Responsibility:</strong> Please make sure the phone number and email address you share with us are correct and active. We are not responsible if messages do not reach you due to incorrect or outdated contact details.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Important Guidance</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  The information shared on our website is meant to give you a general understanding of our products. It is not a replacement for expert advice related to construction, design, engineering, or legal matters.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-purple-900 mb-2">Get the Right Help</p>
                      <p className="text-sm text-purple-700 mb-3">
                        Our plywood and boards must be installed correctly to perform as intended. Before choosing materials or starting any work, we strongly suggest speaking with experienced professionals such as architects, engineers, or contractors.
                      </p>
                      <div className="space-y-1 text-sm text-purple-700 ml-4">
                        <p>This is especially important when:</p>
                        <p>• Planning construction or renovation work</p>
                        <p>• Making changes to walls, roofs, or structures</p>
                        <p>• Selecting products for specific conditions</p>
                        <p>• Working on load-bearing areas</p>
                        <p>•	Following local building rules and safety standards</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Product details, usage notes, and technical information are shared for reference only. Actual results depend on how and where the material is used, site conditions, and installation quality. For best results, professional assessment is always advised.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Responsibility:</strong>Tree’s Plywood is not responsible for issues caused by incorrect selection, poor installation, or use outside recommended guidelines. Please follow official instructions and local building regulations at all times.
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
                badge="Legal Responsibility"
                title="Your Role in Keeping Things Fair"
                subtitle="By using our website, products, or services, you agree to take responsibility for how you use them."
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    This means Tree’s Plywood will not be held responsible if issues arise due to:
                  </p>
                  
                  <div className="space-y-3">
  {[
    'Incorrect or careless use of our website or products',
    'Use of our services in a way that breaks the law',
    'Not following the terms shared on this website',
    'Sharing or posting content that belongs to someone else',
    'Problems caused by information or material submitted by you',
    'Claims made by others because of your actions',
    'Improper handling, installation, or use of our plywood products against recommended guidelines',
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
        <p className="text-gray-700 leading-relaxed">{item}</p>
      </div>
    </motion.div>
  ))}
</div>


                  <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900 mb-1">Handling Claims</p>
                        <p className="text-sm text-red-700">
                          If such a situation arises, Tree’s Plywood may choose to manage the matter directly. In such cases, we may ask for your cooperation to help resolve it smoothly.
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
                title="Responsibility & Liability"
                subtitle="We always aim to provide accurate information and reliable products. However, there are practical limits to what we can be responsible for."
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Tree’s Plywood will not be held responsible for losses or issues that happen due to:
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
                    <h4 className="font-semibold text-orange-900 mb-2">Limits to Our Responsibility</h4>
                    <p className="text-sm text-orange-700">
                      If any issue arises, our responsibility will not go beyond:<br></br>
●	The amount paid for the product or service, or<br></br>
●	The value of the order related to the concern<br></br>
(whichever is higher, within the last 12 months).

                    </p>
                  </div>

                  <p className="text-sm italic">
                    Legal Exceptions: Some laws do not allow certain limits on responsibility. If those laws apply to you, our responsibility will be restricted to the maximum level allowed under the law.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Service & Product Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We provide our website, information, and products as they are, based on current availability. While we make every effort to keep details accurate and updated, we cannot promise that everything will always be perfect or uninterrupted.
                </p>
                <p className="leading-relaxed">
                  Please note:
                </p>
                <div className="space-y-2 ml-4">
                  {[
                    'The website may sometimes be unavailable due to maintenance or technical issues',
'Information on the website may change or be updated over time',
'Product details shown online are for general guidance and may vary in real use',
'We cannot guarantee that the website will always work without errors',
'Technical issues such as bugs or security problems may occasionally occur'

                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed mt-4">
                 Product results depend on how and where they are used. Factors like installation method, site conditions, handling, and usage play an important role in performance.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">For the best results, we recommend:</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                 ●	Following proper installation and usage instructions<br></br>
●	Using products only for their intended purpose<br></br>
●	Speaking with our team or authorised dealers for application advice

                </p>
                <p className="leading-relaxed">
                  Tree’s Plywood is not responsible for issues caused by incorrect use, installation, or conditions beyond our control.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">Read Our Privacy Policy</p>
                        <p className="text-sm text-blue-700">
                          If you’d like to understand this in detail—what we collect, why we collect it, and how your data is kept safe, you can read our Privacy Policy below.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Resolving Issues</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                 If you have any problem or concern, we believe the best way forward is open conversation. Please reach out to us first—we’ll always try to sort things out in a fair and practical way.
                </p>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">How We Handle Concerns</h3>
                  <div className="space-y-3">
                    {[
                      { step: ' Get in touch', desc: 'Contact our team and explain the issue clearly.' },
                      { step: 'Review', desc: 'We will look into the matter and share an update within 7 working days.' },
                      { step: 'Discussion', desc: 'We’ll talk through possible solutions and try to reach an understanding that works for both sides.' },
                      { step: 'Senior Review', desc: 'If needed, the matter will be reviewed by senior management.' },
                      { step: 'Final', desc: 'If required, both parties may agree to seek help through mediation before taking any further action.' }
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
                  <h3 className="text-trees-secondary font-semibold mb-3">Legal Resolution</h3>
                  <p className="leading-relaxed">
                    If the issue cannot be resolved through discussion or mediation, it will be handled through arbitration under Indian law.
The arbitration will take place in Hyderabad, Telangana, and proceedings will be in English. 

                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Individual Claims Only:</strong> Any claim must be raised on an individual basis. Claims cannot be combined or filed as part of a group or collective action.
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
                  We may limit, pause, or stop your access to our website or services if needed. This can happen if the site is misused, the terms are not followed, or if continuing access could cause harm to our business or users.
                </p>
                <p className="leading-relaxed">
                  If access is stopped, you will no longer be allowed to use the website or its services. This does not affect any rights or responsibilities that already exist, such as ownership of content or legal protections.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900 mb-1">When Access May Be Stopped</p>
                      <p className="text-sm text-red-700">
                       Your access may be restricted or ended if:<br></br>
●	You do not follow these terms<br></br>
●	False or misleading information is used<br></br>
●	Our services are misused or abused<br></br>
●	Any activity causes risk to our business, reputation, or other users<br></br>
This decision is taken only when necessary and in the interest of fair and safe use.

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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Uncontrollable Situations</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Sometimes, situations occur that are outside anyone’s control. When this happens, neither Tree’s Plywood nor the customer will be held responsible for delays or non-performance caused by such events.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-trees-secondary mb-3">Examples of Such Situations</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'These may include, but are not limited to:',
                      'Natural events like floods, heavy rains, fires, or earthquakes',
'	Political unrest, war, or unexpected public disturbances',
'Government orders, lockdowns, or restrictions',
'	Health emergencies affecting workers or transport',
'	Transport delays, fuel shortages, or breakdowns in logistics',
'	Power cuts, network failures, or communication issues',
'	Shortage of raw materials or supplier-side delays.',

                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CloudOff className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-trees-secondary font-semibold mb-3">What This Means</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Work or delivery may be paused until the situation improves</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">The affected party will inform the other as soon as possible</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Both sides will try to reduce delays wherever practical</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">If the disruption continues for over two months, either side may choose to cancel the agreement</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm italic">
                 Please note: Payments for goods or services already supplied must still be honoured.
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
                  These terms apply only to you and cannot be passed on to someone else.
                </p>
                <p className="leading-relaxed">
                  You may not share, transfer, or hand over your rights or responsibilities to another person or business unless we clearly agree to it in writing.
                </p>
                <p className="leading-relaxed">
                 Tree’s Plywood may transfer its rights or responsibilities under these terms if required for business reasons. This may happen during events such as company restructuring, partnerships, mergers, or sale of business assets.
                </p>
                <p className="leading-relaxed">
                  These terms will continue to apply to anyone who legally takes over or continues the business, and to any parties officially approved by us.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Official Communication</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  If you need to send any official or legal message related to these Terms, please share it in writing. We will treat it as received once it reaches us through a proper channel such as hand delivery, courier, post, or email.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Notices to Us
                    </h4>
                    <p className="text-sm text-blue-800 mb-3">Contact Details for Tree’s Plywood</p>
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
                      How We May Contact You
                    </h4>
                    <p className="text-sm text-green-800 mb-3">We may reach out to you regarding updates, notices, or important information through:</p>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>	The email address you have shared with us</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Announcements on our website</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Post sent to your provided address</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>Any other practical and reliable method</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Keeping Your Details Updated</strong> Please make sure your contact details are correct and up to date. If we send a notification to the last contact information you provided, it will be considered valid even if you no longer use that email or address.
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
                subtitle="Final Understanding Between Us"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    This page explains the main rules for using our website and services. Along with the policies listed below, it sets the full understanding between you and Tree’s Plywood.

When you use our website, place enquiries, or work with us, you agree to follow these terms as well as the related policies connected to them.

                  </p>

                  <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5">
                    <h4 className="font-semibold text-trees-secondary mb-3">Related Policies & Documents</h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Terms & Conditions', desc: 'The rules that apply to using our website and services', page: 'terms' },
                        { name: 'Privacy Policy', desc: 'How we collect and protect your personal information', page: 'privacy' },
                        { name: 'Warranty Policy', desc: 'Details about product warranty and support', page: 'warranty' },
                        { name: 'Other Service Terms', desc: 'Any additional conditions shared during specific services or transactions' }
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
                    <h3 className="text-trees-secondary font-semibold mb-3">Understanding These Terms</h3>
                    <h4 className="text-trees-secondary font-semibold mb-3">This version counts</h4>
                    <p className="leading-relaxed mb-3">
                      These Terms replace any earlier discussions, emails, or understandings about using our website or services. Only what is written here applies.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Verbal promises or conversations are not considered binding</p>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Older versions of these Terms no longer apply</p>
                      </div>
                      <div className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-trees-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Any changes must be shared in writing and agreed to by both sides.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-trees-secondary font-semibold mb-3">Severability & Waiver</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-sm mb-2">If Part of These Terms Doesn’t Apply</p>
                        <p className="text-sm text-gray-600">
                          If any part of these Terms cannot be used or enforced for any legal reason, the rest of the Terms will still continue to apply as normal.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-sm mb-2">Not Enforcing Doesn’t Mean Giving Up</p>
                        <p className="text-sm text-gray-600">
                          If we choose not to act on a rule at any point, it doesn’t mean we have given up that right. If a rule is overlooked once, it can still be applied later.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Legal Jurisdiction & Applicable Law</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  These terms are governed by the laws of India. Any disagreement or issue related to our products, services, or website will be handled only by the courts located in Hyderabad, Telangana.
                </p>
                <p className="leading-relaxed">
                 If we choose not to act on a particular part of these terms at any point, it does not mean we have given up our rights.
                </p>
                <p className="leading-relaxed">
                 If a court finds that any part of these terms cannot be applied, the rest of the terms will still remain valid and continue to apply.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Updates to These Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We may change these terms from time to time to reflect updates to our business, services, or legal requirements.
                  <br></br>
                   <br></br>
                  Whenever we make changes, we will:
                </p>
                
                <div className="space-y-2 ml-4">
                  {[
                    'Update this page with the revised terms',
'Change the “Last Updated” date so you know what’s new',
'Inform users when the change is important, wherever required'

                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed mt-4">
                 Once the updated terms are published here, they apply immediately. By continuing to use our website or services after an update, you are agreeing to the new version.<br></br>
                 <br></br>
                 We suggest checking this page occasionally so you’re aware of any updates.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Version:</strong> 2.0 | <strong>Last Updated:</strong> December 4, 2025 | <strong>Effective Date:</strong> December 1, 2025
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
                  <h2 className="text-trees-secondary text-2xl md:text-3xl mb-3">Need Help or Clarity?</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    If anything in these terms isn’t clear, feel free to reach out. We’re happy to guide you.
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
                      Contact Us 
                    </ModernButton>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="outline"
                      size="lg"
                      icon={<Shield className="w-5 h-5" />}
                      onClick={() => onNavigate('privacy')}
                    >
                      Read Our Privacy Policy
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
              <span>Clear Terms, Quality Material, & Reliable Products</span>
            </div>

            <h4 className="text-white text-3xl md:text-5xl mb-6">
              Planning a project or need material details?
            </h4>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Take a look at our products or reach out to us directly.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Package className="w-6 h-6" />}
                  onClick={() => onNavigate('products')}
                >
                  View Products       
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
                  Request a Quote
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
