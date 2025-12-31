import { Heart, Sparkles, Target, Users } from 'lucide-react';
import saraPhoto from 'figma:asset/9649b8219f108710d6e166dbefb4234580059982.png';

export function AboutSaraFa() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">درباره کوچ شما</span>
          </div>
          <h2 className="mb-4 text-gray-900">آشنایی با سارا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شریک شما در تحول و رشد شخصی
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right - Profile Photo (appears first in RTL) */}
          <div className="relative order-2 md:order-1">
            {/* Your Professional Photo */}
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src={saraPhoto}
                alt="سارا محمودی - کوچ حرفه‌ای زندگی و ذهنیت"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-3">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform -rotate-3">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            
            {/* Professional badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">گواهینامه</p>
                  <p className="text-sm text-gray-900">کوچ زندگی</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left - Bio (appears second in RTL) */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <h3 className="mb-6 text-gray-900">داستان من</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  من سارا هستم، یک کوچ ذهنیت و تحول زندگی که عاشق رشد شخصی است.
                  <span className="text-blue-700 font-medium"> سفر تحول شخصی من، الهام‌بخش من برای راهنمایی دیگران در مسیر آن‌هاست.</span>
                </p>
                <p>
                  من به شما کمک می‌کنم ارزش‌ها، استعدادها و نقاط قوت درونی خود را کشف کنید. من معتقدم که تغییر ذهنیت شما، زندگی شما را متحول می‌کند.
                  با هم، از درون شروع می‌کنیم، ذهنیت شما را تغییر می‌دهیم و زندگی‌ای متناسب با خواسته‌های واقعی شما می‌سازیم.
                </p>
                <p className="text-blue-700 font-medium">
                  من اینجا هستم تا شما را در کشف و خلق بهترین نسخه از خودتان راهنمایی کنم.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <Heart className="w-8 h-8 text-pink-500 mb-3" />
                <h4 className="text-gray-900 mb-2">پرشور</h4>
                <p className="text-sm text-gray-600">در مورد رشد و تحول شخصی شما</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                <Target className="w-8 h-8 text-indigo-500 mb-3" />
                <h4 className="text-gray-900 mb-2">متمرکز</h4>
                <p className="text-sm text-gray-600">بر کشف ارزش‌ها و نقاط قوت شما</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <Sparkles className="w-8 h-8 text-purple-500 mb-3" />
                <h4 className="text-gray-900 mb-2">تحول‌آفرین</h4>
                <p className="text-sm text-gray-600">تغییر ذهنیت منجر به تحول پایدار می‌شود</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <Users className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="text-gray-900 mb-2">حمایتگر</h4>
                <p className="text-sm text-gray-600">راهنمایی شما در هر مرحله از مسیر</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-4">فلسفه کوچینگ من</h3>
            <p className="text-xl text-blue-700 italic max-w-3xl mx-auto">
              "تغییر ذهنیت شما، زندگی شما را متحول می‌کند"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h4 className="text-gray-900 mb-2">از درون شروع کنید</h4>
              <p className="text-gray-600">
                تحول واقعی از درون شروع می‌شود. ابتدا ارزش‌ها، باورها و نقاط قوت درونی شما را کشف می‌کنیم.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h4 className="text-gray-900 mb-2">ذهنیت خود را تغییر دهید</h4>
              <p className="text-gray-600">
                باورها و الگوهای فکری محدودکننده را تغییر دهید. دیدگاه‌های توانمندساز جدید ایجاد کنید.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h4 className="text-gray-900 mb-2">زندگی خود را متحول کنید</h4>
              <p className="text-gray-600">
                زندگی‌ای متناسب با خواسته‌های واقعی خود بسازید. بهترین نسخه از خودتان شوید.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            آماده شروع سفر تحول خود هستید؟
          </p>
          <a
            href="#booking"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            رزرو تماس رایگان آشنایی
          </a>
        </div>
      </div>
    </section>
  );
}