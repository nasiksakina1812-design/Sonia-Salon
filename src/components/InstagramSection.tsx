import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { salonData, instagramMoments } from '../data/salonData';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram-feed"
      aria-label="Instagram Community Showcase"
      className="py-20 sm:py-28 bg-[#0A0A0A] text-white border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#FF2A85]" />
              <span>COMMUNITY & UPDATES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Follow the <span className="italic text-[#FF2A85]">beauty journey.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mt-2 max-w-xl">
              See our latest looks, transformations and salon moments on Instagram.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              id="instagram-profile-cta"
              href={salonData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 px-6 py-3.5 bg-[#FF2A85] text-white hover:bg-white hover:text-black rounded-sm uppercase tracking-[0.18em] text-xs font-semibold transition-all duration-300 shadow-md"
            >
              <span>Follow {salonData.instagramHandle.toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Real curated photo stream representing Instagram moments */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instagramMoments.map((item) => (
            <a
              key={item.id}
              href={salonData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xs aspect-square bg-[#141414] border border-white/10 hover:border-[#FF2A85] transition-all duration-300 shadow-xs hover:shadow-lg block"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center space-x-2 text-[#FF2A85] text-xs mb-1">
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="font-semibold tracking-wide">Instagram</span>
                </div>
                <p className="text-xs text-white font-light leading-snug line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
