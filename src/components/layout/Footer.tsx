import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Send, ArrowRight, Award, Leaf, Shield, CheckCircle2, FileText, HelpCircle } from 'lucide-react';
import { Input } from '../ui/input';
import { ModernButton } from '../design-system/ModernButton';
import { MagneticButton } from '../design-system/MagneticButton';
import { XIcon } from '../icons/XIcon';
import logoImage from '../../assets/logo.png';


interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com', label: 'X' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="w-full mt-24 relative">
      {/* Main Footer */}
      <div className="bg-gradient-to-b from-trees-secondary via-trees-secondary to-[#2a1508] pt-20">
        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[120px]">
          
          {/* Top Section - Newsletter & Brand */}
          <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
            {/* Brand Section */}
            <div>
              <img 
                src={logoImage} 
                alt="The Trees Plywood" 
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                Premium quality plywood crafted with precision. Building sustainable futures since 2000.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <Award className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">ISO Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <Leaf className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">FSC Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">BIS Approved</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full transition-all duration-300 hover:scale-110 hover:border-white/30"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:pl-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white text-2xl">Stay in the Loop</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Get exclusive updates, product launches, and expert insights delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:bg-white/15 focus:border-white/40"
                  />
                  <MagneticButton strength={0.15}>
                    <ModernButton 
                      type="submit" 
                      variant="light"
                      size="xl"
                      className="w-full"
                      icon={subscribed ? <CheckCircle2 className="w-6 h-6" /> : <Send className="w-6 h-6" />}
                    >
                      {subscribed ? 'Successfully Subscribed!' : 'Subscribe Now'}
                    </ModernButton>
                  </MagneticButton>
                </form>
              </div>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16 border-b border-white/10">
            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Products
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'All Products', page: 'products' },
                  { label: 'Plywood', page: 'products' },
                  { label: 'Block Boards', page: 'products' },
                  { label: 'Flush Doors', page: 'products' },
                  { label: 'Compare Products', page: 'comparison' },
                ].map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onNavigate?.(item.page)} 
                      className="text-white/60 hover:text-white transition-colors text-sm group flex items-center gap-2"
                    >
                      <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Resource Hub', page: 'resources' },
                  { label: 'Projects Gallery', page: 'projects' },
                  { label: 'Blog & News', page: 'blogs' },
                  { label: 'Calculator', page: 'calculator' },
                  { label: 'Downloads', page: 'downloads' },
                  { label: 'Installation Guide', page: 'installation' },
                ].map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onNavigate?.(item.page)} 
                      className="text-white/60 hover:text-white transition-colors text-sm group flex items-center gap-2"
                    >
                      <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', page: 'about' },
                  { label: 'Contact Us', page: 'contact' },
                  { label: 'Find Dealers', page: 'dealers' },
                  { label: 'FAQ', page: 'faq' },
                  { label: 'Request Sample', page: 'sample-request' },
                  { label: 'For Professionals', page: 'professionals' },
                  { label: 'Quality', page: 'quality' },
                  { label: 'Warranty', page: 'warranty' },
                  { label: 'Sustainability', page: 'sustainability' },
                ].map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onNavigate?.(item.page)} 
                      className="text-white/60 hover:text-white transition-colors text-sm group flex items-center gap-2"
                    >
                      <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
              <div className="space-y-4">
                {/* Phone Card */}
                <a 
                  href="tel:+919091744744" 
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium mb-1">+91 9091744744</div>
                      <div className="text-xs text-white/50">Mon-Sat, 9AM-6PM IST</div>
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:sales@thetreesplywood.com" 
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium mb-1">sales@thetreesplywood.com</div>
                      <div className="text-xs text-white/50">For sales enquiries</div>
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium mb-1">Our Location</div>
                      <div className="text-xs text-white/50 leading-relaxed">
                        Plot 3-538, 1st floor<br />
                        Sri Krishna Heights, Madhapur<br />
                        Hyderabad 500018, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="py-8 border-b border-white/10">
            <div className="text-center mb-6">
              <h4 className="text-white/70 text-xs uppercase tracking-wider mb-2">Trusted & Certified</h4>
              <p className="text-white/40 text-xs">Committed to quality and sustainability standards</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium mb-1">ISO 9001:2015</div>
                <div className="text-xs text-white/50">Quality Management</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium mb-1">FSC Certified</div>
                <div className="text-xs text-white/50">Sustainable Sourcing</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium mb-1">BIS Approved</div>
                <div className="text-xs text-white/50">Bureau Standards</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium mb-1">E0 Grade</div>
                <div className="text-xs text-white/50">Low Emission</div>
              </div>
            </div>
          </div>

          {/* Quick CTA Banner */}
          <div className="py-8 border-b border-white/10">
            <div className="bg-gradient-to-r from-trees-primary/20 via-trees-primary/10 to-transparent border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-xl mb-2">Ready to Start Your Project?</h3>
                  <p className="text-white/70 text-sm">Get expert advice and premium quality plywood delivered to your doorstep</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <MagneticButton strength={0.15}>
                    <ModernButton
                      variant="light"
                      size="lg"
                      onClick={() => onNavigate?.('contact')}
                    >
                      Contact Us
                    </ModernButton>
                  </MagneticButton>
                  <MagneticButton strength={0.15}>
                    <ModernButton
                      variant="outline"
                      size="lg"
                      onClick={() => onNavigate?.('sample-request')}
                      className="border-white text-white hover:bg-white/10"
                    >
                      Request Sample
                    </ModernButton>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white/50 text-sm text-center md:text-left">
                © 2025 The Trees Plywood. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button 
                  onClick={() => onNavigate?.('privacy')} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <span className="text-white/20">•</span>
                <button 
                  onClick={() => onNavigate?.('terms')} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <span className="text-white/20">•</span>
                <button 
                  onClick={() => onNavigate?.('warranty')} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Warranty Policy
                </button>
                <span className="text-white/20">•</span>
                <button 
                  onClick={() => onNavigate?.('faq')} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
