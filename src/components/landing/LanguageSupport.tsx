import { Globe, Languages, CheckCircle } from 'lucide-react';

export function LanguageSupport() {
  const languages = [
    {
      name: "English",
      native: "English",
      flag: "🇬🇧",
      level: "Professional"
    },
    {
      name: "Persian/Farsi",
      native: "فارسی",
      flag: "🇮🇷",
      level: "Native"
    }
  ];

  const benefits = [
    "Coaching in your preferred language",
    "Cultural sensitivity and understanding",
    "Support for ESL professionals",
    "International and expat focus",
    "Cross-cultural communication expertise",
    "Flexible session times (all time zones)"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Multilingual Coaching Services</span>
          </div>
          <h2 className="mb-4 text-gray-900">Coaching Without Language Barriers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a multilingual coach, I understand the unique challenges of working across cultures and languages. 
            Whether English is your first or second language, you'll feel comfortable and understood.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-emerald-100"
            >
              <div className="text-6xl mb-4">{language.flag}</div>
              <h3 className="text-gray-900 mb-2">{language.name}</h3>
              <p className="text-2xl text-emerald-600 mb-3">{language.native}</p>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm">
                {language.level}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Benefits */}
            <div>
              <h3 className="mb-6 text-gray-900">Why Choose Multilingual Coaching?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Special Message */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200">
              <div className="text-center mb-6">
                <Languages className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-gray-900 mb-3">Special Focus Areas</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🌍</span>
                  <span><strong>International Professionals:</strong> Navigate career growth in new countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✈️</span>
                  <span><strong>Expats & Immigrants:</strong> Adapt to new cultures while staying true to yourself</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🎓</span>
                  <span><strong>ESL Professionals:</strong> Build confidence in English-speaking environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🌉</span>
                  <span><strong>Cross-Cultural Leaders:</strong> Bridge cultural differences in global teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">💼</span>
                  <span><strong>Persian-speaking Professionals:</strong> Connect in your native language when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regions Served */}
        <div className="mt-12 text-center">
          <h4 className="mb-6 text-gray-900">Serving Clients From</h4>
          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <span title="Iran & Persian-speaking regions">🇮🇷 🇦🇫 🇹🇯</span>
            <span title="Europe">🇬🇧 🇩🇪 🇫🇷 🇸🇪 🇫🇮</span>
            <span title="North America">🇺🇸 🇨🇦</span>
            <span title="Oceania">🇦🇺 🇳🇿</span>
          </div>
          <p className="text-gray-600 mt-6">
            Virtual sessions available worldwide • All time zones welcome
          </p>
        </div>
      </div>
    </section>
  );
}