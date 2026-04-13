import { useState } from "react";

function ContactForm() {
  const [charCount, setCharCount] = useState(0);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Formulário de contato"
    >
      <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="font-montserrat font-semibold tracking-[0.1em] uppercase text-foreground/40 text-xs"
          >
            Nome
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Seu nome"
            className="bg-transparent border-b border-foreground/20 pb-2 font-montserrat text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-livia-turquoise transition-colors duration-200"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="font-montserrat font-semibold tracking-[0.1em] uppercase text-foreground/40 text-xs"
          >
            E-mail
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="seu@email.com"
            className="bg-transparent border-b border-foreground/20 pb-2 font-montserrat text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-livia-turquoise transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-montserrat font-semibold tracking-[0.1em] uppercase text-foreground/40 text-xs"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={500}
          placeholder="Conte sobre o projeto ou oportunidade..."
          className="bg-transparent border-b border-foreground/20 pb-2 font-montserrat text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-livia-turquoise transition-colors duration-200 resize-none"
          onChange={(e) => setCharCount(e.target.value.length)}
        />
        <span className="font-montserrat text-xs text-foreground/30 text-right">
          {charCount}/500
        </span>
      </div>

      <button
        type="submit"
        className="mt-2 self-start flex items-center gap-2 font-montserrat font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full bg-livia-turquoise text-white transition-[transform,opacity] duration-300 ease-in-out hover:opacity-90 hover:-translate-y-[3px] max-[480px]:self-stretch max-[480px]:justify-center"
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
  );
}

export default ContactForm;
