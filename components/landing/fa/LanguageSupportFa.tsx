import { Globe, Languages, CheckCircle } from 'lucide-react';

export function LanguageSupportFa() {
  const languages = [
    {
      name: "انگلیسی",
      native: "English",
      flag: "🇬🇧",
      level: "حرفه‌ای"
    },
    {
      name: "فارسی",
      native: "فارسی",
      flag: "🇮🇷",
      level: "زبان مادری"
    },
    {
      name: "عربی زبانان",
      native: "عربي",
      flag: "🌍",
      level: "دوستانه با ESL"
    }
  ];

  const benefits = [
    "کوچینگ به زبان مورد نظر شما",
    "حساسیت و درک فرهنگی",
    "پشتیبانی از متخصصان ESL",
    "تمرکز بر مشتریان بین‌المللی و مهاجر",
    "تخصص در ارتباطات میان‌فرهنگی",
    "زمان جلسات انعطاف‌پذیر (تمام مناطق زمانی)"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm">خدمات کوچینگ چند زبانه</span>
          </div>
          <h2 className="mb-4 text-gray-900">کوچینگ بدون موانع زبانی</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            به عنوان یک کوچ چند زبانه، من چالش‌های منحصر به فرد کار در فرهنگ‌ها و زبان‌های مختلف را درک می‌کنم.
            چه انگلیسی زبان اول یا دوم شما باشد، احساس راحتی و درک شدن خواهید کرد.
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
            {/* Right - Benefits (appears first in RTL) */}
            <div className="order-2 md:order-1">
              <h3 className="mb-6 text-gray-900">چرا کوچینگ چند زبانه را انتخاب کنیم؟</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Left - Special Message */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200 order-1 md:order-2">
              <div className="text-center mb-6">
                <Languages className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-gray-900 mb-3">حوزه‌های تمرکز ویژه</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🌍</span>
                  <span><strong>متخصصان بین‌المللی:</strong> رشد شغلی در کشورهای جدید</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✈️</span>
                  <span><strong>مهاجران و خارجی‌ها:</strong> سازگاری با فرهنگ‌های جدید</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🎓</span>
                  <span><strong>متخصصان ESL:</strong> اعتماد به نفس در محیط‌های انگلیسی‌زبان</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">🌉</span>
                  <span><strong>رهبران میان‌فرهنگی:</strong> پل زدن بین تفاوت‌های فرهنگی</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">💼</span>
                  <span><strong>متخصصان فارسی‌زبان:</strong> ارتباط به زبان مادری در صورت نیاز</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regions Served */}
        <div className="mt-12 text-center">
          <h4 className="mb-6 text-gray-900">خدمت‌رسانی به مشتریان از</h4>
          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <span title="ایران و مناطق فارسی‌زبان">🇮🇷 🇦🇫 🇹🇯</span>
            <span title="اروپا">🇬🇧 🇩🇪 🇫🇷 🇸🇪 🇫🇮</span>
            <span title="آمریکای شمالی">🇺🇸 🇨🇦</span>
            <span title="اقیانوسیه">🇦🇺 🇳🇿</span>
          </div>
          <p className="text-gray-600 mt-6">
            جلسات مجازی در سراسر جهان در دسترس • همه مناطق زمانی پذیرفته می‌شوند
          </p>
        </div>
      </div>
    </section>
  );
}