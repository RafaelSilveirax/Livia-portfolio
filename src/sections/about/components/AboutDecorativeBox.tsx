function AboutDecorativeBox() {
  return (
    <div
      className="relative min-h-70 rounded-[28px] overflow-hidden max-[900px]:min-h-60"
      style={{
        background:
          "linear-gradient(140deg, color-mix(in srgb, var(--color-livia-turquoise) 60%, transparent), color-mix(in srgb, var(--color-livia-navy-blue) 40%, transparent))",
        boxShadow:
          "0 18px 40px color-mix(in srgb, var(--color-livia-navy-blue) 20%, transparent)",
      }}
      aria-hidden="true"
    >
      <div className="absolute top-[20%] right-[-10%] w-50 h-50 bg-livia-mustard opacity-35 blur-[50px] rounded-full" />
    </div>
  );
}

export default AboutDecorativeBox;
