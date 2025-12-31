import { Check } from 'lucide-react';

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
      highlighted: false
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
      highlighted: true
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
      highlighted: false
    }
  ];

  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h2 className="mb-4 text-blue-700">Investment in Your Growth</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choose the coaching package that best fits your goals and commitment level. 
          All packages include the same high-quality coaching experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              pkg.highlighted
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl scale-105 border-4 border-blue-300'
                : 'bg-white shadow-lg border-2 border-gray-200'
            }`}
          >
            {pkg.highlighted && (
              <div className="text-center mb-4">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className={`mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <div className="mb-2">
                <span className={`text-4xl ${pkg.highlighted ? 'text-white' : 'text-blue-700'}`}>
                  {pkg.price}
                </span>
              </div>
              <p className={`text-sm ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {pkg.period}
              </p>
            </div>

            <p className={`text-center mb-6 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
              {pkg.description}
            </p>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    pkg.highlighted ? 'text-blue-200' : 'text-blue-600'
                  }`} />
                  <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg transition-colors ${
                pkg.highlighted
                  ? 'bg-white text-blue-700 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
        <h4 className="mb-3 text-gray-900 text-center">Payment & Policies</h4>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="mb-2"><strong>Payment Methods:</strong> Credit card, bank transfer, or PayPal</p>
            <p><strong>Cancellation Policy:</strong> 24-hour notice required for rescheduling</p>
          </div>
          <div>
            <p className="mb-2"><strong>Refund Policy:</strong> Unused sessions in packages are refundable within 30 days</p>
            <p><strong>Sliding Scale:</strong> Limited spots available for those with financial constraints</p>
          </div>
        </div>
      </div>
    </section>
  );
}
