function AboutHeader() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
        sobre mim
      </p>

      <h2 className="font-serif font-bold leading-[1.05] text-white text-[clamp(2.25rem,4vw,3.5rem)]">
        Design, Video Editing
        <br className="max-sm:hidden" /> and{" "}
        <span className="text-livia-turquoise">Illustration</span>
      </h2>

      <div
        className="w-16 h-0.5 rounded-full bg-livia-turquoise"
        aria-hidden="true"
      />

      <p className="font-sans text-xs uppercase tracking-widest text-white/35">
        Arte que conecta, design que comunica
      </p>
    </div>
  );
}

export default AboutHeader;
