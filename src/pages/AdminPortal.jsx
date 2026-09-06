import { useEffect, useState } from "react";

function AdminPortal() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });
    const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: Number(form.price) }),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        setForm({ name: "", description: "", price: "" });
      });
  };
  const handleDelete = (id) => {
  fetch(`http://localhost:3001/products/${id}`, {
    method: "DELETE",
  }).then(() => {
    setProducts(products.filter((product) => product.id !== id));
  });
};

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Portal</h1>

      <form onSubmit={handleAddProduct} className="mb-8 flex flex-col gap-3 max-w-sm">
        <input
          name="name"
          value={form.name}
          onChange={handleFormChange}
          placeholder="Product name"
          className="px-4 py-2 rounded-full bg-gray-100"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleFormChange}
          placeholder="Description"
          className="px-4 py-2 rounded-full bg-gray-100"
        />
        <input name="price" 
        value={form.price} 
        onChange={handleFormChange} 
        placeholder="Price" 
        className="px-4 py-2 rounded-full bg-gray-100" />
        <button type="submit"
          className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium"
        >
          Add Product
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold mb-1">{product.name}</p>
            <p className="text-sm mb-2">{product.description}</p>
            <p className="text-sm font-medium">Ksh {product.price}</p>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-xs text-red-500 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPortal;