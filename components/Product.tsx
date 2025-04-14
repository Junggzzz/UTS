import Image from 'next/image';

const products = [
  { name: 'Syltherine', desc: 'Stylish cafe chair', price: 2500000, original: 3500000, img: '/images/syltherine.jpg', tag: '-30%' },
  { name: 'Leviosa', desc: 'Stylish cafe chair', price: 2500000, img: '/images/leviosa.jpg' },
  { name: 'Lolito', desc: 'Luxury big sofa', price: 7000000, original: 14000000, img: '/images/lolito.jpg', tag: '-50%' },
  { name: 'Respira', desc: 'Outdoor bar table and stool', price: 500000, img: '/images/respira.jpg', tag: 'New' },
  { name: 'Grifo', desc: 'Night lamp', price: 1500000, img: '/images/grifo.jpg' },
  { name: 'Muggo', desc: 'Small mug', price: 150000, img: '/images/muggo.jpg', tag: 'New' },
  { name: 'Pingky', desc: 'Cute bed set', price: 7000000, original: 14000000, img: '/images/pingky.jpg', tag: '-50%' },
  { name: 'Potty', desc: 'Minimalist flower pot', price: 500000, img: '/images/potty.jpg', tag: 'New' },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const badgeColor = (tag?: string) =>
  tag === 'New' ? 'bg-teal-500' : tag?.includes('%') ? 'bg-red-500' : 'bg-gray-400';

export default function ProductSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((p, i) => (
          <div key={i} className="relative group bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
            
            {/* Badge Bulat */}
            {p.tag && (
              <span
                className={`absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center text-[10px] font-semibold text-white rounded-full bg-opacity-90 ${badgeColor(p.tag)}`}
              >
                {p.tag.replace('%', '')}
              </span>
            )}

            {/* Gambar + Hover Overlay */}
            <div className="relative aspect-[4/5] w-full z-10">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
              <div className="absolute inset-0 z-30 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3 text-white">
                <button className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200">Add to cart</button>
                <div className="flex gap-4 text-sm">
                  <span>🔗 Share</span>
                  <span>⚖ Compare</span>
                  <span>❤️ Like</span>
                </div>
              </div>
            </div>

            {/* Info Produk */}
            <div className="p-4 text-left">
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <p className="mt-2 font-semibold text-gray-800 text-sm">
                {formatPrice(p.price)}
                {p.original && (
                  <span className="text-gray-400 line-through ml-2">{formatPrice(p.original)}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Show More */}
      <div className="mt-12">
        <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition">
          Show More
        </button>
      </div>
    </section>
  );
}
