import "./Cart.css";

function Cart({
    cart,
    setCart,
    setIsCartOpen,
    isCartOpen,
}) {
    function increaseQuantity(id) {
        setCart((prev) => {
            return prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            );
        });
    }
    function decreaseQuantity(id) {
        setCart((prev) => {
            const existingProduct = prev.find(
                (item) => item.id === id
            );
            if (existingProduct.quantity === 1) {
                return prev.filter((item) => item.id !== id);
            }
            return prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            );
        });
    }
    function clearCart() {
        setCart([]);
    }
    const totalItems = cart.reduce((total, product) => {
        return total + product.quantity;
    }, 0);

    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    return (
        <div className={`cart ${isCartOpen ? "open" : ""}`}>
            <h2>Cart</h2>
            <button className="close-cart"
                onClick={() => setIsCartOpen(false)}>
                X
            </button>

            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.length > 0 && (
                <>
                    <div className="cart-summary">

                        <p>
                            <strong>Items:</strong> {totalItems}
                        </p>

                        <p>
                            <strong>Total:</strong> ${totalPrice}
                        </p>

                        <button onClick={clearCart}>
                            Clear Cart
                        </button>

                    </div>

                    <ul>
                        {cart.map((product) => (
                            <li key={product.id}>
                                <div className="cart-item">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="cart-image"
                                    />
                                    <div className="cart-info">
                                        <h4>{product.name}</h4>
                                        <p className="cart-price">
                                            {product.price} $
                                        </p>
                                    </div>
                                    <div className="quantity-controls">

                                        <button onClick={() => decreaseQuantity(product.id)}>
                                            -
                                        </button>

                                        <span>{product.quantity}</span>

                                        <button onClick={() => increaseQuantity(product.id)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>

    );
}

export default Cart;