import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({
    products,
    setCart,
    setToast,
}) {
    return (
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    setCart={setCart}
                    setToast={setToast}
                />
            ))}
        </div>
    );
}

export default ProductGrid;