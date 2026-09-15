import React from 'react';
import { Instagram, Phone, MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#000000] text-white pt-20 pb-12 border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              id="footer-logo-link"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.16em] text-white mb-3 hover:text-[#FF2A85] transition-colors"
            >
              {salonData.name.toUpperCase()}
            </a>

            <p className="font-display italic text-lg sm:text-xl text-[#FF2A85] mb-4">
              Beauty, confidence & a little time for yourself.
            </p>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
              A boutique beauty and hair salon dedicated to personal care and attentive service in Mazgaon, Byculla, Mumbai.
            </p>

            <button
              id="footer-book-appointment-btn"
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#FF2A85] text-white hover:bg-white hover:text-black transition-colors rounded-sm uppercase tracking-[0.18em] text-xs font-semibold cursor-pointer shadow-md"
            >
              Book Appointment
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FF2A85] font-semibold mb-5 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-neutral-300 hover:text-[#FF2A85] transition-colors font-light tracking-wide inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FF2A85] font-semibold mb-5 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONNECT WITH US</span>
            </h4>

            <div className="space-y-3.5 mb-6">
              {/* Instagram */}
              <a
                id="footer-social-instagram"
                href={salonData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-neutral-300 hover:text-[#FF2A85] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF2A85]">
                  <Instagram className="w-4 h-4 text-[#FF2A85]" />
                </div>
                <span>Instagram ({salonData.instagramHandle})</span>
              </a>

              {/* WhatsApp */}
              <a
                id="footer-social-whatsapp"
                href={`https://wa.me/${salonData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-neutral-300 hover:text-[#FF2A85] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF2A85]">
                  <MessageSquare className="w-4 h-4 text-[#FF2A85]" />
                </div>
                <span>WhatsApp ({salonData.formattedPhone})</span>
              </a>

              {/* Call */}
              <a
                id="footer-social-call"
                href={`tel:${salonData.phone}`}
                className="flex items-center space-x-3 text-sm text-neutral-300 hover:text-[#FF2A85] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF2A85]">
                  <Phone className="w-4 h-4 text-[#FF2A85]" />
                </div>
                <span>Call ({salonData.phone})</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Shop No. 1, Rambhau Bhogle Marg, Opp. Saifee Park, Anjeer Wadi, Mazgaon, Mumbai 400010
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Sonia Beauty Salon. All rights reserved.</p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-[#FF2A85] hover:text-white transition-colors cursor-pointer group font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
