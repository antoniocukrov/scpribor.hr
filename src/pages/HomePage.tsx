import { NavLink } from "react-router-dom";
import { RemoteImage } from "../components/RemoteImage";
import { SectionHeading } from "../components/SectionHeading";

const productCategories = [
  {
    title: "Sve vrste koze",
    description:
      "Siroka ponuda razlicitih vrsta koze za poslovne, proizvodne i trgovacke potrebe."
  },
  {
    title: "Nabava po zahtjevu",
    description:
      "Pronalazimo rjesenja prema trazenoj kvaliteti, kolicini, namjeni i trzistu."
  },
  {
    title: "Regionalna distribucija",
    description:
      "Pouzdana suradnja s partnerima u Hrvatskoj, Sloveniji, Italiji, Madjarskoj, Bosni i Hercegovini i Srbiji."
  }
];

const advantages = [
  "Fokus na kvalitetu materijala i profesionalnu suradnju",
  "Brza organizacija nabave i otpreme koze",
  "Fleksibilan pristup poslovnim upitima i specificnim zahtjevima",
  "Regionalna mreza partnera i stabilna distribucija"
];

const industries = [
  "Proizvodnja obuce",
  "Torbe i kozna galanterija",
  "Namjestaj i interijeri",
  "Modna i zanatska proizvodnja"
];

export function HomePage() {
  return (
    <>
      <section className="section-shell pt-8 sm:pt-10">
        <div className="hero-overlay relative overflow-hidden rounded-[2.5rem] px-6 py-16 shadow-glow sm:px-10 lg:px-14 lg:py-20">
          <div className="absolute inset-0 bg-hero-grid opacity-90" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-sand">scpribor.hr</p>
              <h1 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Pouzdan partner za uvoz, izvoz i nabavu svih vrsta koze
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                SCPRIBOR pruza profesionalna rjesenja za nabavu, distribuciju i
                otpremu koze na trzistima Hrvatske i sire regije.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <NavLink
                  to="/proizvodi"
                  className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-espresso hover:bg-[#e7d9bf]"
                >
                  Pogledajte proizvode
                </NavLink>
                <NavLink
                  to="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
                >
                  Posaljite upit
                </NavLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full border border-sand/30 bg-sand/10 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <RemoteImage
                    src="https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=1200&q=80"
                    alt="Tekstura kvalitetne koze"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Tko smo"
          title="Poslovna suradnja temeljena na kvaliteti, pouzdanosti i stabilnoj nabavi"
          description="SCPRIBOR se bavi uvozom, izvozom i nabavom svih vrsta koze za razlicite poslovne i proizvodne potrebe. Klijentima osiguravamo profesionalnu uslugu, fleksibilna rjesenja i podrsku u organizaciji isporuke."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productCategories.map((item) => (
            <article key={item.title} className="panel p-8">
              <h3 className="font-display text-2xl text-espresso">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-bark">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="Prednosti"
              title="Zasto partneri biraju SCPRIBOR"
              description="Gradimo suradnju na jasnoj komunikaciji, profesionalnoj organizaciji nabave i pristupu usmjerenom na dugorocne odnose."
            />
            <div className="mt-8 grid gap-4">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-bark/10 bg-parchment/80 px-5 py-4 text-sm leading-7 text-charcoal"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="min-h-[320px]">
                <RemoteImage
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Detalj obrade koze"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
                <p className="eyebrow">Trzista</p>
                <h2 className="mt-4 font-display text-3xl text-espresso">
                  Regionalna suradnja i pouzdana distribucija
                </h2>
                <p className="mt-4 text-base leading-8 text-bark">
                  Poslujemo s partnerima na trzistima Hrvatske, Madjarske,
                  Slovenije, Italije, Bosne i Hercegovine te Srbije.
                </p>
                <div className="mt-8 grid gap-3">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-bark/10 px-4 py-3 text-sm uppercase tracking-[0.18em] text-bark"
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

      <section className="section-shell pb-20">
        <div className="panel grid gap-8 px-8 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Usluge</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Od upita do otpreme, svaki korak je organiziran i jasan
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark">
              Uz prodaju i nabavu koze, pruzamo podrsku u planiranju isporuke,
              koordinaciji s partnerima i organizaciji otpreme prema trazenim
              rokovima.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Uvoz koze",
              "Izvoz koze",
              "Nabava po zahtjevu",
              "Otprema i distribucija"
            ].map((service, index) => (
              <div
                key={service}
                className="rounded-[1.75rem] border border-bark/10 bg-gradient-to-br from-white to-[#efe3d1] p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-espresso">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-espresso px-8 py-12 text-white shadow-glow sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-sand">Kvaliteta</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Certifikat o kakvoci kao potvrda ozbiljnog poslovanja
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                SCPRIBOR posjeduje certifikat o kakvoci izdan od Euroinspekt
                Zagreb, sto dodatno potvrduje fokus na kvalitetu i pouzdanost.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-espresso hover:bg-[#e7d9bf]"
              >
                Kontaktirajte nas
              </NavLink>
              <NavLink
                to="/o-nama"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
              >
                Saznajte vise
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
