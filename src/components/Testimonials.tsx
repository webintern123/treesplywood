import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Principal Architect',
      company: 'Mehta Design Studio',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      quote: 'The Trees Plywood has been our go-to supplier for high-end residential projects. The consistency in quality and the Gurjan face veneer finish is unmatched. Their technical support team is exceptional.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Designer',
      company: 'Luxe Interiors',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'We specified their Bhima (Marine Grade) plywood for a luxury yacht interior. Two years later, zero delamination. The calibrated thickness made our joinery work seamless. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Project Manager',
      company: 'BuildRight Construction',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'For commercial projects, reliability is everything. The Trees delivers on time, every time. Their Agni (Fire-Resistant) plywood helped us meet strict building codes without compromise.',
      rating: 5,
    },
    {
      name: 'Kavita Desai',
      role: 'Senior Designer',
      company: 'Urban Living Spaces',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Outstanding product quality and customer service. The Samrat plywood transformed our luxury apartment project. The natural grain patterns are simply stunning.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Furniture Manufacturer',
      company: 'Artisan Crafts Ltd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'We use Trees Plywood for all our premium furniture lines. The calibrated thickness ensures precision joinery every time. Our clients love the finish quality.',
      rating: 5,
    },
    {
      name: 'Anjali Nair',
      role: 'Hotel Interior Designer',
      company: 'Coastal Hospitality Design',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      quote: 'For our beachfront resort project, the Bhima (Marine Grade) plywood performed exceptionally. Even after three years in high humidity, no warping or delamination.',
      rating: 5,
    },
    {
      name: 'Rahul Gupta',
      role: 'Construction Contractor',
      company: 'Prime Builders',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
      quote: 'Reliable delivery, consistent quality, and competitive pricing. Trees Plywood has been our trusted partner for over 50 commercial projects.',
      rating: 5,
    },
    {
      name: 'Meera Patel',
      role: 'Residential Architect',
      company: 'Modern Home Designs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
      quote: 'The sustainable sourcing and FSC certification align with our firm\'s values. Plus, the product quality is simply unmatched in the market.',
      rating: 5,
    },
    {
      name: 'Sameer Khan',
      role: 'Joinery Specialist',
      company: 'Precision Woodworks',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      quote: 'The dimensional accuracy is incredible. Every sheet is exactly to spec, which saves us hours in calibration. This is professional-grade plywood.',
      rating: 5,
    },
    {
      name: 'Deepa Rao',
      role: 'Retail Store Designer',
      company: 'Boutique Interiors',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      quote: 'We designed 15 high-end retail stores using Trees Plywood. The fire-rated options gave us safety compliance, and the aesthetic finish impressed every client.',
      rating: 5,
    },
  ];

  return (
    <section className="py-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-4 border border-trees-primary/20">
          <Star className="w-4 h-4 text-trees-primary fill-trees-primary" />
          <span className="text-trees-primary font-semibold text-sm">Client Testimonials</span>
        </div>
        <h2 className="text-trees-primary text-4xl font-semibold mb-3">
          Trusted by Professionals
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from architects, designers, and builders who rely on our plywood
        </p>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 smooth-transition border border-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-trees-primary" />
        </button>

        {/* Scrollable Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[380px] glass-card rounded-xl p-8 hover-lift"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-10 h-10 text-trees-primary/20" />
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-trees-primary fill-trees-primary" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic min-h-[120px]">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-trees-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-trees-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-trees-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 smooth-transition border border-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-trees-primary" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 italic">← Scroll to see all {testimonials.length} testimonials →</p>
      </div>
    </section>
  );
}
