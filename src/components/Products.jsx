import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
