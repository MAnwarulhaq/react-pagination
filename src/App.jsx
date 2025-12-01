import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'

function App() {

  return (
    <>
    <h1 className='text-white text-2xl bg-indigo-600'>React Pagination</h1>
    <Products/>
    </>
  )
}

export default App
