import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";
import flowplyLogo from "@/assets/flowply-logo-full.png";
import { MobileDrawer } from "./MobileDrawer";
import { LanguageSelector } from "@/components/shared/LanguageSelector";

// Navigation structure with translation keys
const getNavItems = (t: (key: string) => string) => [
  { label: t("nav.model"), href: "/model" },
  { 
    label: t("nav.scope"), 
    href: "/scope",
    children: [
      { label: t("nav_children.managed_operations"), href: "/scope#managed-operations", description: t("nav_children.managed_operations_desc") },
      { label: t("nav_children.ai_orchestration"), href: "/scope#ai-orchestration", description: t("nav_children.ai_orchestration_desc") },
      { label: t("nav_children.integrations_workflows"), href: "/scope#integrations", description: t("nav_children.integrations_workflows_desc") },
      { label: t("nav_children.use_cases"), href: "/scope#use-cases", description: t("nav_children.use_cases_desc") },
    ]
  },
  { 
    label: t("nav.controls"), 
    href: "/controls",
    children: [
      { label: t("nav_children.monitoring"), href: "/controls#monitoring", description: t("nav_children.monitoring_desc") },
      { label: t("nav_children.escalations"), href: "/controls#escalations", description: t("nav_children.escalations_desc") },
      { label: t("nav_children.hitl"), href: "/controls#hitl", description: t("nav_children.hitl_desc") },
      { label: t("nav_children.audit_trails"), href: "/controls#audit-compliance", description: t("nav_children.audit_trails_desc") },
      { label: t("nav_children.security"), href: "/controls#security", description: t("nav_children.security_desc") },
    ]
  },
  { 
    label: t("nav.stack"), 
    href: "/stack",
    children: [
      { label: t("nav_children.tool_categories"), href: "/stack#categories", description: t("nav_children.tool_categories_desc") },
      { label: t("nav_children.how_we_work"), href: "/stack#how-we-work", description: t("nav_children.how_we_work_desc") },
      { label: t("nav_children.onboarding"), href: "/stack#onboarding", description: t("nav_children.onboarding_desc") },
      { label: t("nav_children.openai_operations"), href: "/integrations/openai-operations", description: t("nav_children.openai_operations_desc") },
      { label: t("nav_children.salesforce"), href: "/integrations/salesforce-automation", description: t("nav_children.salesforce_desc") },
      { label: t("nav_children.zapier"), href: "/integrations/zapier-production-ops", description: t("nav_children.zapier_desc") },
    ]
  },
  { label: t("nav.insights"), href: "/insights" },
  { label: t("nav.contact"), href: "/contact" },
];

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { trackNavClick, trackCTAPrimary } = useAnalytics();
  const shouldReduceMotion = useReducedMotion();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const navItems = getNavItems(t);

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
              {navItems.map((item) => {
                const fullPath = `${location.pathname}${location.hash || ""}`;
                const isParentActive =
                  location.pathname === item.href ||
                  (item.children?.some((c) => c.href === fullPath) ?? false);

                return (
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
                        isParentActive
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
                            {item.children.map((child) => {
                              const isChildActive = child.href === fullPath;
                              return (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  onClick={() => {
                                    trackNavClick(child.label, child.href);
                                    setOpenDropdown(null);
                                  }}
                                  className={`block px-4 py-3 rounded-lg transition-colors group ${
                                    isChildActive
                                      ? "bg-secondary/50"
                                      : "hover:bg-secondary/50"
                                  }`}
                                >
                                  <span
                                    className={`text-sm font-medium transition-colors ${
                                      isChildActive
                                        ? "text-foreground"
                                        : "text-foreground group-hover:text-accent"
                                    }`}
                                  >
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="block text-xs text-muted-foreground mt-0.5">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* CTA Button & Language Selector - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                asChild 
                variant="accent" 
                size="default"
                onClick={() => trackCTAPrimary("header")}
              >
                <Link to={globalCTAs.header.href}>
                  {t("cta.start_planning")}
                </Link>
              </Button>
              <LanguageSelector />
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
