import { ArrowRight, Calendar } from 'lucide-react';

export function CTA() {
  const calendlyLink = "https://calendly.com/saramahmodi/free-consultation";

  const handleBooking = () => {
    window.open(calendlyLink, '_blank', 'width=800,height=800');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="mb-6 text-white">Ready to Transform Your Life?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Take the first step toward clarity, growth, and success. 
          Schedule your free consultation today and discover how coaching can help you achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleBooking}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5" />
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:saramah63@gmail.com"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl mb-2">🌍</p>
            <p className="text-blue-100">Worldwide Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl mb-2">💬</p>
            <p className="text-blue-100">English & فارسی</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-3xl mb-2">✨</p>
            <p className="text-blue-100">Transformative Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}