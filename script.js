import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit",(req,res)=>{
    console.log(req.body)

    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if(password<8){
        return res.send("password must be 8 characters")
    }else if(password !== confirmPassword){
        return res.send("password Didn't matched")
    }else{
        return res.redirect("/login");
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/login",(req,res)=>{
    console.log(req.body)
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/public/login.html")
})


app.listen(port ,()=>{
    console.log(`server running on port ${port}`)
})