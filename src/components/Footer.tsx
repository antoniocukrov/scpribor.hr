import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { LogoWordmark } from "./LogoWordmark";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Footer() {
  return (
    <footer className="px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-espresso px-5 py-8 text-white shadow-glow sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.7fr_0.7fr] lg:gap-10">
            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <LogoMark dark className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                <LogoWordmark dark className="h-8 w-[11rem] sm:h-10 sm:w-[13.5rem]" />
              </div>
              <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-white/70 sm:text-base sm:leading-8">
                SCPRIBOR je pouzdan partner za uvoz, izvoz, nabavu i otpremu svih
                vrsta kože na domaćem i regionalnom tržištu.
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sand sm:text-xs sm:tracking-[0.3em]">
                Navigacija
              </p>
              <div className="mt-4 grid gap-3 text-sm uppercase tracking-[0.16em] text-white/75 sm:mt-5">
                {links.map((link) => (
                  <NavLink key={link.href} to={link.href} className="hover:text-sand">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sand sm:text-xs sm:tracking-[0.3em]">
                Kontakt
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/75 sm:mt-5">
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

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/45 sm:mt-10 sm:pt-6">
            (c) {new Date().getFullYear()} SCPRIBOR. Sva prava pridržana.
          </div>
        </div>
      </div>
    </footer>
  );
}
