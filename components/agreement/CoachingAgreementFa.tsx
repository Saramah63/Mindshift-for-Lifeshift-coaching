import { useState, useRef, useEffect } from 'react';
import { X, Download, CheckCircle, Languages } from 'lucide-react';

interface CoachingAgreementFaProps {
  onClose: () => void;
  language: 'en' | 'fa';
  onToggleLanguage: () => void;
}

export function CoachingAgreementFa({ onClose, language, onToggleLanguage }: CoachingAgreementFaProps) {
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
      alert('لطفاً همه فیلدهای الزامی را پر کنید و با شرایط موافقت کنید.');
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
          alert('لطفاً امضای خود را وارد کنید.');
          return;
        }
      }
    }

    setIsSigned(true);
  };

  const downloadPDF = () => {
    alert('در محیط تولید، این گزینه یک فایل PDF از قرارداد امضا شده تولید و دانلود می‌کند.');
  };

  if (isSigned) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="mb-4 text-gray-900">قرارداد با موفقیت امضا شد!</h2>
          <p className="text-lg text-gray-600 mb-8">
            متشکریم، {clientName}! قرارداد کوچینگ شما با موفقیت امضا و ثبت شد.
          </p>
          <div className="space-y-4">
            <button
              onClick={downloadPDF}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              دانلود کپی قرارداد
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">قرارداد خدمات کوچینگ مایند‌شیفت برای لایف‌شیفت</h1>
            <p className="text-gray-600">لطفاً قبل از شروع جلسات کوچینگ، این قرارداد را بررسی و امضا کنید</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onToggleLanguage}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="تغییر زبان"
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
            <h3 className="text-gray-900 mb-3">۱. خدمات ارائه شده</h3>
            <p className="text-gray-700 leading-relaxed">
              کوچ موافقت می‌کند خدمات کوچینگ حرفه‌ای را به مشتری ارائه دهد. این خدمات شامل جلسات کوچینگ یک‌به‌یک،
              پشتیبانی ایمیلی، منابع و ابزارها همانطور که در بسته انتخابی مشخص شده است، می‌باشد. کوچینگ یک فرآیند مشارکتی است
              که بر تعیین و دستیابی به اهداف شخصی یا حرفه‌ای تمرکز دارد.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۲. مسئولیت‌های مشتری</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              مشتری موافقت می‌کند که:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
              <li>به طور کامل و صادقانه در تمام جلسات کوچینگ شرکت کند</li>
              <li>اقدامات توافق شده بین جلسات را تکمیل کند</li>
              <li>به موقع برای جلسات برنامه‌ریزی شده حاضر شود</li>
              <li>برای لغو یا تغییر زمان، اطلاع ۲۴ ساعته ارائه دهد</li>
              <li>مسئولیت تصمیمات و اقدامات خود را بپذیرد</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۳. محرمانگی</h3>
            <p className="text-gray-700 leading-relaxed">
              تمام اطلاعات به اشتراک گذاشته شده در طول جلسات کوچینگ کاملاً محرمانه نگه داشته می‌شود، مگر در مواردی که
              افشای اطلاعات توسط قانون الزامی است یا مشتری خطری برای خود یا دیگران ایجاد کند. کوچ بدون رضایت کتبی صریح
              هیچ ��طلاعاتی از مشتری را به اشتراک نمی‌گذارد.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۴. سیاست لغو و تغییر زمان</h3>
            <p className="text-gray-700 leading-relaxed">
              جلساتی که با اطلاع کمتر از ۲۴ ساعت لغو شوند، به طور کامل محاسبه خواهند شد. جلساتی که با اطلاع ۲۴+ ساعت لغو شوند
              می‌توانند بدون هزینه اضافی تغییر زمان یابند. کوچ حق دارد جلسات را به دلیل شرایط اضطراری لغو یا تغییر زمان دهد
              و زمان‌های جایگزین ارائه خواهد داد.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۵. شرایط پرداخت</h3>
            <p className="text-gray-700 leading-relaxed">
              پرداخت در زمان رزرو برای جلسات تکی یا در ابتدای هر ماه/سه‌ماهه برای مشتریان بسته‌ای انجام می‌شود.
              روش‌های پرداخت قابل قبول شامل کارت اعتباری، انتقال بانکی و پی‌پال می‌باشد. جلسات استفاده نشده در بسته‌ها
              ظرف ۳۰ روز از خرید قابل بازپرداخت هستند.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۶. مرزهای حرفه‌ای</h3>
            <p className="text-gray-700 leading-relaxed">
              رابطه کوچینگ ماهیتی حرفه‌ای دارد. کوچینگ درمان، مشاوره یا مشاوره پزشکی نیست. اگر مشتری نیاز به مداخله
              درمانی یا پزشکی دارد، کوچ ارجاعات مناسب را ارائه خواهد داد. رابطه کوچ-مشتری صرفاً برای اهداف کوچینگ وجود دارد.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۷. محدودیت مسئولیت</h3>
            <p className="text-gray-700 leading-relaxed">
              مشتری تأیید می‌کند که کوچینگ یک فرآیند جامع است که ممکن است تمام جنبه‌های زندگی او را شامل شود. مشتری
              مسئولیت کامل تصمیمات و اقدامات خود را می‌پذیرد. کوچ مسئول هیچ نتیجه، تصمیم یا پیامد ناشی از رابطه کوچینگ نیست.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۸. خاتمه قرارداد</h3>
            <p className="text-gray-700 leading-relaxed">
              هر یک از طرفین می‌توانند این قرارداد را در هر زمان با اطلاع کتبی خاتمه دهند. پس از خاتمه، هر جلسه پیش‌پرداخت
              استفاده نشده بر اساس تناسب ظرف ۳۰ روز بازپرداخت خواهد شد.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 mb-3">۹. موافقت با شرایط</h3>
            <p className="text-gray-700 leading-relaxed">
              با امضای این قرارداد، مشتری تأیید می‌کند که تمام شرایط و ضوابط مشخص شده در این قرارداد خدمات کوچینگ را
              خوانده، درک کرده و با آنها موافق است.
            </p>
          </section>
        </div>

        {/* Signature Section */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                نام کامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="علی احمدی"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                آدرس ایمیل <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ali@example.com"
                required
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              تاریخ <span className="text-red-500">*</span>
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
              امضا <span className="text-red-500">*</span>
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
              پاک کردن امضا
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
              من تمام شرایط و ضوابط مشخص شده در این قرارداد خدمات کوچینگ را خوانده و با آن موافقم.
              من درک می‌کنم که کوچینگ درمان یا مشاوره پزشکی نیست و مسئولیت کامل تصمیمات و اقدامات خود را می‌پذیرم.
              <span className="text-red-500"> *</span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!clientName || !clientEmail || !agreedToTerms}
            >
              امضای قرارداد
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}