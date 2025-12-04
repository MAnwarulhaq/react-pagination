import { useState ,lazy,Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
// import About from './components/About'
const About = lazy(()=>import ("./components/About"))


function App() {

const [open ,setOpen ] = useState(false)
  return (
    <>
    <Suspense fallback={<h1>....Loading</h1>}>
    <h1 className='text-white text-2xl bg-indigo-600'>React Pagination</h1>
    {/* <button onClick={()=>setOpen(!open)}>click me</button> */}
    {/* {
      open && <About/>
    } */}
    
    <Products/>
    </Suspense>
    </>
  )
}

export default App
