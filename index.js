const express = require("express")
const app = express()
const ejs = require('ejs');
const port = 8000
app.engine('html', ejs.renderFile);
app.use(express.static('public'));
app.set("view engine", "html"); 

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen(port,()=>{
    console.log('server in '+port)
})