require('dotenv').config()

const express= require('express')
const { blogs, users } = require('./model/index')
const app=express()

// const multer =require('./middleware/multerConfig').multer
// const storage =require('./middleware/multerConfig').storage

const bcrypot= require('bcrypt')

 const {multer,storage}= require('./middleware/multerConfig')

// multer lai layana 2 taria vo ava jun garda ne hunxa hai 
const upload = multer({ storage: storage })

 app.set('view engine', 'ejs')
require('./model/index')

app.use(express.urlencoded({ extended: true}))
//yo line ko code important xa monolethic artecture ma xa vana Monolethic artecture vana ko databasse ra code  sanag vako wala 

 app.use(express.json())  
   //yo chai falto falto thou ma xa vana use hunxa hai


app.get('/blog/:id', async(req, res) => {
    const id =req.params.id
    const blog = await blogs.findByPk(id)
    res.render('singleBlog.ejs',{blog: blog})
})

    app.get ("/", async (req, res) =>{
       const datas = await blogs.findAll()
       res.render('home',{blogs :datas}) 
    })


    app.get('/delete/:id',async(req, res) => {
        const id = req.params.id
       await blogs.destroy({
            where: {
                id: id
            }
        })
        res.redirect('/')
    })
 app.get('/creat', (req, res) => {
    res.render('creat.ejs')
})

app.post('/creat', upload.single('image')  ,async (req, res) => {
    const filename =req.file.filename
    const { title, subtitle, description } = req.body
    await blogs.create({ title, subtitle, description,  image : filename})
    res.send('blog added successfully')
 })


app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.post('/register', async (req, res) =>{
 const { username, email, password } = req.body
await users.create({
 username: username,
    email: email,
    password: bcrypot.hashSync(password, 10) // 10 is the salt rounds
 })
 res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

 app.use(express.static("public/css/")) 
 app.use(express.static('./storage/'))

app.listen(3000,()=>{
    console.log ('start project')
})