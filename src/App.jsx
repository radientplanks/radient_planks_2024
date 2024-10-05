import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Inquire from './components/Inquire/Inquire'
import ProductsPage from './components/OurProducts/ProductsPage';
import ProductDetails from './components/OurProducts/ProductDetails';
import AboutUs from './components/AboutUs/AboutUs';
import Resources from './components/Resources/Resources';
import ContactUs from './components/Contact/ContactUs';
import Inquire2 from './components/Inquire2/Inquire2';
function App() {
 
  const [active, setActive] = useState("");
  return (
    <div className='bg-[#f4f4f4] '>
    <BrowserRouter>
    <Navbar active={active} setActive={setActive} />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/collection/:collectionName" element={<ProductsPage active={active} setActive={setActive}/>}/>
       <Route path="/product/:collectionName/:id" element={<ProductDetails/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/resources" element={<Resources/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
       <Route path="/inquire2" element={<Inquire2/>}/>

     </Routes>
     <Footer/>
    </BrowserRouter>
     
    </div>
  )
}

export default App
