import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

export function BookingSectionFa() {
  // Replace this with your actual Calendly link once you create it
  const calendlyLink = "https://calendly.com/saramahmodi/free-consultation";

  const handleBooking = () => {
    // Open Calendly in a popup (cleaner UX)
    window.open(calendlyLink, '_blank', 'width=800,height=800');
  };

  const benefits = [
    "۱۰۰٪ رایگان - بدون تعهد",
    "تماس ۳۰ دقیقه‌ای آشنایی",
    "بحث درباره اهداف و چالش‌های شما",
    "بررسی تناسب ما با هم",
    "به دست آوردن وضوح در گام‌های بعدی"
  ];

  return (
    <section id="booking" className="py-24 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">مشاوره رایگان در دسترس</span>
          </div>
          <h2 className="mb-4 text-gray-900">تماس رایگان آشنایی خود را رزرو کنید</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            بیایید بررسی کنیم که چگونه کوچینگ می‌تواند به شما در دستیابی به اهدافتان کمک کند. بدون فشار، فقط یک گفتگوی دوستانه.
          </p>
        </div>

        {/* Main Booking Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Right Side - Info (appears first in RTL) */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white order-2 md:order-1">
              <h3 className="mb-6 text-white">انتظار داشته باشید:</h3>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 pt-6 border-t border-blue-400">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>مدت زمان: ۳۰ دقیقه</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5" />
                  <span>فرمت: تماس ویدیویی (زوم)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>در دسترس: دوشنبه-جمعه، ساعات انعطاف‌پذیر</span>
                </div>
              </div>
            </div>

            {/* Left Side - Booking CTA (appears second in RTL) */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white order-1 md:order-2">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="mb-3 text-gray-900">زمان خود را انتخاب کنید</h3>
                <p className="text-gray-600 mb-6">
                  زمانی را که برای شما مناسب است از زمان‌های در دسترس من انتخاب کنید
                </p>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg mb-4"
              >
                <Calendar className="w-6 h-6 inline ml-2" />
                رزرو مشاوره رایگان اکنون
              </button>

              <p className="text-sm text-gray-500 text-center">
                📧 ایمیل را ترجیح می‌دهید؟ با من تماس بگیرید:{' '}
                <a href="mailto:saramah63@gmail.com" className="text-blue-600 hover:underline">
                  saramah63@gmail.com
                </a>
              </p>

              <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <p className="text-sm text-center text-green-700">
                  <strong>🎁 پیشنهاد ویژه:</strong> این هفته رزرو کنید و یک کتابچه کار تعیین اهداف رایگان دریافت کنید!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">مورد اعتماد مشتریان در سراسر جهان</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">⭐ ۴.۹/۵</div>
              <div className="text-sm text-gray-600">رتبه مشتریان</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">🔒 ۱۰۰٪</div>
              <div className="text-sm text-gray-600">محرمانه</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">💬 ۲۴ ساعت</div>
              <div className="text-sm text-gray-600">زمان پاسخگویی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}