import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductPage.css";

function ProductPage() {
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );
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

                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage;