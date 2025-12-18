
import { Monitor, MapPin, Instagram, TrendingUp } from 'lucide-react';

interface ServicesOverviewProps {
  currentLanguage: 'de' | 'en';
}

const ServicesOverview = ({ currentLanguage }: ServicesOverviewProps) => {
  const content = {
    de: {
      title: "Was ich für dich tun kann",
      subtitle: "Individuelle Lösungen für deinen digitalen Erfolg – alles aus einer Hand.",
      services: [
        {
          title: "Website-Erstellung",
          description: "Individuelle Websites für Einzelunternehmer und kleine Unternehmen – keine Baukastensysteme."
        },
        {
          title: "Google-Einträge",
          description: "Optimiere deine lokale Sichtbarkeit mit professionellen Google Business Profilen."
        },
        {
          title: "Social-Media-Beratung",
          description: "Instagram-Strategien und Content-Tipps für mehr Reichweite und Engagement."
        },
        {
          title: "Trendanalysen & AI",
          description: "Nutze modernste AI-Tools für bessere Sichtbarkeit und smarte Content-Strategien."
        }
      ]
    },
    en: {
      title: "What I can do for you",
      subtitle: "Individual solutions for your digital success – everything from one source.",
      services: [
        {
          title: "Website Creation",
          description: "Custom websites for solo entrepreneurs and small businesses – no template systems."
        },
        {
          title: "Google Listings",
          description: "Optimize your local visibility with professional Google Business profiles."
        },
        {
          title: "Social Media Consulting",
          description: "Instagram strategies and content tips for more reach and engagement."
        },
        {
          title: "Trend Analysis & AI",
          description: "Use cutting-edge AI tools for better visibility and smart content strategies."
        }
      ]
    }
  };

  const t = content[currentLanguage];
  const services = [
    { icon: Monitor, ...t.services[0] },
    { icon: MapPin, ...t.services[1] },
    { icon: Instagram, ...t.services[2] },
    { icon: TrendingUp, ...t.services[3] }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-500 group border border-gray-700 hover:border-red-500/50 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-red-500 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
