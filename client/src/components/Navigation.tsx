import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, House, Car, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/luxury_location_de_voiture_14040513_132943072-removebg-preview_1754349350231.png";

const Navigation = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavLinks = [
    { href: "/", label: "Accueil", icon: House },
    { href: "/voitures", label: "Voitures", icon: Car },
  ];

  const rightNavLinks = [
    { href: "/apropos", label: "À propos", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Desktop Navigation - Glass morphism bar */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative bg-luxury-black/20 backdrop-blur-xl border border-white/10 rounded-full px-12 py-5 shadow-2xl">
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full opacity-50 animate-pulse"></div>
            
            <div className="relative flex items-center space-x-14">
              {/* Left Navigation */}
              <div className="flex items-center space-x-10">
                {leftNavLinks.map((link) => {
                  const IconComponent = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <div className="relative group">
                        {/* Active glow effect */}
                        {active && (
                          <div className="absolute inset-0 bg-white rounded-full opacity-90 blur-lg scale-125 animate-pulse"></div>
                        )}
                        {/* Active underline */}
                        {active && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></div>
                        )}
                        <div 
                          className={`relative p-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                            active 
                              ? "bg-white text-black shadow-lg scale-110" 
                              : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                          }`}
                        >
                          <IconComponent size={22} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Center Logo */}
              <div className="flex items-center mx-6">
                <Link href="/">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <img 
                      src={logoImage} 
                      alt="Luxury Location de Voiture" 
                      className="relative w-20 h-20 object-contain hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-10">
                {rightNavLinks.map((link) => {
                  const IconComponent = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <div className="relative group">
                        {/* Active glow effect */}
                        {active && (
                          <div className="absolute inset-0 bg-white rounded-full opacity-90 blur-lg scale-125 animate-pulse"></div>
                        )}
                        {/* Active underline */}
                        {active && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></div>
                        )}
                        <div 
                          className={`relative p-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                            active 
                              ? "bg-white text-black shadow-lg scale-110" 
                              : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                          }`}
                        >
                          <IconComponent size={22} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Direct Icon Bar */}
        <div className="lg:hidden">
          <div className="bg-luxury-black/20 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 shadow-2xl">
            <div className="flex items-center justify-between space-x-3">
              {/* Left Mobile Icons */}
              {leftNavLinks.map((link) => {
                const IconComponent = link.icon;
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href}>
                    <div className="relative">
                      {/* Active glow effect */}
                      {active && (
                        <div className="absolute inset-0 bg-white rounded-full opacity-90 blur-lg scale-125 animate-pulse"></div>
                      )}
                      {/* Active underline */}
                      {active && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full"></div>
                      )}
                      <div 
                        className={`relative p-2 rounded-full transition-all duration-300 cursor-pointer ${
                          active 
                            ? "bg-white text-black shadow-lg scale-110" 
                            : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                        }`}
                      >
                        <IconComponent size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Center Mobile Logo */}
              <Link href="/">
                <div className="relative mx-1">
                  <img 
                    src={logoImage} 
                    alt="Luxury Location de Voiture" 
                    className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
              </Link>

              {/* Right Mobile Icons */}
              {rightNavLinks.map((link) => {
                const IconComponent = link.icon;
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href}>
                    <div className="relative">
                      {/* Active glow effect */}
                      {active && (
                        <div className="absolute inset-0 bg-white rounded-full opacity-90 blur-lg scale-125 animate-pulse"></div>
                      )}
                      {/* Active underline */}
                      {active && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full"></div>
                      )}
                      <div 
                        className={`relative p-2 rounded-full transition-all duration-300 cursor-pointer ${
                          active 
                            ? "bg-white text-black shadow-lg scale-110" 
                            : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                        }`}
                      >
                        <IconComponent size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
