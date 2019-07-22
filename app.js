var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/YelpCamp", {useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs")

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

var campgrounds = [
    {name:"Salmon Creek", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg"},
    {name:"Granite Hill", image:"https://www.discovermoab.com/wp-content/uploads/2017/10/camping-blm.jpg"},
    {name:"Mountain Goat Pass", image:"https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/01/14/national-park-camping/camping-glacier-national-park-camping.jpg.rend.hgtvcom.966.725.suffix/1491593018562.jpeg"}
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