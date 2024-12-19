
const express = require("express")

const app = express()

app.get("/",function (req , res) {
        res.send("hello")
})

const isServerAllowed = () => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();

   
    return day >= 1 && day <= 5 && hour >= 9 && hour < 22;
};

app.use((req, res, next) => {
    if (isServerAllowed()) {
        next(); 
    } else {
        res.status(403).send("Server work onley from Monday to Fraiday from 9Am to 5Pm");
    }
});

app.get('/', (req, res) => {
    res.send("Welcome! The server is running.");
});




app.get("/home",function (req , res) {
    
    res.sendFile(__dirname+ "/index.html")
})


app.get("/about",function (req , res) {
    
    res.sendFile(__dirname+ "/about.html")
})


app.get("/contact",function (req , res) {
    
    res.sendFile(__dirname+ "/contact.html")
})




app.listen(5001,console.log("The server is Activated"))

