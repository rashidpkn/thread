const { Router } = require('express')
const SavedProduct = require('../model/savedProduct')
const User = require('../model/user')

const router = Router()

// router.post('/save',async(req,res)=>{
//     const {email,name,roomName,item,installation,isPole,height,width,panel,look,lining,poleAndTrack,glide,corded,price} = req.body
//     try {
//         const found = await User.findOne({where:{email},raw:true})
//         const saved = await found.savedProduct 

//         if(found){
//             await User.update({savedProduct:[ ...saved,{name,roomName,item,installation,isPole,height,width,panel,look,lining,poleAndTrack,glide,corded,price}]},{where:{email}})
//             res.send({
//                 status:true,
//                 reason:"Saved Product is Updated"
//             })
//         }
//         else{
//             res.send({
//                 status:false,
//                 reason:'User is not exist'
//             })
//         }
//     } catch (error) {
//         res.send({
//             status:false,
//             reason:error.message
//         })
//     }
// })

// router.post('/saved',async (req,res)=>{
//     const {email} = req.body
//     const found = await User.findOne({where:{email},raw:true})
//         res.send( found?.savedProduct )
// })

router.post('/save', async (req, res) => {
    const { email, googleId, name, roomName, item, installation,
        isPole, height, width, panel, look, lining, poleAndTrack,
        glide, corded, price } = req.body

    try {
        if (email) {
            await SavedProduct.create({
                email, googleId, name, roomName, item, installation, isPole, height, width, panel, look, lining, poleAndTrack,
                glide, corded, price
            })
            res.send({
                status:true,
                reason:""
            })
        } else if (googleId) {
            await SavedProduct.create({
                googleId, googleId, name, roomName, item, installation, isPole, height, width, panel, look, lining, poleAndTrack,
                glide, corded, price
            })
            res.send({
                status:true,
                reason:""
            })
        }else{
            res.send({
                status:false,
                reason:"Somthing is Wrong"
            })
        }
    } catch (error) {
        res.send({
            status:false,
            reason:error.message
        })
    }
})

 router.post('/saved',async(req,res)=>{
     const {email,googleId} = req.body
     if(email)
         res.send(
            await SavedProduct.findAll({where:{email}})
         )
        else if(googleId){
            res.send(
                await SavedProduct.findAll({where:{googleId}})
            )
        }
 })




module.exports = router