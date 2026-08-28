import { DaySchedule, OfficeLiveStatus } from '../types';

export const OFFICE_SCHEDULE: DaySchedule[] = [
  {
    dayIndex: 1, // Monday
    dayNameAr: 'الإثنين',
    dayNameIt: 'Lunedì',
    morning: '10:00 – 13:00',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayIndex: 2, // Tuesday
    dayNameAr: 'الثلاثاء',
    dayNameIt: 'Martedì',
    morning: '10:00 – 13:00',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayIndex: 3, // Wednesday
    dayNameAr: 'الأربعاء',
    dayNameIt: 'Mercoledì',
    morning: '10:00 – 13:00',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayIndex: 4, // Thursday
    dayNameAr: 'الخميس',
    dayNameIt: 'Giovedì',
    morning: '10:00 – 13:00',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayIndex: 5, // Friday
    dayNameAr: 'الجمعة',
    dayNameIt: 'Venerdì',
    morning: '10:00 – 13:00',
    afternoon: '15:00 – 19:00',
    isClosed: false,
  },
  {
    dayIndex: 6, // Saturday
    dayNameAr: 'السبت',
    dayNameIt: 'Sabato',
    morning: '10:00 – 14:00',
    afternoon: null,
    isClosed: false,
  },
  {
    dayIndex: 0, // Sunday
    dayNameAr: 'الأحد',
    dayNameIt: 'Domenica',
    morning: null,
    afternoon: null,
    isClosed: true,
  }
];

export const OFFICE_CONTACT_INFO = {
  officeNameAr: 'مكتب PIAZZA للمحاماة',
  officeNameIt: 'Studio Legale Piazza',
  lawyerName: 'الأستاذ ماسيميليانو (Avv. Massimiliano)',
  lawyerTitleAr: 'محامٍ ومستشار قانوني (خدمات قانونية للمقيمين بالمغرب وإيطاليا)',
  lawyerTitleIt: 'Avvocato Massimiliano Piazza',
  phone: '+212 622-773752',
  phoneDisplay: '+212 622-773752',
  whatsappNumber: '+212622773752',
  email: 'contact@studiolegalepiazza.com',
  address: 'استشارات وتمثيل قانوني للمقيمين في المغرب وإيطاليا',
  workingHoursSummaryAr: 'الإثنين إلى الجمعة: 10:00-13:00 و 15:00-19:00 | السبت: 10:00-14:00',
  workingHoursSummaryIt: 'Lun - Ven: 10:00–13:00 & 15:00–19:00 | Sab: 10:00–14:00 | Dom: Chiuso'
};

export function getOfficeLiveStatus(overrideDate?: Date): OfficeLiveStatus {
  // Use Italy Timezone (Europe/Rome)
  const now = overrideDate || new Date();
  
  let dayOfWeek: number;
  let currentHour: number;
  let currentMinute: number;
  let timeStrFormatted = '';

  try {
    const romeTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Rome',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    
    const parts = romeTimeFormatter.formatToParts(now);
    const hourPart = parts.find(p => p.type === 'hour')?.value || '12';
    const minutePart = parts.find(p => p.type === 'minute')?.value || '00';
    
    currentHour = parseInt(hourPart, 10);
    currentMinute = parseInt(minutePart, 10);
    
    // Get day in Rome timezone
    const dayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Rome', weekday: 'short' });
    const dayStr = dayFormatter.format(now);
    const dayMap: Record<string, number> = {
      Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6
    };
    dayOfWeek = dayMap[dayStr] ?? now.getDay();
    
    timeStrFormatted = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
  } catch {
    dayOfWeek = now.getDay();
    currentHour = now.getHours();
    currentMinute = now.getMinutes();
    timeStrFormatted = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
  }

  const currentMinutesTotal = currentHour * 60 + currentMinute;

  // Weekdays (Mon - Fri: 1 to 5)
  // Morning: 10:00 (600) to 13:00 (780)
  // Afternoon: 15:00 (900) to 19:00 (1140)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (currentMinutesTotal >= 600 && currentMinutesTotal < 780) {
      return {
        isOpen: true,
        messageAr: 'المكتب مفتوح حالياً (الفترة الصباحية)',
        messageIt: 'Ufficio Aperto (Sessione Mattutina)',
        currentPeriodText: 'فترة الصباح: حتى 13:00',
        nextChangeText: 'يغلق في تمام الساعة 13:00 للاستراحة ويعاود الفتح 15:00',
        italianTimeFormatted: timeStrFormatted,
      };
    } else if (currentMinutesTotal >= 780 && currentMinutesTotal < 900) {
      return {
        isOpen: false,
        messageAr: 'استراحة منتصف اليوم',
        messageIt: 'Pausa Pranzo',
        currentPeriodText: 'استراحة ما بين الفترتين',
        nextChangeText: 'يعاود المكتب الفتح في تمام الساعة 15:00 زوالاً',
        italianTimeFormatted: timeStrFormatted,
      };
    } else if (currentMinutesTotal >= 900 && currentMinutesTotal < 1140) {
      return {
        isOpen: true,
        messageAr: 'المكتب مفتوح حالياً (الفترة المسائية)',
        messageIt: 'Ufficio Aperto (Sessione Pomeridiana)',
        currentPeriodText: 'فترة المساء: حتى 19:00',
        nextChangeText: 'يغلق في تمام الساعة 19:00 مساءً',
        italianTimeFormatted: timeStrFormatted,
      };
    } else if (currentMinutesTotal < 600) {
      return {
        isOpen: false,
        messageAr: 'المكتب مغلق حالياً',
        messageIt: 'Ufficio Chiuso',
        currentPeriodText: 'قبل موعد العمل الصباحي',
        nextChangeText: 'يفتح اليوم في تمام الساعة 10:00 صباحاً',
        italianTimeFormatted: timeStrFormatted,
      };
    } else {
      return {
        isOpen: false,
        messageAr: 'انتهت ساعات العمل لليوم',
        messageIt: 'Orario di Chiusura',
        currentPeriodText: 'بعد موعد العمل المسائي',
        nextChangeText: 'يستأنف العمل غداً في تمام الساعة 10:00 صباحاً',
        italianTimeFormatted: timeStrFormatted,
      };
    }
  }

  // Saturday (6)
  // Morning only: 10:00 (600) to 14:00 (840)
  if (dayOfWeek === 6) {
    if (currentMinutesTotal >= 600 && currentMinutesTotal < 840) {
      return {
        isOpen: true,
        messageAr: 'المكتب مفتوح حالياً (دوام السبت)',
        messageIt: 'Ufficio Aperto (Orario Sabato)',
        currentPeriodText: 'دوام السبت: حتى 14:00 زوالاً',
        nextChangeText: 'يغلق في تمام الساعة 14:00 زوالاً',
        italianTimeFormatted: timeStrFormatted,
      };
    } else if (currentMinutesTotal < 600) {
      return {
        isOpen: false,
        messageAr: 'المكتب مغلق حالياً',
        messageIt: 'Ufficio Chiuso',
        currentPeriodText: 'قبل بدء دوام السبت',
        nextChangeText: 'يفتح اليوم في تمام الساعة 10:00 صباحاً',
        italianTimeFormatted: timeStrFormatted,
      };
    } else {
      return {
        isOpen: false,
        messageAr: 'المكتب مغلق لعطلة نهاية الأسبوع',
        messageIt: 'Chiuso per Fine Settimana',
        currentPeriodText: 'عطلة نهاية الأسبوع',
        nextChangeText: 'يستأنف العمل يوم الإثنين الساعة 10:00 صباحاً',
        italianTimeFormatted: timeStrFormatted,
      };
    }
  }

  // Sunday (0)
  return {
    isOpen: false,
    messageAr: 'المكتب مغلق اليوم (عطلة الأحد)',
    messageIt: 'Ufficio Chiuso (Domenica)',
    currentPeriodText: 'عطلة الأحد الأسبوعية',
    nextChangeText: 'يستأنف العمل يوم الإثنين الساعة 10:00 صباحاً',
    italianTimeFormatted: timeStrFormatted,
  };
}
