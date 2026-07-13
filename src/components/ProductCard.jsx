import "./ProductCard.css";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cart";

function ProductCard({ product, setCart, setToast }) {

    function handleClick() {
        addToCart(product, setCart, setToast);
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