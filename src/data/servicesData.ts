import { LegalService } from '../types';

export const LEGAL_SERVICES: LegalService[] = [
  {
    id: 'immigration-residence',
    number: '01',
    titleAr: 'الهجرة والإقامة',
    titleIt: 'Immigrazione e Permessi di Soggiorno',
    category: 'immigration',
    summaryAr: 'متابعة وإصدار وتجديد مختلف أنواع تصاريح الإقامة، لم الشمل العائلي، والطعن في قرارات الرفض أو الترحيل.',
    summaryIt: 'Rilascio e rinnovo permessi di soggiorno, ricongiungimento familiare, ricorsi contro decreti di espulsione.',
    detailedPoints: [
      'استخراج وتجديد تصريح الإقامة (Permesso di Soggiorno) بكافة أنواعه (عمل، أسري، طويل الأمد UE).',
      'إجراءات لم الشمل العائلي (Ricongiungimento Familiare) واستخراج شهادة السكن الملائم (Idoneità Alloggiativa).',
      'تحويل نوع الإقامة (من دراسة إلى عمل، أو من إقامة موسمية إلى غير موسمية).',
      'تقديم الطعون القانونية لدى المحاكم الإدارية (TAR) ضد قرارات رفض تجديد الإقامة أو الإلغاء.',
      'متابعة ملفات تصريح الإقامة الإلكتروني وحل إشكاليات المواعيد في الكويستورا (Questura).',
      'إجراءات الحماية الخاصة (Protezione Speciale) والتسويات القانونية المستجدة.'
    ],
    requiredDocs: [
      'جواز السفر ساري المفعول (Passaporto valido)',
      'تصريح الإقامة الحالي أو إيصال البريد (Permesso attuale / Ricevuta postale)',
      'إثبات الدخل المالي (CUD / Busta paga / Modello Unico)',
      'عقد الإيجار أو إقرار الضيافة (Contratto di locazione / Cessione fabbricato)',
      'الشهادات العائلية مترجمة ومصدقة (في حالات لم الشمل)'
    ],
    timelineTypical: 'من أسبوعين إلى 3 أشهر حسب طبيعة الإجراء وتجاوب الكويستورا',
    iconName: 'Passport',
    tags: ['إقامة', 'كويستورا', 'لم شمل', 'تجديد', 'طعن', 'إيطاليا', 'Permesso']
  },
  {
    id: 'italian-citizenship',
    number: '02',
    titleAr: 'الجنسية الإيطالية',
    titleIt: 'Cittadinanza Italiana',
    category: 'citizenship',
    summaryAr: 'تقديم ومتابعة ملفات الجنسية الإيطالية عن طريق الإقامة، الزواج، أو النسب مع تسريع الإجراءات والبت الإداري.',
    summaryIt: 'Richiesta di cittadinanza per residenza (10 anni), matrimonio o discendenza (Iure Sanguinis), solleciti e ricorsi.',
    detailedPoints: [
      'تقديم طلب الجنسية الإيطالية عن طريق الإقامة المستمرة لمدة 10 سنوات للمواطنين من خارج الاتحاد الأوروبي.',
      'تقديم طلب الجنسية عن طريق الزواج من مواطن/ة إيطالي/ة (بعد سنتين من الإقامة أو 3 سنوات بالخارج).',
      'إثبات الجنسية الإيطالية بالنسب وحق الدم (Iure Sanguinis) والبحث في شجرة العائلة والوثائق التاريخية.',
      'متابعة البوابة الوزارية (Portale Servizi Ministero dell\'Interno) وتخطي مراحل التأخير الإداري.',
      'إرسال إشعارات التنبيه القانونية (Diffida e Sollecito) للوزارة والمحافظة (Prefettura) عند تجاوز المهلة القانونية.',
      'حل معضلات نقص الدخل المطلوب أو استمرارية التسجيل في البلدية (Residenza Anagrafica).'
    ],
    requiredDocs: [
      'شهادة الميلاد الأصلية مصدقة ومترجمة (Estratto dell\'atto di nascita)',
      'السجل العدلي من بلد المنشأ ومن إيطاليا (Casellario giudiziale)',
      'شهادة إتقان اللغة الإيطالية المستوى B1 المعتمدة',
      'إقرارات الدخل للسنوات الثلاث الأخيرة (Ultimi 3 anni di CUD/Modello 730)',
      'الهوية الإيطالية وتصريح الإقامة ساري المفعول'
    ],
    timelineTypical: 'من 12 إلى 24 شهراً كحد أقصى وفق القانون الإيطالي',
    iconName: 'Award',
    tags: ['جنسية', 'جواز إيطالي', 'بريفيتورا', 'Cittadinanza', 'B1', 'وزارة الداخلية']
  },
  {
    id: 'study-in-italy',
    number: '03',
    titleAr: 'الدراسة في إيطاليا',
    titleIt: 'Studio e Formazione Universitaria',
    category: 'immigration',
    summaryAr: 'مرافقة قانونية وإجرائية للطلاب الراغبين في الدراسة بالجامعات والمعاهد الإيطالية من القبول حتى الإقامة.',
    summaryIt: 'Iscrizioni universitarie, visti per studio, borse di studio regionali e conversione permesso studio in lavoro.',
    detailedPoints: [
      'متابعة التسجيل عبر بوابة Universitaly ومعادلة الشهادات الثانوية والجامعية.',
      'استخراج إعلان القيمة للشهادات الدراسية (Dichiarazione di Valore) والتصديقات القنصلية (CIMEA).',
      'التوجيه القانوني لإصدار تأشيرة الدراسة (Visto per motivi di studio) لدى القنصليات الإيطالية.',
      'استخراج أول تصريح إقامة دراسي فور الوصول إلى إيطاليا وتجديده السنوي.',
      'المساعدة في ملفات المنح الدراسية الإقليمية (Borse di studio DSU / Ergo / Edisu).',
      'إجراءات تحويل إقامة الدراسة إلى إقامة عمل خاضع للإدارة أو عمل حر (Conversione da studio a lavoro).'
    ],
    requiredDocs: [
      'الشهادات الدراسية وكشوف الدرجات مصدقة ومترجمة',
      'خطاب القبول الجامعي المبدئي (Lettera di ammissione)',
      'إثبات الملاءة المالية وحساب بنكي كافٍ للمعيشة بإيطاليا',
      'تأمين صحي ساري المفعول أو التسجيل في النظام الصحي الوطني (SSN)',
      'عقد السكن أو حجز الإقامة المعتمد'
    ],
    timelineTypical: 'تتزامن مع التقويم الجامعي وفترات فتح بوابات القبول السنوية',
    iconName: 'GraduationCap',
    tags: ['جامعات', 'دراسة', 'Universitaly', 'فيزا دراسة', 'منحة', 'معادلة شهادة']
  },
  {
    id: 'labor-law',
    number: '04',
    titleAr: 'قانون العمل',
    titleIt: 'Diritto del Lavoro e Previdenza',
    category: 'labor',
    summaryAr: 'الدفاع عن حقوق العمال، مراجعة عقود العمل، نزاعات الأجور، الفصل التعسفي، ومكافأة نهاية الخدمة (TFR).',
    summaryIt: 'Contratti di lavoro, licenziamenti illegittimi, differenze retributive, recupero TFR e vertenze sindacali.',
    detailedPoints: [
      'مراجعة وتدقيق عقود العمل الإيطالية (Contratto a tempo indeterminato / determinato).',
      'رفع دعاوى النزاعات العمالية (Vertenza di lavoro) لتحصيل الأجور غير المدفوعة أو الساعات الإضافية.',
      'الطعن في قرارات الفصل التعسفي عن العمل (Impugnazione del licenziamento) والمطالبة بالتعويض أو إعادة التعيين.',
      'تحصيل مستحقات مكافأة نهاية الخدمة (Trattamento di Fine Rapporto - TFR) ومتابعة صندوق الضمان INPS.',
      'تسوية أوضاع العمل غير القانوني (Lavoro nero) وتثبيت الحقوق التأمينية والتقاعدية.',
      'استشارات خاصة بعقود العمالة المنزلية ورعاية المسنين (Badanti e Colf).'
    ],
    requiredDocs: [
      'عقد العمل وبيان التعيين (Lettera di assunzione / Unilav)',
      'كشوف الرواتب المستلمة (Buste paga)',
      'خطاب الفصل أو إنهاء العقد (Lettera di licenziamento) إن وجد',
      'كشف الحساب البنكي لتحويلات الرواتب',
      'أي أدلة أو مراسلات تثبت ساعات العمل الإضافية أو طبيعة المهام'
    ],
    timelineTypical: 'تسوية ودية خلال 30-60 يوماً أو دعوى قضائية عمالية سريعة',
    iconName: 'Briefcase',
    tags: ['عمل', 'عقد', 'طرد تعسفي', 'TFR', 'راتب', 'نزاع عمالي', 'INPS']
  },
  {
    id: 'road-accidents',
    number: '05',
    titleAr: 'حوادث السير',
    titleIt: 'Infortunistica Stradale e Risarcimento Danni',
    category: 'accidents',
    summaryAr: 'تحصيل أعلى تعويضات عن الأضرار الجسدية والمادية الناتجة عن حوادث الطرق في إيطاليا والتفاوض مع شركات التأمين.',
    summaryIt: 'Risarcimento integrale dei danni biologici, morali e materiali da incidenti stradali contro assicurazioni.',
    detailedPoints: [
      'المطالبة بالتعويض الكامل عن الأضرار الجسدية (Danno Biologico e Morale) والإعاقة المؤقتة والدائمة.',
      'استرداد قيمة إصلاح أو تلفيات المركبة، الدراجة، أو المعدات الشخصية بالكامل.',
      'التفاوض المباشر والشرس مع شركات التأمين الإيطالية لضمان عدم بخس حقوق المتضرر.',
      'توفير استشارات طبية شرعية (Perizia Medico-Legale) دقيقة لتقييم درجات العجز والضرر.',
      'التمثيل القانوني في الحوادث المرتكبة من مركبات مجهولة أو غير مؤمنة (Fondo di Garanzia per le Vittime della Strada).',
      'متابعة قضايا الحوادث المميتة وتعويض أسر وذوي الضحايا.'
    ],
    requiredDocs: [
      'محضر الشرطة أو إقرار الحادث المشترك (Modulo CAI / CID)',
      'التقارير الطبية الأولية من طوارئ المستشفى (Pronto Soccorso)',
      'الفواتير الطبية وجلسات العلاج الطبيعي وتكلفة الأدوية',
      'فواتير إصلاح السيارة أو تقرير خبير الأضرار الميكانيكية',
      'إثبات الدخل المفقود خلال فترة التوقف عن العمل'
    ],
    timelineTypical: 'يتم دفع أتعابنا غالباً بعد استلام التعويض من شركة التأمين',
    iconName: 'Car',
    tags: ['حادث', 'تعويض', 'تأمين', 'إصابة سير', 'عجز', 'CID']
  },
  {
    id: 'workplace-accidents',
    number: '06',
    titleAr: 'حوادث العمل',
    titleIt: 'Infortuni sul Lavoro e Malattie Professionali',
    category: 'accidents',
    summaryAr: 'حماية المصابين في مواقع العمل، متابعة ملفات التأمين الإيطالي ضد حوادث العمل (INAIL)، ومسؤولية المشغل.',
    summaryIt: 'Assistenza legale e medico-legale per infortuni sul lavoro, rendita INAIL e danno differenziale dal datore.',
    detailedPoints: [
      'متابعة ملفات إصابات العمل المفتوحة لدى المعهد الوطني للتأمين ضد حوادث العمل (INAIL).',
      'الطعن في تقييمات INAIL الطبية المجحفة لرفع نسبة العجز المقررة والحصول على راتب شهري دائم (Rendita vitalizia).',
      'المطالبة بـ "الضرر التفاضلي" (Danno Differenziale) من صاحب العمل عند ثبوت الإهمال في تدابير السلامة.',
      'متابعة حوادث الطرق التي تقع أثناء الذهاب أو العودة من العمل (Infortunio in itinere).',
      'إثبات الأمراض المهنية الناتجة عن بيئة العمل الخطرة وتوفير الدعم القانوني الطبي المتكامل.',
      'الدفاع عن ورثة العامل المتوفى جراء حادث عمل والمطالبة بالتعويضات القصوى.'
    ],
    requiredDocs: [
      'شهادة الإصابة الأولى الصادرة من المستشفى (Primo certificato medico INAIL)',
      'تقرير صاحب العمل المرسل إلى INAIL وإخطار الحادث',
      'الملف الطبي الكامل والمراجعات الدورية وصور الأشعة',
      'عقد العمل والتوصيف الوظيفي',
      'أي شهادات من زملاء العمل أو محاضر تفتيش السلامة'
    ],
    timelineTypical: 'متابعة فورية متزامنة مع فترة العلاج الطبي وحتى صرف التعويض',
    iconName: 'ShieldAlert',
    tags: ['حادث عمل', 'INAIL', 'إصابة مهنية', 'سلامة العمل', 'تعويض', 'عجز دائم']
  },
  {
    id: 'family-inheritance',
    number: '07',
    titleAr: 'قانون الأسرة والميراث',
    titleIt: 'Diritto di Famiglia, Minori e Successioni',
    category: 'civil',
    summaryAr: 'قضايا الانفصال والطلاق، النفقة وحضانة الأطفال، التركات والمواريث وفق القانون الإيطالي والاتفاقيات الدولية.',
    summaryIt: 'Separazioni consensuali e giudiziali, divorzi, affidamento minori, assegno di mantenimento e successioni.',
    detailedPoints: [
      'إجراءات الانفصال القانوني والطلاق (Separazione e Divorzio) بالتراضي أو عبر المحاكم المختصة.',
      'تنظيم حضانة الأطفال القاصرين (Affidamento dei figli) وتحديد أوقات الزيارة ومكان الإقامة.',
      'تحديد وتعديل النفقة الزوجية ونفقة الأبناء (Assegno di mantenimento) وإلزام الممتنع بالسداد.',
      'تقسيم الممتلكات المشتركة وتصفية الذمة المالية للزوجين.',
      'إجراءات حصر الإرث (Dichiarazione di Successione) وتسجيل انتقال العقارات والأموال للأجانب في إيطاليا.',
      'تسوية تنازع القوانين في الأحوال الشخصية للجاليات الأجنبية والمسلمين بإيطاليا.'
    ],
    requiredDocs: [
      'عقد الزواج (مترجم ومصدق إذا كان صادراً من خارج إيطاليا)',
      'شهادات ميلاد الأبناء القاصرين وإثبات إقامتهم في إيطاليا',
      'الإقرارات الضريبية للطرفين (Dichiarazioni dei redditi)',
      'سندات ملكية العقارات والحسابات المصرفية المشتركة',
      'حصر التركة وحصر الورثة الشرعي المعتمد في قضايا الميراث'
    ],
    timelineTypical: 'إجراءات التراضي سريعة جداً (خلال أسابيع) أمام المحامي أو البلدية',
    iconName: 'Users',
    tags: ['طلاق', 'انفصال', 'نفقة', 'حضانة', 'ميراث', 'تركة', 'أسرة']
  },
  {
    id: 'legal-documents',
    number: '08',
    titleAr: 'الوثائق والإجراءات',
    titleIt: 'Atti Notarili, Legalizzazioni e Burocrazia',
    category: 'civil',
    summaryAr: 'استخراج شهادات عدم المانع، التوكيلات القانونية، الترجمة المحلفة المعتمدة، والتصديقات القنصلية الرسمية.',
    summaryIt: 'Nulla Osta matrimoniali, procure speciali, traduzioni giurate in tribunale, apostille e legalizzazioni.',
    detailedPoints: [
      'استخراج ومتابعة شهادات عدم المانع للزواج (Nulla Osta al Matrimonio) للأجانب في إيطاليا.',
      'صياغة وتوثيق التوكيلات القانونية الخاصة والعامة (Procura Speciale / Generale) الصالحة للاستخدام بإيطاليا أو بالخارج.',
      'خدمة الترجمة المحلفة المعتمدة أمام المحكمة (Traduzione Giurata / Asseverata) للوثائق والشهادات الرسمية.',
      'وضع خاتم الأبوستيل (Apostille) والتصديق القنصلي على الوثائق الدبلوماسية.',
      'استخراج السجلات الجنائية الإيطالية (Certificato del Casellario Giudiziale e Carichi Pendenti).',
      'تعديل وتصحيح الأخطاء في الأسماء والبيانات المسجلة بسجلات الحالة المدنية الإيطالية (Anagrafe).'
    ],
    requiredDocs: [
      'الوثائق الأصلية المراد ترجمتها أو تصديقها أو توثيقها',
      'إثبات الهوية ساري المفعول لجميع الأطراف المعنية',
      'الرقم الضريبي الإيطالي (Codice Fiscale)',
      'بيانات التوكيل وصيغته المحددة بدقة'
    ],
    timelineTypical: 'تنفيذ فوري وسريع للترجمات والتوكيلات (خلال 24-72 ساعة)',
    iconName: 'FileCheck',
    tags: ['نولا أوستا', 'ترجمة محلفة', 'توكيل', 'أبوستيل', 'Nulla Osta', 'تصديق']
  },
  {
    id: 'corporate-investment',
    number: '09',
    titleAr: 'الشركات والاستثمار',
    titleIt: 'Diritto Societario, Imprese e Investimenti',
    category: 'business',
    summaryAr: 'تأسيس الشركات الإيطالية، فتح الرقم الضريبي، استشارات الاستثمار وتأشيرات العمل الحر لرجال الأعمال.',
    summaryIt: 'Costituzione società (S.r.l., S.p.a.), apertura Partita IVA, contratti commerciali e visto per investitori.',
    detailedPoints: [
      'تأسيس الشركات بجميع أشكالها القانونية (S.r.l., S.r.l.s., S.n.c., Ditta Individuale) بالتعاون مع الموثقين المعتمدين.',
      'استخراج الرقم الضريبي للشركات والأفراد (Partita IVA e Codice Fiscale) والتسجيل بالغرفة التجارية (CCIAA).',
      'استخراج تأشيرات وإقامات المستثمرين ورجال الأعمال والعمل الحر (Visto per Lavoro Autonomo / Investor Visa).',
      'صياغة ومراجعة العقود التجارية، عقود الإيجار التجاري، وعقود التوزيع والفرانشايز.',
      'المرافقة القانونية لشراء العقارات والمشاريع التجارية في إيطاليا والتحقق من سلامتها القانونية (Due Diligence).',
      'حل النزاعات بين الشركاء وحماية العلامات التجارية والملكية الفكرية.'
    ],
    requiredDocs: [
      'جواز السفر للمؤسسين والشركاء والمديرين التنفيذيين',
      'خطة العمل ودراسة الجدوى للمشروع (Business Plan)',
      'شهادة توفر رأس المال في البنك الإيطالي',
      'عقد المقر التجاري أو الصناعي المسجل',
      'السجلات التجارية السابقة للشركات الأجنبية الراغبة في فتح فروع'
    ],
    timelineTypical: 'تأسيس الشركة وتسليم السجل التجاري خلال 7 إلى 15 يوماً عمل',
    iconName: 'Building2',
    tags: ['شركات', 'استثمار', 'Partita IVA', 'Srl', 'تجارة', 'عقارات', 'عمل حر']
  },
  {
    id: 'debt-collection',
    number: '10',
    titleAr: 'تحصيل الديون والمستحقات',
    titleIt: 'Recupero Crediti ed Esecuzioni Forzate',
    category: 'civil',
    summaryAr: 'التحصيل الودي والقضائي للديون والفواتير غير المسددة، أوامر الأداء العاجلة، والحجز التنفيذي على الممتلكات.',
    summaryIt: 'Recupero crediti stragiudiziale e giudiziale, decreti ingiuntivi, pignoramenti mobiliari e immobiliari.',
    detailedPoints: [
      'المرحلة الودية: إرسال خطابات الإنذار الرسمي للمدينين (Lettera di Messa in Mora) والتفاوض على جدول السداد.',
      'استصدار أمر الأداء القضائي العاجل من المحكمة (Decreto Ingiuntivo Telematico) خلال فترات قياسية.',
      'تنفيذ سندات الأمر القضائي وتبليغ إشعار التنفيذ القانوني (Atto di Precetto).',
      'إجراءات الحجز التنفيذي (Pignoramento) على الحسابات المصرفية، الرواتب، أو العقارات والمركبات.',
      'تحصيل الديون التجارية بين الشركات وفواتير التوريد والخدمات المتعثرة.',
      'متابعة إجراءات الإفلاس وتسجيل الديون في قوائم الدائنين الرسمية (Insinuazione al passivo).'
    ],
    requiredDocs: [
      'الفواتير غير المسددة (Fatture non saldate) وكشوف الحسابات',
      'عقود التوريد أو تقديم الخدمات أو أوامر الشراء الموقعة',
      'إثباتات تسليم البضائع أو إتمام الأعمال (DDT / Bolle di consegna)',
      'الشيكات أو الكمبيالات المرتجعة بدون رصيد إن وجدت',
      'بيانات المدين الدقيقة (الاسم، العنوان، الرقم الضريبي/Partita IVA)'
    ],
    timelineTypical: 'إنذار ودي خلال 15 يوماً، أو أمر أداء قضائي يصدر خلال 30-45 يوماً',
    iconName: 'Coins',
    tags: ['تحصيل ديون', 'محكمة', 'أمر أداء', 'فواتير', 'حجز', 'Decreto Ingiuntivo']
  }
];
