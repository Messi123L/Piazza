export interface LegalService {
  id: string;
  number: string;
  titleAr: string;
  titleIt: string;
  category: 'immigration' | 'citizenship' | 'labor' | 'accidents' | 'civil' | 'business';
  summaryAr: string;
  summaryIt: string;
  detailedPoints: string[];
  requiredDocs: string[];
  timelineTypical: string;
  iconName: string;
  tags: string[];
}

export interface DaySchedule {
  dayNameAr: string;
  dayNameIt: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday...
  morning: string | null;
  afternoon: string | null;
  isClosed: boolean;
}

export interface OfficeLiveStatus {
  isOpen: boolean;
  messageAr: string;
  messageIt: string;
  currentPeriodText: string;
  nextChangeText: string;
  italianTimeFormatted: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  cityInItaly: string;
  caseDescription: string;
  urgency: 'normal' | 'urgent' | 'immediate';
}

export interface AppointmentRecord extends AppointmentFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'contacted';
  serviceTitle: string;
}
