const { Router } = require("express");
const router = Router()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

router.post('/order-sample',async(req,res)=>{
    const {email,fName,lName,phoneNo,zipCode,address,fabrics} = req.body
    sgMail.send({
        to:email,
        from:'info@my-thread.co.uk',
        cc:'info@my-thread.co.uk',
        subject:'Your Order Sample is on the way',
        html:`
        First Name : ${fName} <br/>
        Last Name : ${lName} <br/>
        Phone No : ${phoneNo} <br/>
        Email : ${email} <br/>
        Address : ${address} <br/>
        Zip Code : ${zipCode} <br/>
        Order Fabrics : <br/> ${fabrics.map(e=> e.name + '<br/>')}
        `
    }).then(resp => {
        console.log(resp[0].statusCode)
        res.send(true)
        console.log('Mail has been forwarded')
    }).catch(err => {
        res.send(false)
        console.log(err.message)
    })
})



module.exports = router