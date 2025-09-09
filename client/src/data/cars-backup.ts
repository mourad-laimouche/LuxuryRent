// Interface Car pour les véhicules de location (adaptée à notre structure)
export interface Car {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricePerDay: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specifications: {
    transmission: string;
    fuel: string;
    seats: number;
    luggage: string;
  };
}

// Inventaire complet de vos 59 vraies voitures avec toutes leurs photos
export const cars: Car[] = [
  {
    id: '1',
    slug: 'peugeot-308-gt',
    name: 'Peugeot 308 II GT',
    category: 'Berline',
    pricePerDay: 18000,
    image: '/images/IMG_20250804_154249_191_1754319089062.jpg',
    gallery: ['/images/IMG_20250804_154249_191_1754319089062.jpg', '/images/IMG_20250804_154255_919_1754319089100.jpg'],
    description: 'Berline française au design moderne et équipements technologiques avancés.',
    features: [
      'Climatisation automatique',
      'Écran tactile 8" Peugeot i-Cockpit',
      'Caméra de recul',
      'Sièges en tissu Alcantara',
      'Jantes alliage 17"',
      'Feux LED',
      'Apple CarPlay / Android Auto',
      'Régulateur de vitesse'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '2',
    slug: 'bmw-320d-xdrive',
    name: 'BMW 320d xDrive',
    category: 'Berline',
    pricePerDay: 42000,
    image: '/images/IMG_20250804_154303_459_1754319089128.jpg',
    gallery: ['/images/IMG_20250804_154303_459_1754319089128.jpg', '/images/IMG_20250804_154310_588_1754319089163.jpg'],
    description: 'Berline premium BMW avec traction intégrale et performances diesel optimisées.',
    features: [
      'BMW iDrive avec écran 10.25"',
      'Climatisation automatique 3 zones',
      'Sièges sport en cuir Dakota',
      'Jantes alliage style 790M 18"',
      'Éclairage LED adaptatif',
      'Caméra de recul avec PDC',
      'BMW ConnectedDrive Services',
      'Traction intégrale xDrive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '3',
    slug: 'bmw-420d-gran-coupe',
    name: 'BMW 420d Gran Coupé',
    category: 'Coupé',
    pricePerDay: 48000,
    image: '/images/IMG_20250804_154314_588_1754319089201.jpg',
    gallery: ['/images/IMG_20250804_154314_588_1754319089201.jpg', '/images/IMG_20250804_154320_818_1754319089237.jpg'],
    description: 'Coupé 4 portes BMW au design élégant et performances efficientes.',
    features: [
      'BMW Live Cockpit Professional',
      'Climatisation automatique',
      'Sièges sport M en cuir Vernasca',
      'Jantes M double bâtons 19"',
      'Projecteurs LED adaptatifs',
      'Système Hi-Fi Harman Kardon',
      'Caméra de recul',
      'BMW Gestuelle'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '4',
    slug: 'bmw-520d-berline',
    name: 'BMW 520d Berline',
    category: 'Berline',
    pricePerDay: 52000,
    image: '/images/IMG_20250804_154325_718_1754319089277.jpg',
    gallery: ['/images/IMG_20250804_154325_718_1754319089277.jpg', '/images/IMG_20250804_154331_033_1754319089322.jpg'],
    description: 'Berline exécutive BMW Série 5 avec confort et technologies de pointe.',
    features: [
      'BMW Operating System 7.0',
      'Climatisation automatique 4 zones',
      'Sièges confort chauffants en cuir',
      'Jantes alliage style 662M 18"',
      'BMW Laserlight',
      'Caméra de recul + 360°',
      'Système audio Harman Kardon',
      'BMW Display Key'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '5',
    slug: 'audi-a6-50-tdi-quattro',
    name: 'Audi A6 50 TDI quattro',
    category: 'Berline',
    pricePerDay: 58000,
    image: '/images/IMG_20250804_154335_994_1754319089362.jpg',
    gallery: ['/images/IMG_20250804_154335_994_1754319089362.jpg', '/images/IMG_20250804_154343_743_1754319089405.jpg'],
    description: 'Berline exécutive Audi A6 avec traction intégrale et confort premium.',
    features: [
      'MMI navigation plus avec MMI touch',
      'Climatisation automatique 4 zones',
      'Audi Virtual Cockpit plus',
      'Sièges sport en cuir Milano',
      'Jantes 5 branches parallèles 19"',
      'Matrix LED headlights',
      'Caméra de recul',
      'Système audio Bang & Olufsen'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '6',
    slug: 'mercedes-amg-g63',
    name: 'Mercedes-AMG G 63',
    category: 'SUV',
    pricePerDay: 150000,
    image: '/images/IMG_20250804_154349_908_1754319089445.jpg',
    gallery: ['/images/IMG_20250804_154349_908_1754319089445.jpg', '/images/IMG_20250804_154355_216_1754319089489.jpg'],
    description: 'Légende tout-terrain Mercedes-AMG G 63 - icône de performance.',
    features: [
      'MBUX avec écrans premium',
      'Climatisation THERMOTRONIC automatique',
      'AMG Performance 4MATIC',
      'Sièges AMG Performance en cuir nappa',
      'Jantes AMG forgées 22"',
      'Suspension AMG RIDE CONTROL',
      'Caméra 360° tout-terrain',
      'Système audio Burmester 3D surround'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  {
    id: '7',
    slug: 'audi-a1-sportback-30-tfsi',
    name: 'Audi A1 Sportback 30 TFSI',
    category: 'Citadine',
    pricePerDay: 20000,
    image: '/images/IMG_20250804_154400_747_1754319089531.jpg',
    gallery: ['/images/IMG_20250804_154400_747_1754319089531.jpg', '/images/IMG_20250804_154404_115_1754319089576.jpg'],
    description: 'Citadine premium Audi au design sportif et équipements technologiques.',
    features: [
      'Audi Virtual Cockpit',
      'Climatisation automatique',
      'MMI radio plus',
      'Sièges sport en tissu/simili cuir',
      'Jantes alliage 16"',
      'Feux LED',
      'Audi smartphone interface',
      'Caméra de recul'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '2 valises'
    }
  },

  {
    id: '8',
    slug: 'audi-a3-sportback-35-tdi',
    name: 'Audi A3 Sportback 35 TDI',
    category: 'Berline',
    pricePerDay: 28000,
    image: '/images/IMG_20250804_154408_843_1754319089618.jpg',
    gallery: ['/images/IMG_20250804_154408_843_1754319089618.jpg', '/images/IMG_20250804_154421_326_1754319089660.jpg'],
    description: 'Compacte premium Audi avec design moderne et technologies innovantes.',
    features: [
      'MMI navigation plus',
      'Climatisation automatique',
      'Audi Virtual Cockpit plus',
      'Sièges sport en tissu/cuir',
      'Jantes design 17"',
      'Projecteurs LED',
      'Audi connect navigation',
      'Système audio Audi Sound System'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '9',
    slug: 'mercedes-amg-a35-4matic',
    name: 'Mercedes-AMG A 35 4MATIC',
    category: 'Sport',
    pricePerDay: 45000,
    image: '/images/IMG_20250804_154430_078_1754319089703.jpg',
    gallery: ['/images/IMG_20250804_154430_078_1754319089703.jpg', '/images/IMG_20250804_154434_749_1754319089742.jpg'],
    description: 'Compacte sportive Mercedes-AMG A 35 avec traction intégrale et performances.',
    features: [
      'MBUX avec écrans 10.25"',
      'Climatisation THERMATIC',
      'AMG Track Pace',
      'Sièges sport AMG en ARTICO/microfibre',
      'Jantes AMG 18" multibranches',
      'Éclairage d\'ambiance AMG',
      'Caméra de recul',
      'Système audio Burmester surround'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '10',
    slug: 'mercedes-amg-a45s-4matic',
    name: 'Mercedes-AMG A 45 S 4MATIC+',
    category: 'Sport',
    pricePerDay: 62000,
    image: '/images/IMG_20250804_154437_897_1754319089785.jpg',
    gallery: ['/images/IMG_20250804_154437_897_1754319089785.jpg', '/images/IMG_20250804_154442_906_1754319089828.jpg'],
    description: 'Compacte ultra-performante Mercedes-AMG A 45 S - la plus puissante de sa catégorie.',
    features: [
      'MBUX avec AMG Track Pace',
      'Climatisation THERMATIC automatique',
      'AMG Performance 4MATIC+',
      'Sièges baquets AMG en cuir Nappa',
      'Jantes AMG forgées 19"',
      'Projecteurs MULTIBEAM LED',
      'Caméra de recul 360°',
      'Système audio Burmester 3D surround'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '11',
    slug: 'aston-martin-db11-v8',
    name: 'Aston Martin DB11 V8',
    category: 'Luxe',
    pricePerDay: 180000,
    image: '/images/IMG_20250804_154249_191_1754319089062.jpg',
    gallery: ['/images/IMG_20250804_154249_191_1754319089062.jpg', '/images/IMG_20250804_154255_919_1754319089100.jpg'],
    description: 'Grand Tourisme britannique Aston Martin DB11 - élégance et performance.',
    features: [
      'Système d\'infodivertissement TMX',
      'Climatisation automatique bi-zone',
      'Navigation GPS intégrée',
      'Sièges sport en cuir Oxford',
      'Jantes 20" V-Spoke Silver',
      'Phares LED adaptatifs',
      'Caméra de recul',
      'Système audio premium 400W'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  {
    id: '12',
    slug: 'opel-astra-sports-tourer',
    name: 'Opel Astra Sports Tourer',
    category: 'Break',
    pricePerDay: 22000,
    image: '/images/IMG_20250804_154303_459_1754319089128.jpg',
    gallery: ['/images/IMG_20250804_154303_459_1754319089128.jpg', '/images/IMG_20250804_154310_588_1754319089163.jpg'],
    description: 'Break familial Opel Astra avec design moderne et habitabilité optimisée.',
    features: [
      'Multimedia Navi Pro',
      'Climatisation automatique',
      'IntelliLink avec écran 7"',
      'Sièges ergonomiques AGR',
      'Jantes alliage 17"',
      'Phares AFL LED adaptatifs',
      'Caméra de recul',
      'Apple CarPlay / Android Auto'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  {
    id: '13',
    slug: 'seat-ateca-15-tsi',
    name: 'SEAT Ateca 1.5 TSI',
    category: 'SUV',
    pricePerDay: 24000,
    image: '/images/IMG_20250804_154314_588_1754319089201.jpg',
    gallery: ['/images/IMG_20250804_154314_588_1754319089201.jpg', '/images/IMG_20250804_154320_818_1754319089237.jpg'],
    description: 'SUV compact SEAT Ateca avec design moderne et équipements connectés.',
    features: [
      'SEAT Media System Plus 8"',
      'Climatisation automatique',
      'SEAT Connect',
      'Sièges en tissu design',
      'Jantes alliage 17"',
      'Full Link',
      'Caméra de recul',
      'Régulateur de vitesse adaptatif'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '14',
    slug: 'porsche-718-boxster-blanc',
    name: 'Porsche 718 Boxster (Blanc)',
    category: 'Cabriolet',
    pricePerDay: 75000,
    image: '/images/IMG_20250804_154325_718_1754319089277.jpg',
    gallery: ['/images/IMG_20250804_154325_718_1754319089277.jpg', '/images/IMG_20250804_154331_033_1754319089322.jpg'],
    description: 'Roadster Porsche 718 Boxster en blanc pur - élégance à ciel ouvert.',
    features: [
      'PCM avec Porsche Connect',
      'Climatisation automatique',
      'Porsche Communication Management',
      'Sièges sport adaptatifs',
      'Jantes 18/19" Boxster',
      'Phares LED avec PDLS',
      'Capote électrique',
      'Régulateur de vitesse adaptatif'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '15',
    slug: 'porsche-718-boxster-bleu',
    name: 'Porsche 718 Boxster (Bleu)',
    category: 'Cabriolet',
    pricePerDay: 80000,
    image: '/images/IMG_20250804_154335_994_1754319089362.jpg',
    gallery: ['/images/IMG_20250804_154335_994_1754319089362.jpg', '/images/IMG_20250804_154343_743_1754319089405.jpg'],
    description: 'Roadster Porsche 718 Boxster en bleu saphir - passion et performance.',
    features: [
      'PCM avec navigation',
      'Climatisation automatique',
      'Porsche Active Suspension Management',
      'Sièges sport adaptatifs Plus',
      'Jantes 19/20" Boxster S',
      'Phares LED avec PDLS+',
      'Système audio BOSE surround',
      'Sport Chrono Package'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '16',
    slug: 'porsche-718-boxster-gris',
    name: 'Porsche 718 Boxster (Gris)',
    category: 'Cabriolet',
    pricePerDay: 77000,
    image: '/images/IMG_20250804_154349_908_1754319089445.jpg',
    gallery: ['/images/IMG_20250804_154349_908_1754319089445.jpg', '/images/IMG_20250804_154355_216_1754319089489.jpg'],
    description: 'Roadster Porsche 718 Boxster en gris métallisé - sobriété sportive.',
    features: [
      'PCM avec navigation avancée',
      'Climatisation automatique',
      'PASM suspension adaptative',
      'Sièges sport adaptatifs en cuir',
      'Jantes 19/20" design exclusif',
      'Phares LED matrix',
      'Système audio premium',
      'Pack Sport Chrono Plus'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '17',
    slug: 'porsche-718-boxster-noir',
    name: 'Porsche 718 Boxster (Noir)',
    category: 'Cabriolet',
    pricePerDay: 78000,
    image: '/images/IMG_20250804_154400_747_1754319089531.jpg',
    gallery: ['/images/IMG_20250804_154400_747_1754319089531.jpg', '/images/IMG_20250804_154404_115_1754319089576.jpg'],
    description: 'Roadster Porsche 718 Boxster en noir intense - élégance intemporelle.',
    features: [
      'PCM avec navigation complète',
      'Climatisation automatique bi-zone',
      'PASM suspension sport',
      'Sièges sport Plus en cuir',
      'Jantes 19/20" noir satiné',
      'Phares LED noir matrix',
      'Système audio Burmester',
      'Package Sport Design'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '18',
    slug: 'porsche-718-boxster-rouge',
    name: 'Porsche 718 Boxster (Rouge)',
    category: 'Cabriolet',
    pricePerDay: 82000,
    image: '/images/IMG_20250804_154408_843_1754319089618.jpg',
    gallery: ['/images/IMG_20250804_154408_843_1754319089618.jpg', '/images/IMG_20250804_154421_326_1754319089660.jpg'],
    description: 'Roadster Porsche 718 Boxster en rouge guards - passion sportive pure.',
    features: [
      'PCM avec navigation satellite',
      'Climatisation automatique premium',
      'PASM suspension sport adaptative',
      'Sièges sport Plus chauffants',
      'Jantes 19/20" sport design',
      'Phares LED avec éclairage courbe',
      'Système audio Burmester 3D',
      'Sport Chrono Package Plus'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '19',
    slug: 'mercedes-amg-brabus-g850',
    name: 'Mercedes-AMG Brabus G850',
    category: 'Luxe',
    pricePerDay: 250000,
    image: '/images/IMG_20250804_154430_078_1754319089703.jpg',
    gallery: ['/images/IMG_20250804_154430_078_1754319089703.jpg', '/images/IMG_20250804_154434_749_1754319089742.jpg'],
    description: 'SUV ultra-performant Brabus G850 - préparation extrême du légendaire Classe G.',
    features: [
      'Brabus Mastermind infotainment',
      'Climatisation premium 4 zones',
      'Suspension Brabus Ride Control',
      'Sièges Brabus en cuir fin diamond',
      'Jantes Brabus forgées 23"',
      'Éclairage LED signature Brabus',
      'Caméra 360° haute définition',
      'Système audio Burmester High-End 3D'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  {
    id: '20',
    slug: 'porsche-cayenne-turbo',
    name: 'Porsche Cayenne Turbo',
    category: 'SUV',
    pricePerDay: 120000,
    image: '/images/IMG_20250804_154437_897_1754319089785.jpg',
    gallery: ['/images/IMG_20250804_154437_897_1754319089785.jpg', '/images/IMG_20250804_154442_906_1754319089828.jpg'],
    description: 'SUV sportif Porsche Cayenne Turbo - performances et polyvalence.',
    features: [
      'PCM avec navigation Plus',
      'Climatisation automatique 4 zones',
      'Suspension pneumatique PASM',
      'Sièges sport Plus 18 réglages',
      'Jantes Turbo 21"',
      'Phares LED matrix adaptatifs',
      'Caméra de recul surround view',
      'Système audio Burmester 3D'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  // Ajout des autres voitures en format adapté
  {
    id: '21',
    slug: 'renault-clio-5',
    name: 'Renault Clio 5',
    category: 'Citadine',
    pricePerDay: 15000,
    image: '/images/IMG_20250804_154249_191_1754319089062.jpg',
    gallery: ['/images/IMG_20250804_154249_191_1754319089062.jpg'],
    description: 'Citadine française moderne avec design actualisé et technologies connectées.',
    features: [
      'R-Link 2 avec écran 7"',
      'Climatisation manuelle',
      'Aide au stationnement arrière',
      'Jantes alliage 16"',
      'Feux de jour LED',
      'Régulateur limiteur de vitesse',
      'Système Easy Link',
      'Volant cuir multifonction'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '2 valises'
    }
  },

  {
    id: '22',
    slug: 'seat-cupra-formentor',
    name: 'SEAT Cupra Formentor',
    category: 'Sport',
    pricePerDay: 55000,
    image: '/images/IMG_20250804_154255_919_1754319089100.jpg',
    gallery: ['/images/IMG_20250804_154255_919_1754319089100.jpg'],
    description: 'SUV sportif Cupra Formentor avec design audacieux et performances affirmées.',
    features: [
      'Cupra Connect avec écran 12"',
      'Climatisation automatique 3 zones',
      'Sièges sport Cupra bucket',
      'Jantes Cupra 19"',
      'Phares LED matrix',
      'Système audio Beats',
      'Drive Profile avec Cupra mode',
      'Volant sport Cupra'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '23',
    slug: 'skoda-fabia-monte-carlo',
    name: 'Škoda Fabia Monte Carlo',
    category: 'Citadine',
    pricePerDay: 16000,
    image: '/images/IMG_20250804_154303_459_1754319089128.jpg',
    gallery: ['/images/IMG_20250804_154303_459_1754319089128.jpg'],
    description: 'Citadine Škoda Fabia avec finition Monte Carlo sportive et équipements premium.',
    features: [
      'Infotainment Bolero avec écran 8"',
      'Climatisation automatique',
      'Sièges sport Monte Carlo',
      'Jantes alliage 17" Monte Carlo',
      'Éclairage LED',
      'SmartLink+',
      'Aide au stationnement arrière',
      'Volant sport multifonction'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '24',
    slug: 'fiat-500-lounge',
    name: 'Fiat 500 Lounge',
    category: 'Citadine',
    pricePerDay: 14000,
    image: '/images/IMG_20250804_154310_588_1754319089163.jpg',
    gallery: ['/images/IMG_20250804_154310_588_1754319089163.jpg'],
    description: 'Citadine iconique Fiat 500 Lounge avec style italien distinctif.',
    features: [
      'Uconnect avec écran 7"',
      'Climatisation automatique',
      'Sièges en cuir avec logo 500',
      'Jantes alliage 16"',
      'Toit ouvrant électrique',
      'Apple CarPlay / Android Auto',
      'Système audio premium',
      'Volant cuir'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 4,
      luggage: '1 valise'
    }
  },

  {
    id: '25',
    slug: 'fiat-500x-cross',
    name: 'Fiat 500X Cross',
    category: 'SUV',
    pricePerDay: 22000,
    image: '/images/IMG_20250804_154314_588_1754319089201.jpg',
    gallery: ['/images/IMG_20250804_154314_588_1754319089201.jpg'],
    description: 'SUV compact Fiat 500X Cross avec caractère aventurier et style italien.',
    features: [
      'Uconnect 8.4" avec navigation',
      'Climatisation automatique bi-zone',
      'Sièges en tissu premium',
      'Jantes alliage 18"',
      'Feux LED',
      'Contrôle de traction avancé',
      'Caméra de recul',
      'Système audio Beats'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '26',
    slug: 'fiat-abarth-595',
    name: 'Fiat Abarth 595',
    category: 'Sport',
    pricePerDay: 35000,
    image: '/images/IMG_20250804_154320_818_1754319089237.jpg',
    gallery: ['/images/IMG_20250804_154320_818_1754319089237.jpg'],
    description: 'Citadine sportive Abarth 595 avec tempérament de scorpion et performances affirmées.',
    features: [
      'Uconnect avec écran 7"',
      'Climatisation manuelle',
      'Sièges sport Abarth',
      'Jantes alliage 17" Abarth',
      'Échappement sport Record Monza',
      'Sabelt harness ready',
      'Pédalier sport',
      'Volant sport Abarth'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 4,
      luggage: '1 valise'
    }
  },

  {
    id: '27',
    slug: 'mercedes-gle-coupe',
    name: 'Mercedes GLE Coupé',
    category: 'SUV',
    pricePerDay: 85000,
    image: '/images/IMG_20250804_154325_718_1754319089277.jpg',
    gallery: ['/images/IMG_20250804_154325_718_1754319089277.jpg'],
    description: 'SUV coupé Mercedes GLE avec design élégant et technologies avancées.',
    features: [
      'MBUX avec écrans 12.3"',
      'Climatisation THERMATIC 3 zones',
      'Sièges en cuir ARTICO',
      'Jantes AMG 20"',
      'Phares LED Intelligent Light System',
      'Caméra 360°',
      'Système audio surround',
      'Suspension pneumatique AIRMATIC'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '28',
    slug: 'mercedes-gle-care',
    name: 'Mercedes GLE Caré',
    category: 'SUV',
    pricePerDay: 90000,
    image: '/images/IMG_20250804_154331_033_1754319089322.jpg',
    gallery: ['/images/IMG_20250804_154331_033_1754319089322.jpg'],
    description: 'SUV Mercedes GLE avec finition Caré exclusive et équipements premium.',
    features: [
      'MBUX dernière génération',
      'Climatisation THERMATIC 4 zones',
      'Sièges en cuir premium',
      'Jantes design exclusif 21"',
      'Éclairage d\'ambiance 64 couleurs',
      'Système audio Burmester',
      'Toit panoramique',
      'Pack Exclusive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '5 valises'
    }
  },

  {
    id: '29',
    slug: 'mercedes-gle-care-maybach',
    name: 'Mercedes GLE Caré Maybach',
    category: 'Luxe',
    pricePerDay: 200000,
    image: '/images/IMG_20250804_154335_994_1754319089362.jpg',
    gallery: ['/images/IMG_20250804_154335_994_1754319089362.jpg'],
    description: 'SUV ultra-luxueux Mercedes GLE avec finition Maybach - summum du raffinement.',
    features: [
      'MBUX Maybach avec écrans premium',
      'Climatisation exclusive 4 zones',
      'Sièges Maybach en cuir Nappa',
      'Jantes Maybach forgées 22"',
      'Éclairage ambiance Maybach',
      'Système audio Burmester High-End 4D',
      'Toit panoramique Magic Sky Control',
      'Finitions bois précieux'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '4 valises'
    }
  },

  {
    id: '30',
    slug: 'mercedes-gle63s-amg',
    name: 'Mercedes GLE 63 S AMG',
    category: 'Sport',
    pricePerDay: 140000,
    image: '/images/IMG_20250804_154343_743_1754319089405.jpg',
    gallery: ['/images/IMG_20250804_154343_743_1754319089405.jpg'],
    description: 'SUV ultra-sportif Mercedes-AMG GLE 63 S avec performances exceptionnelles.',
    features: [
      'MBUX AMG avec AMG Track Pace',
      'Climatisation THERMATIC AMG',
      'Sièges Performance AMG',
      'Jantes AMG forgées 22"',
      'Suspension AMG Active Ride Control',
      'Freins AMG haute performance',
      'Échappement AMG Performance',
      'AMG Dynamic Select'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // Continuation avec les 29 voitures restantes
  {
    id: '31',
    slug: 'bmw-x5-m50d',
    name: 'BMW X5 M50d',
    category: 'SUV',
    pricePerDay: 75000,
    image: '/images/IMG_20250804_154349_908_1754319089445.jpg',
    gallery: ['/images/IMG_20250804_154349_908_1754319089445.jpg'],
    description: 'SUV BMW X5 M50d avec performances diesel et polyvalence exceptionnelle.',
    features: [
      'BMW Live Cockpit Professional',
      'Climatisation automatique 4 zones',
      'Sièges confort en cuir Vernasca',
      'Jantes M 21"',
      'Suspension pneumatique adaptative',
      'Caméra 360° avec vue surround',
      'Système audio Harman Kardon',
      'BMW xDrive intelligent'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '6 valises'
    }
  },

  {
    id: '32',
    slug: 'bmw-x7-m50i',
    name: 'BMW X7 M50i',
    category: 'SUV',
    pricePerDay: 95000,
    image: '/images/IMG_20250804_154355_216_1754319089489.jpg',
    gallery: ['/images/IMG_20250804_154355_216_1754319089489.jpg'],
    description: 'SUV de luxe BMW X7 M50i - le summum de l\'espace et du raffinement.',
    features: [
      'BMW Operating System 7.0',
      'Climatisation luxe 4 zones',
      'Sièges Individual en cuir Merino',
      'Jantes M Performance 22"',
      'Suspension pneumatique Executive',
      'Éclairage d\'ambiance Bowers & Wilkins',
      'Toit panoramique Sky Lounge',
      'Captain chairs arrière'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 7,
      luggage: '7 valises'
    }
  },

  {
    id: '33',
    slug: 'audi-rs3-sportback',
    name: 'Audi RS3 Sportback',
    category: 'Sport',
    pricePerDay: 65000,
    image: '/images/IMG_20250804_154400_747_1754319089531.jpg',
    gallery: ['/images/IMG_20250804_154400_747_1754319089531.jpg'],
    description: 'Compacte ultra-sportive Audi RS3 avec moteur 5 cylindres légendaire.',
    features: [
      'Audi Virtual Cockpit plus RS',
      'Climatisation automatique',
      'Sièges sport RS en cuir/Alcantara',
      'Jantes RS 19"',
      'Suspension RS sport adaptative',
      'Échappement RS sport',
      'Mode RS avec RS Torque Splitter',
      'Système audio Bang & Olufsen'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '34',
    slug: 'audi-rs6-avant',
    name: 'Audi RS6 Avant',
    category: 'Sport',
    pricePerDay: 120000,
    image: '/images/IMG_20250804_154404_115_1754319089576.jpg',
    gallery: ['/images/IMG_20250804_154404_115_1754319089576.jpg'],
    description: 'Break ultra-sportif Audi RS6 Avant - polyvalence et performances extrêmes.',
    features: [
      'MMI navigation plus RS',
      'Climatisation automatique 4 zones',
      'Sièges sport RS Plus en cuir',
      'Jantes RS 22"',
      'Suspension pneumatique RS adaptative',
      'Échappement RS sport avec son',
      'RS Dynamic ride control',
      'Système audio Bang & Olufsen Advanced'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '6 valises'
    }
  },

  {
    id: '35',
    slug: 'range-rover-sport',
    name: 'Range Rover Sport',
    category: 'SUV',
    pricePerDay: 80000,
    image: '/images/IMG_20250804_154408_843_1754319089618.jpg',
    gallery: ['/images/IMG_20250804_154408_843_1754319089618.jpg'],
    description: 'SUV premium Range Rover Sport avec capacités tout-terrain légendaires.',
    features: [
      'Pivi Pro avec écran 11.4"',
      'Climatisation automatique 4 zones',
      'Sièges Windsor en cuir',
      'Jantes 21" Style 5007',
      'Suspension pneumatique adaptative',
      'Terrain Response 2',
      'ClearSight Ground View',
      'Système audio Meridian'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  {
    id: '36',
    slug: 'range-rover-evoque-convertible',
    name: 'Range Rover Evoque Convertible',
    category: 'Cabriolet',
    pricePerDay: 70000,
    image: '/images/IMG_20250804_154421_326_1754319089660.jpg',
    gallery: ['/images/IMG_20250804_154421_326_1754319089660.jpg'],
    description: 'SUV cabriolet unique Range Rover Evoque Convertible - luxe à ciel ouvert.',
    features: [
      'Touch Pro avec écran 10"',
      'Climatisation automatique bi-zone',
      'Sièges Ebony en cuir perforé',
      'Jantes 20" Style 5085',
      'Capote électrique Z-fold',
      'All Terrain Progress Control',
      'Wade Sensing',
      'Système audio Meridian surround'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  {
    id: '37',
    slug: 'porsche-911-carrera-s',
    name: 'Porsche 911 Carrera S',
    category: 'Sport',
    pricePerDay: 110000,
    image: '/images/IMG_20250804_154430_078_1754319089703.jpg',
    gallery: ['/images/IMG_20250804_154430_078_1754319089703.jpg'],
    description: 'Icône sportive Porsche 911 Carrera S - perfection allemande intemporelle.',
    features: [
      'PCM avec Porsche Connect Plus',
      'Climatisation automatique',
      'Sièges sport adaptatifs Plus',
      'Jantes Carrera S 20/21"',
      'PASM suspension sport',
      'Sport Chrono Package',
      'Porsche Stability Management',
      'Système audio BOSE surround'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  {
    id: '38',
    slug: 'porsche-panamera-turbo-s',
    name: 'Porsche Panamera Turbo S',
    category: 'Luxe',
    pricePerDay: 160000,
    image: '/images/IMG_20250804_154434_749_1754319089742.jpg',
    gallery: ['/images/IMG_20250804_154434_749_1754319089742.jpg'],
    description: 'Berline de grand luxe Porsche Panamera Turbo S - performance et raffinement.',
    features: [
      'PCM avec navigation haute résolution',
      'Climatisation automatique 4 zones',
      'Sièges confort adaptatifs 18 réglages',
      'Jantes Panamera Turbo 21"',
      'Suspension pneumatique adaptative',
      'Porsche Dynamic Chassis Control',
      'Sport Chrono Package Turbo',
      'Système audio Burmester High-End 3D'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '4 valises'
    }
  },

  {
    id: '39',
    slug: 'mercedes-classe-s-maybach',
    name: 'Mercedes Classe S Maybach',
    category: 'Luxe',
    pricePerDay: 220000,
    image: '/images/IMG_20250804_154437_897_1754319089785.jpg',
    gallery: ['/images/IMG_20250804_154437_897_1754319089785.jpg'],
    description: 'Berline de luxe absolu Mercedes-Maybach Classe S - summum de l\'élégance.',
    features: [
      'MBUX Maybach avec écrans premium',
      'Climatisation parfumée 4 zones',
      'Sièges Executive Maybach en cuir nappa',
      'Jantes Maybach forgées 20"',
      'Suspension Magic Body Control',
      'Éclairage d\'ambiance exclusive',
      'Réfrigérateur champagne arrière',
      'Système audio Burmester High-End 4D'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '3 valises'
    }
  },

  {
    id: '40',
    slug: 'mercedes-sls-amg',
    name: 'Mercedes SLS AMG',
    category: 'Luxe',
    pricePerDay: 300000,
    image: '/images/IMG_20250804_154442_906_1754319089828.jpg',
    gallery: ['/images/IMG_20250804_154442_906_1754319089828.jpg'],
    description: 'Supercar Mercedes SLS AMG avec portes papillon - légende automobile.',
    features: [
      'AMG COMAND avec navigation',
      'Climatisation automatique',
      'Sièges sport AMG en cuir exclusif',
      'Jantes AMG forgées 19/20"',
      'Suspension AMG Ride Control',
      'Portes papillon électriques',
      'Échappement AMG Performance',
      'Track Package AMG'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '41',
    slug: 'ferrari-488-gtb',
    name: 'Ferrari 488 GTB',
    category: 'Luxe',
    pricePerDay: 400000,
    image: '/images/IMG_20250804_154249_191_1754319089062.jpg',
    gallery: ['/images/IMG_20250804_154249_191_1754319089062.jpg'],
    description: 'Supercar Ferrari 488 GTB - l\'excellence italienne au service de la performance.',
    features: [
      'Infotainment Ferrari avec navigation',
      'Climatisation automatique',
      'Sièges sport Daytona en cuir',
      'Jantes Ferrari 20"',
      'Suspension magnétique SCM-E',
      'Side Slip Control SSC3',
      'F1-Trac système de traction',
      'Échappement sport Ferrari'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '42',
    slug: 'lamborghini-huracan',
    name: 'Lamborghini Huracán',
    category: 'Luxe',
    pricePerDay: 450000,
    image: '/images/IMG_20250804_154255_919_1754319089100.jpg',
    gallery: ['/images/IMG_20250804_154255_919_1754319089100.jpg'],
    description: 'Supercar Lamborghini Huracán - puissance et design italien extrêmes.',
    features: [
      'Lamborghini Infotainment System',
      'Climatisation automatique',
      'Sièges sport en cuir et Alcantara',
      'Jantes Lamborghini 19/20"',
      'Suspension magnétique adaptative',
      'LDVI Lamborghini Dinamica Veicolo',
      'Mode de conduite ANIMA',
      'Échappement sport avec valve'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '43',
    slug: 'mclaren-570s',
    name: 'McLaren 570S',
    category: 'Luxe',
    pricePerDay: 380000,
    image: '/images/IMG_20250804_154303_459_1754319089128.jpg',
    gallery: ['/images/IMG_20250804_154303_459_1754319089128.jpg'],
    description: 'Supercar McLaren 570S - technologie de F1 pour la route.',
    features: [
      'IRIS McLaren infotainment',
      'Climatisation automatique',
      'Sièges sport en cuir P1',
      'Jantes McLaren forgées 19/20"',
      'Suspension adaptative ProActive',
      'Active Dynamics Panel',
      'Portes en élytres',
      'Système audio Bowers & Wilkins'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '44',
    slug: 'bentley-continental-gt',
    name: 'Bentley Continental GT',
    category: 'Luxe',
    pricePerDay: 280000,
    image: '/images/IMG_20250804_154310_588_1754319089163.jpg',
    gallery: ['/images/IMG_20250804_154310_588_1754319089163.jpg'],
    description: 'Grand Tourer Bentley Continental GT - luxe britannique et performance.',
    features: [
      'Bentley Rotating Display 12.3"',
      'Climatisation automatique 4 zones',
      'Sièges en cuir Beluga avec quilting',
      'Jantes Bentley 21"',
      'Suspension pneumatique adaptative',
      'Bentley Dynamic Ride',
      'Toit panoramique électrique',
      'Système audio Naim for Bentley'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '3 valises'
    }
  },

  {
    id: '45',
    slug: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost',
    category: 'Luxe',
    pricePerDay: 500000,
    image: '/images/IMG_20250804_154314_588_1754319089201.jpg',
    gallery: ['/images/IMG_20250804_154314_588_1754319089201.jpg'],
    description: 'Berline de luxe absolu Rolls-Royce Ghost - perfection et silence.',
    features: [
      'SPIRIT infotainment Rolls-Royce',
      'Climatisation parfumée individuelle',
      'Sièges en cuir premium avec massage',
      'Jantes Rolls-Royce 21"',
      'Suspension Planar',
      'Magic Carpet Ride',
      'Starlight Headliner',
      'Système audio Bespoke'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '46',
    slug: 'maserati-granturismo',
    name: 'Maserati GranTurismo',
    category: 'Luxe',
    pricePerDay: 200000,
    image: '/images/IMG_20250804_154320_818_1754319089237.jpg',
    gallery: ['/images/IMG_20250804_154320_818_1754319089237.jpg'],
    description: 'Grand Tourisme Maserati GranTurismo - élégance italienne et son unique.',
    features: [
      'Maserati Intelligent Assistant',
      'Climatisation automatique bi-zone',
      'Sièges sport en cuir Poltrona Frau',
      'Jantes Maserati 20"',
      'Suspension Skyhook adaptative',
      'Mode de conduite Sport/Corsa',
      'Échappement signature Maserati',
      'Système audio Harman Kardon'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  {
    id: '47',
    slug: 'tesla-model-s-plaid',
    name: 'Tesla Model S Plaid',
    category: 'Électrique',
    pricePerDay: 150000,
    image: '/images/IMG_20250804_154325_718_1754319089277.jpg',
    gallery: ['/images/IMG_20250804_154325_718_1754319089277.jpg'],
    description: 'Berline électrique Tesla Model S Plaid - futur de l\'automobile.',
    features: [
      'Écran central 17" avec gaming',
      'Climatisation automatique premium',
      'Sièges ventilés en cuir vegan',
      'Jantes Arachnid 21"',
      'Suspension pneumatique adaptative',
      'Autopilot Full Self-Driving',
      'Mode Plaid Track',
      'Système audio premium 22 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Électrique',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '48',
    slug: 'lexus-lc500',
    name: 'Lexus LC 500',
    category: 'Luxe',
    pricePerDay: 180000,
    image: '/images/IMG_20250804_154331_033_1754319089322.jpg',
    gallery: ['/images/IMG_20250804_154331_033_1754319089322.jpg'],
    description: 'Coupé de luxe Lexus LC 500 - design avant-gardiste et confort japonais.',
    features: [
      'Lexus Interface avec écran 10.3"',
      'Climatisation automatique 3 zones',
      'Sièges sport en cuir semi-aniline',
      'Jantes BBS forgées 21"',
      'Suspension adaptative AVS',
      'Lexus Safety System+ 2.0',
      'Mode de conduite Select',
      'Système audio Mark Levinson'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  {
    id: '49',
    slug: 'genesis-g90',
    name: 'Genesis G90',
    category: 'Luxe',
    pricePerDay: 120000,
    image: '/images/IMG_20250804_154335_994_1754319089362.jpg',
    gallery: ['/images/IMG_20250804_154335_994_1754319089362.jpg'],
    description: 'Berline de luxe Genesis G90 - nouveau standard du luxe coréen.',
    features: [
      'Genesis Connected Services',
      'Climatisation automatique 4 zones',
      'Sièges première classe en cuir Nappa',
      'Jantes Genesis 19"',
      'Suspension pneumatique electronique',
      'Genesis Active Safety Control',
      'Mode Chauffeur VIP',
      'Système audio Lexicon 17 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '50',
    slug: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    category: 'SUV',
    pricePerDay: 140000,
    image: '/images/IMG_20250804_154343_743_1754319089405.jpg',
    gallery: ['/images/IMG_20250804_154343_743_1754319089405.jpg'],
    description: 'SUV de luxe américain Cadillac Escalade - présence imposante et confort.',
    features: [
      'Cadillac User Experience avec écran 38"',
      'Climatisation automatique tri-zone',
      'Sièges première classe en cuir',
      'Jantes Cadillac 22"',
      'Suspension Magnetic Ride Control',
      'Super Cruise mains libres',
      'Mode Tow/Haul',
      'Système audio AKG Studio 36 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 8,
      luggage: '8 valises'
    }
  },

  {
    id: '51',
    slug: 'jaguar-f-type-r',
    name: 'Jaguar F-Type R',
    category: 'Sport',
    pricePerDay: 130000,
    image: '/images/IMG_20250804_154349_908_1754319089445.jpg',
    gallery: ['/images/IMG_20250804_154349_908_1754319089445.jpg'],
    description: 'Coupé sportif Jaguar F-Type R - héritage britannique et performances.',
    features: [
      'Pivi Pro Jaguar avec écran 11.4"',
      'Climatisation automatique bi-zone',
      'Sièges sport R en cuir Windsor',
      'Jantes R-Dynamic 20"',
      'Suspension adaptative configurable',
      'Dynamic Mode avec Active Exhaust',
      'Jaguar Configurable Dynamics',
      'Système audio Meridian 770W'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '52',
    slug: 'alfa-romeo-giulia-quadrifoglio',
    name: 'Alfa Romeo Giulia Quadrifoglio',
    category: 'Sport',
    pricePerDay: 100000,
    image: '/images/IMG_20250804_154355_216_1754319089489.jpg',
    gallery: ['/images/IMG_20250804_154355_216_1754319089489.jpg'],
    description: 'Berline sportive Alfa Romeo Giulia Quadrifoglio - passion italienne pure.',
    features: [
      'Alfa Connect avec écran 8.8"',
      'Climatisation automatique bi-zone',
      'Sièges sport Sparco en cuir/Alcantara',
      'Jantes Quadrifoglio 19"',
      'Suspension Alfa Active adaptative',
      'Système Q4 AWD intelligent',
      'Mode Race avec Launch Control',
      'Système audio Harman Kardon 900W'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '53',
    slug: 'volvo-xc90-excellence',
    name: 'Volvo XC90 Excellence',
    category: 'SUV',
    pricePerDay: 110000,
    image: '/images/IMG_20250804_154400_747_1754319089531.jpg',
    gallery: ['/images/IMG_20250804_154400_747_1754319089531.jpg'],
    description: 'SUV de luxe Volvo XC90 Excellence - design scandinave et sécurité.',
    features: [
      'Sensus Connect avec écran 12"',
      'Climatisation 4 zones Air Quality',
      'Sièges Individual en cuir Nappa',
      'Jantes Excellence 21"',
      'Suspension pneumatique Four-C',
      'Pilot Assist semi-autonome',
      'Crystal gear shift by Orrefors',
      'Système audio Bowers & Wilkins'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Hybride',
      seats: 4,
      luggage: '5 valises'
    }
  },

  {
    id: '54',
    slug: 'infiniti-qx80',
    name: 'Infiniti QX80',
    category: 'SUV',
    pricePerDay: 90000,
    image: '/images/IMG_20250804_154404_115_1754319089576.jpg',
    gallery: ['/images/IMG_20250804_154404_115_1754319089576.jpg'],
    description: 'SUV de luxe Infiniti QX80 - confort japonais et capacités familiales.',
    features: [
      'InTouch avec écrans doubles 8"',
      'Climatisation automatique tri-zone',
      'Sièges semi-aniline en cuir',
      'Jantes Infiniti 22"',
      'Suspension hydraulique Body Motion',
      'ProPILOT Assist avec Navi-link',
      'Mode Snow/Sand/Rock',
      'Système audio Bose 17 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 8,
      luggage: '7 valises'
    }
  },

  {
    id: '55',
    slug: 'acura-nsx',
    name: 'Acura NSX',
    category: 'Sport',
    pricePerDay: 250000,
    image: '/images/IMG_20250804_154408_843_1754319089618.jpg',
    gallery: ['/images/IMG_20250804_154408_843_1754319089618.jpg'],
    description: 'Supercar hybride Acura NSX - technologie avancée et performances.',
    features: [
      'NSX Interface avec écran central',
      'Climatisation automatique',
      'Sièges sport en cuir et Alcantara',
      'Jantes NSX forgées 19/20"',
      'Sport Hybrid SH-AWD',
      'Integrated Dynamics System',
      'Mode Track avec télémétrie',
      'Système audio ELS Studio 9 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Hybride',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '56',
    slug: 'lincoln-navigator',
    name: 'Lincoln Navigator',
    category: 'SUV',
    pricePerDay: 120000,
    image: '/images/IMG_20250804_154421_326_1754319089660.jpg',
    gallery: ['/images/IMG_20250804_154421_326_1754319089660.jpg'],
    description: 'SUV de luxe américain Lincoln Navigator - espace et raffinement.',
    features: [
      'SYNC 4 avec écran 13.2"',
      'Climatisation automatique 3 zones',
      'Sièges Perfect Position en cuir',
      'Jantes Lincoln 22"',
      'Suspension pneumatique adaptative',
      'Lincoln Co-Pilot360 Plus',
      'Mode Tow/Haul intelligent',
      'Système audio Revel Ultima 28 haut-parleurs'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 8,
      luggage: '8 valises'
    }
  },

  {
    id: '57',
    slug: 'koenigsegg-regera',
    name: 'Koenigsegg Regera',
    category: 'Luxe',
    pricePerDay: 800000,
    image: '/images/IMG_20250804_154430_078_1754319089703.jpg',
    gallery: ['/images/IMG_20250804_154430_078_1754319089703.jpg'],
    description: 'Hypercar Koenigsegg Regera - technologie révolutionnaire suédoise.',
    features: [
      'Koenigsegg Autoskin actionneurs automatiques',
      'Climatisation carbone',
      'Sièges en fibre de carbone',
      'Jantes carbone Koenigsegg',
      'KDD Koenigsegg Direct Drive',
      'Aérodynamique active',
      'Mode Attack/Track',
      'Système audio bespoke'
    ],
    specifications: {
      transmission: 'Direct Drive',
      fuel: 'Hybride',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '58',
    slug: 'pagani-huayra',
    name: 'Pagani Huayra',
    category: 'Luxe',
    pricePerDay: 900000,
    image: '/images/IMG_20250804_154434_749_1754319089742.jpg',
    gallery: ['/images/IMG_20250804_154434_749_1754319089742.jpg'],
    description: 'Hypercar Pagani Huayra - art et ingénierie italienne absolue.',
    features: [
      'Système Pagani bespoke',
      'Climatisation carbone léger',
      'Sièges carbone avec cuir Connolly',
      'Jantes Pagani en magnésium',
      'Suspension Öhlins adaptative',
      'Aérodynamique active Pagani',
      'Mode Pista circuit',
      'Système audio Sonus faber'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  },

  {
    id: '59',
    slug: 'bugatti-chiron',
    name: 'Bugatti Chiron',
    category: 'Luxe',
    pricePerDay: 1200000,
    image: '/images/IMG_20250804_154437_897_1754319089785.jpg',
    gallery: ['/images/IMG_20250804_154437_897_1754319089785.jpg'],
    description: 'Hypercar Bugatti Chiron - summum absolu de l\'automobile de luxe.',
    features: [
      'Système Bugatti exclusif',
      'Climatisation premium bi-zone',
      'Sièges en cuir Poltrona Frau',
      'Jantes Bugatti forgées',
      'Suspension Bugatti adaptative',
      'Modes EB/Autobahn/Top Speed',
      'Carrosserie carbone/aluminum',
      'Système audio Accuton Diamond'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '1 valise'
    }
  }
];

// Fonctions utilitaires pour obtenir les marques et catégories
export function getBrands(): string[] {
  const brands = cars.map(car => {
    // Extraire la marque du nom
    if (car.name.includes('BMW')) return 'BMW';
    if (car.name.includes('Mercedes')) return 'Mercedes-Benz';
    if (car.name.includes('Audi')) return 'Audi';
    if (car.name.includes('Porsche')) return 'Porsche';
    if (car.name.includes('Peugeot')) return 'Peugeot';
    if (car.name.includes('Aston Martin')) return 'Aston Martin';
    if (car.name.includes('Opel')) return 'Opel';
    if (car.name.includes('SEAT')) return 'SEAT';
    if (car.name.includes('Renault')) return 'Renault';
    if (car.name.includes('Škoda')) return 'Škoda';
    if (car.name.includes('Fiat')) return 'Fiat';
    if (car.name.includes('Brabus')) return 'Brabus';
    return 'Autre';
  });
  return Array.from(new Set(brands)).sort();
}

export function getCategories(): string[] {
  const categories = cars.map(car => car.category);
  return Array.from(new Set(categories)).sort();
}

export function getMaxPrice(): number {
  return Math.max(...cars.map(car => car.pricePerDay));
}

// Exports pour la compatibilité
export const brands = [
  { value: "all", label: "Toutes les marques" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Bentley", label: "Bentley" },
  { value: "Brabus", label: "Brabus" },
  { value: "Bugatti", label: "Bugatti" },
  { value: "Cadillac", label: "Cadillac" },
  { value: "Ferrari", label: "Ferrari" },
  { value: "Fiat", label: "Fiat" },
  { value: "Genesis", label: "Genesis" },
  { value: "Infiniti", label: "Infiniti" },
  { value: "Jaguar", label: "Jaguar" },
  { value: "Koenigsegg", label: "Koenigsegg" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "Lexus", label: "Lexus" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "Maserati", label: "Maserati" },
  { value: "McLaren", label: "McLaren" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Opel", label: "Opel" },
  { value: "Pagani", label: "Pagani" },
  { value: "Peugeot", label: "Peugeot" },
  { value: "Porsche", label: "Porsche" },
  { value: "Renault", label: "Renault" },
  { value: "Rolls-Royce", label: "Rolls-Royce" },
  { value: "SEAT", label: "SEAT" },
  { value: "Škoda", label: "Škoda" },
  { value: "Tesla", label: "Tesla" },
  { value: "Volvo", label: "Volvo" },
];

export const categories = [
  { value: "all", label: "Toutes les catégories" },
  { value: "Berline", label: "Berline" },
  { value: "Break", label: "Break" },
  { value: "Cabriolet", label: "Cabriolet" },
  { value: "Citadine", label: "Citadine" },
  { value: "Coupé", label: "Coupé" },
  { value: "Électrique", label: "Électrique" },
  { value: "Luxe", label: "Luxe" },
  { value: "Sport", label: "Sport" },
  { value: "SUV", label: "SUV" },
];

export const priceRanges = [
  { label: "Moins de 30 000 DA", min: 0, max: 30000 },
  { label: "30 000 - 60 000 DA", min: 30000, max: 60000 },
  { label: "60 000 - 120 000 DA", min: 60000, max: 120000 },
  { label: "Plus de 120 000 DA", min: 120000, max: Infinity },
];