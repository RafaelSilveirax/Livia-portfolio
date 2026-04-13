import { ContactInfo, ContactForm, ContactFooter } from "./components/index.js";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[color-mix(in_srgb,var(--color-livia-turquoise)_12%,white)] text-foreground flex  justify-center py-20"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <h2 className="font-playfair font-bold text-[clamp(2rem,3vw,3rem)] text-livia-navy-blue mb-14 text-center">
          Vamos <em className="not-italic text-livia-turquoise">trabalhar</em>{" "}
          juntos?
        </h2>

        <div className="grid grid-cols-2 gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactFooter />
      </div>
    </section>
  );
}

export default Contact;
