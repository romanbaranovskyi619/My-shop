import "./Toolbar.css";

function Toolbar({
    search,
    setSearch,
    sortBy,
    setSortBy,
}) {
    return (
        <div className="toolbar">
            <input
                type="text"
                value={search}
                placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="price-low">
                    Price: Low to High
                </option>
                <option value="price-high">
                    Price: High to Low
                </option>
                <option value="name-asc">
                    Name: A to Z
                </option>
                <option value="name-desc">
                    Name: Z to A
                </option>
            </select>
        </div>
    );
}

export default Toolbar;