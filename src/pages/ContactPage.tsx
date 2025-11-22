import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  User, Building2, Sparkles, CheckCircle2, Globe,
  Facebook, Instagram, Linkedin, Twitter, Youtube, 
  MessageCircle, ArrowRight, Navigation, Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { PageHero } from '../components/PageHero';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { FormField } from '../components/FormField';
import { LoadingButton } from '../components/LoadingSpinner';
import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  validateEmail, 
  validatePhone, 
  validateRequired,
  validateMinLength,
  getErrorMessage 
} from '../utils/validation';
import { toast } from 'sonner';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'general',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field: keyof typeof formData, value: string) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!validateRequired(value)) {
          error = getErrorMessage('name', 'required');
        } else if (!validateMinLength(value, 2)) {
          error = getErrorMessage('name', 'minLength');
        }
        break;

      case 'email':
        if (!validateRequired(value)) {
          error = getErrorMessage('email', 'required');
        } else if (!validateEmail(value)) {
          error = getErrorMessage('email', 'invalid');
        }
        break;

      case 'phone':
        if (value && !validatePhone(value)) {
          error = getErrorMessage('phone', 'invalid');
        }
        break;

      case 'message':
        if (!validateRequired(value)) {
          error = getErrorMessage('message', 'required');
        } else if (!validateMinLength(value, 10)) {
          error = getErrorMessage('message', 'minLength');
        }
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validate on change if field was touched
    if (field in touched && touched[field as keyof typeof touched]) {
  validateField(field, value);
}

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    });

    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isPhoneValid = formData.phone ? validateField('phone', formData.phone) : true;
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: 'general',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTouched({
          name: false,
          email: false,
          phone: false,
          message: false
        });
      }, 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information data
  const contactInfo = [
    { 
      icon: Phone, 
      title: 'Call Us', 
      info: '+91 9091 744744', 
      sub: 'We’re available Monday–Saturday, 9 AM to 6 PM.',
      action: () => window.location.href = 'tel:+919091744744'
    },
    { 
      icon: MessageCircle, 
      title: 'WhatsApp', 
      info: '+91 9091 744744', 
      sub: 'Quick chat support anytime.',
      action: () => window.open('https://wa.me/919091744744', '_blank')
    },
    { 
      icon: Mail, 
      title: 'Email Us', 
      info: 'info@treesplywood.com', 
      sub: 'Reach out anytime — we offer 24/7 support.',
      action: () => window.location.href = 'mailto:info@treesplywood.com'
    },
    { 
      icon: MapPin, 
      title: 'Visit Us', 
      info: 'Hyderabad, Telangana', 
      sub: 'View on Map',
      action: () => window.open('https://www.google.com/maps/search/Plot+3-538,+1st+floor+Sri+Krishna+Heights,+Madhapur+Hyderabad+500018,+India/@17.4358388,78.3714818,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D', '_blank')
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/treesplywood', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/treesplywood', label: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com/company/treesplywood', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/treesplywood', label: 'Twitter' },
    { icon: Youtube, url: 'https://youtube.com/@treesplywood', label: 'YouTube' },
  ];

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'support', label: 'Technical Support' },
    { value: 'dealer', label: 'Dealer Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <PageHero
        title={"We’re Just a Call Away \n – Let’s Connect"}
        subtitle="Need help choosing plywood? Your project matters to us."
        description="Whether you need product details, guidance, or expert suggestions, our team is always ready to support you and help you choose the right plywood."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        badge="You Dream It, We Help Build It"
        badgeIcon={MessageSquare}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '<1hr', label: 'Quick Response' },
          { value: '24/7', label: 'Always Available' },
          { value: '15+', label: 'Experience You Can Trust' },
        ]}
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                onClick={() => window.location.href = 'tel:+919091744744'}
              >
                Call Now
              </ModernButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="outline-light"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
                onClick={() => window.open('https://wa.me/919091744744', '_blank')}
              >
                WhatsApp
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />
      

      {/* Contact Info Cards */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="h-full">
                  <button
                    onClick={contact.action}
                    className="w-full p-6 text-center space-y-4 group hover:bg-trees-primary/5 transition-colors duration-300 rounded-2xl"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center group-hover:bg-trees-primary/20 transition-colors duration-300">
                      <contact.icon className="w-8 h-8 text-trees-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-800 font-semibold mb-1">{contact.info}</p>
                      <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        {contact.sub}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </div>
                  </button>
                </ModernCard>
              </motion.div>
            ))}
          </div>
          <section className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left Side Image */}
    <div className="w-full">
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
        alt="Support"
        className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
      />
    </div>

    {/* Right Side Text */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        We’re Here Whenever You Need Us
      </h2>

      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        Our customers are other than Tree’s Plywood family; we are so happy to hear from you 
        and get in touch with us anytime. If you are having a product issue, partnership idea, 
        or want any technical assistance, feel free to reach out.
      </p>

      <ul className="space-y-3 text-gray-700 text-lg md:text-xl">
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl mt-1">✔</span>
          Certified & Safe Products
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl mt-1">✔</span>
          Affordable Pricing
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl mt-1">✔</span>
          Pan-India Availability
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl mt-1">✔</span>
          Customized Design Support
        </li>
      </ul>

      <p className="mt-6 text-gray-900 text-2xl md:text-3xl font-bold">
        “Buy Strength, Build Trust”
      </p>
    </div>
  </div>
</section>

      

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ModernCard variant="elevated">
                <div className="p-8">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-trees-primary/10 rounded-full mb-4">
                      <Send className="w-4 h-4 text-trees-primary" />
                      <span className="text-sm font-semibold text-trees-primary">Send a Message</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch - Request a Sample</h2>
                    <p className="text-gray-600">Try our sample request option to get an At Home / Digital Consultation service for free by filling out this form. Our team will get in touch within 24 hours.</p>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">We'll get back to you within 24 hours</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(value) => handleChange('name', value)}
                        onBlur={() => handleBlur('name')}
                        error={touched.name ? errors.name : ''}
                        success={touched.name && !errors.name && formData.name.length > 0}
                        required
                        placeholder="John Doe"
                        helperText="Please enter your full name"
                      />

                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(value) => handleChange('email', value)}
                        onBlur={() => handleBlur('email')}
                        error={touched.email ? errors.email : ''}
                        success={touched.email && !errors.email && formData.email.length > 0}
                        required
                        placeholder="john.doe@example.com"
                        helperText="We'll never share your email"
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(value) => handleChange('phone', value)}
                        onBlur={() => handleBlur('phone')}
                        error={touched.phone ? errors.phone : ''}
                        success={touched.phone && !errors.phone && formData.phone.length > 0}
                        placeholder="+91 98765 43210"
                        helperText="Optional - For quick callback"
                      />

                      <FormField
                        label="Company / Project Name"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={(value) => handleChange('company', value)}
                        placeholder="ABC Constructions (Optional)"
                      />

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-trees-primary focus:ring-2 focus:ring-trees-primary/20 outline-none transition-all duration-200 bg-white"
                        >
                          {subjects.map((subject) => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <FormField
                        label="Message"
                        name="message"
                        type="textarea"
                        value={formData.message}
                        onChange={(value) => handleChange('message', value)}
                        onBlur={() => handleBlur('message')}
                        error={touched.message ? errors.message : ''}
                        success={touched.message && !errors.message && formData.message.length > 0}
                        required
                        placeholder="Tell us about your project requirements, questions, or how we can help..."
                        rows={5}
                        helperText="Minimum 10 characters"
                      />

                      <LoadingButton
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                        className="w-full bg-trees-primary text-white hover:bg-trees-primary/90 transition-colors px-8 py-4 text-lg rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                      >
                        {!isSubmitting && <Send className="w-5 h-5" />}
                        Send Message
                      </LoadingButton>
                    </form>
                  )}
                </div>
              </ModernCard>
              {/* Why Visit Us Card */}
<ModernCard variant="elevated">
  <div className="p-6">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-trees-primary/10 rounded-full mb-4">
      <Sparkles className="w-4 h-4 text-trees-primary" />
      <span className="text-sm font-semibold text-trees-primary">Why Visit Us?</span>
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-4">Experience Tree’s Plywood in Person</h3>
    
    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-gray-700 text-sm">
      {[
        'See Our Products Up Close',
        'Get Advice From Our Experts',
        'Explore Customization Options',
        'Experience The Quality Yourself',
        'Meet Our Friendly Team',
        'Get Advice From Our Experts',
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          {item && <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />}
          {item}
        </li>
      ))}
    </ul>
  </div>
</ModernCard>

            </motion.div>

            {/* Right Column - Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location Map */}
              <ModernCard variant="elevated">
                <div className="h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5 relative group cursor-pointer"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Location Map"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-16 h-16 mx-auto text-trees-primary mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Showroom</h3>
                      <p className="text-gray-700 font-semibold mb-1">The Trees Plywood</p>
                      <p className="text-gray-600">Hyderabad, Telangana, India</p>
                      <div className="mt-4 flex items-center justify-center gap-2 text-trees-primary font-semibold">
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm">Get Directions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ModernCard>

              {/* Office Hours */}
              <ModernCard variant="elevated">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-trees-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', status: 'Open' },
                      { day: 'Saturday', hours: '9:00 AM - 4:00 PM', status: 'Open' },
                      { day: 'Sunday & Holidays', hours: 'Closed', status: 'Closed' },
                    ].map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center py-4 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <div>
                          <span className="font-semibold text-gray-900 block">{schedule.day}</span>
                          <span className={`text-sm ${schedule.status === 'Open' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                            {schedule.status}
                          </span>
                        </div>
                        <span className="text-gray-700 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ModernCard>

              {/* Social Media */}
              <ModernCard variant="elevated">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-trees-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-trees-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Stay connected for updates, ideas, and the latest from Tree’s Plywood.</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, idx) => (
                      <button
                        key={idx}
                        onClick={() => window.open(social.url, '_blank')}
                        className="flex-1 min-w-[calc(50%-0.375rem)] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-trees-primary/10 hover:text-trees-primary transition-all duration-200 font-medium group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="text-sm">{social.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </ModernCard>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Unique Find a Dealer Section */}
<section className="section-padding bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
        Find a Dealer Near You
      </h2>
      <p className="text-gray-700 text-lg md:text-xl">
        Looking for a Tree’s Plywood dealer in your city? Check out our main warehouse locations.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { state: 'Andhra Pradesh', city: 'Vijayawada' },
        { state: 'Telangana', city: 'Hyderabad' },
        { state: 'Karnataka', city: 'Bengaluru' },
        { state: 'Tamil Nadu', city: 'Chennai' },
      ].map((location, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <ModernCard variant="elevated" className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-trees-primary text-2xl font-bold mb-2">{location.state}</div>
            <div className="text-gray-800 font-semibold">{location.city}</div>
          </ModernCard>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-8">
      <p className="text-gray-700 font-semibold text-lg md:text-xl">
        More Cities Coming Soon!
      </p>
    </div>
  </div>
</section>



      {/* Quick Actions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Looking for Something Specific?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are quick links to help you find what you need:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Building2, 
                title: 'Find a Dealer', 
                desc: 'Locate an authorized Tree’s Plywood dealer near you.',
                page: 'dealers',
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              { 
                icon: Calendar, 
                title: 'Request a Sample', 
                desc: 'Get free product samples delivered to you.',
                page: 'samples',
                color: 'text-green-600',
                bg: 'bg-green-50'
              },
              { 
                icon: Sparkles, 
                title: 'Download Catalog', 
                desc: 'Browse and download our product brochures.',
                page: 'downloads',
                color: 'text-purple-600',
                bg: 'bg-purple-50'
              },
              { 
                icon: MessageSquare, 
                title: 'View FAQs', 
                desc: 'Find quick answers to commonly asked questions.',
                page: 'faq',
                color: 'text-orange-600',
                bg: 'bg-orange-50'
              },
            ].map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="h-full">
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="w-full p-6 text-center space-y-4 group hover:bg-gray-50 transition-colors duration-300 rounded-2xl"
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${link.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className={`w-8 h-8 ${link.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{link.desc}</p>
                      <span className="text-trees-primary font-semibold text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </button>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <Sparkles className="w-5 h-5" />
              <span>Ready to Begin?</span>
            </div>
            
            <h2 className="text-white mb-6">
              Let’s Build Something Great Together
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Our team is here to help you with product guidance, expert suggestions, and technical support whenever you need it.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Phone className="w-6 h-6" />}
                  onClick={() => window.location.href = 'tel:+919091744744'}
                >
                  Call Us Now
                </ModernButton>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<MessageCircle className="w-6 h-6" />}
                  onClick={() => window.open('https://wa.me/919091744744', '_blank')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Chat on WhatsApp
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
