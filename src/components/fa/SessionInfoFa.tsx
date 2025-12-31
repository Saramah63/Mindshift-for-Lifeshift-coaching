import { Calendar, Clock, Video, FileText } from 'lucide-react';

export function SessionInfoFa() {
  const sessionDetails = [
    {
      icon: Clock,
      title: "مدت زمان جلسه",
      description: "هر جلسه کوچینگ ۶۰ دقیقه طول می‌کشد و زمان کافی برای پرداختن عمیق به اهداف و چالش‌های شما را فراهم می‌کند"
    },
    {
      icon: Calendar,
      title: "تناوب جلسات",
      description: "بیشتر مشتریان از جلسات دو هفته یک‌بار یا هفتگی بهره می‌برند، اگرچه می‌توانیم برنامه را متناسب با نیازهای شما سفارشی کنیم"
    },
    {
      icon: Video,
      title: "فرمت جلسه",
      description: "جلسات می‌توانند از طریق تماس ویدیویی، تلفنی یا حضوری برگزار شوند، بسته به ترجیح و موقعیت مکانی شما"
    },
    {
      icon: FileText,
      title: "بین جلسات",
      description: "اقدامات عملی، تأملات و منابع را برای پشتیبانی از پیشرفت شما بین جلسات دریافت خواهید کرد"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-center mb-6 text-blue-700">درباره جلسات کوچینگ ما</h2>
      
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        جلسات کوچینگ ما طراحی شده‌اند تا دگرگون‌کننده، متمرکز و متناسب با سفر منحصر به فرد شما باشند.
        در اینجا می‌توانید انتظار داشته باشید:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {sessionDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">{detail.title}</h4>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
        <h4 className="mb-3 text-gray-900">آنچه در هر جلسه پوشش خواهیم داد:</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>بررسی پیشرفت و جشن گرفتن موفقیت‌ها از جلسه قبل</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>بررسی چالش‌ها و فرصت‌های فعلی</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>شناسایی بینش‌ها و لحظات پیشرفت</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>ایجاد گام‌های مشخص و عملی به جلو</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>ایجاد پاسخگویی برای جلسه بعدی</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
