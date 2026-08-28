import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MessageCircle, 
  Phone, 
  User, 
  Mail, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  AlertCircle
} from 'lucide-react';
import { LEGAL_SERVICES } from '../data/servicesData';
import { OFFICE_CONTACT_INFO, OFFICE_SCHEDULE } from '../data/scheduleData';
import { AppointmentFormData, AppointmentRecord } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onSuccessBooked?: (record: AppointmentRecord) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  onSuccessBooked,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'immigration-residence',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '11:00 – 11:30',
    cityInItaly: '',
    caseDescription: '',
    urgency: 'normal',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<AppointmentRecord | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    // Morning (10:00 - 13:00)
    { time: '10:00 – 10:30', label: '10:00 صباحاً (فترة الصباح)' },
    { time: '10:30 – 11:00', label: '10:30 صباحاً' },
    { time: '11:00 – 11:30', label: '11:00 صباحاً' },
    { time: '11:30 – 12:00', label: '11:30 صباحاً' },
    { time: '12:00 – 12:30', label: '12:00 زوالاً' },
    { time: '12:30 – 13:00', label: '12:30 زوالاً' },
    // Afternoon (15:00 - 19:00)
    { time: '15:00 – 15:30', label: '15:00 مساءً (فترة المساء)' },
    { time: '15:30 – 16:00', label: '15:30 مساءً' },
    { time: '16:00 – 16:30', label: '16:00 مساءً' },
    { time: '16:30 – 17:00', label: '16:30 مساءً' },
    { time: '17:00 – 17:30', label: '17:00 مساءً' },
    { time: '17:30 – 18:00', label: '17:30 مساءً' },
    { time: '18:00 – 18:30', label: '18:00 مساءً' },
    { time: '18:30 – 19:00', label: '18:30 مساءً' },
  ];

  const selectedService = LEGAL_SERVICES.find(s => s.id === formData.serviceId) || LEGAL_SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const record: AppointmentRecord = {
      ...formData,
      id: 'REQ-' + Date.now().toString().slice(-6),
      createdAt: new Date().toISOString(),
      status: 'pending',
      serviceTitle: `${selectedService.number} — ${selectedService.titleAr}`
    };

    // Save to local storage
    try {
      const existingStr = localStorage.getItem('piazza_consultations');
      const existing: AppointmentRecord[] = existingStr ? JSON.parse(existingStr) : [];
      existing.unshift(record);
      localStorage.setItem('piazza_consultations', JSON.stringify(existing));
    } catch {}

    setSubmittedRecord(record);
    setIsSubmitted(true);
    if (onSuccessBooked) {
      onSuccessBooked(record);
    }
  };

  const constructWhatsAppLink = () => {
    const text = `السلام عليكم مكتب PIAZZA للمحاماة (الأستاذ ماسيميليانو)،
أرغب في حجز موعد استشارة قانونية:
📌 الاسم الكامل: ${formData.fullName || 'غير محدد'}
📞 رقم الهاتف: ${formData.phone || 'غير محدد'}
🏙️ المدينة / الإقليم: ${formData.cityInItaly || 'غير محددة'}
⚖️ نوع الخدمة: ${selectedService.number} — ${selectedService.titleAr} (${selectedService.titleIt})
📅 التاريخ المفضل: ${formData.preferredDate}
⏰ التوقيت المفضل: ${formData.preferredTimeSlot}
📝 تفاصيل الموضوع: ${formData.caseDescription || 'يرجى مراجعة تفاصيل الملف'}
⚡ درجة الأهمية: ${formData.urgency === 'immediate' ? 'طارئة جداً' : formData.urgency === 'urgent' ? 'عاجلة' : 'عادية'}`;

    return `https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 text-right max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative shrink-0 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 left-5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
            <Calendar className="w-4 h-4" />
            <span>طلب موعد استشارة قانونية (STUDIO LEGALE PIAZZA)</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            مكتب PIAZZA للمحاماة • الأستاذ ماسيميليانو (Massimiliano)
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            خدمات قانونية للمقيمين بالمغرب أو إيطاليا | الإثنين-الجمعة (10:00-13:00 و 15:00-19:00) • السبت (10:00-14:00)
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    الاسم الكامل (Nome e Cognome) *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="مثال: يوسف الإدريسي"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-3 pr-9 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    رقم الهاتف أو الواتساب *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="06XX XXXXXX أو +212 6XX..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-3 pr-9 py-2.5 rounded-lg border border-slate-300 text-sm text-left focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Service Selection (All 10 services) */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  نوع الخدمة القانونية المطلوبة *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-medium"
                >
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.number} — {s.titleAr} ({s.titleIt})
                    </option>
                  ))}
                </select>
              </div>

              {/* City & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    المدينة / الإقليم (المغرب أو إيطاليا)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="مثال: الدار البيضاء، طنجة، الرباط، ميلانو، روما..."
                      value={formData.cityInItaly}
                      onChange={(e) => setFormData({ ...formData, cityInItaly: e.target.value })}
                      className="w-full pl-3 pr-9 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    طبيعة الاستشارة ودرجة الأهمية
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                  >
                    <option value="normal">عادية (خلال 48 ساعة)</option>
                    <option value="urgent">عاجلة (موعد رسمي أو جلسة قريبة)</option>
                    <option value="immediate">طارئة جداً (إجراء أو توقيف مباشر)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot (strictly aligned with office hours) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    التاريخ المفضل للموعد *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    الوقت المفضل (ضمن ساعات الدوام) *
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot.time}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  شرح موجز لحالتك القانونية أو استفسارك
                </label>
                <textarea
                  rows={3}
                  placeholder="اكتب هنا تفاصيل المشكلة أو تواريخ المواعيد المهمة..."
                  value={formData.caseDescription}
                  onChange={(e) => setFormData({ ...formData, caseDescription: e.target.value })}
                  className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>تأكيد وتسجيل طلب الموعد</span>
                  </button>

                  <a
                    href={constructWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-sm shadow-md transition-all text-center cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>إرسال الطلب عبر واتساب الآن</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>بياناتك محمية بسرية المحاماة التامة وبأعلى معايير الأمان القانوني.</span>
                </p>
              </div>

            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                تم استلام طلب الموعد بنجاح!
              </h4>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                شكراً لك <strong>{submittedRecord?.fullName}</strong>. رقم طلبك هو{' '}
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {submittedRecord?.id}
                </span>
                . سيقوم الأستاذ ماسيميليانو (Massimiliano) أو سكرتارية مكتب PIAZZA للمحاماة بالتواصل معك لتأكيد الموعد وإفادتكم بالخطوات التالية.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-right max-w-md mx-auto space-y-1.5">
                <div><strong>الخدمة:</strong> {submittedRecord?.serviceTitle}</div>
                <div><strong>التاريخ والوقت:</strong> {submittedRecord?.preferredDate} ({submittedRecord?.preferredTimeSlot})</div>
                <div><strong>الهاتف:</strong> <span dir="ltr">{submittedRecord?.phone}</span></div>
                {submittedRecord?.cityInItaly && (
                  <div><strong>المدينة / الإقليم:</strong> {submittedRecord.cityInItaly}</div>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={constructWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-lg text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تأكيد الموعد عبر الواتساب فوراً</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2.5 px-5 rounded-lg text-xs sm:text-sm cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
