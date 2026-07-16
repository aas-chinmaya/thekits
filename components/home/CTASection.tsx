export default function CTASection() {
  return (
    <section className="py-20 text-center">

      <div
        className="
        rounded-2xl
        border
        bg-muted
        p-10
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Ready to explore  Lab?
        </h2>


        <p
          className="
          mx-auto
          mt-4
          max-w-xl
          text-muted-foreground
          "
        >
          Discover tools designed to simplify
          development, analysis, and automation.
        </p>


        <button
          className="
          mt-6
          rounded-lg
          bg-primary
          px-6
          py-3
          text-sm
          font-medium
          text-primary-foreground
          hover:opacity-90
          "
        >
          Get Started
        </button>


      </div>

    </section>
  );
}