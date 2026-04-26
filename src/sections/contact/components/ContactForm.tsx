import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";

const FIELD_CLASS =
  "glass-field rounded-xl px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 outline-none transition-[border-color,background-color] duration-200 focus:border-livia-turquoise/70 focus:bg-white/12";

const LABEL_CLASS =
  "font-sans text-xs font-semibold uppercase tracking-widest text-white/35";

function ContactForm() {
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="glass-form rounded-2xl p-8 max-sm:p-6">
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Formulário de contato"
      >
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className={LABEL_CLASS}>
              Nome
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Seu nome"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              E-mail
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="seu@email.com"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className={LABEL_CLASS}>
            Mensagem
          </label>
          <textarea
            id="contact-message"
            rows={5}
            maxLength={500}
            placeholder="Conte sobre o projeto ou oportunidade..."
            className={`${FIELD_CLASS} resize-none`}
            onChange={(e) => setCharCount(e.target.value.length)}
          />
          <span className="font-sans text-xs text-white/25 text-right">
            {charCount}/500
          </span>
        </div>

        <button
          type="submit"
          className="btn-primary mt-1 self-start flex items-center gap-2 px-8 py-3.5 text-sm tracking-wide bg-livia-turquoise text-white hover:opacity-90 max-sm:self-stretch max-sm:justify-center"
        >
          <IoPaperPlane size={16} aria-hidden="true" />
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
