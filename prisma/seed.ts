import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";

const prisma = new PrismaClient();

async function upsertIntro(pageKey: string, data: {
  eyebrow?: string;
  title: string;
  lede?: string;
  body?: string;
  closing?: string;
}) {
  await prisma.pageIntro.upsert({
    where: { pageKey },
    create: { pageKey, ...data },
    update: data,
  });
}

async function upsertItems(pageKey: string, items: { title: string; body: string }[]) {
  const existing = await prisma.contentItem.findMany({ where: { pageKey } });
  if (existing.length > 0) return; // nie nadpisuj ręcznych edycji przy ponownym seedowaniu
  await prisma.contentItem.createMany({
    data: items.map((item, index) => ({ pageKey, order: index, ...item })),
  });
}

async function main() {
  // --- Konto administratora ---
  const adminEmail = (process.env.ADMIN_EMAIL || "admin@ptlgk-przyklad.pl").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "PtlgkDemo2026!";
  const passwordHash = await hashPassword(adminPassword);
  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    create: { email: adminEmail, passwordHash },
    update: {},
  });
  console.log(`Konto administratora gotowe: ${adminEmail}`);

  // --- Strona główna ---
  await upsertIntro("home-hero", {
    title: "Genetycy kliniczni, łączcie się",
    lede: "Polskie Towarzystwo Lekarzy Genetyków Klinicznych reprezentuje interesy zawodowe lekarzy specjalizujących się w genetyce klinicznej, wspiera rozwój diagnostyki genetycznej i poradnictwa genetycznego oraz działa na rzecz najwyższych standardów opieki nad pacjentami z chorobami uwarunkowanymi genetycznie.",
  });

  await upsertItems("home-facts", [
    { title: "KRS 0000000000", body: "organizacja świeżo zarejestrowana w Krajowym Rejestrze Sądowym" },
    { title: "Otwarty nabór", body: "przyjmujemy nowych członków od pierwszego dnia działalności" },
    { title: "Współpraca międzynarodowa", body: "nawiązujemy kontakt z Europejską Federacją Stowarzyszeń Lekarskich" },
  ]);

  await upsertIntro("home-about", {
    eyebrow: "O Towarzystwie",
    title: "Kim jesteśmy",
    lede: "Działamy na rzecz lekarzy specjalizujących się w genetyce klinicznej — od rezydentury, przez rozwój kompetencji diagnostycznych, po ochronę praw i godności zawodu.",
  });
  await upsertItems("home-about", [
    { title: "Misja", body: "Wspieramy lekarzy genetyków klinicznych w codziennej praktyce diagnostycznej i poradnictwie genetycznym, dbamy o wysokie standardy merytoryczne oraz reprezentujemy środowisko wobec instytucji publicznych i płatnika." },
    { title: "Wartości", body: "Rzetelność diagnostyczna, niezależność, odpowiedzialność zawodowa i troska o pacjenta oraz jego rodzinę — to fundamenty naszej działalności statutowej." },
    { title: "Początki", body: "Towarzystwo zostało niedawno założone z inicjatywy grupy lekarzy genetyków klinicznych, którzy postanowili wspólnie budować reprezentację tej wąskiej, wciąż rozwijającej się specjalizacji." },
  ]);

  await upsertIntro("home-activity", {
    eyebrow: "Działalność",
    title: "Co robimy na rzecz naszych członków",
  });
  await upsertItems("home-activity", [
    { title: "Reprezentacja zawodowa", body: "Występujemy w imieniu środowiska w dialogu z Ministerstwem Zdrowia i NFZ w sprawach finansowania diagnostyki genetycznej." },
    { title: "Kształcenie ustawiczne", body: "Organizujemy szkolenia z zakresu cytogenetyki, diagnostyki molekularnej i poradnictwa genetycznego, umożliwiające zdobywanie punktów edukacyjnych." },
    { title: "Certyfikacja metod", body: "Prowadzimy system certyfikacji laboratoryjnych metod diagnostycznych (m.in. aCGH, FISH, MLPA, NGS) stosowanych przez członków Towarzystwa." },
    { title: "Etyka i standardy", body: "Opracowujemy i promujemy rekomendacje kliniczne dotyczące diagnostyki i poradnictwa genetycznego, zgodne z aktualną wiedzą medyczną." },
  ]);

  // --- O nas ---
  await upsertIntro("o-nas", {
    eyebrow: "O nas",
    title: "O nas",
    lede: "Polskie Towarzystwo Lekarzy Genetyków Klinicznych (PTLGK) jest ogólnopolskim stowarzyszeniem zrzeszającym i reprezentującym środowisko lekarzy genetyków klinicznych — zarówno specjalistów, jak i lekarzy w trakcie szkolenia specjalizacyjnego.",
    closing: "Wspólnie działamy na rzecz nowoczesnej, odpowiedzialnej i dostępnej genetyki klinicznej.",
  });
  await upsertItems("o-nas", [
    { title: "Nasz cel", body: "Wspieranie rozwoju genetyki klinicznej w Polsce, podnoszenie jakości diagnostyki i opieki nad pacjentami oraz tworzenie przestrzeni do współpracy, wymiany wiedzy i doświadczeń. Angażujemy się w opracowywanie standardów, wytycznych i rekomendacji, rozwój edukacji medycznej, działalność naukową oraz kształcenie kolejnych pokoleń specjalistów." },
    { title: "Dialog z instytucjami", body: "Reprezentujemy środowisko genetyków klinicznych w dialogu z instytucjami publicznymi, samorządami zawodowymi i innymi podmiotami mającymi wpływ na organizację ochrony zdrowia. Zabieramy głos w debacie publicznej, konsultacjach społecznych i pracach dotyczących rozwiązań prawnych istotnych dla genetyki klinicznej." },
    { title: "Prawa pacjenta i etyka", body: "Szczególne znaczenie ma dla nas równy i bezpieczny dostęp pacjentów do świadczeń z zakresu genetyki klinicznej, poszanowanie praw pacjenta, etyka zawodowa oraz odpowiedzialne wykorzystywanie danych medycznych i genetycznych." },
    { title: "Kogo łączymy", body: "Łączymy lekarzy, diagnostów laboratoryjnych, biologów molekularnych, naukowców i innych przedstawicieli zawodów medycznych, a także współpracujemy z organizacjami pacjentów oraz partnerami krajowymi i zagranicznymi. Organizujemy konferencje, szkolenia i inicjatywy edukacyjne, tworzymy zespoły eksperckie oraz wspieramy projekty naukowe, mentoringowe i interdyscyplinarne." },
  ]);

  // --- Członkostwo ---
  await upsertIntro("czlonkostwo", {
    eyebrow: "Członkostwo",
    title: "Dołącz do PTLGK!",
    lede: "Członkiem zwyczajnym Polskiego Towarzystwa Lekarzy Genetyków Klinicznych może zostać lekarz posiadający prawo wykonywania zawodu, który jest specjalistą genetyki klinicznej lub odbywa szkolenie specjalizacyjne w tej dziedzinie.",
    body: "Wystarczy wypełnić i złożyć deklarację członkowską na wskazanym formularzu — elektronicznie lub fizycznie na spotkaniu inauguracyjnym. Przyjęcie w poczet członków następuje na podstawie uchwały Zarządu PTLGK.\n\nCzłonkowie zobowiązani są do przestrzegania Statutu i zasad etyki zawodowej, regularnego opłacania składek członkowskich oraz – w miarę swoich możliwości – aktywnego wspierania działalności Towarzystwa.",
    closing: "Dołącz do środowiska, które mówi wspólnym głosem w sprawach genetyki klinicznej.",
  });
  await upsertItems("czlonkostwo-benefits", [
    { title: "1", body: "uczestniczyć w działalności i inicjatywach Towarzystwa" },
    { title: "2", body: "zgłaszać własne wnioski, postulaty i propozycje" },
    { title: "3", body: "korzystać z dorobku oraz form wsparcia PTLGK" },
    { title: "4", body: "uczestniczyć w Walnym Zebraniu Członków z prawem głosu" },
    { title: "5", body: "wybierać władze Towarzystwa oraz kandydować do jego władz" },
    { title: "6", body: "wspólnie wpływać na kierunki rozwoju genetyki klinicznej w Polsce" },
  ]);

  // --- Struktura ---
  await upsertIntro("struktura", {
    eyebrow: "Struktura",
    title: "Struktura organizacyjna",
    lede: "Polskie Towarzystwo Lekarzy Genetyków Klinicznych działa w oparciu o przejrzystą strukturę, która łączy demokratyczny udział członków, sprawne zarządzanie oraz niezależną kontrolę działalności Towarzystwa.",
    closing: "Kadencja władz PTLGK trwa trzy lata.",
  });
  await upsertItems("struktura", [
    { title: "Walne Zebranie Członków", body: "Najwyższą władzą PTLGK jest Walne Zebranie Członków, w którym każdy członek zwyczajny ma prawo uczestniczyć i współdecydować o najważniejszych sprawach Towarzystwa. Walne Zebranie wybiera Zarząd i Komisję Rewizyjną, zatwierdza sprawozdania z działalności oraz podejmuje najważniejsze decyzje dotyczące funkcjonowania i przyszłości PTLGK. Odbywa się co najmniej raz w roku i może być organizowane stacjonarnie, zdalnie lub hybrydowo." },
    { title: "Zarząd", body: "Zarząd kieruje bieżącą działalnością PTLGK i reprezentuje Towarzystwo na zewnątrz. Składa się z 5–7 osób wybieranych przez Walne Zebranie Członków na trzyletnią kadencję. W skład Zarządu wchodzą Prezes, dwóch Wiceprezesów, Sekretarz i Skarbnik. Co najmniej dwóch członków Zarządu w dniu wyboru powinno mieć mniej niż 35 lat." },
    { title: "Komisja Rewizyjna", body: "Komisja Rewizyjna sprawuje niezależną kontrolę nad działalnością PTLGK, w szczególności w zakresie gospodarki finansowej. Kontroluje działalność Towarzystwa, opiniuje sprawozdania Zarządu i przedstawia swoje wnioski Walnemu Zebraniu Członków." },
    { title: "Kolegium Doradcze", body: "Przy PTLGK może działać Kolegium Doradcze – grono ekspertów wspierających Towarzystwo swoją wiedzą, doświadczeniem i autorytetem. Kolegium pełni funkcję doradczą i opiniodawczą – nie jest organem władzy PTLGK." },
  ]);

  // --- Współpraca ---
  await upsertIntro("wspolpraca", {
    eyebrow: "Współpraca",
    title: "Współpraca",
    lede: "Ta strona jest w przygotowaniu. Zapraszamy do kontaktu w sprawach współpracy z Towarzystwem.",
  });

  // --- Kontakt ---
  await upsertIntro("kontakt", {
    eyebrow: "Kontakt",
    title: "Skontaktuj się z Zarządem",
  });
  const contactExisting = await prisma.contactInfo.findFirst();
  if (!contactExisting) {
    await prisma.contactInfo.create({
      data: {
        address: "ul. Przykładowa 12, 00-001 Warszawa",
        phone: "+48 22 000 00 00",
        email: "kontakt@ptlgk-przyklad.pl",
        officeHours: "pon.–pt., 9:00–16:00",
      },
    });
  }

  // --- Aktualności ---
  await prisma.newsPost.upsert({
    where: { slug: "spotkanie-inauguracyjne" },
    create: {
      slug: "spotkanie-inauguracyjne",
      title: "Spotkanie inauguracyjne",
      excerpt: "Spotkanie inauguracyjne PTLGK odbędzie się 23.09 o godzinie 13:00 we Wrocławiu.",
      body: "Spotkanie inauguracyjne PTLGK odbędzie się 23.09 o godzinie 13:00 we Wrocławiu.",
      eventDate: new Date("2026-09-23T13:00:00+02:00"),
      order: 0,
    },
    update: {},
  });
  await prisma.newsPost.upsert({
    where: { slug: "zarzad-tymczasowy" },
    create: {
      slug: "zarzad-tymczasowy",
      title: "Zarząd Tymczasowy",
      excerpt: "W związku z tworzeniem PTLGK powołany został Zarząd Tymczasowy, który poprowadzi proces organizacyjny Towarzystwa.",
      body: "W związku z tworzeniem Polskiego Towarzystwa Lekarzy Genetyków Klinicznych (PTLGK) powołany został Zarząd Tymczasowy, którego zadaniem jest przeprowadzenie procesu organizacyjnego i formalnego związanego z utworzeniem oraz rozpoczęciem działalności Towarzystwa.\n\nZarząd Tymczasowy będzie pełnił swoją funkcję do czasu pierwszego Walnego Zebrania Członków. Podczas tego zebrania poda się do dymisji, umożliwiając członkom PTLGK wybór pierwszych statutowych władz Towarzystwa. O przyszłym składzie władz PTLGK zdecydują jego członkowie.\n\nSkład Zarządu Tymczasowego: w przygotowaniu.",
      order: 1,
    },
    update: {},
  });

  console.log("Seed zakończony.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
