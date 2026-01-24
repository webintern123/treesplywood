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
      name: 'Ramesh K. ',
      role: 'Principal Architect',
      city: 'Bengaluru ',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      
      quote: 'We renovated our home using plywood from Tree’s, and I couldn’t be happier. It’s strong, water-resistant, and the surface finish is flawless. Truly worth every rupee.',
      rating: 5,
    },
    {
      name: 'Priya S. ',
      role: 'Interior Designer',
      city: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      
      quote: ' I have been using Tree’s Plywood for multiple projects, and the quality is consistently impressive. The boards are durable, easy to work with, and finish beautifully. My clients are always satisfied!',
      rating: 5,
    },
    {
      name: 'Anil M. ',
      role: 'Project Manager',
      city: 'Chennai',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',

      quote: 'Reliable, long-lasting, and easy to source — Tree’s Plywood has been my go-to for every residential and commercial project.Tree’s Plywood gives me peace of mind.',
      rating: 5,
    },
    {
      name: 'Sangeeta R.',
      role: 'Senior Designer',
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      
      quote: 'As a contractor, I rely on quality materials. Tree’s Plywood never disappoints — the boards are uniform, sturdy, and perfect for both furniture and interiors.',
      rating: 5,
    },
    {
      name: 'Arjun M.',
      role: 'Architect',
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',

      
      quote: 'The plywood is excellent for custom furniture. It’s easy to cut, doesn’t chip, and holds screws perfectly. My clients love the results!',
      rating: 5,
    },
    {
      name: 'Rajesh K.',
      role: 'Project Manager',
      city: 'Bengaluru',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
      quote: 'I specify Tree’s Plywood in almost all my designs because it offers the perfect combination of strength, sustainability, and aesthetic appeal. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Kavita D.',
      role: ' Senior Designer',
      city: ' Hyderabad',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',

      quote: 'Customers keep coming back because they trust Tree’s Plywood. The products are reliable, and the company provides great support and timely delivery.',
      rating: 5,
    },
    {
      name: 'Vikram S.',
      role: 'Furniture Manufacturer ',
      city: ' Chennai',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',

      quote: 'I built shelves and a TV unit using Tree’s Plywood. It’s incredibly durable and looks premium. Makes DIY projects so much easier',
      rating: 5,
    },
   
  ];

  return (
    <section className="py-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-4 border border-trees-primary/20">
          <Star className="w-4 h-4 text-trees-primary fill-trees-primary" />
          <span className="text-trees-primary font-semibold text-sm">Tree’s Plywood Professional Testimonials  </span>
        </div>
        <h2 className="text-trees-primary text-4xl font-semibold mb-3">
          What Professionals Say About Tree’s Plywood?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by architects, designers, builders, and furniture makers across India.
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
              <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                {testimonial.quote}
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
                                <p className="text-xs text-trees-primary font-medium">{testimonial.city}</p>
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
