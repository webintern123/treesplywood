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
    title: 'Complete Product Catalog 2024',
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
    title: 'Bhima Marine Grade Technical Datasheet',
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
    title: 'BWP Grade Installation Guide',
    description: 'Step-by-step installation instructions for Boiling Water Proof plywood applications.',
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
    description: 'Official certification documents proving compliance with Indian Standards.',
    category: 'certification',
    fileType: 'PDF',
    size: '3.2 MB',
    date: '2024-10-20',
    downloads: 987,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '5',
    title: 'Complete Product Range Brochure',
    description: 'Marketing brochure featuring all plywood and door products with specifications.',
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
    title: 'Agni Fire Retardant Plywood Technical Sheet',
    description: 'Technical specifications and fire safety test results (IS:5509) for Agni fire retardant plywood.',
    category: 'technical',
    fileType: 'PDF',
    size: '4.1 MB',
    date: '2024-10-10',
    downloads: 876,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '7',
    title: 'Samrat Premium Plywood Brochure',
    description: 'Premium range specifications and applications for Samrat plywood with 30-year warranty.',
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
    description: 'Forest Stewardship Council certification proving sustainable sourcing.',
    category: 'certification',
    fileType: 'PDF',
    size: '2.9 MB',
    date: '2024-10-01',
    downloads: 543,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '9',
    title: 'Installation Video Collection',
    description: 'Complete video tutorials for installing various types of plywood.',
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
    description: 'Side-by-side comparison of all plywood grades with specifications.',
    category: 'technical',
    fileType: 'PDF',
    size: '1.8 MB',
    date: '2024-09-25',
    downloads: 1567,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '11',
    title: 'Ananta Structural Plywood Technical Guide',
    description: 'Complete technical specifications for Ananta structural plywood with 15-layer construction.',
    category: 'technical',
    fileType: 'PDF',
    size: '4.2 MB',
    date: '2024-09-20',
    downloads: 2089,
    fileUrl: '/downloads/Plywood Thickness sheet.docx' 
  },
  {
    id: '12',
    title: 'Vajra Resilient Plywood Brochure',
    description: 'Comprehensive guide for Vajra unbreakable plywood with 20-year warranty.',
    category: 'brochure',
    fileType: 'PDF',
    size: '5.6 MB',
    date: '2024-09-15',
    downloads: 876,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '13',
    title: 'Ujval Interior Plywood Catalog',
    description: 'Detailed catalog for Ujval IS:303 grade interior plywood applications.',
    category: 'catalog',
    fileType: 'PDF',
    size: '7.8 MB',
    date: '2024-09-10',
    downloads: 1234,
    fileUrl: '/downloads/E-Catalogue-Archidply-Plywood-Company.pdf' 
  },
  {
    id: '14',
    title: 'Flush Doors & Block Board Specifications',
    description: 'Technical specifications for our flush doors and block board core panels.',
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
    description: 'Our comprehensive quality control processes and testing procedures.',
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
    description: 'Detailed report on our sustainability initiatives and environmental commitments.',
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
    description: 'Complete warranty information for all product ranges with claim procedures.',
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
    description: 'Best practices for using plywood in high-moisture environments.',
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
        title="Downloads & Resources"
        subtitle="Complete Resource Library"
        description="Access our comprehensive library of product catalogs, technical datasheets, certifications, installation guides, and video resources - all in one place."
        image="https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dubG9hZCUyMGRvY3VtZW50cyUyMHBkZnxlbnwxfHx8fDE3NjIyMzYwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Resource Center"
        badgeIcon={FolderOpen}
        height="md"
        overlayOpacity="medium"
        stats={[
          { value: '18+', label: 'Resources Available' },
          { value: '20K+', label: 'Total Downloads' },
          { value: 'Free', label: 'All Resources' },
        ]}
      />

      {/* Why Use Download Center Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Why Download?"
            badgeIcon={Target}
            title="Everything You Need at Your Fingertips"
            subtitle="Access comprehensive product information, technical specifications, and guidance documents instantly"
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Instant Access',
                desc: 'Download product catalogs, specs, and guides 24/7 without waiting',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Shield,
                title: 'Official Documents',
                desc: 'Verified certifications and authentic technical documentation',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: CheckCircle2,
                title: 'Always Updated',
                desc: 'Latest versions with current specifications and compliance info',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Award,
                title: 'Professional Quality',
                desc: 'High-resolution PDFs perfect for presentations and proposals',
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
            badge="Resource Types"
            badgeIcon={FolderOpen}
            title="Browse by Category"
            subtitle="Our comprehensive resource library organized by type for easy access"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Book,
                category: 'catalog',
                name: 'Product Catalogs',
                description: 'Complete product range with specifications and applications',
                color: 'from-blue-500 to-blue-600',
                count: downloadItems.filter(i => i.category === 'catalog').length
              },
              {
                icon: FileText,
                category: 'technical',
                name: 'Technical Datasheets',
                description: 'Detailed specifications, test results, and performance data',
                color: 'from-purple-500 to-purple-600',
                count: downloadItems.filter(i => i.category === 'technical').length
              },
              {
                icon: Award,
                category: 'certification',
                name: 'Certifications',
                description: 'Official compliance documents and quality certifications',
                color: 'from-green-500 to-green-600',
                count: downloadItems.filter(i => i.category === 'certification').length
              },
              {
                icon: ImageIcon,
                category: 'brochure',
                name: 'Product Brochures',
                description: 'Marketing materials with product highlights and features',
                color: 'from-orange-500 to-orange-600',
                count: downloadItems.filter(i => i.category === 'brochure').length
              },
              {
                icon: Download,
                category: 'installation',
                name: 'Installation Guides',
                description: 'Step-by-step installation instructions and best practices',
                color: 'from-amber-500 to-amber-600',
                count: downloadItems.filter(i => i.category === 'installation').length
              },
              {
                icon: Video,
                category: 'video',
                name: 'Video Resources',
                description: 'Tutorial videos and installation demonstrations',
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
                      {cat.count} {cat.count === 1 ? 'Resource' : 'Resources'}
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
            badge="Find Resources"
            badgeIcon={Search}
            title="Search & Filter"
            subtitle="Quickly find the exact resources you need using our powerful search and filter tools"
          />

          <ModernCard variant="elevated" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title or description..."
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
                Showing <span className="font-semibold text-trees-primary">{filteredItems.length}</span> of {downloadItems.length} resources
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
              title="Popular Resources"
              subtitle="Our most frequently downloaded resources trusted by professionals"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDownloads.map((item, idx) => {
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
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 rounded-lg ${categoryColors[item.category]}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="bg-trees-primary/10 text-trees-primary border-trees-primary/20 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                      <h4 className="text-trees-primary mb-2 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-gray-100 rounded">{item.fileType}</span>
                        <span>{item.size}</span>
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
          </section>
        )}

        {/* Recent Additions */}
        {selectedCategory === 'all' && recentDownloads.length > 0 && (
          <section>
            <ModernSectionHeader
              badge="Just Added"
              badgeIcon={Clock}
              title="Recent Additions"
              subtitle="Newly added resources with the latest information and updates"
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
            badge={selectedCategory === 'all' ? 'All Resources' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            badgeIcon={FolderOpen}
            title={selectedCategory === 'all' ? 'Complete Resource Library' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Resources`}
            subtitle={selectedCategory === 'all' 
              ? 'Browse our complete collection of downloadable resources'
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
            <h2 className="text-white mb-4">Download Center Impact</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Trusted by thousands of professionals for accurate, comprehensive product information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '18+', label: 'Resources Available', icon: FolderOpen },
              { value: '20K+', label: 'Total Downloads', icon: Download },
              { value: '6', label: 'Resource Categories', icon: Book },
              { value: '100%', label: 'Free Access', icon: Star },
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
            badge="User Feedback"
            badgeIcon={Star}
            title="What Professionals Say"
            subtitle="Hear from architects, contractors, and designers who rely on our resources"
          />
          <Testimonials />
        </div>
      </section>

      {/* Downloads FAQ */}
      <section className="section-padding bg-white">
        <PageContainer>
          <ModernSectionHeader
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Download Center FAQ"
            subtitle="Common questions about accessing and using our resource library"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="access" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Are all downloads free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes! All resources in our Download Center are completely free to access and download. 
                  We believe in providing comprehensive product information to help you make informed decisions. 
                  No registration or subscription required - simply click download and get instant access to 
                  any resource you need.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  How often are resources updated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We regularly update our resource library to ensure all information is current and accurate. 
                  Product catalogs are updated quarterly, technical datasheets are revised when specifications 
                  change, and certifications are uploaded as soon as they're renewed. Check the "Recent Additions" 
                  section to see our latest uploads, and the date shown on each resource indicates when it was 
                  last updated.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formats" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  What file formats are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Most resources are available as high-resolution PDF files that can be viewed on any device 
                  and easily printed. Video resources are provided as ZIP files containing MP4 videos. All PDFs 
                  are optimized for both screen viewing and professional printing. File sizes are clearly indicated 
                  so you can choose appropriate resources based on your connection speed and storage capacity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="usage" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I share downloaded resources?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, you can share our resources with clients, colleagues, or team members for legitimate 
                  business purposes. We encourage architects, designers, and contractors to use our catalogs 
                  and datasheets in presentations and proposals. However, please don't republish or redistribute 
                  them publicly. For large-scale distribution or commercial use, please contact us for permission.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom" className="bg-white border border-gray-200 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                  Can I request custom documentation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! If you need specific technical information, custom specifications, or documentation 
                  for a particular project, our technical team can create customized resources for you. This is 
                  especially helpful for architects and contractors working on large projects with specific 
                  requirements. Contact our support team with your needs and we'll prepare the documentation 
                  you require.
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
              <span className="text-white font-semibold text-sm">Get Notified</span>
            </div>
            <h2 className="text-white mb-6">Get Updates on New Resources</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Be the first to know when we add new technical datasheets, product catalogs, certifications, and installation guides
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
              Join 5,000+ professionals • Instant notifications • Unsubscribe anytime
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
                <span className="text-trees-primary font-semibold text-sm">Custom Solutions</span>
              </div>
              <h2 className="text-trees-secondary mb-6">Need Custom Documentation?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Can't find what you're looking for? Our technical team will create custom resources tailored to your specific project needs
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton strength={0.2}>
                  <ModernButton
                    variant="primary"
                    size="xl"
                    icon={<Mail className="w-6 h-6" />}
                    onClick={() => onNavigate?.('contact')}
                  >
                    Request Custom Resources
                  </ModernButton>
                </MagneticButton>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<MessageSquare className="w-6 h-6" />}
                  onClick={() => onNavigate?.('professionals')}
                >
                  Talk to A&D Team
                </ModernButton>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
