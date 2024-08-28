import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import About from "./pages/about"
import Single from "./pages/single"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='single' element={<Single/>}/>
        </Routes>
    </div>
  )
}

export default App
