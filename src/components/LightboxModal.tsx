import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      id="gallery-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF2A85] text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Button */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF2A85] text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF2A85] text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xs border-2 border-[#FF2A85]/50 shadow-2xl bg-black">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#FF2A85] font-semibold">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-white font-light mt-1">
            {currentItem.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
