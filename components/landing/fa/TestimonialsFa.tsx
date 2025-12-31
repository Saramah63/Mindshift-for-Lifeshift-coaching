import { Star, Quote } from 'lucide-react';

export function TestimonialsFa() {
  const testimonials = [
    {
      name: "فاطمه الرشید",
      role: "مدیر بازاریابی، دبی",
      image: "👩‍💼",
      rating: 5,
      text: "به عنوان فردی از خاورمیانه که در یک شرکت بین‌المللی کار می‌کند، سارا چالش‌های منحصر به فرد من را درک کرد. او به من کمک کرد اعتماد به نفسم را در جلسات انگلیسی‌زبان بسازم و تفاوت‌های فرهنگی را مدیریت کنم. رویکرد دو زبانه او تفاوت بزرگی ایجاد کرد.",
      result: "ارتقا به مدیر منطقه‌ای"
    },
    {
      name: "احمد حسن",
      role: "کارآفرین فناوری، مصر",
      image: "👨‍💻",
      rating: 5,
      text: "کوچینگ سارا به من کمک کرد استارتاپم را با موفقیت راه‌اندازی کنم در حالی که با سرمایه‌گذاران بین‌المللی کار می‌کردم. درک او از فرهنگ کسب‌وکار شرقی و غربی بسیار ارزشمند بود. می‌توانستم راحت خودم را بیان کنم.",
      result: "جذب سرمایه ۵۰۰ هزار دلاری"
    },
    {
      name: "لیلا منصور",
      role: "متخصص بهداشت و درمان، انگلستان",
      image: "👩‍⚕️",
      rating: 5,
      text: "نقل مکان به انگلستان چالش‌برانگیز بود. سارا به من کمک کرد از نظر حرفه‌ای سازگار شوم در حالی که به ارزش‌هایم وفادار بمانم. توانایی تعویض بین انگلیسی و فارسی در صورت نیاز، جلسات ما را بسیار مؤثرتر کرد.",
      result: "تعادل کار و زندگی و ارتقا"
    },
    {
      name: "عمر السید",
      role: "مدیر فروش، عربستان سعودی",
      image: "👨‍💼",
      rating: 5,
      text: "تخصص کوچینگ میان‌فرهنگی سارا استثنایی است. او به من کمک کرد یک تیم متنوع را در کشورها و فرهنگ‌های مختلف رهبری کنم. بینش‌های او در مورد سبک‌های ارتباطی و حساسیت فرهنگی، رویکرد رهبری من را متحول کرد.",
      result: "۱۵۰٪ افزایش عملکرد تیم"
    },
    {
      name: "یاسمین کریمی",
      role: "مهندس نرم‌افزار، کانادا",
      image: "👩‍💻",
      rating: 5,
      text: "به عنوان یک مهاجر در فناوری، با سندرم کلاهبردار و موانع زبانی دست و پنجه نرم می‌کردم. سارا به من کمک کرد اعتماد به نفس در توانایی‌هایم بسازم و ارتباطات حرفه‌ای‌ام را بهبود دهم. او دقیقاً متوجه شد چه چیزی را تجربه می‌کنم.",
      result: "ارتقا به مهندس ارشد"
    },
    {
      name: "رضا مرادی",
      role: "مشاور کسب‌وکار، آمریکا",
      image: "👨‍💼",
      rating: 5,
      text: "سارا به من کمک کرد از شغل شرکتی به راه‌اندازی کسب‌وکار مشاوره‌ای خودم تغییر مسیر دهم. درک او از تجربه مهاجرت و چالش‌های حرفه‌ای در کشور جدید دقیقاً چیزی بود که نیاز داشتم. قویاً توصیه می‌کنم!",
      result: "راه‌اندازی موفق کسب‌وکار"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">داستان‌های موفقیت مشتریان</span>
          </div>
          <h2 className="mb-4 text-gray-900">نظرات مشتریان من</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تحولات واقعی از افراد واقعی که در رشد خود سرمایه‌گذاری کرده‌اند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-green-700">
                  <strong>نتیجه:</strong> {testimonial.result}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 mb-16 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-100 mb-2">🌟</div>
              <p className="text-gray-100">کوچینگ تحول‌آفرین</p>
            </div>
            <div>
              <div className="text-4xl text-blue-100 mb-2">🌍</div>
              <p className="text-gray-100">دسترسی جهانی</p>
            </div>
            <div>
              <div className="text-4xl text-blue-100 mb-2">💬</div>
              <p className="text-gray-100">پشتیبانی دوزبانه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}