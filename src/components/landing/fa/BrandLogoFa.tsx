import { Sparkles } from 'lucide-react';

interface BrandLogoFaProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogoFa({ variant = 'default', size = 'md' }: BrandLogoFaProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = variant === 'white' 
    ? 'text-white' 
    : 'text-blue-700';

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      <span className={`font-semibold ${colorClasses}`}>
        لومیناری
      </span>
      <div className={`${variant === 'white' ? 'bg-white/20' : 'bg-blue-100'} p-2 rounded-lg`}>
        <Sparkles className={`${iconSizes[size]} ${colorClasses}`} />
      </div>
    </div>
  );
}
