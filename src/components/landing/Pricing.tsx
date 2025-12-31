import { Check, Star } from 'lucide-react';

export function Pricing() {
  const packages = [
    {
      name: "Single Session",
      price: "$150",
      period: "per session",
      description: "Perfect for those wanting to try coaching or needing occasional support",
      features: [
        "60-minute coaching session",
        "Pre-session preparation form",
        "Post-session summary",
        "Email support between sessions"
      ],
      highlighted: false,
      badge: null
    },
    {
      name: "Monthly Package",
      price: "$500",
      period: "per month",
      description: "Most popular choice for consistent growth and transformation",
      features: [
        "4 coaching sessions (60 min each)",
        "Pre-session preparation forms",
        "Detailed progress tracking",
        "Priority email support",
        "Custom resources & tools",
        "15% savings vs single sessions"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Quarterly Package",
      price: "$1,350",
      period: "for 3 months",
      description: "Comprehensive support for deep, lasting transformation",
      features: [
        "12 coaching sessions (60 min each)",
        "Initial goal-setting intensive",
        "Mid-point progress review",
        "Priority scheduling",
        "Unlimited email support",
        "Custom action plans & resources",
        "25% savings vs single sessions"
      ],
      highlighted: false,
      badge: "Best Value"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Investment in Your Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the coaching package that best fits your goals and commitment level. 
            All packages include the same high-quality coaching experience.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105 border-4 border-blue-300'
                  : 'bg-white shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {pkg.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`mb-3 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-5xl ${pkg.highlighted ? 'text-white' : 'text-blue-700'}`}>
                    {pkg.price}
                  </span>
                </div>
                <p className={`text-sm ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.period}
                </p>
              </div>

              <p className={`text-center mb-8 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.highlighted ? 'text-blue-200' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm ${pkg.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg transition-all transform hover:scale-105 ${
                  pkg.highlighted
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8">
          <h3 className="text-center mb-6 text-gray-900">Flexible Policies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
            <div className="text-center">
              <p className="mb-2"><strong>Payment Methods</strong></p>
              <p className="text-sm">Credit card, bank transfer, or PayPal</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>Cancellation</strong></p>
              <p className="text-sm">24-hour notice for rescheduling</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>Refund Policy</strong></p>
              <p className="text-sm">Unused sessions refundable within 30 days</p>
            </div>
            <div className="text-center">
              <p className="mb-2"><strong>Sliding Scale</strong></p>
              <p className="text-sm">Limited spots for financial constraints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
