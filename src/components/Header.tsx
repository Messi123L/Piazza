import React from 'react';
import { 
  Phone, 
  Clock, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X,
  MapPin
} from 'lucide-react';
import { OfficeLiveStatus } from '../types';
import { OFFICE_CONTACT_INFO } from '../data/scheduleData';
import { PiazzaLogo } from './Logo';

interface HeaderProps {
  liveStatus: OfficeLiveStatus;
  onOpenBooking: (serviceId?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  liveStatus,
  onOpenBooking,
  activeSection,
  setActiveSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'services', label: 'الخدمات القانونية (10)' },
    { id: 'schedule', label: 'مواعيد العمل' },
    { id: 'eligibility', label: 'حاسبة الأهلية' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent('مرحباً مكتب PIAZZA للمحاماة (الأستاذ ماسيميليانو)، أرغب في حجز موعد استشارة قانونية.');

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs transition-all">
      {/* Top utility bar */}
      <div className="bg-slate-50 text-slate-700 text-xs py-2.5 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Live Office Status Badge */}
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-2xs">
              <span className={`inline-block w-2 h-2 rounded-full ${liveStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-blue-600'}`}></span>
              <span className="font-semibold text-slate-800">
                {liveStatus.messageAr}
              </span>
              <span className="text-slate-900 font-bold text-xs border-r border-slate-200 pr-2 mr-1">
                {liveStatus.italianTimeFormatted}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-slate-600 text-xs">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>الإثنين - الجمعة: 10:00–13:00 | 15:00–19:00 — السبت: 10:00–14:00</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-800 bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-2xs">
              <span>خدمات قانونية للمقيمين بالمغرب أو إيطاليا</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-300">
              <span>✦ الاستشارة مجانية</span>
            </div>
            <a 
              href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب مباشر</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={`tel:${OFFICE_CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-800 hover:text-blue-700 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span dir="ltr">{OFFICE_CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Studio Name */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <PiazzaLogo variant="full" theme="light" size="md" />
            <div className="hidden sm:flex flex-col border-r border-slate-200 pr-3 mr-1">
              <span className="text-xs font-bold text-slate-800">الأستاذ ماسيميليانو</span>
              <span className="text-[11px] text-blue-600 font-medium">Avv. Massimiliano</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4.5 py-2.5 rounded-lg text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز موعد استشارة</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-blue-600 text-white p-2 rounded-lg text-xs font-bold"
              title="حجز موعد"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-right px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-blue-50 text-blue-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز استشارة قانونية</span>
            </button>
            <a
              href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب فورية ({OFFICE_CONTACT_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
