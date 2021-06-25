


$('#btnaddposts').click(()=>{
   $.post('/api/posts',{
     userId:currentuser.id,
     title:$('#posttitle').val(),
     body:$('#postbody').val()
   },(post)=>{
      console.log(post)
   })      
})


