const modules = [
  {
    name: "Website Audit",
    description:
      "Analyze websites, performance, SEO, and technical health.",
  },
  {
    name: "Future Tools",
    description:
      "More intelligent products and tools coming soon.",
  },
];


export default function ModulePreview() {
  return (
    <section className="py-16">

      <div className="mb-8">

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Available Tools
        </h2>


        <p className="mt-3 text-muted-foreground">
          Explore products built inside  Lab.
        </p>

      </div>


      <div className="grid gap-6 md:grid-cols-2">

        {modules.map((item)=>(
          <div
            key={item.name}
            className="
            rounded-xl
            border
            bg-card
            p-6
            shadow-sm
            "
          >

            <h3 className="text-xl font-semibold">
              {item.name}
            </h3>


            <p className="mt-3 text-muted-foreground">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}