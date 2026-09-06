import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder= "Search products here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm mb-6 px-4 py-2 rounded-full bg-gray-100 text-gray-800 outline-none"
      />

      <div className="grid grid-cols-4 gap-4">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 text-center shadow-sm">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-sm mb-2">{product.description}</p>
            <p className="text-sm font-medium">Ksh {product.price}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 text-center mt-8">Sorry, Game not in stock</p>
      )}
    </div>
  );
}

export default Shop;