import { SectionHeading } from "../components/SectionHeading";

const services = [
  {
    title: "Uvoz kože",
    description:
      "Organizacija nabave kroz suradnju s provjerenim partnerima i fokus na kvalitetu robe."
  },
  {
    title: "Izvoz kože",
    description:
      "Distribucija i poslovna suradnja s partnerima na tržištima Hrvatske i regije."
  },
  {
    title: "Nabava po zahtjevu",
    description:
      "Pronalazak odgovarajućeg materijala prema traženoj vrsti, namjeni i količini."
  },
  {
    title: "Otprema kože",
    description:
      "Profesionalna organizacija isporuke uz pouzdan i jasan poslovni proces."
  }
];

const process = [
  "Upit klijenta",
  "Analiza potreba",
  "Pronalazak odgovarajućeg rješenja",
  "Ponuda i potvrda suradnje",
  "Organizacija isporuke"
];

export function ServicesPage() {
  return (
    <div className="section-shell py-8 sm:py-12 lg:py-16">
      <section className="panel px-5 py-8 sm:px-8 sm:py-12 lg:px-14">
        <SectionHeading
          eyebrow="Usluge"
          title="Uz materijal, nudimo i poslovnu podršku kroz cijeli proces suradnje"
          description="SCPRIBOR pruža usluge povezane s uvozom, izvozom, nabavom i otpremom kože kako bi klijentima osigurao jednostavniju i sigurniju poslovnu realizaciju."
        />
      </section>

      <section className="py-14 sm:py-16">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="panel bg-gradient-to-br from-white/85 to-[#efe1cd] p-6 sm:p-8 lg:p-10"
            >
              <p className="eyebrow">Usluga</p>
              <h2 className="mt-4 font-display text-[1.85rem] text-espresso sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="panel grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="eyebrow">Proces suradnje</p>
            <h2 className="mt-4 font-display text-[1.9rem] text-espresso sm:text-4xl">
              Jednostavan poslovni tok od prvog kontakta do isporuke
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Proces je postavljen tako da partneri brzo dobiju informacije,
              odgovarajuću ponudu i pouzdanu organizaciju otpreme.
            </p>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-[1.35rem] border border-bark/10 bg-parchment/70 px-4 py-4 sm:gap-4 sm:rounded-[1.5rem] sm:px-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-espresso text-sm font-semibold text-sand">
                  {index + 1}
                </span>
                <p className="text-sm uppercase tracking-[0.16em] text-bark">
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
