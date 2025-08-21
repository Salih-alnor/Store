 // import './Bootstrap/css-file/bootstrap.min.css'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './framework.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    
    
    <BrowserRouter>
     <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
     <Footer />
    </BrowserRouter>
   
   
  );
}

export default App;
