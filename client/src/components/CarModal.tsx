import { useState, useEffect } from "react";
import { X, Calendar, Minus, Plus, Settings, Fuel, Users, Luggage, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Car } from "@/data/cars";

interface CarModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarModal = ({ car, isOpen, onClose }: CarModalProps) => {
  const [rentalDays, setRentalDays] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [currency, setCurrency] = useState<"DA" | "EUR">("DA");

  // Taux de conversion DA vers EUR (250 DA = 1 EUR)
  const daToEurRate = 250;
  
  const formatPrice = (priceDA: number): string => {
    if (currency === "EUR") {
      const priceEUR = Math.round(priceDA / daToEurRate);
      return `${priceEUR.toLocaleString()} €`;
    } else {
      return `${priceDA.toLocaleString()} DA`;
    }
  };

  // Reset index quand on change de voiture
  useEffect(() => {
    setCurrentImageIndex(0);
    if (car) {
      const images = car.gallery || [car.image];
      setImagesLoaded(new Array(images.length).fill(false));
      
      // Préchargement de toutes les images
      images.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
          });
        };
        img.src = src;
      });
    }
  }, [car?.id]);

  if (!car) return null;

  // Calcul du prix selon la durée
  const getPriceByDuration = (days: number, basePrice: number) => {
    if (days <= 6) {
      return basePrice; // Prix journalier
    } else if (days <= 14) {
      return basePrice * 0.95; // Tarif semaine (-5%)
    } else if (days <= 29) {
      return basePrice * 0.90; // Tarif 15 jours (-10%)
    } else {
      return basePrice * 0.85; // Tarif mensuel (-15%)
    }
  };

  const dailyPrice = getPriceByDuration(rentalDays, car.pricePerDayDA);
  const totalPrice = Math.round(dailyPrice * rentalDays);

  const increaseDays = () => setRentalDays(prev => prev + 1);
  const decreaseDays = () => setRentalDays(prev => Math.max(1, prev - 1));

  // Galerie d'images optimisée
  const images = car.gallery || [car.image];
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  // Fonctions pour le swipe tactile optimisées
  const minSwipeDistance = 20; // Distance très réduite pour réactivité maximale

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }
  };

  // Support du swipe avec la souris
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl font-display font-bold">
            {car.name}
          </DialogTitle>
          {/* Currency Selector */}
          <div className="absolute top-0 right-8">
            <div className="flex bg-primary/90 rounded-full p-1 shadow-lg backdrop-blur-sm border border-primary/30">
              <Button
                variant={currency === "DA" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setCurrency("DA")}
                className={`rounded-full px-2 py-1 text-xs font-medium transition-all ${
                  currency === "DA" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                DA
              </Button>
              <Button
                variant={currency === "EUR" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setCurrency("EUR")}
                className={`rounded-full px-2 py-1 text-xs font-medium transition-all ${
                  currency === "EUR" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                EUR
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Galerie d'images principale ultra-optimisée */}
            <div 
              className="relative rounded-2xl overflow-hidden mb-6 bg-luxury-gray select-none shadow-2xl group car-gallery-optimized"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {/* Affichage instantané de toutes les images préchargées */}
              <div className="relative w-full h-80">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${car.name} - Photo ${index + 1}`}
                    className={`absolute inset-0 w-full h-80 object-cover will-change-transform ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    draggable={false}
                    loading="eager"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      transition: 'none'
                    }}
                  />
                ))}
              </div>
              
              {/* Overlay gradient subtil pour améliorer l'apparence */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Flèches de navigation ultra-fluides */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-80 group-hover:opacity-100 gallery-control z-20"
                  >
                    <ChevronLeft className="h-8 w-8 text-primary drop-shadow-lg" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-80 group-hover:opacity-100 gallery-control z-20"
                  >
                    <ChevronRight className="h-8 w-8 text-primary drop-shadow-lg" />
                  </button>
                </>
              )}
              
              {/* Points indicateurs ultra-réactifs */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full gallery-control outline-none focus:outline-none transition-none ${
                        index === currentImageIndex
                          ? 'bg-primary shadow-md scale-110'
                          : 'bg-white/50 hover:bg-white/80 shadow-sm'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            {/* Description */}
            <div className="mb-6 bg-luxury-gray/20 p-4 rounded-lg border border-luxury-gray">
              <h3 className="font-display text-xl font-semibold mb-3 text-primary">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </div>
            
            {/* Technical Specifications */}
            <div className="mb-6 bg-luxury-gray/20 p-4 rounded-lg border border-luxury-gray">
              <h3 className="font-display text-xl font-semibold mb-4 text-primary">Caractéristiques techniques</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-white font-medium">Transmission</div>
                    <div className="text-muted-foreground text-sm">{car.specifications.transmission}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-white font-medium">Carburant</div>
                    <div className="text-muted-foreground text-sm">{car.specifications.fuel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-white font-medium">Places</div>
                    <div className="text-muted-foreground text-sm">{car.specifications.seats} places</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Luggage className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-white font-medium">Bagages</div>
                    <div className="text-muted-foreground text-sm">{car.specifications.luggage}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-6 bg-luxury-gray/20 p-4 rounded-lg border border-luxury-gray">
              <h3 className="font-display text-xl font-semibold mb-4 text-primary">Équipements</h3>
              <div className="space-y-2">
                {car.features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Calculator */}
            <div className="bg-luxury-gray/20 p-6 rounded-lg border border-luxury-gray">
              <h3 className="font-display text-2xl font-bold mb-2 flex items-center gap-2 text-primary">
                <Calendar className="h-6 w-6" />
                Calculateur de Location
              </h3>
              <p className="text-muted-foreground mb-6">
                Sélectionnez la durée et obtenez la meilleure offre
              </p>
              
              {/* Counter Controls */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-12 h-12 rounded-full bg-luxury-gray hover:bg-luxury-gray/80 border-none"
                  onClick={decreaseDays}
                >
                  <Minus className="h-6 w-6" />
                </Button>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {rentalDays}
                  </div>
                  <div className="text-muted-foreground">
                    jour{rentalDays > 1 ? 's' : ''}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-12 h-12 rounded-full bg-luxury-gray hover:bg-luxury-gray/80 border-none"
                  onClick={increaseDays}
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </div>

              {/* Price Display */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-white">Prix par jour</span>
                  <span className="text-primary font-bold text-xl">{formatPrice(Math.round(dailyPrice))}</span>
                </div>
                
                <div className="bg-amber-900/30 border border-amber-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">
                      Total ({rentalDays} jour{rentalDays > 1 ? 's' : ''})
                    </span>
                    <span className="text-primary font-bold text-2xl">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h4 className="text-muted-foreground text-sm mb-3">Offres par période :</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className={`p-2 rounded ${rentalDays <= 6 ? 'bg-amber-900/30 border border-amber-700' : 'bg-luxury-gray/20'}`}>
                    <div className={rentalDays <= 6 ? 'text-primary font-semibold' : 'text-muted-foreground'}>1-6 jours : Tarif journalier</div>
                  </div>
                  <div className={`p-2 rounded ${rentalDays >= 7 && rentalDays <= 14 ? 'bg-amber-900/30 border border-amber-700' : 'bg-luxury-gray/20'}`}>
                    <div className={rentalDays >= 7 && rentalDays <= 14 ? 'text-primary font-semibold' : 'text-muted-foreground'}>7-14 jours : Offre semaine</div>
                  </div>
                  <div className={`p-2 rounded ${rentalDays >= 15 && rentalDays <= 29 ? 'bg-amber-900/30 border border-amber-700' : 'bg-luxury-gray/20'}`}>
                    <div className={rentalDays >= 15 && rentalDays <= 29 ? 'text-primary font-semibold' : 'text-muted-foreground'}>15-29 jours : Offre 15 jours</div>
                  </div>
                  <div className={`p-2 rounded ${rentalDays >= 30 ? 'bg-amber-900/30 border border-amber-700' : 'bg-luxury-gray/20'}`}>
                    <div className={rentalDays >= 30 ? 'text-primary font-semibold' : 'text-muted-foreground'}>30+ jours : Offre mensuelle</div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => {
                  const message = `Bonjour, je souhaite réserver la ${car.name} pour ${rentalDays} jour${rentalDays > 1 ? 's' : ''} au prix de ${formatPrice(totalPrice)}. Merci de me confirmer la disponibilité.`;
                  window.open(`https://wa.me/2130559309680?text=${encodeURIComponent(message)}`, "_blank");
                }}
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 text-lg"
              >
                💬 Réserver Maintenant
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarModal;
