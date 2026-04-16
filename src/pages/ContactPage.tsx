import { SectionHeading } from "../components/SectionHeading";

export function ContactPage() {
  return (
    <div className="section-shell py-8 sm:py-12 lg:py-16">
      <section className="panel px-5 py-8 sm:px-8 sm:py-12 lg:px-14">
        <SectionHeading
          eyebrow="Kontakt"
          title="Javite nam se za dostupnost, nabavu, otpremu i poslovnu suradnju"
          description="Za sve informacije o vrstama kože, mogućnostima suradnje i poslovnim upitima, slobodno nas kontaktirajte putem obrasca ili direktno."
        />
      </section>

      <section className="py-14 sm:py-16">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.75rem] bg-espresso p-6 text-white shadow-glow sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="eyebrow text-sand">Kontakt podaci</p>
            <h2 className="mt-4 font-display text-[1.9rem] sm:text-3xl">SCPRIBOR</h2>
            <div className="mt-6 space-y-5 text-[0.98rem] leading-7 text-white/80 sm:mt-8 sm:space-y-6 sm:text-base sm:leading-8">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sand/80 sm:text-xs">
                  Adresa
                </p>
                <p>Ulica Sv. Petka 4, 31000 Osijek</p>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sand/80 sm:text-xs">
                  Email
                </p>
                <a href="mailto:info@scpribor.hr" className="hover:text-sand">
                  info@scpribor.hr
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sand/80 sm:text-xs">
                  Telefon
                </p>
                <a href="tel:+38598798153" className="hover:text-sand">
                  +385 98798153
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sand/80 sm:text-xs">
                  Kvaliteta
                </p>
                <p>Certifikat o kakvoći, Euroinspekt Zagreb</p>
              </div>
            </div>
          </article>

          <article className="panel p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-[1.9rem] text-espresso sm:text-3xl">
              Pošaljite upit
            </h2>
            <form
              className="mt-6 grid gap-4 sm:mt-8 sm:gap-5"
              action="mailto:info@scpribor.hr"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="grid gap-2 text-sm font-medium text-bark">
                  Ime i prezime
                  <input
                    type="text"
                    name="ime"
                    placeholder="Vaše ime"
                    className="rounded-2xl border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-bark">
                  Naziv firme
                  <input
                    type="text"
                    name="firma"
                    placeholder="Naziv firme"
                    className="rounded-2xl border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="grid gap-2 text-sm font-medium text-bark">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="vas@email.com"
                    className="rounded-2xl border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-bark">
                  Telefon
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="+385 ..."
                    className="rounded-2xl border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-bark">
                Predmet
                <input
                  type="text"
                  name="predmet"
                  placeholder="Upit o dostupnosti i nabavi kože"
                  className="rounded-2xl border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-bark">
                Poruka
                <textarea
                  rows={6}
                  name="poruka"
                  placeholder="Upišite detalje vašeg upita"
                  className="rounded-[1.5rem] border border-bark/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-ember"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-sand hover:bg-charcoal sm:w-fit"
              >
                Pošalji upit
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="panel overflow-hidden">
          <iframe
            title="Lokacija SCPRIBOR"
            src="https://www.google.com/maps?q=Ulica%20Sv.%20Petka%204%2C%2031000%20Osijek&z=15&output=embed"
            className="h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
