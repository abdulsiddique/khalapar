const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const ejs  = require("ejs");
//const Listening = require("./models/listing.js");
const Listing = require("./models/listing.js");
const path = require("path");

const  MANGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'

async function main(){
    await mongoose.connect(MANGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));

main().then(()=>{
    console.log("Conncetd to db");
}).catch((err)=>{
    console.log(err);
})

/*app.get("/testlistening", async (req,res)=>{
    let samplelistening = new Listing({
        title : "My new villa ",
        description : "by the beach ",
        price : 1200 , 
        location : " calangaute",
        country : " India"
    });
    await samplelistening.save();
    console.log("sample was saved ");
    res.send("sucessful testing");


}); */



app.get("/",(req,res)=>{
    res.send("hello i am root ")
    });
    app.listen(port,()=>{
        console.log("app is listening on port")
    })

    
    app.get("/listings", async (req,res )=>{
        const alllistings = await Listing.find({})
        res.render("listings/index",{ alllistings });

    })
    app.get("/listings/:id" ,async (req,res) =>{
        let {id} = req.params;
         const listing = await Listing.findById(id);
         res.render("listings/show.ejs", {listing});


    })
    

