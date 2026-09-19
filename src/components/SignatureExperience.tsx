import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Coffee, ShieldCheck } from 'lucide-react';
import { salonData } from '../data/salonData';

interface SignatureExperienceProps {
  onOpenBooking: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="signature-experience"
      aria-label="The Sonia Experience"
      className="bg-[#000000] text-white py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Dynamic Animated Ambient light orbs */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FF2A85]/15 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FF2A85]/12 blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Signature Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
              <span>THE SONIA EXPERIENCE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-light text-white leading-[1.1] mb-5 tracking-tight">
              A little time for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#FF2A85]">yourself.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-7 max-w-xl">
              From a fresh new look to a moment of self-care, make your next salon visit something to look forward to.
            </p>

            <div className="space-y-3.5 mb-8 w-full max-w-md">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-start space-x-3.5 p-3.5 rounded-xs bg-white/[0.04] border border-white/10 hover:border-[#FF2A85]/50 transition-colors"
              >
                <Coffee className="w-5 h-5 text-[#FF2A85] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Warm, Unhurried Comfort</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Take a breather from the city hustle in our tranquil Mazgaon sanctuary.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-start space-x-3.5 p-3.5 rounded-xs bg-white/[0.04] border border-white/10 hover:border-[#FF2A85]/50 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-[#FF2A85] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Hygienic, Trusted Standards</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Sterilized tools, fresh linens, and gentle salon-grade formulations.</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              id="signature-book-visit-btn"
              onClick={onOpenBooking}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-[#FF2A85] text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-xs font-semibold flex items-center space-x-3 shadow-xl shadow-[#FF2A85]/20 cursor-pointer animate-shimmer"
            >
              <span className="relative z-10">Book Your Visit</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            </motion.button>
          </motion.div>

          {/* Right Column: Oversized Editorial Image partially overlapping with Floating Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group overflow-hidden rounded-xs border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                alt="Hair care and personalized styling ritual at Sonia Beauty Salon"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] sm:aspect-[16/12] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-transparent to-transparent" />

              {/* Editorial Quote tag with subtle floating levitation */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 bg-black/90 backdrop-blur-md rounded-xs border border-[#FF2A85]/50 shadow-2xl"
              >
                <p className="font-display italic text-lg sm:text-xl text-white leading-snug">
                  "Come in for the service. Stay for the experience."
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF2A85] mt-2 font-sans font-semibold">
                  {salonData.name} • Mazgaon
                </p>
              </motion.div>
            </div>

            {/* Decorative Offset Hot Pink Border Frame */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-full h-full border-2 border-[#FF2A85]/30 -z-10 rounded-xs pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
