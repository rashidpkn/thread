const { Router } = require("express");
const router = Router()
const stripe = require('stripe')('API KEYS')



router.post('/',async (req,res)=>{
    try {
        const {email,amount} = req.body
    const paymentIntent = await stripe.paymentIntents.create({
        amount:amount*100,
        currency:'eur',
        metadata:{integration_check: 'accept_a_payment'},
        receipt_email:email
    })
    res.json({'client_secret': paymentIntent['client_secret']})
    console.log('Done')
    } catch (error) {
        console.log(error.message)
    }
    
})


module.exports = router
