import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";

const navigation = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/75 px-5 py-4 shadow-glow backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="flex items-center gap-4">
            <LogoMark />
            <div>
              <p className="font-display text-xl tracking-[0.14em] text-espresso">
                SCPRIBOR
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-bark">
                uvoz, izvoz i nabava kože
              </p>
            </div>
          </NavLink>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <nav className="flex flex-wrap gap-2 text-sm uppercase tracking-[0.16em] text-bark">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 ${
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
              className="inline-flex items-center justify-center rounded-full bg-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-sand hover:bg-charcoal"
            >
              Pošaljite upit
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
