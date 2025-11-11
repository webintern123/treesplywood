import React, { useState } from 'react';
import { 
  Package, CheckCircle, Truck, Clock, MapPin, User, Mail, Phone, Building, 
  MessageSquare, ChevronRight, Target, Lightbulb, Users, Star, HelpCircle,
  Shield, Zap, Award, TrendingUp, Sparkles, Box, FileCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { Testimonials } from '../components/Testimonials';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { toast } from 'sonner';

interface SampleProduct {
  id: string;
  name: string;
  type: string;
  thickness: string;
  size: string;
  description: string;
}

const availableSamples: SampleProduct[] = [
  // Plywood Products
  { 
    id: '1', 
    name: 'Ananta', 
    type: 'Structural BWP', 
    thickness: '12mm', 
    size: '6" × 6"',
    description: 'Premium 15-layer structural plywood with 25-year warranty'
  },
  { 
    id: '2', 
    name: 'Ananta', 
    type: 'Structural BWP', 
    thickness: '19mm', 
    size: '6" × 6"',
    description: 'Heavy-duty structural grade for load-bearing applications'
  },
  { 
    id: '3', 
    name: 'Agni', 
    type: 'Fire-Resistant', 
    thickness: '12mm', 
    size: '6" × 6"',
    description: 'IS:5509 certified fire retardant plywood for safety compliance'
  },
  { 
    id: '4', 
    name: 'Bhima', 
    type: 'Marine Grade', 
    thickness: '12mm', 
    size: '6" × 6"',
    description: 'BWP grade marine plywood for high-moisture environments'
  },
  { 
    id: '5', 
    name: 'Samrat', 
    type: 'Premium BWP', 
    thickness: '12mm', 
    size: '6" × 6"',
    description: 'Luxury grade with smooth finish and 30-year warranty'
  },
  { 
    id: '6', 
    name: 'Samrat', 
    type: 'Premium BWP', 
    thickness: '19mm', 
    size: '6" × 6"',
    description: 'Thick premium plywood for high-end furniture'
  },
  { 
    id: '7', 
    name: 'Vajra', 
    type: 'Resilient BWP', 
    thickness: '12mm', 
    size: '6" × 6"',
    description: 'Unbreakable construction with impact resistance'
  },
  { 
    id: '8', 
    name: 'Ujval', 
    type: 'IS:303 Interior', 
    thickness: '9mm', 
    size: '6" × 6"',
    description: 'Cost-effective interior grade for dry environments'
  },
  // Door Products
  { 
    id: '9', 
    name: 'Block Board', 
    type: 'Core Panel BWR', 
    thickness: '19mm', 
    size: '6" × 6"',
    description: 'Boiling water resistant core for door manufacturing'
  },
  { 
    id: '10', 
    name: 'Flush Doors', 
    type: 'Sample Panel', 
    thickness: '32mm', 
    size: '6" × 12"',
    description: 'Complete door panel sample with frame and finish'
  }
];

interface SampleRequestPageProps {
  onNavigate?: (page: string) => void;
}

export default function SampleRequestPage({ onNavigate }: SampleRequestPageProps) {
  const [selectedSamples, setSelectedSamples] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    profession: 'architect',
    address: '',
    city: '',
    state: '',
    pincode: '',
    projectDetails: '',
    purpose: 'project-evaluation'
  });

  const handleSampleToggle = (sampleId: string) => {
    setSelectedSamples(prev =>
      prev.includes(sampleId)
        ? prev.filter(id => id !== sampleId)
        : [...prev, sampleId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedSamples.length === 0) {
      toast.error('Please select at least one sample');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    console.log('Sample Request:', { formData, selectedSamples });
    
    toast.success('Sample request submitted successfully! We will contact you within 24 hours.');
    
    // Reset form
    setSelectedSamples([]);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      profession: 'architect',
      address: '',
      city: '',
      state: '',
      pincode: '',
      projectDetails: '',
      purpose: 'project-evaluation'
    });
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => onNavigate?.('home')}
                  className="cursor-pointer hover:text-trees-primary transition-colors"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-trees-primary font-semibold">
                  Request Samples
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Request Free Samples"
        subtitle="Experience Quality First-Hand"
        description="Test our premium plywood samples before making a purchase decision. Request up to 5 free samples with delivery across India within 3-5 business days."
        image="https://images.unsplash.com/photo-1581619529755-12154d726205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2FtcGxlcyUyMHRlc3Rpbmd8ZW58MXx8fHwxNzYyMjM2MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Free Samples"
        badgeIcon={Package}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '10+', label: 'Sample Products' },
          { value: 'Free', label: 'Delivery' },
          { value: '3-5', label: 'Business Days' },
        ]}
      />

      {/* Why Request Samples Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Samples?"
            badgeIcon={Target}
            title="Experience Before You Invest"
            subtitle="Make informed decisions by testing our premium plywood quality, finish, and durability first-hand"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Test Quality',
                desc: 'Verify construction, layers, and adhesive strength before bulk purchase',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Award,
                title: 'Compare Grades',
                desc: 'Side-by-side comparison of different grades and finishes',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'Client Approval',
                desc: 'Present physical samples to clients for material approval',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: CheckCircle,
                title: 'Verify Match',
                desc: 'Ensure color, texture, and finish match project requirements',
                color: 'from-orange-500 to-orange-600'
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-trees-primary mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Process"
            badgeIcon={Box}
            title="How Sample Request Works"
            subtitle="Simple 4-step process to get premium plywood samples delivered to your doorstep"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: Package, 
                title: 'Select Samples', 
                desc: 'Choose up to 5 samples from our complete range',
                step: '1'
              },
              { 
                icon: FileCheck, 
                title: 'Fill Details', 
                desc: 'Provide delivery information and project requirements',
                step: '2'
              },
              { 
                icon: Truck, 
                title: 'Free Delivery', 
                desc: 'Samples delivered within 3-5 business days across India',
                step: '3'
              },
              { 
                icon: Clock, 
                title: 'Test & Evaluate', 
                desc: 'Test quality, compare options, and make informed decision',
                step: '4'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="glass" className="p-6 h-full text-center relative">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-trees-secondary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Selection & Form Section */}
      <section className="section-padding bg-gray-50">
        <PageContainer>
          <ModernSectionHeader
            badge="Request Form"
            badgeIcon={Package}
            title="Select Samples & Submit Request"
            subtitle="Choose the products you want to test and provide delivery details"
          />

          {/* Notice for Dealers */}
          <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-amber-900">
                  <strong>For Dealers & Business Partners:</strong> This form is for customer sample requests (max 5 pieces). 
                  If you're interested in dealership, bulk display sample kits, or business partnership, please visit our{' '}
                  <button 
                    onClick={() => onNavigate?.('dealers')}
                    className="text-amber-700 font-semibold underline hover:text-amber-800"
                  >
                    Dealers & Partnership Page
                  </button>{' '}
                  instead.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <ModernCard variant="elevated" className="p-8">
                {/* Sample Selection */}
                <div className="mb-12">
                  <h3 className="text-trees-secondary mb-6 flex items-center gap-2">
                    <Package className="w-6 h-6 text-trees-primary" />
                    Select Samples (Maximum 5)
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {availableSamples.map((sample) => (
                      <motion.div
                        key={sample.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          selectedSamples.includes(sample.id)
                            ? 'border-trees-primary bg-trees-primary/5 shadow-md'
                            : 'border-gray-200 hover:border-trees-primary/30 hover:shadow-sm'
                        }`}
                        onClick={() => {
                          if (selectedSamples.length < 5 || selectedSamples.includes(sample.id)) {
                            handleSampleToggle(sample.id);
                          } else {
                            toast.error('Maximum 5 samples can be selected');
                          }
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={selectedSamples.includes(sample.id)}
                            className="mt-1"
                            disabled={selectedSamples.length >= 5 && !selectedSamples.includes(sample.id)}
                          />
                          <div className="flex-1">
                            <h4 className="text-trees-secondary mb-1">{sample.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                              <span className="px-2 py-0.5 bg-gray-100 rounded">{sample.type}</span>
                              <span>{sample.thickness}</span>
                              <span>•</span>
                              <span>{sample.size}</span>
                            </div>
                            <p className="text-xs text-gray-500">{sample.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-xl border-2 ${
                    selectedSamples.length === 0 
                      ? 'bg-red-50 border-red-200'
                      : selectedSamples.length === 5
                      ? 'bg-green-50 border-green-200'
                      : 'bg-blue-50 border-blue-200'
                  }`}>
                    <p className={`text-sm font-semibold ${
                      selectedSamples.length === 0 
                        ? 'text-red-800'
                        : selectedSamples.length === 5
                        ? 'text-green-800'
                        : 'text-blue-800'
                    }`}>
                      {selectedSamples.length === 0 && '⚠️ Please select at least 1 sample'}
                      {selectedSamples.length > 0 && selectedSamples.length < 5 && `✓ Selected: ${selectedSamples.length} of 5 samples`}
                      {selectedSamples.length === 5 && '✓ Maximum samples selected (5/5)'}
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-trees-secondary mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-trees-primary" />
                    Your Contact Details
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <div className="relative mt-2">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
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
                            placeholder="john@example.com"
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
                        <Label htmlFor="company">Company Name</Label>
                        <div className="relative mt-2">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="profession">Profession *</Label>
                        <Select
                          value={formData.profession}
                          onValueChange={(value) => setFormData({ ...formData, profession: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="architect">Architect</SelectItem>
                            <SelectItem value="interior-designer">Interior Designer</SelectItem>
                            <SelectItem value="contractor">Contractor</SelectItem>
                            <SelectItem value="builder">Builder/Developer</SelectItem>
                            <SelectItem value="carpenter">Carpenter</SelectItem>
                            <SelectItem value="homeowner">Homeowner</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-2">
                          <strong>For Dealers:</strong> Please visit our{' '}
                          <button 
                            type="button"
                            onClick={() => onNavigate?.('dealers')}
                            className="text-trees-primary font-semibold underline hover:text-trees-secondary"
                          >
                            Dealers Page
                          </button>{' '}
                          for partnership opportunities and display sample kits.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="purpose">Purpose *</Label>
                        <Select
                          value={formData.purpose}
                          onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project-evaluation">Project Evaluation</SelectItem>
                            <SelectItem value="quality-testing">Quality Testing</SelectItem>
                            <SelectItem value="client-presentation">Client Presentation</SelectItem>
                            <SelectItem value="product-comparison">Product Comparison</SelectItem>
                            <SelectItem value="educational">Educational Purpose</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Street address, building name, floor"
                          className="pl-10 min-h-[80px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Mumbai"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="Maharashtra"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="400001"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="projectDetails">Project Details (Optional)</Label>
                      <div className="relative mt-2">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Textarea
                          id="projectDetails"
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, timeline, and specific requirements..."
                          className="pl-10 min-h-[120px]"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-amber-800">
                        <strong>Delivery Timeline:</strong> Samples will be delivered within 3-5 business days. 
                        You will receive tracking information via email and SMS.
                      </p>
                    </div>

                    <ModernButton
                      variant="primary"
                      size="xl"
                      icon={<Package className="w-5 h-5" />}
                      type="submit"
                      className="w-full"
                    >
                      Request Free Samples
                    </ModernButton>
                  </form>
                </div>
              </ModernCard>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
               <ModernCard variant="elevated" className="p-6 bg-white shadow-md">
    <h4 className="text-trees-secondary mb-4 flex items-center gap-2">
      <CheckCircle className="w-5 h-5 text-trees-primary" />
      Why Request Samples?
    </h4>
    <ul className="space-y-3 text-gray-700 text-sm">
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-trees-primary" />
        <span>Test quality and durability</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-trees-primary" />
        <span>Compare grades and finishes</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-trees-primary" />
        <span>Present to clients</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-trees-primary" />
        <span>Verify color and texture</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-trees-primary" />
        <span>Make informed decisions</span>
      </li>
    </ul>
  </ModernCard>


              <ModernCard variant="elevated" className="p-6">
                <h4 className="text-trees-secondary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-trees-primary" />
                  Sample Policy
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    Maximum 5 samples per request
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    Free delivery across India
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    One request per 30 days
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    3-5 business days delivery
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    Samples are non-returnable
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-trees-primary">•</span>
                    For bulk orders, contact sales
                  </p>
                </div>
              </ModernCard>

              <ModernCard variant="elevated" className="p-6">
                <h4 className="text-trees-secondary mb-4">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to assist you with sample selection and product recommendations.
                </p>
                <ModernButton
                  variant="outline"
                  size="md"
                  icon={<MessageSquare className="w-4 h-4" />}
                  onClick={() => onNavigate?.('contact')}
                  className="w-full"
                >
                  Contact Support
                </ModernButton>
              </ModernCard>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Sample Statistics */}
      <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Trusted Sample Program</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Thousands of professionals trust our sample program for quality evaluation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '15K+', label: 'Samples Delivered', icon: Package },
              { value: '3-5', label: 'Days Delivery', icon: Truck },
              { value: '98%', label: 'Satisfaction Rate', icon: Star },
              { value: '10+', label: 'Product Options', icon: Box },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Success Stories"
            badgeIcon={Star}
            title="What Professionals Say"
            subtitle="Hear from architects, designers, and contractors who tested our samples"
          />
          <Testimonials />
        </div>
      </section>

      {/* Sample FAQ */}
      <section className="section-padding bg-white">
        <PageContainer>
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Sample Request FAQ"
            subtitle="Common questions about our free sample program and delivery process"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="eligible" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Who can request samples?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our sample program is open to professionals including architects, interior designers, 
                  contractors, builders, carpenters, and homeowners planning projects. Students and educators 
                  can request samples for educational purposes with valid documentation. <strong>Note:</strong> For 
                  dealership inquiries and bulk display sample kits, please visit our{' '}
                  <button 
                    onClick={() => onNavigate?.('dealers')}
                    className="text-trees-primary font-semibold underline hover:text-trees-secondary"
                  >
                    Dealers Page
                  </button>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How long does delivery take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Samples are typically delivered within 3-5 business days across India. You'll receive tracking 
                  information via email and SMS once your samples are dispatched. Delivery times may vary slightly 
                  for remote locations. All deliveries are handled by reliable courier partners to ensure safe 
                  arrival of your samples.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Is the sample program really free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! Our sample program is completely free including both the samples and delivery charges. 
                  There are no hidden costs, processing fees, or minimum order requirements. We believe in letting 
                  our product quality speak for itself. You can request up to 5 samples once every 30 days at no 
                  cost to help you make informed purchasing decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="testing" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How should I test the samples?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Our samples are 6"×6" pieces (larger for doors) that allow comprehensive testing. Check the 
                  number of layers, adhesive quality, finish smoothness, and color consistency. Test for water 
                  resistance by placing water drops on the surface. Examine the edge finish and core construction. 
                  Compare different grades side-by-side. For specific tests like boiling water resistance, contact 
                  our technical team for guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="order" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I order after testing samples?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! Once you've evaluated the samples and selected the products you need, you can order 
                  through our dealer network or contact our sales team directly. We'll connect you with the nearest 
                  authorized dealer for competitive pricing and availability. Our team can also provide technical 
                  specifications, installation guidance, and bulk order discounts for large projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions about samples?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => onNavigate?.('contact')}
              >
                Contact Our Team
              </ModernButton>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Newsletter Subscription for Sample Updates */}
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
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">Sample Updates</span>
            </div>
            <h2 className="text-white mb-6">Get Notified About New Samples</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Be the first to know when new sample products are added, receive quality testing tips, and get exclusive sample program updates
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60"
              />
              <MagneticButton strength={0.2}>
                <ModernButton 
                  variant="light" 
                  size="md"
                >
                  Subscribe
                </ModernButton>
              </MagneticButton>
            </div>
            <p className="text-sm text-white/70">
              Join 3,000+ professionals • Sample updates • Testing tips • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-white">
        <PageContainer>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-trees-primary" />
                <span className="text-trees-primary font-semibold text-sm">Ready to Test?</span>
              </div>
              <h2 className="text-trees-secondary mb-6">Ready to Experience Premium Quality?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Request your free samples today and discover why thousands of professionals choose The Trees plywood
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="primary"
                    size="xl"
                    icon={<Package className="w-6 h-6" />}
                    onClick={() => {
                      const formSection = document.querySelector('form');
                      formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Request Samples Now
                  </ModernButton>
                </MagneticButton>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<MessageSquare className="w-6 h-6" />}
                  onClick={() => onNavigate?.('products')}
                >
                  View All Products
                </ModernButton>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
