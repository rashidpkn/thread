import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CheckOut from './pages/checkout'
import Estimate from './pages/estimate'
import Login from './pages/login'
import Payment from './pages/payment'
import ProductBuilder from './pages/productBuilder'
import SignUp from './pages/signup'


// import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import CheckOut2 from './pages/checkout-2'
import Cart from './pages/cart'
const clientId = '154908846260-7j286oakf35rhd8hqe8q9u5fb707hlub.apps.googleusercontent.com'

function App() {

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  

  return (
    <div className="">


      <Routes>
        <Route path='/productBuilder' element={<ProductBuilder />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/checkout-2' element={<CheckOut2 />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/payment/:clientSecret' element={<Payment />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App