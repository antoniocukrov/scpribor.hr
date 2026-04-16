import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { LogoWordmark } from "./LogoWordmark";

const navigation = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pb-3 pt-3 sm:px-6 sm:pb-4 sm:pt-4 lg:px-8">
      <div className="section-shell">
        <div className="rounded-[1.6rem] border border-white/70 bg-white/88 px-3 py-3 shadow-glow backdrop-blur sm:rounded-[2rem] sm:px-5 sm:py-4 lg:px-7">
          <div className="flex items-center justify-between gap-3">
            <NavLink
              to="/"
              className="flex min-w-0 flex-1 items-center gap-3 pr-2 sm:gap-4"
            >
              <LogoMark className="h-11 w-11 shrink-0 sm:h-14 sm:w-14" />

              <div className="min-w-0 lg:hidden">
                <p className="truncate font-display text-[1.2rem] tracking-[0.12em] text-espresso">
                  SCPRIBOR
                </p>
                <p className="mt-0.5 truncate text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ember">
                  Koža • uvoz • izvoz
                </p>
              </div>

              <LogoWordmark className="hidden h-10 w-[14rem] shrink-0 lg:block xl:h-12 xl:w-[16.25rem]" />
            </NavLink>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bark/10 bg-parchment/80 text-espresso transition hover:bg-parchment lg:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Zatvori navigaciju" : "Otvori navigaciju"}
            >
              <span className="relative h-4 w-4">
                <span
                  className={`absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-current transition ${
                    isOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[11.5px] h-0.5 w-4 rounded-full bg-current transition ${
                    isOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <div className="hidden lg:flex lg:items-center lg:gap-5">
              <nav className="flex flex-wrap justify-end gap-2.5 text-[0.8rem] uppercase tracking-[0.16em] text-bark">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2.5 ${
                        isActive
                          ? "bg-espresso text-sand"
                          : "hover:bg-bark/5 hover:text-espresso"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <NavLink
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-espresso px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sand hover:bg-charcoal"
              >
                Pošaljite upit
              </NavLink>
            </div>
          </div>

          {isOpen ? (
            <div className="mt-4 grid gap-3 border-t border-bark/10 pt-4 lg:hidden">
              <nav className="grid gap-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-[1rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] ${
                        isActive
                          ? "bg-espresso text-sand"
                          : "bg-parchment/65 text-bark hover:bg-bark/5 hover:text-espresso"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <NavLink
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-espresso px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sand hover:bg-charcoal"
              >
                Pošaljite upit
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
