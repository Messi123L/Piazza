import React from 'react';
import { 
  Scale, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ChevronLeft,
  MessageCircle,
  Phone,
  Globe2
} from 'lucide-react';
import { OfficeLiveStatus } from '../types';
import { OFFICE_CONTACT_INFO } from '../data/scheduleData';
import { PiazzaLogo } from './Logo';

interface HeroProps {
  liveStatus: OfficeLiveStatus;
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  liveStatus,
  onOpenBooking,
  onExploreServices
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 sm:pt-14 sm:pb-24">
      {/* Background architectural legal grid / gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Top credibility pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-inner">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>STUDIO LEGALE PIAZZA • مكتب PIAZZA للمحاماة</span>
                <span className="bg-blue-600/30 text-blue-200 px-2 py-0.5 rounded text-[11px]">الأستاذ ماسيميليانو</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>الاستشارة القانونية مجانية 100% (Consulenza Gratuita)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              خدمات واستشارات قانونية <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-amber-200 via-blue-300 to-white">
                للمقيمين بالمغرب أو إيطاليا
              </span>
            </h1>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-bold">الاستشارة القانونية الأولية مجانية تماماً</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>خدمات واستشارات للمقيمين بالمغرب وإيطاليا</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>متابعة ملفات الإقامة، التأشيرات والجنسية</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>استشارات حضورية وعن بعد (واتساب وهاتف)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-600/20 transition-all active:scale-95 cursor-pointer text-base"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>حجز موعد استشارة</span>
              </button>

              <a
                href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('مرحباً أستاذ ماسيميليانو (مكتب PIAZZA للمحاماة)، أرغب في استشارة قانونية.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-lg shadow-md transition-all cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب: {OFFICE_CONTACT_INFO.phone}</span>
              </a>

              <button
                onClick={onExploreServices}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white px-4 py-3.5 rounded-lg border border-slate-700 font-semibold transition-all cursor-pointer text-sm"
              >
                <span>الخدمات الـ 10</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Working Hours & Office Schedule Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-blue-600 to-amber-500"></div>

              {/* Studio Emblem Badge */}
              <div className="mb-4 pb-4 border-b border-slate-800 flex items-center justify-between">
                <PiazzaLogo variant="full" theme="dark" size="sm" />
                <div className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                  liveStatus.isOpen ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-blue-950/80 text-blue-300 border border-blue-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${liveStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`}></span>
                  <span>{liveStatus.isOpen ? 'مفتوح الآن' : 'مغلق حالياً'}</span>
                </div>
              </div>

              {/* Exact Schedule Specified by User */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>أوقات العمل الرسمية وتلقي الاستشارات:</span>
                </div>

                {/* Mon - Fri */}
                <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white">
                    <span>من الإثنين إلى الجمعة</span>
                    <span className="text-slate-400 font-normal text-xs">Lun – Ven</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-md border border-slate-800 text-center">
                      <div className="text-slate-400 text-[11px] mb-0.5">الفترة الصباحية</div>
                      <div className="font-bold text-white text-sm" dir="ltr">10:00 – 13:00</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-md border border-slate-800 text-center">
                      <div className="text-slate-400 text-[11px] mb-0.5">الفترة المسائية</div>
                      <div className="font-bold text-white text-sm" dir="ltr">15:00 – 19:00</div>
                    </div>
                  </div>
                </div>

                {/* Saturday */}
                <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">يوم السبت (Sabato)</div>
                    <div className="text-slate-400 text-xs mt-0.5">دوام مستمر</div>
                  </div>
                  <div className="bg-slate-900 px-3.5 py-2 rounded-md border border-slate-800 text-center">
                    <div className="font-bold text-white text-sm" dir="ltr">10:00 – 14:00</div>
                  </div>
                </div>

                {/* Sunday */}
                <div className="px-3.5 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium">يوم الأحد (Domenica)</span>
                  <span className="text-red-400 font-bold uppercase tracking-wider text-xs">مغلق (Chiuso)</span>
                </div>
              </div>

              {/* Direct phone / whatsapp contact bar inside card */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="text-slate-400">الهاتف / واتساب:</span>
                <a href={`tel:${OFFICE_CONTACT_INFO.phone}`} className="font-bold text-white hover:text-blue-300" dir="ltr">
                  {OFFICE_CONTACT_INFO.phone}
                </a>
              </div>

              {/* Quick Consultation button in card */}
              <div className="mt-3">
                <div className="text-center mb-1 text-[11px] text-emerald-400 font-bold">
                  ✓ استشارة أولية مجانية بدون أي رسوم مسبقة
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all text-center cursor-pointer text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>طلب استشارة مجانية مع المحامي</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
