import { calPrice } from "./calprice";
import product from "../data/product";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

describe("calPrice function", () => {
    test("ไม่มีส่วนลดเมื่อซื้อหนังสือ 10 เล่ม", () => {
        const cart: CartItem[] = [
            { ...product[0], quantity: 1 }
        ];
        expect(calPrice(cart)).toBe(100);
    });

    test("ลด 10% เมื่อซื้อหนังสือ 2 เล่มที่ไม่เหมือนกัน", () => {
        const cart: CartItem[] = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(180);
    });

    test("ลด 20% เมื่อซื้อหนังสือ 3 เล่มที่ไม่เหมือนกัน", () => {
        const cart = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
            { ...product[2], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(240);
    });

    test("ลด 30% เมื่อซื้อหนังสือ 4 เล่มที่ไม่เหมือนกัน", () => {
        const cart = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
            { ...product[2], quantity: 1 },
            { ...product[3], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(280);
    });


    test("ลด 40% เมื่อซื้อหนังสือ 5 เล่มที่ไม่เหมือนกัน", () => {
        const cart = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
            { ...product[2], quantity: 1 },
            { ...product[3], quantity: 1 },
            { ...product[4], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(300);
    });

    test("ลด 50% เมื่อซื้อหนังสือ 6 เล่มที่ไม่เหมือนกัน", () => {
        const cart = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
            { ...product[2], quantity: 1 },
            { ...product[3], quantity: 1 },
            { ...product[4], quantity: 1 },
            { ...product[5], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(300);
    });

    test("ลด 60% เมื่อซื้อหนังสือ 7 เล่มที่ไม่เหมือนกัน", () => {
        const cart = [
            { ...product[0], quantity: 1 },
            { ...product[1], quantity: 1 },
            { ...product[2], quantity: 1 },
            { ...product[3], quantity: 1 },
            { ...product[4], quantity: 1 },
            { ...product[5], quantity: 1 },
            { ...product[6], quantity: 1 },
        ];
        expect(calPrice(cart)).toBe(280);
    });

    test("ซื้อซ้ำเล่มเดิมไม่ลดราคาเพิ่ม 10 เล่ม", () => {
        const cart = [
            { ...product[0], quantity: 10 },
        ];
        expect(calPrice(cart)).toBe(1000);
    });
});
