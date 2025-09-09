import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "Chraga, Alger, Algérie"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: "(+213) 0559309680"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@luxurylocation.dz"
    }
  ];

  const openingHours = [
    { day: "Dimanche - Jeudi", hours: "8h00 - 00h00" },
    { day: "Vendredi", hours: "15h00 - 1h00" },
    { day: "Dimanche", hours: "10h00 - 00h00" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/share/15QRatTfrF/", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/luxury_location_de_voiture?igsh=OHJ6MXdsZ2tjN2wy", color: "bg-pink-600 hover:bg-pink-700" },
    { name: "TikTok", icon: <FaTiktok className="h-5 w-5" />, url: "https://www.tiktok.com/@locationvoituredeluxe5?_t=ZM-8ycuforBGNx&_r=1", color: "bg-black hover:bg-gray-800" },
    { name: "WhatsApp", icon: <IoLogoWhatsapp className="h-5 w-5" />, url: "https://wa.me/2130559309680", color: "bg-green-600 hover:bg-green-700" }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/2130559309680", "_blank");
  };

  return (
    <div className="py-20 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Nous <span className="text-primary">Contacter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card p-8">
              <CardContent className="p-0">
                <h2 className="font-display text-2xl font-bold mb-6">Informations de Contact</h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.215"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">(+213) 0559309680</p>
                      <Button
                        onClick={handleWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-white"
                        size="sm"
                      >
                        Discuter
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="bg-card p-8">
              <CardContent className="p-0">
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Horaires d'Ouverture
                </h2>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card p-8">
              <CardContent className="p-0">
                <h2 className="font-display text-2xl font-bold mb-6">Suivez-nous</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 text-white`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card p-8">
            <CardContent className="p-0">
              <h2 className="font-display text-2xl font-bold mb-6">Envoyez-nous un Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Votre prénom"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Votre nom"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(+213) 0559309680"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="info">Information sur un véhicule</SelectItem>
                      <SelectItem value="service">Service client</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Votre message..."
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card p-4 sm:p-8">
            <CardContent className="p-0">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">Notre Emplacement</h2>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full lg:flex-1">
                  <div className="text-center text-muted-foreground mb-6">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg mb-2">Lea luxury location de voitures</p>
                    <p className="text-sm">Chraga, Alger, Algérie</p>
                  </div>
                </div>
                <div className="w-full lg:flex-1 max-w-md mx-auto lg:max-w-none">
                  <div className="bg-muted rounded-lg h-80 flex flex-col items-center justify-center p-6 border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="mb-4">
                      <svg className="h-16 w-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        {/* Contour de la carte */}
                        <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                        {/* Routes horizontales */}
                        <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        {/* Routes verticales */}
                        <line x1="8" y1="6" x2="8" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        <line x1="12" y1="6" x2="12" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        <line x1="16" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                        {/* Pin de localisation */}
                        <circle cx="14" cy="10" r="2" fill="currentColor"/>
                        <path d="M14 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Visitez notre showroom</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      Cliquez pour ouvrir notre localisation dans Google Maps
                    </p>
                    <Button
                      onClick={() => window.open("https://www.google.com/maps/place/Lea+luxury+location+de+voitures/@36.6946620,2.9649445,17z/data=!3m1!4b1!4m6!3m5!1s0x128faf004103544d:0x98a970f06eda2fec!8m2!3d36.6946620!4d2.9675194!16s%2Fg%2F11y1y5j9qk", "_blank")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1"/>
                        <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="14" cy="10" r="1.5"/>
                      </svg>
                      Ouvrir dans Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
