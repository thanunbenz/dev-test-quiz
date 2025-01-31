"use client";
import CartCheckout from "../components/CartCheckout";

export default function Page() {
  return (
    <div className="container mx-auto h-full flex flex-col items-center justify-center text-center p-6">
      <CartCheckout></CartCheckout>
    </div>
  );
}
