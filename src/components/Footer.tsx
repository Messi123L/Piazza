import React from 'react';
import { Scale, Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { OFFICE_CONTACT_INFO, OFFICE_SCHEDULE } from '../data/scheduleData';
import { LEGAL_SERVICES } from '../data/servicesData';
import { PiazzaLogo } from './Logo';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-right">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <PiazzaLogo variant="full" theme="dark" size="md" />
            </div>

            <div className="text-xs text-amber-300 font-semibold">
              الأستاذ ماسيميليانو • Avv. Massimiliano Piazza
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              مكتب استشارات وخدمات قانونية متكاملة للمقيمين بالمغرب أو إيطاليا. نقدم المشورة والتمثيل القانوني الرصين للأفراد والشركات في كافة قضايا الهجرة، الإقامة، الجنسية، العمل، وحوادث السير.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                طلب استشارة قانونية الآن
              </button>
            </div>
          </div>

          {/* Col 2: Services 01-10 (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white mb-3 border-b border-slate-800 pb-2">
              الخدمات القانونية (10)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {LEGAL_SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s.id)}
                  className="text-right text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[10px] font-bold text-blue-400">{s.number}</span>
                  <span className="line-clamp-1">{s.titleAr}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Working Hours & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white mb-3 border-b border-slate-800 pb-2">
              توقيت العمل والاتصال
            </h4>

            {/* Reiteration of exact user requested hours */}
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center justify-between font-bold text-white">
                <span>الإثنين إلى الجمعة:</span>
                <span className="text-blue-400 font-mono" dir="ltr">10:00–13:00 | 15:00–19:00</span>
              </div>
              <div className="flex items-center justify-between font-bold text-white">
                <span>السبت:</span>
                <span className="text-blue-400 font-mono" dir="ltr">10:00–14:00 (زوالاً)</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 text-[11px] pt-1 border-t border-slate-800">
                <span>الأحد:</span>
                <span className="text-red-400 font-semibold">مغلق (Chiuso)</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${OFFICE_CONTACT_INFO.phone}`} className="hover:text-white font-bold" dir="ltr">
                  {OFFICE_CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  واتساب مباشر: {OFFICE_CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>خدمات قانونية للمقيمين بالمغرب أو إيطاليا (حضورياً وعن بعد)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-right">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} — STUDIO LEGALE PIAZZA • الأستاذ ماسيميليانو (Avv. Massimiliano).
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>استشارات قانونية موثوقة للمقيمين بالمغرب أو إيطاليا</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
