import { RemoteImage } from "../components/RemoteImage";
import { SectionHeading } from "../components/SectionHeading";

const values = [
  "Kvaliteta materijala i pouzdanost nabave",
  "Jasna komunikacija i poslovna odgovornost",
  "Fleksibilan pristup potrebama partnera",
  "Dugoročna regionalna suradnja"
];

export function AboutPage() {
  return (
    <div className="section-shell py-12 sm:py-16">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">O nama</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
            Poslovanje izgrađeno na povjerenju, kvaliteti i stabilnoj suradnji
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bark">
            SCPRIBOR je firma usmjerena na uvoz, izvoz i nabavu svih vrsta kože,
            s posebnim fokusom na kvalitetu materijala, pouzdanost isporuke i
            profesionalnu organizaciju poslovne suradnje.
          </p>
        </div>
        <div className="panel overflow-hidden">
          <div className="min-h-[420px]">
            <RemoteImage
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=80"
              alt="Uzorci i obrada kože"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          eyebrow="Pristup"
          title="Klijentima osiguravamo sigurnost nabave i poslovnu fleksibilnost"
          description="Naš rad temelji se na razumijevanju potreba kupaca i povezivanju s provjerenim partnerima. Fokusirani smo na to da svaka suradnja bude jasna, pouzdana i usmjerena na kvalitetno rješenje."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="panel p-8 sm:p-10">
            <h2 className="font-display text-3xl text-espresso">Tko smo</h2>
            <p className="mt-5 text-base leading-8 text-bark">
              Na tržištu djelujemo kao partner za poslovne subjekte kojima je
              potrebna sigurna nabava različitih vrsta kože. Kroz profesionalan
              pristup i regionalnu mrežu suradnika razvijamo odnose koji
              omogućuju stabilnu dostupnost robe i efikasnu organizaciju
              isporuke.
            </p>
          </article>
          <article className="panel p-8 sm:p-10">
            <h2 className="font-display text-3xl text-espresso">Što nas izdvaja</h2>
            <div className="mt-5 grid gap-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-[1.5rem] border border-bark/10 bg-parchment/75 px-5 py-4 text-sm leading-7 text-charcoal"
                >
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Tržišta</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Hrvatska i regija kao temelj poslovne mreže
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark">
              Surađujemo s partnerima u Hrvatskoj, Mađarskoj, Sloveniji,
              Italiji, Bosni i Hercegovini te Srbiji, razvijajući stabilnu mrežu
              nabave, distribucije i dugoročne poslovne suradnje.
            </p>
          </div>
          <div className="rounded-[2rem] bg-espresso px-8 py-10 text-white">
            <p className="eyebrow text-sand">Kvaliteta</p>
            <h3 className="mt-4 font-display text-3xl">
              Certifikat o kakvoći, Euroinspekt Zagreb
            </h3>
            <p className="mt-5 text-base leading-8 text-white/75">
              Kao potvrdu ozbiljnosti poslovanja i usmjerenosti na kvalitetu,
              izdvajamo certifikat o kakvoći izdan od Euroinspekt Zagreb.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
