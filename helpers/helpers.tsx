type Product = {
    price: number;
    qty: number;
};

export function calculateTotal(products: Product[]): number {
    // Use reduce to calculate the total
    return products.reduce((total, product) => {
        // Multiply price by qty for each product and add to total
        return total + (product.price * product.qty);
    }, 0);
}