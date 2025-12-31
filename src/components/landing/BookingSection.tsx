import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

export function BookingSection() {
  // Replace this with your actual Calendly link once you create it
  const calendlyLink = "https://calendly.com/saramahmodi/free-consultation";

  const handleBooking = () => {
    // Open Calendly in a popup (cleaner UX)
    window.open(calendlyLink, '_blank', 'width=800,height=800');
  };

  const benefits = [
    "100% Free - No obligation",
    "30-minute discovery call",
    "Discuss your goals & challenges",
    "See if we're a good fit",
    "Get clarity on next steps"
  ];

  return (
    <section id="booking" className="py-24 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Free Consultation Available</span>
          </div>
          <h2 className="mb-4 text-gray-900">Book Your Free Discovery Call</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's explore how coaching can help you achieve your goals. No pressure, just a friendly conversation.
          </p>
        </div>

        {/* Main Booking Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Info */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <h3 className="mb-6 text-white">What to Expect:</h3>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 pt-6 border-t border-blue-400">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Duration: 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5" />
                  <span>Format: Video call (Zoom)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>Available: Mon-Fri, flexible hours</span>
                </div>
              </div>
            </div>

            {/* Right Side - Booking CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="mb-3 text-gray-900">Choose Your Time</h3>
                <p className="text-gray-600 mb-6">
                  Pick a time that works best for you from my available slots
                </p>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg mb-4"
              >
                <Calendar className="w-6 h-6 inline mr-2" />
                Book Free Consultation Now
              </button>

              <p className="text-sm text-gray-500 text-center">
                📧 Prefer email? Contact me at{' '}
                <a href="mailto:saramah63@gmail.com" className="text-blue-600 hover:underline">
                  saramah63@gmail.com
                </a>
              </p>

              <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <p className="text-sm text-center text-green-700">
                  <strong>🎁 Special Offer:</strong> Book this week and receive a free Goal-Setting Workbook!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by clients worldwide</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">⭐ 4.9/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">🔒 100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-700 mb-1">💬 24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}