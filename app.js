var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs")

var campgrounds = [
    {name:"Salmon Creek", image: "https://www.photosforclass.com/download/flickr-1430198323"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/flickr-1342367857"},
    {name:"Mountain Goat Pass", image:"https://www.photosforclass.com/download/flickr-7842069486"}
];


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){


    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    
    // Add to campgrounds array
    campgrounds.push(newCampground);
    
    // Redirect to campgrounds
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, "localhost", function(){
    console.log("YelpCamp server has started!");
});