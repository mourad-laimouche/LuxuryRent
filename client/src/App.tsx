import { Switch, Route, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Accueil from "@/pages/accueil";
import Voitures from "@/pages/voitures";
import VoitureDetails from "@/pages/voiture-details";
import Apropos from "@/pages/apropos";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const previousLocation = useRef<string>('');
  const carSlugFromDetail = useRef<string>('');

  // Scroll vers le haut à chaque changement de page avec effet smooth
  // Sauf si on revient d'une page de détail vers la liste des voitures
  useEffect(() => {
    const currentLocation = location;
    const prevLocation = previousLocation.current;
    
    // Sauvegarder le slug de la voiture si on va vers une page de détail
    if (prevLocation === '/voitures' && currentLocation.startsWith('/voitures/')) {
      carSlugFromDetail.current = currentLocation.split('/voitures/')[1];
    }
    
    // Si on revient d'une page de détail de voiture vers la liste
    const isReturnFromCarDetail = prevLocation.startsWith('/voitures/') && currentLocation === '/voitures';
    
    if (isReturnFromCarDetail && carSlugFromDetail.current) {
      // Attendre que le DOM soit rendu puis scroller vers la voiture
      setTimeout(() => {
        const carElement = document.querySelector(`[data-car-slug="${carSlugFromDetail.current}"]`);
        if (carElement) {
          carElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
    } else if (!isReturnFromCarDetail) {
      // Comportement normal : scroll vers le haut pour les autres navigations
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    
    // Mettre à jour la location précédente
    previousLocation.current = currentLocation;
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Accueil} />
      <Route path="/voitures" component={Voitures} />
      <Route path="/voitures/:slug" component={VoitureDetails} />
      <Route path="/apropos" component={Apropos} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-luxury-black text-white flex flex-col">
          <Navigation />
          <main className="pt-16 flex-grow">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
