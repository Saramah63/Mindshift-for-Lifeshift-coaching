import { Target, Heart, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export function WhatIsCoachingFa() {
  const benefits = [
    {
      icon: Target,
      title: "شفافیت اهداف",
      description: "تعریف و بهبود اهداف شخصی و حرفه‌ای با دقت"
    },
    {
      icon: Lightbulb,
      title: "بینش و آگاهی",
      description: "کشف دیدگاه‌های جدید و باز کردن پتانسیل‌های پنهان درون خود"
    },
    {
      icon: TrendingUp,
      title: "پاسخگویی",
      description: "متعهد ماندن به رشد با پشتیبانی ساختارمند و مستمر"
    },
    {
      icon: Heart,
      title: "توانمندسازی",
      description: "ایجاد اعتماد به نفس تزلزل‌ناپذیر و مالکیت کامل بر مسیر خود"
    }
  ];

  const differences = [
    { label: "کوچینگ", desc: "آینده‌محور، عمل‌گرا، پاسخ‌های شما را باز می‌کند" },
    { label: "درمان", desc: "گذشته‌محور، شفا‌محور، رویکرد بالینی" },
    { label: "مشاوره", desc: "متخصص‌محور، راه‌حل‌گرا، به شما می‌گوید چه کنید" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">کوچینگ چیست؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            کوچینگ یک مشارکت دگرگون‌کننده است که شما را قادر می‌سازد به اهداف خود دست یابید
            و پتانسیل کامل خود را از طریق پرسش‌های قدرتمند و پشتیبانی ساختارمند باز کنید.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Right: Explanation */}
          <div>
            <h3 className="mb-6 text-gray-800">همکار شما در رشد</h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                برخلاف درمان که بر شفای زخم‌های گذشته تمرکز دارد، یا مشاوره که متخصصان
                راه‌حل‌ها را ارائه می‌دهند، کوچینگ <strong>شما</strong> را توانمند می‌کند تا پاسخ‌های خود را پیدا کنید.
              </p>
              <p className="leading-relaxed">
                به عنوان کوچ شما، من یک فضای امن و بدون قضاوت ایجاد می‌کنم که در آن می‌توانید چالش‌ها را بررسی کنید،
                فرصت‌ها را شناسایی کنید، و استراتژی‌های عملی برای تغییر معنادار ایجاد کنید.
              </p>
              <p className="leading-relaxed">
                از طریق گوش دادن فعال، پرسش‌های قدرتمند و راهنمایی استراتژیک، ما با هم کار خواهیم کرد
                تا موانع را برطرف کنیم و پیشرفت شما را به سمت زندگی که تصور می‌کنید تسریع کنیم.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="mb-4 text-gray-900">تفاوت کوچینگ</h4>
              <div className="space-y-3">
                {differences.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index === 0 ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div>
                      <p className={index === 0 ? 'text-blue-700' : 'text-gray-600'}>
                        <strong>{item.label}:</strong> {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left: Benefits */}
          <div className="lg:order-first">
            <h3 className="mb-6 text-gray-800">مزایایی که تجربه خواهید کرد</h3>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
