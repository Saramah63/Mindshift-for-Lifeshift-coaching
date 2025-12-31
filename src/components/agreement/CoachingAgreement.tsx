import { useState, useRef, useEffect } from 'react';
import { X, Download, CheckCircle, Languages } from 'lucide-react';

interface CoachingAgreementProps {
  onClose: () => void;
  language: 'en' | 'fa';
  onToggleLanguage: () => void;
}

export function CoachingAgreement({ onClose, language, onToggleLanguage }: CoachingAgreementProps) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleSubmit = () => {
    if (!clientName || !clientEmail || !agreedToTerms) {
      alert('Please fill in all required fields and agree to the terms.');
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let isEmpty = true;
        
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] !== 0) {
            isEmpty = false;
            break;
          }
        }

        if (isEmpty) {
          alert('Please provide your signature.');
          return;
        }
      }
    }

    setIsSigned(true);
  };

  const downloadPDF = () => {
    alert('In a production environment, this would generate and download a PDF of the signed agreement.');
  };

  if (isSigned) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="mb-4 text-gray-900">Agreement Signed Successfully!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you, {clientName}! Your coaching agreement has been successfully signed and recorded.
          </p>
          <div className="space-y-4">
            <button
              onClick={downloadPDF}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Agreement Copy
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Mindshift for Lifeshift Coaching Services Agreement</h1>
            <p className="text-gray-600">Please review and sign this agreement before starting your coaching sessions</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onToggleLanguage}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Switch Language"
            >
              <Languages className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Agreement Content */}
        <div className="bg-white shadow-lg p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <section>
            <h3 className="text-gray-900 mb-3">1. Services Provided</h3>
            <p className="text-gray-700 leading-relaxed">
              The Coach agrees to provide professional coaching services to the Client. These services include one-on-one coaching sessions, 
              email support, resources, and tools as outlined in the selected package. Coaching is a collaborative process that focuses on 
              setting and achieving personal or professional goals.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">2. Client Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              The Client agrees to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Participate fully and honestly in all coaching sessions</li>
              <li>Complete agreed-upon action items between sessions</li>
              <li>Arrive on time for scheduled sessions</li>
              <li>Provide 24-hour notice for cancellations or rescheduling</li>
              <li>Take responsibility for their own decisions and actions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">3. Confidentiality</h3>
            <p className="text-gray-700 leading-relaxed">
              All information shared during coaching sessions will be kept strictly confidential, except where disclosure is required by law 
              or where the Client poses a danger to themselves or others. The Coach will not share any client information without explicit 
              written consent.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">4. Cancellation and Rescheduling Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              Sessions cancelled with less than 24 hours notice will be charged in full. Sessions cancelled with 24+ hours notice can be 
              rescheduled at no additional charge. The Coach reserves the right to cancel or reschedule sessions due to emergency circumstances 
              and will provide alternative session times.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">5. Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              Payment is due at the time of booking for single sessions or at the beginning of each month/quarter for package clients. 
              Accepted payment methods include credit card, bank transfer, and PayPal. Unused sessions in package deals are refundable 
              within 30 days of purchase.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">6. Professional Boundaries</h3>
            <p className="text-gray-700 leading-relaxed">
              The coaching relationship is professional in nature. Coaching is not therapy, counseling, or medical advice. If the Client 
              requires therapeutic or medical intervention, the Coach will provide appropriate referrals. The Coach-Client relationship 
              exists solely for coaching purposes.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">7. Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              The Client acknowledges that coaching is a comprehensive process that may involve all areas of their life. The Client accepts 
              full responsibility for their decisions and actions. The Coach is not liable for any outcomes, decisions, or consequences 
              resulting from the coaching relationship.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">8. Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate this agreement at any time with written notice. Upon termination, any unused prepaid sessions 
              will be refunded on a prorated basis within 30 days.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">9. Agreement to Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              By signing this agreement, the Client acknowledges that they have read, understood, and agree to all terms and conditions 
              outlined in this Coaching Services Agreement.
            </p>
          </section>
        </div>

        {/* Signature Section */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Signature <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                className="w-full cursor-crosshair touch-none"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
            </div>
            <button
              onClick={clearSignature}
              className="mt-2 text-sm text-blue-600 hover:text-blue-700"
            >
              Clear Signature
            </button>
          </div>

          <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
            <input
              type="checkbox"
              id="agree"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I have read and agree to all terms and conditions outlined in this Coaching Services Agreement. 
              I understand that coaching is not therapy or medical advice, and I take full responsibility for 
              my decisions and actions. <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!clientName || !clientEmail || !agreedToTerms}
            >
              Sign Agreement
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}