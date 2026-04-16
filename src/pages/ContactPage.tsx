import { SectionHeading } from "../components/SectionHeading";

export function ContactPage() {
  return (
    <div className="section-shell py-12 sm:py-16">
      <section className="panel px-8 py-12 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Kontakt"
          title="Javite nam se za dostupnost, nabavu, otpremu i poslovnu suradnju"
          description="Za sve informacije o vrstama kože, mogućnostima suradnje i poslovnim upitima, slobodno nas kontaktirajte putem obrasca ili direktno."
        />
      </section>

      <section className="py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] bg-espresso p-8 text-white shadow-glow sm:p-10">
            <p className="eyebrow text-sand">Kontakt podaci</p>
            <h2 className="mt-4 font-display text-3xl">SCPRIBOR</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/80">
                  Adresa
                </p>
                <p>Ulica Sv. Petka 4, 31000 Osijek</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/80">
                  Email
                </p>
                <a href="mailto:info@scpribor.hr" className="hover:text-sand">
                  info@scpribor.hr
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/80">
                  Telefon
                </p>
                <a href="tel:+38598798153" className="hover:text-sand">
                  +385 98798153
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/80">
                  Kvaliteta
                </p>
                <p>Certifikat o kakvoći, Euroinspekt Zagreb</p>
              </div>
            </div>
          </article>

          <article className="panel p-8 sm:p-10">
            <h2 className="font-display text-3xl text-espresso">Pošaljite upit</h2>
            <form
              className="mt-8 grid gap-5"
              action="mailto:info@scpribor.hr"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-5 sm:grid-cols-2">
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
              <div className="grid gap-5 sm:grid-cols-2">
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
                className="inline-flex w-fit items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand hover:bg-charcoal"
              >
                Pošalji upit
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="panel overflow-hidden">
          <iframe
            title="Lokacija SCPRIBOR"
            src="https://www.google.com/maps?q=Ulica%20Sv.%20Petka%204%2C%2031000%20Osijek&z=15&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
