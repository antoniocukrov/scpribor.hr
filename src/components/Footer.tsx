import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="rounded-[2.5rem] bg-espresso px-8 py-10 text-white shadow-glow sm:px-10 lg:px-14 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-4">
                <LogoMark dark />
                <div>
                  <p className="font-display text-xl tracking-[0.14em] text-white">
                    SCPRIBOR
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-sand/80">
                    uvoz, izvoz i nabava kože
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                SCPRIBOR je pouzdan partner za uvoz, izvoz, nabavu i otpremu svih
                vrsta kože na domaćem i regionalnom tržištu.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
                Navigacija
              </p>
              <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.16em] text-white/75">
                {links.map((link) => (
                  <NavLink key={link.href} to={link.href} className="hover:text-sand">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
                Kontakt
              </p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                <p>Ulica Sv. Petka 4, 31000 Osijek</p>
                <a href="mailto:info@scpribor.hr" className="block hover:text-sand">
                  info@scpribor.hr
                </a>
                <a href="tel:+38598798153" className="block hover:text-sand">
                  +385 98798153
                </a>
                <p>Certifikat o kakvoći, Euroinspekt Zagreb</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
            (c) {new Date().getFullYear()} SCPRIBOR. Sva prava pridržana.
          </div>
        </div>
      </div>
    </footer>
  );
}
