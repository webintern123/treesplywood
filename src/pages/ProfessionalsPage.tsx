import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GridContainer } from '../components/layout/GridContainer';
import { AdvancedCard } from '../components/design-system/AdvancedCard';
import { Briefcase, Download, FileText, Users, Award, TrendingUp, Calculator, Mail, Phone, User, Package, Calendar } from 'lucide-react';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { ModernButton } from '../components/design-system/ModernButton';
import { motion } from 'motion/react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';



const professionalBenefits = [
  {
    icon: Download,
    title: 'Technical Resources',
    description: 'Access CAD drawings, BIM files, and detailed specifications for project planning',
    features: ['DWG/DXF files', '3D models', 'Material specs', 'Installation guides']
  },
  {
    icon: Calculator,
    title: 'Project Estimation Tools',
    description: 'Advanced calculators and cost estimation tools for accurate project bidding',
    features: ['Material calculator', 'Cost estimator', 'Wastage calculator', 'Budget planner']
  },
  {
    icon: Award,
    title: 'Priority Support',
    description: 'Dedicated account manager and technical support for your projects',
    features: ['24/7 support', 'Technical consultation', 'Site visits', 'Custom solutions']
  },
  {
    icon: TrendingUp,
    title: 'Bulk Pricing',
    description: 'Special pricing for architects, contractors, and builders on bulk orders',
    features: ['Volume discounts', 'Credit facilities', 'Flexible payment', 'Direct sourcing']
  },
  {
    icon: FileText,
    title: 'Project Documentation',
    description: 'Complete documentation support for compliance and certification needs',
    features: ['Test certificates', 'Warranty docs', 'Compliance reports', 'Material traceability']
  },
  {
    icon: Users,
    title: 'Collaboration Platform',
    description: 'Connect with other professionals and share project experiences',
    features: ['Network events', 'Case studies', 'Best practices', 'Industry insights']
  }
];

const resources = [
  { title: 'Product Catalog 2025', size: '12.5 MB', type: 'PDF', category: 'Catalog', url: 'public/files/PLYWOOD_CATALOGUE.pdf' },
  { title: 'CAD Drawings Library', size: '45 MB', type: 'PDF', category: 'Technical', url: 'public/files/PLYWOOD_CATALOGUE.pdf' },
  { title: 'BIM Objects Collection', size: '120 MB', type: 'PDF', category: 'Technical', url: 'public/files/PLYWOOD_CATALOGUE.pdf' },
  { title: 'Specification Writing Guide', size: '3.2 MB', type: 'PDF', category: 'Guide', url: 'public/files/PLYWOOD_CATALOGUE.pdf' },
  { title: 'Installation Manual', size: '8.5 MB', type: 'PDF', category: 'Guide', url: 'public/files/PLYWOOD_CATALOGUE.pdf' },
  { title: 'Test Certificates', size: '2.1 MB', type: 'PDF', category: 'Certification', url: 'public/files/PLYWOOD_CATALOGUE.pdf' }
];


interface ProfessionalsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProfessionalsPage({ onNavigate }: ProfessionalsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    profession: 'architect',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    console.log('Professional Inquiry:', formData);
    toast.success('Thank you! Our team will contact you within 24 hours.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      profession: 'architect',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="For Architects & Professionals"
        subtitle="Comprehensive resources, technical support, and exclusive benefits for design and construction professionals"
        image="https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjM2MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="Professional Resources"
      />

      {/* Benefits Grid */}
      <GridContainer className="py-20">
        <div className="col-span-12 mb-12 text-center">
          <h2 className="text-3xl text-[#432011] mb-4">Exclusive Professional Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to specify, design, and execute projects with confidence
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {professionalBenefits.map((benefit, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <AdvancedCard variant="glass" hoverEffect="3d" className="h-full p-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A0522C] to-[#432011] flex items-center justify-center mb-4">
          <benefit.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl mb-3 text-[#432011]">{benefit.title}</h3>
        <p className="text-gray-600 mb-4">{benefit.description}</p>
        <ul className="space-y-2">
          {benefit.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A0522C]" />
              {feature}
            </li>
          ))}
        </ul>
      </AdvancedCard>
    </motion.div>
  ))}
</div>

      </GridContainer>

      {/* Technical Resources */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <GridContainer>
          <div className="col-span-12 mb-12 text-center">
            <h2 className="text-3xl text-[#432011] mb-4">Download Technical Resources</h2>
            <p className="text-gray-600">Essential files and documentation for your projects</p>
          </div>

          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {resources.map((resource, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <AdvancedCard variant="glass" className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A0522C] to-[#432011] flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="mb-1 text-[#432011]">{resource.title}</h4>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <span className="px-2 py-0.5 bg-gray-100 rounded">{resource.type}</span>
            <span>{resource.size}</span>
            <span>•</span>
            <span>{resource.category}</span>
          </div>
          <a
  href={resource.url}
  download
  className="text-sm text-[#A0522C] hover:underline flex items-center gap-1"
>
  <Download className="w-4 h-4" />
  Download
</a>

        </div>
      </AdvancedCard>
    </motion.div>
  ))}
</div>


          <div className="col-span-12 text-center mt-8">
  <button
    onClick={() => onNavigate('resources')} // or whatever route/page name you use
    className="px-8 py-3 bg-gradient-to-r from-[#A0522C] to-[#432011] text-white rounded-xl hover:shadow-lg transition-all"
  >
    View All Resources
  </button>
</div>

        </GridContainer>
      </div>

      {/* Contact Form */}
      <GridContainer className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 lg:col-start-3"
        >
          <AdvancedCard variant="glass" className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2 text-[#432011]">Register as a Professional</h2>
              <p className="text-gray-600">Get access to exclusive resources and dedicated support</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Firm Name</Label>
                  <div className="relative mt-2">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="profession">Profession *</Label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522C]"
                    required
                  >
                    <option value="architect">Architect</option>
                    <option value="interior-designer">Interior Designer</option>
                    <option value="contractor">Contractor</option>
                    <option value="builder">Builder/Developer</option>
                    <option value="engineer">Civil Engineer</option>
                    <option value="dealer">Dealer/Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="projectType">Typical Project Type</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="e.g., Residential, Commercial"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message / Requirements</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your typical projects and how we can support you..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#A0522C] to-[#432011] text-white rounded-xl hover:shadow-lg transition-all"
              >
                Register Now
              </button>
            </form>
          </AdvancedCard>
        </motion.div>
      </GridContainer>

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
              <Briefcase className="w-5 h-5" />
              <span>For Professionals</span>
            </div>
            
            <h2 className="text-white mb-6">
              Partner With Us
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our network of thousands of satisfied professionals who trust Trees Plywood for their projects.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Package className="w-6 h-6" />}
                  onClick={() => onNavigate('sample-request')}
                >
                  Request Samples
                </ModernButton>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Calendar className="w-6 h-6" />}
                  onClick={() => onNavigate('contact')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Schedule Consultation
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
