import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const addProduct = (product) => {
    return fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
        return newProduct;
      });
  };

  
  const deleteProduct = (id) => {
    return fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" }).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  return { products, addProduct, deleteProduct };
}