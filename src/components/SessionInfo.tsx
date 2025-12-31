import { Calendar, Clock, Video, FileText } from 'lucide-react';

export function SessionInfo() {
  const sessionDetails = [
    {
      icon: Clock,
      title: "Session Duration",
      description: "Each coaching session lasts 60 minutes, giving us ample time to dive deep into your goals and challenges"
    },
    {
      icon: Calendar,
      title: "Frequency",
      description: "Most clients benefit from bi-weekly or weekly sessions, though we can customize the schedule to fit your needs"
    },
    {
      icon: Video,
      title: "Format",
      description: "Sessions can be conducted via video call, phone, or in-person, depending on your preference and location"
    },
    {
      icon: FileText,
      title: "Between Sessions",
      description: "You'll receive action items, reflections, and resources to support your progress between our meetings"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-center mb-6 text-blue-700">About Our Coaching Sessions</h2>
      
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Our coaching sessions are designed to be transformative, focused, and tailored to your unique journey. 
        Here's what you can expect:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {sessionDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">{detail.title}</h4>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
        <h4 className="mb-3 text-gray-900">What We'll Cover in Each Session:</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Review progress and celebrate wins since our last meeting</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Explore current challenges and opportunities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Identify insights and breakthrough moments</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Create specific, actionable steps forward</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Establish accountability for the next session</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
