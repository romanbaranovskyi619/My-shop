import "./Header.css";
function Header({ title, cart, setIsCartOpen }) {
    const totalItems = cart.reduce((total, product) => {
        return total + product.quantity;
    }, 0);
    return (
        <header className="header">
            <div className="logo">
                <span>🛍</span>
                <h1>{title}</h1>
            </div>

            <div className="header-right"
                onClick={() => setIsCartOpen(true)}
            >
                <span>🛒</span>
                <span>{totalItems}</span>
            </div>
        </header>
    );
}

export default Header;