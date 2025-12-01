import React, { useState } from 'react'

const Pagination = ({totalproducts,productperpage,setStartIndex,startIndex}) => {
    console.log("totalproducts",totalproducts)
    console.log("productperpage",productperpage)
   let pages = []

   

   for (let i = 1; i <= Math.ceil(totalproducts /productperpage) ;i++){
    pages.push(i)
   }
   console.log(pages)
  return (
    <div className='flex justify-center items-center gap-5 my-5'>
        {pages.map((page,index)=>{
            return <button key={index} onClick={()=>setStartIndex(page)} className={`border size-8 ${page === startIndex ? " bg-indigo-700 text-white" : "bg-white "}`}> {page}</button>
        })}
    </div>
  )
}

export default Pagination