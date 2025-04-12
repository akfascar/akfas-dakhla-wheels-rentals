
// Define all supported languages
export type LanguageCode = 'en' | 'fr' | 'es' | 'ar';

// Define translation structure
export type TranslationKey = 
  | 'navbar.home'
  | 'navbar.fleet'
  | 'navbar.dakhla'
  | 'navbar.contact'
  | 'navbar.reserve'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.button'
  | 'home.welcome.title'
  | 'home.welcome.description'
  | 'home.features.modernFleet'
  | 'home.features.modernFleetDesc'
  | 'home.features.bestValue'
  | 'home.features.bestValueDesc'
  | 'home.features.support'
  | 'home.features.supportDesc'
  | 'home.vehicles.title'
  | 'home.vehicles.description'
  | 'home.vehicles.viewAll'
  | 'home.dakhla.title'
  | 'home.dakhla.description1'
  | 'home.dakhla.description2'
  | 'home.dakhla.feature1'
  | 'home.dakhla.feature2'
  | 'home.dakhla.feature3'
  | 'home.dakhla.learnMore'
  | 'home.cta.title'
  | 'home.cta.description'
  | 'home.cta.button'
  | 'home.find.title'
  | 'home.find.description'
  | 'home.find.location'
  | 'home.find.address'
  | 'home.find.coordinates'
  | 'home.find.contact';

// Define translations
export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    'navbar.home': 'Home',
    'navbar.fleet': 'Our Fleet',
    'navbar.dakhla': 'About Dakhla',
    'navbar.contact': 'Contact',
    'navbar.reserve': 'Reserve Now',
    'hero.title': 'Explore Dakhla with Comfort and Style',
    'hero.subtitle': 'Discover the beauty of Dakhla with our premium car rental service at affordable prices',
    'hero.button': 'Reserve Now',
    'home.welcome.title': 'Welcome to AKFAS Car Rental',
    'home.welcome.description': 'Your trusted partner for exploring the stunning landscapes of Dakhla, Morocco. We provide reliable, comfortable vehicles with exceptional service.',
    'home.features.modernFleet': 'Modern Fleet',
    'home.features.modernFleetDesc': 'Our vehicles are regularly maintained and offer the perfect balance of comfort, safety, and efficiency.',
    'home.features.bestValue': 'Best Value',
    'home.features.bestValueDesc': 'Competitive prices with no hidden fees. We offer the best value for your money with all-inclusive rates.',
    'home.features.support': '24/7 Support',
    'home.features.supportDesc': 'Our customer service team is available 24/7 to assist you with any questions or needs during your rental.',
    'home.vehicles.title': 'Our Featured Vehicles',
    'home.vehicles.description': 'Choose from our selection of reliable and comfortable vehicles perfect for exploring Dakhla and its surroundings.',
    'home.vehicles.viewAll': 'View All Vehicles',
    'home.dakhla.title': 'Discover the Magic of Dakhla',
    'home.dakhla.description1': 'Located on a narrow peninsula along Morocco\'s Atlantic coast, Dakhla is a hidden gem known for its stunning landscapes, pristine beaches, and perfect conditions for water sports.',
    'home.dakhla.description2': 'With AKFAS Car Rental, you have the freedom to explore this beautiful region at your own pace, from the dramatic dunes of the Sahara to the crystal-clear waters of the Atlantic.',
    'home.dakhla.feature1': 'Visit the stunning white sand dunes of Dakhla Bay',
    'home.dakhla.feature2': 'Explore the rich marine life in the Dakhla Peninsula',
    'home.dakhla.feature3': 'Experience the vibrant local culture and delicious cuisine',
    'home.dakhla.learnMore': 'Learn More About Dakhla',
    'home.cta.title': 'Ready to Explore Dakhla?',
    'home.cta.description': 'Book your car now and start your adventure in one of Morocco\'s most beautiful destinations.',
    'home.cta.button': 'Reserve Your Car',
    'home.find.title': 'Find Us',
    'home.find.description': 'We are conveniently located in the heart of Dakhla. Visit us or contact us to arrange a car delivery to your location.',
    'home.find.location': 'Our Location',
    'home.find.address': 'AKFAS Rent a Car\nMain Street, Dakhla City Center\nDakhla, Morocco',
    'home.find.coordinates': 'GPS Coordinates:',
    'home.find.contact': 'Contact via WhatsApp'
  },
  fr: {
    'navbar.home': 'Accueil',
    'navbar.fleet': 'Notre Flotte',
    'navbar.dakhla': 'À propos de Dakhla',
    'navbar.contact': 'Contact',
    'navbar.reserve': 'Réserver Maintenant',
    'hero.title': 'Explorez Dakhla avec Confort et Style',
    'hero.subtitle': 'Découvrez la beauté de Dakhla avec notre service de location de voitures premium à des prix abordables',
    'hero.button': 'Réserver Maintenant',
    'home.welcome.title': 'Bienvenue chez AKFAS Car Rental',
    'home.welcome.description': 'Votre partenaire de confiance pour explorer les paysages magnifiques de Dakhla, Maroc. Nous fournissons des véhicules fiables et confortables avec un service exceptionnel.',
    'home.features.modernFleet': 'Flotte Moderne',
    'home.features.modernFleetDesc': 'Nos véhicules sont régulièrement entretenus et offrent l\'équilibre parfait entre confort, sécurité et efficacité.',
    'home.features.bestValue': 'Meilleur Rapport Qualité-Prix',
    'home.features.bestValueDesc': 'Prix compétitifs sans frais cachés. Nous offrons le meilleur rapport qualité-prix avec des tarifs tout compris.',
    'home.features.support': 'Support 24/7',
    'home.features.supportDesc': 'Notre équipe de service client est disponible 24/7 pour vous aider avec toutes vos questions ou besoins pendant votre location.',
    'home.vehicles.title': 'Nos Véhicules Vedettes',
    'home.vehicles.description': 'Choisissez parmi notre sélection de véhicules fiables et confortables, parfaits pour explorer Dakhla et ses environs.',
    'home.vehicles.viewAll': 'Voir Tous les Véhicules',
    'home.dakhla.title': 'Découvrez la Magie de Dakhla',
    'home.dakhla.description1': 'Située sur une péninsule étroite le long de la côte atlantique du Maroc, Dakhla est un joyau caché connu pour ses paysages magnifiques, ses plages immaculées et ses conditions parfaites pour les sports nautiques.',
    'home.dakhla.description2': 'Avec AKFAS Car Rental, vous avez la liberté d\'explorer cette belle région à votre rythme, des dunes spectaculaires du Sahara aux eaux cristallines de l\'Atlantique.',
    'home.dakhla.feature1': 'Visitez les superbes dunes de sable blanc de la baie de Dakhla',
    'home.dakhla.feature2': 'Explorez la riche vie marine dans la péninsule de Dakhla',
    'home.dakhla.feature3': 'Expérimentez la culture locale vibrante et la délicieuse cuisine',
    'home.dakhla.learnMore': 'En Savoir Plus sur Dakhla',
    'home.cta.title': 'Prêt à Explorer Dakhla?',
    'home.cta.description': 'Réservez votre voiture maintenant et commencez votre aventure dans l\'une des plus belles destinations du Maroc.',
    'home.cta.button': 'Réservez Votre Voiture',
    'home.find.title': 'Nous Trouver',
    'home.find.description': 'Nous sommes idéalement situés au cœur de Dakhla. Rendez-nous visite ou contactez-nous pour organiser la livraison d\'une voiture à votre emplacement.',
    'home.find.location': 'Notre Emplacement',
    'home.find.address': 'AKFAS Rent a Car\nRue Principale, Centre-ville de Dakhla\nDakhla, Maroc',
    'home.find.coordinates': 'Coordonnées GPS:',
    'home.find.contact': 'Contactez via WhatsApp'
  },
  es: {
    'navbar.home': 'Inicio',
    'navbar.fleet': 'Nuestra Flota',
    'navbar.dakhla': 'Sobre Dakhla',
    'navbar.contact': 'Contacto',
    'navbar.reserve': 'Reservar Ahora',
    'hero.title': 'Explora Dakhla con Comodidad y Estilo',
    'hero.subtitle': 'Descubre la belleza de Dakhla con nuestro servicio premium de alquiler de coches a precios asequibles',
    'hero.button': 'Reservar Ahora',
    'home.welcome.title': 'Bienvenido a AKFAS Car Rental',
    'home.welcome.description': 'Su socio de confianza para explorar los impresionantes paisajes de Dakhla, Marruecos. Proporcionamos vehículos fiables y cómodos con un servicio excepcional.',
    'home.features.modernFleet': 'Flota Moderna',
    'home.features.modernFleetDesc': 'Nuestros vehículos reciben mantenimiento regularmente y ofrecen el equilibrio perfecto entre comodidad, seguridad y eficiencia.',
    'home.features.bestValue': 'Mejor Valor',
    'home.features.bestValueDesc': 'Precios competitivos sin cargos ocultos. Ofrecemos el mejor valor por su dinero con tarifas todo incluido.',
    'home.features.support': 'Soporte 24/7',
    'home.features.supportDesc': 'Nuestro equipo de servicio al cliente está disponible 24/7 para ayudarle con cualquier pregunta o necesidad durante su alquiler.',
    'home.vehicles.title': 'Nuestros Vehículos Destacados',
    'home.vehicles.description': 'Elija entre nuestra selección de vehículos fiables y cómodos, perfectos para explorar Dakhla y sus alrededores.',
    'home.vehicles.viewAll': 'Ver Todos los Vehículos',
    'home.dakhla.title': 'Descubre la Magia de Dakhla',
    'home.dakhla.description1': 'Situada en una estrecha península a lo largo de la costa atlántica de Marruecos, Dakhla es una joya oculta conocida por sus paisajes impresionantes, playas prístinas y condiciones perfectas para deportes acuáticos.',
    'home.dakhla.description2': 'Con AKFAS Car Rental, tiene la libertad de explorar esta hermosa región a su propio ritmo, desde las dramáticas dunas del Sahara hasta las aguas cristalinas del Atlántico.',
    'home.dakhla.feature1': 'Visite las impresionantes dunas de arena blanca de la Bahía de Dakhla',
    'home.dakhla.feature2': 'Explore la rica vida marina en la Península de Dakhla',
    'home.dakhla.feature3': 'Experimente la vibrante cultura local y la deliciosa cocina',
    'home.dakhla.learnMore': 'Más Información Sobre Dakhla',
    'home.cta.title': '¿Listo para Explorar Dakhla?',
    'home.cta.description': 'Reserve su coche ahora y comience su aventura en uno de los destinos más hermosos de Marruecos.',
    'home.cta.button': 'Reserve Su Coche',
    'home.find.title': 'Encuéntrenos',
    'home.find.description': 'Estamos convenientemente ubicados en el corazón de Dakhla. Visítenos o contáctenos para organizar la entrega de un coche en su ubicación.',
    'home.find.location': 'Nuestra Ubicación',
    'home.find.address': 'AKFAS Rent a Car\nCalle Principal, Centro de la Ciudad de Dakhla\nDakhla, Marruecos',
    'home.find.coordinates': 'Coordenadas GPS:',
    'home.find.contact': 'Contactar vía WhatsApp'
  },
  ar: {
    'navbar.home': 'الرئيسية',
    'navbar.fleet': 'أسطولنا',
    'navbar.dakhla': 'حول الداخلة',
    'navbar.contact': 'اتصل بنا',
    'navbar.reserve': 'احجز الآن',
    'hero.title': 'استكشف الداخلة براحة وأناقة',
    'hero.subtitle': 'اكتشف جمال الداخلة مع خدمة تأجير السيارات الفاخرة بأسعار معقولة',
    'hero.button': 'احجز الآن',
    'home.welcome.title': 'مرحبًا بكم في أكفاس لتأجير السيارات',
    'home.welcome.description': 'شريكك الموثوق لاستكشاف المناظر الطبيعية المذهلة في الداخلة، المغرب. نوفر مركبات موثوقة ومريحة مع خدمة استثنائية.',
    'home.features.modernFleet': 'أسطول حديث',
    'home.features.modernFleetDesc': 'يتم صيانة مركباتنا بانتظام وتوفر التوازن المثالي بين الراحة والسلامة والكفاءة.',
    'home.features.bestValue': 'أفضل قيمة',
    'home.features.bestValueDesc': 'أسعار تنافسية بدون رسوم خفية. نقدم أفضل قيمة مقابل المال مع أسعار شاملة.',
    'home.features.support': 'دعم على مدار الساعة',
    'home.features.supportDesc': 'فريق خدمة العملاء لدينا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في أي أسئلة أو احتياجات أثناء تأجيرك.',
    'home.vehicles.title': 'مركباتنا المميزة',
    'home.vehicles.description': 'اختر من بين مجموعتنا من المركبات الموثوقة والمريحة المثالية لاستكشاف الداخلة ومحيطها.',
    'home.vehicles.viewAll': 'عرض جميع المركبات',
    'home.dakhla.title': 'اكتشف سحر الداخلة',
    'home.dakhla.description1': 'تقع على شبه جزيرة ضيقة على طول ساحل المحيط الأطلسي بالمغرب، الداخلة هي جوهرة مخفية معروفة بمناظرها الطبيعية المذهلة وشواطئها البكر وظروفها المثالية للرياضات المائية.',
    'home.dakhla.description2': 'مع أكفاس لتأجير السيارات، لديك حرية استكشاف هذه المنطقة الجميلة على وتيرتك الخاصة، من كثبان الصحراء المذهلة إلى المياه الصافية للمحيط الأطلسي.',
    'home.dakhla.feature1': 'زيارة كثبان الرمال البيضاء المذهلة في خليج الداخلة',
    'home.dakhla.feature2': 'استكشاف الحياة البحرية الغنية في شبه جزيرة الداخلة',
    'home.dakhla.feature3': 'تجربة الثقافة المحلية النابضة بالحياة والمطبخ اللذيذ',
    'home.dakhla.learnMore': 'تعرف أكثر عن الداخلة',
    'home.cta.title': 'هل أنت مستعد لاستكشاف الداخلة؟',
    'home.cta.description': 'احجز سيارتك الآن وابدأ مغامرتك في واحدة من أجمل وجهات المغرب.',
    'home.cta.button': 'احجز سيارتك',
    'home.find.title': 'جِدنا',
    'home.find.description': 'نحن نقع في قلب الداخلة. قم بزيارتنا أو اتصل بنا لترتيب توصيل سيارة إلى موقعك.',
    'home.find.location': 'موقعنا',
    'home.find.address': 'أكفاس لتأجير السيارات\nالشارع الرئيسي، وسط مدينة الداخلة\nالداخلة، المغرب',
    'home.find.coordinates': 'إحداثيات GPS:',
    'home.find.contact': 'تواصل عبر واتساب'
  }
};

// Helper to load translations
export const getTranslation = (key: TranslationKey, language: LanguageCode): string => {
  return translations[language][key] || translations['en'][key] || key;
};
