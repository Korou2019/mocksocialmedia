

const {Comments}=require('../db/models')


async function createNewComment(userid,postid,title,body) {
      
      try{
          const comment=await Comments.create({
                title:title,
                body:body,
                userId:userid,
                postId:postid
          })
          return comment

      } catch(e){
          console.error(e)
      }
}

async function getAllCommentforaPost(postId){
      try{
          const comments=await Comments.findAll({ where:{postId}})
          return  comments
      }catch(e){
        console.error(e)
      }    
}


module.exports={
      createNewComment,getAllCommentforaPost
}
