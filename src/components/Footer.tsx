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
    <footer className="pb-6 sm:pb-8">
      <div className="section-shell">
        <div className="rounded-[1.35rem] bg-espresso px-4 py-7 text-white shadow-glow sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.7fr_0.7fr] lg:gap-10">
            <div className="mx-auto flex w-full max-w-[17rem] flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
              <div className="flex items-center justify-center gap-3 sm:gap-5 lg:justify-start">
                <LogoMark dark className="h-12 w-12 shrink-0 sm:h-16 sm:w-16" />
                <LogoWordmark dark className="h-9 w-[11.5rem] sm:h-11 sm:w-[14.75rem]" />
              </div>
              <p className="mt-4 max-w-[15rem] text-[0.9rem] leading-6 text-white/70 sm:mt-5 sm:max-w-md sm:text-base sm:leading-8">
                SCPRIBOR je pouzdan partner za uvoz, izvoz, nabavu i otpremu svih
                vrsta kože na domaćem i regionalnom tržištu.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[10rem] text-center">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sand sm:text-xs sm:tracking-[0.28em]">
                Navigacija
              </p>
              <div className="mt-3 grid gap-2.5 text-[0.82rem] uppercase tracking-[0.12em] text-white/75 sm:mt-5 sm:text-sm sm:tracking-[0.14em]">
                {links.map((link) => (
                  <NavLink key={link.href} to={link.href} className="hover:text-sand">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[11rem] text-center">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sand sm:text-xs sm:tracking-[0.28em]">
                Kontakt
              </p>
              <div className="mt-3 space-y-2.5 text-[0.82rem] leading-6 text-white/75 sm:mt-5 sm:text-sm sm:leading-7">
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

          <div className="mt-6 border-t border-white/10 pt-4 text-center text-[0.72rem] text-white/45 sm:mt-10 sm:pt-6 sm:text-sm lg:text-left">
            (c) {new Date().getFullYear()} SCPRIBOR. Sva prava pridržana.
          </div>
        </div>
      </div>
    </footer>
  );
}
