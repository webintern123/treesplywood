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
      
      quote: 'We didn’t expect the quality of Tree’s Plywood to be this good. Best Decision!',
      rating: 5,
    },
    {
      name: 'Priya S. ',
      role: 'Interior Designer',
      city: 'Hyderabad',
      
      quote: ' I recommend you all to grab these for all your needs, very strong.',
      rating: 5,
    },
    {
      name: 'Anil M. ',
      role: 'Project Manager',
      city: 'Chennai',
      
      quote: 'I bought fire-retardant plywood from this company. The customer care is nice and delivered product on time.',
      rating: 5,
    },
    {
      name: 'Sangeeta R.',
      role: 'Senior Designer',
      city: 'Mumbai',
      
      quote: 'I must say from start to end, your entire process is smooth and reasonable.',
      rating: 5,
    },
    {
      name: 'Arjun M.',
      role: 'Architect',
      city: 'Mumbai',
      
      quote: 'The quality is consistently premium. Their Gurjan finish and technical support make every project smoother.',
      rating: 5,
    },
    {
      name: 'Rajesh K.',
      role: 'Project Manager',
      city: 'Bengaluru',
      quote: 'Agni fire-resistant plywood helped us meet safety codes easily. Always delivered on time.',
      rating: 5,
    },
    {
      name: 'Kavita D.',
      role: ' Senior Designer',
      city: ' Hyderabad',
      
      quote: 'Samrat added a beautiful finish to our luxury apartments. Clients loved the natural grain.',
      rating: 5,
    },
    {
      name: 'Vikram S.',
      role: 'Furniture Manufacturer ',
      city: ' Chennai',
      
      quote: 'Zero-gap calibrated sheets mean perfect joinery every time. Our furniture quality improved drastically.',
      rating: 5,
    },
   
  ];

  return (
    <section className="py-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-trees-primary/10 px-5 py-2 rounded-full mb-4 border border-trees-primary/20">
          <Star className="w-4 h-4 text-trees-primary fill-trees-primary" />
          <span className="text-trees-primary font-semibold text-sm">Tree’s Plywood Customer Testimonials </span>
        </div>
        <h2 className="text-trees-primary text-4xl font-semibold mb-3">
          Trusted by Professionals
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          What Tree’s Plywood Customers are Saying About Tree’s Plywood?
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
               <div className="w-12 h-12 rounded-full bg-trees-primary/10 flex items-center justify-center text-trees-primary font-semibold text-lg ring-2 ring-trees-primary/20">
  {testimonial.name.charAt(0)}
</div>

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
