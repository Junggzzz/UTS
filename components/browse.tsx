import Image from 'next/image';

export default function BrowseRange() {
  const categoryNames = ['Dining', 'Living', 'Bedroom'];

  const categories = categoryNames.map((name) => ({
    title: name,
    img: `/images/${name.toLowerCase()}.jpg`,
    alt: `${name} Room`,
  }));

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Browse The Range</h2>
      <p className="text-gray-500 mt-2 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden aspect-[3/4] relative">
              <Image
                src={category.img}
                alt={category.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800 mt-4">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
