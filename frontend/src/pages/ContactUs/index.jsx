import React from 'react'
import Banner1 from './components/Banner1'
// import PhoneNoAndEmail from './components/PhoneNoAndEmail'
// import Form from './components/form'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Form2 from './components/Form2'

function Contact() {
  return (
    <div>
      <Navbar />
      <Banner1/>
      {/* <PhoneNoAndEmail/> */}
      {/* <Form /> */}
      <Form2 />
      <Footer />
    </div>
  )
}

export default Contact