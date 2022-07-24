import React from 'react'
import Detail from './components/Detail'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Product />} />
      <Route exact path="/details" element={<Detail />} />
    </Routes>
  )
}

export default App