import { Sparkles } from 'lucide-react';

export function HeaderFa() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-12 h-12" />
        </div>
        <h1 className="mb-4">به سفر کوچینگ خود خوش آمدید</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          ما از همراهی شما در مسیر رشد، وضوح و موفقیت بسیار خوشحالیم
        </p>
      </div>
    </header>
  );
}
