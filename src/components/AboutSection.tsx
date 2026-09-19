import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onExploreServices }) => {
  const pillars = [
    'Attentive, unhurried consultations',
    'Meticulous cleanliness & hygiene',
    'Custom hair & skin treatments',
    'Warm South Mumbai hospitality',
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-14 sm:py-20 bg-white text-[#0A0A0A] relative overflow-hidden"
    >
      {/* Subtle decorative background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-display text-[180px] font-bold leading-none -mr-16 text-black">
        SONIA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Compact Editorial Image with Masked Reveal & Floating Badge */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group overflow-hidden rounded-xs border border-black/10 shadow-lg bg-black max-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
                alt="Sonia Beauty Salon warm and sophisticated studio atmosphere"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/11] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating accent badge with gentle levitation */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 bg-black/90 backdrop-blur-md rounded-xs border border-[#FF2A85]/50 shadow-xl flex items-center justify-between text-white"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF2A85] font-semibold flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85] animate-ping" />
                    <span>Mazgaon Sanctuary</span>
                  </p>
                  <p className="text-xs sm:text-sm font-display font-medium text-white mt-0.5">
                    Shop No. 1, Opp. Saifee Park
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FF2A85]/20 border border-[#FF2A85]/50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
                </div>
              </motion.div>
            </div>

            {/* Subtle decorative offset border frame */}
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-full h-full border border-[#FF2A85]/30 -z-10 rounded-xs pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-2.5">
              <span className="w-5 h-0.5 bg-[#FF2A85]" />
              <span>WELCOME TO SONIA</span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.12] mb-4 tracking-tight"
            >
              Where beauty meets <span className="italic font-normal text-[#FF2A85]">confidence.</span>
            </h2>

            {/* Body text */}
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-light mb-4">
              At Sonia Beauty Salon, every appointment is about more than a service. It's about taking a moment for yourself, feeling cared for and leaving with a look that feels completely you.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-6">
              Nestled conveniently in Mazgaon, Byculla, our salon is a dedicated sanctuary for women seeking attentive hair styling, skin therapies, bridal beauty, and restorative rituals in a tranquil environment.
            </p>

            {/* Key Pillars with interactive hover micro-animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-7">
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center space-x-2.5 p-2 rounded-xs bg-[#FAFAFA] border border-neutral-200/80 hover:border-[#FF2A85]/50 transition-colors text-xs sm:text-sm text-black group cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF2A85] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="font-normal text-neutral-800 group-hover:text-black">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <motion.button
                id="about-discover-sonia-cta"
                onClick={onExploreServices}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group px-7 py-3 bg-black text-white hover:bg-[#FF2A85] hover:text-white transition-all duration-300 rounded-sm uppercase tracking-[0.18em] text-xs font-semibold flex items-center space-x-2.5 cursor-pointer shadow-md"
              >
                <span>Discover Sonia</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#FF2A85] group-hover:text-white" />
              </motion.button>

              <motion.button
                id="about-book-visit-btn"
                onClick={onOpenBooking}
                whileHover={{ x: 3 }}
                className="px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-black hover:text-[#FF2A85] transition-colors cursor-pointer inline-flex items-center space-x-1"
              >
                <span>Book Appointment</span>
                <span className="text-[#FF2A85]">→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
