import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element = {<SingleBlog />}/>
      <Route path='/create' element = {<CreateBlog/>}/>
      <Route path='/edit/:id' element = {<EditBlog/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
