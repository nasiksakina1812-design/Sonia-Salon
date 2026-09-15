import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';
import { galleryData } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Hair');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filters = ['Hair', 'Makeup', 'Nails', 'Skin'];

  const filteredGallery = galleryData.filter(
    (item) => item.category === activeFilter
  );

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 sm:py-28 bg-white text-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>OUR WORK</span>
          </div>

          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-black tracking-tight mb-4"
          >
            Looks worth <span className="italic text-[#FF2A85]">talking about.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            A glimpse into the real transformations, subtle enhancements, and self-care moments created at Sonia Beauty Salon.
          </p>

          {/* Category Filter Pills with smooth sliding layoutId */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 bg-neutral-100 rounded-full border border-neutral-200 max-w-fit mx-auto">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  id={`gallery-filter-${filter.toLowerCase()}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 sm:px-5 py-1.5 sm:py-2 text-xs uppercase tracking-[0.18em] rounded-full font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryFilterPill"
                      className="absolute inset-0 bg-[#FF2A85] rounded-full shadow-md shadow-[#FF2A85]/30 -z-10"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with Signature Mask Reveal and Smooth AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                id={`gallery-card-${item.id}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-xs border border-neutral-200 hover:border-[#FF2A85] bg-black shadow-md hover:shadow-2xl hover:shadow-[#FF2A85]/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Circular "VIEW" badge on hover in Hot Pink with spring pop */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#FF2A85] text-white border-2 border-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <Eye className="w-4 h-4 text-white mb-0.5" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">VIEW</span>
                  </div>
                </div>

                {/* Caption Tag */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF2A85] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base text-white font-normal leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredGallery}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
      />
    </section>
  );
};
