import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonials/testimonial-1.png";
import testimonial2 from "@/assets/testimonials/testimonial-2.png";
import testimonial3 from "@/assets/testimonials/testimonial-3.png";
import testimonial4 from "@/assets/testimonials/testimonial-4.png";
import testimonial5 from "@/assets/testimonials/testimonial-5.png";
import testimonial6 from "@/assets/testimonials/testimonial-6.png";
import youtubeBtn from "@/assets/youtube-btn.png";

const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
];

export const TestimonialsSection = () => {
  // Double the array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4 md:mb-6">
            <Star className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs md:text-sm font-medium">Testimonials</span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2">
            Join Thousands of Global Traders
            <br />
            Who <span className="text-cyan-400">Trust WeFund</span>
          </h2>
        </div>

        {/* Gradient line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8 md:mb-12" />

        {/* Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <div className="flex gap-4 md:gap-6 animate-scroll-testimonials">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] relative group cursor-pointer"
              >
                {/* Testimonial card */}
                <div className="rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <img
                    src={testimonial}
                    alt={`Trader testimonial ${(index % testimonials.length) + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Play button overlay - centered */}
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-cyan-500/70 hover:bg-cyan-400/80 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-500/30 group-hover:scale-110 backdrop-blur-sm"
                  onClick={() => {/* Video link will be added later */}}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white ml-0.5 md:ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={youtubeBtn} alt="Check YouTube" className="h-10 md:h-14" />
          </a>
        </div>
      </div>
    </section>
  );
};
