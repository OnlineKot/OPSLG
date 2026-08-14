import { looksLikeHtml, sanitizeRichText } from "@/lib/sanitize";

// Renderuje treść zapisaną w bazie — obsługuje zarówno nowy format
// (HTML z edytora WYSIWYG) jak i stary (zwykły tekst, akapity rozdzielone
// pustą linią), więc działa bez migracji istniejących danych.
export function RichText({ value, className }: { value: string; className?: string }) {
  if (!value) return null;

  if (looksLikeHtml(value)) {
    return (
      <div
        className={className}
        // Sanityzowane też przy zapisie — tu druga warstwa obrony.
        dangerouslySetInnerHTML={{ __html: sanitizeRichText(value) }}
      />
    );
  }

  return (
    <div className={className}>
      {value.split(/\n\s*\n/).map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
      ))}
    </div>
  );
}
