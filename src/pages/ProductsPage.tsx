import { NavLink } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const categories = [
  {
    title: "Prirodna koža",
    description:
      "Materijali za različite vrste poslovne i proizvodne primjene, s naglaskom na kvalitetu i pouzdanost."
  },
  {
    title: "Obrađena koža",
    description:
      "Rješenja prilagođena traženim karakteristikama, namjeni i poslovnim zahtjevima partnera."
  },
  {
    title: "Tehnička i specijalna koža",
    description:
      "Odgovarajuća opcija za specifične projekte, narudžbe i proizvodne procese."
  },
  {
    title: "Nabava prema zahtjevu",
    description:
      "Ako tražite određenu vrstu kože, pomažemo u pronalasku odgovarajućeg materijala i organizaciji dobave."
  }
];

export function ProductsPage() {
  return (
    <div className="section-shell py-8 sm:py-12 lg:py-16">
      <section className="panel px-5 py-8 sm:px-8 sm:py-12 lg:px-14">
        <SectionHeading
          eyebrow="Proizvodi"
          title="Širok asortiman kože za poslovne, trgovačke i proizvodne potrebe"
          description="U ponudi imamo različite vrste kože za klijente koji traže pouzdanu nabavu, fleksibilnu suradnju i rješenja prilagođena konkretnoj namjeni."
        />
      </section>

      <section className="py-14 sm:py-16">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="panel p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">Ponuda</p>
              <h2 className="mt-4 font-display text-[1.85rem] text-espresso sm:text-3xl">
                {category.title}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="panel p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Fleksibilnost</p>
            <h2 className="mt-4 font-display text-[1.9rem] text-espresso sm:text-4xl">
              Nabava prilagođena traženoj kvaliteti, količini i namjeni
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Budući da poslujemo sa širokim spektrom vrsta kože, naš pristup je
              usmjeren na pronalazak odgovarajućeg rješenja prema zahtjevima
              klijenta. Time omogućujemo jednostavniji proces nabave i veću
              sigurnost poslovne suradnje.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-espresso p-6 text-white shadow-glow sm:rounded-[2rem] sm:p-8 lg:p-10">
            <p className="eyebrow text-sand">Upit</p>
            <h2 className="mt-4 font-display text-[1.9rem] sm:text-3xl">
              Tražite određenu vrstu kože?
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
              Pošaljite nam upit i organizirat ćemo nabavu prema vašim tehničkim
              i poslovnim potrebama.
            </p>
            <NavLink
              to="/kontakt"
              className="mt-7 inline-flex rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-[#e7d9bf] sm:mt-8"
            >
              Pošaljite upit
            </NavLink>
          </article>
        </div>
      </section>
    </div>
  );
}
