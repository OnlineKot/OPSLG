import Link from "next/link";
import { FOOTER_NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="stopka">
      <div className="container">
        <div className="footer-grid footer-grid--5">
          <div className="footer-brand">
            <h4>Polskie Towarzystwo Lekarzy Genetyków Klinicznych</h4>
            <p>Niezależna organizacja reprezentująca interesy zawodowe lekarzy w Polsce. Działamy na rzecz wysokich standardów etyki, wiedzy i jakości opieki medycznej.</p>
          </div>
          <div>
            <h4>Towarzystwo</h4>
            <ul>
              {FOOTER_NAV.towarzystwo.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Dla lekarzy</h4>
            <ul>
              {FOOTER_NAV.dlaLekarzy.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Dla kogo?</h4>
            <ul>
              {FOOTER_NAV.dlaKogo.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Informacje prawne</h4>
            <ul>
              {FOOTER_NAV.prawne.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Polskie Towarzystwo Lekarzy Genetyków Klinicznych. Wszelkie prawa zastrzeżone.</span>
          <div className="footer-legal__links">
            <Link href="/mapa-strony">Mapa strony</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="footer-totop">
        <a href="#tresc-glowna"><span className="footer-totop__arrow" aria-hidden="true">↑</span>Przewiń w górę<br />Polskie Towarzystwo Lekarzy Genetyków Klinicznych</a>
      </div>
    </footer>
  );
}
