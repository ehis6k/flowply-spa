import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems, globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";
import flowplyLogo from "@/assets/flowply-logo-full.png";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { trackNavClick, trackCTAPrimary } = useAnalytics();
  const shouldReduceMotion = useReducedMotion();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky header state change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2" 
            : "bg-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-10">
              <img 
                src={flowplyLogo} 
                alt="FlowPly" 
                className={`w-auto transition-all duration-300 ${isScrolled ? "h-7" : "h-8"}`}
              />
            </Link>

            {/* Desktop Navigation with Mega Menu - visible on md and up */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    onClick={() => trackNavClick(item.label, item.href)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === item.href 
                        ? "text-foreground bg-secondary/50" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 min-w-[280px] z-50"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-card rounded-xl border border-border shadow-lg p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => {
                                trackNavClick(child.label, child.href);
                                setOpenDropdown(null);
                              }}
                              className="block px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                            >
                              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-muted-foreground mt-0.5">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
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

            {/* Mobile Menu Toggle - only on phone/tablet */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
