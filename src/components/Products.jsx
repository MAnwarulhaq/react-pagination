import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState(5)
    const [startIndex, setStartIndex] = useState(1)


    const lastProductIndex = startIndex * displayProduct
    const firstProductIndex = lastProductIndex - displayProduct
    // console.log("lastProductIndex",lastProductIndex)
    // console.log("firstProductIndex",firstProductIndex)

    const visibleProducts = products.slice(firstProductIndex, lastProductIndex)


    // useEffect(() => {
    //     axios
    //         .get("https://dummyjson.com/products")
    //         .then((res) => {
    //             console.log("API Response:", res.data);
    //             setProducts(res.data.products);
    //         })
    //         .catch((err) => {
    //             console.log("Error:", err);
    //         });
    // }, []);

      useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res =>(
                // console.log(res,"res"),
                res.json()
             ) )
            .then(data => setProducts(data.products));
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
                {visibleProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            <Pagination totalproducts={products.length} productperpage={displayProduct} setStartIndex={setStartIndex} startIndex={startIndex} />
        </>

    );
}
