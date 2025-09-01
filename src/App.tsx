import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from './pages'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        {pages.map(({path,element}) =>(
          <Route key ={path} path={path} element={element}/>
        ))}
         
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
