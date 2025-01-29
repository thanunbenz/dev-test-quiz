import { create } from 'zustand';
import product from '../data/product';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    addQty: (id: number) => void;
    removeQty: (id: number) => void;
    delAll: () => void;
}

export const useCartStore = create<CartState>(
    (set) => ({
    cart: [],
    addToCart: (id) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        const productItem = product.find((p) => p.id === id);
        if (productItem) {
            return { cart: [...state.cart, { ...productItem, quantity: 1 }] };
        }
        return state;
    }),
    removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    addQty: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),
    removeQty: (id) =>
        set((state) => ({
            cart: state.cart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0),
        })),
    delAll: () => set({ cart: [] }),
}));
