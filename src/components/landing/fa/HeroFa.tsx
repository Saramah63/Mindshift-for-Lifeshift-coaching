import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroFaProps {
  scrollToSection: (id: string) => void;
}

export function HeroFa({ scrollToSection }: HeroFaProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right content (in RTL this appears on the right) */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">مایند‌شیفت برای لایف‌شیفت - زندگی خود را متحول کنید</span>
            </div>
            
            <h1 className="mb-6 text-gray-900">
              پتانسیل کامل خود را آزاد کنید
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              ذهنیت خود را تغییر دهید، زندگی خود را متحول کنید. کوچینگ حرفه‌ای چند زبانه 
              برای رشد پایدار شخصی و شغلی. سفر خود را از درون آغاز کنید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                سفر خود را شروع کنید
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300"
              >
                بیشتر بدانید
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center lg:text-right">
                <div className="text-3xl text-blue-700 mb-1">+۵۰۰</div>
                <div className="text-sm text-gray-600">مشتری کوچینگ شده</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl text-blue-700 mb-1">+۱۰</div>
                <div className="text-sm text-gray-600">سال تجربه</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl text-blue-700 mb-1">٪۹۵</div>
                <div className="text-sm text-gray-600">نرخ موفقیت</div>
              </div>
            </div>
          </div>

          {/* Left content - Image placeholder */}
          <div className="relative lg:order-first">
            <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl opacity-75">تحول شما از اینجا شروع می‌شود</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <p className="text-sm text-gray-600 mb-1">موفقیت مشتریان</p>
              <p className="text-2xl text-blue-700">⭐ ۴.۹/۵</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <p className="text-sm text-gray-600 mb-1">وقت بعدی</p>
              <p className="text-lg text-gray-900">این هفته</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}