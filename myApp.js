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
