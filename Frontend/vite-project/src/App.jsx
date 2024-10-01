import React , {useState}from 'react'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import PlaceOrder from './pages/placeOrder/placeOrder';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {
  const [showlogin , setShowlogin] = useState(false)
  return (
   <>
   {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
    <Navbar  setShowlogin={setShowlogin}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path = '/placeOrder' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer />
    
   </>
  )
}

export default App
