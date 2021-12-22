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

//let Person;

const createAndSavePerson = (done) => {
  var foodie = new Person({name: 'coding70', age: 14, favoriteFoods: ["chicken", "tikka", "fresh fruit"]});
  foodie.save(function(err,data){
    if(err) return console.error(err);
    done(null, data)
  });
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function(err,people){
    if(err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName},function(err, personFound){
    if(err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods: food},function(err, foodFound){
    if(err) return console.log(err);
    done(null, foodFound);
  });
};

const findPersonById = (personId, done) => {
    Person.findById(personId,function(err, Found){
    if(err) return console.log(err);
    done(null, Found);
  });
};

const findEditThenSave = (personId, done) => {
const foodToAdd = "hamburger";
  Person.findById(personId,function(err, person){
    if(err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson)=>{
      if(err) return console.log(err);
      done(null, updatedPerson);
    })
  })
};

const findAndUpdate = (personName, done) => {
 const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age:ageToSet},{new: true},function(err,data){
    if(err) return console.log(err);
    done(null, data);
  })
};

const removeById = (personId, done) => {
   Person.findByIdAndRemove(personId,function(err,data){
    if(err) return console.log(err);
    done(null , data);
  })
  
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  })
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
