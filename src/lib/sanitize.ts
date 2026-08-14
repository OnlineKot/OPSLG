import sanitizeHtml from "sanitize-html";

// Dozwolony, bezpieczny podzbiór HTML dla treści z edytora WYSIWYG w panelu.
// Używane zarówno przy zapisie (żeby nic złośliwego nie trafiło do bazy),
// jak i przy renderowaniu na stronie (obrona w głąb).
const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: ["p", "br", "strong", "em", "u", "s", "h2", "h3", "ul", "ol", "li", "blockquote", "a"],
  allowedAttributes: { a: ["href", "rel", "target"] },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer", target: "_blank" }),
  },
};

export function sanitizeRichText(html: string): string {
  return sanitizeHtml(html, OPTIONS).trim();
}

// Czy tekst wygląda na HTML z edytora (nowa treść), czy na zwykły tekst
// zapisany wcześniej ręcznie (stara treść, akapity rozdzielone pustą linią)?
// Pozwala bezpiecznie renderować oba formaty bez migracji danych.
export function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}
