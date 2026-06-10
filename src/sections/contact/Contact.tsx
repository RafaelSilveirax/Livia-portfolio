import { ContactInfo, ContactForm, ContactFooter } from "./components/index.js";
import { useFadeIn } from "../../hooks/useFadeIn.js";

function Contact() {
  const ref = useFadeIn();
  return (
    <section
      id="contact"
      className="flex flex-col min-h-svh bg-livia-navy-blue text-white"
    >
      <div className="flex-1 flex items-center justify-center py-24 max-md:py-16">
        <div
          ref={ref}
          className="fade-in w-full max-w-page mx-auto px-6 flex flex-col gap-12 max-md:gap-10"
        >
          <div className="flex flex-col items-start gap-5 max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
              Vamos conversar
            </p>

            <h2 className="font-serif font-bold leading-[1.05] text-white text-[clamp(2.25rem,4vw,3.5rem)]">
              Vamos{" "}
              <em className="not-italic hero-color-cycle">trabalhar</em>{" "}
              juntos?
            </h2>

            <div
              className="w-16 h-0.5 rounded-full bg-livia-turquoise"
              aria-hidden="true"
            />

            <p className="font-sans text-xs uppercase tracking-widest text-white/35">
              Aberta a projetos e colaborações
            </p>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 items-start max-lg:grid-cols-1 max-lg:gap-10">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="w-full max-w-page mx-auto px-6 pb-8">
        <ContactFooter />
      </div>
    </section>
  );
}

export default Contact;
