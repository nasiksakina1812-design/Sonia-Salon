import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import { whyChoosePoints } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const icons = [UserCheck, Sparkles, HeartHandshake, MapPin];

  return (
    <section
      id="why-sonia"
      aria-labelledby="why-sonia-heading"
      className="bg-[#000000] text-white py-20 sm:py-28 relative border-t border-b border-white/10 overflow-hidden"
    >
      {/* Dynamic Animated Ambient light */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A85] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>THE SALON DISTINCTION</span>
          </div>

          <h2
            id="why-sonia-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight"
          >
            Why <span className="italic font-normal text-[#FF2A85]">Sonia?</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 max-w-xl mx-auto">
            A boutique approach designed around personal care, comfort, and meticulous attention.
          </p>
        </div>

        {/* 4 Feature Blocks with interactive hover & icon rotation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChoosePoints.map((point, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={point.id}
                id={`why-card-${point.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="p-7 sm:p-8 rounded-xs bg-[#141414] border border-white/10 hover:border-[#FF2A85] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[#FF2A85]/15 cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-xs bg-[#FF2A85]/15 border border-[#FF2A85]/40 flex items-center justify-center mb-6 group-hover:bg-[#FF2A85] transition-all duration-300 group-hover:rotate-6">
                    <IconComponent className="w-5 h-5 text-[#FF2A85] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-normal text-white mb-3 group-hover:text-[#FF2A85] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#FF2A85] font-semibold">
                  <span>0{index + 1}</span>
                  <span className="w-8 h-0.5 bg-[#FF2A85] group-hover:w-14 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
