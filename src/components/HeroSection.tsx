
import { ArrowRight, Upload } from 'lucide-react';
import { useState } from 'react';
import DynamicBackground from './DynamicBackground';

interface HeroSectionProps {
  currentLanguage: 'de' | 'en';
}

const HeroSection = ({ currentLanguage }: HeroSectionProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const content = {
    de: {
      title: "Kein Schnickschnack.",
      subtitle: "Qualität",
      description: "Hi, ich bin Cevin Rothenhäusler – IT-Systemadministrator und Digitalberater. Ich helfe Unternehmen dabei, digital sichtbar zu werden.",
      callout: "Du willst digital durchstarten, aber weißt nicht Wie? Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.",
      button: "Erzähl mir von deinem Projekt",
      stats: {
        views: "Aufrufe",
        years: "Jahre", 
        honest: "Ehrlich",
        quality: "Qualität"
      }
    },
    en: {
      title: "No Nonsense.",
      subtitle: "Quality",
      description: "Hi, I'm Max Müller – web developer and digital consultant. For 2.5 years I've been helping local businesses become digitally visible.",
      callout: "You want to go digital but have no idea about websites? I listen and develop a solution with you that works.",
      button: "Tell me about your project",
      upload: "Your Profile Picture",
      uploadText: "Click to upload",
      stats: {
        views: "Views",
        years: "Years",
        honest: "Honest", 
        quality: "Quality"
      }
    }
  };

  const t = content[currentLanguage];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      <DynamicBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Layout - Mobile: Stack, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Profile Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl bg-gray-800">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Max Müller" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <div className="text-center text-white">
                        <Upload size={48} className="mx-auto mb-4" />
                        <p className="text-lg font-semibold">{t.upload}</p>
                        <p className="text-sm text-gray-300">{t.uploadText}</p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Upload className="text-white" size={32} />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 text-center lg:text-left space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                  {t.title}
                  <br />
                  <span className="text-red-500 relative">
                    {t.subtitle}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 animate-slide-in-right"></div>
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in delay-300">
                  {t.description}
                </p>
              </div>

              <div className="space-y-6 lg:space-y-8 animate-fade-in delay-500">
                <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 lg:p-8">
                  <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
                    {t.callout.split('Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')[0]}
                    <span className="text-red-400 font-medium"> {t.callout.split('Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')[1] || (currentLanguage === 'en' ? 'I listen and develop a solution with you that works.' : 'Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.')}</span>
                  </p>
                </div>

                <button 
                  onClick={scrollToContact}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 group shadow-2xl hover:shadow-red-500/25 transform hover:scale-105"
                >
                  {t.button}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 animate-fade-in delay-700">
                <div className="text-center p-3 lg:p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-red-500">30M+</div>
                  <div className="text-xs lg:text-sm text-gray-400">{t.stats.views}</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-red-500">2.5</div>
                  <div className="text-xs lg:text-sm text-gray-400">{t.stats.years}</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-red-500">100%</div>
                  <div className="text-xs lg:text-sm text-gray-400">{t.stats.honest}</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-xl lg:text-2xl font-bold text-red-500">∞</div>
                  <div className="text-xs lg:text-sm text-gray-400">{t.stats.quality}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
