import { NavLink } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const categories = [
  {
    title: "Prirodna koza",
    description:
      "Materijali za razlicite vrste poslovne i proizvodne primjene, s naglaskom na kvalitetu i pouzdanost."
  },
  {
    title: "Obradena koza",
    description:
      "Rjesenja prilagodena trazenim karakteristikama, namjeni i poslovnim zahtjevima partnera."
  },
  {
    title: "Tehnicka i specijalna koza",
    description:
      "Odgovarajuca opcija za specificne projekte, narudzbe i proizvodne procese."
  },
  {
    title: "Nabava prema zahtjevu",
    description:
      "Ako trazite odredenu vrstu koze, pomazemo u pronalasku odgovarajuceg materijala i organizaciji dobave."
  }
];

export function ProductsPage() {
  return (
    <div className="section-shell py-12 sm:py-16">
      <section className="panel px-8 py-12 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Proizvodi"
          title="Sirok asortiman koze za poslovne, trgovacke i proizvodne potrebe"
          description="U ponudi imamo razlicite vrste koze za klijente koji traze pouzdanu nabavu, fleksibilnu suradnju i rjesenja prilagodena konkretnoj namjeni."
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
              Nabava prilagodena trazenoj kvaliteti, kolicini i namjeni
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark">
              Buduci da poslujemo sa sirokim spektrom vrsta koze, nas pristup je
              usmjeren na pronalazak odgovarajuceg rjesenja prema zahtjevima
              klijenta. Time omogucujemo jednostavniji proces nabave i vecu
              sigurnost poslovne suradnje.
            </p>
          </article>
          <article className="rounded-[2rem] bg-espresso p-8 text-white shadow-glow sm:p-10">
            <p className="eyebrow text-sand">Upit</p>
            <h2 className="mt-4 font-display text-3xl">
              Trazite odredenu vrstu koze?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Posaljite nam upit i organizirat cemo nabavu prema vasim tehnickim
              i poslovnim potrebama.
            </p>
            <NavLink
              to="/kontakt"
              className="mt-8 inline-flex rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-espresso hover:bg-[#e7d9bf]"
            >
              Posaljite upit
            </NavLink>
          </article>
        </div>
      </section>
    </div>
  );
}
