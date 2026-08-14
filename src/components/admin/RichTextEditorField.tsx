"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEffect, useState } from "react";

function plainTextToHtml(value: string): string {
  if (/<\/?[a-z][\s\S]*>/i.test(value)) return value; // już HTML
  const paragraphs = value.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return paragraphs.map((p) => `<p>${p.replace(/\n/g, "<br />")}</p>`).join("");
}

function ToolbarButton({
  onClick,
  active,
  label,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`rte-toolbar__btn${active ? " is-active" : ""}`}
    >
      {children}
    </button>
  );
}

export function RichTextEditorField({
  id,
  name,
  label,
  defaultValue,
  hint,
}: {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
  hint?: string;
}) {
  const [html, setHtml] = useState(() => plainTextToHtml(defaultValue));

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false, autolink: true }),
    ],
    content: html,
    immediatelyRender: false,
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
    editorProps: {
      attributes: { class: "rte-content", id },
    },
  });

  // Gdyby defaultValue zmienił się po stronie serwera (np. po zapisie i
  // przeładowaniu strony), zsynchronizuj edytor.
  useEffect(() => {
    const next = plainTextToHtml(defaultValue);
    if (editor && next !== editor.getHTML()) {
      editor.commands.setContent(next);
      setHtml(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="rte">
        {editor && (
          <div className="rte-toolbar" role="toolbar" aria-label="Formatowanie tekstu">
            <ToolbarButton label="Pogrubienie" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
              <strong>B</strong>
            </ToolbarButton>
            <ToolbarButton label="Kursywa" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
              <em>I</em>
            </ToolbarButton>
            <ToolbarButton label="Nagłówek 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
              H2
            </ToolbarButton>
            <ToolbarButton label="Nagłówek 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
              H3
            </ToolbarButton>
            <ToolbarButton label="Lista punktowana" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
              •—
            </ToolbarButton>
            <ToolbarButton label="Lista numerowana" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
              1.
            </ToolbarButton>
            <ToolbarButton label="Cytat" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
              „”
            </ToolbarButton>
            <ToolbarButton
              label="Wstaw link"
              active={editor.isActive("link")}
              onClick={() => {
                const url = window.prompt("Adres linku (https://...)");
                if (url) editor.chain().focus().setLink({ href: url }).run();
                else editor.chain().focus().unsetLink().run();
              }}
            >
              🔗
            </ToolbarButton>
          </div>
        )}
        <EditorContent editor={editor} />
      </div>
      {hint && <p className="field-hint">{hint}</p>}
      <input type="hidden" name={name} value={html} />
    </div>
  );
}
