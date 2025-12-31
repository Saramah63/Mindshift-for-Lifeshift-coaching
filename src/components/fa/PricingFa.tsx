import { Check } from 'lucide-react';

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
      highlighted: false
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
      highlighted: true
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
      highlighted: false
    }
  ];

  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-blue-700">سرمایه‌گذاری در رشد شما</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          بسته کوچینگی را انتخاب کنید که بهترین تناسب را با اهداف و سطح تعهد شما دارد.
          همه بسته‌ها شامل تجربه کوچینگ با کیفیت یکسان هستند.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              pkg.highlighted
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl scale-105 border-4 border-blue-300'
                : 'bg-white shadow-lg border-2 border-gray-200'
            }`}
          >
            {pkg.highlighted && (
              <div className="text-center mb-4">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm">
                  محبوب‌ترین
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className={`mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <div className="mb-2">
                <span className={`text-4xl ${pkg.highlighted ? 'text-white' : 'text-blue-700'}`}>
                  {pkg.price}
                </span>
              </div>
              <p className={`text-sm ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {pkg.period}
              </p>
            </div>

            <p className={`text-center mb-6 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
              {pkg.description}
            </p>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    pkg.highlighted ? 'text-blue-200' : 'text-blue-600'
                  }`} />
                  <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg transition-colors ${
                pkg.highlighted
                  ? 'bg-white text-blue-700 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              شروع کنید
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
        <h4 className="mb-3 text-gray-900 text-center">پرداخت و سیاست‌ها</h4>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="mb-2"><strong>روش‌های پرداخت:</strong> کارت اعتباری، انتقال بانکی یا پی‌پال</p>
            <p><strong>سیاست لغو:</strong> برای تغییر زمان نیاز به اطلاع ۲۴ ساعته است</p>
          </div>
          <div>
            <p className="mb-2"><strong>سیاست بازپرداخت:</strong> جلسات استفاده نشده در بسته‌ها ظرف ۳۰ روز قابل بازپرداخت هستند</p>
            <p><strong>مقیاس متغیر:</strong> ظرفیت محدود برای افراد با محدودیت‌های مالی</p>
          </div>
        </div>
      </div>
    </section>
  );
}
