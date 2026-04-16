type LogoMarkProps = {
  dark?: boolean;
  className?: string;
};

export function LogoMark({ dark = false, className = "" }: LogoMarkProps) {
  const stroke = dark ? "#d9c7a8" : "#5a4330";
  const fill = dark ? "rgba(255,255,255,0.04)" : "url(#scMarkFill)";
  const text = dark ? "#f6f0e6" : "#1a1411";
  const accent = dark ? "rgba(217,199,168,0.4)" : "rgba(156,107,63,0.35)";

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="SC monogram"
      className={className}
    >
      <defs>
        <linearGradient id="scMarkFill" x1="18" y1="14" x2="98" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3e3c7" />
          <stop offset="1" stopColor="#dbc3a1" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="104" height="104" rx="28" fill={fill} />
      <rect
        x="17"
        y="17"
        width="86"
        height="86"
        rx="22"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <path
        d="M24 95c12-13 22-20 32-20 12 0 18 10 29 10 4 0 9-1 15-5"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="31"
        y="73"
        fill={text}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="56"
        fontWeight="700"
        letterSpacing="-4"
      >
        S
      </text>
      <text
        x="57"
        y="71"
        fill={text}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="-3"
      >
        C
      </text>
      <path
        d="M25 28h19"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M76 92h19"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
