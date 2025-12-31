import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export function WhatIsCoachingFa() {
  const benefits = [
    {
      icon: Target,
      title: "شفافیت اهداف",
      description: "تعریف و بهبود اهداف شخصی و حرفه‌ای شما"
    },
    {
      icon: Lightbulb,
      title: "بینش و آگاهی",
      description: "کشف دیدگاه‌های جدید و باز کردن قفل پتانسیل‌های شما"
    },
    {
      icon: TrendingUp,
      title: "پاسخگویی",
      description: "متعهد ماندن به رشد خود با پشتیبانی ساختارمند"
    },
    {
      icon: Heart,
      title: "توانمندسازی",
      description: "ایجاد اعتماد به نفس و مالکیت بر مسیر خود"
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-center mb-6 text-blue-700">کوچینگ چیست؟</h2>
      
      <div className="prose max-w-none mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          کوچینگ یک مشارکت مشترک است که بر کمک به شما برای دستیابی به اهداف و باز کردن قفل پتانسیل کامل شما متمرکز است.
          برخلاف درمان که اغلب بر شفای زخم‌های گذشته تمرکز دارد، یا مشاوره که در آن متخصصان راه‌حل‌ها را ارائه می‌دهند،
          کوچینگ <strong>شما</strong> را توانمند می‌کند تا پاسخ‌های خود را از طریق پرسش‌های قدرتمند، گوش دادن فعال و پشتیبانی ساختارمند پیدا کنید.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          به عنوان کوچ شما، من یک فضای امن و بدون قضاوت فراهم می‌کنم که در آن می‌توانید چالش‌ها را بررسی کنید، فرصت‌ها را شناسایی کنید،
          و استراتژی‌های عملی برای تغییر معنادار در زندگی یا شغل خود ایجاد کنید.
        </p>
      </div>

      <h3 className="text-center mb-8 text-gray-800">مزایای کوچینگ</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="flex gap-4 p-6 bg-blue-50 rounded-xl">
              <div className="flex-shrink-0">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
