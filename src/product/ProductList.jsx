import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
    console.info("load run");
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("./products.json");
      const data = await response.json();
      setProducts(data);
    }
    if (load) {
      fetchProducts();
    }
  }, [load]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>load</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
