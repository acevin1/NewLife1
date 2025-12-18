
import { Instagram, Mail } from 'lucide-react';

interface FooterProps {
  currentLanguage: 'de' | 'en';
  onLanguageChange: (language: 'de' | 'en') => void;
}

const Footer = ({ currentLanguage, onLanguageChange }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const content = {
    de: {
      description: "Webentwicklung, Digitalberatung & Social-Media-Analyse für lokale Unternehmen",
      quickLinks: "Quick Links",
      followMe: "Folge mir",
      language: "Sprache",
      home: "Home",
      about: "Über mich",
      services: "Leistungen",
      results: "Ergebnisse",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz"
    },
    en: {
      description: "Web development, digital consulting & social media analysis for local businesses",
      quickLinks: "Quick Links",
      followMe: "Follow me",
      language: "Language",
      home: "Home",
      about: "About me",
      services: "Services",
      results: "Results",
      contact: "Contact",
      rights: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy"
    }
  };

  const t = content[currentLanguage];

  return (
    <footer className="bg-gray-800 text-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">WebDev Pro</h3>
            <p className="text-gray-300">
              {t.description}
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <span>max.mueller@webdev-pro.de</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t.quickLinks}</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-red-500 transition-colors">
                {t.home}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-red-500 transition-colors">
                {t.about}
              </a>
              <a href="#services" className="block text-gray-300 hover:text-red-500 transition-colors">
                {t.services}
              </a>
              <a href="#results" className="block text-gray-300 hover:text-red-500 transition-colors">
                {t.results}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-red-500 transition-colors">
                {t.contact}
              </a>
            </div>
          </div>

          {/* Social & Language */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t.followMe}</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2 text-white">{t.language}</h4>
              <div className="flex gap-2">
                <button 
                  onClick={() => onLanguageChange('de')}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                    currentLanguage === 'de' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  🇩🇪 DE
                </button>
                <button 
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                    currentLanguage === 'en' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} WebDev Pro. {t.rights}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              {t.imprint}
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
