import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts]= useState({})

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then( data => setProducts(data.products))
        .catch(error => error)
    },[])

    console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products