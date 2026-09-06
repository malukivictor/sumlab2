import { useState } from "react";
import { useProducts } from "../hook/useProducts";

function AdminPortal() {
  const { products, addProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({ ...form, price: Number(form.price) });
    setForm({ name: "", description: "", price: "" });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mb-6">Game Wizard Portal</h1>

      <form onSubmit={handleAddProduct} className="mb-8 flex flex-col gap-3 max-w-sm">
        <input
          name="name"
          value={form.name}
          onChange={handleFormChange}
          placeholder="Game title"
          className="px-4 py-2 rounded-full bg-gray-100" />
        <input
          name="description"
          value={form.description}
          onChange={handleFormChange}
          placeholder="Game description"
          className="px-4 py-2 rounded-full bg-gray-100" />
        <input
          name="price"
          value={form.price}
          onChange={handleFormChange}
          placeholder="Game price"
          className="px-4 py-2 rounded-full bg-gray-100"/>
        <button type="submit" className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium">
          Add a Game
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold mb-1">{product.name}</p>
            <p className="text-sm mb-2">{product.description}</p>
            <p className="text-sm font-medium">Ksh {product.price}</p>
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-xs text-red-500 mt-2">
              Delete Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPortal;