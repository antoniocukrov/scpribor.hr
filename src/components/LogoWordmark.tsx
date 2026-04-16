type LogoWordmarkProps = {
  dark?: boolean;
  className?: string;
};

export function LogoWordmark({
  dark = false,
  className = ""
}: LogoWordmarkProps) {
  const primary = dark ? "#f6f0e6" : "#1a1411";
  const secondary = dark ? "rgba(217,199,168,0.9)" : "#9c6b3f";
  const line = dark ? "rgba(217,199,168,0.35)" : "rgba(90,67,48,0.22)";

  return (
    <svg
      viewBox="0 0 360 82"
      role="img"
      aria-label="SCPRIBOR"
      className={className}
    >
      <path
        d="M8 58c18-16 38-23 61-23 28 0 47 8 77 8 18 0 35-3 53-10"
        fill="none"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="8"
        y="46"
        fill={primary}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="43"
        fontWeight="700"
        letterSpacing="5.2"
      >
        SCPRIBOR
      </text>
      <text
        x="10"
        y="71"
        fill={secondary}
        fontFamily="'Trebuchet MS', 'Segoe UI', sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="5.1"
      >
        KOZA • UVOZ • IZVOZ
      </text>
      <path
        d="M262 58h88"
        fill="none"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
