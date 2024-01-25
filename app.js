let express = require("express")
let app = express();




// app.get me 2 pera meter pass hote hai 1.rout jisme hum deta ko kha se lena hai ye pass karte hai
// 2.call back call back me bhi do pera meter pass hote hai request and respons  (1)requet hum clien request deta hai jo vo search kare (2)respons clien ke search per respons dene ka kam respons object karta hai
// request and respons dono callback ke object hai 

app.get("/", (req, res) => {
    res.send("hey my name meekail");
})


app.get("/about",(req,res)=>{
    res.send("hello from about page")
})
app.get("/contact",(req,res)=>{
    res.send("my contact is : 8696935387")
})

app.listen(12000, () => {
    console.log("hey iam listning");
})


// get => deta get karke read karna
// post => deta creat karna 
// put => deta ko update karna 
// delete => data ko dalete karna