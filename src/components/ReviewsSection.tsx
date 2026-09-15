import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Star } from 'lucide-react';
import { salonData, clientReviews } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Counter animation 0 -> 357
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = salonData.reviewsCount;
    const duration = 1600; // ms
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOutProgress * (end - start) + start);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView]);

  const handlePrev = () => {
    setActiveReviewIndex((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) => (prev + 1) % clientReviews.length);
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 sm:py-28 bg-white text-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Special "357 Reviews" Visual Treatment */}
          <div ref={counterRef} className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
              <Quote className="w-3.5 h-3.5 text-[#FF2A85]" />
              <span>COMMUNITY TRUST</span>
            </div>

            <h2
              id="reviews-heading"
              className="font-display text-3xl sm:text-5xl font-normal text-black tracking-tight mb-4"
            >
              Loved by our <br />
              <span className="italic font-normal text-[#FF2A85]">clients.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
              Real experiences from people who have visited Sonia Beauty Salon in Mazgaon and Byculla.
            </p>

            {/* Visual 357 Highlight Container with pulsing halo */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-7 sm:p-8 rounded-xs bg-black text-white border border-neutral-800 shadow-xl w-full relative group hover:border-[#FF2A85]/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-display text-6xl sm:text-7xl font-semibold text-white tracking-tight">
                    {count}
                  </span>
                  <span className="font-display text-4xl font-normal text-[#FF2A85]">+</span>
                </div>

                <div className="flex items-center space-x-1 text-[#FF2A85]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF2A85]" />
                  ))}
                </div>
              </div>

              <div className="text-xs uppercase tracking-[0.22em] font-semibold text-white mt-1 mb-3 flex items-center space-x-2">
                <span>CLIENT REVIEWS</span>
                <span className="w-2 h-2 rounded-full bg-[#FF2A85] animate-ping" />
              </div>

              {/* Animated thin hot pink divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? '100%' : 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                className="h-[2px] bg-[#FF2A85] mb-4"
              />

              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Celebrating real beauty transformations, gentle styling, and trusted neighbourhood hospitality.
              </p>
            </motion.div>

            <a
              id="reviews-see-more-cta"
              href={salonData.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-black hover:text-[#FF2A85] transition-colors mt-7"
            >
              <span>See More Reviews on Google</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#FF2A85]" />
            </a>
          </div>

          {/* Right Column: Carousel of Reviews */}
          <div className="lg:col-span-7">
            <div className="relative bg-black text-white p-7 sm:p-10 rounded-xs border border-neutral-800 shadow-2xl min-h-[340px] flex flex-col justify-between">
              {/* Top Quote Icon & Index Counter */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-[#FF2A85]/80" />
                <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                  {activeReviewIndex + 1} / {clientReviews.length}
                </span>
              </div>

              {/* Review Text with AnimatePresence */}
              <div className="my-auto min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReviewIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-100 font-light leading-relaxed italic mb-6">
                      "{clientReviews[activeReviewIndex].reviewText}"
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div>
                        <h4 className="font-display text-lg font-medium text-white">
                          {clientReviews[activeReviewIndex].clientName}
                        </h4>
                        <p className="text-xs text-neutral-400 tracking-wide mt-0.5">
                          {clientReviews[activeReviewIndex].location} •{' '}
                          <span className="text-[#FF2A85] font-medium">
                            {clientReviews[activeReviewIndex].service}
                          </span>
                        </p>
                      </div>

                      <span className="text-[11px] text-neutral-300 uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-xs">
                        {clientReviews[activeReviewIndex].date}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/10">
                <div className="flex items-center space-x-1.5">
                  {clientReviews.map((_, idx) => (
                    <button
                      key={idx}
                      id={`review-dot-${idx}`}
                      onClick={() => setActiveReviewIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeReviewIndex === idx ? 'w-6 bg-[#FF2A85]' : 'w-2 bg-white/30 hover:bg-[#FF2A85]'
                      }`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <motion.button
                    id="review-prev-btn"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FF2A85] hover:bg-[#FF2A85] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    id="review-next-btn"
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-[#FF2A85] hover:bg-[#FF2A85] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
