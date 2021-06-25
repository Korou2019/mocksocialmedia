
const express=require('express')
const { db } = require('./db/models')

const app=express()
const SERVER_PORT=process.env.PORT || 8383

const {usersroute}=require('./routes/users')
const {postsroute}=require('./routes/posts')
const {commentsroute}=require('./routes/posts/comments')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersroute)
app.use('/api/posts',postsroute)
app.use('/api/comments',commentsroute)

app.use('/',express.static(__dirname +'/public'))
const task=async() =>{
      try{
          await db.sync({alter:true})
          app.listen(SERVER_PORT,() =>{
              console.log('Server started on http://localhost:8383')
          })

      } catch(e){
          console.error(new Error('Could not create tables Successfully'))
          console.error(e)
      }
}

task()