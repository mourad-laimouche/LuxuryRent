import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, Minus, Plus, Settings, Fuel, Users, Luggage, CheckCircle, ChevronLeft, ChevronRight, DollarSign, Euro, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cars, Car } from "@/data/cars";

const VoitureDetails = () => {
  const [match, params] = useRoute("/voitures/:slug");
  const [car, setCar] = useState<Car | null>(null);
  const [rentalDays, setRentalDays] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [currency, setCurrency] = useState<"DA" | "EUR">("DA");
  const [lastTap, setLastTap] = useState(0);
  const [lastClick, setLastClick] = useState(0);

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

  useEffect(() => {
    if (params?.slug) {
      const foundCar = cars.find(c => c.slug === params.slug);
      setCar(foundCar || null);
      
      if (foundCar) {
        const images = foundCar.gallery || [foundCar.image];
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
    }
  }, [params?.slug]);

  if (!match || !car) {
    return (
      <div className="py-20 bg-luxury-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Voiture non trouvée</h1>
          <Link href="/voitures">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux voitures
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = car.gallery || [car.image];

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

  const currentPrice = getPriceByDuration(rentalDays, car.pricePerDayDA);
  const totalPrice = currentPrice * rentalDays;

  // Navigation des images
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  // Gestion tactile
  const minSwipeDistance = 50;

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

  // Gestion souris (drag)
  const onMouseDown = (e: React.MouseEvent) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setMouseEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd || !isDragging) {
      setIsDragging(false);
      return;
    }
    
    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag && images.length > 1) {
      nextImage();
    }
    if (isRightDrag && images.length > 1) {
      prevImage();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const handleWhatsAppBooking = () => {
    const message = `Bonjour ! Je souhaite réserver la ${car.name} pour ${rentalDays} jour${rentalDays > 1 ? 's' : ''}.
Prix total: ${formatPrice(Math.round(totalPrice))}
Merci !`;
    
    const whatsappUrl = `https://wa.me/2130559309680?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-8 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Currency Selector */}
        <div className="absolute top-0 right-4 z-10">
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
        {/* Bouton retour */}
        <Link href="/voitures">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux voitures
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            {/* Image principale */}
            <div 
              className="relative bg-luxury-gray rounded-xl overflow-hidden aspect-[4/3] select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex]}
                  alt={`${car.name} - Vue ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center center' }}
                />
              )}
              
              {/* Navigation des images */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Indicateurs */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Détails de la voiture */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {car.category}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {car.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {car.description}
              </p>
            </div>

            {/* Caractéristiques techniques */}
            <Card className="bg-card border border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-primary">
                  Caractéristiques techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {/* Transmission */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center p-2">
                      <Settings className="h-6 w-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-0.5">Transmission</h3>
                      <p className="text-sm text-gray-400">{car.specifications.transmission}</p>
                    </div>
                  </div>

                  {/* Carburant */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Fuel className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-0.5">Carburant</h3>
                      <p className="text-sm text-gray-400">{car.specifications.fuel}</p>
                    </div>
                  </div>

                  {/* Places */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-0.5">Places</h3>
                      <p className="text-sm text-gray-400">{car.specifications.seats} places</p>
                    </div>
                  </div>

                  {/* Bagages */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Luggage className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-0.5">Bagages</h3>
                      <p className="text-sm text-gray-400">{car.specifications.luggage}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Équipements inclus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Calculateur de prix en dernière position */}
          <div className="lg:col-span-2 mt-8">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 shadow-xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="text-primary">Calculateur de Prix</span>
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Découvrez le tarif pour votre location
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="rental-days-main" className="text-base font-medium">Nombre de jours</Label>
                  <div className="flex items-center gap-3 mt-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 w-12 rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                    >
                      <Minus className="h-5 w-5" />
                    </Button>
                    <Input
                      id="rental-days-main"
                      type="number"
                      min="1"
                      value={rentalDays}
                      onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-center text-xl font-bold h-12 border-primary/50 focus:border-primary"
                    />
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 w-12 rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setRentalDays(rentalDays + 1)}
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="bg-luxury-black/50 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Prix par jour:</span>
                    <span className="font-semibold text-primary">{formatPrice(Math.round(currentPrice))}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-muted-foreground">Durée:</span>
                    <span className="font-semibold">{rentalDays} jour{rentalDays > 1 ? 's' : ''}</span>
                  </div>
                  <Separator className="bg-primary/20" />
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary text-3xl">{formatPrice(Math.round(totalPrice))}</span>
                  </div>
                  {rentalDays >= 7 && (
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-400/30">
                        {rentalDays >= 30 ? 'Tarif mensuel -15%' : 
                         rentalDays >= 15 ? 'Tarif 15 jours -10%' : 
                         'Tarif semaine -5%'}
                      </Badge>
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-primary hover:bg-primary/90 text-black text-lg font-semibold py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    borderRadius: '24px'
                  }}
                  size="lg"

                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.36L2 22l5.64-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                  Réserver Maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VoitureDetails;