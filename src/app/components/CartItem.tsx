"use client";
import product from "../data/product";
import { useCartStore } from "../utility/cartStore";

export default function CartItem() {
  const { addToCart } = useCartStore();

  return (
    <>
      <h1 className="text-5xl font-bold mb-4">รายการสินค้า</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-center w-full">
        <table className="w-auto bg-white border border-gray-300 text-gray-700 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 border-b">ชื่อหนังสือ</th>
              <th className="py-3 px-6 border-b">ราคา</th>
              <th className="py-3 px-6 border-b">การดำเนินการ</th>
            </tr>
          </thead>
          <tbody>
            {product.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{book.title}</td>
                <td className="py-3 px-6 border-b">{book.price} บาท</td>
                <td className="py-3 px-6 border-b">
                  <button
                    onClick={() => addToCart(book.id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                  >
                    เพิ่มลงตะกร้า
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
