type LogoMarkProps = {
  dark?: boolean;
};

export function LogoMark({ dark = false }: LogoMarkProps) {
  return (
    <div
      className={`relative flex h-14 w-14 items-center justify-center rounded-[1.4rem] border ${
        dark
          ? "border-sand/20 bg-white/5"
          : "border-bark/10 bg-gradient-to-br from-[#f3e3c7] to-[#dbc3a1]"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-3 rounded-[1rem] border ${
          dark ? "border-sand/30" : "border-bark/15"
        }`}
      />
      <span
        className={`font-display text-xl tracking-[0.2em] ${
          dark ? "text-sand" : "text-espresso"
        }`}
      >
        SC
      </span>
    </div>
  );
}
