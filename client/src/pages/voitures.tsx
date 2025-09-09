import { useState } from "react";
import { Filter, X, DollarSign, Euro } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cars, brands, categories, priceRanges, Car } from "@/data/cars";

const Voitures = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
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

  // Filtrer les voitures selon les critères sélectionnés en gardant l'ordre de la liste finale
  const filteredCars = cars.filter((car) => {
    // Filtrage par marque basé sur le nom de la voiture
    let brandMatch = false;
    if (selectedBrand === "all") {
      brandMatch = true;
    } else {
      // Extraire la marque du nom pour les voitures réelles
      let carBrand = 'Autre';
      if (car.name.includes('BMW')) carBrand = 'BMW';
      else if (car.name.includes('Mercedes') || car.name.includes('Classe') || car.name.includes('GLE')) carBrand = 'Mercedes-Benz';
      else if (car.name.includes('Audi')) carBrand = 'Audi';
      else if (car.name.includes('Porsche')) carBrand = 'Porsche';
      else if (car.name.includes('Aston Martin')) carBrand = 'Aston Martin';
      else if (car.name.includes('Opel')) carBrand = 'Opel';
      else if (car.name.includes('Seat') || car.name.includes('SEAT') || car.name.includes('Cupra')) carBrand = 'SEAT';
      else if (car.name.includes('Renault') || car.name.includes('Clio')) carBrand = 'Renault';
      else if (car.name.includes('Skoda') || car.name.includes('Škoda')) carBrand = 'Škoda';
      else if (car.name.includes('Fiat')) carBrand = 'Fiat';
      else if (car.name.includes('Brabus')) carBrand = 'Mercedes-Benz';
      else if (car.name.includes('VW') || car.name.includes('Volkswagen') || car.name.includes('Golf') || car.name.includes('Polo') || car.name.includes('Tiguan') || car.name.includes('Taigo') || car.name.includes('Multivan')) carBrand = 'Volkswagen';
      else if (car.name.includes('Range Rover')) carBrand = 'Land Rover';
      else if (car.name.includes('Urus')) carBrand = 'Lamborghini';
      
      brandMatch = carBrand === selectedBrand;
    }
    
    const categoryMatch = selectedCategory === "all" || car.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r: any) => r.value === selectedPriceRange);
      if (range && range.min !== undefined && range.max !== undefined) {
        priceMatch = car.pricePerDayDA >= range.min && car.pricePerDayDA <= range.max;
      }
    }

    return brandMatch && categoryMatch && priceMatch;
  });

  const clearFilters = () => {
    setSelectedBrand("all");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
  };

  return (
    <div className="pt-28 pb-20 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Currency Selector */}
        <div className="fixed top-28 right-4 sm:right-6 lg:right-8 z-50">
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
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Notre <span className="text-primary">Flotte</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre collection exclusive de véhicules de prestige
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-card p-6 mb-12">
          <CardContent className="p-0">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Filtres</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Marque</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une marque" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand.value} value={brand.value}>
                        {brand.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Catégorie</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Prix maximum</label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un prix" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range: any) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={clearFilters}
                  variant="outline" 
                  className="w-full"
                >
                  <X className="h-4 w-4 mr-2" />
                  Effacer les filtres
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            {filteredCars.length} véhicule{filteredCars.length > 1 ? 's' : ''} trouvé{filteredCars.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Card key={car.id} data-car-slug={car.slug} className="bg-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl font-semibold">{car.name}</h3>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {car.category === 'supercar' ? 'Supercar' : 
                     car.category === 'luxury' ? 'Luxury' : 
                     car.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{car.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>• {car.specifications.transmission}</p>
                  <p>• {car.specifications.fuel}</p>
                  <p>• {car.specifications.seats} places</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-primary font-semibold text-xl">{formatPrice(car.pricePerDayDA)}/jour</span>
                  </div>
                  <Link href={`/voitures/${car.slug}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Voir les détails
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              Aucun véhicule ne correspond à vos critères de recherche.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Effacer tous les filtres
            </Button>
          </div>
        )}
      </div>


    </div>
  );
};

export default Voitures;
