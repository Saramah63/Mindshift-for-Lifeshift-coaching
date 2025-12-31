import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Fatima Al-Rashid",
      role: "Marketing Manager, Dubai",
      image: "👩‍💼",
      rating: 5,
      text: "As someone from the Middle East working in an international company, Sara understood my unique challenges. She helped me build confidence in English-speaking meetings and navigate cultural differences. Her bilingual approach made all the difference.",
      result: "Promoted to Regional Director"
    },
    {
      name: "Ahmed Hassan",
      role: "Tech Entrepreneur, Egypt",
      image: "👨‍💻",
      rating: 5,
      text: "Sara's coaching helped me launch my startup successfully while working with international investors. Her understanding of both Eastern and Western business cultures was invaluable. I could express myself comfortably, knowing she understood my background.",
      result: "Secured $500K funding"
    },
    {
      name: "Layla Mansour",
      role: "Healthcare Professional, UK",
      image: "👩‍⚕️",
      rating: 5,
      text: "Moving to the UK was challenging. Sara helped me adapt professionally while staying true to my values. Being able to switch between English and Persian when needed made our sessions so much more effective. I finally found work-life balance.",
      result: "Achieved work-life balance & promotion"
    },
    {
      name: "Omar Al-Sayed",
      role: "Sales Director, Saudi Arabia",
      image: "👨‍💼",
      rating: 5,
      text: "Sara's cross-cultural coaching expertise is exceptional. She helped me lead a diverse team across different countries and cultures. Her insights on communication styles and cultural sensitivity transformed my leadership approach.",
      result: "150% increase in team performance"
    },
    {
      name: "Yasmin Karimi",
      role: "Software Engineer, Canada",
      image: "👩‍💻",
      rating: 5,
      text: "As an immigrant in tech, I struggled with imposter syndrome and language barriers. Sara helped me build confidence in my abilities and improve my professional communication. She understood exactly what I was going through.",
      result: "Senior Engineer promotion"
    },
    {
      name: "Reza Moradi",
      role: "Business Consultant, USA",
      image: "👨‍💼",
      rating: 5,
      text: "Sara helped me transition from a corporate job to running my own consulting business. Her understanding of the immigrant experience and professional challenges in a new country was exactly what I needed. Highly recommend!",
      result: "Successful business launch"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">Client Success Stories</span>
          </div>
          <h2 className="mb-4 text-gray-900">What My Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people who've invested in their growth
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3 shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-green-700">
                  <strong>Result:</strong> {testimonial.result}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 mb-16 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-100 mb-2">🌟</div>
              <p className="text-gray-100">Transformative Coaching</p>
            </div>
            <div>
              <div className="text-4xl text-blue-100 mb-2">🌍</div>
              <p className="text-gray-100">Global Reach</p>
            </div>
            <div>
              <div className="text-4xl text-blue-100 mb-2">💬</div>
              <p className="text-gray-100">Bilingual Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}