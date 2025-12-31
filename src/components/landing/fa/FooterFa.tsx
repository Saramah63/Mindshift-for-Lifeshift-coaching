import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export function FooterFa() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="mb-4 text-white">مایند‌شیفت برای لایف‌شیفت</h4>
            <p className="text-gray-400 text-sm mb-4">
              ذهنیت خود را تغییر دهید، زندگی خود را متحول کنید. کوچینگ حرفه‌ای برای تغییر پایدار.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white text-lg">لینک‌های سریع</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">درباره کوچینگ</a></li>
              <li><a href="#sessions" className="hover:text-white transition-colors">چگونه کار می‌کند</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">قیمت‌ها</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">تماس</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white text-lg">خدمات</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">کوچینگ زندگی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">کوچینگ شغلی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">کوچینگ مدیریتی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">کوچینگ گروهی</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white text-lg">تماس</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:saramah63@gmail.com" className="hover:text-white transition-colors">
                  saramah63@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/358417539326" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  ۳۵۸ ۴۱ ۷۵۳ ۹۳۲۶+ (واتساپ)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>جلسات مجازی در سراسر جهان</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © ۲۰۲۵ مایند‌شیفت برای لایف‌شیفت. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">سیاست حفظ حریم خصوصی</a>
              <a href="#" className="hover:text-white transition-colors">شرایط خدمات</a>
              <a href="#" className="hover:text-white transition-colors">سیاست کوکی</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}