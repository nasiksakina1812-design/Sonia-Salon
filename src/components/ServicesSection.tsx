import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('HAIR');

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'Hair', value: 'HAIR' },
    { label: 'Skin', value: 'SKIN' },
    { label: 'Makeup', value: 'MAKEUP' },
    { label: 'Nails', value: 'NAILS' },
    { label: 'Beauty', value: 'BEAUTY' },
  ];

  const filteredServices = servicesData.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 bg-[#0A0A0A] text-white border-t border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle ambient lighting orb */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#FF2A85]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>OUR OFFERINGS</span>
          </div>

          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4"
          >
            Beauty, <span className="italic text-[#FF2A85]">your way.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Explore our range of beauty services designed to help you look and feel your best.
          </p>

          {/* Animated Category Tabs with smooth sliding active pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 bg-[#141414] rounded-full border border-white/10 max-w-fit mx-auto shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  id={`service-tab-${cat.value.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTabPill"
                      className="absolute inset-0 bg-[#FF2A85] rounded-full shadow-lg shadow-[#FF2A85]/30 -z-10"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid with AnimatePresence & layout transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ServiceItem) => (
              <motion.article
                layout
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#141414] border border-white/10 hover:border-[#FF2A85] rounded-xs overflow-hidden flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF2A85]/15"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-[#FF2A85] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-xs border border-[#FF2A85]/40 shadow-sm">
                    {service.category}
                  </div>
                </div>

                {/* Service Card Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-normal text-white group-hover:text-[#FF2A85] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs text-neutral-400 font-medium tracking-wide">
                        {service.priceNote || 'Pricing on consultation'}
                      </span>
                    </div>

                    <motion.button
                      id={`book-service-${service.id}-btn`}
                      onClick={() => onSelectServiceForBooking(service.title)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#FF2A85] hover:text-white transition-colors cursor-pointer group/btn"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pricing Transparency Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-5 rounded-xs bg-[#141414] border border-white/15 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-white font-medium">Bespoke Consultations:</strong> Every look is tailored to your hair length, texture, and personal skin goals. Reach out or visit our Mazgaon studio for precise consultation and guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
