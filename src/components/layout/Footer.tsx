import { useState } from 'react';
import {
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Send,
  ArrowRight, Award, Leaf, Shield, CheckCircle2, FileText, HelpCircle
} from 'lucide-react';
import { Input } from '../ui/input';
import { ModernButton } from '../design-system/ModernButton';
import { MagneticButton } from '../design-system/MagneticButton';
import { XIcon } from '../icons/XIcon';
import logoImage from '@/assets/logo.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="bg-gradient-to-b from-trees-secondary via-trees-secondary to-[#2a1508] pt-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[120px]">

          {/* Top Section: Brand + Newsletter */}
          <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">

            {/* Brand */}
            <div>
              <img src={logoImage} alt="The Trees Plywood" className="h-16 w-auto mb-6 brightness-0 invert" />
              <p className="text-white/80 text-base font-normal mb-8 max-w-md leading-relaxed">
                Strong, sustainable, and crafted with care — building better spaces for over 25 years.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Award, label: 'IS:10701 Certified' },
                  { icon: Leaf, label: 'ISI Marked Products' },
                  { icon: Shield, label: 'BWP Grade Options Available' }
                ].map((badge, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                    <badge.icon className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm font-normal">Follow us:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-white/30"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:pl-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Stay in the Loop</h3>
                </div>
                <p className="text-white/70 text-sm mb-6 font-normal">
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
                      className="w-full text-base font-medium"
                      icon={subscribed ? <CheckCircle2 className="w-6 h-6" /> : <Send className="w-6 h-6" />}
                    >
                      {subscribed ? 'Successfully Subscribed!' : 'Subscribe Now'}
                    </ModernButton>
                  </MagneticButton>
                </form>
              </div>
            </div>

          </div>

          {/* Middle Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16 border-b border-white/10">

            {/* Products / Resources / Support */}
            {[
              {
                title: 'Products',
                icon: FileText,
                items: [
                  { label: 'All Products', page: 'products' },
                  { label: 'Plywood', page: 'products' },
                  { label: 'Block Boards', page: 'products' },
                  { label: 'Flush Doors', page: 'products' },
                  { label: 'Compare Products', page: 'comparison' }
                ]
              },
              {
                title: 'Resources',
                icon: HelpCircle,
                items: [
                  { label: 'Resource Hub', page: 'resources' },
                  { label: 'Projects Gallery', page: 'projects' },
                  { label: 'Blog & News', page: 'blogs' },
                  { label: 'Calculator', page: 'calculator' },
                  { label: 'Downloads', page: 'downloads' },
                  { label: 'Installation Guide', page: 'installation' }
                ]
              },
              {
                title: 'Support',
                icon: Shield,
                items: [
                  { label: 'About Us', page: 'about' },
                  { label: 'Contact Us', page: 'contact' },
                  { label: 'Find Dealers', page: 'dealers' },
                  { label: 'FAQ', page: 'faq' },
                  { label: 'Request Sample', page: 'sample-request' },
                  { label: 'For Professionals', page: 'professionals' },
                  { label: 'Quality', page: 'quality' },
                  { label: 'Warranty', page: 'warranty' },
                  { label: 'Sustainability', page: 'sustainability' }
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <section.icon className="w-4 h-4" /> {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <button
                        onClick={() => onNavigate?.(item.page)}
                        className="text-white/60 hover:text-white text-sm font-normal group flex items-center gap-2 transition-colors"
                      >
                        <ArrowRight className="w-0 group-hover:w-4 transition-all duration-300" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="col-span-2">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a href="tel:+919091744744" className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium mb-1">+91 9091744744</div>
                    <div className="text-xs text-white/50">Mon-Sat, 9AM-6PM IST</div>
                  </div>
                </a>
                <a href="mailto:sales@thetreesplywood.com" className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium mb-1">sales@thetreesplywood.com</div>
                    <div className="text-xs text-white/50">For sales enquiries</div>
                  </div>
                </a>
                <div className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
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

          {/* Certifications Section */}
          <div className="py-8 border-b border-white/10">
            <div className="text-center mb-6">
              <h4 className="text-white/70 text-xs uppercase tracking-wider mb-2">Trusted & Certified</h4>
              <p className="text-white/40 text-xs font-normal">Committed to quality and sustainability standards</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Award, title: 'ISO 9001:2015', subtitle: 'Quality Management', from: 'blue-500', to: 'blue-600' },
                { icon: Leaf, title: 'FSC Certified', subtitle: 'Sustainable Sourcing', from: 'green-500', to: 'green-600' },
                { icon: Shield, title: 'BIS Approved', subtitle: 'Bureau Standards', from: 'orange-500', to: 'orange-600' },
                { icon: CheckCircle2, title: 'E0 Grade', subtitle: 'Low Emission', from: 'emerald-500', to: 'emerald-600' }
              ].map((cert, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-${cert.from} to-${cert.to} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white text-sm font-medium mb-1">{cert.title}</div>
                  <div className="text-xs text-white/50">{cert.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="py-8 border-b border-white/10">
            <div className="bg-gradient-to-r from-trees-primary/20 via-trees-primary/10 to-transparent border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Ready to Start Your Project?</h3>
                <p className="text-white/70 text-sm font-normal">Get expert advice and premium quality plywood delivered to your doorstep</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton strength={0.15}>
                  <ModernButton variant="light" size="lg" onClick={() => onNavigate?.('contact')}>Contact Us</ModernButton>
                </MagneticButton>
                <MagneticButton strength={0.15}>
                  <ModernButton variant="outline" size="lg" onClick={() => onNavigate?.('sample-request')} className="border-white text-white hover:bg-white/10">Request Sample</ModernButton>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-normal text-white/50">
            <div>© {new Date().getFullYear()} The Trees Plywood. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Warranty Policy', 'FAQ'].map((item, i) => (
                <button key={i} onClick={() => onNavigate?.(item.toLowerCase().split(' ')[0])} className="hover:text-white transition-colors">{item}</button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
