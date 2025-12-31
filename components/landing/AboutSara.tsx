import { Heart, Sparkles, Target, Users } from 'lucide-react';
import saraPhoto from 'figma:asset/9649b8219f108710d6e166dbefb4234580059982.png';

export function AboutSara() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">About Your Coach</span>
          </div>
          <h2 className="mb-4 text-gray-900">Meet Sara</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your partner in transformation and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Photo */}
          <div className="relative">
            {/* Your Professional Photo */}
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src={saraPhoto}
                alt="Sara Mahmodi - Professional Life & Mindset Coach"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-3">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform -rotate-3">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            
            {/* Professional badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Certified</p>
                  <p className="text-sm text-gray-900">Life Coach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div>
            <div className="mb-8">
              <h3 className="mb-6 text-gray-900">My Story</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm Sara, a mindset and life transformation coach, passionate about personal growth. 
                  <span className="text-blue-700 font-medium"> My own journey of transformation inspires me to guide others on theirs.</span>
                </p>
                <p>
                  I help you uncover your values, talents, and inner strengths. I believe that shifting your mind transforms your life. 
                  Together, we'll begin from within, shift your mindset, and build a life aligned with your true desires.
                </p>
                <p className="text-blue-700 font-medium">
                  I am here to guide you in discovering and creating the best version of yourself.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <Heart className="w-8 h-8 text-pink-500 mb-3" />
                <h4 className="text-gray-900 mb-2">Passionate</h4>
                <p className="text-sm text-gray-600">About your personal growth and transformation</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                <Target className="w-8 h-8 text-indigo-500 mb-3" />
                <h4 className="text-gray-900 mb-2">Focused</h4>
                <p className="text-sm text-gray-600">On uncovering your values and strengths</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <Sparkles className="w-8 h-8 text-purple-500 mb-3" />
                <h4 className="text-gray-900 mb-2">Transformative</h4>
                <p className="text-sm text-gray-600">Mindshift leads to lasting lifeshift</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <Users className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="text-gray-900 mb-2">Supportive</h4>
                <p className="text-sm text-gray-600">Guiding you every step of the way</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-4">My Coaching Philosophy</h3>
            <p className="text-xl text-blue-700 italic max-w-3xl mx-auto">
              "Shifting your mind transforms your life"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h4 className="text-gray-900 mb-2">Begin Within</h4>
              <p className="text-gray-600">
                Real transformation starts from the inside. We explore your values, beliefs, and inner strengths first.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h4 className="text-gray-900 mb-2">Shift Your Mindset</h4>
              <p className="text-gray-600">
                Change limiting beliefs and thought patterns that hold you back. Create new empowering perspectives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h4 className="text-gray-900 mb-2">Transform Your Life</h4>
              <p className="text-gray-600">
                Build a life aligned with your true desires. Become the best version of yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to start your transformation journey?
          </p>
          <a
            href="#booking"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}