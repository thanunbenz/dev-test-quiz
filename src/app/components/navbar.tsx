"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../utility/cartStore";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCartStore();
  return (
    <nav className="py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-2xl font-bold uppercase cursor-default tracking-wide"
        >
          บ้านนายดิน
        </Link>

        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className={`uppercase font-medium transition-colors duration-200 ${
              pathname === "/"
                ? "text-orange-400 underline underline-offset-4"
                : "text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
            }`}
          >
            HOME
          </Link>

          {pathname === "/store" ? (
            <Link href={'/cart'} className="flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 font-medium rounded-full text-base px-3 py-1 text-center shadow-lg">
              <FaShoppingCart className="text-lg" />
              <span>: {cart.length}</span>
            </Link>
          ) : (
            <Link
              href="/store"
              className="uppercase font-medium text-white hover:text-orange-400 hover:underline hover:underline-offset-4 transition-colors duration-200"
            >
              store
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
