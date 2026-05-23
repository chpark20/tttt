import { useTranslations } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { EDUCATION_CENTER_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="text-gray-300" style={{ background: "linear-gradient(180deg, #111827 0%, #0A0F1A 100%)" }}>
      <div className="container-custom py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Center Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <span className="text-2xl font-black tracking-tight text-white">
                PBI<span className="text-sky-400">Edu</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {t("common.companyFullName")}
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${EDUCATION_CENTER_INFO.phone}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500/70" />
                {t("common.phone")}
              </a>
              <a
                href={`mailto:${EDUCATION_CENTER_INFO.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500/70" />
                {t("common.email")}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-sky-500/70" />
                <span>{t("common.address")}</span>
              </div>
            </div>
          </div>

          {/* Education Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.education")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.courses")}
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.learning")}
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.instructors")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.programs")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.programs")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide mb-5">
              {t("footer.support")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            {t("common.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
