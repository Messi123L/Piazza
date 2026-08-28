import React, { useState } from 'react';
import { 
  Scale, 
  Search, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Calendar,
  Sparkles,
  Plane,
  Award,
  GraduationCap,
  Briefcase,
  Car,
  ShieldAlert,
  Users,
  FileCheck,
  Building2,
  Coins,
  ChevronLeft
} from 'lucide-react';
import { LegalService } from '../types';
import { LEGAL_SERVICES } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: LegalService) => void;
  onBookConsultation: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookConsultation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع الخدمات (10)' },
    { id: 'immigration', label: 'الهجرة والدراسة' },
    { id: 'citizenship', label: 'الجنسية الإيطالية' },
    { id: 'labor', label: 'قانون العمل' },
    { id: 'accidents', label: 'حوادث السير والعمل' },
    { id: 'civil', label: 'الأسرة والوثائق' },
    { id: 'business', label: 'الشركات وتحصيل الديون' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Passport':
        return <Plane className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  const filteredServices = LEGAL_SERVICES.filter((service) => {
    const matchesSearch = 
      service.titleAr.includes(searchQuery) ||
      service.titleIt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summaryAr.includes(searchQuery) ||
      service.number.includes(searchQuery) ||
      service.tags.some(tag => tag.includes(searchQuery));

    const matchesCategory = 
      selectedCategory === 'all' ||
      (selectedCategory === 'immigration' && (service.category === 'immigration' || service.id === 'study-in-italy')) ||
      (selectedCategory === 'citizenship' && service.category === 'citizenship') ||
      (selectedCategory === 'labor' && service.category === 'labor') ||
      (selectedCategory === 'accidents' && service.category === 'accidents') ||
      (selectedCategory === 'civil' && (service.category === 'civil' || service.id === 'legal-documents')) ||
      (selectedCategory === 'business' && (service.category === 'business' || service.id === 'debt-collection'));

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-blue-100 text-blue-700 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">
            قائمة الخدمات القانونية المعتمدة (10 تخصصات)
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            الخدمات القانونية المتخصصة (المغرب وإيطاليا)
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed">
            يقدم الأستاذ ماسيميليانو (Avv. Massimiliano) ومكتب PIAZZA تمثيلاً واستشارات قانونية رصينة تغطي 10 تخصصات قانونية أساسية للمقيمين بالمغرب أو إيطاليا.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن خدمة، رقم، أو كلمة مفتاحية..."
                className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-right"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            </div>
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-500 transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors"></div>

              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                      {service.number}
                    </span>
                    <span className="text-xs text-slate-400">
                      —
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors leading-snug">
                  {service.titleAr}
                </h3>
                
                <p className="text-xs font-semibold text-blue-600/80 tracking-wide mb-3">
                  {service.titleIt}
                </p>

                {/* Summary */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {service.summaryAr}
                </p>

                {/* Key Points Preview */}
                <div className="space-y-1.5 mb-5">
                  {service.detailedPoints.slice(0, 2).map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                      <span className="line-clamp-1">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 group-hover:underline cursor-pointer"
                >
                  <span>التفاصيل والأوراق المطلوبة</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookConsultation(service.id);
                  }}
                  className="bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 p-2 rounded-lg text-xs font-semibold transition-colors"
                  title="حجز موعد لهذه الخدمة"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Zero state if search yields no results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm mb-3">لم يتم العثور على خدمات مطابقة لبحثك "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:underline text-xs font-bold"
            >
              عرض جميع الخدمات القانونية الـ 10
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
