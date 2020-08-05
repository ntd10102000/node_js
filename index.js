const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("se vơ running.....");
})
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function (req,res) {
    // res.sendFile(__dirname+"/views/home.html");
    let title = "Dự báo thời tiết";
    res.render("home",{
        title: title
    });
})

app.get("/login",function (req,res) {
    res.send("đây là trang login");
})
const fs = require("fs");
app.get("/danh-muc",function (req,res) {
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    res.render("las10",{
        cats:cats
    });
});

app.get("/assignment15",function (req,res) {
    let foods = fs.readFileSync("data/dataass15.json","UTF-8");
    foods = JSON.parse(foods);
    res.render("assignment15",{
        foods:foods
    });
});

app.get("/chitiet/:id",function (req,res) {
    let ID = req.params.id;
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    let count = 0;
    cats.map(e=>{
        count++;
        if(e.id == ID){
            res.render("chitiet",{
                cat: e
            });
            count=0;
        }
    })
    if(count >= cats.length){
        res.send("không tìm thấy");
    }
})