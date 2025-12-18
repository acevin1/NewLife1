
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

interface ContactSectionProps {
  currentLanguage: 'de' | 'en';
}

const ContactSection = ({ currentLanguage }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    callback: false
  });

  const content = {
    de: {
      title: "Lass uns über dein ",
      titleHighlight: "Projekt",
      titleEnd: " sprechen",
      subtitle: "Ich antworte dir innerhalb von 24h – versprochen.",
      contactDirect: "Direkt kontaktieren",
      whatsappText: "WhatsApp Business verfügbar",
      whyWorkWith: "Warum mit mir arbeiten?",
      benefits: [
        "✓ Kostenlose Erstberatung (30 Min.)",
        "✓ Transparente Preisgestaltung",
        "✓ Schnelle Kommunikation",
        "✓ Nachbetreuung inklusive"
      ],
      form: {
        name: "Name *",
        email: "E-Mail *",
        topic: "Thema",
        message: "Nachricht *",
        callback: "Ich wünsche einen Rückruf",
        submit: "Nachricht senden",
        namePlaceholder: "Dein Name",
        emailPlaceholder: "deine@email.de",
        messagePlaceholder: "Erzähl mir von deinem Projekt...",
        selectPlaceholder: "Bitte wählen...",
        topics: {
          website: "Website-Erstellung",
          socialMedia: "Social Media",
          google: "Google-Eintrag",
          consulting: "Beratung",
          general: "Allgemein"
        }
      },
      successMessage: "Vielen Dank für deine Nachricht! Ich melde mich innerhalb von 24h bei dir."
    },
    en: {
      title: "Let's talk about your ",
      titleHighlight: "project",
      titleEnd: "",
      subtitle: "I'll respond within 24h – guaranteed.",
      contactDirect: "Contact directly",
      whatsappText: "WhatsApp Business available",
      whyWorkWith: "Why work with me?",
      benefits: [
        "✓ Free initial consultation (30 min.)",
        "✓ Transparent pricing",
        "✓ Fast communication",
        "✓ Follow-up support included"
      ],
      form: {
        name: "Name *",
        email: "Email *",
        topic: "Topic",
        message: "Message *",
        callback: "I would like a callback",
        submit: "Send message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about your project...",
        selectPlaceholder: "Please select...",
        topics: {
          website: "Website creation",
          socialMedia: "Social Media",
          google: "Google listing",
          consulting: "Consulting",
          general: "General"
        }
      },
      successMessage: "Thank you for your message! I'll get back to you within 24h."
    }
  };

  const t = content[currentLanguage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.successMessage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t.title}<span className="text-red-500">{t.titleHighlight}</span>{t.titleEnd}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">{t.contactDirect}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <span className="text-lg text-gray-300">max.mueller@webdev-pro.de</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <span className="text-lg text-gray-300">+49 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-red-500" />
                  <span className="text-lg text-gray-300">{t.whatsappText}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-red-500">{t.whyWorkWith}</h4>
              <ul className="space-y-3 text-gray-300">
                {t.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder={t.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder={t.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-semibold mb-2 text-gray-900">
                  {t.form.topic}
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                >
                  <option value="">{t.form.selectPlaceholder}</option>
                  <option value="website">{t.form.topics.website}</option>
                  <option value="social-media">{t.form.topics.socialMedia}</option>
                  <option value="google">{t.form.topics.google}</option>
                  <option value="consulting">{t.form.topics.consulting}</option>
                  <option value="general">{t.form.topics.general}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder={t.form.messagePlaceholder}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="callback"
                  name="callback"
                  checked={formData.callback}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="callback" className="text-sm text-gray-900">
                  {t.form.callback}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                {t.form.submit}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
