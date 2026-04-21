import { ContactInfo, ContactForm, ContactFooter } from "./components/index.js";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-livia-navy-blue text-white flex justify-center py-24"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-white">
            Vamos{" "}
            <em className="not-italic text-livia-turquoise">trabalhar</em>{" "}
            juntos?
          </h2>
          <p className="font-montserrat text-sm text-white/35 mt-3 tracking-widest uppercase">
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
