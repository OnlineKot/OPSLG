export const MAIN_NAV = [
  { href: "/o-nas", label: "O nas" },
  { href: "/czlonkostwo", label: "Członkostwo" },
  { href: "/struktura-organizacyjna", label: "Struktura" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const FOOTER_NAV = {
  towarzystwo: [
    { href: "/o-nas", label: "O nas" },
    { href: "/struktura-organizacyjna", label: "Struktura organizacyjna" },
    { href: "/statut", label: "Statut" },
    { href: "/aktualnosci", label: "Aktualności" },
  ],
  dlaLekarzy: [
    { href: "/czlonkostwo", label: "Członkostwo" },
    { href: "/dolacz", label: "Deklaracja członkowska" },
    { href: "/strefa-czlonka", label: "Strefa Członka" },
    { href: "/dokumenty", label: "Dokumenty do pobrania" },
  ],
  dlaKogo: [
    { href: "/dla-pacjentow", label: "Dla pacjentów" },
    { href: "/genetyka-kliniczna", label: "Dla genetyków klinicznych" },
    { href: "/dla-lekarzy-kierujacych", label: "Dla lekarzy kierujących" },
    { href: "/dla-studentow", label: "Dla studentów" },
  ],
  prawne: [
    { href: "/polityka-prywatnosci", label: "Polityka prywatności (RODO)" },
    { href: "/regulamin", label: "Regulamin serwisu" },
    { href: "/dostepnosc", label: "Dostępność" },
  ],
} as const;
