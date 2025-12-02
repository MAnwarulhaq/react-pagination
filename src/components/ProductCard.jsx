import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        {/* Brand + Category */}
        <div className="flex justify-between items-center mt-3 text-sm">
          <span className="text-gray-500">Brand: {item.brand}</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
            {item.category}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${item.price}
          </span>

          <span className="text-sm text-red-500">
            -{item.discountPercentage}%
          </span>
        </div>

        {/* Stock */}
        <p className="mt-2 text-sm text-blue-600">
          {item.availabilityStatus}
        </p>

        {/* Button */}
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

   
 export const HOC = (ProductCard)=>{
  return (props)=>{
    return(
      <div  className="relative">
        <span className="absolute top-2 left-2 px-3  py-1 rounded-md bg-green-500 text-white">Trending Item</span>
        <ProductCard {...props}/>
      </div>
    )
  }
}



// const HOCProduct = HOC(ProductCard)



