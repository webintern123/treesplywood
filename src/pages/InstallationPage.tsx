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
      <GridContainer className="py-20">
        <div className="col-span-12 mb-12 text-center">
          <h2 className="text-3xl text-[#432011] mb-4">Our Installation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional installation services for all types of plywood applications
          </p>
        </div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <AdvancedCard gradient={false} hoverEffect="3d" className="h-full p-6">
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
              <AdvancedCard gradient={true} hoverEffect="3d" className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A0522C] to-[#432011] flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-[#432011]">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </AdvancedCard>
            </motion.div>
          ))}
        </GridContainer>
      </div>

      {/* Booking Form */}
      <GridContainer className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8"
        >
          
        </motion.div>

        {/* Sidebar Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 space-y-6"
        >
          <AdvancedCard gradient={true} hoverEffect="3d" className="p-6">
            <h3 className="text-lg mb-4 text-[#432011]">Installation Process</h3>
            {/* Process steps remain the same */}
          </AdvancedCard>

          <AdvancedCard gradient={false} hoverEffect="3d" className="p-6">
            <h3 className="text-lg mb-4 text-[#432011]">Pricing Information</h3>
            {/* Pricing info remains the same */}
          </AdvancedCard>

          <AdvancedCard gradient={false} hoverEffect="3d" className="p-6">
            <h3 className="text-lg mb-4 text-[#432011]">Service Areas</h3>
            {/* Service areas content remains the same */}
          </AdvancedCard>
        </motion.div>
      </GridContainer>
    </div>
  );
}
