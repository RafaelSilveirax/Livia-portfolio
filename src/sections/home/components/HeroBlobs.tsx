function HeroBlobs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-2 overflow-hidden pointer-events-none"
    >
      <div
        className="hero-blob absolute top-[10%] right-[8%] w-[28rem] h-[28rem] bg-livia-turquoise/25 blur-3xl max-md:w-64 max-md:h-64"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="hero-blob absolute bottom-[12%] left-[6%] w-[22rem] h-[22rem] bg-livia-dark-coral/20 blur-3xl max-md:w-56 max-md:h-56"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="hero-blob absolute top-[55%] right-[35%] w-[18rem] h-[18rem] bg-livia-mustard/15 blur-3xl max-md:hidden"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}

export default HeroBlobs;
