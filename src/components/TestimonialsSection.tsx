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
    <section className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Testimonials</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Join Thousands of Global Traders
            <br />
            Who <span className="text-cyan-400">Trust WeFund</span>
          </h2>
        </div>

        {/* Gradient line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-12" />

        {/* Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <div className="flex gap-6 animate-scroll-testimonials">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[400px] relative group cursor-pointer"
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/70 hover:bg-cyan-400/80 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-500/30 group-hover:scale-110 backdrop-blur-sm"
                  onClick={() => {/* Video link will be added later */}}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={youtubeBtn} alt="Check YouTube" className="h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};
