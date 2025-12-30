import TarteSliderInfinite from "./TarteSlider";

export default function Selection() {
  const categories = [
    {
      id: 1,
      title: "Nos viennoiseries",
      image: "/vinoiseries1.png",
    },
    {
      id: 2,
      title: "Nos Tartes",
      image: "/Fraisier.png",
    },
    {
      id: 3,
      title: "Les éclats de sablé",
      image: "/sables1.png",
    },
    {
      id: 4,
      title: "Les Salés",
      image: "/Slales.png",
    },
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              {/* Card image */}
              <div className="bg-gray-100 rounded-3xl p- flex items-center justify-center h-[260px] transition group-hover:bg-gray-200">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title + arrow */}
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {cat.title}
                </h3>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
