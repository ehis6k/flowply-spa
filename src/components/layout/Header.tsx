import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems, globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";
import flowplyLogo from "@/assets/flowply-logo-full.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { trackNavClick, trackCTAPrimary } = useAnalytics();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={flowplyLogo} 
              alt="FlowPly" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => trackNavClick(item.label, item.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild 
              variant="accent" 
              size="default"
              onClick={() => trackCTAPrimary("header")}
            >
              <Link to={globalCTAs.header.href}>
                {globalCTAs.header.label}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-base font-medium py-2 ${
                    location.pathname === item.href ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    trackNavClick(item.label, item.href);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="accent" className="mt-2">
                <Link to={globalCTAs.header.href} onClick={() => setIsMenuOpen(false)}>
                  {globalCTAs.header.label}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
