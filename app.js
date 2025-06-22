require('dotenv').config()

const express= require('express')
const { blogs } = require('./model/index')
const app=express()

// const multer =require('./middleware/multerConfig').multer
// const storage =require('./middleware/multerConfig').storage

 const {multer,storage}= require('./middleware/multerConfig')

// multer lai layana 2 taria vo ava jun garda ne hunxa hai 
const upload = multer({ storage: storage })

 app.set('view engine', 'ejs')
require('./model/index')

app.use(express.urlencoded({ extended: true}))
//yo line ko code important xa monolethic artecture ma xa vana Monolethic artecture vana ko databasse ra code  sanag vako wala 

 app.use(express.json())    //yo chai falto falto thou ma xa vana use hunxa hai 

 app.get('/creat', (req, res) => {
    res.render('creat.ejs')
})

app.post('/creat', async (req, res) => {
    const { title, subtitle, description } = req.body
    await blogs.create({ title, subtitle, description })
    res.send('blog added successfully')
 })




 app.use(express.static("public/css/")) 

app.listen(3000,()=>{
    console.log ('start project')
})