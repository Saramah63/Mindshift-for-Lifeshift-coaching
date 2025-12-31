import { Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="mb-4 text-white">Ready to Begin?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm excited to support you on your journey. Reach out to schedule your first session 
            or if you have any questions about coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <Mail className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">Email</span>
            <span className="text-white">coach@example.com</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <Phone className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">Phone</span>
            <span className="text-white">(555) 123-4567</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
            <MessageCircle className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm text-gray-400 mb-1">Schedule</span>
            <span className="text-white">Book a free consultation</span>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
          <p>© 2025 Your Coaching Business. All rights reserved.</p>
          <p className="mt-2">Transforming lives, one conversation at a time.</p>
        </div>
      </div>
    </footer>
  );
}
