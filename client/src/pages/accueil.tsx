import { Link } from "wouter";
import { Car, Shield, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cars } from "@/data/cars";
import avatarImage from "@assets/images (2)_1754407453306.jpeg";
// import LightRaysSimple from "@/components/LightRaysSimple";
import TextType from "@/components/TextType";
import { useEffect, useRef, useState } from "react";

const Accueil = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Véhicules vedettes : Brabus, Urus, Porsche Boxster bleu
  const featuredCars = cars.filter(car => 
    car.id === '2' || // Brabus
    car.id === '3' || // Urus  
    car.id === '6'    // Porsche Boxster bleu
  );

  const testimonials = [
    {
      name: "Pierre Dubois",
      rating: 5,
      comment: "Service exceptionnel, véhicules impeccables. Une expérience luxury à la hauteur de mes attentes.",
      avatar: avatarImage
    },
    {
      name: "Marie Laurent",
      rating: 5,
      comment: "La Porsche était parfaite pour mon événement. Livraison ponctuelle et service client remarquable.",
      avatar: avatarImage
    },
    {
      name: "Thomas Martin",
      rating: 5,
      comment: "Processus de réservation simple, véhicules de prestige impeccables. Je recommande vivement.",
      avatar: avatarImage
    }
  ];

  // Fonction pour faire défiler vers la section suivante
  const scrollToNextSection = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Déterminer quelle section afficher ensuite en fonction de la position actuelle
    if (currentScrollY < windowHeight * 0.5) {
      // Dans le hero, aller aux services
      servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (servicesRef.current && currentScrollY < servicesRef.current.offsetTop + servicesRef.current.offsetHeight * 0.5) {
      // Dans les services, aller aux véhicules vedettes
      featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (featuredRef.current && currentScrollY < featuredRef.current.offsetTop + featuredRef.current.offsetHeight * 0.5) {
      // Dans les véhicules vedettes, aller aux témoignages
      testimonialsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Si on est déjà dans les témoignages, ne rien faire
  };

  // Détection mobile/desktop
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Gestion de la navigation sur PC
  useEffect(() => {
    let isScrolling = false;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Seulement sur PC
      if (window.innerWidth < 1024) return;
      
      // Flèche vers le bas
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToNextSection();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Seulement sur PC
      if (window.innerWidth < 1024) return;
      
      // Éviter les multiples déclenchements
      if (isScrolling) return;
      
      // Détection d'un scroll vers le bas significatif
      if (e.deltaY > 30) {
        e.preventDefault();
        isScrolling = true;
        scrollToNextSection();
        
        // Réinitialiser après 1 seconde
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Ajouter les événements seulement sur PC
    if (window.innerWidth >= 1024) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - avec effet de lumière qui commence au tout début */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Light Rays Background - positionné pour commencer depuis le top absolu */}
        <div className="fixed inset-0 top-0 left-0 right-0">
          <div 
            className="w-full h-full pointer-events-none z-0 overflow-hidden relative"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(255, 215, 0, 0.15) 0%, 
                rgba(255, 215, 0, 0.08) 25%, 
                rgba(255, 215, 0, 0.03) 50%, 
                transparent 75%)`
            }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in -mt-16 md:-mt-40">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 luxury-text-gradient">
            Location de Voiture<br />Luxurieux
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-display">
            <TextType
              text={[
                "Vivez l'exception à chaque trajet avec la référence algérienne de la location haut de gamme.",
                "Chaque trajet devient une expérience avec la location de prestige la plus exclusive d'Algérie.",
                "Prestige, performance, perfection — votre référence en location automobile en Algérie."
              ]}
              startOnVisible={true}
              typingSpeed={35}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-primary font-display"
              className="text-gray-300 font-display"
              loop={true}
              pauseDuration={2500}
              deletingSpeed={20}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voitures">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300">
                Découvrir nos véhicules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 transition-all duration-300">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expérience de location premium avec des services sur mesure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card hover:bg-accent p-8 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="text-primary text-4xl mb-4">
                  <Car className="h-12 w-12" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">Flotte Premium</h3>
                <p className="text-muted-foreground">
                  Une sélection rigoureuse des plus belles voitures de luxe du marché
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-accent p-8 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="text-primary text-4xl mb-4">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">Service Conciergerie</h3>
                <p className="text-muted-foreground">
                  Livraison et récupération de votre véhicule où vous le souhaitez
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-accent p-8 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="text-primary text-4xl mb-4">
                  <Shield className="h-12 w-12" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">Assurance Premium</h3>
                <p className="text-muted-foreground">
                  Couverture complète pour une tranquillité d'esprit absolue
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section ref={featuredRef} className="py-20 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Véhicules <span className="text-primary">Vedettes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez une sélection de nos véhicules les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="bg-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <Link href={`/voitures/${car.slug}`}>
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-luxury-black to-luxury-gray border-b border-luxury-gold/10">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105" 
                      style={{ 
                        objectPosition: 'center 40%'
                      }}
                    />
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-muted-foreground mb-4">{car.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">À partir de {car.pricePerDay.toLocaleString()} DA/jour</span>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => {
                        console.log('Button clicked, navigating to:', `/voitures/${car.slug}`);
                        window.location.href = `/voitures/${car.slug}`;
                      }}
                    >
                      Découvrir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bouton voir tous les véhicules */}
          <div className="text-center mt-12">
            <Link href="/voitures">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300">
                Voir tous nos véhicules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Témoignages <span className="text-primary">Clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex text-primary">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
