import { ContactInfo, ContactForm, ContactFooter } from "./components/index.js";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-livia-navy-blue text-white flex justify-center py-24"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <p className="font-montserrat font-semibold tracking-[0.18em] uppercase text-livia-turquoise text-xs">
            Vamos conversar
          </p>
          <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-white">
            Vamos <em className="not-italic text-livia-turquoise">trabalhar</em>{" "}
            juntos?
          </h2>
          <p className="font-montserrat text-xs text-white/35 tracking-widest uppercase">
            Aberta a projetos e colaborações
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}

export default Contact;
