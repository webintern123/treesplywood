import React, { useState } from 'react';
import { 
  Download, FileText, Book, Award, Video, Image as ImageIcon, Search, 
  ChevronRight, Target, Lightbulb, CheckCircle2, Users, Star, HelpCircle,
  MessageSquare, Mail, Sparkles, TrendingUp, Clock, Calendar, FolderOpen,
  Shield, Zap
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';


interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: 'catalog' | 'technical' | 'certification' | 'brochure' | 'installation' | 'video';
  fileType: 'PDF' | 'VIDEO' | 'ZIP';
  size: string;
  date: string;
  downloads: number;
  featured?: boolean;
  popular?: boolean;
  recent?: boolean;
  fileUrl: string; // <-- add this line
}


const downloadItems: DownloadItem[] = [
  {
    id: '1',
    title: 'Complete 2024 Product Catalog',
    description: 'Comprehensive catalog featuring all our plywood products with specifications and applications.',
    category: 'catalog',
    fileType: 'PDF',
    size: '12.5 MB',
    date: '2024-11-01',
    downloads: 2456,
    featured: true,
    popular: true,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '2',
    title: 'Bhima Marine Grade – Technical Sheet',
    description: 'Detailed technical specifications, test results, and performance data for Bhima marine grade plywood.',
    category: 'technical',
    fileType: 'PDF',
    size: '2.3 MB',
    date: '2024-10-28',
    downloads: 1823,
    popular: true,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '3',
    title: 'BWP Grade – Installation Guide',
    description: 'Clear step-by-step instructions for installing BWP plywood in kitchens, bathrooms, and wet areas.',
    category: 'installation',
    fileType: 'PDF',
    size: '5.7 MB',
    date: '2024-10-25',
    downloads: 1456,
    featured: true,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '4',
    title: 'IS 303 & IS 710 Certifications',
    description: 'Official documents showing compliance with Indian Standards for quality and safety.',
    category: 'certification',
    fileType: 'PDF',
    size: '3.2 MB',
    date: '2024-10-20',
    downloads: 987,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '5',
    title: 'Complete Product Range – Brochure',
    description: 'Overview of all plywood and door products with quick specs and application ideas.',
    category: 'brochure',
    fileType: 'PDF',
    size: '8.4 MB',
    date: '2024-10-15',
    downloads: 2134,
    popular: true,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf'

  },
  {
    id: '6',
    title: 'Agni Fire-Retardant Plywood – Technical Sheet',
    description: 'Fire-safety details, IS:5509 test results, and full specifications for Agni FR plywood.',
    category: 'technical',
    fileType: 'PDF',
    size: '4.1 MB',
    date: '2024-10-10',
    downloads: 876,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '7',
    title: 'Samrat Premium Plywood – Brochure',
    description: 'Premium range details, features, and uses. Comes with a 30-year warranty overview.',
    category: 'brochure',
    fileType: 'PDF',
    size: '6.8 MB',
    date: '2024-10-05',
    downloads: 654,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '8',
    title: 'FSC Certification Documents',
    description: 'Proof of responsible, sustainable timber sourcing.',
    category: 'certification',
    fileType: 'PDF',
    size: '2.9 MB',
    date: '2024-10-01',
    downloads: 543,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '9',
    title: 'Installation Videos – Complete Pack',
    description: 'A collection of installation tutorials for different plywood applications.',
    category: 'video',
    fileType: 'ZIP',
    size: '245 MB',
    date: '2024-09-28',
    downloads: 1245,
    featured: true,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '10',
    title: 'Product Comparison Chart',
    description: 'A simple side-by-side comparison of all plywood grades for quick decision-making.',
    category: 'technical',
    fileType: 'PDF',
    size: '1.8 MB',
    date: '2024-09-25',
    downloads: 1567,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '11',
    title: 'Ananta Structural Plywood – Technical Guide',
    description: 'Full technical guide for Ananta plywood, including 15-layer construction details.',
    category: 'technical',
    fileType: 'PDF',
    size: '4.2 MB',
    date: '2024-09-20',
    downloads: 2089,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '12',
    title: 'Vajra Plywood – Brochure',
    description: 'Features, benefits, and warranty details for the tough and durable Vajra range.',
    category: 'brochure',
    fileType: 'PDF',
    size: '5.6 MB',
    date: '2024-09-15',
    downloads: 876,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '13',
    title: 'Ujval Interior Plywood – Catalog',
    description: 'All details for Ujval IS:303 interior plywood with suggested applications.',
    category: 'catalog',
    fileType: 'PDF',
    size: '7.8 MB',
    date: '2024-09-10',
    downloads: 1234,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '14',
    title: 'Flush Doors & Block Board – Specifications',
    description: 'Specs and details for flush doors and block board products.',
    category: 'technical',
    fileType: 'PDF',
    size: '3.9 MB',
    date: '2024-09-05',
    downloads: 987,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '15',
    title: 'Quality Assurance Manual',
    description: 'A complete look at our testing methods, quality checks, and control processes.',
    category: 'technical',
    fileType: 'PDF',
    size: '7.5 MB',
    date: '2024-09-01',
    downloads: 432,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '16',
    title: 'Environmental Policy & Sustainability Report',
    description: 'Our commitments, eco-friendly practices, and sustainability goals.',
    category: 'certification',
    fileType: 'PDF',
    size: '6.2 MB',
    date: '2024-11-04',
    downloads: 234,
    recent: true,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '17',
    title: 'Warranty Terms & Conditions',
    description: 'Clear details on warranty coverage and how to file a claim.',
    category: 'technical',
    fileType: 'PDF',
    size: '2.1 MB',
    date: '2024-11-03',
    downloads: 567,
    recent: true,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '18',
    title: 'Kitchen & Bathroom Application Guide',
    description: 'Practical tips for using plywood safely in moisture-heavy areas.',
    category: 'installation',
    fileType: 'PDF',
    size: '4.8 MB',
    date: '2024-11-02',
    downloads: 789,
    recent: true,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  }
];

const categoryIcons = {
  catalog: Book,
  technical: FileText,
  certification: Award,
  brochure: ImageIcon,
  installation: Download,
  video: Video
};

const categoryColors = {
  catalog: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  technical: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  certification: 'bg-green-500/10 text-green-600 border-green-500/20',
  brochure: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  installation: 'bg-trees-primary/10 text-trees-primary border-trees-primary/20',
  video: 'bg-red-500/10 text-red-600 border-red-500/20'
};

interface DownloadsPageProps {
  onNavigate?: (page: string) => void;
}

export default function DownloadsPage({ onNavigate }: DownloadsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = downloadItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularDownloads = downloadItems.filter(item => item.popular).slice(0, 4);
  const recentDownloads = downloadItems.filter(item => item.recent).slice(0, 3);
  const featuredDownloads = downloadItems.filter(item => item.featured);

  const handleDownload = (item: DownloadItem) => {
  const link = document.createElement('a');
  link.href = item.fileUrl;       // use the fileUrl you added
  link.download = item.title;     // this will be the downloaded file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
                  Download Center
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Downloads & Resources Center"
        subtitle="Your Go-To Library for All Product Info & Tree’s Documents"
        description="Find brochures, datasheets, specs, certificates, and helpful guides ready to download anytime to plan, compare, and build with confidence."
        image="https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dubG9hZCUyMGRvY3VtZW50cyUyMHBkZnxlbnwxfHx8fDE3NjIyMzYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Our Source Hub"
        badgeIcon={FolderOpen}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '18+', label: 'Files Available ' },
          { value: '20K+', label: 'Instant Downloads ' },
          { value: 'Free', label: 'Access to All Resources ' },
        ]}
      />

      {/* Why Use Download Center Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Download & How Useful?"
            badgeIcon={Target}
            title="Everything You’re Looking For, Instantly Accessible"
            subtitle="Get quick access to brochures, product details, and useful guides in one place."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Quick Access ',
                desc: 'Download brochures & guides anytime without waiting in seconds.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Shield,
                title: 'Trusted Information ',
                desc: 'Verified documents like catalogs, specification sheets, & certifications.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: CheckCircle2,
                title: 'Latest Versions',
                desc: 'updated specs with new versions and compliance details the latest information.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Award,
                title: 'Presentation Ready ',
                desc: 'Clean, high-resolution PDFs for professional use, client work or project planning.',
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

      {/* Resource Categories Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Resource Library"
            badgeIcon={FolderOpen}
            title="Choose a Category"
            subtitle="We have gathered all documents in one place for quick access, so you can quickly browse and download."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Book,
                category: 'catalog',
                name: 'Product Catalogs',
                description: 'Complete list of all plywood and door products with features, specs, and applications.',
                color: 'from-blue-500 to-blue-600',
                count: downloadItems.filter(i => i.category === 'catalog').length
              },
              {
                icon: FileText,
                category: 'technical',
                name: 'Technical Datasheets',
                description: 'Detailed technical info, test results, and performance data.',
                color: 'from-purple-500 to-purple-600',
                count: downloadItems.filter(i => i.category === 'technical').length
              },
              {
                icon: Award,
                category: 'certification',
                name: 'Certifications',
                description: 'Verified Quality approvals and standard Safety & compliance documents.',
                color: 'from-green-500 to-green-600',
                count: downloadItems.filter(i => i.category === 'certification').length
              },
              {
                icon: ImageIcon,
                category: 'brochure',
                name: 'Product Brochures',
                description: 'Quick highlights, benefits, and product overviews.',
                color: 'from-orange-500 to-orange-600',
                count: downloadItems.filter(i => i.category === 'brochure').length
              },
              {
                icon: Download,
                category: 'installation',
                name: 'Installation Guides',
                description: 'Clear & simple steps for smooth installation.',
                color: 'from-amber-500 to-amber-600',
                count: downloadItems.filter(i => i.category === 'installation').length
              },
              {
                icon: Video,
                category: 'video',
                name: 'Video Resources',
                description: 'Helpful tutorials, videos, practical demos, and walkthroughs to help you understand better',
                color: 'from-red-500 to-red-600',
                count: downloadItems.filter(i => i.category === 'video').length
              },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <ModernCard 
                  variant="elevated" 
                  className="p-6 h-full cursor-pointer group hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedCategory(cat.category)}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-trees-primary mb-2 group-hover:text-trees-secondary transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs font-semibold text-gray-500">
                      {cat.count} {cat.count === 1 ? 'Resource' : 'Files-Download'}
                    </span>
                    <ChevronRight className="w-4 h-4 text-trees-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageContainer className="space-y-20">
        {/* Search and Filter Section */}
        <section>
          <ModernSectionHeader
            badge="Browse Resources Library"
            badgeIcon={Search}
            title="Search & Filter Easily"
            subtitle="Use the search bar or filters to quickly find the documents you need."
          />

          <ModernCard variant="elevated" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title or keyword…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-white border-gray-200"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 bg-white border-gray-200">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="catalog">Product Catalogs</SelectItem>
                  <SelectItem value="technical">Technical Datasheets</SelectItem>
                  <SelectItem value="certification">Certifications</SelectItem>
                  <SelectItem value="brochure">Brochures</SelectItem>
                  <SelectItem value="installation">Installation Guides</SelectItem>
                  <SelectItem value="video">Video Resources</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-trees-primary">{filteredItems.length}</span> of {downloadItems.length} files
              </p>
              <div className="flex gap-2 flex-wrap">
                {Object.entries(categoryIcons).map(([category, Icon]) => {
                  const count = downloadItems.filter(i => i.category === category).length;
                  return (
                    <Badge
                      key={category}
                      variant="outline"
                      className={`cursor-pointer transition-all ${
                        selectedCategory === category ? categoryColors[category as keyof typeof categoryColors] : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category === selectedCategory ? 'all' : category)}
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
                    </Badge>
                  );
                })}
              </div>
            </div>
          </ModernCard>
        </section>

        {/* Popular Downloads */}
        {selectedCategory === 'all' && popularDownloads.length > 0 && (
          <section>
  <ModernSectionHeader
    badge="Most Downloaded"
    badgeIcon={TrendingUp}
    title="Top Picks"
    subtitle="Here are the documents people download the most - quick, helpful, and trusted by professionals."
  />

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
 {/* changed to 2 columns on large */}
    {popularDownloads.map((item, idx) => {
      const Icon = categoryIcons[item.category];
      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <ModernCard variant="elevated" className="p-8 h-full min-w-[300px] group hover:shadow-2xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${categoryColors[item.category]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-trees-primary/10 text-trees-primary border-trees-primary/20 text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            </div>
            <h4 className="text-xl text-trees-primary mb-3 line-clamp-2 group-hover:text-trees-secondary transition-colors">
              {item.title}
            </h4>
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">{item.fileType}</span>
              <span>{item.size}</span>
            </div>
            <div className="flex gap-3">
              <ModernButton
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
                onClick={() => handleDownload(item)}
                className="flex-1"
              >
                Download
              </ModernButton>
              <ModernButton
                variant="outline"
                size="sm"
                icon={<FileText className="w-4 h-4" />}
                onClick={() => window.open(item.fileUrl, '_blank')}
                className="flex-1"
              >
                View
              </ModernButton>
            </div>
          </ModernCard>
        </motion.div>
      );
    })}
  </div>
</section>

        )}

        {/* Recent Additions */}
        {selectedCategory === 'all' && recentDownloads.length > 0 && (
          <section>
            <ModernSectionHeader
              badge="Recently Added"
              badgeIcon={Clock}
              title="Latest Resources & Updates"
              subtitle="New documents with updated info, guides, and policies."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {recentDownloads.map((item, idx) => {
                const Icon = categoryIcons[item.category];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <ModernCard variant="elevated" className="p-6 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-2.5 rounded-lg ${categoryColors[item.category]}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-trees-primary mb-1 line-clamp-2">{item.title}</h4>
                          <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                            <Sparkles className="w-3 h-3 mr-1" />
                            New
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.description}</p>
                      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-gray-100 rounded">{item.fileType}</span>
                        <span>{item.size}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        icon={<Download className="w-4 h-4" />}
                        onClick={() => handleDownload(item)}
                        className="w-full"
                      >
                        Download
                      </ModernButton>
                    </ModernCard>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* All Downloads Grid */}
        <section>
          <ModernSectionHeader
            badge={selectedCategory === 'all' ? 'Complete Resources at Your Fingertips' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            badgeIcon={FolderOpen}
            title={selectedCategory === 'all' ? 'Download What You Need — Anytime' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Resources`}
            subtitle={selectedCategory === 'all' 
              ? 'See our full collection of brochures, technical sheets, certifications, and guides. All documents are easy to download and ready to use.'
              : `All available ${selectedCategory} resources`
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => {
              const Icon = categoryIcons[item.category];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <ModernCard variant="outlined" className="p-6 h-full group hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2.5 rounded-lg ${categoryColors[item.category]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-trees-secondary mb-1 group-hover:text-trees-primary transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <Badge variant="outline" className={`text-xs ${categoryColors[item.category]}`}>
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-gray-100 rounded">{item.fileType}</span>
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>{item.downloads} DL</span>
                    </div>
                    <div className="flex gap-2">
  <ModernButton
    variant="primary"
    size="sm"
    icon={<Download className="w-4 h-4" />}
    onClick={() => handleDownload(item)}
    className="flex-1"
  >
    Download
  </ModernButton>

  <ModernButton
    variant="outline"
    size="sm"
    icon={<FileText className="w-4 h-4" />}
    onClick={() => window.open(item.fileUrl, '_blank')}
    className="flex-1"
  >
    View
  </ModernButton>
</div>

                  </ModernCard>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500 text-sm mb-6">Try adjusting your search or filter criteria</p>
              <ModernButton
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </ModernButton>
            </div>
          )}
        </section>
      </PageContainer>

      {/* Download Statistics */}
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
            <h2 className="text-white mb-4">Our Highlights</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our documents help builders, architects, and homeowners find the right information—fast and hassle-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '18+', label: 'helpful documents', icon: FolderOpen },
              { value: '20,000+', label: 'downloads by industry experts', icon: Download },
              { value: '6', label: 'easy-to-browse categories', icon: Book },
              { value: '100%', label: 'free for everyone', icon: Star },
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
            title="What Our Partners & Experts Say"
            subtitle="Real Designers, builders, and architects share their experience with Tree’s Plywood."
          />
          <Testimonials />
        </div>
      </section>

      {/* Downloads FAQ */}
      <section className="section-padding bg-white">
        <PageContainer>
          <ModernSectionHeader
            badge="Download Center FAQ"
            badgeIcon={HelpCircle}
            title="Quick Answers to Common Questions"
            subtitle="Common questions about accessing and using our resource library"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="access" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                   All the downloads are free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes. Every brochure, catalog, and guide in our Download Center is completely free. No sign-ups, no forms, just click and download.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How frequently do you update the documents?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We update our resources regularly so you always get the latest information.
Product catalogs are refreshed every few months, technical sheets are updated when specifications change, and new certificates are added as soon as they’re issued.
 

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formats" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How many file formats are available to Download?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ●	Most documents are available as  PDF files that work on any device.<br></br>
●	Some video guides may come as ZIP files.<br></br>
●	PDFs are high quality and can be printed without any issues.<br></br>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="usage" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Is these documents are Sharable with my team or clients?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                 ●	Yes, you’re free to share our documents for your project or business use.<br></br>
●	Architects, designers, and contractors often use them during presentations or planning.  <br></br>
●	We only request that the files are not republished online without permission.  <br></br>

                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can you provide customised documents for a project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ●	Yes, If you need specific technical details, custom specs, or project-based documents, our team can prepare them for you. <br></br>
●	Just share your requirements and we’ll help you out.  <br></br>

                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Need help finding resources?</p>
              <ModernButton
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
                onClick={() => onNavigate?.('contact')}
              >
                Contact Support Team
              </ModernButton>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Newsletter Subscription for Resource Updates */}
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
              <span className="text-white font-semibold text-sm">Get Resources</span>
            </div>
            <h2 className="text-white mb-6">Never Miss an Update</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              We’ll let you know whenever new catalogs, datasheets, or resources are added.
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
                  Notify Me
                </ModernButton>
              </MagneticButton>
            </div>
            <p className="text-sm text-white/70">
              Join 5,000+ professionals | Easy updates | Unsubscribe anytime
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
                <span className="text-trees-primary font-semibold text-sm">Custom Project Documents</span>
              </div>
              <h2 className="text-trees-secondary mb-6">Not there What You are Looking For?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Tell us what you’re working on, and we’ll create the right document for you. From product details to technical notes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="primary"
                    size="xl"
                    icon={<Mail className="w-6 h-6" />}
                    onClick={() => onNavigate?.('contact')}
                  >
                    Request Custom Document 
                  </ModernButton>
                </MagneticButton>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<MessageSquare className="w-6 h-6" />}
                  onClick={() => onNavigate?.('professionals')}
                >
                  Speak With A&D Team


                </ModernButton>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
