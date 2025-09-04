import logoWebp from "../../assets/images/logo.webp";
import logoPng from "../../assets/images/logo.png";

const FormSection = ({ handleSubmit, children }) => {
  return (
    <section
      className="from-primary to-secondary flex items-center justify-center bg-gradient-to-tl p-px"
      style={{
        clipPath:
          "polygon(0 0, 70% 0, 72.2% 0.9%, 89.6% 0.9%, 91.6% 0, 100% 0, 100% 100%, 0 100%, 0 94.6%, 1.8% 93.6%, 1.8% 26.3%, 0 25.3%)",
      }}
    >
      <form
        className="relative flex size-full flex-col justify-between gap-[1.5em] overflow-hidden bg-[#0A0A0A] p-[3em] backdrop-blur-sm"
        style={{
          clipPath:
            "polygon(0 0, 70% 0, 72% 1%, 90% 1%, 92% 0, 100% 0, 100% 100%, 0 100%, 0 99%, 0 95%, 2% 94%, 2% 26%, 0 25%)",
        }}
        onSubmit={handleSubmit}
      >
        {/* Top leaklight */}
        <div className="absolute top-0 right-0 left-0 m-auto aspect-square w-4/5 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"></div>

        {/* Logo */}
        <picture>
          <source srcSet={logoWebp} />
          <img
            src={logoPng}
            alt="Hero background"
            className="relative mx-auto size-[80px] sm:size-[90px] md:size-[100px] lg:size-[110px] xl:size-[115px] 2xl:size-[120px]"
          />
        </picture>
        {children}
      </form>
    </section>
  );
};

export default FormSection;
