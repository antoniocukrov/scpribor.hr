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
    <div className="section-shell py-12 sm:py-16">
      <section className="panel px-8 py-12 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Proizvodi"
          title="Širok asortiman kože za poslovne, trgovačke i proizvodne potrebe"
          description="U ponudi imamo različite vrste kože za klijente koji traže pouzdanu nabavu, fleksibilnu suradnju i rješenja prilagođena konkretnoj namjeni."
        />
      </section>

      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="panel p-8 sm:p-10">
              <p className="eyebrow">Ponuda</p>
              <h2 className="mt-4 font-display text-3xl text-espresso">
                {category.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-bark">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="panel p-8 sm:p-10">
            <p className="eyebrow">Fleksibilnost</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Nabava prilagođena traženoj kvaliteti, količini i namjeni
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark">
              Budući da poslujemo sa širokim spektrom vrsta kože, naš pristup je
              usmjeren na pronalazak odgovarajućeg rješenja prema zahtjevima
              klijenta. Time omogućujemo jednostavniji proces nabave i veću
              sigurnost poslovne suradnje.
            </p>
          </article>
          <article className="rounded-[2rem] bg-espresso p-8 text-white shadow-glow sm:p-10">
            <p className="eyebrow text-sand">Upit</p>
            <h2 className="mt-4 font-display text-3xl">
              Tražite određenu vrstu kože?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Pošaljite nam upit i organizirat ćemo nabavu prema vašim tehničkim
              i poslovnim potrebama.
            </p>
            <NavLink
              to="/kontakt"
              className="mt-8 inline-flex rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-espresso hover:bg-[#e7d9bf]"
            >
              Pošaljite upit
            </NavLink>
          </article>
        </div>
      </section>
    </div>
  );
}
