import { Calendar, Clock, Video, FileText, MessageCircle, BarChart } from 'lucide-react';

export function HowItWorks() {
  const process = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We'll discuss your goals, challenges, and determine if we're a good fit",
      icon: MessageCircle
    },
    {
      number: "02",
      title: "Choose Your Package",
      description: "Select the coaching package that aligns with your commitment level",
      icon: Calendar
    },
    {
      number: "03",
      title: "Start Your Sessions",
      description: "Begin your transformation with regular 60-minute coaching sessions",
      icon: Video
    },
    {
      number: "04",
      title: "Track Your Progress",
      description: "Celebrate wins, adjust strategies, and achieve your goals",
      icon: BarChart
    }
  ];

  const sessionDetails = [
    {
      icon: Clock,
      title: "60-Minute Sessions",
      description: "Ample time to dive deep into your goals and challenges"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Weekly or bi-weekly sessions that fit your lifestyle"
    },
    {
      icon: Video,
      title: "Multiple Formats",
      description: "Video call, phone, or in-person based on your preference"
    },
    {
      icon: FileText,
      title: "Ongoing Support",
      description: "Action items, resources, and email support between sessions"
    }
  ];

  return (
    <section id="sessions" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, proven process designed to create lasting transformation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl text-blue-100">{step.number}</span>
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {/* Connecting line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Session Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-center mb-4 text-gray-900">What to Expect in Each Session</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our sessions are structured yet flexible, always tailored to your unique needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sessionDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2 text-gray-900">{detail.title}</h4>
                  <p className="text-sm text-gray-600">{detail.description}</p>
                </div>
              );
            })}
          </div>

          {/* Session Structure */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
            <h4 className="mb-6 text-gray-900 text-center">Typical Session Flow</h4>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Check-In", time: "5 min", desc: "Review progress & celebrate wins" },
                { title: "Explore", time: "15 min", desc: "Dive into current challenges" },
                { title: "Discover", time: "20 min", desc: "Uncover insights & breakthrough moments" },
                { title: "Action Plan", time: "15 min", desc: "Create specific next steps" },
                { title: "Commit", time: "5 min", desc: "Set accountability for next session" }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-blue-700 mb-2">{phase.time}</div>
                  <h4 className="mb-2 text-gray-900 text-sm">{phase.title}</h4>
                  <p className="text-xs text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
