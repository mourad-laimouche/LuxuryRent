export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const chatbotResponses: Record<string, string> = {
  horaires: `Nos horaires d'ouverture sont :
• Lundi-Vendredi: 9h00 - 19h00
• Samedi: 9h00 - 18h00
• Dimanche: 10h00 - 17h00`,

  réservation: `Pour réserver une voiture :
1. Choisissez votre véhicule dans notre catalogue
2. Sélectionnez vos dates de location
3. Utilisez notre calculateur de prix
4. Confirmez votre réservation
5. Profitez de votre expérience luxury !`,

  conditions: `Nos conditions principales :
• Âge minimum: 25 ans
• Permis de conduire valide depuis 3 ans minimum
• Carte de crédit pour la caution
• Assurance tous risques incluse
• Caution selon le véhicule (5000€ à 15000€)`,

  prix: `Nos tarifs varient selon le véhicule :
• SEAT Ateca: à partir de 100€/jour
• Volkswagen Taigo: à partir de 110€/jour
• Volkswagen Tiguan: à partir de 120€/jour
• Volkswagen Multivan: à partir de 150€/jour
• BMW Série 2: à partir de 180€/jour
• Porsche Macan: à partir de 250€/jour
• Mercedes Classe S: à partir de 300€/jour
• Porsche 718 Boxster: à partir de 320€/jour
• Mercedes GLE Coupé: à partir de 350€/jour
• Porsche Cayenne: à partir de 380€/jour
• Mercedes-AMG GLE: à partir de 400€/jour

Des réductions sont disponibles pour les locations longue durée.`,

  contact: `Vous pouvez nous contacter :
• Téléphone: (+213) 0559309680
• Email: contact@luxurylocation.fr
• WhatsApp: (+213) 0559309680
• Adresse: 123 Avenue des Champs-Élysées, 75008 Paris
• Instagram: https://www.instagram.com/luxury_location_de_voiture?igsh=OHJ6MXdsZ2tjN2wy`,

  disponibilité: `Pour vérifier la disponibilité :
• Consultez notre page "Voitures" avec les filtres de dates
• Contactez-nous directement par téléphone ou WhatsApp
• Envoyez-nous un email avec vos dates souhaitées
• Utilisez le formulaire de contact sur notre site

Nous vous confirmerons la disponibilité dans les plus brefs délais.`,

  livraison: `Service de conciergerie disponible :
• Livraison gratuite dans Paris intra-muros
• Livraison aéroports (Charles de Gaulle, Orly): 150€
• Livraison en région parisienne: 100€
• Livraison dans toute la France sur devis
• Service disponible 7j/7 avec supplément weekend`,

  assurance: `Couverture d'assurance complète :
• Assurance tous risques incluse
• Franchise variable selon le véhicule
• Option franchise zéro disponible
• Couverture internationale possible
• Assistance 24h/7j incluse
• Protection contre le vol et les dommages`
};

export const quickActions = [
  { label: "Horaires", message: "Quels sont vos horaires ?" },
  { label: "Réservation", message: "Comment réserver une voiture ?" },
  { label: "Conditions", message: "Quelles sont vos conditions ?" },
  { label: "Prix", message: "Quels sont vos tarifs ?" },
  { label: "Contact", message: "Comment vous contacter ?" },
  { label: "Disponibilité", message: "Comment vérifier la disponibilité ?" }
];

export function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('horaire') || message.includes('heure') || message.includes('ouvert') || message.includes('fermeture')) {
    return chatbotResponses.horaires;
  } else if (message.includes('réserv') || message.includes('book') || message.includes('louer') || message.includes('location')) {
    return chatbotResponses.réservation;
  } else if (message.includes('condition') || message.includes('règle') || message.includes('permis') || message.includes('âge')) {
    return chatbotResponses.conditions;
  } else if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('€') || message.includes('euro')) {
    return chatbotResponses.prix;
  } else if (message.includes('contact') || message.includes('téléphone') || message.includes('email') || message.includes('adresse')) {
    return chatbotResponses.contact;
  } else if (message.includes('disponib') || message.includes('libre') || message.includes('dispo')) {
    return chatbotResponses.disponibilité;
  } else if (message.includes('livraison') || message.includes('récup') || message.includes('concierg')) {
    return chatbotResponses.livraison;
  } else if (message.includes('assurance') || message.includes('couverture') || message.includes('protection')) {
    return chatbotResponses.assurance;
  } else if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('bonsoir')) {
    return `Bonjour ! Je suis ravi de vous aider. Vous pouvez me poser des questions sur :
• Nos horaires d'ouverture
• Comment réserver un véhicule
• Nos conditions de location
• Nos tarifs
• Nos coordonnées
• La disponibilité des véhicules
• Notre service de livraison
• Notre couverture d'assurance`;
  } else if (message.includes('merci') || message.includes('thanks') || message.includes('au revoir')) {
    return 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions. Notre équipe reste également disponible pour vous accompagner dans votre projet de location.';
  } else if (message.includes('mercedes') || message.includes('volkswagen') || message.includes('bmw') || message.includes('porsche') || message.includes('seat') || message.includes('tiguan') || message.includes('boxster') || message.includes('cayenne')) {
    return `Pour des informations spécifiques sur nos véhicules, je vous invite à consulter notre page "Voitures" où vous trouverez :
• Toutes les caractéristiques techniques
• Les photos de nos véhicules
• Le calculateur de prix personnalisé
• Les conditions spécifiques à chaque modèle

Vous pouvez aussi nous contacter directement pour des conseils personnalisés !`;
  } else {
    return `Je ne suis pas sûr de comprendre votre question. Vous pouvez me demander des informations sur :
• Nos horaires d'ouverture
• Comment réserver
• Nos conditions de location
• Nos tarifs
• Nos coordonnées
• La disponibilité des véhicules
• Notre service de livraison
• Notre assurance

Ou utilisez les boutons rapides ci-dessous !`;
  }
}
