

const route=require('express').Router()

const {createAnonUser,
       getUserById,
       getuserByName
}=require('../../controllers/users')

route.get('/:id',async (req,res)=>{
     let user

     if(isNaN(parseInt(req.params.id))){
          user=await getuserByName(req.params.id)
     }
     else {
         user=await getUserById(req.params.id)
     }
     if(user){
         res.status(200).send(user)
     }
     else {
         res.status(404).send({
             error:'No such id or username found'
         })
     }
})

route.post('/',async (req,res)=>{
      const user=await createAnonUser()
      res.status(201).send(user)
})


module.exports={
    usersroute:route
}