// Interface Car pour les véhicules de location
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

// Inventaire complet de vos 59 vraies voitures avec photos
export const cars: Car[] = [
  // PEUGEOT (1 véhicule)
  {
    id: '1',
    slug: 'peugeot-308',
    name: 'Peugeot 308',
    category: 'Citadine',
    pricePerDay: 120,
    image: '/images/cars/308/308 (1).jpg',
    gallery: [
      '/images/cars/308/308 (1).jpg',
      '/images/cars/308/308 (2).jpg',
      '/images/cars/308/308 (3).jpg',
      '/images/cars/308/308 (4).jpg',
      '/images/cars/308/308 (5).jpg',
      '/images/cars/308/308 (6).jpg',
      '/images/cars/308/308 (7).jpg'
    ],
    description: 'Citadine française moderne avec design élégant et technologies avancées.',
    features: [
      'Système multimédia i-Cockpit',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur de vitesse',
      'Éclairage LED',
      'Jantes alliage 17"'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // BMW (5 véhicules)
  {
    id: '2',
    slug: 'bmw-320d',
    name: 'BMW 320d',
    category: 'Berline',
    pricePerDay: 180,
    image: '/images/cars/320d/320d (1).jpg',
    gallery: [
      '/images/cars/320d/320d (1).jpg',
      '/images/cars/320d/320d (2).jpg',
      '/images/cars/320d/320d (3).jpg',
      '/images/cars/320d/320d (4).jpg',
      '/images/cars/320d/320d (5).jpg',
      '/images/cars/320d/320d (6).jpg',
      '/images/cars/320d/320d (7).jpg'
    ],
    description: 'Berline premium BMW avec performances diesel et technologies avancées.',
    features: [
      'BMW iDrive',
      'Climatisation automatique',
      'Sièges sport',
      'Jantes alliage 18"',
      'Éclairage LED',
      'Caméra de recul'
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
    slug: 'bmw-420d',
    name: 'BMW 420d',
    category: 'Coupé',
    pricePerDay: 220,
    image: '/images/cars/420d/420d-new.jpg',
    gallery: [
      '/images/cars/420d/420d (1).jpg',
      '/images/cars/420d/420d (2).jpg',
      '/images/cars/420d/420d (3).jpg',
      '/images/cars/420d/420d (4).jpg',
      '/images/cars/420d/420d (5).jpg',
      '/images/cars/420d/420d (6).jpg'
    ],
    description: 'Coupé BMW élégant alliant design sportif et efficacité diesel.',
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

  {
    id: '4',
    slug: 'bmw-520d',
    name: 'BMW 520d',
    category: 'Berline',
    pricePerDay: 280,
    image: '/images/cars/520d/520d (1).jpg',
    gallery: [
      '/images/cars/520d/520d (1).jpg',
      '/images/cars/520d/520d (2).jpg',
      '/images/cars/520d/520d (3).jpg',
      '/images/cars/520d/520d (4).jpg',
      '/images/cars/520d/520d (5).jpg',
      '/images/cars/520d/520d (6).jpg',
      '/images/cars/520d/520d (7).jpg'
    ],
    description: 'Berline executive BMW offrant luxe, confort et performances supérieures.',
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

  {
    id: '5',
    slug: 'bmw-x5',
    name: 'BMW X5',
    category: 'SUV',
    pricePerDay: 350,
    image: '/images/cars/x5/x5 (1).jpg',
    gallery: [
      '/images/cars/x5/x5 (1).jpg',
      '/images/cars/x5/x5 (2).jpg',
      '/images/cars/x5/x5 (3).jpg',
      '/images/cars/x5/x5 (4).jpg',
      '/images/cars/x5/x5 (5).jpg',
      '/images/cars/x5/x5 (6).jpg'
    ],
    description: 'SUV premium BMW combinant luxe, performance et polyvalence.',
    features: [
      'BMW iDrive 8.0',
      'Climatisation 4 zones',
      'Sièges cuir chauffants',
      'Suspension pneumatique',
      'Jantes alliage 20"',
      'Traction intégrale xDrive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 7,
      luggage: '5 valises'
    }
  },

  {
    id: '6',
    slug: 'bmw-x7',
    name: 'BMW X7',
    category: 'SUV',
    pricePerDay: 450,
    image: '/images/cars/x7/x7 (1).jpg',
    gallery: [
      '/images/cars/x7/x7 (1).jpg',
      '/images/cars/x7/x7 (2).jpg'
    ],
    description: 'SUV de luxe BMW 7 places offrant un espace et un confort exceptionnels.',
    features: [
      'BMW Live Cockpit Professional',
      'Climatisation 4 zones',
      'Sièges Executive Lounge',
      'Suspension pneumatique adaptative',
      'Jantes alliage 21"',
      'Toit panoramique'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 7,
      luggage: '6 valises'
    }
  },

  // AUDI (11 véhicules)
  {
    id: '7',
    slug: 'audi-a1',
    name: 'Audi A1',
    category: 'Citadine',
    pricePerDay: 110,
    image: '/images/cars/a1/a1 (1).jpg',
    gallery: [
      '/images/cars/a1/a1 (1).jpg',
      '/images/cars/a1/a1 (2).jpg',
      '/images/cars/a1/a1 (3).jpg',
      '/images/cars/a1/a1 (4).jpg',
      '/images/cars/a1/a1 (5).jpg',
      '/images/cars/a1/a1 (6).jpg'
    ],
    description: 'Citadine premium Audi au design sportif et finitions de qualité.',
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

  {
    id: '8',
    slug: 'audi-a3',
    name: 'Audi A3',
    category: 'Berline',
    pricePerDay: 150,
    image: '/images/cars/a3/a3 (1).jpg',
    gallery: [
      '/images/cars/a3/a3 (1).jpg',
      '/images/cars/a3/a3 (2).jpg',
      '/images/cars/a3/a3 (3).jpg',
      '/images/cars/a3/a3 (4).jpg',
      '/images/cars/a3/a3 (5).jpg',
      '/images/cars/a3/a3 (6).jpg'
    ],
    description: 'Berline compacte Audi offrant élégance et technologies modernes.',
    features: [
      'MMI Navigation plus',
      'Climatisation automatique',
      'Virtual Cockpit Plus',
      'Sièges sport',
      'Jantes alliage 18"',
      'Audi Pre Sense'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '9',
    slug: 'audi-a6',
    name: 'Audi A6',
    category: 'Berline',
    pricePerDay: 320,
    image: '/images/cars/A6/a6 (1).jpg',
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
    description: 'Berline executive Audi alliant luxe, performance et innovation technologique.',
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

  {
    id: '10',
    slug: 'audi-q3',
    name: 'Audi Q3',
    category: 'SUV',
    pricePerDay: 200,
    image: '/images/cars/q3/q3 (1).jpg',
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
    description: 'SUV compact Audi combinant polyvalence urbaine et élégance premium.',
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

  {
    id: '11',
    slug: 'audi-q5',
    name: 'Audi Q5',
    category: 'SUV',
    pricePerDay: 280,
    image: '/images/cars/q5/q5 (1).jpg',
    gallery: [
      '/images/cars/q5/q5 (1).jpg',
      '/images/cars/q5/q5 (2).jpg',
      '/images/cars/q5/q5 (3).jpg',
      '/images/cars/q5/q5 (4).jpg',
      '/images/cars/q5/q5 (5).jpg'
    ],
    description: 'SUV premium Audi offrant confort supérieur et technologie quattro.',
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

  {
    id: '12',
    slug: 'audi-q8',
    name: 'Audi Q8',
    category: 'SUV',
    pricePerDay: 450,
    image: '/images/cars/q8/photo_5801107229313714389_y.jpg',
    gallery: [
      '/images/cars/q8/photo_5801107229313714389_y.jpg'
    ],
    description: 'SUV coupé Audi flagship combinant design avant-gardiste et luxe absolu.',
    features: [
      'MMI touch response dual',
      'Climatisation 4 zones',
      'Virtual Cockpit Plus 12.3"',
      'Suspension pneumatique',
      'Matrix LED laser',
      'Bang & Olufsen 3D'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '13',
    slug: 'audi-rs3',
    name: 'Audi RS3',
    category: 'Sport',
    pricePerDay: 380,
    image: '/images/cars/rs3/rs3 (1).jpg',
    gallery: [
      '/images/cars/rs3/rs3 (1).jpg',
      '/images/cars/rs3/rs3 (2).jpg',
      '/images/cars/rs3/rs3 (3).jpg',
      '/images/cars/rs3/rs3 (4).jpg',
      '/images/cars/rs3/rs3 (5).jpg',
      '/images/cars/rs3/rs3 (6).jpg'
    ],
    description: 'Berline sportive Audi RS avec moteur 5 cylindres et performances exceptionnelles.',
    features: [
      'RS Design Package',
      'Suspension RS adaptative',
      'Virtual Cockpit Plus',
      'Échappement sport RS',
      'Quattro performance',
      'Jantes alliage 19" RS'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '14',
    slug: 'audi-rs6',
    name: 'Audi RS6',
    category: 'Break',
    pricePerDay: 520,
    image: '/images/cars/rs6/photo_5801107229313714596_y.jpg',
    gallery: [
      '/images/cars/rs6/photo_5801107229313714596_y.jpg'
    ],
    description: 'Break sportif Audi RS6 alliant performances extrêmes et praticité familiale.',
    features: [
      'RS Design Package Plus',
      'Suspension pneumatique RS',
      'Virtual Cockpit Plus',
      'Échappement RS titane',
      'Quattro sport',
      'Carbon Sigma'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '6 valises'
    }
  },

  {
    id: '15',
    slug: 'audi-rsq3',
    name: 'Audi RSQ3',
    category: 'SUV',
    pricePerDay: 420,
    image: '/images/cars/rsq3/rsq3 (1).jpg',
    gallery: [
      '/images/cars/rsq3/rsq3 (1).jpg',
      '/images/cars/rsq3/rsq3 (2).jpg',
      '/images/cars/rsq3/rsq3 (3).jpg',
      '/images/cars/rsq3/rsq3 (4).jpg',
      '/images/cars/rsq3/rsq3 (5).jpg',
      '/images/cars/rsq3/rsq3 (6).jpg',
      '/images/cars/rsq3/rsq3 (7).jpg',
      '/images/cars/rsq3/rsq3 (8).jpg',
      '/images/cars/rsq3/rsq3 (9).jpg'
    ],
    description: 'SUV compact sportif Audi RS combinant agilité urbaine et puissance RS.',
    features: [
      'RS Design Package',
      'Suspension RS adaptative',
      'Virtual Cockpit Plus',
      'Quattro RS',
      'Jantes alliage 20" RS',
      'Mode RS'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // MERCEDES-BENZ (11 véhicules)
  {
    id: '16',
    slug: 'mercedes-a35-amg',
    name: 'Mercedes-AMG A35',
    category: 'Sport',
    pricePerDay: 280,
    image: '/images/cars/a35/a35 (1).jpg',
    gallery: [
      '/images/cars/a35/a35 (1).jpg',
      '/images/cars/a35/a35 (2).jpg',
      '/images/cars/a35/a35 (3).jpg',
      '/images/cars/a35/a35 (4).jpg',
      '/images/cars/a35/a35 (5).jpg',
      '/images/cars/a35/a35 (6).jpg',
      '/images/cars/a35/a35 (7).jpg',
      '/images/cars/a35/a35 (8).jpg'
    ],
    description: 'Compacte sportive Mercedes-AMG offrant performances et agilité exceptionnelles.',
    features: [
      'AMG Performance 4MATIC',
      'MBUX Augmented Reality',
      'Suspension AMG',
      'Échappement AMG',
      'Jantes AMG 19"',
      'AMG Track Pace'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '17',
    slug: 'mercedes-a45s-amg',
    name: 'Mercedes-AMG A45S',
    category: 'Sport',
    pricePerDay: 350,
    image: '/images/cars/a45s/a45s (1).jpg',
    gallery: [
      '/images/cars/a45s/a45s (1).jpg',
      '/images/cars/a45s/a45s (2).jpg',
      '/images/cars/a45s/a45s (3).jpg',
      '/images/cars/a45s/a45s (4).jpg',
      '/images/cars/a45s/a45s (5).jpg',
      '/images/cars/a45s/a45s (6).jpg',
      '/images/cars/a45s/a45s (7).jpg'
    ],
    description: 'Compacte Mercedes-AMG la plus puissante au monde avec 421 ch.',
    features: [
      'AMG Performance 4MATIC+',
      'MBUX AMG Specific',
      'Suspension AMG Ride Control',
      'AMG Aerodynamics Package',
      'Jantes AMG forged 20"',
      'AMG Dynamic Plus Package'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '18',
    slug: 'mercedes-g63-amg',
    name: 'Mercedes-AMG G63',
    category: 'SUV',
    pricePerDay: 650,
    image: '/images/cars/G63/g63- (1).jpg',
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

  {
    id: '19',
    slug: 'brabus-g850',
    name: 'Brabus G850',
    category: 'Luxe',
    pricePerDay: 850,
    image: '/images/cars/brabus/brabus (1).jpg',
    gallery: [
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

  {
    id: '20',
    slug: 'mercedes-classe-c-chrome',
    name: 'Mercedes Classe C Chrome',
    category: 'Berline',
    pricePerDay: 220,
    image: '/images/cars/class c chrome/class c chrome (1).jpg',
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

  {
    id: '21',
    slug: 'mercedes-classe-c-gris',
    name: 'Mercedes Classe C Gris',
    category: 'Berline',
    pricePerDay: 200,
    image: '/images/cars/class c gris/class-c1.jpg',
    gallery: [
      '/images/cars/class c gris/class-c1.jpg',
      '/images/cars/class c gris/class-c2.jpg',
      '/images/cars/class c gris/class-c3.jpg'
    ],
    description: 'Berline Mercedes Classe C en finition gris métallisé, élégance et confort.',
    features: [
      'MBUX',
      'Climatisation automatique',
      'Sièges chauffants',
      'Régulateur de vitesse',
      'Jantes alliage 17"',
      'Pack convenience'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '22',
    slug: 'mercedes-classe-c-noir',
    name: 'Mercedes Classe C Noir',
    category: 'Berline',
    pricePerDay: 210,
    image: '/images/cars/class c noir/class c noir (1).jpg',
    gallery: [
      '/images/cars/class c noir/class c noir (1).jpg',
      '/images/cars/class c noir/class c noir (2).jpg',
      '/images/cars/class c noir/class c noir (3).jpg',
      '/images/cars/class c noir/class c noir (4).jpg',
      '/images/cars/class c noir/class c noir (5).jpg'
    ],
    description: 'Berline Mercedes Classe C en noir sophistiqué, raffinement et modernité.',
    features: [
      'MBUX Navigation Premium',
      'Climatisation automatique',
      'Sièges cuir noir',
      'Toit ouvrant',
      'Jantes alliage 18"',
      'AMG Line package'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '23',
    slug: 'mercedes-classe-e-bleu',
    name: 'Mercedes Classe E Bleu',
    category: 'Berline',
    pricePerDay: 300,
    image: '/images/cars/class e bleu/class e (1).jpg',
    gallery: [
      '/images/cars/class e bleu/class e (1).jpg',
      '/images/cars/class e bleu/class e (2).jpg',
      '/images/cars/class e bleu/class e (3).jpg'
    ],
    description: 'Berline executive Mercedes Classe E en bleu métallisé, luxe et technologie.',
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

  {
    id: '24',
    slug: 'mercedes-classe-e-vert',
    name: 'Mercedes Classe E Vert',
    category: 'Berline',
    pricePerDay: 320,
    image: '/images/cars/class e vert/class e vert (1).jpg',
    gallery: [
      '/images/cars/class e vert/class e vert (1).jpg',
      '/images/cars/class e vert/class e vert (2).jpg',
      '/images/cars/class e vert/class e vert (3).jpg',
      '/images/cars/class e vert/class e vert (4).jpg',
      '/images/cars/class e vert/class e vert (5).jpg',
      '/images/cars/class e vert/class e vert (6).jpg'
    ],
    description: 'Berline Mercedes Classe E en vert sophistiqué, distinction et élégance.',
    features: [
      'MBUX Hyperscreen',
      'Climatisation 4 zones',
      'Sièges Nappa exclusifs',
      'Suspension pneumatique',
      'Jantes AMG 20"',
      'Package design vert'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '25',
    slug: 'mercedes-gle',
    name: 'Mercedes GLE',
    category: 'SUV',
    pricePerDay: 380,
    image: '/images/cars/gle/gle (1).jpg',
    gallery: [
      '/images/cars/gle/gle (1).jpg',
      '/images/cars/gle/gle (2).jpg'
    ],
    description: 'SUV Mercedes GLE alliant confort premium et capacités tout-terrain.',
    features: [
      'MBUX avec écran 12.3"',
      'Climatisation 4 zones',
      'Suspension pneumatique',
      '4MATIC permanent',
      'Jantes alliage 20"',
      'Pack off-road'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '5 valises'
    }
  },

  {
    id: '26',
    slug: 'mercedes-gle63s-amg',
    name: 'Mercedes-AMG GLE63S',
    category: 'SUV',
    pricePerDay: 580,
    image: '/images/cars/gle63s/gle36 (1).jpg',
    gallery: [
      '/images/cars/gle63s/gle36 (1).jpg',
      '/images/cars/gle63s/gle36 (2).jpg',
      '/images/cars/gle63s/gle36 (3).jpg',
      '/images/cars/gle63s/gle36 (4).jpg'
    ],
    description: 'SUV Mercedes-AMG GLE63S avec performances exceptionnelles de 612 ch.',
    features: [
      'AMG Performance 4MATIC+',
      'MBUX AMG Specific',
      'Suspension AMG Active Ride Control',
      'Échappement AMG Performance',
      'Jantes AMG forged 22"',
      'AMG Dynamic Package'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 7,
      luggage: '5 valises'
    }
  },

  {
    id: '27',
    slug: 'mercedes-gle-care',
    name: 'Mercedes GLE Caré',
    category: 'SUV',
    pricePerDay: 420,
    image: '/images/cars/gle caré/gle-caré (1).jpg',
    gallery: [
      '/images/cars/gle caré/gle-caré (1).jpg',
      '/images/cars/gle caré/gle-caré (2).jpg',
      '/images/cars/gle caré/gle-caré (3).jpg',
      '/images/cars/gle caré/gle-caré (4).jpg',
      '/images/cars/gle caré/gle-caré (5).jpg',
      '/images/cars/gle caré/gle-caré (6).jpg'
    ],
    description: 'SUV Mercedes GLE avec finition carré exclusive et équipements premium.',
    features: [
      'MBUX Premium',
      'Climatisation 4 zones',
      'Suspension pneumatique',
      'Package carré design',
      'Jantes alliage 21"',
      'Finition carré exclusive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 7,
      luggage: '5 valises'
    }
  },

  {
    id: '28',
    slug: 'mercedes-gle-care-maybach',
    name: 'Mercedes GLE Caré Maybach',
    category: 'Luxe',
    pricePerDay: 750,
    image: '/images/cars/gle caré maybach/gle-caré (1).jpg',
    gallery: [
      '/images/cars/gle caré maybach/gle-caré (1).jpg',
      '/images/cars/gle caré maybach/gle-caré (2).jpg',
      '/images/cars/gle caré maybach/gle-caré (3).jpg'
    ],
    description: 'SUV Mercedes-Maybach GLE avec luxe absolu et finition carré signature.',
    features: [
      'Maybach MBUX',
      'Climatisation executive',
      'Sièges Executive Maybach',
      'Suspension Magic Body Control',
      'Jantes Maybach 22"',
      'Package Maybach carré'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 4,
      luggage: '4 valises'
    }
  },

  {
    id: '29',
    slug: 'mercedes-van',
    name: 'Mercedes Van',
    category: 'Utilitaire',
    pricePerDay: 180,
    image: '/images/cars/merc van/photo_5801107229313714371_y.jpg',
    gallery: [
      '/images/cars/merc van/photo_5801107229313714371_y.jpg'
    ],
    description: 'Utilitaire Mercedes spacieux et fiable pour tous vos besoins professionnels.',
    features: [
      'MBUX van',
      'Climatisation cabine',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes alliage 16"',
      'Package pro'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Diesel',
      seats: 3,
      luggage: '10 valises'
    }
  },

  // PORSCHE (7 véhicules)
  {
    id: '30',
    slug: 'porsche-boxster-blanc',
    name: 'Porsche Boxster Blanc',
    category: 'Cabriolet',
    pricePerDay: 380,
    image: '/images/cars/boxter blanc/boxtert-blanc (1).jpg',
    gallery: [
      '/images/cars/boxter blanc/boxtert-blanc (1).jpg',
      '/images/cars/boxter blanc/boxtert-blanc (2).jpg',
      '/images/cars/boxter blanc/boxtert-blanc (3).jpg',
      '/images/cars/boxter blanc/boxtert-blanc (4).jpg'
    ],
    description: 'Cabriolet Porsche Boxster blanc nacré, pure sportivité et élégance.',
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

  {
    id: '31',
    slug: 'porsche-boxster-bleu',
    name: 'Porsche Boxster Bleu',
    category: 'Cabriolet',
    pricePerDay: 380,
    image: '/images/cars/boxter bleu/boxter-bleu (1).jpg',
    gallery: [
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

  {
    id: '32',
    slug: 'porsche-boxster-gris',
    name: 'Porsche Boxster Gris',
    category: 'Cabriolet',
    pricePerDay: 380,
    image: '/images/cars/boxter gris/boxter (1).jpg',
    gallery: [
      '/images/cars/boxter gris/boxter (1).jpg',
      '/images/cars/boxter gris/boxter (2).jpg'
    ],
    description: 'Cabriolet Porsche Boxster gris sophistiqué, raffinement et dynamisme.',
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

  {
    id: '33',
    slug: 'porsche-boxster-noir',
    name: 'Porsche Boxster Noir',
    category: 'Cabriolet',
    pricePerDay: 380,
    image: '/images/cars/boxter noir/boxter noir (1).jpg',
    gallery: [
      '/images/cars/boxter noir/boxter noir (1).jpg',
      '/images/cars/boxter noir/boxter noir (2).jpg',
      '/images/cars/boxter noir/boxter noir (3).jpg',
      '/images/cars/boxter noir/boxter noir (4).jpg',
      '/images/cars/boxter noir/boxter noir (5).jpg'
    ],
    description: 'Cabriolet Porsche Boxster noir intense, élégance sportive intemporelle.',
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

  {
    id: '34',
    slug: 'porsche-boxster-rouge',
    name: 'Porsche Boxster Rouge',
    category: 'Cabriolet',
    pricePerDay: 380,
    image: '/images/cars/boxter rouge/boxter red (1).jpg',
    gallery: [
      '/images/cars/boxter rouge/boxter red (1).jpg',
      '/images/cars/boxter rouge/boxter red (2).jpg'
    ],
    description: 'Cabriolet Porsche Boxster rouge passion, émotions pures et sensations fortes.',
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

  {
    id: '35',
    slug: 'porsche-cayenne-turbo',
    name: 'Porsche Cayenne Turbo',
    category: 'SUV',
    pricePerDay: 520,
    image: '/images/cars/cayenne turbo/cayenne (1).jpg',
    gallery: [
      '/images/cars/cayenne turbo/cayenne (1).jpg',
      '/images/cars/cayenne turbo/cayenne (2).jpg',
      '/images/cars/cayenne turbo/cayenne (3).jpg',
      '/images/cars/cayenne turbo/cayenne (4).jpg'
    ],
    description: 'SUV Porsche Cayenne Turbo combinant luxe, performance et polyvalence.',
    features: [
      'PCM 6.0 avec écran 12.3"',
      'Climatisation 4 zones',
      'Suspension pneumatique',
      'Traction intégrale Porsche',
      'Jantes Turbo 21"',
      'Package Sport Chrono'
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
    slug: 'porsche-macan-gts',
    name: 'Porsche Macan GTS',
    category: 'SUV',
    pricePerDay: 450,
    image: '/images/cars/macan gts/macan (1).jpg',
    gallery: [
      '/images/cars/macan gts/macan (1).jpg',
      '/images/cars/macan gts/macan (2).jpg',
      '/images/cars/macan gts/macan (3).jpg'
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

  // ASTON MARTIN (1 véhicule)
  {
    id: '37',
    slug: 'aston-martin-db11',
    name: 'Aston Martin DB11',
    category: 'Luxe',
    pricePerDay: 650,
    image: '/images/cars/aston martin/aqton-marrtin (1).jpg',
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

  // VOLKSWAGEN (6 véhicules)
  {
    id: '38',
    slug: 'volkswagen-golf-7',
    name: 'Volkswagen Golf 7',
    category: 'Citadine',
    pricePerDay: 110,
    image: '/images/cars/golf 7/golf7 (1).jpg',
    gallery: [
      '/images/cars/golf 7/golf7 (1).jpg',
      '/images/cars/golf 7/golf7 (2).jpg',
      '/images/cars/golf 7/golf7 (3).jpg'
    ],
    description: 'Compacte Volkswagen Golf 7, référence de sa catégorie en fiabilité.',
    features: [
      'Discover Media',
      'Climatisation automatique',
      'Aide au stationnement',
      'Régulateur de vitesse',
      'Jantes alliage 16"',
      'Package convenience'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '39',
    slug: 'volkswagen-golf-r',
    name: 'Volkswagen Golf R',
    category: 'Sport',
    pricePerDay: 280,
    image: '/images/cars/golf r/golf r (1).jpg',
    gallery: [
      '/images/cars/golf r/golf r (1).jpg',
      '/images/cars/golf r/golf r (2).jpg',
      '/images/cars/golf r/golf r (3).jpg',
      '/images/cars/golf r/golf r (4).jpg',
      '/images/cars/golf r/golf r (5).jpg'
    ],
    description: 'Compacte sportive Golf R avec 320 ch et traction intégrale 4Motion.',
    features: [
      'Discover Pro',
      'Climatisation automatique',
      'Sièges sport R',
      'Suspension DCC',
      'Jantes R 19"',
      'Package R Performance'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '40',
    slug: 'volkswagen-golf-gtd',
    name: 'Volkswagen Golf GTD',
    category: 'Sport',
    pricePerDay: 220,
    image: '/images/cars/gtd/gtd (1).jpg',
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

  {
    id: '41',
    slug: 'volkswagen-polo',
    name: 'Volkswagen Polo',
    category: 'Citadine',
    pricePerDay: 90,
    image: '/images/cars/polo/polo (1).jpg',
    gallery: [
      '/images/cars/polo/polo (1).jpg',
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

  {
    id: '42',
    slug: 'volkswagen-taigo',
    name: 'Volkswagen Taigo',
    category: 'SUV',
    pricePerDay: 140,
    image: '/images/cars/taigo/taigo (1).jpg',
    gallery: [
      '/images/cars/taigo/taigo (1).jpg',
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

  {
    id: '43',
    slug: 'volkswagen-tiguan-ancien',
    name: 'Volkswagen Tiguan Ancien',
    category: 'SUV',
    pricePerDay: 160,
    image: '/images/cars/tiguan ancient/tiguan1.jpg',
    gallery: [
      '/images/cars/tiguan ancient/tiguan1.jpg',
      '/images/cars/tiguan ancient/tiguan2.jpg',
      '/images/cars/tiguan ancient/tiguan3.jpg'
    ],
    description: 'SUV Volkswagen Tiguan génération précédente, fiabilité éprouvée.',
    features: [
      'Discover Media',
      'Climatisation automatique',
      'Aide au stationnement',
      '4Motion',
      'Jantes alliage 17"',
      'Package off-road'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Diesel',
      seats: 5,
      luggage: '4 valises'
    }
  },

  {
    id: '44',
    slug: 'volkswagen-tiguan-nv',
    name: 'Volkswagen Tiguan NV',
    category: 'SUV',
    pricePerDay: 180,
    image: '/images/cars/tiguan nv/tiguan (1).jpg',
    gallery: [
      '/images/cars/tiguan nv/tiguan (1).jpg',
      '/images/cars/tiguan nv/tiguan (2).jpg'
    ],
    description: 'SUV Volkswagen Tiguan nouvelle version avec équipements modernes.',
    features: [
      'Discover Pro',
      'Climatisation 3 zones',
      'Aide au stationnement plus',
      '4Motion intelligent',
      'Jantes alliage 18"',
      'Package IQ.Drive'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // OPEL (2 véhicules)
  {
    id: '45',
    slug: 'opel-astra',
    name: 'Opel Astra',
    category: 'Berline',
    pricePerDay: 100,
    image: '/images/cars/astra/astra (1).jpg',
    gallery: [
      '/images/cars/astra/astra (1).jpg',
      '/images/cars/astra/astra (2).jpg',
      '/images/cars/astra/astra (3).jpg',
      '/images/cars/astra/astra (4).jpg',
      '/images/cars/astra/astra (5).jpg',
      '/images/cars/astra/astra (6).jpg',
      '/images/cars/astra/astra (7).jpg',
      '/images/cars/astra/astra (8).jpg',
      '/images/cars/astra/astra (9).jpg',
      '/images/cars/astra/astra (10).jpg'
    ],
    description: 'Berline Opel Astra moderne avec design rafraîchi et technologies avancées.',
    features: [
      'IntelliLink',
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
      luggage: '3 valises'
    }
  },

  {
    id: '46',
    slug: 'opel-mokka',
    name: 'Opel Mokka',
    category: 'SUV',
    pricePerDay: 130,
    image: '/images/cars/moka/moka (1).jpg',
    gallery: [
      '/images/cars/moka/moka (1).jpg',
      '/images/cars/moka/moka (2).jpg',
      '/images/cars/moka/moka (3).jpg',
      '/images/cars/moka/moka (4).jpg',
      '/images/cars/moka/moka (5).jpg',
      '/images/cars/moka/moka (6).jpg'
    ],
    description: 'SUV compact Opel Mokka au design audacieux et moderne.',
    features: [
      'IntelliLink',
      'Climatisation automatique',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes alliage 17"',
      'Package city'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  // SEAT (4 véhicules)
  {
    id: '47',
    slug: 'seat-ateca',
    name: 'SEAT Ateca',
    category: 'SUV',
    pricePerDay: 150,
    image: '/images/cars/ateca/ateca (1).jpg',
    gallery: [
      '/images/cars/ateca/ateca (1).jpg',
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

  {
    id: '48',
    slug: 'seat-cupra',
    name: 'SEAT Cupra',
    category: 'Sport',
    pricePerDay: 250,
    image: '/images/cars/cupra/cupra (1).jpg',
    gallery: [
      '/images/cars/cupra/cupra (1).jpg',
      '/images/cars/cupra/cupra (2).jpg',
      '/images/cars/cupra/cupra (3).jpg',
      '/images/cars/cupra/cupra (4).jpg',
      '/images/cars/cupra/cupra (5).jpg'
    ],
    description: 'Sportive SEAT Cupra avec performances élevées et design agressif.',
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

  {
    id: '49',
    slug: 'seat-leon',
    name: 'SEAT León',
    category: 'Berline',
    pricePerDay: 120,
    image: '/images/cars/leon/leon (1).jpg',
    gallery: [
      '/images/cars/leon/leon (1).jpg',
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

  // RENAULT (1 véhicule)
  {
    id: '50',
    slug: 'renault-clio-5',
    name: 'Renault Clio 5',
    category: 'Citadine',
    pricePerDay: 95,
    image: '/images/cars/clio 5/clio  (1).jpg',
    gallery: [
      '/images/cars/clio 5/clio  (1).jpg',
      '/images/cars/clio 5/clio  (2).jpg',
      '/images/cars/clio 5/clio  (3).jpg',
      '/images/cars/clio 5/clio  (4).jpg',
      '/images/cars/clio 5/clio  (5).jpg'
    ],
    description: 'Citadine Renault Clio 5 alliant élégance française et technologies modernes.',
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

  // ŠKODA (4 véhicules)
  {
    id: '51',
    slug: 'skoda-fabia',
    name: 'Škoda Fabia',
    category: 'Citadine',
    pricePerDay: 85,
    image: '/images/cars/fabia/fabia (1).jpg',
    gallery: [
      '/images/cars/fabia/fabia (1).jpg',
      '/images/cars/fabia/fabia (2).jpg',
      '/images/cars/fabia/fabia (3).jpg',
      '/images/cars/fabia/fabia (4).jpg',
      '/images/cars/fabia/fabia (5).jpg',
      '/images/cars/fabia/fabia (6).jpg',
      '/images/cars/fabia/fabia (7).jpg'
    ],
    description: 'Citadine Škoda Fabia spacieuse et économique avec design moderne.',
    features: [
      'SmartLink',
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
      luggage: '3 valises'
    }
  },

  {
    id: '52',
    slug: 'skoda-kamiq',
    name: 'Škoda Kamiq',
    category: 'SUV',
    pricePerDay: 130,
    image: '/images/cars/kamiq/kamiq (1).jpg',
    gallery: [
      '/images/cars/kamiq/kamiq (1).jpg',
      '/images/cars/kamiq/kamiq (2).jpg',
      '/images/cars/kamiq/kamiq (3).jpg',
      '/images/cars/kamiq/kamiq (4).jpg'
    ],
    description: 'SUV compact Škoda Kamiq alliant praticité et design moderne.',
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

  {
    id: '53',
    slug: 'skoda-octavia-vrs',
    name: 'Škoda Octavia vRS',
    category: 'Sport',
    pricePerDay: 200,
    image: '/images/cars/vrs/vrs (1).jpg',
    gallery: [
      '/images/cars/vrs/vrs (1).jpg',
      '/images/cars/vrs/vrs (2).jpg',
      '/images/cars/vrs/vrs (3).jpg',
      '/images/cars/vrs/vrs (4).jpg',
      '/images/cars/vrs/vrs (5).jpg'
    ],
    description: 'Berline sportive Škoda Octavia vRS avec performances et praticité.',
    features: [
      'SmartLink+ Pro',
      'Climatisation automatique',
      'Sièges sport vRS',
      'Suspension DCC',
      'Jantes vRS 19"',
      'Package vRS'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // FIAT (3 véhicules)
  {
    id: '54',
    slug: 'fiat-500',
    name: 'Fiat 500',
    category: 'Citadine',
    pricePerDay: 80,
    image: '/images/cars/fiat 500/fiat 500 (1).jpg',
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

  {
    id: '55',
    slug: 'fiat-500x',
    name: 'Fiat 500X',
    category: 'SUV',
    pricePerDay: 110,
    image: '/images/cars/fiat 500x/500x (1).jpg',
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

  {
    id: '56',
    slug: 'fiat-abarth',
    name: 'Fiat Abarth',
    category: 'Sport',
    pricePerDay: 150,
    image: '/images/cars/fiat abarth/abarth (1).jpg',
    gallery: [
      '/images/cars/fiat abarth/abarth (1).jpg',
      '/images/cars/fiat abarth/abarth (2).jpg',
      '/images/cars/fiat abarth/abarth (3).jpg'
    ],
    description: 'Sportive Fiat Abarth avec tempérament scorpion et performances pures.',
    features: [
      'Uconnect 7"',
      'Climatisation automatique',
      'Sièges sport Abarth',
      'Échappement sport',
      'Jantes Abarth 17"',
      'Package Abarth'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Essence',
      seats: 4,
      luggage: '1 valise'
    }
  },

  // LAND ROVER (2 véhicules)
  {
    id: '57',
    slug: 'range-rover-evoque',
    name: 'Range Rover Evoque',
    category: 'SUV',
    pricePerDay: 320,
    image: '/images/cars/range evoque/evoque (1).jpg',
    gallery: [
      '/images/cars/range evoque/evoque (1).jpg',
      '/images/cars/range evoque/evoque (2).jpg',
      '/images/cars/range evoque/evoque (3).jpg',
      '/images/cars/range evoque/evoque (4).jpg',
      '/images/cars/range evoque/evoque (5).jpg',
      '/images/cars/range evoque/evoque (6).jpg',
      '/images/cars/range evoque/evoque (7).jpg'
    ],
    description: 'SUV coupé Range Rover Evoque au design avant-gardiste et luxueux.',
    features: [
      'Pivi Pro',
      'Climatisation 2 zones',
      'Sièges cuir Windsor',
      'Terrain Response 2',
      'Jantes alliage 20"',
      'Package Evoque'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '3 valises'
    }
  },

  {
    id: '58',
    slug: 'range-rover-sport-svr',
    name: 'Range Rover Sport SVR',
    category: 'SUV',
    pricePerDay: 580,
    image: '/images/cars/range svr/svr (1).jpg',
    gallery: [
      '/images/cars/range svr/svr (1).jpg',
      '/images/cars/range svr/svr (2).jpg',
      '/images/cars/range svr/svr (3).jpg',
      '/images/cars/range svr/svr (4).jpg'
    ],
    description: 'SUV Range Rover Sport SVR avec performances exceptionnelles et luxe britannique.',
    features: [
      'Pivi Pro',
      'Climatisation 4 zones',
      'Sièges SVR Performance',
      'Suspension pneumatique SVR',
      'Jantes SVR 22"',
      'Package SVR Carbon'
    ],
    specifications: {
      transmission: 'Automatique',
      fuel: 'Essence',
      seats: 5,
      luggage: '4 valises'
    }
  },

  // UTILITAIRE (1 véhicule)
  {
    id: '59',
    slug: 'van-utilitaire',
    name: 'Van Utilitaire',
    category: 'Utilitaire',
    pricePerDay: 120,
    image: '/images/cars/van/Van1.jpg',
    gallery: [
      '/images/cars/van/Van1.jpg',
      '/images/cars/van/Van2.jpg',
      '/images/cars/van/Van3.jpg',
      '/images/cars/van/Van4.jpg',
      '/images/cars/van/Van5.jpg'
    ],
    description: 'Véhicule utilitaire spacieux et pratique pour tous vos besoins professionnels.',
    features: [
      'Radio CD',
      'Climatisation cabine',
      'Aide au stationnement',
      'Caméra de recul',
      'Jantes acier 16"',
      'Package professionnel'
    ],
    specifications: {
      transmission: 'Manuelle',
      fuel: 'Diesel',
      seats: 3,
      luggage: '15 valises'
    }
  }
];

// Fonctions utilitaires
export function getMinPrice(): number {
  return Math.min(...cars.map(car => car.pricePerDay));
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
  { value: "Brabus", label: "Brabus" },
  { value: "Fiat", label: "Fiat" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Opel", label: "Opel" },
  { value: "Peugeot", label: "Peugeot" },
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
  { value: "Sport", label: "Sport" },
  { value: "SUV", label: "SUV" },
  { value: "Utilitaire", label: "Utilitaire" },
];