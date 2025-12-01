import React, { useState } from 'react'

const Pagination = ({totalproducts,productperpage}) => {
   let pages = []

   console.log(pages)

   for (let i = 1; i <= Math.ceil(totalproducts/productperpage) ;i++){
    pages.push(i)
   }
  return (
    <div>
        {pages.map((page,index)=>{
            return <button key={index}> {page}</button>
        })}
    </div>
  )
}

export default Pagination