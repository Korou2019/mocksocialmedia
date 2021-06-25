

const {Users}=require('../db/models')

const {getRandomUsername}=require('../utils/username')


async function createAnonUser(){
      try{
          const user=await Users.create({
                name:getRandomUsername()
          })
          return user

      } catch(e){
          console.error(e)
      }
}

async function getUserById(id){
    return await Users.findOne({where :{id}})
}
async function getuserByName(name){
    return await Users.findOne({where :{name}})
}


module.exports={
    createAnonUser,
    getUserById,
    getuserByName
}

/*
async function task(){
     console.log(await createAnonUser())
     console.log(await createAnonUser())
     console.log(await createAnonUser())
     console.log(await createAnonUser())
}

task()
*/