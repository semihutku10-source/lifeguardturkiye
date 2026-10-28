import React from 'react';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'nav';
  showAccreditationBadges?: boolean;
  light?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  imageClassName = '',
  size = 'md',
  showAccreditationBadges = false,
  light = false,
}) => {
  const heightClass = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-14 sm:h-16 lg:h-20',
    xl: 'h-16 sm:h-20 lg:h-24',
    nav: 'h-12 sm:h-14 lg:h-16 xl:h-[68px]',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Lifeguard Türkiye Logo Image from User */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          light ? 'bg-white px-3 py-1.5 rounded-xl shadow-sm' : ''
        }`}
      >
        <img
          src="/assets/aistudio/Ads_z_Tasar_m__2__1a0b90b3.png"
          alt="Lifeguard Türkiye"
          className={`${heightClass} ${imageClassName} w-auto object-contain select-none`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Optional Federation Badges Lockup */}
      {showAccreditationBadges && (
        <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-200">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">TSSF</span>
            <span>·</span>
            <span className="font-semibold text-slate-700">ILS</span>
            <span>·</span>
            <span>e-Devlet</span>
          </div>
        </div>
      )}
    </div>
  );
};
