import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { salonData } from '../data/salonData';

export const TrustBar: React.FC = () => {
  const tickerItems = [
    '357+ VERIFIED REVIEWS',
    'MAZGAON & BYCULLA',
    'LUXURY HAIR & SKIN CARE',
    'OPP. SAIFEE PARK',
    'HYGIENIC & STERILIZED TOOLS',
    'ATTENTIVE CONSULTATIONS',
  ];

  return (
    <aside
      id="trust-strip"
      aria-label="Salon Credentials and Trust Highlights"
      className="bg-[#000000] text-white relative z-20 border-t border-b border-[#FF2A85]/30 overflow-hidden"
    >
      {/* Top animated glowing hairline border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2A85] to-transparent opacity-80" />

      {/* Ultra-compact main bar with reduced vertical padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
          {/* 1. 357+ Verified Reviews */}
          <motion.a
            href={salonData.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="trust-badge-reviews"
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center space-x-2.5 px-3 py-1.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF2A85]/60 transition-all cursor-pointer group"
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-[#FF2A85]/20 border border-[#FF2A85]/50 flex items-center justify-center shrink-0">
                <Star className="w-3.5 h-3.5 text-[#FF2A85] fill-[#FF2A85] animate-pulse" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A85] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2A85]" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight leading-none">
                  {salonData.reviewsCount}+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#FF2A85] font-semibold">
                  Google Reviews
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-light truncate">
                Verified Mazgaon Favorite
              </p>
            </div>
          </motion.a>

          {/* 2. South Mumbai Sanctuary */}
          <motion.div
            id="trust-badge-location"
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center space-x-2.5 px-3 py-1.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF2A85]/60 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-[#FF2A85]/20 border border-[#FF2A85]/50 flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">
                Mazgaon, Byculla
              </div>
              <p className="text-[11px] text-neutral-400 font-light truncate">
                Opp. Saifee Park
              </p>
            </div>
          </motion.div>

          {/* 3. Bespoke Offerings */}
          <motion.div
            id="trust-badge-offerings"
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center space-x-2.5 px-3 py-1.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF2A85]/60 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-[#FF2A85]/20 border border-[#FF2A85]/50 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">
                Hair • Skin • Nails
              </div>
              <p className="text-[11px] text-neutral-400 font-light truncate">
                Custom Tailored Rituals
              </p>
            </div>
          </motion.div>

          {/* 4. Hygiene & Standards */}
          <motion.div
            id="trust-badge-hygiene"
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center space-x-2.5 px-3 py-1.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF2A85]/60 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-[#FF2A85]/20 border border-[#FF2A85]/50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF2A85]" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">
                Hygiene Certified
              </div>
              <p className="text-[11px] text-neutral-400 font-light truncate">
                Sterilized & Gentle Care
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ultra-chic High-Fashion Continuous Marquee Ribbon */}
      <div className="bg-[#0A0A0A] border-t border-white/10 py-1.5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center space-x-8 text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-400">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} className="inline-flex items-center space-x-4 shrink-0">
              <span className="hover:text-white transition-colors">{item}</span>
              <span className="text-[#FF2A85] text-xs font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom animated glowing hairline border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2A85] to-transparent opacity-80" />
    </aside>
  );
};
