import { Calendar, Clock, Video, FileText, MessageCircle, BarChart } from 'lucide-react';

export function HowItWorksFa() {
  const process = [
    {
      number: "۰۱",
      title: "مشاوره رایگان",
      description: "درباره اهداف و چالش‌های شما صحبت می‌کنیم و تعیین می‌کنیم آیا مناسب هم هستیم",
      icon: MessageCircle
    },
    {
      number: "۰۲",
      title: "انتخاب بسته",
      description: "بسته کوچینگی را انتخاب کنید که با سطح تعهد شما همسو است",
      icon: Calendar
    },
    {
      number: "۰۳",
      title: "شروع جلسات",
      description: "تحول خود را با جلسات منظم ۶۰ دقیقه‌ای کوچینگ شروع کنید",
      icon: Video
    },
    {
      number: "۰۴",
      title: "پیگیری پیشرفت",
      description: "موفقیت‌ها را جشن بگیرید، استراتژی‌ها را تنظیم کنید و به اهداف خود برسید",
      icon: BarChart
    }
  ];

  const sessionDetails = [
    {
      icon: Clock,
      title: "جلسات ۶۰ دقیقه‌ای",
      description: "زمان کافی برای پرداختن عمیق به اهداف و چالش‌ها"
    },
    {
      icon: Calendar,
      title: "برنامه‌ریزی انعطاف‌پذیر",
      description: "جلسات هفتگی یا دو هفته‌ای که با سبک زندگی شما همخوانی دارد"
    },
    {
      icon: Video,
      title: "فرمت‌های متعدد",
      description: "تماس ویدیویی، تلفنی یا حضوری بر اساس ترجیح شما"
    },
    {
      icon: FileText,
      title: "پشتیبانی مداوم",
      description: "اقدامات عملی، منابع و پشتیبانی ایمیلی بین جلسات"
    }
  ];

  return (
    <section id="sessions" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">چگونه کار می‌کند</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            یک فرآیند ساده و اثبات‌شده طراحی شده برای ایجاد تحول پایدار
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl text-blue-100">{step.number}</span>
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {/* Connecting line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Session Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-center mb-4 text-gray-900">انتظار داشته باشید در هر جلسه</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            جلسات ما ساختارمند و در عین حال انعطاف‌پذیر هستند، همیشه متناسب با نیازهای منحصر به فرد شما
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sessionDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2 text-gray-900">{detail.title}</h4>
                  <p className="text-sm text-gray-600">{detail.description}</p>
                </div>
              );
            })}
          </div>

          {/* Session Structure */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
            <h4 className="mb-6 text-gray-900 text-center">جریان معمول جلسه</h4>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "بررسی", time: "۵ دقیقه", desc: "بررسی پیشرفت و جشن موفقیت‌ها" },
                { title: "کاوش", time: "۱۵ دقیقه", desc: "پرداختن به چالش‌های فعلی" },
                { title: "کشف", time: "۲۰ دقیقه", desc: "کشف بینش‌ها و لحظات پیشرفت" },
                { title: "برنامه عملی", time: "۱۵ دقیقه", desc: "ایجاد گام‌های بعدی مشخص" },
                { title: "تعهد", time: "۵ دقیقه", desc: "تعیین پاسخگویی برای جلسه بعدی" }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-blue-700 mb-2">{phase.time}</div>
                  <h4 className="mb-2 text-gray-900 text-sm">{phase.title}</h4>
                  <p className="text-xs text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
