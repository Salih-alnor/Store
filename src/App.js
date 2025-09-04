
import './styles/App.css';
import Navbar from './Components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './Components/layout/Footer';
import './styles/framework.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';




function App() {
  return (
    
    
    <BrowserRouter>
     <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='auth/login' element={<Login />}/>
          <Route path='auth/register' element={<Register />}/>
        </Routes>
     <Footer />
    </BrowserRouter>
   
   
  );
}

export default App;
