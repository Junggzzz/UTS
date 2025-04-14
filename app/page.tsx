import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrowseRange from "@/components/browse";
import ProductSection from "@/components/Product";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Furniro</title>
      </Head>
     <Header />
     <HeroSection />
     <BrowseRange />
      <ProductSection />

      {/* Inspiration Section */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">50+ Beautiful Rooms Inspiration</h2>
        <p className="mb-6">Our design ideas to style your home</p>
        <button className="px-6 py-2 bg-[#B88E2F] text-white rounded-lg">Explore More</button>
      </section>

      {/* Hashtag Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">#InspirationFurniture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">Image 1</div>
          <div className="p-4 bg-white shadow-lg rounded-lg">Image 2</div>
          <div className="p-4 bg-white shadow-lg rounded-lg">Image 3</div>
          <div className="p-4 bg-white shadow-lg rounded-lg">Image 4</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <div className="w-full">
          <p>&copy; 2025 Furniro. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}