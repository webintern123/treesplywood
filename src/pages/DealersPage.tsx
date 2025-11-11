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
    address: 'Plot 3-538, 1st floor, Sri Krishna Heights, 100 feet road, Ayyappa Society, Madhapur',
    phone: '+91 9091744744',
    email: 'hyderabad@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Secunderabad Premium Woods',
    city: 'Secunderabad',
    district: 'Hyderabad',
    state: 'Telangana',
    address: 'Plot 45, SD Road, Near Paradise Circle, Secunderabad',
    phone: '+91 9876543211',
    email: 'secunderabad@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Warangal Timber Mart',
    city: 'Warangal',
    district: 'Warangal',
    state: 'Telangana',
    address: '12-3-456, Main Road, Hanamkonda, Warangal',
    phone: '+91 9845123457',
    email: 'warangal@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },

  // Andhra Pradesh
  {
    id: '4',
    name: 'Visakhapatnam Elite Plywood',
    city: 'Visakhapatnam',
    district: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    address: 'Plot 67, Dwarakanagar Main Road, Visakhapatnam',
    phone: '+91 9876543212',
    email: 'vizag@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Vijayawada Premium Woods',
    city: 'Vijayawada',
    district: 'Vijayawada',
    state: 'Andhra Pradesh',
    address: '45-2, MG Road, Labbipet, Vijayawada',
    phone: '+91 9845123458',
    email: 'vijayawada@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Tirupati Timber Solutions',
    city: 'Tirupati',
    district: 'Tirupati',
    state: 'Andhra Pradesh',
    address: '234, Renigunta Road, Near Railway Station, Tirupati',
    phone: '+91 9876543213',
    email: 'tirupati@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Guntur Wood Industries',
    city: 'Guntur',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    address: '56, Arundalpet Main Road, Guntur',
    phone: '+91 9845123459',
    email: 'guntur@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?w=600&h=400&fit=crop',
  },

  // Maharashtra
  {
    id: '8',
    name: 'Mumbai Premium Plywood Center',
    city: 'Malad',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    address: 'Shop 12-15, Malad Industrial Estate, Link Road, Malad West',
    phone: '+91 9876543210',
    email: 'mumbai@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    id: '9',
    name: 'Pune Premium Woods',
    city: 'Pimpri-Chinchwad',
    district: 'Pune',
    state: 'Maharashtra',
    address: '56, Pimpri-Chinchwad, MIDC Industrial Area, Pune',
    phone: '+91 9822345678',
    email: 'pune@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },
  {
    id: '10',
    name: 'Thane Wood Mart',
    city: 'Thane',
    district: 'Thane',
    state: 'Maharashtra',
    address: '89, Ghodbunder Road, Near Teen Haath Naka, Thane West',
    phone: '+91 9876543214',
    email: 'thane@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },

  // Karnataka
  {
    id: '11',
    name: 'Bangalore Wood Solutions',
    city: 'Peenya',
    district: 'Bangalore Urban',
    state: 'Karnataka',
    address: '45/2, Peenya Industrial Area, 4th Phase, Bangalore',
    phone: '+91 9845123456',
    email: 'bangalore@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:30 PM',
    type: 'Distributor',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },
  {
    id: '12',
    name: 'Mysore Premium Plywood',
    city: 'Mysore',
    district: 'Mysore',
    state: 'Karnataka',
    address: '123, KRS Road, Metagalli, Mysore',
    phone: '+91 9845123460',
    email: 'mysore@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // Tamil Nadu
  {
    id: '13',
    name: 'Chennai Elite Plywood Hub',
    city: 'Mount Road',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: '789, Anna Salai, Mount Road, Chennai',
    phone: '+91 9841234567',
    email: 'chennai@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
  },
  {
    id: '14',
    name: 'Coimbatore Wood Industries',
    city: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    address: '456, Avinashi Road, Peelamedu, Coimbatore',
    phone: '+91 9841234568',
    email: 'coimbatore@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },

  // Delhi
  {
    id: '15',
    name: 'Delhi NCR Timber Mart',
    city: 'Rohini',
    district: 'North Delhi',
    state: 'Delhi',
    address: 'Plot 234, Sector 8, Rohini Industrial Area, Delhi',
    phone: '+91 9810123456',
    email: 'delhi@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },
  {
    id: '16',
    name: 'South Delhi Premium Woods',
    city: 'Saket',
    district: 'South Delhi',
    state: 'Delhi',
    address: '78, Press Enclave Road, Saket, New Delhi',
    phone: '+91 9810123457',
    email: 'southdelhi@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop',
  },

  // Gujarat
  {
    id: '17',
    name: 'Ahmedabad Plywood Depot',
    city: 'Naroda',
    district: 'Ahmedabad',
    state: 'Gujarat',
    address: '78, Naroda Industrial Estate, Ahmedabad',
    phone: '+91 9825678901',
    email: 'ahmedabad@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    id: '18',
    name: 'Surat Timber Solutions',
    city: 'Surat',
    district: 'Surat',
    state: 'Gujarat',
    address: '234, Udhna Industrial Area, Surat',
    phone: '+91 9825678902',
    email: 'surat@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // West Bengal
  {
    id: '19',
    name: 'Kolkata Wood Industry',
    city: 'Park Street',
    district: 'Kolkata',
    state: 'West Bengal',
    address: '12/A, Park Street Area, Kolkata',
    phone: '+91 9831234567',
    email: 'kolkata@thetreesplywood.com',
    hours: 'Mon-Sat: 9:30 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?w=600&h=400&fit=crop',
  },

  // Rajasthan
  {
    id: '20',
    name: 'Jaipur Timber World',
    city: 'Sitapura',
    district: 'Jaipur',
    state: 'Rajasthan',
    address: '234, Sitapura Industrial Area, Jaipur',
    phone: '+91 9829123456',
    email: 'jaipur@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Authorized Dealer',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=600&h=400&fit=crop',
  },

  // Uttar Pradesh
  {
    id: '21',
    name: 'Noida Premium Plywood',
    city: 'Noida',
    district: 'Noida',
    state: 'Uttar Pradesh',
    address: 'Plot 56, Sector 63, Noida',
    phone: '+91 9876543215',
    email: 'noida@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    type: 'Premium Partner',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: '22',
    name: 'Lucknow Wood Mart',
    city: 'Lucknow',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    address: '789, Aliganj Industrial Area, Lucknow',
    phone: '+91 9876543216',
    email: 'lucknow@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:30 PM',
    type: 'Authorized Dealer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },

  // Madhya Pradesh
  {
    id: '23',
    name: 'Indore Timber Hub',
    city: 'Indore',
    district: 'Indore',
    state: 'Madhya Pradesh',
    address: '123, Sanwer Road Industrial Area, Indore',
    phone: '+91 9876543217',
    email: 'indore@thetreesplywood.com',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    type: 'Distributor',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
  },
  {
    id: '24',
    name: 'Bhopal Premium Woods',
    city: 'Bhopal',
    district: 'Bhopal',
    state: 'Madhya Pradesh',
    address: '456, Govindpura Industrial Area, Bhopal',
    phone: '+91 9876543218',
    email: 'bhopal@thetreesplywood.com',
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
        title="Find Your Nearest Dealer"
        subtitle="Advanced Dealer Locator"
        description="Search dealers by state, district, and type across India. Connect with our authorized dealers for premium plywood solutions and expert consultation."
        image="https://images.unsplash.com/photo-1708464679987-db85ae0f60d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZGVhbGVyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYyMjM0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="24+ Locations"
        badgeIcon={Map}
        height="lg"
        overlayOpacity="medium"
        stats={[
          { value: `${dealers.length}+`, label: 'Dealers' },
          { value: `${totalStates}`, label: 'States' },
          { value: `${totalDistricts}+`, label: 'Districts' },
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
                Contact Support
              </ModernButton>
            </MagneticButton>
          </div>
        }
      />

      {/* How to Find a Dealer Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Quick Guide"
            badgeIcon={Lightbulb}
            title="How to Find Your Nearest Dealer"
            subtitle="Advanced filtering system to help you locate dealers quickly"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: Map,
                title: 'Select State',
                desc: 'Choose your state from 11+ states across India',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                icon: Building2,
                title: 'Choose District',
                desc: 'Filter by district for more precise results',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '3',
                icon: Filter,
                title: 'Filter by Type',
                desc: 'Select dealer type: Partner, Dealer, or Distributor',
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '4',
                icon: Phone,
                title: 'Connect & Visit',
                desc: 'View details and contact for consultation',
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
          badge="Our Network"
          badgeIcon={Award}
          title="Why Choose Our Authorized Dealers"
          subtitle="Trusted partners delivering quality products and expert service across India"
        />

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Award,
              title: 'Certified Partners',
              desc: 'All dealers are authorized and trained by us',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: CheckCircle,
              title: 'Quality Assured',
              desc: 'Genuine products with proper documentation',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Users,
              title: 'Expert Guidance',
              desc: 'Knowledgeable staff for product consultation',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Globe,
              title: 'Pan-India Coverage',
              desc: `${dealers.length}+ locations across ${totalStates} states`,
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
          title="Find Dealers with Advanced Filters"
          subtitle="Search by location, filter by state, district, and dealer type for precise results"
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
            Showing <Badge variant="secondary" className="mx-1">{filteredDealers.length}</Badge> dealer{filteredDealers.length !== 1 ? 's' : ''}
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
          badge="Partnership Opportunity"
          badgeIcon={Award}
          title="Become an Authorized Dealer"
          subtitle="Join India's fastest growing premium plywood brand and build a profitable business with comprehensive support"
        />

        {/* Dealer Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: 'Exclusive Products',
              desc: 'Access to premium product range with authorized dealer pricing and margins',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Phone,
              title: 'Dedicated Support',
              desc: 'Assigned relationship manager for business development and technical guidance',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Map,
              title: 'Marketing Support',
              desc: 'Display samples, marketing collateral, digital assets, and co-branding opportunities',
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
          <h3 className="text-trees-secondary mb-6">Dealer Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-800 mb-3">Business Requirements:</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Established business with GST registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Minimum 500 sq ft showroom/warehouse space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Experience in plywood/timber industry preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Financial capability for inventory investment</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-800 mb-3">What You'll Get:</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Complete display sample kit (50+ samples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Marketing materials and branding support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Technical training and product knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-trees-primary mt-1">✓</span>
                  <span>Competitive dealer pricing and incentives</span>
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
              <span className="text-trees-primary font-semibold text-sm">For Dealership Inquiries</span>
            </div>
            <h2 className="text-trees-secondary mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact our partnership team to discuss dealership opportunities, requirements, and next steps.
              <br />
              <strong className="text-trees-primary">Note:</strong> For customer sample requests, please visit our{' '}
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
              <ModernButton 
                variant="outline" 
                size="lg"
                icon={<Mail className="w-5 h-5" />}
                iconPosition="left"
              >
                Email Partnership
              </ModernButton>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Our team will contact you within 24-48 hours to discuss partnership details
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
          <h2 className="text-white mb-4">Our Dealer Network Impact</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Trusted by thousands across India for quality products and expert service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: `${dealers.length}+`, label: 'Active Dealers', icon: Users },
            { value: `${totalStates}`, label: 'States Covered', icon: Globe },
            { value: `${avgRating}/5`, label: 'Avg Rating', icon: Star },
            { value: `${totalDistricts}+`, label: 'Districts', icon: Building2 },
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
          badge="Customer Experiences"
          badgeIcon={Users}
          title="What Customers Say About Our Dealers"
          subtitle="Real feedback from customers who visited our authorized dealers"
        />
        
        <div className="mt-12">
          <Testimonials />
        </div>
      </div>
    </section>

    {/* Dealer Tips */}
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ModernSectionHeader
          badge="Pro Tips"
          badgeIcon={Lightbulb}
          title="Tips for Visiting Dealers"
          subtitle="Make the most of your dealer visit with these helpful suggestions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: 'Call Ahead',
              desc: 'Contact the dealer before visiting to confirm product availability and timing',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Download,
              title: 'Bring Measurements',
              desc: 'Have your project dimensions ready for accurate quantity calculations',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: CheckCircle,
              title: 'Ask for Samples',
              desc: 'Request product samples to check quality and match your requirements',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Award,
              title: 'Verify Certification',
              desc: 'Check dealer authorization certificate and product certifications',
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
