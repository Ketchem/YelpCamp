var express = require('express');
var app = express();
app.set("view engine", "ejs")


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name:"Salmon Creek", image: "https://www.photosforclass.com/download/flickr-1430198323"},
        {name:"Granite Hill", image:"https://www.photosforclass.com/download/flickr-1342367857"},
        {name:"Mountain Goat Pass", image:"https://www.photosforclass.com/download/flickr-7842069486"}
    ];

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form
    
});

app.listen(3000, "localhost", function(){
    console.log("YelpCamp server has started!");
});