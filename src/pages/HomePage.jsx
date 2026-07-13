import { useState, useEffect } from "react";

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

    const searchText = search.toLowerCase();

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchText)
    );

    const [sortBy, setSortBy] = useState("default");


    const sortedProducts = [...filteredProducts];

    if (sortBy === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name-asc") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "name-desc") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    useEffect(() => {
        if (!toast) return;

        const timer = setTimeout(() => {
            setToast("");
        }, 2000);

        return () => clearTimeout(timer);
    }, [toast]);

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