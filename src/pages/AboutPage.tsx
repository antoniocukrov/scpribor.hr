import { RemoteImage } from "../components/RemoteImage";
import { SectionHeading } from "../components/SectionHeading";
import leatherExport from "../images/leatherExport.webp";

const values = [
  "Kvaliteta materijala i pouzdanost nabave",
  "Jasna komunikacija i poslovna odgovornost",
  "Fleksibilan pristup potrebama partnera",
  "Dugoročna regionalna suradnja"
];

export function AboutPage() {
  return (
    <div className="section-shell py-8 sm:py-12 lg:py-16">
      <section className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">O nama</p>
          <h1 className="mt-4 font-display text-[2.2rem] leading-tight text-espresso sm:text-5xl">
            Poslovanje izgrađeno na povjerenju, kvaliteti i stabilnoj suradnji
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-bark sm:mt-6 sm:text-lg sm:leading-8">
            SCPRIBOR je firma usmjerena na uvoz, izvoz i nabavu svih vrsta kože,
            s posebnim fokusom na kvalitetu materijala, pouzdanost isporuke i
            profesionalnu organizaciju poslovne suradnje.
          </p>
        </div>
        <div className="panel overflow-hidden">
          <div className="h-[280px] sm:h-[420px]">
            <RemoteImage
              src={leatherExport}
              alt="Uzorci i obrada kože"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Pristup"
          title="Klijentima osiguravamo sigurnost nabave i poslovnu fleksibilnost"
          description="Naš rad temelji se na razumijevanju potreba kupaca i povezivanju s provjerenim partnerima. Fokusirani smo na to da svaka suradnja bude jasna, pouzdana i usmjerena na kvalitetno rješenje."
        />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-2">
          <article className="panel p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-[1.85rem] text-espresso sm:text-3xl">
              Tko smo
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Na tržištu djelujemo kao partner za poslovne subjekte kojima je
              potrebna sigurna nabava različitih vrsta kože. Kroz profesionalan
              pristup i regionalnu mrežu suradnika razvijamo odnose koji
              omogućuju stabilnu dostupnost robe i efikasnu organizaciju
              isporuke.
            </p>
          </article>
          <article className="panel p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-[1.85rem] text-espresso sm:text-3xl">
              Što nas izdvaja
            </h2>
            <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-[1.35rem] border border-bark/10 bg-parchment/75 px-4 py-4 text-sm leading-7 text-charcoal sm:rounded-[1.5rem] sm:px-5"
                >
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="panel grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="eyebrow">Tržišta</p>
            <h2 className="mt-4 font-display text-[1.9rem] text-espresso sm:text-4xl">
              Hrvatska i regija kao temelj poslovne mreže
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-bark sm:mt-5 sm:text-base sm:leading-8">
              Surađujemo s partnerima u Hrvatskoj, Mađarskoj, Sloveniji,
              Italiji, Bosni i Hercegovini te Srbiji, razvijajući stabilnu mrežu
              nabave, distribucije i dugoročne poslovne suradnje.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-espresso px-6 py-8 text-white sm:rounded-[2rem] sm:px-8 sm:py-10">
            <p className="eyebrow text-sand">Kvaliteta</p>
            <h3 className="mt-4 font-display text-[1.9rem] sm:text-3xl">
              Certifikat o kakvoći, Euroinspekt Zagreb
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
              Kao potvrdu ozbiljnosti poslovanja i usmjerenosti na kvalitetu,
              izdvajamo certifikat o kakvoći izdan od Euroinspekt Zagreb.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
