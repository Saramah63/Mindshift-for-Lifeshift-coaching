import { Mail, Phone, MessageCircle } from 'lucide-react';

export function FooterFa() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="mb-4 text-white">آماده شروع هستید؟</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            من از حمایت شما در این سفر بسیار خوشحالم. برای برنامه‌ریزی اولین جلسه خود
            یا اگر سؤالی درباره کوچینگ دارید، با من تماس بگیرید.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <Mail className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">ایمیل</span>
            <span className="text-white">coach@example.com</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <Phone className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">تلفن</span>
            <span className="text-white">۰۹۱۲-۱۲۳-۴۵۶۷</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <MessageCircle className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">برنامه‌ریزی</span>
            <span className="text-white">مشاوره رایگان رزرو کنید</span>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
          <p>© ۱۴۰۴ کسب‌وکار کوچینگ شما. تمامی حقوق محفوظ است.</p>
          <p className="mt-2">تحول زندگی، یک گفتگو در یک زمان.</p>
        </div>
      </div>
    </footer>
  );
}
