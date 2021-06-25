

const route=require('express').Router()


const {createNewPost,
       findAllPosts,findMyPosts
}=require('../../controllers/posts')



route.get('/',async (req,res)=>{
      const posts=await findAllPosts()
      res.status(200).send(posts)
})


route.get('/myposts',async (req,res)=>{
    const {userId}=req.query
    const posts=await findMyPosts(userId)
    res.status(200).send(posts)
})





route.post('/',async (req,res)=>{
    
    const {userId,title,body}=req.body
    if(!userId || !title || !body){
       return res.status(400).send({
           error:'Need userId ,title,body for a post'
       })
    }
    const post=await createNewPost(userId,title,body)
    res.status(201).send(post)      
})




module.exports={
    postsroute:route
}


