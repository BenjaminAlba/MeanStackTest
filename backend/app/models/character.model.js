const mongoose = require("mongoose");

const Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    author: String,
    characterName: String,
    initialHealth: Number,
    initialAtk: Number,
    initialDefense: Number,
    initialSpirit: Number,
    initialSpeed: Number,
    finalHealth: Number,
    finalAtk: Number,
    finalDefense: Number,
    finalSpirit: Number,
    finalSpeed: Number,
    burstName: String,
    burstDescription: String,
    skill1Name: String,
    skill1Description: String,
    skill2Name: String,
    skill2Description: String,
    skill3Name: String,
    skill3Description: String,
    skill4Name: String,
    skill4Description: String,
  })
);

module.exports = Character;