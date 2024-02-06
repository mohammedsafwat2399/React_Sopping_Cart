import React from 'react'
import {Routes , Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import ShoppingCartProvider from './context/ShoppingCartContext'

//component 
import Home from './components/Home'
 import Store from './components/Product'
import Navbar from './components/Navbar'

 const App = () => {
  return (
   <ShoppingCartProvider>
   <Navbar/>
    <Container className='mb-4'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="store" element={<Store/>} />
         </Routes>
    </Container>
   </ShoppingCartProvider>
  )

}

export default App