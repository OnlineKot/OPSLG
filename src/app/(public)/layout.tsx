import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#tresc-glowna">Przejdź do treści głównej</a>
      <SiteHeader />
      <main id="tresc-glowna">{children}</main>
      <SiteFooter />
    </>
  );
}
