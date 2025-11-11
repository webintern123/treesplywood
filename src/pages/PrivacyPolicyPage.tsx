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
    { value: '256-bit', label: 'SSL Encryption' },
    { value: '24/7', label: 'Security Monitoring' },
    { value: '100%', label: 'GDPR Compliant' },
  ];

  const dataTypes = [
    {
      icon: UserCheck,
      title: 'Personal Information',
      description: 'Name, email, phone number, company name, and address provided when requesting quotes or samples.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Usage Information',
      description: 'Browser type, IP address, pages visited, time spent, and diagnostic data for website improvement.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Communication Data',
      description: 'Records of correspondence, support tickets, feedback, and interactions with our team.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Technical Data',
      description: 'Device information, cookies, log files, and analytics data for service optimization.',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const userRights = [
    { icon: Download, title: 'Access', description: 'Request a copy of your personal data we hold' },
    { icon: FileCheck, title: 'Correction', description: 'Update inaccurate or incomplete information' },
    { icon: Trash2, title: 'Deletion', description: 'Request removal of your personal data' },
    { icon: Eye, title: 'Transparency', description: 'Understand how your data is being used' },
    { icon: Lock, title: 'Restriction', description: 'Limit how we process your information' },
    { icon: RefreshCw, title: 'Portability', description: 'Transfer your data to another service' },
  ];

  const securityMeasures = [
    { icon: Lock, text: 'Industry-standard SSL/TLS encryption' },
    { icon: Shield, text: 'Regular security audits and penetration testing' },
    { icon: Users, text: 'Strict access controls and authentication' },
    { icon: Database, text: 'Encrypted data storage and backups' },
    { icon: Eye, text: 'Continuous monitoring and threat detection' },
    { icon: FileCheck, text: 'Compliance with international standards' },
  ];

  const thirdPartyServices = [
    { name: 'Google Analytics', purpose: 'Website analytics and user behavior tracking', category: 'Analytics' },
    { name: 'Email Service Provider', purpose: 'Transactional emails and newsletters', category: 'Communication' },
    { name: 'Cloud Hosting', purpose: 'Website hosting and data storage', category: 'Infrastructure' },
    { name: 'Customer Support', purpose: 'Support ticket management and live chat', category: 'Support' },
  ];

  const californiaRights = [
    { title: 'Right to Know', description: 'Know what personal information is collected, used, shared, or sold' },
    { title: 'Right to Delete', description: 'Request deletion of your personal information' },
    { title: 'Right to Opt-Out', description: 'Opt-out of the sale of your personal information' },
    { title: 'Right to Non-Discrimination', description: 'Not be discriminated against for exercising your rights' },
    { title: 'Right to Correct', description: 'Request correction of inaccurate personal information' },
    { title: 'Right to Limit', description: 'Limit the use and disclosure of sensitive personal information' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Privacy Policy"
        subtitle="Your Data, Your Rights"
        description="We're committed to protecting your privacy and being transparent about how we collect, use, and safeguard your information. Your trust is our top priority."
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
                icon={<Mail className="w-5 h-5" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Privacy Team
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
                onClick={() => onNavigate('terms')}
              >
                Terms of Service
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
                    <h2 className="text-trees-secondary text-2xl md:text-3xl mb-2">Our Commitment to Your Privacy</h2>
                    <p className="text-trees-primary font-medium">Building trust through transparency</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At The Trees Plywood, we are deeply committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains in detail how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                  </p>
                  <p>
                    We believe in complete transparency about our data practices. This policy has been designed to be easily understood and provides comprehensive information about your rights and our responsibilities under applicable data protection laws, including GDPR, CCPA, and Indian data protection regulations.
                  </p>
                  <div className="bg-trees-primary/5 border-l-4 border-trees-primary rounded-r-lg p-4 mt-6">
                    <p className="font-medium text-trees-secondary mb-2">Important Notice</p>
                    <p className="text-sm">
                      By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services. We encourage you to read this policy carefully.
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
                badge="Data Collection"
                title="Information We Collect"
                subtitle="Understanding what data we gather and why it matters"
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
                    <p className="font-medium text-blue-900 mb-1">Voluntary Information</p>
                    <p className="text-sm text-blue-700">
                      Most information we collect is provided voluntarily by you when you fill out forms, request samples, contact us, or subscribe to our newsletter. You can choose not to provide certain information, but this may limit your ability to use some features of our services.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'To provide and maintain our services',
                    desc: 'Process inquiries, deliver product information, send samples, provide quotes, and offer customer support tailored to your needs.'
                  },
                  {
                    title: 'To improve our website and services',
                    desc: 'Analyze usage patterns, gather feedback, conduct research, and optimize user experience across all touchpoints.'
                  },
                  {
                    title: 'To communicate with you',
                    desc: 'Send newsletters, product updates, promotional materials, and important notifications (with your explicit consent).'
                  },
                  {
                    title: 'To ensure security and prevent fraud',
                    desc: 'Monitor for suspicious activity, verify identities, protect against unauthorized access, and maintain system integrity.'
                  },
                  {
                    title: 'To comply with legal obligations',
                    desc: 'Respond to legal requests, enforce our terms, protect our rights, and comply with applicable laws and regulations.'
                  },
                  {
                    title: 'To personalize your experience',
                    desc: 'Provide relevant content, product recommendations, and customized solutions based on your preferences and history.'
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Sharing Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We respect your privacy and do not sell, trade, or rent your personal information to third parties for marketing purposes. We may share your information only in the following limited circumstances:
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <Users className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Service Providers</p>
                      <p className="text-sm text-gray-600">
                        Trusted third-party vendors who assist with website hosting, email delivery, analytics, payment processing, and customer support. These providers are contractually bound to protect your data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <Scale className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Legal Requirements</p>
                      <p className="text-sm text-gray-600">
                        When required by law, court order, or government regulation, or when necessary to protect our rights, property, or safety, or that of others.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <RefreshCw className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Business Transfers</p>
                      <p className="text-sm text-gray-600">
                        In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900 mb-1">Your Data is Protected</p>
                      <p className="text-sm text-green-700">
                        All third parties we work with are required to maintain appropriate security measures and use your information only for the specific purposes we authorize. We do not sell your personal information.
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
                badge="Transparency"
                title="Third-Party Services We Use"
                subtitle="Complete list of external services that may process your data"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We work with select third-party service providers to deliver our services effectively. Here's a complete list of the types of services we use and their purposes:
                </p>

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
                      <p className="font-medium text-blue-900 mb-1">Data Processing Agreements</p>
                      <p className="text-sm text-blue-700">
                        All third-party service providers are bound by data processing agreements that ensure GDPR compliance and appropriate security measures for your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section 
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 scroll-mt-24"
            >
              <ModernSectionHeader
                badgeIcon={Lock}
                badge="Security"
                title="Data Protection & Security"
                subtitle="Multiple layers of protection to keep your information safe"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security infrastructure includes:
                </p>
                
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
                      <p className="font-medium text-yellow-900 mb-1">Security Disclaimer</p>
                      <p className="text-sm text-yellow-700">
                        While we implement industry-leading security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our abilities.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Data Breach Notification</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In the unlikely event of a data breach that affects your personal information, we are committed to transparency and prompt notification in accordance with applicable laws.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                  <h3 className="font-semibold text-orange-900 mb-3">Our Breach Response Protocol:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Immediate Action:</strong> Contain the breach and assess the scope within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>User Notification:</strong> Notify affected users within 72 hours via email and website notice</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Authority Reporting:</strong> Report to relevant supervisory authorities as required by law</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Remediation:</strong> Implement additional security measures and provide guidance to affected users</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm"><strong>Transparency:</strong> Provide clear information about what data was affected and recommended actions</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  Notifications will include details about the nature of the breach, types of information affected, steps we've taken to address the breach, and recommendations for protecting yourself from potential harm.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Data Retention</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5 mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Active Customer Data:</strong> Retained while you maintain an active relationship with us and for 3 years thereafter for business records.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Inquiry Data:</strong> Stored for 2 years to track customer interactions and improve services.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-trees-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Legal & Financial Records:</strong> Maintained as required by applicable laws (typically 7-10 years).</p>
                  </div>
                </div>

                <p className="mt-4">
                  When your data is no longer needed, we securely delete or anonymize it in accordance with our data retention schedule and applicable legal requirements.
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
                badge="Your Rights"
                title="Privacy Rights & Controls"
                subtitle="You have full control over your personal information"
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">How to Exercise Your Privacy Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We make it easy for you to exercise your privacy rights. To submit a Data Subject Access Request (DSAR) or exercise any of your privacy rights, you can:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <Mail className="w-6 h-6 text-trees-primary mb-3" />
                    <h4 className="font-semibold text-trees-secondary mb-2">Email Us</h4>
                    <p className="text-sm text-gray-600 mb-3">Send your request to our dedicated privacy team</p>
                    <a href="mailto:privacy@thetreesplywood.com" className="text-trees-primary hover:underline text-sm font-medium">
                      privacy@thetreesplywood.com
                    </a>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <FileText className="w-6 h-6 text-trees-primary mb-3" />
                    <h4 className="font-semibold text-trees-secondary mb-2">Contact Form</h4>
                    <p className="text-sm text-gray-600 mb-3">Use our contact form to submit your request</p>
                    <MagneticButton strength={0.15}>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                        onClick={() => onNavigate('contact')}
                      >
                        Go to Contact
                      </ModernButton>
                    </MagneticButton>
                  </div>
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-5 mt-4">
                  <h4 className="font-semibold text-trees-secondary mb-3">Request Processing Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Acknowledgment:</strong> We'll confirm receipt within 48 hours</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Identity Verification:</strong> We may request additional information to verify your identity</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Response:</strong> We'll fulfill your request within 30 days (may be extended to 60 days for complex requests)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p><strong>No Cost:</strong> Privacy requests are processed free of charge unless manifestly unfounded or excessive</p>
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, understand user preferences, and deliver personalized content. Cookies are small text files stored on your device when you visit our website.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="font-medium text-purple-900 mb-1 text-sm">Essential Cookies</p>
                    <p className="text-xs text-purple-700">Required for website functionality and cannot be disabled</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-medium text-blue-900 mb-1 text-sm">Analytics Cookies</p>
                    <p className="text-xs text-blue-700">Help us understand how visitors interact with our website</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-medium text-green-900 mb-1 text-sm">Marketing Cookies</p>
                    <p className="text-xs text-green-700">Track visitors across websites to display relevant ads</p>
                  </div>
                </div>

                <p className="mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of our website. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when new cookies are placed.
                </p>

                <div className="bg-trees-primary/5 border border-trees-primary/20 rounded-lg p-5 mt-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <Settings className="w-6 h-6 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-trees-secondary mb-1">Manage Your Cookie Preferences</p>
                        <p className="text-sm text-gray-600">
                          You can customize which cookies you accept or decline at any time. Click the button to open your cookie preferences.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">International Data Transfers</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Your information may be transferred to, and maintained on, servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction.
                </p>
                <p>
                  If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal information, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
                <p>
                  We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and applicable data protection laws, including GDPR where applicable. Standard Contractual Clauses (SCCs) are used for international data transfers where required.
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
                badge="California Privacy Rights"
                title="CCPA Compliance"
                subtitle="Your rights under the California Consumer Privacy Act"
                align="left"
              />

              <div className="glass-card rounded-2xl p-8 md:p-10 border border-trees-primary/20">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information. Here are your California privacy rights:
                </p>

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
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 mb-6">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Do Not Sell My Personal Information
                  </h4>
                  <p className="text-sm text-red-800 mb-3">
                    We do not sell your personal information to third parties. We do not and will not sell your personal information for monetary or other valuable consideration.
                  </p>
                  <p className="text-sm text-red-800">
                    However, we may share certain information with third-party service providers as described in the "Sharing Your Information" section above. These disclosures do not constitute "sales" under CCPA.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-semibold text-blue-900 mb-3">Exercising Your CCPA Rights</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    To exercise any of your CCPA rights, please contact us using the methods outlined in the "Privacy Requests" section. We will not discriminate against you for exercising your CCPA rights.
                  </p>
                  <p className="text-sm text-blue-700">
                    We may need to verify your identity before processing your request. We will respond to verified requests within 45 days, with a possible 45-day extension if necessary.
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
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                </p>
                <p>
                  If we become aware that we have collected personal information from children under 18 without verification of parental consent, we will take steps to remove that information from our servers promptly.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Right to Lodge a Complaint</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you believe that your data protection rights have been violated, you have the right to lodge a complaint with the relevant supervisory authority. While we encourage you to contact us first to resolve any concerns, you have the right to contact the appropriate data protection authority.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mt-4">
                  <h4 className="font-semibold text-trees-secondary mb-3">Relevant Supervisory Authorities:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Landmark className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">For Indian Residents:</p>
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
                        <p className="font-medium text-gray-900 mb-1">For EU Residents (GDPR):</p>
                        <p className="text-gray-600">
                          You may contact your local Data Protection Authority<br />
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
                      <p className="font-medium text-blue-900 mb-1">Contact Us First</p>
                      <p className="text-sm text-blue-700">
                        We're committed to resolving any privacy concerns quickly and fairly. Please reach out to us at privacy@thetreesplywood.com before filing a formal complaint, and we'll do our best to address your issue.
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
                <h2 className="text-trees-secondary text-2xl md:text-3xl">Policy Updates</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other operational needs. We will notify you of any material changes by:
                </p>
                
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Posting the new policy on this page with an updated "Last Updated" date</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Sending an email notification to registered users (for significant changes)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trees-primary flex-shrink-0 mt-0.5" />
                    <p>Displaying a prominent notice on our website</p>
                  </div>
                </div>

                <p className="mt-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes to this policy will constitute your acceptance of such changes.
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-trees-secondary text-2xl md:text-3xl mb-3">Questions About Privacy?</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, our privacy team is here to help.
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
              <span>Your Privacy Matters</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl mb-6">
              Ready to Experience Our Services?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Trust, transparency, and quality craftsmanship—discover why thousands choose The Trees Plywood
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
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
