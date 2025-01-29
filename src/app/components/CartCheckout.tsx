"use client";
import { useCartStore } from "../utility/cartStore";
import { calPrice } from "../utility/calprice";

export default function CartCheckout() {
  const { cart, addQty, removeQty, removeFromCart, delAll } = useCartStore();

  return (
    <>
      <h1 className="text-5xl font-bold mb-4">ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <p className="text-3xl">ตะกร้าว่าง</p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ชื่อหนังสือ
                </th>
                <th scope="col" className="px-6 py-3">
                  ราคา
                </th>
                <th scope="col" className="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" className="px-6 py-3">
                  รวม
                </th>
                <th scope="col" className="px-6 py-3">
                  การดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.price} บาท
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => removeQty(item.id)}
                        className="px-2 py-1 border border-gray-300 rounded-full hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => addQty(item.id)}
                        className="px-2 py-1 border border-gray-300 rounded-full hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.price * item.quantity} บาท
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-300 font-bold text-gray-900">
                <td colSpan={3} className="px-6 py-3 text-right">
                  รวมราคาสินค้าทั้งหมด:
                </td>
                <td className="px-6 py-3">
                  {calPrice(cart)}{" "}
                  บาท
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={delAll}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
                  >
                    ลบทั้งหมด
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
}
