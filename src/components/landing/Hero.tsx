import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Mindshift for Lifeshift - Transform Your Life</span>
            </div>
            
            <h1 className="mb-6 text-gray-900">
              Unlock Your Full Potential
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your mindset, transform your life. Professional multilingual coaching 
              for sustainable personal and career growth. Begin your journey from within.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl text-blue-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Clients Coached</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl text-blue-700 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl text-blue-700 mb-1">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl opacity-75">Your transformation starts here</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <p className="text-sm text-gray-600 mb-1">Client Success</p>
              <p className="text-2xl text-blue-700">⭐ 4.9/5</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <p className="text-sm text-gray-600 mb-1">Next Available</p>
              <p className="text-lg text-gray-900">This Week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}