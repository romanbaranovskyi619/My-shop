import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, setCart, setToast }) {

    function handleClick() {

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

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
            </Link>
            <div className="product-info">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <p>{product.price} $</p>

                <button onClick={handleClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;