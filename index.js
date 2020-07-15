const express = require("express");
const app = express();

app.listen(3000, function () {
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