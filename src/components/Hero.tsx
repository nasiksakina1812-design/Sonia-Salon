import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { salonData } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      aria-label="Hero Introduction"
    >
      {/* Background Photography with subtle dark overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="Sonia Beauty Salon ambience and styling"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.62]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Deep black editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2A85]/15 via-transparent to-[#0A0A0A]/90" />
      </motion.div>

      {/* Dynamic Animated Ambient Light Orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FF2A85]/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 25, -25, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#FF2A85]/15 blur-[140px] pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Floating verified badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-neutral-300 shadow-md"
          >
            <div className="flex items-center space-x-0.5 text-[#FF2A85]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FF2A85]" />
              ))}
            </div>
            <span className="text-white font-medium">{salonData.reviewsCount}+ Google Reviews</span>
            <span className="text-[#FF2A85] font-bold">•</span>
            <span className="text-neutral-300">Mazgaon, Mumbai</span>
          </motion.div>
        </motion.div>

        {/* Eyebrow in Hot Pink & White with rotating sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FF2A85]/50 text-[#FF2A85] mb-6 shadow-lg hover:border-[#FF2A85] transition-colors"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
          </motion.div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
            {salonData.name}
          </span>
        </motion.div>

        {/* Main Headline with Staggered Entrance */}
        <motion.h1
          id="hero-main-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light text-white leading-[1.08] tracking-tight mb-6 max-w-4xl"
        >
          Your beauty, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#FF2A85] drop-shadow-[0_0_25px_rgba(255,42,133,0.35)]">
            beautifully defined.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          id="hero-supporting-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          A welcoming beauty destination in Mazgaon, Mumbai, where style, care and confidence come together.
        </motion.p>

        {/* Call-to-Action Buttons with interactive hover */}
        <motion.div
          id="hero-cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            id="hero-book-appointment-btn"
            onClick={onOpenBooking}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-[#FF2A85] text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-xs font-semibold shadow-xl shadow-[#FF2A85]/20 flex items-center justify-center space-x-3 cursor-pointer animate-shimmer"
          >
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
          </motion.button>

          <motion.button
            id="hero-explore-services-btn"
            onClick={onExploreServices}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white hover:text-[#FF2A85] border border-white/40 hover:border-[#FF2A85] transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-xs font-medium backdrop-blur-xs cursor-pointer shadow-sm"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator with bouncing motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <button
          id="hero-scroll-indicator"
          onClick={onExploreServices}
          className="text-[11px] tracking-[0.25em] text-[#FF2A85] uppercase font-medium hover:text-white transition-colors cursor-pointer flex flex-col items-center group"
          aria-label="Scroll to explore salon features"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-1 text-sm text-[#FF2A85]"
          >
            ↓
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
};
