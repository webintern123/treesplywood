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
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=500&fit=crop',
    content: `
      <p>Marine plywood is designed to withstand the harsh conditions of marine environments, including constant exposure to water, high humidity, and extreme temperature changes. It is not just regular plywood; it is manufactured using BWP (Boiling Water Proof) grade adhesives that ensure durability and longevity.</p>
      <h2>Key Features of Marine Plywood</h2>
      <ul>
        <li><strong>BWP Grade Certification:</strong> Certified marine plywood meets IS 303 standards for BWP grade, ensuring resistance to water and fungi.</li>
        <li><strong>Core Construction:</strong> The core layers are void-free, which prevents delamination under pressure or moisture exposure.</li>
        <li><strong>Face Veneer Quality:</strong> Smooth, defect-free veneers allow for easy finishing and polishing.</li>
        <li><strong>Thickness Consistency:</strong> Precise thickness ensures proper fitting, stability, and overall structural integrity.</li>
      </ul>
      <h2>Applications</h2>
      <p>Marine plywood is ideal for building boat hulls, decking, coastal homes, docks, and even high-humidity indoor areas like bathrooms and kitchens.</p>
      <h2>Installation Tips</h2>
      <ol>
        <li>Seal all cut edges with marine-grade epoxy or sealant.</li>
        <li>Use stainless steel or bronze fasteners to prevent corrosion.</li>
        <li>Apply marine varnish or paint for UV and water protection.</li>
        <li>Maintain proper ventilation to avoid moisture buildup.</li>
        <li>Regularly inspect the plywood for any signs of damage.</li>
      </ol>
      <p>Choosing high-quality marine plywood ensures the longevity and safety of any project involving water exposure. The Trees Ananta Marine plywood is manufactured with premium Gurjan veneers and comes with a 25-year warranty.</p>
    `,
    tags: ['Marine Plywood', 'BWP Grade', 'Boat Building', 'Construction Tips'],
  },

  '2': {
    id: '2',
    title: '5 Signs You Need to Upgrade Your Kitchen Plywood',
    excerpt: 'Kitchen plywood faces wear and tear. Discover when to replace cabinets or surfaces to avoid damage.',
    author: 'Swetha Reddy',
    authorBio: 'Interior Designer with 10+ years of experience in kitchen and home design',
    date: 'November 1, 2025',
    readTime: '5 min read',
    category: 'Kitchen Applications',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop',
    content: `
      <p>Kitchens are one of the most frequently used spaces in a home. Over time, plywood used for cabinets, drawers, and countertops may deteriorate due to moisture, heat, or daily wear.</p>
      <h2>5 Signs You Need to Replace Your Kitchen Plywood</h2>
      <ul>
        <li><strong>Warped Surfaces:</strong> Cabinets or shelves that bend or bow are a sign that the plywood has lost structural integrity.</li>
        <li><strong>Delamination:</strong> Layers of plywood separating indicate water damage or poor-quality material.</li>
        <li><strong>Visible Cracks or Holes:</strong> Surface damage reduces the lifespan of your kitchen furniture and may harbor bacteria.</li>
        <li><strong>Foul Odors:</strong> Persistent smells often mean moisture has seeped into the plywood layers.</li>
        <li><strong>Loose Joints or Hinges:</strong> Hardware coming loose is a clear indication that the plywood has weakened.</li>
      </ul>
      <p>Regular inspection and maintenance can extend the life of kitchen plywood, but once these signs appear, it’s best to replace the affected parts with high-quality moisture-resistant plywood.</p>
    `,
    tags: ['Kitchen Plywood', 'Home Maintenance', 'Renovation', 'MR Plywood'],
  },

  '3': {
    id: '3',
    title: 'Fire Resistant Plywood – Safety First',
    excerpt: 'Fire-resistant plywood reduces flame spread and improves building safety.',
    author: 'Ananta Bhatt',
    authorBio: 'Safety Engineer specializing in fireproof materials',
    date: 'October 15, 2025',
    readTime: '7 min read',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
    content: `
      <p>Fire safety is a critical consideration in modern construction. Fire-resistant plywood is engineered to slow down the spread of flames and provide additional safety in case of a fire.</p>
      <h2>How Fire-Resistant Plywood Works</h2>
      <p>Special adhesives and fire-retardant chemicals are used during the manufacturing process to enhance the plywood’s resistance to heat and flame. This does not make it fireproof, but it significantly delays ignition and burning.</p>
      <h2>Applications</h2>
      <ul>
        <li>Wall and ceiling panels in commercial and residential buildings</li>
        <li>Partitions in public spaces like schools, hospitals, and offices</li>
        <li>Furniture in high-risk areas</li>
        <li>Decorative elements that require additional fire protection</li>
      </ul>
      <p>Investing in fire-resistant plywood helps meet building codes and ensures the safety of occupants. Proper installation and maintenance further maximize its effectiveness.</p>
    `,
    tags: ['Fire Safety', 'Plywood', 'Construction', 'Building Codes'],
  },

  '4': {
    id: '4',
    title: 'Sustainable Forestry and Plywood Manufacturing',
    excerpt: 'Using FSC-certified plywood supports responsible forestry and eco-friendly manufacturing.',
    author: 'Vajra Singh',
    authorBio: 'Environmental Consultant & Wood Industry Expert',
    date: 'September 30, 2025',
    readTime: '6 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop',
    content: `
      <p>Sustainability in the wood industry is crucial for preserving forests and minimizing environmental impact. FSC-certified plywood ensures that the wood is sourced responsibly.</p>
      <h2>Benefits of Sustainable Plywood</h2>
      <ul>
        <li><strong>Environmental Protection:</strong> Reduces deforestation and maintains biodiversity.</li>
        <li><strong>Quality Assurance:</strong> Sustainable plywood is often more durable and of higher quality.</li>
        <li><strong>Eco-Friendly Manufacturing:</strong> Manufacturers use low-VOC adhesives and finishes.</li>
        <li><strong>Traceability:</strong> FSC certification allows you to trace the source of the wood back to responsibly managed forests.</li>
      </ul>
      <p>Choosing sustainable plywood contributes to environmental protection and supports responsible business practices in the wood industry.</p>
    `,
    tags: ['Sustainability', 'FSC Certified', 'Eco-Friendly', 'Plywood Manufacturing'],
  },

  '5': {
    id: '5',
    title: 'MR Plywood vs. BWR Plywood – Understanding the Difference',
    excerpt: 'Learn the difference between moisture-resistant and boil-water-resistant plywood for your projects.',
    author: 'Ramesh Verma',
    authorBio: 'Construction Material Specialist with 12+ years of experience',
    date: 'October 5, 2025',
    readTime: '6 min read',
    category: 'Construction Tips',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=500&fit=crop',
    content: `
      <p>Plywood comes in various grades, and choosing the right type can prevent damage and extend the life of your project. MR (Moisture Resistant) and BWR (Boiling Water Resistant) plywood are two common types used in construction and furniture making.</p>
      <h2>MR Plywood</h2>
      <p>MR plywood is designed for indoor use in areas with moderate moisture levels. It resists occasional water contact but is not suitable for areas with high humidity or direct water exposure.</p>
      <h2>BWR Plywood</h2>
      <p>BWR plywood is engineered to withstand high moisture conditions and is often used in kitchens, bathrooms, and exterior applications. It uses phenolic resin adhesives that prevent delamination even when exposed to boiling water.</p>
      <h2>Choosing the Right Plywood</h2>
      <p>For furniture that is exposed to occasional moisture, MR plywood is sufficient. For kitchens, bathrooms, and outdoor applications, BWR plywood is the preferred choice.</p>
    `,
    tags: ['MR Plywood', 'BWR Plywood', 'Construction Materials', 'Furniture'],
  },

  '6': {
    id: '6',
    title: 'Top 5 Plywood Finishes for Modern Interiors',
    excerpt: 'Discover different plywood finishes that enhance the look and durability of your interiors.',
    author: 'Neha Sharma',
    authorBio: 'Interior Architect and Material Designer',
    date: 'September 20, 2025',
    readTime: '5 min read',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop',
    content: `
     <p>Plywood comes in various grades, and choosing the right type can prevent damage and extend the life of your project. MR (Moisture Resistant) and BWR (Boiling Water Resistant) plywood are two common types used in construction and furniture making.</p>
      <h2>MR Plywood</h2>
      <p>MR plywood is designed for indoor use in areas with moderate moisture levels. It resists occasional water contact but is not suitable for areas with high humidity or direct water exposure.</p>
      <h2>BWR Plywood</h2>
      <p>BWR plywood is engineered to withstand high moisture conditions and is often used in kitchens, bathrooms, and exterior applications. It uses phenolic resin adhesives that prevent delamination even when exposed to boiling water.</p>
      <h2>Choosing the Right Plywood</h2>
      <p>For furniture that is exposed to occasional moisture, MR plywood is sufficient. For kitchens, bathrooms, and outdoor applications, BWR plywood is the preferred choice.</p>
    `,
    tags: ['Plywood Finishes', 'Interior Design', 'Furniture', 'Home Decor'],
  },

  '7': {
    id: '7',
    title: 'How to Maintain Your Plywood Furniture',
    excerpt: 'Plywood furniture lasts longer with proper care. Learn effective maintenance tips.',
    author: 'Amit Desai',
    authorBio: 'Furniture Designer and Home Care Expert',
    date: 'September 10, 2025',
    readTime: '5 min read',
    category: 'Furniture Care',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop',
    content: `
      <p>Plywood furniture is durable and versatile, but like all wood products, it requires regular maintenance to maintain its appearance and structural integrity.</p>
      <h2>Tips for Maintaining Plywood Furniture</h2>
      <ul>
        <li>Clean surfaces with a soft, damp cloth and avoid harsh chemicals.</li>
        <li>Polish furniture periodically to maintain shine and protection.</li>
        <li>Keep furniture away from direct sunlight and excessive moisture.</li>
        <li>Repair minor scratches promptly to prevent further damage.</li>
        <li>Use coasters, mats, and protective covers to reduce wear and tear.</li>
      </ul>
      <p>Following these simple maintenance tips extends the life and beauty of your plywood furniture.</p>
    `,
    tags: ['Plywood Care', 'Furniture Maintenance', 'Home Tips', 'Durability'],
  },

  '8': {
    id: '8',
    title: 'Innovations in Plywood Manufacturing',
    excerpt: 'Modern technologies are transforming plywood production for higher quality and sustainability.',
    author: 'Vikram Mehta',
    authorBio: 'Industrial Engineer in Wood Manufacturing',
    date: 'August 25, 2025',
    readTime: '6 min read',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    content: `
      <p>The plywood industry has evolved significantly over the past decades. Innovations in adhesives, automated cutting, and eco-friendly processes have enhanced both quality and sustainability.</p>
      <h2>Modern Manufacturing Techniques</h2>
      <ul>
        <li>High-precision veneer slicing for consistent thickness.</li>
        <li>Advanced adhesive formulations for stronger bonding.</li>
        <li>Computer-controlled hot pressing for uniform quality.</li>
        <li>Use of low-VOC and water-based adhesives for environmental safety.</li>
      </ul>
      <p>These innovations allow manufacturers to produce durable, high-quality plywood that meets modern construction and interior design needs while remaining environmentally responsible.</p>
    `,
    tags: ['Plywood Manufacturing', 'Innovation', 'Sustainability', 'Wood Industry'],
  },

  '9': {
    id: '9',
    title: 'Top Applications of BWR Plywood',
    excerpt: 'BWR plywood is widely used for wet areas. Discover its most common applications in homes and offices.',
    author: 'Sneha Kapoor',
    authorBio: 'Construction Materials Consultant',
    date: 'August 15, 2025',
    readTime: '5 min read',
    category: 'Construction Tips',
    image: 'https://images.unsplash.com/photo-1614963617870-c2e6b4a5be6f?w=800&h=500&fit=crop',
    content: `
      <p>BWR (Boiling Water Resistant) plywood is a versatile material suitable for areas exposed to water and high humidity. Its resistance to delamination makes it ideal for kitchens, bathrooms, and outdoor use.</p>
      <h2>Common Applications</h2>
      <ul>
        <li>Kitchen cabinets and countertops</li>
        <li>Bathroom vanities and shelves</li>
        <li>Outdoor furniture exposed to rain and moisture</li>
        <li>Partitions in commercial spaces</li>
        <li>Wall paneling in high-humidity environments</li>
      </ul>
      <p>Choosing BWR plywood ensures durability and reduces maintenance costs over time, making it a practical solution for both residential and commercial projects.</p>
    `,
    tags: ['BWR Plywood', 'Construction', 'Wet Areas', 'Durable Materials'],
  },

  '10': {
    id: '10',
    title: 'How to Choose Plywood for Your Furniture Projects',
    excerpt: 'Selecting the right plywood grade is key to building durable and stylish furniture.',
    author: 'Arjun Rao',
    authorBio: 'Furniture Designer & Woodworking Expert',
    date: 'July 30, 2025',
    readTime: '6 min read',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=500&fit=crop',
    content: `
      <p>Choosing the correct type of plywood for furniture is essential for durability, aesthetics, and cost-effectiveness. Factors like moisture exposure, intended use, and finish should be considered.</p>
      <h2>Factors to Consider</h2>
      <ul>
        <li><strong>Grade:</strong> MR, BWR, or marine-grade depending on moisture exposure.</li>
        <li><strong>Veneer Quality:</strong> Smooth veneers allow for better finishing and polishing.</li>
        <li><strong>Thickness:</strong> Adequate thickness ensures strength and stability.</li>
        <li><strong>Adhesive Type:</strong> Phenolic resin adhesives offer superior water resistance.</li>
        <li><strong>Eco-Friendly Certification:</strong> FSC-certified plywood supports sustainability.</li>
      </ul>
      <p>Proper selection ensures that your furniture remains functional, beautiful, and durable for years to come.</p>
    `,
    tags: ['Furniture Plywood', 'Material Selection', 'Woodworking', 'MR vs BWR'],
  },

  '11': {
    id: '11',
    title: 'Common Mistakes to Avoid When Installing Plywood',
    excerpt: 'Incorrect plywood installation can reduce its lifespan. Learn key mistakes to avoid.',
    author: 'Ritika Jain',
    authorBio: 'Construction Engineer and Material Consultant',
    date: 'July 15, 2025',
    readTime: '5 min read',
    category: 'Installation Tips',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=500&fit=crop',
    content: `
      <p>Even high-quality plywood can fail if installed incorrectly. Understanding common mistakes helps prevent structural issues and extends the life of your plywood installations.</p>
      <h2>Common Mistakes</h2>
      <ul>
        <li>Ignoring proper sealing of cut edges, leading to water damage.</li>
        <li>Using wrong fasteners, which can cause rusting and weakening.</li>
        <li>Skipping surface preparation, affecting adhesive bonding and finish.</li>
        <li>Failing to provide ventilation, which leads to moisture buildup.</li>
        <li>Overloading shelves or furniture beyond the plywood’s capacity.</li>
      </ul>
      <p>Proper installation, following manufacturer guidelines, and routine maintenance can prevent these issues and ensure plywood performs optimally.</p>
    `,
    tags: ['Plywood Installation', 'Construction Tips', 'Durability', 'Maintenance'],
  },

  '12': {
    id: '12',
    title: 'The Benefits of Using Gurjan Wood in Plywood',
    excerpt: 'Gurjan wood is renowned for its durability and strength. Learn why it is preferred in premium plywood.',
    author: 'Vikrant Joshi',
    authorBio: 'Wood Specialist and Quality Control Expert',
    date: 'June 30, 2025',
    readTime: '6 min read',
    category: 'Wood Types',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop',
    content: `
      <p>Gurjan wood is a tropical hardwood known for its density, durability, and resistance to decay. It is widely used in premium plywood for both construction and furniture applications.</p>
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>High Strength:</strong> Ideal for load-bearing applications and furniture requiring stability.</li>
        <li><strong>Durability:</strong> Resistant to termites, fungi, and moisture damage.</li>
        <li><strong>Excellent Finish:</strong> Smooth surface for veneers and superior polish quality.</li>
        <li><strong>Long Lifespan:</strong> Ensures that plywood made with Gurjan wood lasts decades with proper care.</li>
      </ul>
      <p>Using Gurjan wood in plywood guarantees high performance and long-term reliability, making it a preferred choice for premium projects.</p>
    `,
    tags: ['Gurjan Wood', 'Premium Plywood', 'Durability', 'Wood Types'],
  },
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
