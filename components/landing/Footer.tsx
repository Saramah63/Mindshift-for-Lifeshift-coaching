import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="mb-4 text-white">Mindshift for Lifeshift</h4>
            <p className="text-gray-400 text-sm mb-4">
              Transform your mindset, transform your life. Professional coaching for sustainable change.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Coaching</a></li>
              <li><a href="#sessions" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Life Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Group Coaching</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:saramah63@gmail.com" className="hover:text-white transition-colors">
                  saramah63@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/358417539326" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  +358 41 753 9326 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Virtual Sessions Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Mindshift for Lifeshift. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}