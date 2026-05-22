import { useState, type FormEvent } from "react";
import { IoPaperPlane } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const FIELD_CLASS =
  "glass-field rounded-xl px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 outline-none transition-[border-color,background-color] duration-200 focus:border-livia-turquoise/70 focus:bg-white/12";

const LABEL_CLASS =
  "font-sans text-xs font-semibold uppercase tracking-widest text-white/35";

type Status = "idle" | "sending" | "success" | "error";

function RequiredMark() {
  return (
    <span className="text-livia-dark-coral ml-1" aria-hidden="true">
      *
    </span>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const charCount = message.length;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars ausentes");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "Liviazaballai@gmail.com",
        },
        { publicKey },
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="glass-form rounded-2xl p-8 max-sm:p-6">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
        aria-label="Formulário de contato"
        noValidate={false}
      >
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className={LABEL_CLASS}>
              Nome
              <RequiredMark />
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              E-mail
              <RequiredMark />
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className={LABEL_CLASS}>
            Mensagem
            <RequiredMark />
          </label>
          <textarea
            id="contact-message"
            rows={5}
            required
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Conte sobre o projeto ou oportunidade..."
            className={`${FIELD_CLASS} resize-none`}
          />
          <span className="font-sans text-xs text-white/25 text-right">
            {charCount}/500
          </span>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary mt-1 self-start flex items-center gap-2 px-8 py-3.5 text-sm tracking-wide bg-livia-turquoise text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed max-sm:self-stretch max-sm:justify-center"
        >
          <IoPaperPlane size={16} aria-hidden="true" />
          {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {status === "success" && (
          <p
            role="status"
            className="font-sans text-sm text-livia-turquoise"
          >
            Mensagem enviada! Em breve eu te respondo.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="font-sans text-sm text-livia-dark-coral"
          >
            Não consegui enviar. Tenta novamente ou me chama no WhatsApp.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
