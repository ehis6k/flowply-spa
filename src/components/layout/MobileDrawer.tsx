import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems, globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";
import flowplyLogo from "@/assets/flowply-logo-full.png";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const location = useLocation();
  const { trackNavClick, trackCTAPrimary } = useAnalytics();
  const shouldReduceMotion = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap
      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focus close button on open
    setTimeout(() => closeButtonRef.current?.focus(), 100);

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={shouldReduceMotion ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? { x: 0 } : { x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-border shadow-2xl lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <img src={flowplyLogo} alt="FlowPly" className="h-7" />
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {/* Main nav item */}
                    <Link
                      to={item.href}
                      onClick={() => trackNavClick(item.label, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === item.href 
                          ? "text-accent bg-accent/10" 
                          : "text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item.label}
                      {!item.children && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                    </Link>

                    {/* Sub items */}
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => trackNavClick(child.label, child.href)}
                            className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Footer CTA */}
            <div className="p-4 border-t border-border">
              <Button 
                asChild 
                variant="accent" 
                size="lg" 
                className="w-full"
                onClick={() => trackCTAPrimary("mobile-drawer")}
              >
                <Link to={globalCTAs.primary.href}>
                  {globalCTAs.primary.label}
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
