import { useState } from "react";

const fieldStyle =
  "bg-white/8 border border-white/15 rounded-xl px-4 py-3 font-montserrat text-sm text-white placeholder:text-white/30 outline-none focus:border-livia-turquoise/70 focus:bg-white/12 transition-[border-color,background-color] duration-200";

const fieldBlur: React.CSSProperties = {
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
};

const labelStyle =
  "font-montserrat font-semibold tracking-widest uppercase text-white/35 text-xs";

const cardStyle: React.CSSProperties = {
  background: "color-mix(in srgb, white 6%, transparent)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid color-mix(in srgb, white 12%, transparent)",
  boxShadow: "0 24px 64px rgba(0, 0, 0, 0.25)",
};

function ContactForm() {
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="rounded-2xl p-8 max-[480px]:p-6" style={cardStyle}>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Formulário de contato"
      >
        <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className={labelStyle}>
              Nome
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Seu nome"
              className={fieldStyle}
              style={fieldBlur}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className={labelStyle}>
              E-mail
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="seu@email.com"
              className={fieldStyle}
              style={fieldBlur}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className={labelStyle}>
            Mensagem
          </label>
          <textarea
            id="contact-message"
            rows={5}
            maxLength={500}
            placeholder="Conte sobre o projeto ou oportunidade..."
            className={`${fieldStyle} resize-none`}
            style={fieldBlur}
            onChange={(e) => setCharCount(e.target.value.length)}
          />
          <span className="font-montserrat text-xs text-white/25 text-right">
            {charCount}/500
          </span>
        </div>

        <button
          type="submit"
          className="mt-1 self-start flex items-center gap-2 font-montserrat font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full bg-livia-turquoise text-white transition-[transform,opacity] duration-300 ease-in-out hover:opacity-90 hover:-translate-y-[3px] max-[480px]:self-stretch max-[480px]:justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
