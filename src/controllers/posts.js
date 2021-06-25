


const {Posts,Users}=require('../db/models')


async function createNewPost(userid,title,body){
       try{
           const post=await Posts.create({
                title:title,
                body:body,
                userId:userid
           })
           return post
      } catch(e){
          console.error(e)
      }
      
}

async function findAllPosts(query){
    //TODO:Handle query param
      const posts= await Posts.findAll({
          include:[Users]
      })
      return posts
}

async function findMyPosts(userId){
    //TODO:Handle query param
      const posts= await Posts.findAll({where:{userId}})
      return posts
}





module.exports={
    createNewPost,findAllPosts,findMyPosts
}


/*
async function task() {

    const posts=await showAllPosts()
    for(let p of posts){
        console.log(`${p.title}\n ${p.user.name} \n ${p.body}\n=====\n`)
    }
}

     

task()
*/
