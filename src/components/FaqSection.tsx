import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Scale, MessageCircle } from 'lucide-react';
import { OFFICE_CONTACT_INFO } from '../data/scheduleData';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'الهجرة والإقامة',
      question: 'ما العمل في حال تأخر الكويستورا (Questura) في تجديد تصريح الإقامة لعدة أشهر؟',
      answer: 'إيصال البريد (Ricevuta Postale) يمنحك كافة الحقوق القانونية للإقامة والعمل والسفر المباشر إلى بلدك الأصلي. في حال تجاوز التأخير المدة المعقولة أو حدوث ضرر، نقوم بإرسال إنذار قانوني وتنبيه رسمي (Diffida ad adempiere) للكويستورا أو رفع دعوى أمام المحكمة الإدارية (TAR) لإلزامهم بإصدار البطاقة فوراً.'
    },
    {
      category: 'الجنسية الإيطالية',
      question: 'كم تستغرق دراسة ملف الجنسية الإيطالية قانونياً؟ وماذا لو تجاوزت المدة سنتين أو ثلاث؟',
      answer: 'حدد القانون الإيطالي مهلة أقصاها 24 إلى 36 شهراً للبت في طلبات الجنسية. في حال تجاوز هذه الفترة دون رد، يحق لنا تقديم طلب تسريع رسمي (Sollecito) أو رفع دعوى قضائية أمام محكمة روما لإلزام وزارة الداخلية بمنح الجنسية دون تأخير إضافي.'
    },
    {
      category: 'حوادث السير',
      question: 'من يتكفل بأتعاب المحامي في قضايا حوادث السير والمرور في إيطاليا؟',
      answer: 'في الغالبية الساحقة من حوادث السير، يتم تحصيل أتعاب المحاماة ومصاريف الخبير الطبي مباشرة من شركة التأمين المسؤولة كجزء من التعويض الإجمالي، دون أن يدفع المتضرر مبالغ مسبقة من جيبه الخاص.'
    },
    {
      category: 'قانون العمل',
      question: 'ما هي المهلة القانونية للطعن في الفصل التعسفي عن العمل، وكيف أسترد مكافأة نهاية الخدمة (TFR)؟',
      answer: 'يجب تقديم الطعن في الفصل (Impugnazione) خلال 60 يوماً من تاريخ استلام خطاب الفصل. أما مكافأة نهاية الخدمة (TFR) والرواتب المتأخرة، فيتم استردادها إما ودياً أو عبر رفع دعوى عمالية سريعة وتحصيل المبالغ من المشغل أو عبر صندوق الضمان لدى INPS.'
    },
    {
      category: 'حوادث العمل',
      question: 'هل يمكنني المطالبة بتعويض إضافي غير ما يقدمه تأمين حوادث العمل (INAIL)؟',
      answer: 'نعم، ما يدفعه INAIL يغطي فقط جزءاً من الضرر البيولوجي. إذا كان الحادث ناتجاً عن إهمال المشغل أو عدم توفير معدات السلامة، يحق للعامل المطالبة بـ "الضرر التفاضلي" (Danno Differenziale) مباشرة من صاحب العمل للحصول على تعويض كامل يشمل الأضرار النفسية والمادية والمعنوية.'
    },
    {
      category: 'الشركات والاستثمار',
      question: 'هل يحق للمواطن الأجنبي تأسيس شركة S.r.l أو فتح Partita IVA في إيطاليا؟',
      answer: 'نعم، يحق لحاملي تصاريح الإقامة الصالحة للعمل (Subordinato أو Autonomo) أو الأجانب وفق مبدأ المعاملة بالمثل تأسيس شركات تجارية أو فتح أعمال حرة مع استيفاء الشروط الضريبية والتسجيل بالغرفة التجارية الإيطالية (CCIAA).'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <span className="bg-blue-100 text-blue-700 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">
            الاستشارات والأجوبة القانونية
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            الأسئلة القانونية الأكثر تكراراً في إيطاليا
          </h2>

          <p className="text-slate-600 text-sm">
            إجابات واستشارات قانونية موثوقة يقدمها الأستاذ ماسيميليانو (Avv. Massimiliano) وفريق مكتب PIAZZA للمقيمين بالمغرب وإيطاليا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isOpen ? 'bg-slate-50 border-blue-400 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more specific advice */}
        <div className="mt-10 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right border border-slate-800">
          <div>
            <h4 className="font-bold text-base text-white">لديك استفسار خاص بقضيتك ولم تجد إجابته هنا؟</h4>
            <p className="text-xs text-slate-400 mt-1">تواصل مباشرة مع المحامي للحصول على رأي قانوني مخصص لملفك.</p>
          </div>
          <a
            href={`https://wa.me/${OFFICE_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('السلام عليكم أستاذ ماسيميليانو، لدي سؤال قانوني...')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>اسأل المحامي مباشرة</span>
          </a>
        </div>

      </div>
    </section>
  );
};
