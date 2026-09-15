/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SignatureExperience } from './components/SignatureExperience';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBookingBar } from './components/MobileBookingBar';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] selection:bg-[#FF2A85] selection:text-white flex flex-col antialiased pb-16 md:pb-0">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main id="main-content" className="flex-1">
        {/* Full-Screen Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 357+ Reviews Trust Bar */}
        <TrustBar />

        {/* Editorial Two-Column About Section */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Category Tabs & Interactive Services Grid */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Dark Espresso Signature Experience */}
        <SignatureExperience onOpenBooking={() => handleOpenBooking()} />

        {/* Filterable Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* Instagram Integration */}
        <InstagramSection />

        {/* 357 Reviews Counter & Carousel */}
        <ReviewsSection />

        {/* Why Choose Sonia Feature Blocks */}
        <WhyChooseUs />

        {/* Primary Appointment Conversion Section */}
        <BookingSection preselectedService={selectedServiceForBooking} />

        {/* Contact Information & Embedded Google Map */}
        <ContactSection />
      </main>

      {/* Deep Espresso Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Fixed Floating CTA on Mobile */}
      <MobileBookingBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
