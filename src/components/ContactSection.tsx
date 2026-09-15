import React from 'react';
import { MapPin, Phone, Instagram, Clock, Navigation, MessageSquare } from 'lucide-react';
import { salonData } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 bg-[#000000] text-white relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>VISIT OUR STUDIO</span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4"
          >
            Come visit <span className="italic text-[#FF2A85]">us.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
            Conveniently located in Mazgaon, Byculla, directly opposite Saifee Park. We look forward to welcoming you.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Block */}
            <div className="p-6 sm:p-7 rounded-xs bg-[#141414] border border-white/10 shadow-md hover:border-[#FF2A85]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xs bg-[#FF2A85]/15 border border-[#FF2A85]/40 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-[#FF2A85]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-1.5">
                    Salon Address
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {salonData.address}
                  </p>
                  <p className="text-xs text-[#FF2A85] mt-2 font-medium">
                    Opp. Saifee Park • Anjeer Wadi • Thakkar Estate
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Block */}
            <div className="p-6 sm:p-7 rounded-xs bg-[#141414] border border-white/10 shadow-md hover:border-[#FF2A85]/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xs bg-[#FF2A85]/15 border border-[#FF2A85]/40 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-[#FF2A85]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-1.5">
                    Phone Enquiries
                  </h3>
                  <a
                    id="contact-phone-call-link"
                    href={`tel:${salonData.phone}`}
                    className="text-lg font-display font-medium text-white hover:text-[#FF2A85] transition-colors block"
                  >
                    {salonData.formattedPhone}
                  </a>

                  <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-white/10">
                    <a
                      id="contact-call-direct-btn"
                      href={`tel:${salonData.phone}`}
                      className="text-xs uppercase tracking-wider font-semibold text-white hover:text-[#FF2A85] transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Call Now</span>
                      <span>→</span>
                    </a>
                    <a
                      id="contact-whatsapp-direct-btn"
                      href={`https://wa.me/${salonData.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-semibold text-white hover:text-[#FF2A85] transition-colors inline-flex items-center space-x-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#FF2A85]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Hours Block */}
            <div className="p-6 sm:p-7 rounded-xs bg-[#141414] border border-white/10 shadow-md hover:border-[#FF2A85]/50 transition-colors">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instagram */}
                <div className="flex items-start space-x-3">
                  <Instagram className="w-4 h-4 text-[#FF2A85] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
                      Instagram
                    </h4>
                    <a
                      id="contact-instagram-link"
                      href={salonData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 hover:text-[#FF2A85] transition-colors mt-0.5 block"
                    >
                      {salonData.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Opening Hours (strictly using provided PRD statement) */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#FF2A85] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
                      Opening Hours
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                      {salonData.openingHoursNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-xs border border-white/15 overflow-hidden shadow-xl bg-black flex-1 min-h-[380px] sm:min-h-[440px] flex flex-col">
              {/* Map Header Card */}
              <div className="p-4 sm:p-5 bg-[#141414] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                <div>
                  <h4 className="font-display text-lg font-medium text-white">
                    {salonData.name}
                  </h4>
                  <p className="text-xs text-neutral-400 tracking-wide">
                    {salonData.shortLocation}
                  </p>
                </div>

                <a
                  id="map-get-directions-btn"
                  href={salonData.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF2A85] text-white hover:bg-white hover:text-black text-xs uppercase tracking-[0.18em] font-semibold rounded-xs transition-colors shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="flex-1 relative w-full h-full min-h-[300px]">
                <iframe
                  title="Sonia Beauty Salon Mazgaon Location Map"
                  src="https://maps.google.com/maps?q=Shop+No+1+Rambhau+Bhogle+Marg+opp+Saifee+Park+Mazgaon+Mumbai+Maharashtra+400010&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
