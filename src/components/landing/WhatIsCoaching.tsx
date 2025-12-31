import { Target, Heart, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export function WhatIsCoaching() {
  const benefits = [
    {
      icon: Target,
      title: "Goal Clarity",
      description: "Define and refine your personal and professional objectives with precision"
    },
    {
      icon: Lightbulb,
      title: "Insight & Awareness",
      description: "Discover new perspectives and unlock hidden potential within yourself"
    },
    {
      icon: TrendingUp,
      title: "Accountability",
      description: "Stay committed to your growth with structured, consistent support"
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Build unshakeable confidence and take full ownership of your journey"
    }
  ];

  const differences = [
    { label: "Coaching", desc: "Future-focused, action-oriented, unlocks your answers" },
    { label: "Therapy", desc: "Past-focused, healing-oriented, clinical approach" },
    { label: "Consulting", desc: "Expert-driven, solution-oriented, tells you what to do" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">What Is Coaching?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Coaching is a transformative partnership that empowers you to achieve your goals 
            and unlock your full potential through powerful questions and structured support.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Explanation */}
          <div>
            <h3 className="mb-6 text-gray-800">Your Partner in Growth</h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Unlike therapy, which focuses on healing past wounds, or consulting, where experts 
                provide solutions, coaching empowers <strong>you</strong> to find your own answers.
              </p>
              <p className="leading-relaxed">
                As your coach, I create a safe, non-judgmental space where you can explore challenges, 
                identify opportunities, and develop actionable strategies for meaningful change.
              </p>
              <p className="leading-relaxed">
                Through active listening, powerful questioning, and strategic guidance, we'll work 
                together to remove obstacles and accelerate your progress toward the life you envision.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="mb-4 text-gray-900">How Coaching Differs</h4>
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

          {/* Right: Benefits */}
          <div>
            <h3 className="mb-6 text-gray-800">Benefits You'll Experience</h3>
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
