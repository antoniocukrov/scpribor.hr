import { NavLink } from "react-router-dom";
import { RemoteImage } from "../components/RemoteImage";
import { SectionHeading } from "../components/SectionHeading";

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
        <div className="hero-overlay relative overflow-hidden rounded-[2rem] px-5 py-10 shadow-glow sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-hero-grid opacity-90" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <p className="eyebrow text-sand">scpribor.hr</p>
              <h1 className="mt-4 font-display text-[2.25rem] leading-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
                Pouzdan partner za uvoz, izvoz i nabavu svih vrsta kože
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-xl sm:leading-8">
                SCPRIBOR pruža profesionalna rješenja za nabavu, distribuciju i
                otpremu kože na tržištima Hrvatske i šire regije.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <NavLink
                  to="/proizvodi"
                  className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-[#e7d9bf]"
                >
                  Pogledajte proizvode
                </NavLink>
                <NavLink
                  to="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
                >
                  Pošaljite upit
                </NavLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div className="absolute -left-4 top-8 h-24 w-24 rounded-full border border-sand/30 bg-sand/10 blur-xl sm:-left-6 sm:top-10 sm:h-28 sm:w-28" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3 backdrop-blur sm:rounded-[2rem]">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] sm:rounded-[1.5rem]">
                  <RemoteImage
                    src="https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=1200&q=80"
                    alt="Tekstura kvalitetne kože"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18 lg:py-20">
        <SectionHeading
          eyebrow="Tko smo"
          title="Poslovna suradnja temeljena na kvaliteti, pouzdanosti i stabilnoj nabavi"
          description="SCPRIBOR se bavi uvozom, izvozom i nabavom svih vrsta kože za različite poslovne i proizvodne potrebe. Klijentima osiguravamo profesionalnu uslugu, fleksibilna rješenja i podršku u organizaciji isporuke."
        />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {productCategories.map((item) => (
            <article key={item.title} className="panel p-6 sm:p-8">
              <h3 className="font-display text-[1.75rem] text-espresso sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-bark sm:mt-4 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 sm:pb-18 lg:pb-20">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Prednosti"
              title="Zašto partneri biraju SCPRIBOR"
              description="Gradimo suradnju na jasnoj komunikaciji, profesionalnoj organizaciji nabave i pristupu usmjerenom na dugoročne odnose."
            />
            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-bark/10 bg-parchment/80 px-4 py-4 text-sm leading-7 text-charcoal sm:rounded-[1.5rem] sm:px-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="min-h-[260px] sm:min-h-[320px]">
                <RemoteImage
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Detalj obrade kože"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="eyebrow">Tržišta</p>
                <h2 className="mt-4 font-display text-[1.9rem] text-espresso sm:text-3xl">
                  Regionalna suradnja i pouzdana distribucija
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-bark sm:text-base sm:leading-8">
                  Poslujemo s partnerima na tržištima Hrvatske, Mađarske,
                  Slovenije, Italije, Bosne i Hercegovine te Srbije.
                </p>
                <div className="mt-6 grid gap-3 sm:mt-8">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-bark/10 px-4 py-3 text-sm uppercase tracking-[0.16em] text-bark"
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

      <section className="section-shell pb-14 sm:pb-18 lg:pb-20">
        <div className="panel grid gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow">Usluge</p>
            <h2 className="mt-4 font-display text-[1.95rem] text-espresso sm:text-4xl">
              Od upita do otpreme, svaki korak je organiziran i jasan
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Uz prodaju i nabavu kože, pružamo podršku u planiranju isporuke,
              koordinaciji s partnerima i organizaciji otpreme prema traženim
              rokovima.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Uvoz kože",
              "Izvoz kože",
              "Nabava po zahtjevu",
              "Otprema i distribucija"
            ].map((service, index) => (
              <div
                key={service}
                className="relative overflow-hidden rounded-[1.5rem] border border-bark/10 bg-gradient-to-br from-white to-[#efe3d1] px-5 py-6 sm:rounded-[1.75rem] sm:px-7 sm:py-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 right-2 font-display text-[4.75rem] leading-none text-[#d9c4a6]/35 sm:-bottom-8 sm:right-4 sm:text-[7.5rem]"
                >
                  0{index + 1}
                </span>
                <h3 className="relative z-10 max-w-[11rem] font-display text-[1.8rem] leading-[1.1] text-espresso sm:max-w-[12rem] sm:text-[2rem]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-espresso px-5 py-8 text-white shadow-glow sm:rounded-[2.5rem] sm:px-8 sm:py-12 lg:px-14">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="eyebrow text-sand">Kvaliteta</p>
              <h2 className="mt-4 font-display text-[1.95rem] sm:text-4xl">
                Certifikat o kakvoći kao potvrda ozbiljnog poslovanja
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
                SCPRIBOR posjeduje certifikat o kakvoći izdan od Euroinspekt
                Zagreb, što dodatno potvrđuje fokus na kvalitetu i pouzdanost.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <NavLink
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-[#e7d9bf]"
              >
                Kontaktirajte nas
              </NavLink>
              <NavLink
                to="/o-nama"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
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
