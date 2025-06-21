const express= require('express')
const app=express()

 app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.render("home.ejs")
})

 app.get('/about',(req, res)=>{
    res.render('about.ejs')
 })


 app.use(express.static("public/css/")) 

app.listen(3000,()=>{
    console.log ('start project')
})