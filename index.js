const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("server is running...");
});
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/", function (req,res) {
    res.render("index");
})

app.get("/clubs",function (req,res) {
    res.render("clubs");
})

app.get("/service",function (req,res) {
    res.render("service");
})

app.get("/blog",function (req,res) {
    res.render("blog");
})