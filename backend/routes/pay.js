const { Router } = require("express");
const router = Router()
const stripe = require('stripe')('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')



router.post('/',async (req,res)=>{
    try {
        const {email,amount} = req.body
    const paymentIntent = await stripe.paymentIntents.create({
        // amount:amount*100,
        amount:amount*100,
        currency:'eur',
        metadata:{integration_check: 'accept_a_payment'},
        receipt_email:email,
        // payment_method_types: ['klarna','card'],
    })
    res.json({'client_secret': paymentIntent['client_secret']})
    console.log('Done')
    } catch (error) {
        console.log(error.message)
    }
    
})


module.exports = router
