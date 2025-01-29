interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export function calPrice(books: CartItem[]) {
    const count = new Set(books.map(book => book.id)).size;
    const total = books.reduce((sum, book) => sum + book.price * book.quantity, 0);
    const qty = books.reduce((sum, book) => sum + book.quantity, 0);
    const avg = total / qty;

    let priceDiscount = 0;
    if (count === 2) {
        priceDiscount = (count * (avg)) * 0.1;
    } else if (count === 3) {
        priceDiscount = (count * (avg)) * 0.2;
    } else if (count === 4) {
        priceDiscount = (count * (avg)) * 0.3;
    } else if (count === 5) {
        priceDiscount = (count * (avg)) * 0.4;
    } else if (count === 6) {
        priceDiscount = (count * (avg)) * 0.5;
    } else if (count === 7) {
        priceDiscount = (count * (avg)) * 0.6;
    }

    return (total) - (priceDiscount);
}