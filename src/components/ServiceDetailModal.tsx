import React from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Scale, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { LegalService } from '../types';
import { OFFICE_CONTACT_INFO } from '../data/scheduleData';

interface ServiceDetailModalProps {
  service: LegalService | null;
  onClose: () => void;
  onBookConsultation: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!service) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${service.number} — ${service.titleAr} | مكتب PIAZZA للمحاماة`,
        text: service.summaryAr,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${service.number} — ${service.titleAr}: ${service.summaryAr}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappText = encodeURIComponent(
    `مرحباً مكتب PIAZZA للمحاماة (الأستاذ ماسيميليانو)، بخصوص الخدمة القانونية (${service.number} — ${service.titleAr})، أرغب في استشارة قانونية.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 text-right max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative shrink-0 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 left-5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl sm:text-3xl font-black text-blue-400">
              {service.number}
            </span>
            <span className="h-4 w-px bg-slate-700"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              {service.titleIt}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {service.titleAr}
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            {service.summaryAr}
          </p>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Detailed Points */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-700" />
              <span>نطاق التمثيل والإجراءات المشمولة في هذه الخدمة</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {service.detailedPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>المستندات والأوراق المبدئية المطلوبة للبدء</span>
            </h3>
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-lg p-4 space-y-2">
              <p className="text-xs text-blue-950 mb-2 font-medium">
                يُرجى تجهيز نسخ واضحة من الوثائق التالية لعرضها خلال الاستشارة القانونية:
              </p>
              <ul className="space-y-1.5">
                {service.requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline & Legal Guarantee Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">المدة الزمنية المتوقعة للإجراء</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{service.timelineTypical}</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">ضمان السرية والمهنية</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  معالجة كافة البيانات والوثائق بسرية تامة طبقاً لقانون حماية البيانات الأوروبي (GDPR).
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-300 hover:bg-white transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? 'تم نسخ الرابط!' : 'مشاركة الخدمة'}</span>
          </button>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسار واتساب</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookConsultation(service.id);
              }}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز موعد لهذه الخدمة</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
