import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { salonData } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-[#FF2A85]/25 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex flex-col tracking-wider focus:outline-hidden"
        >
          <span className="font-display text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-[0.18em] transition-colors text-white group-hover:text-[#FF2A85]">
            {salonData.name.toUpperCase()}
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-light -mt-0.5 text-[#FF2A85]">
            Mazgaon • Mumbai
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[13px] tracking-[0.14em] uppercase font-medium transition-colors relative py-1 text-white hover:text-[#FF2A85] nav-link-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center">
          <button
            id="nav-book-appointment-cta"
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-sm cursor-pointer shadow-md bg-[#FF2A85] text-white hover:bg-white hover:text-black border border-[#FF2A85]"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-sm transition-colors cursor-pointer text-white hover:text-[#FF2A85] hover:bg-white/10"
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#0A0A0A] text-white border-b border-[#FF2A85]/30 shadow-2xl px-6 py-6 transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-xl text-white hover:text-[#FF2A85] tracking-wider py-1 border-b border-white/10 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#FF2A85]">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col space-y-3">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#FF2A85] hover:bg-white hover:text-black text-white py-3.5 px-4 rounded-sm text-center text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                id="mobile-nav-call-link"
                href={`tel:${salonData.phone}`}
                className="w-full border border-white/20 text-white hover:border-[#FF2A85] hover:text-[#FF2A85] py-3 px-4 rounded-sm text-center text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF2A85]" />
                <span>Call Salon</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
