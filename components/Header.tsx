import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm font-poppins">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Furniro Logo" width={30} height={30} />
        <span className="text-xl font-bold text-gray-800">Furniro</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700 text-lg">
        <FaUser className="cursor-pointer hover:text-black" />
        <FaSearch className="cursor-pointer hover:text-black" />
        <FaHeart className="cursor-pointer hover:text-black" />
        <FaShoppingCart className="cursor-pointer hover:text-black" />
      </div>
    </header>
  );
}
