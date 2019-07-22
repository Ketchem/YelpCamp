var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/YelpCamp", {useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String, 
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name:"Granite Hill", 
//     image:"https://www.discovermoab.com/wp-content/uploads/2017/10/camping-blm.jpg"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(campground)
//         }
//     }
// );

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds", {campgrounds:campgrounds});
        }
    });

});

app.post("/campgrounds", function(req, res){
    
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    
    // Add campground to db
    Campground.create(newCampground, function(err, newCampground){
        if(err){
            console.log(err);
        }
        else{
            // Redirect to campgrounds
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, "localhost", function(){
    console.log("YelpCamp server has started!");
});