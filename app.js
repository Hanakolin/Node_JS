require('dotenv').config()

const express= require('express')
const { blogs, users } = require('./model/index')
const app=express()

// const multer =require('./middleware/multerConfig').multer
// const storage =require('./middleware/multerConfig').storage

const bcrypot= require('bcrypt')


const { homepage, singleBlog, deleteBlog, createform, regesterform, loginform, createBlog, registerform, registeruse, loginuse } = require('./controller/blogController')


const blogRoute =require('./routes/blogRoute')
const auuthRoute =require('./routes/authRoute')


// multer lai layana 2 taria vo ava jun garda ne hunxa hai 

 app.set('view engine', 'ejs')
require('./model/index')

app.use(express.urlencoded({ extended: true}))
//yo line ko code important xa monolethic artecture ma xa vana Monolethic artecture vana ko databasse ra code  sanag vako wala 

 app.use(express.json())  
   //yo chai falto falto thou ma xa vana use hunxa hai
   
app.use('',blogRoute)
app.use('',auuthRoute)

 app.use(express.static("public/css/")) 
 app.use(express.static('./storage/'))

app.listen(3000,()=>{
    console.log ('start project')
})