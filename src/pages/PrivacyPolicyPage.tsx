import { 
  Shield, Lock, Eye, UserCheck, Database, Globe, FileText, 
  Mail, Phone, MapPin, CheckCircle2, AlertCircle, Clock,
  Trash2, Download, Users, Sparkles, ArrowRight, Scale,
  RefreshCw, Baby, FileCheck, AlertTriangle, Cookie, Settings,
  Bell, Landmark, List, ExternalLink
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { motion } from 'motion/react';
import { useState } from 'react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: Shield },
    { id: 'information-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Your Information', icon: Eye },
    { id: 'sharing', title: 'Sharing Your Information', icon: Globe },
    { id: 'third-party', title: 'Third-Party Services', icon: List },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'breach', title: 'Breach Notification', icon: Bell },
    { id: 'retention', title: 'Data Retention', icon: Clock },
    { id: 'your-rights', title: 'Your Rights', icon: UserCheck },
    { id: 'privacy-requests', title: 'Privacy Requests', icon: FileCheck },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'international', title: 'International Transfers', icon: Globe },
    { id: 'ccpa', title: 'California Privacy Rights', icon: Scale },
    { id: 'children', title: 'Children\'s Privacy', icon: Baby },
    { id: 'authority', title: 'Supervisory Authority', icon: Landmark },
    { id: 'updates', title: 'Policy Updates', icon: RefreshCw },
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

  // Function to manage cookie preferences
  const manageCookiePreferences = () => {
    // Clear consent to force banner to show
    localStorage.removeItem('trees-plywood-cookie-consent');
    localStorage.removeItem('trees-plywood-cookie-consent-timestamp');
    window.location.reload();
  };

 const privacyStats = [
  { value: '256', suffix: '-bit', label: 'Secure Website (SSL Protected)' },
  { value: '24/7', isStatic: true, label: 'Security Checks' },
  { value: '100', suffix: '%', label: 'GDPR-Ready' },
];


  const dataTypes = [
    {
      icon: UserCheck,
      title: 'Details You Share With Us',
      description: 'Information you provide when requesting a quote, samples, or contacting us—such as your name, email, phone number, business name, and address.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'How You Use Our Website',
      description: 'We receive basic browsing details like IP address, browser type, pages viewed, and time spent to help us improve the site.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Communication Records',
      description: 'We keep records of messages, calls, forms, and support requests so we can respond and assist you better.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Technical Information',
      description: 'We may collect device details, cookies, log data, and analytics to keep the website running smoothly.',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const userRights = [
    { icon: Download, title: 'See Your Information', description: 'You can request a copy of the details we have about you.' },
    { icon: FileCheck, title: 'Fix Something', description: 'If any of your information is incorrect or outdated, you can ask us to update it.' },
    { icon: Trash2, title: 'Remove Your Data', description: 'You can ask us to delete your information from our records.s' },
    { icon: Eye, title: 'Know How We Use It', description: 'You can ask us to explain how your information is collected and used.' },
    { icon: Lock, title: 'Limit Use', description: 'If you want us to pause or restrict how we use your data, you can request that too.' },
    { icon: RefreshCw, title: 'Move Your Data', description: 'If needed, you can ask us to share your information with another service in a safe and secure way.' },
  ];

  const securityMeasures = [
    { icon: Lock, text: 'Secure, encrypted connections on our website (SSL/TLS)' },
    { icon: Shield, text: 'Regular checks to spot and fix security issues' },
    { icon: Users, text: 'Limited access within our team on a need-to-know basis' },
    { icon: Database, text: 'Safe storage systems and protected backups' },
    { icon: Eye, text: 'Ongoing monitoring to identify any unusual activity' },
    { icon: FileCheck, text: 'Processes aligned with recognised security standards' },
  ];

  const thirdPartyServices = [
    { name: 'Google Analytics', purpose: 'Helps us understand how visitors use our website.', category: 'Analytics' },
    { name: 'Email Provider', purpose: 'Sends important emails, updates, or replies to your enquiries.', category: 'Communication' },
    { name: 'Cloud Hosting', purpose: 'Stores our website and keeps it running safely and reliably.', category: 'Infrastructure' },
    { name: 'Customer Support Tools ', purpose: 'Helps us manage enquiries, support messages, and communication.', category: 'Support' },
  ];

  const californiaRights = [
    { title: 'Right to Know', description: 'You can ask what personal information we hold about you and how we use it.' },
    { title: 'Right to Access', description: 'You can request a copy of the information you have shared with us.' },
    { title: 'Right to Update or Correct', description: ' If any details we have are incorrect or outdated, you can ask us to correct them.' },
    { title: 'Right to Delete', description: ' You can request deletion of your personal information, unless we are required to keep it for legal or business reasons.' },
    { title: 'Right to Withdraw Consent', description: 'If you have given us permission to contact you or process certain information, you can withdraw that consent at any time.' },
    { title: 'Right to Raise Concerns', description: ' If you feel your information is being misused, you can contact us directly to resolve the issue.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Privacy & Data Protection Policy"
        subtitle="We Handle Your Data with Respect"
        description="We respect your personal information and make sure it is handled with care. Our goal is to be clear about what we collect, why we collect it, and how we keep it safe."        
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        badge="Updated On: December 2025"
        badgeIcon={Shield}
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
                Support Team
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
                onClick={() => onNavigate('terms')}
              >
                Terms & Conditions
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* Trust Stats */}
      <section className="py-12 bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
        <div className="container mx-auto px-6">
          <AnimatedStats stats={privacyStats} />
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
                  <FileText className="w-5 h-5 text-trees-primary" />
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
                className="glass-card rounded-xl p-5 border border-green-500/20 bg-green-50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900 text-sm mb-1">GDPR & CCPA Compliant</p>
                    <p className="text-xs text-green-700">We follow international data protection standards</p>
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
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-trees-secondary text-2xl md:text-3xl mb-2">Our Promise to Protect Your Information</h2>
                    <p className="text-trees-primary font-medium">Transparency you can trust</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                   At Tree’s Plywood, your privacy matters to us. We respect the personal information you share with us and work hard to keep it safe. This Privacy Policy explains, in clear and simple terms, how we collect and use your information when you visit our website or interact with our services.
                  </p>
                  <p>
                    We want you to feel confident when you choose to connect with us. That’s why we keep our processes transparent and follow the privacy standards required under Indian data protection guidelines and other global best practices.                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">A Quick Note</p>
                    <p className="text-sm">
                      By using our website, you give us permission to handle your information as described in this policy. If you’re not comfortable with any part of it, you may choose not to use our website or services.

We encourage you to take a moment to read this policy so you understand how we protect your information.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Information We Collect */}
            <motion.section 
              id="information-collect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Database}
                badge="Gathered Data"
                title="Types of Information We Receive"
                subtitle="We only collect information that helps us serve you better. Here’s what that includes:"
                align="left"
              />

              <div className="grid md:grid-cols-2 gap-6">
                {dataTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 border border-trees-primary/10 hover:border-trees-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-br ${type.color} rounded-lg shadow-md`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-trees-secondary mb-2 font-semibold">{type.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 bg-blue-50 border border-blue-200"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 mb-1">Information You Choose to Give: </p>
                    <p className="text-sm text-blue-700">
                      You share most information voluntarily when filling forms or requesting services.  Not providing certain details may limit some features.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section 
              id="how-we-use"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">What We Do with Your Information</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'To respond to you',
                    desc: 'We use your details to answer your questions, share product information, give quotations, or help you with any support you need.'
                  },
                  {
                    title: 'To make our website better',
                    desc: 'We review how visitors use our site so we can fix issues, improve pages, and create a smoother browsing experience.'
                  },
                  {
                    title: 'To stay in touch',
                    desc: 'If you choose to receive updates, we may send you product news, offers, or important announcements.'
                  },
                  {
                    title: '	To keep everything safe',
                    desc: 'We use basic security checks to prevent misuse, protect our systems, and ensure your information is handled safely.'
                  },
                  {
                    title: 'To follow the law',
                    desc: 'Sometimes we may need to share information to meet legal requirements or to protect our company’s rights.'
                  },
                  {
                    title: 'To personalise your visit',
                    desc: 'We may show you more relevant content or suggestions based on what you’re interested in.'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Sharing Information */}
            <motion.section 
              id="sharing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">How We Share Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We value your trust, and we do not sell or share your personal details for advertising or marketing. Your information is shared only when it is genuinely needed to run our services smoothly and safely.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <Users className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">	Working With Service Partners</p>
                      <p className="text-sm text-gray-600">
                        We work with trusted partners who help with website hosting, emails, and support. They only use your information to do their job and must keep it safe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <Scale className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">When the Law Requires It</p>
                      <p className="text-sm text-gray-600">
                        We may share information if we are required to by law or to protect our rights and safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <RefreshCw className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Business Changes</p>
                      <p className="text-sm text-gray-600">
                       If our business is merged or transferred, your information may move to the new company but will continue to stay protected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900 mb-1">Your Information Stays Protected: </p>
                      <p className="text-sm text-green-700">
                        Anyone who receives your information must follow strict privacy rules. We only share what is necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Third-Party Services NEW */}
            <motion.section 
              id="third-party"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={List}
                badge="We are Open"
                title="Third-Party Services We Work With"
                subtitle="To run our website smoothly and serve you better, we use a few trusted external service providers. These partners help us with technical tasks but do not use your information for their own purposes."
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <h1 className="text-gray-700 leading-relaxed mb-6">
                  Services We Use & Why
                </h1>

                <div className="space-y-4">
                  {thirdPartyServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-trees-primary/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-trees-secondary">{service.name}</h4>
                            <span className="px-2 py-0.5 bg-trees-primary/10 text-trees-primary text-xs rounded-full">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{service.purpose}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900 mb-1">How We Keep Your Data Safe</p>
                      <p className="text-sm text-blue-700">
                        All these service providers follow strict privacy and security standards. They are only allowed to use your information to provide services to us—nothing else.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section 
              id=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Lock}
                badge="Protection"
                title="Data Safe & Secure"
                subtitle="We take the safety of your personal information seriously. Our team uses several protective measures to make sure your data stays secure and isn’t misused. These include:"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                
                
                <div className="grid md:grid-cols-2 gap-4">
                  {securityMeasures.map((measure, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5 border border-trees-primary/20 rounded-lg p-4 flex items-start gap-3"
                    >
                      <measure.icon className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 font-medium">{measure.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900 mb-1">Important Note</p>
                      <p className="text-sm text-yellow-700">
                        We do our best to protect your information, but no online system can be completely risk-free. Even with strong security practices, we cannot promise absolute protection. However, we are fully committed to safeguarding your data with care and responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Breach Notification NEW */}
            <motion.section 
              id="breach"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">In Case of a Security Issue</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We work hard to keep your information safe, but if something ever happens that puts your data at risk, we will inform you quickly and honestly.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                  <h3 className="font-semibold text-orange-900 mb-3">Here’s how we handle such situations:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Quick Response: </strong> Our team will immediately investigate what happened and take steps to stop the issue.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Timely Updates: </strong> If your information is involved, we will inform you as soon as possible through email and a notice on our website.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Following the Law: </strong> We will inform any required authorities based on legal guidelines.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Fixing the Issue: </strong> We will strengthen our security systems and guide you on what you may need to do next.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Clear Communication: </strong> You will receive straightforward information about what happened and what it means for you.</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  Our goal is to keep you protected and fully informed at every step.
                </p>
              </div>
            </motion.section>

            {/* Data Retention */}
            <motion.section 
              id="retention"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">How Long We Keep Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We only keep your personal information for as long as we genuinely need it for our work or as required by law. Different types of information are kept for different time periods:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5 mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>	Customer Information:</strong> We keep it while you continue to engage with us and for 3 more years to maintain proper business records.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>	Enquiry Details:</strong> We store enquiry or contact form details for up to 2 years so we can track follow-ups and improve our service.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>	Marketing Preferences: </strong> We keep this information only until you choose to unsubscribe or ask us to remove it.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Legal or Financial Records:</strong> Some data must be stored for 7–10 years as per legal and accounting requirements.</p>
                  </div>
                </div>

                <p className="mt-4">
                  When your information is no longer needed, we safely delete it or convert it into non-identifiable data so it cannot be linked back to you.
                </p>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section 
              id="your-rights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={UserCheck}
                badge="User Controls & Rights"
                title="Your Privacy Choices"
                subtitle="You are always in control of the information you share with us. You can ask us for the following at any time:"
                align="left"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userRights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 border border-trees-primary/10 hover:border-trees-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-trees-primary to-trees-secondary rounded-lg flex items-center justify-center mb-4 shadow-md">
                      <right.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-trees-secondary font-semibold mb-2">{right.title}</h3>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Privacy Requests NEW */}
            <motion.section 
              id="privacy-requests"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 bg-blue-50/30 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Your Privacy Choices & How to Request Them</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                If you ever want to see, update, or delete the personal information we have about you, we’re here to help. You can reach out to us anytime through:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <Mail className="w-6 h-6 text-trees-primary mb-3" />
                    <h4 className="font-semibold text-trees-secondary mb-2">Email</h4>
                    <p className="text-sm text-gray-600 mb-3">Write to us at privacy@thetreesplywood.com with your request.</p>
                    <a href="mailto:privacy@thetreesplywood.com" className="text-trees-primary hover:underline text-sm font-medium">
                      privacy@thetreesplywood.com
                    </a>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <FileText className="w-6 h-6 text-trees-primary mb-3" />
                    <h4 className="font-semibold text-trees-secondary mb-2">Contact Form</h4>
                    <p className="text-sm text-gray-600 mb-3">You can also submit your request through our website’s contact form.</p>
                    <MagneticButton strength={0.15}>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                        onClick={() => onNavigate('contact')}
                      >
                        Contact Us
                      </ModernButton>
                    </MagneticButton>
                  </div>
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-5 mt-4">
                  <h4 className="font-semibold text-trees-secondary mb-3">What Happens Next</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>We’ll get back to you within 48 hours to confirm we received your request.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>We may ask for basic details to confirm it’s really you, just to keep your data safe.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Most requests are completed within 30 days. If it takes a little longer (for complex cases), we’ll let you know.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>There is no fee for making a privacy request unless it is unreasonable or repeated many times.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section 
              id="cookies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Cookies and How We Use Them</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                 Our website uses cookies and similar tools to make your browsing experience smoother and more useful. Cookies are small files saved on your device when you visit our site. They help us remember your preferences and understand how people use our website.
                </p>
                <h1 className="text-trees-secondary text-2xl md:text-3xl">Types of Cookies We Use</h1>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="font-medium text-purple-900 mb-1 text-sm">Essential Cookies</p>
                    <p className="text-xs text-purple-700">These are necessary for the website to work properly. Without them, some features won’t function.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-medium text-blue-900 mb-1 text-sm">Analytics Cookies</p>
                    <p className="text-xs text-blue-700">These help us learn how visitors use our site so we can improve our pages and content.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-medium text-green-900 mb-1 text-sm">Marketing Cookies</p>
                    <p className="text-xs text-green-700">These help show you relevant ads or information based on your interests.</p>
                  </div>
                </div>

                <p className="font-medium  mb-1 text-sm">Your Choice</p>
                    <p className="text-xs ">
You can manage or block cookies anytime through your browser settings. If you turn some of them off, certain parts of the website may not work as expected.
</p>

                <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5 mt-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <Settings className="w-6 h-6 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-trees-secondary mb-1">Cookie Preferences</p>
                        <p className="text-sm text-gray-600">
                          You can choose which cookies you want to allow. Click below to review or update your preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                  <MagneticButton strength={0.15}>
                    <ModernButton
                      variant="primary"
                      size="md"
                      icon={<Settings className="w-4 h-4" />}
                      onClick={manageCookiePreferences}
                    >
                      Manage Cookie Preferences
                    </ModernButton>
                  </MagneticButton>
                </div>
              </div>
            </motion.section>

            {/* International Transfers */}
            <motion.section 
              id="international"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">How We Handle Your Data if You Are Outside India</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you are visiting our website from outside India, please know that your information will be stored and processed on our servers in India.
                </p>
                <p>
                  By submitting your details on our website, you agree that we can receive and handle your information in India.
                </p>
                <p>
                  	We take reasonable steps to keep your data safe and make sure it is handled responsibly and in line with the privacy rules that apply to us.
                </p>
              </div>
            </motion.section>

            {/* CCPA Section NEW */}
            <motion.section 
              id="ccpa"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Scale}
                badge=" Privacy Rights"
                title="Your Privacy Rights (India)"
                subtitle="As an Indian resident, you have certain rights over your personal information. We respect these rights and make it easy for you to use them."
                align="left"
              />

             
                

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {californiaRights.map((right, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-trees-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-trees-secondary mb-1 text-sm">{right.title}</h4>
                          <p className="text-xs text-gray-600">{right.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-6">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    We Do Not Sell Your Information
                  </h4>
                  <p className="text-sm text-red-800 mb-3">
                    We do not sell, trade, or rent your personal information to anyone. We may work with trusted service providers (for hosting, analytics, communication tools, etc.), and they only use the information to support our services. They are not allowed to use it for anything else.
                  </p>
                  
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-semibold text-blue-900 mb-3">How to Use Your Rights</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    To request access, updates, corrections, or deletion of your information, you can contact us through the details provided in the “Contact Us” or “Privacy Requests” section. We may ask you for basic details to confirm your identity before processing your request. We aim to respond within a reasonable time frame, usually within 30 days.
                  </p>
                  
                </div>
              </div>
            </motion.section>

            {/* Children's Privacy */}
            <motion.section 
              id="children"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 bg-orange-50/30 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Children's Privacy</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our website and services are meant for adults. We do not knowingly collect any personal details from anyone under 18 years of age. If you are a parent or guardian and feel that a child has shared their information with us by mistake, please reach out to us right away.
                </p>
                <p>
                 If we find that we have received information from someone under 18, we will delete it as soon as possible.
                </p>
              </div>
            </motion.section>

            {/* Supervisory Authority NEW */}
            <motion.section 
              id="authority"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Right to Raise a Concerns</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you feel that your privacy or data protection rights have been affected, you can raise a concern with the appropriate authority. We always encourage you to contact us first so we can try to resolve the issue quickly and fairly.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mt-4">
                  <h4 className="font-semibold text-trees-secondary mb-3">Relevant Supervisory Authorities:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">For Individuals in India</p>
                        <p className="text-gray-600">
                          Ministry of Electronics & Information Technology (MeitY)<br />
                          Indian Computer Emergency Response Team (CERT-In)<br />
                          Website: <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer" className="text-trees-primary hover:underline">www.cert-in.org.in</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">For Individuals in the European Union</p>
                        <p className="text-gray-600">
                          You may reach out to your local Data Protection Authority (DPA) based on your country of residence.<br />
                          Find your DPA: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-trees-primary hover:underline">EDPB Members</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">For California Residents (CCPA):</p>
                        <p className="text-gray-600">
                          California Attorney General's Office<br />
                          Website: <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-trees-primary hover:underline">oag.ca.gov/privacy/ccpa</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900 mb-1">Please Contact Us First</p>
                      <p className="text-sm text-blue-700">
                        We’re here to help. If you have any worries about your data or how it is being used, please get in touch with us at privacy@thetreesplywood.com. We will make every effort to understand your concern and resolve it as quickly as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Policy Updates */}
            <motion.section 
              id="updates"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-8 h-8 text-trees-primary" />
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Policy Changes</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                 We may update this Privacy Policy whenever needed—such as when our services, legal requirements, or internal processes change. If we make any important updates, we will let you know by:
                </p>
                
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Posting the revised policy on this page with a new “Last Updated” date</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Showing a clear notice on our website</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Emailing you, if you are a registered user and the changes are significant</p>
                  </div>
                </div>

                <p className="mt-4">
                  We recommend checking this page from time to time so you know how we continue to protect your information. By using our website after the policy is updated, you agree to the revised terms.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Version:</strong> 2.0 | <strong>Last Updated:</strong> December 2025 | <strong>Effective Date:</strong> December 2025
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
                  <h2 className="text-trees-secondary text-2xl md:text-3xl mb-3">Have Questions About Your Privacy?</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    If you need any help or have questions about how we handle your information, feel free to reach out. Our team is always here to support you.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-4 border border-trees-primary/20">
                    <Mail className="w-6 h-6 text-trees-primary mx-auto mb-2" />
                    <p className="font-medium text-trees-secondary text-sm mb-1">Email</p>
                    <p className="text-xs text-gray-600">privacy@thetreesplywood.com</p>
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
                      Contact Privacy Team
                    </ModernButton>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <ModernButton
                      variant="outline"
                      size="lg"
                      icon={<FileText className="w-5 h-5" />}
                      onClick={() => onNavigate('terms')}
                    >
                      View Terms of Service
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
              <span>Our Services</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl mb-6">
              We Respect Your Privacy
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Want to know more about our products or need assistance?
 Reach out anytime - we’re happy to support you.

            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<ArrowRight className="w-6 h-6" />}
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
                  Get in Touch
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
