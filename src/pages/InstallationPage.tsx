// <AdvancedCard gradient={true} hoverEffect="3d" className="p-6">
import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GridContainer } from '../components/layout/GridContainer';
import { AdvancedCard } from '../components/design-system/AdvancedCard';
import { Wrench, CheckCircle, MapPin, Calendar, User, Phone, Mail, Home, MessageSquare, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

const services = [
  {
    icon: Home,
    title: 'Residential Installation',
    description: 'Expert installation for home interiors, furniture, and decorative applications',
    features: ['Furniture assembly', 'Wall paneling', 'False ceiling', 'Wardrobes & storage']
  },
  {
    icon: Shield,
    title: 'Commercial Projects',
    description: 'Large-scale installation for offices, retail spaces, and commercial buildings',
    features: ['Office interiors', 'Retail displays', 'Reception desks', 'Partitions']
  },
  {
    icon: Wrench,
    title: 'Exterior Installation',
    description: 'Weather-resistant installation for outdoor and marine applications',
    features: ['Cladding', 'Shuttering', 'Marine structures', 'Exterior panels']
  },
  {
    icon: Award,
    title: 'Custom Carpentry',
    description: 'Bespoke carpentry work for unique design requirements',
    features: ['Custom furniture', 'Curved designs', 'Specialty finishes', 'Designer pieces']
  }
];

const benefits = [
  { icon: CheckCircle, title: 'Certified Installers', description: 'Trained and certified professionals' },
  { icon: Shield, title: 'Installation Warranty', description: 'Extended warranty on workmanship' },
  { icon: Clock, title: 'Timely Completion', description: 'Projects completed on schedule' },
  { icon: Award, title: 'Quality Assured', description: 'Premium installation standards' }
];

interface InstallationPageProps {
  onNavigate: (page: string) => void;
}

export default function InstallationPage({ onNavigate }: InstallationPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    projectType: 'residential',
    serviceType: 'furniture',
    areaSize: '',
    preferredDate: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    console.log('Installation Request:', formData);
    toast.success('Installation request submitted! Our team will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      projectType: 'residential',
      serviceType: 'furniture',
      areaSize: '',
      preferredDate: '',
      details: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Professional Installation Services"
        subtitle="Expert installation by certified carpenters ensuring perfect finish and long-lasting durability"
        image="https://images.unsplash.com/photo-1751486403890-793880b12adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjBpbnN0YWxsYXRpb24lMjB3b3JrfGVufDF8fHx8MTc2MjIzNjAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="Installation Services"
      />

      {/* Services Grid */}
      {/* Services Grid */}
<GridContainer className="py-20">

  {/* Section Header - Full Width */}
  <div className="col-span-12 mb-12 text-center">
    <h2 className="text-3xl text-[#432011] mb-4">Our Installation Services</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Professional installation services for all types of plywood applications
    </p>
  </div>

  {/* 2×2 Card Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-12">

    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="w-full"
      >
        <AdvancedCard gradient={true} hoverEffect="3d" className="p-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A0522C] to-[#432011] flex items-center justify-center mb-4">
            <service.icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl mb-3 text-[#432011]">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </AdvancedCard>
      </motion.div>
    ))}

  </div>
</GridContainer>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-[#A0522C]/5 to-[#432011]/5 py-20">
        <GridContainer>
          <div className="col-span-12 mb-12 text-center">
            <h2 className="text-3xl text-[#432011] mb-4">Why Choose Our Installers?</h2>
          </div>

          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0522C] to-[#432011] flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-[#432011]">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </GridContainer>
      </div>

      {/* Booking Form */}
     {/* Booking Form */}
<GridContainer className="py-20">
  <div className="col-span-12 lg:col-span-8">
    <AdvancedCard
  variant="glass"
  className="p-8 no-hover-transform"
>

      <h2 className="text-2xl mb-6 text-[#432011]">
        Book Installation Service
      </h2>

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
                  <Label htmlFor="email">Email Address</Label>
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
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Your city"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="exterior">Exterior</SelectItem>
                      <SelectItem value="custom">Custom Carpentry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furniture">Furniture Installation</SelectItem>
                      <SelectItem value="paneling">Wall Paneling</SelectItem>
                      <SelectItem value="ceiling">False Ceiling</SelectItem>
                      <SelectItem value="wardrobe">Wardrobe/Storage</SelectItem>
                      <SelectItem value="cladding">Exterior Cladding</SelectItem>
                      <SelectItem value="custom">Custom Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="areaSize">Approximate Area (sq.ft)</Label>
                  <Input
                    id="areaSize"
                    name="areaSize"
                    type="number"
                    value={formData.areaSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 500"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferred Start Date</Label>
                  <div className="relative mt-2">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Installation Address *</Label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Complete address with landmarks"
                    className="pl-10 min-h-[80px]"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="details">Project Details</Label>
                <div className="relative mt-2">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements, design preferences, and any specific instructions..."
                    className="pl-10 min-h-[120px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#A0522C] to-[#432011] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-5 h-5" />
                Request Installation Service
              </button>
            </form>
          </AdvancedCard>
        </div>

        {/* Sidebar Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 space-y-6"
        >
          <AdvancedCard gradient={true} hoverEffect="3d" className="p-6">
  <h3 className="text-xl mb-4 text-[#432011]">Installation Process</h3>
  <div className="space-y-4">
    {[
      { step: '1', title: 'Site Assessment', desc: 'Free site visit and measurement' },
      { step: '2', title: 'Quote', desc: 'Detailed cost estimate' },
      { step: '3', title: 'Scheduling', desc: 'Convenient timing' },
      { step: '4', title: 'Installation', desc: 'Professional execution' },
      { step: '5', title: 'Quality Check', desc: 'Final inspection' }
    ].map((item, i) => (
      <div key={i} className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#A0522C]/20 flex items-center justify-center flex-shrink-0 text-[#432011] font-semibold">
          {item.step}
        </div>
        <div>
          <h4 className="text-[#432011] mb-0.5 font-medium">{item.title}</h4>
          <p className="text-sm text-gray-700">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</AdvancedCard>


          <AdvancedCard variant="glass" className="p-6">
            <h3 className="text-lg mb-4 text-[#432011]">Pricing Information</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Free site visit & consultation</li>
              <li>• Transparent pricing with no hidden costs</li>
              <li>• Material cost + labor charges</li>
              <li>• Flexible payment options</li>
              <li>• Special rates for bulk projects</li>
            </ul>
          </AdvancedCard>

          <AdvancedCard variant="glass" className="p-6">
            <h3 className="text-lg mb-4 text-[#432011]">Service Areas</h3>
            <p className="text-sm text-gray-600 mb-4">
              We provide installation services across major cities. Contact us to check availability in your area.
            </p>
            <button
              onClick={() => window.location.href = '/dealers'}
              className="w-full py-3 bg-[#A0522C] text-white rounded-lg hover:bg-[#432011] transition-all"
            >
              Find Nearest Installer
            </button>
          </AdvancedCard>
        </motion.div>
      </GridContainer>
    </div>
  );
}
