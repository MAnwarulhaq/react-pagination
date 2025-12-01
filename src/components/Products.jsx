import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [displayProduct,setDisplayProduct] = useState(5)
  const [startIndex,setStartIndex] = useState(2)

  
  const lastProductIndex = startIndex * displayProduct
const  firstProductIndex  =lastProductIndex - displayProduct

const visibleProducts = products.slice(firstProductIndex,lastProductIndex)
  

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {visibleProducts.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
