import { useState, useMemo } from "react";

import Header from "../components/Header";
import Cart from "../components/Cart";
import Toast from "../components/Toast";
import Toolbar from "../components/Toolbar";
import ProductGrid from "../components/ProductGrid";

import products from "../data/products";

import "../App.css";

function HomePage({ cart, setCart, toast, setToast }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("default");

    const sortedProducts = useMemo(() => {
        const searchText = search.toLowerCase();

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchText)
        );

        const sorted = [...filtered];

        switch (sortBy) {
            case "price-low":
                sorted.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                sorted.sort((a, b) => b.price - a.price);
                break;

            case "name-asc":
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;

            case "name-desc":
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;

            default:
                break;
        }

        return sorted;
    }, [search, sortBy]);

    return (
        <div>
            <Header
                title="My-Shop"
                cart={cart}
                setIsCartOpen={setIsCartOpen}
            />

            <div className="content">
                <div className="products-section">
                    <Toolbar
                        search={search}
                        setSearch={setSearch}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />

                    <main>
                        <h2>Products</h2>

                        <ProductGrid
                            products={sortedProducts}
                            setCart={setCart}
                            setToast={setToast}
                        />
                    </main>
                </div>

                <div
                    className={`overlay ${isCartOpen ? "show" : ""}`}
                    onClick={() => setIsCartOpen(false)}
                ></div>

                <Cart
                    cart={cart}
                    setCart={setCart}
                    setIsCartOpen={setIsCartOpen}
                    isCartOpen={isCartOpen}
                />

                {toast && <Toast message={toast} />}
            </div>
        </div>
    );
}

export default HomePage;