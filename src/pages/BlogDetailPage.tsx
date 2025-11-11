import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Mail, Tag, ChevronRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernButton } from '../components/design-system/ModernButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

interface BlogDetailPageProps {
  blogId: string;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

// This would typically come from a database or CMS
const blogPosts = {
  '1': {
    id: '1',
    title: 'Choosing the Right Marine Plywood for Your Boat Project',
    excerpt: 'Marine plywood is specifically engineered to withstand moisture and humidity. Learn about BWP grade certification, core construction, and why The Trees Ananta Marine is the gold standard for marine applications.',
    author: 'Rajesh Kumar',
    authorBio: 'Senior Product Engineer with 15+ years of experience in marine-grade wood products',
    date: 'October 28, 2025',
    readTime: '6 min read',
    category: 'Marine Applications',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&h=600&fit=crop',
    content: `
      <p>When it comes to boat building or marine applications, choosing the right plywood is absolutely critical. Marine plywood isn't just regular plywood that can handle a bit of water—it's a specialized product engineered to withstand the harsh marine environment for years.</p>

      <h2>What Makes Marine Plywood Special?</h2>
      <p>Marine plywood is manufactured using BWP (Boiling Water Proof) grade adhesives, typically phenolic resin, which creates an incredibly strong bond that won't fail even when exposed to prolonged moisture or boiling water. This is fundamentally different from standard plywood that uses urea-formaldehyde adhesives.</p>

      <h2>Key Features to Look For</h2>
      <ul>
        <li><strong>BWP Grade Certification:</strong> Ensure the plywood is certified to IS 303 standards for BWP grade.</li>
        <li><strong>Core Construction:</strong> Look for plywood with no voids or gaps in the core layers.</li>
        <li><strong>Face Veneer Quality:</strong> Marine applications require smooth, defect-free face veneers that can be finished properly.</li>
        <li><strong>Thickness Consistency:</strong> Precision-calibrated thickness ensures proper fitting and structural integrity.</li>
      </ul>

      <h2>Common Marine Applications</h2>
      <p>Marine plywood is ideal for:</p>
      <ul>
        <li>Boat hulls and decking</li>
        <li>Dock construction</li>
        <li>Coastal homes and structures</li>
        <li>Bathroom and kitchen applications in high-humidity environments</li>
        <li>Swimming pool surrounds</li>
      </ul>

      <h2>Installation Best Practices</h2>
      <p>Even the best marine plywood needs proper installation:</p>
      <ol>
        <li>Always seal cut edges with marine-grade sealant or epoxy</li>
        <li>Use stainless steel or bronze fasteners to prevent corrosion</li>
        <li>Apply proper marine varnish or paint for UV and weather protection</li>
        <li>Ensure adequate ventilation to prevent moisture buildup</li>
        <li>Regular maintenance and inspection are essential</li>
      </ol>

      <h2>Why Choose The Trees Marine Plywood?</h2>
      <p>Our Ananta Marine plywood is manufactured using premium Gurjan face veneers and phenolic resin adhesive. Each sheet undergoes rigorous quality testing including 72-hour boiling water immersion tests. We back our marine plywood with a 25-year warranty, demonstrating our confidence in its long-term performance.</p>

      <h2>Conclusion</h2>
      <p>Investing in quality marine plywood is essential for any water-related application. While it may cost more upfront than standard plywood, the longevity, safety, and peace of mind it provides make it the only sensible choice for marine environments.</p>

      <p>Contact our technical team for guidance on selecting the right grade and thickness for your specific project.</p>
    `,
    tags: ['Marine Plywood', 'BWP Grade', 'Boat Building', 'Construction Tips'],
  },
  // Add more blog posts as needed
};

export function BlogDetailPage({ blogId, onBack, onNavigate }: BlogDetailPageProps) {
  const post = blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return (
      <PageContainer className="py-20 text-center">
        <h1 className="text-trees-secondary mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
        <ModernButton variant="primary" icon={<ArrowLeft />} onClick={onBack}>
          Back to Blogs
        </ModernButton>
      </PageContainer>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`,
    };
    
    if (platform === 'email') {
      window.location.href = urls.email;
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <PageContainer className="py-4">
          <div className="flex items-center justify-between">
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
                  <BreadcrumbLink
                    onClick={onBack}
                    className="cursor-pointer hover:text-trees-primary transition-colors"
                  >
                    Blogs
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-trees-primary font-medium max-w-md truncate">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-trees-primary transition-colors group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blogs</span>
            </button>
          </div>
        </PageContainer>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
          <Badge className="bg-trees-primary text-white">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </Badge>
        </div>
      </div>

      <PageContainer className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <article className="space-y-8">
            <header className="space-y-6">
              <h1 className="text-trees-secondary">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="p-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none glass-card rounded-2xl p-8 md:p-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-trees-primary/10 text-trees-primary hover:bg-trees-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-trees-primary/5 to-trees-secondary/5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-trees-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-trees-primary" />
                </div>
                <div>
                  <h3 className="text-trees-secondary mb-2">About {post.author}</h3>
                  <p className="text-gray-700">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="glass-card rounded-2xl p-8 md:p-10 text-center bg-gradient-to-br from-trees-primary/10 to-trees-secondary/10">
              <h3 className="text-trees-secondary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our team is here to help you choose the perfect plywood for your specific needs. Get expert guidance and free samples.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ModernButton variant="primary" onClick={() => onNavigate?.('contact')}>
                  Contact Us
                </ModernButton>
                <ModernButton variant="outline" onClick={() => onNavigate?.('products')}>
                  View Products
                </ModernButton>
              </div>
            </div>
          </article>
        </div>
      </PageContainer>
    </div>
  );
}
