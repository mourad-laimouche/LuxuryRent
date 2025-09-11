// Interface Car pour les véhicules de location
export interface Car {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricePerDay: number;
  pricePerDayDA: number;
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
  imagePosition?: string; // Position optimale pour l'affichage de l'image
}

// Inventaire final de vos 40 voitures avec prix en DA et EUR - ORDRE EXACT selon votre liste finale
export const cars: Car[] = [
  // 1. Brabus - 200 000 DA / 800 €
  {
    id: '2',
    slug: 'brabus-g700',
    name: 'Brabus',
    category: 'Luxe',
    pricePerDay: 800,
    pricePerDayDA: 200000,
    image: '/images/cars/brabus/brabus-new.jpg',
    gallery: [
      '/images/cars/brabus/brabus-new.jpg',
      '/images/cars/brabus/brabus (1).jpg',
      '/images/cars/brabus/brabus (2).jpg',
      '/images/cars/brabus/brabus (3).jpg',
      '/images/cars/brabus/brabus (4).jpg',
      '/images/cars/brabus/brabus (5).jpg',
      '/images/cars/brabus/brabus (6).jpg',
      '/images/cars/brabus/brabus (7).jpg',
      '/images/cars/brabus/brabus (8).jpg',
      '/images/cars/brabus/brabus (9).jpg',
      '/images/cars/brabus/brabus (10).jpg',
      '/images/cars/brabus/brabus (11).jpg'
    ],
    description: 'SUV Brabus le plus puissant au monde avec 850 ch et finitions ultra-luxueuses.',
    features: [
      'Moteur Brabus 850',
      'Intérieur cuir masterpiece',
      'Suspension Brabus',
      'Échappement Brabus',
      'Jantes Brabus Monoblock Z 24"',
      'Package Carbon Signature'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 3. Urus - 200 000 DA / 800 €
  {
    id: '3',
    slug: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    category: 'Luxe',
    pricePerDay: 800,
    pricePerDayDA: 200000,
    image: '/images/cars/urus/urus (1).jpg',
    gallery: [
      '/images/cars/urus/urus (1).jpg',
      '/images/cars/urus/urus (2).jpg',
      '/images/cars/urus/urus (3).jpg',
      '/images/cars/urus/urus (4).jpg',
      '/images/cars/urus/urus (5).jpg',
      '/images/cars/urus/urus (6).jpg'
    ],
    description: 'Super SUV Lamborghini Urus combinant performances extrêmes et luxe italien.',
    features: [
      'Moteur V8 biturbo 650 ch',
      'Transmission intégrale permanente',
      'Suspension pneumatique adaptative',
      'Système ANIMA Drive',
      'Jantes alliage 22"',
      'Package Aerodinamico'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 3. Classe G - 150 000 DA / 600 €
  {
    id: '1',
    slug: 'mercedes-g63-amg',
    name: 'Classe G',
    category: 'SUV',
    pricePerDay: 600,
    pricePerDayDA: 150000,
    image: '/images/cars/G63/g63-new.jpg',
    gallery: [
      '/images/cars/G63/g63- (1).jpg',
      '/images/cars/G63/g63- (2).jpg',
      '/images/cars/G63/g63- (3).jpg',
      '/images/cars/G63/g63- (4).jpg',
      '/images/cars/G63/g63- (5).jpg',
      '/images/cars/G63/g63- (6).jpg'
    ],
    description: 'Icône SUV Mercedes-AMG G63 combinant luxe absolu et capacités tout-terrain.',
    features: [
      'AMG Performance 4MATIC',
      'MBUX avec écran 12.3"',
      'Suspension AMG',
      'Différentiels 100% verrouillables',
      'Jantes AMG 22"',
      'Package AMG Night'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 4. Aston Martin - 100 000 DA / 400 €
  {
    id: '4',
    slug: 'aston-martin-db11',
    name: 'Aston Martin',
    category: 'Luxe',
    pricePerDay: 400,
    pricePerDayDA: 100000,
    image: '/images/cars/aston martin/aston-martin-new.jpg',
    gallery: [
      '/images/cars/aston martin/aqton-marrtin (1).jpg',
      '/images/cars/aston martin/aqton-marrtin (2).jpg',
      '/images/cars/aston martin/aqton-marrtin (3).jpg',
      '/images/cars/aston martin/aqton-marrtin (4).jpg',
      '/images/cars/aston martin/aqton-marrtin (5).jpg',
      '/images/cars/aston martin/aqton-marrtin (6).jpg'
    ],
    description: 'Grand Tourer Aston Martin DB11, excellence britannique et luxe absolu.',
    features: [
      'Système multimédia Mercedes-AMG',
      'Climatisation 2 zones',
      'Sièges cuir Bridge of Weir',
      'Suspension adaptative',
      'Jantes alliage 20"',
      'Package Aston Martin'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '2 valises'
    }
  },

  // 5. Porsche Macan - 60 000 DA / 240 €
  {
    id: '5',
    slug: 'porsche-macan-gts',
    name: 'Porsche Macan',
    category: 'SUV',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/macan gts/macan-new.jpg',
    gallery: [
      '/images/cars/macan gts/macan-new.jpg'
    ],
    description: 'SUV compact Porsche Macan GTS, sportivité pure et agilité exceptionnelle.',
    features: [
      'PCM 6.0',
      'Climatisation automatique',
      'Suspension pneumatique GTS',
      'Traction intégrale',
      'Jantes GTS 20"',
      'Package GTS Sport'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 6. Porsche Boxster - 60 000 DA / 240 €
  {
    id: '6',
    slug: 'porsche-boxster',
    name: 'Porsche Boxster',
    category: 'Cabriolet',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/boxter bleu/boxter-bleu-new.jpg',
    gallery: [
      '/images/cars/boxter bleu/boxter-bleu-new.jpg',
      '/images/cars/boxter bleu/boxter-bleu (1).jpg',
      '/images/cars/boxter bleu/boxter-bleu (2).jpg',
      '/images/cars/boxter bleu/boxter-bleu (3).jpg',
      '/images/cars/boxter bleu/boxter-bleu (4).jpg'
    ],
    description: 'Cabriolet Porsche Boxster bleu métallisé, passion et performance à ciel ouvert.',
    features: [
      'PCM 6.0',
      'Climatisation automatique',
      'Sièges sport plus',
      'Toit cabriolet électrique',
      'Jantes Carrera S 19"',
      'Package Sport Chrono'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '2 valises'
    }
  },

  // 7. Porsche Boxster blanc - 60 000 DA / 240 €
  {
    id: '7',
    slug: 'porsche-boxster-blanc',
    name: 'Porsche Boxster blanc',
    category: 'Cabriolet',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/boxter bleu/boxter-bleu (1).jpg',
    gallery: [
      '/images/cars/boxter bleu/boxter-bleu (1).jpg',
      '/images/cars/boxter bleu/boxter-bleu (2).jpg',
      '/images/cars/boxter bleu/boxter-bleu (3).jpg',
      '/images/cars/boxter bleu/boxter-bleu (4).jpg'
    ],
    description: 'Cabriolet Porsche Boxster blanc, passion et performance à ciel ouvert.',
    features: [
      'PCM 6.0',
      'Climatisation automatique',
      'Sièges sport plus',
      'Toit cabriolet électrique',
      'Jantes Carrera S 19"',
      'Package Sport Chrono'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 2,
      luggage: '2 valises'
    }
  },

  // 8. Audi Q3 2024 - 50 000 DA / 200 €
  {
    id: '8',
    slug: 'audi-q3-2024',
    name: 'Audi Q3 2024',
    category: 'SUV',
    pricePerDay: 200,
    pricePerDayDA: 50000,
    image: '/images/cars/q3/q3-new.jpg',
    gallery: [
      '/images/cars/q3/q3 (1).jpg',
      '/images/cars/q3/q3 (2).jpg',
      '/images/cars/q3/q3 (3).jpg',
      '/images/cars/q3/q3 (4).jpg',
      '/images/cars/q3/q3 (5).jpg',
      '/images/cars/q3/q3 (6).jpg',
      '/images/cars/q3/q3 (7).jpg',
      '/images/cars/q3/q3 (8).jpg'
    ],
    description: 'SUV compact Audi Q3 2024 combinant polyvalence urbaine et élégance premium.',
    features: [
      'MMI Navigation plus',
      'Climatisation automatique',
      'Virtual Cockpit',
      'Quattro',
      'Jantes alliage 19"',
      'Aide au stationnement'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 9. Audi Q5 - 60 000 DA / 240 €
  {
    id: '9',
    slug: 'audi-q5',
    name: 'Audi Q5',
    category: 'SUV',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/q5/q5-new.jpg',
    gallery: [
      '/images/cars/q5/q5 (1).jpg',
      '/images/cars/q5/q5 (2).jpg',
      '/images/cars/q5/q5 (3).jpg',
      '/images/cars/q5/q5 (4).jpg',
      '/images/cars/q5/q5 (5).jpg'
    ],
    description: 'SUV premium Audi Q5 offrant confort supérieur et technologie quattro.',
    features: [
      'MMI touch response',
      'Climatisation 3 zones',
      'Virtual Cockpit Plus',
      'Suspension adaptative',
      'Quattro ultra',
      'Toit ouvrant panoramique'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 10. BMW 420D 2024 - 70 000 DA / 280 €
  {
    id: '10',
    slug: 'bmw-420d-2024',
    name: 'BMW 420D 2024',
    category: 'Cabriolet',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/420d/420d-new.jpg',
    gallery: [
      '/images/cars/420d/420d (1).jpg',
      '/images/cars/420d/420d (2).jpg',
      '/images/cars/420d/420d (3).jpg',
      '/images/cars/420d/420d (4).jpg',
      '/images/cars/420d/420d (5).jpg',
      '/images/cars/420d/420d (6).jpg'
    ],
    description: 'Coupé BMW 420d 2024 élégant alliant design sportif et efficacité diesel.',
    features: [
      'BMW iDrive',
      'Climatisation automatique',
      'Sièges sport',
      'Toit ouvrant panoramique',
      'Jantes alliage 19"',
      'Éclairage LED adaptatif'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 4,
      luggage: '2 valises'
    }
  },

  // 11. Audi A6 - 60 000 DA / 240 €
  {
    id: '11',
    slug: 'audi-a6',
    name: 'Audi A6',
    category: 'Berline',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/A6/a6-new.jpg',
    gallery: [
      '/images/cars/A6/a6 (1).jpg',
      '/images/cars/A6/a6 (2).jpg',
      '/images/cars/A6/a6 (3).jpg',
      '/images/cars/A6/a6 (4).jpg',
      '/images/cars/A6/a6 (5).jpg',
      '/images/cars/A6/a6 (6).jpg',
      '/images/cars/A6/a6 (7).jpg',
      '/images/cars/A6/a6 (8).jpg',
      '/images/cars/A6/a6 (9).jpg',
      '/images/cars/A6/a6 (10).jpg'
    ],
    description: 'Berline executive Audi A6 alliant luxe, performance et innovation technologique.',
    features: [
      'MMI touch response',
      'Climatisation 4 zones',
      'Virtual Cockpit Plus 12.3"',
      'Sièges électriques chauffants',
      'Suspension pneumatique',
      'Matrix LED'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 12. Golf GTD - 30 000 DA / 120 €
  {
    id: '12',
    slug: 'volkswagen-golf-gtd',
    name: 'Golf GTD',
    category: 'Sport',
    pricePerDay: 120,
    pricePerDayDA: 30000,
    image: '/images/cars/gtd/gtd-new.jpg',
    gallery: [
      '/images/cars/gtd/gtd (1).jpg',
      '/images/cars/gtd/gtd (2).jpg',
      '/images/cars/gtd/gtd (3).jpg',
      '/images/cars/gtd/gtd (4).jpg',
      '/images/cars/gtd/gtd (5).jpg'
    ],
    description: 'Compacte Golf GTD diesel sportive alliant performance et efficacité.',
    features: [
      'Discover Pro',
      'Climatisation automatique',
      'Sièges sport GTD',
      'Suspension sport',
      'Jantes GTD 18"',
      'Package GTD'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 13. Golf R Line - 25 000 DA / 100 €
  {
    id: '13',
    slug: 'volkswagen-golf-r-line',
    name: 'Golf 8R',
    category: 'Sport',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/golf-8r/golf-8r-new.jpg',
    gallery: [
      '/images/cars/golf r/golf r (1).jpg',
      '/images/cars/golf r/golf r (2).jpg',
      '/images/cars/golf r/golf r (3).jpg',
      '/images/cars/golf r/golf r (4).jpg',
      '/images/cars/golf r/golf r (5).jpg'
    ],
    description: 'Compacte sportive Golf 8R avec design dynamique et performances équilibrées.',
    features: [
      'Discover Pro',
      'Climatisation automatique',
      'Sièges sport R',
      'Suspension DCC',
      'Jantes R 18"',
      'Package R Line'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 14. Fiat Tipo - 10 000 DA / 40 €
  {
    id: '14',
    slug: 'fiat-tipo',
    name: 'Fiat Tipo',
    category: 'Berline',
    pricePerDay: 40,
    pricePerDayDA: 10000,
    image: '/images/cars/tipo/tipo (1).jpg',
    gallery: [
      '/images/cars/tipo/tipo (1).jpg',
      '/images/cars/tipo/tipo (2).jpg',
      '/images/cars/tipo/tipo (3).jpg'
    ],
    description: 'Berline Fiat Tipo spacieuse et économique pour un usage familial.',
    features: [
      'Uconnect 7"',
      'Climatisation manuelle',
      'Aide au stationnement',
      'Régulateur de vitesse',
      'Jantes acier 16"',
      'Package family'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 15. Fiat 500 - 10 000 DA / 40 €
  {
    id: '15',
    slug: 'fiat-500',
    name: 'Fiat 500',
    category: 'Citadine',
    pricePerDay: 40,
    pricePerDayDA: 10000,
    image: '/images/cars/fiat-500/fiat-500-new.jpg',
    gallery: [
      '/images/cars/fiat 500/fiat 500 (1).jpg',
      '/images/cars/fiat 500/fiat 500 (2).jpg',
      '/images/cars/fiat 500/fiat 500 (3).jpg',
      '/images/cars/fiat 500/fiat 500 (4).jpg',
      '/images/cars/fiat 500/fiat 500 (5).jpg',
      '/images/cars/fiat 500/fiat 500 (6).jpg'
    ],
    description: 'Citadine Fiat 500 iconique au charme italien intemporel.',
    features: [
      'Uconnect',
      'Climatisation manuelle',
      'Aide au stationnement',
      'Toit ouvrant',
      'Jantes alliage 15"',
      'Package style italien'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 4,
      luggage: '1 valise'
    }
  },

  // 16. Fiat 500X - 12 000 DA / 48 €
  {
    id: '16',
    slug: 'fiat-500x',
    name: 'Fiat 500X',
    category: 'SUV',
    pricePerDay: 48,
    pricePerDayDA: 12000,
    image: '/images/cars/fiat-500x/fiat-500x-new.jpg',
    gallery: [
      '/images/cars/fiat 500x/500x (1).jpg',
      '/images/cars/fiat 500x/500x (2).jpg',
      '/images/cars/fiat 500x/500x (3).jpg',
      '/images/cars/fiat 500x/500x (4).jpg',
      '/images/cars/fiat 500x/500x (5).jpg'
    ],
    description: 'SUV compact Fiat 500X avec style italien et polyvalence urbaine.',
    features: [
      'Uconnect 7"',
      'Climatisation automatique',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes alliage 17"',
      'Package cross'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 17. Mercedes Classe C - 60 000 DA / 240 €
  {
    id: '17',
    slug: 'mercedes-classe-c',
    name: 'Mercedes Classe C',
    category: 'Berline',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/class-c/class-c-new.jpg',
    gallery: [
      '/images/cars/class c chrome/class c chrome (1).jpg',
      '/images/cars/class c chrome/class c chrome (2).jpg',
      '/images/cars/class c chrome/class c chrome (3).jpg',
      '/images/cars/class c chrome/class c chrome (4).jpg',
      '/images/cars/class c chrome/class c chrome (5).jpg',
      '/images/cars/class c chrome/class c chrome (6).jpg',
      '/images/cars/class c chrome/class c chrome (7).jpg'
    ],
    description: 'Berline Mercedes Classe C avec finition chrome exclusive et élégante.',
    features: [
      'MBUX avec écran 11.9"',
      'Climatisation automatique',
      'Sièges cuir ARTICO',
      'Aide au stationnement',
      'Jantes alliage 18"',
      'Finition chrome package'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 18. Mercedes Classe E - 70 000 DA / 280 €
  {
    id: '18',
    slug: 'mercedes-classe-e',
    name: 'Mercedes Classe E',
    category: 'Cabriolet',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/class-e-vert/class-e-main.jpg',
    gallery: [
      '/images/cars/class-e-vert/class-e-main.jpg',
      '/images/cars/class-e-vert/class-e-avant.jpg',
      '/images/cars/class-e-vert/class-e-arriere.jpg',
      '/images/cars/class-e-vert/class-e-phare.jpg',
      '/images/cars/class-e-vert/class-e-interieur1.jpg',
      '/images/cars/class-e-vert/class-e-interieur2.jpg'
    ],
    description: 'Cabriolet executive Mercedes Classe E en vert métallisé, luxe et technologie.',
    features: [
      'MBUX Hyperscreen',
      'Climatisation 4 zones',
      'Sièges électriques chauffants',
      'Suspension pneumatique',
      'Jantes alliage 19"',
      'Package executive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

 
  

  // 20. Range Rover SVR - 70 000 DA / 280 €
  {
    id: '20',
    slug: 'range-rover-svr',
    name: 'Range Rover SVR',
    category: 'SUV',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/range-rover-svr/svr-1.jpg',
    gallery: [
      '/images/cars/range-rover-svr/svr-1.jpg',
      '/images/cars/range-rover-svr/svr-3.jpg',
      '/images/cars/range-rover-svr/svr-2.jpg',
      '/images/cars/range-rover-svr/svr-4.jpg',
      '/images/cars/range-rover-svr/svr-5.jpg'
    ],
    description: 'SUV Range Rover SVR haute performance avec luxe britannique et puissance extrême.',
    features: [
      'InControl Touch Pro Duo',
      'Climatisation 4 zones',
      'Sièges sport SVR',
      'Suspension pneumatique',
      'Jantes SVR 22"',
      'Package SVR Carbon'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  // 21. Range Rover Evoque gris - 60 000 DA / 240 €
  {
    id: '21',
    slug: 'range-rover-evoque-gris',
    name: 'Range Rover Evoque gris',
    category: 'SUV',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/range-rover-evoque/evoque-1.jpg',
    gallery: [
      '/images/cars/range-rover-evoque/evoque-1.jpg',
      '/images/cars/range-rover-evoque/evoque-2.jpg',
      '/images/cars/range-rover-evoque/evoque-3.jpg',
      '/images/cars/range-rover-evoque/evoque-4.jpg'
    ],
    description: 'SUV compact Range Rover Evoque gris avec design avant-gardiste.',
    features: [
      'InControl Touch Pro',
      'Climatisation automatique',
      'Sièges cuir Windsor',
      'Terrain Response 2',
      'Jantes alliage 20"',
      'Package design'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 22. Mercedes GLE Coupé (noir) - 70 000 DA / 280 €
  {
    id: '22',
    slug: 'mercedes-gle-coupe',
    name: 'Mercedes GLE Coupé',
    category: 'SUV',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/mercedes-gle-coupe/gle-coupe-1.jpg',
    gallery: [
      '/images/cars/mercedes-gle-coupe/gle-coupe-1.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-5.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-6.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-2.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-3.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-4.jpg',
      '/images/cars/mercedes-gle-coupe/gle-coupe-7.jpg'
    ],
    description: 'SUV coupé Mercedes GLE avec design sportif et luxe premium.',
    features: [
      'MBUX avec écran 12.3"',
      'Climatisation 4 zones',
      'Sièges électriques',
      'Suspension pneumatique',
      'Jantes AMG 21"',
      'Package AMG Line'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },


  // 24. Mercedes GLE Carré - 70 000 DA / 280 €
  {
    id: '24',
    slug: 'mercedes-gle-carre',
    name: 'Mercedes GLE Carré (Noir)',
    category: 'SUV',
    pricePerDay: 280,
    pricePerDayDA: 70000,
    image: '/images/cars/gle-care/gle-care-1.jpg',
    gallery: [
      '/images/cars/gle-care/gle-care-1.jpg',
      '/images/cars/gle-care/gle-care-2.jpg',
      '/images/cars/gle-care/gle-care-3.jpg',
      '/images/cars/gle-care/gle-care-4.jpg'
    ],
    description: 'SUV Mercedes GLE Carré alliant robustesse et élégance premium.',
    features: [
      'MBUX Navigation Premium',
      'Climatisation 4 zones',
      'Sièges cuir Nappa',
      'Suspension adaptative',
      'Jantes alliage 20"',
      'Package off-road'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '5 valises'
    }
  },

  // 25. Mercedes GLE Carré (Bleu) - 75 000 DA / 300 €
  {
    id: '25',
    slug: 'mercedes-gle-carre-bleu',
    name: 'Mercedes GLE Carré (Bleu)',
    category: 'SUV',
    pricePerDay: 300,
    pricePerDayDA: 75000,
    image: '/images/gle-carre-bleu-main.jpg',
    gallery: [
      '/images/cars/gle-care-bleu/gle-care-bleu-1.jpg',
      '/images/cars/gle-care-bleu/gle-care-bleu-2.jpg',
      '/images/cars/gle-care-bleu/gle-care-bleu-3.jpg',
      '/images/cars/gle-care-bleu/gle-care-bleu-4.jpg',
      '/images/cars/gle-care-bleu/gle-care-bleu-5.jpg',
      '/images/cars/gle-care-bleu/gle-care-bleu-6.jpg'
    ],
    description: 'SUV Mercedes GLE Carré bleu avec design sportif AMG et luxe premium.',
    features: [
      'MBUX Navigation Premium',
      'Climatisation 4 zones',
      'Sièges cuir Nappa AMG',
      'Suspension pneumatique',
      'Jantes AMG 22"',
      'Package AMG Line Premium'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '5 valises'
    }
  },

  // 26. VW Tiguan 2024 - 50 000 DA / 200 €
  {
    id: '26',
    slug: 'volkswagen-tiguan-2024',
    name: 'VW Tiguan 2024',
    category: 'SUV',
    pricePerDay: 200,
    pricePerDayDA: 50000,
    image: '/images/cars/tiguan/tiguan-1.jpg',
    gallery: [
      '/images/cars/tiguan/tiguan-1.jpg',
      '/images/cars/tiguan/tiguan-2.jpg',
      '/images/cars/tiguan/tiguan-3.jpg',
      '/images/cars/tiguan/tiguan-4.jpg',
      '/images/cars/tiguan/tiguan-5.jpg',
      '/images/cars/tiguan/tiguan-6.jpg'
    ],
    description: 'SUV Volkswagen Tiguan 2024 polyvalent avec design moderne et technologie avancée.',
    features: [
      'Discover Pro',
      'Climatisation 3 zones',
      'Digital Cockpit Pro',
      '4MOTION',
      'Jantes alliage 18"',
      'Package IQ.DRIVE'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 27. Audi RSQ3 - 80 000 DA / 320 €
  {
    id: '27',
    slug: 'audi-rsq3',
    name: 'Audi RSQ3',
    category: 'Sport',
    pricePerDay: 320,
    pricePerDayDA: 80000,
    image: '/images/cars/rsq3/rsq3 (1).jpg',
    gallery: [
      '/images/cars/rsq3/rsq3 (1).jpg',
      '/images/cars/rsq3/rsq3 (2).jpg',
      '/images/cars/rsq3/rsq3 (3).jpg'
    ],
    description: 'SUV sport Audi RSQ3 haute performance avec agilité et puissance exceptionnelles.',
    features: [
      'Virtual Cockpit Plus',
      'MMI Navigation plus',
      'Sièges sport RS',
      'Suspension RS',
      'Quattro',
      'Échappement RS'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 28. BMW X5 - 60 000 DA / 240 €
  {
    id: '28',
    slug: 'bmw-x5',
    name: 'BMW X5',
    category: 'SUV',
    pricePerDay: 240,
    pricePerDayDA: 60000,
    image: '/images/cars/x5/x5-1.jpg',
    gallery: [
      '/images/cars/x5/x5-1.jpg',
      '/images/cars/x5/x5-2.jpg',
      '/images/cars/x5/x5-3.jpg',
      '/images/cars/x5/x5-4.jpg',
      '/images/cars/x5/x5-5.jpg'
    ],
    description: 'SUV BMW X5 premium offrant luxe, performance et technologie de pointe.',
    features: [
      'BMW iDrive 7.0',
      'Climatisation 4 zones',
      'Sièges cuir chauffants',
      'Suspension pneumatique',
      'xDrive',
      'Package Luxury'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '5 valises'
    }
  },

  // 29. Opel Astra - 20 000 DA / 80 €
  {
    id: '29',
    slug: 'opel-astra',
    name: 'Opel Astra',
    category: 'Berline',
    pricePerDay: 80,
    pricePerDayDA: 20000,
    image: '/images/cars/opel-astra/astra-1.jpg',
    gallery: [
      '/images/cars/opel-astra/astra-1.jpg',
      '/images/cars/opel-astra/astra-2.jpg',
      '/images/cars/opel-astra/astra-3.jpg',
      '/images/cars/opel-astra/astra-4.jpg',
      '/images/cars/opel-astra/astra-5.jpg'
    ],
    description: 'Berline compacte Opel Astra moderne avec design élégant et efficacité optimale.',
    features: [
      'IntelliLink',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur adaptatif',
      'Jantes alliage 17"',
      'Package confort'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 30. Opel Mokka - 20 000 DA / 80 €
  {
    id: '30',
    slug: 'opel-mokka',
    name: 'Opel Mokka',
    category: 'SUV',
    pricePerDay: 80,
    pricePerDayDA: 20000,
    image: '/images/cars/mokka/mokka (1).jpg',
    gallery: [
      '/images/cars/mokka/mokka (1).jpg',
      '/images/cars/mokka/mokka (2).jpg',
      '/images/cars/mokka/mokka (3).jpg'
    ],
    description: 'SUV compact Opel Mokka au design audacieux et moderne.',
    features: [
      'Multimedia Navi Pro',
      'Climatisation automatique',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes alliage 17"',
      'Package design'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 31. Skoda KamiQ 2023 - 20 000 DA / 80 €
  {
    id: '31',
    slug: 'skoda-kamiq-2023',
    name: 'Skoda KamiQ 2023',
    category: 'SUV',
    pricePerDay: 80,
    pricePerDayDA: 20000,
    image: '/images/cars/kamiq/kamiq-1.jpg',
    gallery: [
      '/images/cars/kamiq/kamiq-1.jpg',
      '/images/cars/kamiq/kamiq (2).jpg',
      '/images/cars/kamiq/kamiq (3).jpg',
      '/images/cars/kamiq/kamiq (4).jpg'
    ],
    description: 'SUV compact Škoda Kamiq 2023 alliant praticité et design moderne.',
    features: [
      'SmartLink+',
      'Climatisation automatique',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes alliage 17"',
      'Package confort'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 32. Audi A1 - 20 000 DA / 80 €
  {
    id: '32',
    slug: 'audi-a1',
    name: 'Audi A1',
    category: 'Citadine',
    pricePerDay: 80,
    pricePerDayDA: 20000,
    image: '/images/cars/a1/a1-1.jpg',
    gallery: [
      '/images/cars/a1/a1-1.jpg',
      '/images/cars/a1/a1 (2).jpg',
      '/images/cars/a1/a1 (3).jpg',
      '/images/cars/a1/a1 (4).jpg',
      '/images/cars/a1/a1 (5).jpg',
      '/images/cars/a1/a1 (6).jpg'
    ],
    description: 'Citadine premium Audi A1 au design sportif et finitions de qualité.',
    features: [
      'MMI touch',
      'Climatisation automatique',
      'Virtual Cockpit',
      'Aide au stationnement',
      'Jantes alliage 17"',
      'LED Matrix'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '2 valises'
    }
  },

  // 42. BMW 520 - 50 000 DA / 200 €
  {
    id: '42',
    slug: 'bmw-520',
    name: 'BMW 520d',
    category: 'Berline',
    pricePerDay: 200,
    pricePerDayDA: 50000,
    image: '/images/cars/520d/520d-1.jpg',
    gallery: [
      '/images/cars/520d/520d-1.jpg',
      '/images/cars/520d/520d (2).jpg',
      '/images/cars/520d/520d (3).jpg',
      '/images/cars/520d/520d (4).jpg',
      '/images/cars/520d/520d (5).jpg',
      '/images/cars/520d/520d (6).jpg',
      '/images/cars/520d/520d (7).jpg'
    ],
    description: 'Berline executive BMW 520d offrant luxe, confort et performances supérieures.',
    features: [
      'BMW iDrive 7.0',
      'Climatisation 4 zones',
      'Sièges électriques',
      'Jantes alliage 19"',
      'Éclairage laser',
      'Assistant de conduite'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 43. VW Multivan - 40 000 DA / 160 €
  {
    id: '43',
    slug: 'vw-multivan',
    name: 'VW Multivan',
    category: 'Monospace',
    pricePerDay: 160,
    pricePerDayDA: 40000,
    image: '/images/cars/multivan/multivan (1).jpg',
    gallery: [
      '/images/cars/multivan/multivan (1).jpg',
      '/images/cars/multivan/multivan (2).jpg',
      '/images/cars/multivan/multivan (3).jpg'
    ],
    description: 'Monospace Volkswagen Multivan polyvalent pour familles et groupes.',
    features: [
      'Discover Pro',
      'Climatisation 3 zones',
      'Sièges modulables',
      'Portes coulissantes',
      'Jantes alliage 17"',
      'Package family'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '5 valises'
    }
  },

  // 33. Cupra (noir) - 30 000 DA / 120 €
  {
    id: '33',
    slug: 'seat-cupra-noir',
    name: 'Cupra (noir)',
    category: 'Sport',
    pricePerDay: 120,
    pricePerDayDA: 30000,
    image: '/images/cars/cupra/cupra (1).jpg',
    gallery: [
      '/images/cars/cupra/cupra (1).jpg',
      '/images/cars/cupra/cupra (2).jpg',
      '/images/cars/cupra/cupra (3).jpg',
      '/images/cars/cupra/cupra (4).jpg',
      '/images/cars/cupra/cupra (5).jpg'
    ],
    description: 'Sportive SEAT Cupra noire avec performances élevées et design agressif.',
    features: [
      'Cupra Connect',
      'Climatisation automatique',
      'Sièges sport Cupra',
      'Suspension DCC',
      'Jantes Cupra 19"',
      'Package Performance'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 34. Mercedes A35 AMG - 40 000 DA / 160 €
  {
    id: '34',
    slug: 'mercedes-a35-amg',
    name: 'Mercedes A35 AMG',
    category: 'Sport',
    pricePerDay: 160,
    pricePerDayDA: 40000,
    image: '/images/cars/a35/a35-1.jpg',
    gallery: [
      '/images/cars/a35/a35-1.jpg',
      '/images/cars/a35/a35 (2).jpg',
      '/images/cars/a35/a35 (4).jpg',
      '/images/cars/a35/a35 (5).jpg'
    ],
    description: 'Compacte sportive Mercedes-AMG A35 avec performances exceptionnelles et design agressif.',
    features: [
      'MBUX avec AMG Track Pace',
      'Climatisation THERMATIC',
      'AMG Performance 4MATIC',
      'Sièges sport AMG',
      'Jantes AMG 18"',
      'Échappement sport AMG'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },



  // 36. VW Polo - 18 000 DA / 72 €
  {
    id: '36',
    slug: 'volkswagen-polo',
    name: 'VW Polo',
    category: 'Citadine',
    pricePerDay: 72,
    pricePerDayDA: 18000,
    image: '/images/cars/polo/polo-1.jpg',
    gallery: [
      '/images/cars/polo/polo-1.jpg',
      '/images/cars/polo/polo (2).jpg'
    ],
    description: 'Citadine Volkswagen Polo compacte, idéale pour la ville et économique.',
    features: [
      'Composition Media',
      'Climatisation manuelle',
      'Aide au stationnement',
      'Régulateur de vitesse',
      'Jantes acier 15"',
      'Package city'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '2 valises'
    }
  },

  // 37. Seat Ateca - 40 000 DA / 160 €
  {
    id: '37',
    slug: 'seat-ateca',
    name: 'Seat Ateca',
    category: 'SUV',
    pricePerDay: 160,
    pricePerDayDA: 40000,
    image: '/images/cars/ateca/ateca-1.jpg',
    gallery: [
      '/images/cars/ateca/ateca-1.jpg',
      '/images/cars/ateca/ateca (2).jpg'
    ],
    description: 'SUV SEAT Ateca combinant design méditerranéen et praticité moderne.',
    features: [
      'SEAT Connect',
      'Climatisation automatique',
      'Aide au stationnement',
      '4Drive',
      'Jantes alliage 17"',
      'Package design'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // 38. VW Taigo - 30 000 DA / 120 €
  {
    id: '38',
    slug: 'volkswagen-taigo',
    name: 'VW Taigo',
    category: 'SUV',
    pricePerDay: 120,
    pricePerDayDA: 30000,
    image: '/images/cars/taigo/taigo-1.jpg',
    gallery: [
      '/images/cars/taigo/taigo-1.jpg',
      '/images/cars/taigo/taigo (2).jpg',
      '/images/cars/taigo/taigo (3).jpg',
      '/images/cars/taigo/taigo (4).jpg'
    ],
    description: 'SUV coupé Volkswagen Taigo au design moderne et dynamique.',
    features: [
      'Discover Media',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur adaptatif',
      'Jantes alliage 17"',
      'Package style'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 39. Seat Leon - 20 000 DA / 80 €
  {
    id: '39',
    slug: 'seat-leon',
    name: 'Seat Leon',
    category: 'Berline',
    pricePerDay: 80,
    pricePerDayDA: 20000,
    image: '/images/cars/leon/leon-1.jpg',
    gallery: [
      '/images/cars/leon/leon-1.jpg',
      '/images/cars/leon/leon (2).jpg',
      '/images/cars/leon/leon (3).jpg',
      '/images/cars/leon/leon (4).jpg',
      '/images/cars/leon/leon (5).jpg',
      '/images/cars/leon/leon (6).jpg'
    ],
    description: 'Berline SEAT León au design dynamique et équipements modernes.',
    features: [
      'SEAT Connect',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur adaptatif',
      'Jantes alliage 17"',
      'Package style'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // 40. Clio 5 2023 - 15 000 DA / 60 €
  {
    id: '40',
    slug: 'renault-clio-5-2023',
    name: 'Clio 5 2023',
    category: 'Citadine',
    pricePerDay: 60,
    pricePerDayDA: 15000,
    image: '/images/cars/clio 5/clio-1.jpg',
    gallery: [
      '/images/cars/clio 5/clio-1.jpg',
      '/images/cars/clio 5/clio  (2).jpg',
      '/images/cars/clio 5/clio  (3).jpg',
      '/images/cars/clio 5/clio  (4).jpg',
      '/images/cars/clio 5/clio  (5).jpg'
    ],
    description: 'Citadine Renault Clio 5 2023 alliant élégance française et technologies modernes.',
    features: [
      'EASY LINK',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur de vitesse',
      'Jantes alliage 16"',
      'Package confort'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '2 valises'
    }
  },

];

// Fonctions utilitaires
export function getBrands(): string[] {
  const brands = cars.map(car => {
    if (car.name.includes('Mercedes') || car.name.includes('Classe') || car.name.includes('GLE') || car.name.includes('Brabus')) return 'Mercedes-Benz';
    if (car.name.includes('BMW')) return 'BMW';
    if (car.name.includes('Audi')) return 'Audi';
    if (car.name.includes('Porsche')) return 'Porsche';
    if (car.name.includes('Aston Martin')) return 'Aston Martin';
    if (car.name.includes('Opel')) return 'Opel';
    if (car.name.includes('SEAT') || car.name.includes('Seat') || car.name.includes('Cupra')) return 'SEAT';
    if (car.name.includes('Renault') || car.name.includes('Clio')) return 'Renault';
    if (car.name.includes('Skoda')) return 'Škoda';
    if (car.name.includes('Fiat')) return 'Fiat';
    if (car.name.includes('VW') || car.name.includes('Volkswagen') || car.name.includes('Golf') || car.name.includes('Polo') || car.name.includes('Tiguan') || car.name.includes('Taigo') || car.name.includes('Multivan')) return 'Volkswagen';
    if (car.name.includes('Range Rover')) return 'Land Rover';
    if (car.name.includes('Urus')) return 'Lamborghini';
    return 'Autre';
  });
  return Array.from(new Set(brands)).sort();
}

export function getCategories(): string[] {
  const categories = cars.map(car => car.category);
  return Array.from(new Set(categories)).sort();
}

export function getMaxPrice(): number {
  return Math.max(...cars.map(car => car.pricePerDayDA));
}

// Exports pour les filtres
export const brands = [
  { value: "all", label: "Toutes les marques" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Fiat", label: "Fiat" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Opel", label: "Opel" },
  { value: "Porsche", label: "Porsche" },
  { value: "Renault", label: "Renault" },
  { value: "SEAT", label: "SEAT" },
  { value: "Škoda", label: "Škoda" },
  { value: "Volkswagen", label: "Volkswagen" },
];

export const categories = [
  { value: "all", label: "Toutes les catégories" },
  { value: "Berline", label: "Berline" },
  { value: "Cabriolet", label: "Cabriolet" },
  { value: "Citadine", label: "Citadine" },
  { value: "Coupé", label: "Coupé" },
  { value: "Luxe", label: "Luxe" },
  { value: "Monospace", label: "Monospace" },
  { value: "Sport", label: "Sport" },
  { value: "SUV", label: "SUV" },
];

export const priceRanges = [
  { value: "all", label: "Tous les prix" },
  { value: "0-25000", label: "Moins de 25 000 DA", min: 0, max: 25000 },
  { value: "25000-50000", label: "25 000 - 50 000 DA", min: 25000, max: 50000 },
  { value: "50000-100000", label: "50 000 - 100 000 DA", min: 50000, max: 100000 },
  { value: "100000-150000", label: "100 000 - 150 000 DA", min: 100000, max: 150000 },
  { value: "150000+", label: "Plus de 150 000 DA", min: 150000, max: Infinity },
];