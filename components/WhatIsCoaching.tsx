import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export function WhatIsCoaching() {
  const benefits = [
    {
      icon: Target,
      title: "Goal Clarity",
      description: "Define and refine your personal and professional objectives"
    },
    {
      icon: Lightbulb,
      title: "Insight & Awareness",
      description: "Discover new perspectives and unlock your potential"
    },
    {
      icon: TrendingUp,
      title: "Accountability",
      description: "Stay committed to your growth with structured support"
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Build confidence and take ownership of your journey"
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-center mb-6 text-blue-700">What Is Coaching?</h2>
      
      <div className="prose max-w-none mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Coaching is a collaborative partnership focused on helping you achieve your goals and unlock your full potential. 
          Unlike therapy, which often focuses on healing past wounds, or consulting, where experts provide solutions, 
          coaching empowers <strong>you</strong> to find your own answers through powerful questions, active listening, and structured support.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          As your coach, I provide a safe, non-judgmental space where you can explore challenges, identify opportunities, 
          and create actionable strategies for meaningful change in your life or career.
        </p>
      </div>

      <h3 className="text-center mb-8 text-gray-800">Benefits of Coaching</h3>
      
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
