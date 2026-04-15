import { SectionHeading } from "../components/SectionHeading";

const services = [
  {
    title: "Uvoz koze",
    description:
      "Organizacija nabave kroz suradnju s provjerenim partnerima i fokus na kvalitetu robe."
  },
  {
    title: "Izvoz koze",
    description:
      "Distribucija i poslovna suradnja s partnerima na trzistima Hrvatske i regije."
  },
  {
    title: "Nabava po zahtjevu",
    description:
      "Pronalazak odgovarajuceg materijala prema trazenoj vrsti, namjeni i kolicini."
  },
  {
    title: "Otprema koze",
    description:
      "Profesionalna organizacija isporuke uz pouzdan i jasan poslovni proces."
  }
];

const process = [
  "Upit klijenta",
  "Analiza potreba",
  "Pronalazak odgovarajuceg rjesenja",
  "Ponuda i potvrda suradnje",
  "Organizacija isporuke"
];

export function ServicesPage() {
  return (
    <div className="section-shell py-12 sm:py-16">
      <section className="panel px-8 py-12 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Usluge"
          title="Uz materijal, nudimo i poslovnu podrsku kroz cijeli proces suradnje"
          description="SCPRIBOR pruza usluge povezane s uvozom, izvozom, nabavom i otpremom koze kako bi klijentima osigurao jednostavniju i sigurniju poslovnu realizaciju."
        />
      </section>

      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="panel bg-gradient-to-br from-white/85 to-[#efe1cd] p-8 sm:p-10"
            >
              <p className="eyebrow">Usluga</p>
              <h2 className="mt-4 font-display text-3xl text-espresso">
                {service.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-bark">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Proces suradnje</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Jednostavan poslovni tok od prvog kontakta do isporuke
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark">
              Proces je postavljen tako da partneri brzo dobiju informacije,
              odgovarajucu ponudu i pouzdanu organizaciju otpreme.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-[1.5rem] border border-bark/10 bg-parchment/70 px-5 py-4"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-espresso text-sm font-semibold text-sand">
                  {index + 1}
                </span>
                <p className="text-sm uppercase tracking-[0.18em] text-bark">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
