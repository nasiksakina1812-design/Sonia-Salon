import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { salonData } from '../data/salonData';

interface MobileBookingBarProps {
  onOpenBooking: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      id="floating-mobile-cta-bar"
      aria-label="Mobile Quick Booking Action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-[#FF2A85]/40 px-4 py-3 shadow-2xl flex items-center justify-between"
    >
      <div className="flex flex-col pr-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF2A85] font-semibold">
          Sonia Beauty Salon
        </span>
        <span className="text-xs font-medium text-white">
          Ready for your glow-up?
        </span>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <a
          id="mobile-bar-quick-call"
          href={`tel:${salonData.phone}`}
          className="w-10 h-10 rounded-sm bg-white/10 hover:bg-[#FF2A85] border border-white/20 text-[#FF2A85] hover:text-white flex items-center justify-center transition-colors"
          aria-label={`Call Sonia Beauty Salon at ${salonData.phone}`}
        >
          <Phone className="w-4 h-4" />
        </a>

        <button
          id="mobile-bar-book-now-btn"
          onClick={onOpenBooking}
          className="px-5 py-2.5 bg-[#FF2A85] text-white hover:bg-white hover:text-black font-semibold text-xs uppercase tracking-[0.18em] rounded-sm transition-all duration-300 shadow-md flex items-center space-x-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span>Book Now</span>
        </button>
      </div>
    </aside>
  );
};
