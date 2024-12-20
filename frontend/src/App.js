import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CheckOut from './pages/checkout'
import Estimate from './pages/estimate'
import Login from './pages/login'
import Payment from './pages/payment'
import ProductBuilder from './pages/productBuilder'
import SignUp from './pages/signup'




import Cart from './pages/cart'
import { useSelector } from 'react-redux'
import AboutUs from './pages/AboutUs'
import Curtains from './pages/Curtains'
import PencilPleatCurtain from './pages/Curtains/pages/pencilPleatCurtains'
import EyeletCurtain from './pages/Curtains/pages/eyelet'
import DoublePleatCurtain from './pages/Curtains/pages/doublePleat'
import Goblet from './pages/Curtains/pages/goblet'
import TriplePleat from './pages/Curtains/pages/triplePleat'
import Contact from './pages/ContactUs'
import Samples from './pages/samples'
import SampleCheckout from './pages/Sample checkout'
import ThankYou from './pages/thankyou'




function App() {
  const {loginStatus} = useSelector(state=>state.user)


  

  return (
    <div className="font-inter">
      <Routes>
        <Route path='/productBuilder' element={<ProductBuilder />} />
        <Route path='/checkout' element={<CheckOut />} />

        {/* <Route path='/signup' element={loginStatus ? <Navigate to={'/cart'} /> : <SignUp/>} /> */}
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/estimate' element={<Estimate />} />
        {/* <Route path='/login' element={loginStatus ? <Navigate to={'/cart'} /> : <Login/>} /> */}
        <Route path='/login' element={ <Login/>} />
        <Route path='/payment/:clientSecret' element={<Payment />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/cart' element={loginStatus ? <Cart /> : <Navigate to={'/login'} />  } />

        <Route path="/curtains" element={<Curtains/>}/>
        <Route path="/PencilPleatCurtains" element={<PencilPleatCurtain />} />
        <Route path="/EyeletCurtains" element={<EyeletCurtain />} />
        <Route path="/DoublePleatCurtains" element={<DoublePleatCurtain />} />      
        <Route path="/TriplePleatCurtains" element={<TriplePleat />} />
        <Route path="/Goblet" element={<Goblet />} />

        <Route path='/order-samples' element={<Samples/>} />
        <Route path='/samples-checkout' element={<SampleCheckout/>} />


      {/* static Pages */}
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path="/contact-us" element={<Contact/>}/>



      </Routes>
    </div>
  )
}

export default App