

const Sequelize=require('sequelize')

const DataTypes=require('sequelize').DataTypes


const db=new Sequelize('krsocialmediadb','krsocialuser','krsocialpass',{
      host:'localhost',
      dialect:'mysql'
})


const COL_ID_DEF={
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
}

const COL_USERNAME_DEF={
    type: DataTypes.STRING(30),
    unique:true,
    allowNull:false     
}

const COL_TITLE_DEF={
    type: DataTypes.STRING(140),
    allowNull:false     
}

const Users=db.define('user',{
      id:COL_ID_DEF,
      name:COL_USERNAME_DEF
})

const Posts=db.define('post',{
      id:COL_ID_DEF,
      title:COL_TITLE_DEF,
      body:{
          type:DataTypes.TEXT,
          allowNull:false
      }     
})

const Comments=db.define('comment',{
      id:COL_ID_DEF,
      title:COL_TITLE_DEF,
      body:{
          type:DataTypes.TEXT('tiny')
      }
})

Posts.belongsTo(Users)
Users.hasMany(Posts)

Comments.belongsTo(Posts)
Posts.hasMany(Comments)

Comments.belongsTo(Users)
Users.hasMany(Comments)

module.exports={
    db,
    Users,Posts,Comments
}