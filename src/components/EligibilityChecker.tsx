import React, { useState } from 'react';
import { 
  Award, 
  Plane, 
  Briefcase, 
  Car, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowLeft,
  RefreshCw,
  Calendar,
  MessageCircle,
  FileCheck2
} from 'lucide-react';
import { OFFICE_CONTACT_INFO } from '../data/scheduleData';

interface EligibilityCheckerProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({
  onOpenBooking,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<'citizenship' | 'residence' | 'labor' | 'accident'>('citizenship');
  
  // Citizenship state
  const [yearsInItaly, setYearsInItaly] = useState<number>(10);
  const [hasLanguageB1, setHasLanguageB1] = useState<boolean>(true);
  const [hasCleanRecord, setHasCleanRecord] = useState<boolean>(true);
  const [hasSufficientIncome, setHasSufficientIncome] = useState<boolean>(true);

  // Residence state
  const [hasValidContract, setHasValidContract] = useState<boolean>(true);
  const [hasSuitableHousing, setHasSuitableHousing] = useState<boolean>(true);

  // Labor state
  const [unpaidMonths, setUnpaidMonths] = useState<number>(0);
  const [unpaidTfr, setUnpaidTfr] = useState<boolean>(false);
  const [wrongfulDismissal, setWrongfulDismissal] = useState<boolean>(false);

  // Accident state
  const [hasMedicalReport, setHasMedicalReport] = useState<boolean>(true);
  const [accidentDaysAgo, setAccidentDaysAgo] = useState<number>(15);

  const renderCitizenshipResult = () => {
    const isEligibleYears = yearsInItaly >= 10;
    const canApply = isEligibleYears && hasLanguageB1 && hasCleanRecord && hasSufficientIncome;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-xs font-bold text-slate-900 mb-1.5">
              سنوات الإقامة القانونية المتصلة (Residenza Anagrafica):
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="25"
                value={yearsInItaly}
                onChange={(e) => setYearsInItaly(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <span className="font-bold text-blue-700 text-sm whitespace-nowrap">{yearsInItaly} سنوات</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">شهادة اللغة الإيطالية (B1):</span>
            <button
              onClick={() => setHasLanguageB1(!hasLanguageB1)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                hasLanguageB1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {hasLanguageB1 ? 'متوفرة / معتمد' : 'غير متوفرة حالياً'}
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">إثبات الدخل المالي للسنوات الثلاث الأخيرة:</span>
            <button
              onClick={() => setHasSufficientIncome(!hasSufficientIncome)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                hasSufficientIncome ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {hasSufficientIncome ? 'مستوفٍ للحد الأدنى' : 'أقل من المطلوب'}
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">السجل العدلي والجنائي خالي من السوابق:</span>
            <button
              onClick={() => setHasCleanRecord(!hasCleanRecord)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                hasCleanRecord ? 'bg-emerald-600 text-white' : 'bg-blue-100 text-blue-900'
              }`}
            >
              {hasCleanRecord ? 'خالٍ ونظيف' : 'توجد ملاحظات/سوابق'}
            </button>
          </div>
        </div>

        {/* Result assessment */}
        <div className={`p-4 rounded-lg border ${
          canApply 
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
            : 'bg-blue-50 border-blue-200 text-blue-950'
        }`}>
          <div className="flex items-start gap-3">
            {canApply ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            )}
            <div>
              <h4 className="font-bold text-sm mb-1">
                {canApply 
                  ? 'مؤشرات ممتازة: ملفك جاهز للتقديم الرسمي على الجنسية الإيطالية!' 
                  : 'توجد نقاط تحتاج إلى مراجعة قانونية وتسوية قبل تقديم الملف'}
              </h4>
              <p className="text-xs leading-relaxed">
                {canApply
                  ? 'يمكن للأستاذ ماسيميليانو (Avv. Massimiliano) وفريق مكتب PIAZZA إعداد وتدقيق مستنداتك وتقديم الطلب الرسمي ومتابعته لتجنب أي رفض أو تأخير.'
                  : 'ننصح بحجز موعد استشارة لدراسة ملفك وحل المعوقات مثل شهادة B1، حساب سنوات الإقامة بدقة، أو تسوية السوابق.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLaborResult = () => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-xs font-bold text-slate-900 mb-1.5">
              هل هناك رواتب أو ساعات إضافية لم تُدفع؟
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setUnpaidMonths(unpaidMonths === 0 ? 3 : 0)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  unpaidMonths > 0 ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {unpaidMonths > 0 ? 'نعم، توجد متأخرات' : 'لا، الرواتب منتظمة'}
              </button>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">مكافأة نهاية الخدمة (TFR) معلقة:</span>
            <button
              onClick={() => setUnpaidTfr(!unpaidTfr)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                unpaidTfr ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {unpaidTfr ? 'نعم، لم أستلمها' : 'تم استلامها'}
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">هل تعرضت لفصل أو طرد تعسفي؟</span>
            <button
              onClick={() => setWrongfulDismissal(!wrongfulDismissal)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                wrongfulDismissal ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {wrongfulDismissal ? 'نعم، تم فصلي' : 'لا'}
            </button>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-950">
          <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-700" />
            <span>الحماية القانونية العمالية والمهل المحددة</span>
          </h4>
          <p className="text-xs leading-relaxed">
            وفق قانون العمل، للطعن في الفصل التعسفي مهل قانونية محددة. كما يحق لك المطالبة بكافة الفروقات المالية وTFR عبر رفع نزاع عمالي مدعوم قانونياً.
          </p>
        </div>
      </div>
    );
  };

  const renderAccidentResult = () => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">هل لديك تقرير طبي من الطوارئ (Pronto Soccorso)؟</span>
            <button
              onClick={() => setHasMedicalReport(!hasMedicalReport)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                hasMedicalReport ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {hasMedicalReport ? 'نعم، متوفر' : 'لا يوجد تقرير'}
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-xs font-bold text-slate-900 mb-1.5">
              الفترة منذ وقوع الحادث (أيام):
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="90"
                value={accidentDaysAgo}
                onChange={(e) => setAccidentDaysAgo(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <span className="font-bold text-blue-700 text-sm whitespace-nowrap">{accidentDaysAgo} يوم</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-950">
          <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
            <Car className="w-4 h-4 text-emerald-700" />
            <span>حقك الكامل في التعويض المالي والطبي</span>
          </h4>
          <p className="text-xs leading-relaxed">
            يتحمل تأمين الطرف المتسبب أو التأمين الوطني INAIL كافة نفقات العلاج والتعويض عن الأضرار الجسدية والعجز. يتولى مكتب PIAZZA للمحاماة (الأستاذ ماسيميليانو) التفاوض لضمان تحصيل أعلى تعويض قانوني مستحق.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="eligibility" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="bg-blue-100 text-blue-700 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">
            التقييم القانوني السريع
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            حاسبة ودليل التحقق من الأهلية القانونية
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            أداة تفاعلية سريعة لمساعدتك في معرفة متطلبات ملفك قبل البدء في الإجراءات الرسمية
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          
          {/* Topic Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-200 mb-6 scrollbar-none">
            <button
              onClick={() => setSelectedTopic('citizenship')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedTopic === 'citizenship'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>02 — الجنسية الإيطالية</span>
            </button>

            <button
              onClick={() => setSelectedTopic('labor')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedTopic === 'labor'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>04 — حقوق العمل والنزاعات</span>
            </button>

            <button
              onClick={() => setSelectedTopic('accident')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedTopic === 'accident'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>05 / 06 — تعويضات الحوادث</span>
            </button>
          </div>

          {/* Dynamic Content */}
          {selectedTopic === 'citizenship' && renderCitizenshipResult()}
          {selectedTopic === 'labor' && renderLaborResult()}
          {selectedTopic === 'accident' && renderAccidentResult()}

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-right">
              هذا التقييم استرشادي أولي، ويحدد المحامي الموقف النهائي بعد فحص الوثائق بدقة.
            </p>

            <button
              onClick={() => onOpenBooking(
                selectedTopic === 'citizenship' ? 'italian-citizenship' :
                selectedTopic === 'labor' ? 'labor-law' : 'road-accidents'
              )}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-all shadow-xs"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>حجز موعد لمراجعة ملفك مع المحامي</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
