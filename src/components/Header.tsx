import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-12 h-12" />
        </div>
        <h1 className="mb-4">Welcome to Your Coaching Journey</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          We're excited to partner with you on your path to growth, clarity, and success
        </p>
      </div>
    </header>
  );
}
