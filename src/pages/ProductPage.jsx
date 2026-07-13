import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductPage.css";
import { addToCart } from "../utils/cart";

function ProductPage({ setCart, setToast }) {
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );
    function handleAddToCart() {
        addToCart(product, setCart, setToast);
    }
    return (
        <div className="product-page">
            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                    width="400"
                />
            </div>

            <div className="product-info">
                <Link to="/" className="back-link">
                    ← Back to Shop
                </Link>
                <h1>{product.name}</h1>

                <h2>{product.price} $</h2>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage; 