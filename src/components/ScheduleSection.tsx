import React from 'react';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { OfficeLiveStatus } from '../types';
import { OFFICE_SCHEDULE, OFFICE_CONTACT_INFO } from '../data/scheduleData';

interface ScheduleSectionProps {
  liveStatus: OfficeLiveStatus;
  onOpenBooking: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  liveStatus,
  onOpenBooking,
}) => {
  // Determine current day of week (0-6)
  const currentDayIndex = new Date().getDay();

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-blue-100 text-blue-700 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">
            مواعيد وساعات العمل الرسمية
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            جدول استقبال المراجعين والاستشارات
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            يسعدنا استقبالكم في مقر المكتب أو تقديم الاستشارات الهاتفية وعبر الفيديو وفق الجدول الزمني المعتمد أدناه.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Timetable Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">ساعات العمل الأسبوعية</h3>
                <p className="text-xs text-slate-500">مواعيد استقبال الاتصالات والاستشارات</p>
              </div>

              {/* Status Pill */}
              <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${
                liveStatus.isOpen ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-blue-100 text-blue-900 border border-blue-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${liveStatus.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-blue-600'}`}></span>
                <span>{liveStatus.messageAr}</span>
              </div>
            </div>

            {/* Days Table */}
            <div className="space-y-2.5">
              {OFFICE_SCHEDULE.map((item) => {
                const isToday = item.dayIndex === currentDayIndex;

                return (
                  <div
                    key={item.dayIndex}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg border transition-all ${
                      isToday
                        ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/20 shadow-xs'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    {/* Day Name */}
                    <div className="flex items-center gap-2.5 mb-2 sm:mb-0">
                      <span className={`font-bold text-sm ${isToday ? 'text-blue-900' : 'text-slate-900'}`}>
                        {item.dayNameAr}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({item.dayNameIt})
                      </span>
                      {isToday && (
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          اليوم
                        </span>
                      )}
                    </div>

                    {/* Working Hours */}
                    <div className="text-xs sm:text-sm">
                      {item.isClosed ? (
                        <span className="text-red-600 font-bold bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                          مغلق (Chiuso)
                        </span>
                      ) : (
                        <div className="flex items-center gap-2 flex-wrap" dir="ltr">
                          {item.morning && (
                            <span className="bg-slate-100 text-slate-800 font-bold px-2.5 py-1 rounded-md border border-slate-200">
                              {item.morning}
                            </span>
                          )}
                          {item.afternoon && (
                            <span className="bg-slate-100 text-slate-800 font-bold px-2.5 py-1 rounded-md border border-slate-200">
                              {item.afternoon}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note below timetable */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
              <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>
                <strong>ملاحظة هامة:</strong> لتفادي الانتظار وضمان دراسة ملفكم بعناية، يُفضل دائماً حجز موعد مسبق قبل الحضور إلى المكتب.
              </span>
            </div>
          </div>

          {/* Quick Consultation & Contact Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Appointment Booking Trigger Box */}
            <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-xl border border-slate-700 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-600 text-white font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-white">حجز موعد مسبق</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                      استشارة مجانية
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">تأكيد فوري ودراسة أولية لملفك بدون أي مقابل</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                اختر التوقيت واليوم المناسب لك ضمن ساعات الدوام، وسيقوم المحامي أو فريق المكتب بتأكيد الموعد وإعلامك بالأوراق المطلوبة.
              </p>

              <div className="space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer text-sm"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>تحديد موعد استشارة الآن</span>
                </button>

                <a
                  href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن أقرب موعد متاح للاستشارة القانونية.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 py-3 px-4 rounded-lg border border-slate-700 font-semibold transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>استفسار فوري عبر واتساب</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-700" />
                <span>بيانات الاتصال والمكتب</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                  <a href={`tel:${OFFICE_CONTACT_INFO.phone}`} className="hover:text-blue-700 font-bold" dir="ltr">
                    {OFFICE_CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>الرد السريع متاح طيلة أوقات الدوام الرسمي</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>خدمات قانونية للمقيمين بالمغرب أو إيطاليا</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
