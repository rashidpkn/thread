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
        html:`First Name : ${fName} <br/>
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

router.post('/order-fabric',async(req,res)=>{
    const {fname,lname,phone,address,email,zipCode,fabric} = req.body
    sgMail.send({
        to:email,
        from:'info@my-thread.co.uk',
        cc:'info@my-thread.co.uk',
        subject:'Your Fabric Order is on the way',
        html:`First Name : ${fname} <br/>
        Last Name : ${lname} <br/>
        Phone No : ${phone} <br/>
        Email : ${email} <br/>
        Address : ${address} <br/>
        Zip Code : ${zipCode} <br/>
        Fabric Name : ${fabric.fabricType.name} <br/>
        Item : ${fabric.measure.item} <br/>
        Installation : ${fabric.measure.installation} <br/>
        Room name : ${fabric.measure.roomName} <br/>
        Height : ${fabric.measure.height} <br/>
        Width : ${fabric.measure.width} <br/>
        Panel : ${fabric.style.panel} <br/>
        Look : ${fabric.style.look} <br/>
        Lining : ${fabric.feature.lining} <br/>
        glide : ${fabric.feature.accessories.glide} <br/>
        corded : ${fabric.feature.accessories.corded} <br/>
        making Price : ${fabric.price} <br/>
        Accessories Price : ${fabric.feature.accessories.accessoriesPrice} <br/>
        Boxing Price : 30 <br/>
        Total Price : ${ fabric.feature.accessories.accessoriesPrice + 30 + fabric.price} <br/>
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

router.post('/message',(req,res)=>{
    const {name,email,subject,message} = req.body
    sgMail.send({
        to:email,
        from:'info@my-thread.co.uk',
        cc:'info@my-thread.co.uk',
        subject:`${subject} - ${name}`,
        html:message
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