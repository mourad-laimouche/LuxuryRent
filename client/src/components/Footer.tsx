import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logoImage from "@assets/luxury_location_de_voiture_14040513_132943072-removebg-preview_1754349350231.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/voitures", label: "Voitures" },
    { href: "/apropos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/share/15QRatTfrF/" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/luxury_location_de_voiture?igsh=OHJ6MXdsZ2tjN2wy" },
    { name: "TikTok", icon: <FaTiktok className="h-5 w-5" />, url: "https://www.tiktok.com/@locationvoituredeluxe5?_t=ZM-8ycuforBGNx&_r=1" },
    { name: "WhatsApp", icon: <IoLogoWhatsapp className="h-5 w-5" />, url: "https://wa.me/2130559309680" },
  ];

  const brands = [
    "Mercedes-Benz", "Volkswagen", "BMW", "Porsche", 
    "SEAT", "Cabriolets", "SUV Premium", "Luxury"
  ];

  return (
    <footer className="bg-luxury-dark border-t border-luxury-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Luxury Location de Voiture" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Luxury Location de Voiture vous offre une expérience de location de véhicules de prestige exceptionnelle depuis plus de 10 ans.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-luxury-gray hover:bg-primary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Baba-hssen<br />
                    75008 Alger, Algérie
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+2130559309680" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  (+213) 0559309680
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@luxurylocation.fr" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                  contact@luxurylocation.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-luxury-gray mt-12 pt-8">
          <div className="text-center">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Luxury Location de Voiture. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;