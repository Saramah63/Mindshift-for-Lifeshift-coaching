import { Check, Star } from 'lucide-react';

export function PricingFa() {
  const packages = [
    {
      name: "جلسه تکی",
      price: "$150",
      period: "هر جلسه",
      description: "عالی برای کسانی که می‌خواهند کوچینگ را امتحان کنند یا به حمایت گاه‌به‌گاه نیاز دارند",
      features: [
        "جلسه کوچینگ ۶۰ دقیقه‌ای",
        "فرم آماده‌سازی قبل از جلسه",
        "خلاصه بعد از جلسه",
        "پشتیبانی ایمیلی بین جلسات"
      ],
      highlighted: false,
      badge: null
    },
    {
      name: "بسته ماهانه",
      price: "$500",
      period: "هر ماه",
      description: "محبوب‌ترین انتخاب برای رشد و دگرگونی مداوم",
      features: [
        "۴ جلسه کوچینگ (هر کدام ۶۰ دقیقه)",
        "فرم‌های آماده‌سازی قبل از جلسه",
        "پیگیری دقیق پیشرفت",
        "پشتیبانی ایمیلی اولویت‌دار",
        "منابع و ابزارهای سفارشی",
        "۱۵٪ صرفه‌جویی نسبت به جلسات تکی"
      ],
      highlighted: true,
      badge: "محبوب‌ترین"
    },
    {
      name: "بسته سه ماهه",
      price: "$1,350",
      period: "برای ۳ ماه",
      description: "پشتیبانی جامع برای دگرگونی عمیق و پایدار",
      features: [
        "۱۲ جلسه کوچینگ (هر کدام ۶۰ دقیقه)",
        "جلسه فشرده تعیین اهداف اولیه",
        "بررسی پیشرفت در میانه دوره",
        "برنامه‌ریزی اولویت‌دار",
        "پشتیبانی ایمیلی نامحدود",
        "برنامه‌های عملی و منابع سفارشی",
        "۲۵٪ صرفه‌جویی نسبت به جلسات تکی"
      ],
      highlighted: false,
      badge: "بهترین ارزش"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">سرمایه‌گذاری در رشد شما</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            بسته کوچینگی را انتخاب کنید که بهترین تناسب را با اهداف و سطح تعهد شما دارد.
            همه بسته‌ها شامل تجربه کوچینگ با کیفیت یکسان هستند.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105 border-4 border-blue-300'
                  : 'bg-white shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {pkg.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`mb-3 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-5xl ${pkg.highlighted ? 'text-white' : 'text-blue-700'}`}>
                    {pkg.price}
                  </span>
                </div>
                <p className={`text-sm ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.period}
                </p>
              </div>

              <p className={`text-center mb-8 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.highlighted ? 'text-blue-200' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm ${pkg.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg transition-all transform hover:scale-105 ${
                  pkg.highlighted
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                شروع کنید
              </button>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8">
          <h3 className="text-center mb-6 text-gray-900">سیاست‌های انعطاف‌پذیر</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
            <div className="text-center">
              <p className="mb-2"><strong>روش‌های پرداخت</strong></p>
              <p className="text-sm">کارت اعتباری، انتقال بانکی یا پی‌پال</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>لغو جلسه</strong></p>
              <p className="text-sm">اطلاع ۲۴ ساعته برای تغییر زمان</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>سیاست بازپرداخت</strong></p>
              <p className="text-sm">جلسات استفاده نشده ظرف ۳۰ روز قابل بازپرداخت</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>مقیاس متغیر</strong></p>
              <p className="text-sm">ظرفیت محدود برای محدودیت‌های مالی</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
