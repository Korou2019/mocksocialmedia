


const route=require('express').Router()

const {getAllCommentforaPost,createNewComment}=require('../../controllers/comments')


route.get('/:id',async (req,res)=>{
      const comments=await getAllCommentforaPost(req.params.id)
      res.status(200).send(comments)
})

route.post('/',async (req,res)=>{
      const {userId,postId,title,body}=req.body
      const comment=await createNewComment(userId,postId,title,body)
      res.status(201).send(comment)
})

module.exports={
    commentsroute:route
}