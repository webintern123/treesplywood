import { MapPin, Phone, Mail, Clock, Award, Search, Map, Star, Users, TrendingUp, CheckCircle, Globe, Target, Lightbulb, HelpCircle, Sparkles, MessageCircle, Download, Filter, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { PageHero } from '../components/PageHero';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { Testimonials } from '../components/Testimonials';
import { SEOHead } from '../components/SEOHead';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';

interface Dealer {
  id: string;
  name: string;
  city: string;
  district: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  type: 'Authorized Dealer' | 'Premium Partner' | 'Distributor';
  rating: number;
  image: string;
}

// State and District mapping
const stateDistrictsMap: { [key: string]: string[] } = {
  'Telangana': ['Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri', 'Warangal', 'Karimnagar', 'Nizamabad', 'Khammam', 'Nalgonda'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Kurnool', 'Anantapur', 'Kakinada', 'Rajahmundry'],
  'Maharashtra': ['Mumbai City', 'Mumbai Suburban', 'Thane', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
  'Karnataka': ['Bangalore Urban', 'Bangalore Rural', 'Mysore', 'Mangalore', 'Hubli-Dharwad', 'Belgaum', 'Bellary'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode'],
  'Delhi': ['Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'New Delhi', 'North East Delhi'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar'],
  'West Bengal': ['Kolkata', 'Howrah', 'North 24 Parganas', 'South 24 Parganas', 'Hooghly', 'Bardhaman'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Allahabad', 'Noida'],
  'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas'],
};

const dealers: Dealer[] = [
  // Telangana
  {
    id: '1',
    name: 'The Trees Plywood - Hyderabad Head Office',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Premium Woods',
    city: 'Madhapur, Hyderabad',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Timber Mart',
    city: 'Madhapur',
    district: ' Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },

  // Andhra Pradesh
  {
    id: '4',
    name: 'Elite Plywood',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Premium Woods',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    name: ' Timber Solutions',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    name: ' Wood Industries',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?w=600&h=400&fit=crop',
  },

  // Maharashtra
  {
    id: '8',
    name: 'Premium Plywood Center',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    id: '9',
    name: 'Premium Woods',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },
  {
    id: '10',
    name: ' Wood Mart',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },

  // Karnataka
  {
    id: '11',
    name: 'Wood Solutions',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },
  {
    id: '12',
    name: ' Premium Plywood',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // Tamil Nadu
  {
    id: '13',
    name: ' Elite Plywood Hub',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
  },
  {
    id: '14',
    name: ' Wood Industries',
    city: 'Madhapur',
    district: ' Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },

  // Delhi
  {
    id: '15',
    name: 'Timber Mart',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },
  {
    id: '16',
    name: 'Premium Woods',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },

  // Gujarat
  {
    id: '17',
    name: ' Plywood Depot',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    id: '18',
    name: 'Timber Solutions',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // West Bengal
  {
    id: '19',
    name: ' Wood Industry',
    city: 'Madhapur',
    district: ' Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?w=600&h=400&fit=crop',
  },

  // Rajasthan
  {
    id: '20',
    name: 'Timber World',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // Uttar Pradesh
  {
    id: '21',
    name: 'Premium Plywood',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: '22',
    name: 'Wood Mart',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },

  // Madhya Pradesh
  {
    id: '23',
    name: 'Indore Timber Hub',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Distributor',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },
  {
    id: '24',
    name: 'Bhopal Premium Woods',
    city: 'Madhapur',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 3-538, 1st Floor, Sri Krishna Heights, 100 Feet Road',
    phone: '+91 9091744744',
    email: 'info@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
];

interface DealersPageProps {
  onNavigate: (page: string) => void;
}

export function DealersPage({ onNavigate }: DealersPageProps) {
  const [selectedState, setSelectedState] = useState<string>('All States');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [searchQuery, setSearchQuery] = useState('');

  // Get available districts based on selected state
  const availableDistricts = useMemo(() => {
    if (selectedState === 'All States') return [];
    return stateDistrictsMap[selectedState] || [];
  }, [selectedState]);

  // Get all unique states from dealers
  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(dealers.map(d => d.state))).sort();
    return ['All States', ...uniqueStates];
  }, []);

  // Get dealer types
  const dealerTypes = ['All Types', 'Premium Partner', 'Authorized Dealer', 'Distributor'];

  // Filter dealers based on all criteria
  const filteredDealers = useMemo(() => {
    return dealers.filter((dealer) => {
      const matchesState = selectedState === 'All States' || dealer.state === selectedState;
      const matchesDistrict = selectedDistrict === 'All Districts' || dealer.district === selectedDistrict;
      const matchesType = selectedType === 'All Types' || dealer.type === selectedType;
      const matchesSearch = 
        dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dealer.district.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesState && matchesDistrict && matchesType && matchesSearch;
    });
  }, [selectedState, selectedDistrict, selectedType, searchQuery]);

  // Reset district when state changes
  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedDistrict('All Districts');
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedState('All States');
    setSelectedDistrict('All Districts');
    setSelectedType('All Types');
  };

  // Get statistics
  const totalStates = useMemo(() => new Set(dealers.map(d => d.state)).size, []);
  const totalDistricts = useMemo(() => new Set(dealers.map(d => d.district)).size, []);
  const avgRating = useMemo(() => {
    const sum = dealers.reduce((acc, d) => acc + d.rating, 0);
    return (sum / dealers.length).toFixed(1);
  }, []);

  return (
    <div>
      {/* SEO Meta Tags */}
      <SEOHead
        title="Find a Dealer - Authorized Dealers Across India | The Trees Plywood"
        description="Find authorized The Trees Plywood dealers near you. 24+ locations across 11 states. Advanced search with district-wise filtering for Telangana, Andhra Pradesh, and more."
        keywords="plywood dealers, authorized dealers, plywood distributors, wood dealers near me, premium plywood dealers India, district wise dealers"
        canonicalUrl="/dealers"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onNavigate('home')} className="cursor-pointer">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Find a Dealer</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Your Nearest Tree’s Plywood Dealer"
        subtitle="Use our Dealer Finder to quickly locate verified stores across India."
        description="Search by state or district and connect with trusted partners for product availability and guidance."
        image="https://images.unsplash.com/photo-1708464679987-db85ae0f60d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZGVhbGVyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYyMjM0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="24+ Dealer Locations Near You"
        badgeIcon={Map}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: `${dealers.length}+`, label: 'Dealers' },
          { value: `${totalStates}`, label: 'States' },
          { value: `${totalDistricts}+`, label: 'Districts' },
          { value: 'Pan-India', label: 'Dealers' },
          { value: 'Fast', label: 'Support ' },
          { value: 'Verified', label: 'Partners' },
        ]}
        actions={
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
                onClick={() => onNavigate('contact')}
              >
                Need Help? Contact Support
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* How to Find a Dealer Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Easy Steps"
            badgeIcon={Lightbulb}
            title="Find a Dealer Near You"
            subtitle="Follow these easy steps to locate an authorized Tree’s Plywood dealer near you:"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: Map,
                title: 'Choose Your State',
                desc: 'Pick your state from our list of locations across India.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                icon: Building2,
                title: 'Select Your District',
                desc: ' Narrow it down by choosing your district for closer results.',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '3',
                icon: Filter,
                title: 'Pick Dealer Type',
                desc: 'Choose whether you want a Partner, Dealer, or Distributor.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '4',
                icon: Phone,
                title: 'Connect & Visit',
                desc: ' View contact details and get in touch for product availability or guidance.',
                color: 'from-orange-500 to-orange-600'
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated" className="p-6 h-full relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
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

      <PageContainer className="space-y-20">

      {/* Why Choose Our Dealers */}
      <section>
        <ModernSectionHeader
          badge="Our Dealer Network"
          badgeIcon={Award}
          title="Why Buy from Our Authorized Dealers"
          subtitle="Get genuine products and reliable service from trusted partners across India."
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Award,
              title: 'Trusted & Trained Partners',
              desc: 'Every dealer follows our quality and service standards.',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: CheckCircle,
              title: 'Original Products Only',
              desc: 'Guaranteed genuine plywood with proper documents.',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Users,
              title: 'Expert Help Anytime',
              desc: 'Get advice on grades, thickness, and applications.',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Globe,
              title: 'Across India',
              desc: ' Expanding network covering major cities.',
              color: 'from-orange-500 to-orange-600'
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ModernCard variant="elevated" className="p-6 h-full text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Search & Filter */}
      <section className="space-y-6">
        <ModernSectionHeader
          badge="Advanced Search"
          badgeIcon={Search}
          title="Find the Right Dealer Near You Easily"
          subtitle="Use filters to locate the right Tree’s Plywood dealer near you. Search by state, district, dealer type, or name for quick and accurate results."
        />

        <ModernCard variant="elevated" className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, city, or district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 glass-card border-trees-primary/20 focus:border-trees-primary"
              />
            </div>

            {/* State Filter */}
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger className="h-12 glass-card border-trees-primary/20">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* District Filter */}
            <Select 
              value={selectedDistrict} 
              onValueChange={setSelectedDistrict}
              disabled={selectedState === 'All States'}
            >
              <SelectTrigger className="h-12 glass-card border-trees-primary/20">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Districts">All Districts</SelectItem>
                {availableDistricts.map((district) => (
                  <SelectItem key={district} value={district}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type Filter - Second Row */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12 glass-card border-trees-primary/20">
                <SelectValue placeholder="Select Dealer Type" />
              </SelectTrigger>
              <SelectContent>
                {dealerTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters Button */}
            <ModernButton
              variant="outline"
              size="md"
              icon={<Filter className="w-4 h-4" />}
              iconPosition="left"
              onClick={clearFilters}
              disabled={selectedState === 'All States' && selectedDistrict === 'All Districts' && selectedType === 'All Types' && searchQuery === ''}
            >
              Clear All Filters
            </ModernButton>
          </div>
        </ModernCard>

        {/* Results Count and Active Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-gray-600">
            Showing <Badge variant="secondary" className="mx-1">{filteredDealers.length}</Badge> Dealer{filteredDealers.length !== 1 ? 's' : ''}
          </p>
          {selectedState !== 'All States' && (
            <Badge variant="outline" className="gap-1">
              <Map className="w-3 h-3" />
              {selectedState}
            </Badge>
          )}
          {selectedDistrict !== 'All Districts' && (
            <Badge variant="outline" className="gap-1">
              <Building2 className="w-3 h-3" />
              {selectedDistrict}
            </Badge>
          )}
          {selectedType !== 'All Types' && (
            <Badge variant="outline" className="gap-1">
              <Award className="w-3 h-3" />
              {selectedType}
            </Badge>
          )}
        </div>
      </section>

      {/* Dealers Grid */}
      <section>
        {filteredDealers.length === 0 ? (
          <ModernCard variant="elevated" className="p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-gray-700 mb-2">No Dealers Found</h4>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <ModernButton
              variant="outline"
              size="md"
              icon={<Filter className="w-4 h-4" />}
              iconPosition="left"
              onClick={clearFilters}
            >
              Clear Filters
            </ModernButton>
          </ModernCard>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer, idx) => (
              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ModernCard variant="elevated" className="overflow-hidden h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={dealer.image}
                      alt={dealer.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-white/95 backdrop-blur-sm text-trees-primary border-0 hover:bg-white">
                        {dealer.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white mb-1 line-clamp-2">
                        {dealer.name}
                      </h4>
                      <div className="flex items-center gap-1 text-white/90 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{dealer.city}, {dealer.district}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-trees-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{dealer.address}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <a
                      href={`tel:${dealer.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-trees-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-trees-primary" />
                      <span>{dealer.phone}</span>
                    </a>
                    <a
                      href={`mailto:${dealer.email}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-trees-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-trees-primary" />
                      <span className="truncate">{dealer.email}</span>
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-trees-primary" />
                      <span>{dealer.hours}</span>
                    </div>
                  </div>

                  {/* Rating and Type Badge */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">{dealer.rating}</span>
                      <span className="text-xs text-gray-500">rating</span>
                    </div>
                    <Badge variant="outline" className="gap-1">
                      <Award className="w-3 h-3" />
                      {dealer.type}
                    </Badge>
                  </div>
                </div>
              </ModernCard>
            </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Become a Dealer - Comprehensive Section */}
      <section className="space-y-12">
        <ModernSectionHeader
          badge="Grow With Us"
          badgeIcon={Award}
          title="Become Our Authorized Dealer"
          subtitle="Grow with one of India’s fastest-growing plywood brands. Join us as an authorized dealer and build a strong, profitable business with full support from our team."
        />

        {/* Dealer Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: 'Exclusive Product Access',
              desc: 'Get our full premium product range with special dealer pricing and healthy margins.',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Phone,
              title: 'Dedicated Support Team',
              desc: 'A relationship manager will assist you with sales, product guidance, and business growth.',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Map,
              title: 'Marketing & Display Support',
              desc: 'Receive display samples, branding materials, digital content, and co-branding opportunities to help you attract more customers.',
              color: 'from-purple-500 to-purple-600'
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ModernCard variant="elevated" className="p-6 text-center h-full group hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </ModernCard>
            </motion.div>
          ))}
        </div>

        {/* Requirements */}
        <ModernCard variant="elevated" className="p-8">
          <h3 className="text-trees-secondary mb-6">Dealer Eligibility</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-800 mb-3">Business Requirements:</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>GST-registered business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Minimum 500 sq. ft. showroom or storage space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Experience in plywood/timber preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Ability to maintain regular inventory.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-800 mb-3">Benefits You’ll Receive</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Complete sample display kit (50+ samples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Marketing and branding support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Product training and technical guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Competitive pricing, incentives, and growth opportunities.</span>
                </li>
              </ul>
            </div>
          </div>
        </ModernCard>

        {/* CTA Buttons */}
        <ModernCard variant="elevated" className="p-12 text-center bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-trees-primary" />
              <span className="text-trees-primary font-semibold text-sm">For Dealership Enquiries</span>
            </div>
            <h2 className="text-trees-secondary mb-4">
               Want to Join Our Dealer Network?
            </h2>
            <p className="text-gray-600 mb-8">
              Get in touch with our partnership team to know the process, requirements, and next steps.
              <br />
              <strong className="text-trees-primary">Note:</strong> If you need product samples, please visit our{' '}
              <button 
                onClick={() => onNavigate('sample-request')}
                className="text-trees-primary font-semibold underline hover:text-trees-secondary"
              >
                Sample Request Page
              </button>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton 
                  variant="primary" 
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Partnership Team
                </ModernButton>
              </MagneticButton>
             
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We’ll get back to you within 24–48 hours.
            </p>
          </div>
        </ModernCard>
      </section>


    </PageContainer>

    {/* Dealer Network Statistics */}
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
          <h2 className="text-white mb-4">Nationwide Dealer Reach</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Trusted by customers across India for quality products and reliable service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: `${dealers.length}+`, label: 'Authorised Dealers', icon: Users },
            { value: '11', label: 'States We Serve', icon: Globe },
            { value: `${avgRating}/5`, label: 'Customer Rating', icon: Star },
            { value: '23+', label: ' Districts Covered.', icon: Building2 },
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

    
    {/* Dealer Tips */}
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ModernSectionHeader
          badge="Useful Tips"
          badgeIcon={Lightbulb}
          title="Make Your Dealer Visit Easier"
          subtitle="A few quick tips to help you get the most out of your visit:"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: 'Call Before You Go',
              desc: 'Check stock availability and timings to avoid waiting.',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Download,
              title: 'Carry Your Measurements',
              desc: 'Share your room or project sizes for accurate suggestions.',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: CheckCircle,
              title: 'Ask for Samples',
              desc: 'Take sample pieces to compare quality, finish, and colour.',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Award,
              title: 'Check Certifications',
              desc: 'Confirm that the dealer is authorized and the products are genuine.',
              color: 'from-orange-500 to-orange-600'
            },
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <ModernCard variant="elevated" className="p-6 h-full group hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">{tip.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{tip.desc}</p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
