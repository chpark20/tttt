import { useState, useEffect } from "react";
import { useTranslations } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from "@/lib/constants";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { LocaleSwitcher } from "./LocaleSwitcher";
import AuthButton from "./AuthButton";

export function Header() {
  const t = useTranslations("nav");
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white border-b border-gray-200/60 shadow-[var(--shadow-md)]"
          : "bg-white"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={images.logo}
              alt="PBI Robot Education"
              className="h-10 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "nav-link-underline px-4 py-2 text-base font-bold rounded-lg transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-1.5">
            <AuthButton />
            <LocaleSwitcher />
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm lg:text-base font-bold rounded-lg transition-colors"
            >
              {t("consultation")}
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200/60">
          <div className="container-custom py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "block px-4 py-3.5 text-base font-semibold rounded-xl transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary bg-primary/8"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-2 py-3 text-center text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-xl transition-colors"
            >
              {t("consultation")}
            </Link>
            <div className="px-4 mt-2">
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
