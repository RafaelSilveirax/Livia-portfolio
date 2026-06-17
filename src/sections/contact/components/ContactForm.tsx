import { useEffect, useState, type FormEvent } from "react";
import {
  IoPaperPlane,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoPersonOutline,
  IoMailOutline,
  IoCreateOutline,
} from "react-icons/io5";
import emailjs from "@emailjs/browser";

const FIELD_CLASS =
  "w-full bg-transparent border-0 border-b border-white/15 px-0 py-2.5 font-sans text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-200 hover:border-white/30 focus:border-livia-turquoise";

const LABEL_CLASS =
  "flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/35";

const ICON_CLASS = "h-4 w-4 text-livia-turquoise";

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

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 6000);
    return () => window.clearTimeout(timeout);
  }, [status]);

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
          name,
          email,
          message,
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
    <div className="flex flex-col gap-4">
      <div className="glass-form rounded-2xl p-8 max-sm:p-6">
        <div className="glass-tag mb-7 flex items-center gap-2 self-start rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-livia-turquoise opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-livia-turquoise" />
          </span>
          <span className="font-sans text-xs font-medium text-white/80">
            Disponível para projetos
          </span>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          aria-label="Formulário de contato"
          noValidate={false}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className={LABEL_CLASS}>
              <IoPersonOutline className={ICON_CLASS} aria-hidden="true" />
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

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              <IoMailOutline className={ICON_CLASS} aria-hidden="true" />
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

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className={LABEL_CLASS}>
              <IoCreateOutline className={ICON_CLASS} aria-hidden="true" />
              Mensagem
              <RequiredMark />
            </label>
            <textarea
              id="contact-message"
              rows={4}
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
            className="btn-primary mt-1 flex items-center justify-center gap-2 self-stretch px-8 py-3.5 text-sm tracking-wide bg-livia-turquoise text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <IoPaperPlane size={16} aria-hidden="true" />
            {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="glass-field flex w-full items-start gap-3 rounded-xl border border-livia-turquoise/40 bg-livia-turquoise/10 px-4 py-3.5 animate-[hero-rise_0.35s_ease-out_both]"
        >
          <IoCheckmarkCircle
            size={22}
            className="shrink-0 text-livia-turquoise"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <p className="font-sans text-sm font-semibold text-white">
              Mensagem enviada com sucesso!
            </p>
            <p className="font-sans text-xs text-white/60">
              Obrigada pelo contato — respondo em breve no e-mail informado.
            </p>
          </div>
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="glass-field flex w-full items-start gap-3 rounded-xl border border-livia-dark-coral/40 bg-livia-dark-coral/10 px-4 py-3.5 animate-[hero-rise_0.35s_ease-out_both]"
        >
          <IoAlertCircle
            size={22}
            className="shrink-0 text-livia-dark-coral"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <p className="font-sans text-sm font-semibold text-white">
              Não consegui enviar sua mensagem.
            </p>
            <p className="font-sans text-xs text-white/60">
              Tenta novamente em alguns instantes ou me chama no WhatsApp.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
