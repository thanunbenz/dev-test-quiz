"use client";
import CartCheckout from "../components/CartCheckout";
import Navbar from "../components/navbar";

export default function Page() {

  return (
    <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
      <Navbar />
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center p-6">
      <CartCheckout></CartCheckout>
      </div>
    </div>
  );
}
