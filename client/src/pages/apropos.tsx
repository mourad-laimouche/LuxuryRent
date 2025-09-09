import { Gem, Handshake, Star, Users, Car, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Apropos = () => {
  const values = [
    {
      icon: <Gem className="h-8 w-8" />,
      title: "Excellence",
      description: "Chaque véhicule de notre flotte est méticuleusement sélectionné et entretenu selon les plus hauts standards de qualité."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Confiance",
      description: "Transparence, honnêteté et respect de nos engagements sont au cœur de notre relation avec nos clients."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Prestige",
      description: "Nous offrons une expérience exclusive qui reflète le caractère exceptionnel de nos véhicules."
    }
  ];

  const team = [
    {
      name: "Antoine Moreau",
      role: "Directeur Général",
      description: "Passionné d'automobile depuis l'enfance, Antoine dirige notre équipe avec vision et expertise.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Sophie Leroy",
      role: "Responsable Clientèle",
      description: "Sophie veille à ce que chaque client vive une expérience exceptionnelle et personnalisée.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Marc Dubois",
      role: "Chef Mécanicien",
      description: "Expert technique, Marc s'assure que chaque véhicule soit dans un état parfait pour nos clients.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10+", label: "Années d'expérience" },
    { number: "50+", label: "Véhicules de prestige" },
    { number: "2000+", label: "Clients satisfaits" },
    { number: "98%", label: "Taux de satisfaction" }
  ];

  return (
    <div className="py-20 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="text-primary">Luxury Location de Voiture</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous redéfinissons l'expérience de la location de véhicules de prestige
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Notre showroom de véhicules de luxe" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Fondée en 2013 par des passionnés d'automobile, Luxury Location de Voiture est née d'une vision simple : 
              démocratiser l'accès aux véhicules d'exception tout en maintenant un niveau de service irréprochable.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              Aujourd'hui, nous sommes fiers de compter parmi les leaders français de la location de véhicules de prestige, 
              avec une flotte de plus de 50 véhicules soigneusement sélectionnés et entretenus.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <Card className="bg-card p-12 mb-20">
          <CardContent className="p-0">
            <h2 className="font-display text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Notre Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card p-6 hover:bg-accent transition-colors duration-300">
              <CardContent className="p-0">
                <Car className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Sélection Rigoureuse</h3>
                <p className="text-muted-foreground">
                  Chaque véhicule est choisi selon des critères stricts de performance, de confort et d'esthétique.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card p-6 hover:bg-accent transition-colors duration-300">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Service Personnalisé</h3>
                <p className="text-muted-foreground">
                  Notre équipe dédiée vous accompagne pour créer une expérience sur mesure adaptée à vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card p-6 hover:bg-accent transition-colors duration-300">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Excellence Reconnue</h3>
                <p className="text-muted-foreground">
                  Notre réputation d'excellence nous a valu la confiance de nombreuses personnalités et entreprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-6">Notre Équipe</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card p-8 text-center hover:bg-accent transition-colors duration-300">
                <CardContent className="p-0">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-display text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4 font-medium">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
