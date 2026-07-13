export function addToCart(product, setCart, setToast) {
    setCart((prev) => {
        const existingProduct = prev.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            return prev.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            );
        }

        return [
            ...prev,
            {
                ...product,
                quantity: 1,
            },
        ];
    });

    setToast(`${product.name} added to cart!`);
}