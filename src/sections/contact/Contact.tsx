import { ContactInfo, ContactForm, ContactFooter } from "./components/index.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function Contact() {
  const ref = useFadeIn();
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-svh py-24 bg-livia-navy-blue text-white"
    >
      <div ref={ref} className="fade-in w-full max-w-content mx-auto px-6">
        <div className="flex flex-col items-center gap-3 text-center mb-16">
          <p className="text-eyebrow">Vamos conversar</p>
          <h2 className="text-section-title text-white">
            Vamos <em className="not-italic text-livia-turquoise">trabalhar</em>{" "}
            juntos?
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-white/35">
            Aberta a projetos e colaborações
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}

export default Contact;
