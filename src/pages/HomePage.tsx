import { NavLink } from "react-router-dom";
import { RemoteImage } from "../components/RemoteImage";
import { SectionHeading } from "../components/SectionHeading";
import mixedColor from "../images/mixedColor.webp";
import mixedRoll from "../images/mixedRoll.webp";

const productCategories = [
  {
    title: "Sve vrste kože",
    description:
      "Široka ponuda različitih vrsta kože za poslovne, proizvodne i trgovačke potrebe."
  },
  {
    title: "Nabava po zahtjevu",
    description:
      "Pronalazimo rješenja prema traženoj kvaliteti, količini, namjeni i tržištu."
  },
  {
    title: "Regionalna distribucija",
    description:
      "Pouzdana suradnja s partnerima u Hrvatskoj, Sloveniji, Italiji, Mađarskoj, Bosni i Hercegovini i Srbiji."
  }
];

const advantages = [
  "Fokus na kvalitetu materijala i profesionalnu suradnju",
  "Brza organizacija nabave i otpreme kože",
  "Fleksibilan pristup poslovnim upitima i specifičnim zahtjevima",
  "Regionalna mreža partnera i stabilna distribucija"
];

const industries = [
  "Proizvodnja obuće",
  "Torbe i kožna galanterija",
  "Namještaj i interijeri",
  "Modna i zanatska proizvodnja"
];

export function HomePage() {
  return (
    <>
      <section className="section-shell pt-4 sm:pt-6">
        <div className="hero-overlay relative overflow-hidden rounded-[1.35rem] px-4 py-7 shadow-glow sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-hero-grid opacity-90" />
          <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <p className="eyebrow text-sand text-[0.86rem] font-extrabold tracking-[0.2em] sm:text-[1rem]">
                scpribor.hr
              </p>
              <h1 className="mt-3 font-display text-[2rem] leading-[1] text-white sm:mt-5 sm:text-5xl lg:text-6xl">
                Pouzdan partner za uvoz, izvoz i nabavu svih vrsta kože
              </h1>
              <p className="mt-4 max-w-2xl text-[0.92rem] leading-6 text-white/82 sm:mt-6 sm:text-xl sm:leading-8">
                SCPRIBOR pruža profesionalna rješenja za nabavu, distribuciju i
                otpremu kože na tržištima Hrvatske i šire regije.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-4">
                <NavLink
                  to="/proizvodi"
                  className="inline-flex items-center justify-center rounded-full bg-sand px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-[#e7d9bf] sm:px-6 sm:text-sm"
                >
                  Pogledajte proizvode
                </NavLink>
                <NavLink
                  to="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10 sm:px-6 sm:text-sm"
                >
                  Pošaljite upit
                </NavLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-none sm:max-w-md">
              <div className="absolute -left-3 top-6 h-20 w-20 rounded-full border border-sand/30 bg-sand/10 blur-xl sm:-left-6 sm:top-10 sm:h-28 sm:w-28" />
              <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/5 backdrop-blur sm:rounded-[2rem]">
                <div className="aspect-[5/4] overflow-hidden rounded-[0.95rem] sm:aspect-[4/5] sm:rounded-[1.5rem]">
                  <RemoteImage
                    src={mixedColor}
                    alt="Tekstura kvalitetne kože"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-18 lg:py-20">
        <SectionHeading
          eyebrow="Tko smo"
          title="Poslovna suradnja temeljena na kvaliteti, pouzdanosti i stabilnoj nabavi"
          description="SCPRIBOR se bavi uvozom, izvozom i nabavom svih vrsta kože za različite poslovne i proizvodne potrebe. Klijentima osiguravamo profesionalnu uslugu, fleksibilna rješenja i podršku u organizaciji isporuke."
        />
        <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {productCategories.map((item) => (
            <article key={item.title} className="panel p-5 sm:p-8">
              <h3 className="font-display text-[1.55rem] text-espresso sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-6 text-bark sm:mt-4 sm:text-base sm:leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-12 sm:pb-18 lg:pb-20">
        <div className="grid gap-3 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-5 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Prednosti"
              title="Zašto partneri biraju SCPRIBOR"
              description="Gradimo suradnju na jasnoj komunikaciji, profesionalnoj organizaciji nabave i pristupu usmjerenom na dugoročne odnose."
            />
            <div className="mt-5 grid gap-2.5 sm:mt-8 sm:gap-4">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-bark/10 bg-parchment/80 px-4 py-3 text-[0.82rem] leading-6 text-charcoal sm:rounded-[1.5rem] sm:px-5 sm:py-4 sm:text-sm sm:leading-7"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="min-h-[220px] sm:min-h-[320px]">
                <RemoteImage
                  src={mixedRoll}
                  alt="Detalj obrade kože"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 lg:p-10">
                <p className="eyebrow">Tržišta</p>
                <h2 className="mt-3 font-display text-[1.7rem] text-espresso sm:mt-4 sm:text-3xl">
                  Regionalna suradnja i pouzdana distribucija
                </h2>
                <p className="mt-3 text-[0.9rem] leading-6 text-bark sm:mt-4 sm:text-base sm:leading-8">
                  Poslujemo s partnerima na tržištima Hrvatske, Mađarske,
                  Slovenije, Italije, Bosne i Hercegovine te Srbije.
                </p>
                <div className="mt-5 grid gap-2.5 sm:mt-8 sm:gap-3">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-bark/10 px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-bark sm:py-3 sm:text-sm sm:tracking-[0.16em]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-12 sm:pb-18 lg:pb-20">
        <div className="panel grid gap-5 px-4 py-6 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow">Usluge</p>
            <h2 className="mt-3 font-display text-[1.72rem] text-espresso sm:mt-4 sm:text-4xl">
              Od upita do otpreme, svaki korak je organiziran i jasan
            </h2>
            <p className="mt-3 max-w-2xl text-[0.9rem] leading-6 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Uz prodaju i nabavu kože, pružamo podršku u planiranju isporuke,
              koordinaciji s partnerima i organizaciji otpreme prema traženim
              rokovima.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              "Uvoz kože",
              "Izvoz kože",
              "Nabava po zahtjevu",
              "Otprema i distribucija"
            ].map((service, index) => (
              <div
                key={service}
                className="relative overflow-hidden rounded-[1rem] border border-bark/10 bg-gradient-to-br from-white to-[#efe3d1] px-4 py-4 sm:rounded-[1.75rem] sm:px-7 sm:py-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 right-2 font-display text-[3.6rem] leading-none text-[#d9c4a6]/30 sm:-bottom-8 sm:right-4 sm:text-[7.5rem]"
                >
                  0{index + 1}
                </span>
                <h3 className="relative z-10 max-w-none pr-10 font-display text-[1.4rem] leading-[1.08] text-espresso sm:max-w-[12rem] sm:pr-0 sm:text-[2rem]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 sm:pb-20 lg:pb-24">
        <div className="overflow-hidden rounded-[1.35rem] bg-espresso px-4 py-6 text-white shadow-glow sm:rounded-[2.5rem] sm:px-8 sm:py-12 lg:px-14">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="eyebrow text-sand">Kvaliteta</p>
              <h2 className="mt-3 font-display text-[1.72rem] sm:mt-4 sm:text-4xl">
                Certifikat o kakvoći kao potvrda ozbiljnog poslovanja
              </h2>
              <p className="mt-3 max-w-2xl text-[0.9rem] leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
                SCPRIBOR posjeduje certifikat o kakvoći izdan od Euroinspekt
                Zagreb, što dodatno potvrđuje fokus na kvalitetu i pouzdanost.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-4">
              <NavLink
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sand px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-[#e7d9bf] sm:px-6 sm:text-sm"
              >
                Kontaktirajte nas
              </NavLink>
              <NavLink
                to="/o-nama"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10 sm:px-6 sm:text-sm"
              >
                Saznajte više
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
