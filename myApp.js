require('dotenv').config();
const express=require('express');
const app =express();
const port=3000;

//create moongoose connection
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
mongoose.connect("mongodb+srv://coding70:coding70@cluster0.mmbfd.mongodb.net/Rishabhdb");

//create a model
const Schema = mongoose.Schema;
const personSchema = new Schema ({
  name : {type: String, required:true },
  age : Number,
  favoriteFoods : [String]
});
const Person = mongoose.model('Person',personSchema);


var db = mongoose.connection;

app.listen(port,()=>console.log('started listening...'));

app.get('/',function(req,res){
res.send('Rishabh is working');
});

app.get('/:name/:Age',function(req, res) {
  // connectt("hertto",23);
  // connectt(req.params.name,req.params.age);
  res.send( connectt(req.params.name,req.params.age));
});



//import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

// var db = mongoose.connection;
 
// db.on('error', console.error.bind(console, 'connection error:'));
 
// db.once('open', function() {
//     console.log("Connection Successful!");
     
//     // define Schema
//     var BookSchema = mongoose.Schema({
//       name: String,
//       price: Number,
//       quantity: Number
//     });
 
//     // compile schema to model
//     var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
//     // a document instance
//     var book1 = new Book({ name: 'Introduction to Node', price: 110, quantity: 215 });
 
//     // save model to database
//     book1.save(function (err, book) {
//       if (err) return console.error(err);
//       console.log(book.name + " saved to bookstore collection.");
//     });
     
// });
function connectt(personName,personAge)
{
  db.once('open', function() {
  console.log("Connection Successful!");
var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

/** 3) Create and Save a Person */
var Person = mongoose.model('Person', personSchema,'person');

var createAndSavePersoon = function(done) {
  var janeFonda = new Person({name: personName, age: personAge, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    console.log(janeFonda.name + " saved to person collection.");
    /*done(null, data)*/
  });
};
createAndSavePersoon();
});
}

let Person;

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
