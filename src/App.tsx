import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ScheduleSection } from './components/ScheduleSection';
import { EligibilityChecker } from './components/EligibilityChecker';
import { ConsultationModal } from './components/ConsultationModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { getOfficeLiveStatus } from './data/scheduleData';
import { LEGAL_SERVICES } from './data/servicesData';
import { LegalService, OfficeLiveStatus, AppointmentRecord } from './types';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { OFFICE_CONTACT_INFO } from './data/scheduleData';

export default function App() {
  const [liveStatus, setLiveStatus] = useState<OfficeLiveStatus>(getOfficeLiveStatus());
  const [activeSection, setActiveSection] = useState<string>('services');
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Update live status periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStatus(getOfficeLiveStatus());
    }, 30000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = LEGAL_SERVICES.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent('مرحباً مكتب PIAZZA للمحاماة (الأستاذ ماسيميليانو)، أرغب في استشارة قانونية.');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-700 selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        liveStatus={liveStatus}
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          liveStatus={liveStatus}
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => {
            const elem = document.getElementById('services');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10 Legal Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onBookConsultation={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Working Hours & Schedule Section */}
        <ScheduleSection
          liveStatus={liveStatus}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Eligibility & Case Evaluation Tool */}
        <EligibilityChecker
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={handleSelectServiceById}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Service Details Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* Consultation & Appointment Request Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col items-center gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 text-white shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="الرجوع للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Action */}
        <a
          href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group relative cursor-pointer"
          title="محادثة واتساب مباشرة مع المحامي"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            واتساب مباشر مع المحامي
          </span>
        </a>
      </div>
    </div>
  );
}
