import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { salonData, servicesData } from '../data/salonData';
import { AppointmentFormData } from '../types';

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '10:30 AM - 12:00 PM',
    '12:00 PM - 01:30 PM',
    '02:00 PM - 03:30 PM',
    '03:30 PM - 05:00 PM',
    '05:00 PM - 06:30 PM',
    '06:30 PM - 08:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.service) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  // Build WhatsApp pre-filled message
  const generateWhatsAppUrl = (data: AppointmentFormData) => {
    const text = encodeURIComponent(
      `Hello Sonia Beauty Salon,\n\nI would like to request an appointment:\n- Name: ${data.fullName}\n- Phone: ${data.phoneNumber}\n- Service: ${data.service}\n- Preferred Date: ${data.preferredDate || 'Flexible'}\n- Preferred Time: ${data.preferredTime || 'Flexible'}\n${data.message ? `- Note: ${data.message}` : ''}\n\nPlease confirm availability. Thank you!`
    );
    return `https://wa.me/${salonData.whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="py-24 sm:py-32 bg-white text-black relative"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2A85] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>APPOINTMENTS</span>
          </div>

          <h2
            id="booking-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-black tracking-tight mb-4"
          >
            Ready for your <span className="italic text-[#FF2A85]">next look?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Book your visit or get in touch with our team.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#FAFAFA] rounded-xs border border-neutral-200 shadow-xl overflow-hidden">
          {/* Direct Assistance Strip in Jet Black & Hot Pink */}
          <div className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wider border-b border-[#FF2A85]/30">
            <span className="text-neutral-300 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#FF2A85]" />
              <span>Need an immediate consultation or priority slot?</span>
            </span>
            <div className="flex items-center space-x-4">
              <a
                id="booking-call-now-quick-link"
                href={`tel:${salonData.phone}`}
                className="inline-flex items-center space-x-1.5 text-[#FF2A85] hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {salonData.phone}</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                id="booking-whatsapp-quick-link"
                href={`https://wa.me/${salonData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-[#FF2A85] hover:text-white font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {!isSubmitted ? (
              <form id="appointment-enquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="booking-full-name"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                    >
                      Full Name <span className="text-[#FF2A85]">*</span>
                    </label>
                    <input
                      id="booking-full-name"
                      type="text"
                      required
                      placeholder="e.g. Alifiya Merchant"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="booking-phone-number"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                    >
                      Phone Number <span className="text-[#FF2A85]">*</span>
                    </label>
                    <input
                      id="booking-phone-number"
                      type="tel"
                      required
                      placeholder="e.g. 0987654321"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="booking-service-select"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                    >
                      Service <span className="text-[#FF2A85]">*</span>
                    </label>
                    <select
                      id="booking-service-select"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="Hair Care">
                        {servicesData
                          .filter((s) => s.category === 'HAIR')
                          .map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="Skin & Facials">
                        {servicesData
                          .filter((s) => s.category === 'SKIN')
                          .map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="Occasion & Makeup">
                        {servicesData
                          .filter((s) => s.category === 'MAKEUP')
                          .map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="Nail Art & Spa">
                        {servicesData
                          .filter((s) => s.category === 'NAILS')
                          .map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="Beauty Rituals">
                        {servicesData
                          .filter((s) => s.category === 'BEAUTY')
                          .map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                      </optgroup>
                      <option value="General Consultation">General Consultation / Other</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="booking-preferred-date"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-preferred-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all cursor-pointer"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="booking-preferred-time"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="booking-preferred-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all cursor-pointer"
                    >
                      <option value="">Select preferred time...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-xs uppercase tracking-[0.16em] font-semibold text-black mb-2"
                  >
                    Special Requests / Message <span className="text-neutral-500 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    placeholder="Tell us about your hair length, specific skin preference, or occasion details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xs text-black text-sm focus:outline-hidden focus:border-[#FF2A85] focus:ring-1 focus:ring-[#FF2A85] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500 font-light">
                    We will review your request and contact you to confirm timing.
                  </p>

                  <button
                    id="booking-submit-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-[#FF2A85] text-white hover:bg-black transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-xs font-semibold shadow-lg flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Appointment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Submission Confirmation State (STRICTLY complying with PRD Section 23) */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF2A85]/15 border-2 border-[#FF2A85] text-[#FF2A85] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-black mb-3">
                  Appointment Request Received
                </h3>

                {/* EXACT PRD wording */}
                <div className="p-5 rounded-xs bg-white border-2 border-[#FF2A85]/40 max-w-xl mx-auto mb-8 shadow-sm">
                  <p className="text-sm sm:text-base text-black leading-relaxed font-normal">
                    Thank you! Your appointment request has been received. Sonia Beauty Salon will contact you shortly to confirm your appointment.
                  </p>
                </div>

                {submittedData && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
                    <a
                      id="booking-confirm-whatsapp-btn"
                      href={generateWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#FF2A85] text-white hover:bg-black rounded-sm text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center space-x-2 shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message on WhatsApp</span>
                    </a>

                    <a
                      id="booking-confirm-call-btn"
                      href={`tel:${salonData.phone}`}
                      className="w-full sm:w-auto px-6 py-3.5 border-2 border-black text-black hover:border-[#FF2A85] hover:text-[#FF2A85] rounded-sm text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#FF2A85]" />
                      <span>Call {salonData.phone}</span>
                    </a>
                  </div>
                )}

                <button
                  id="booking-another-request-btn"
                  onClick={handleReset}
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-black underline underline-offset-4 cursor-pointer font-medium"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
