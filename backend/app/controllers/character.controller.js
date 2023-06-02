const db = require("../models");
const Character = db.character;

// Create and Save a new Character
exports.create = (req, res) => {
  // Validate request
  if (!req.body.author) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Character
  const character = new Character({
    author: req.body.author,
    characterName: req.body.characterName,
    initialHealth: req.body.initialHealth,
    initialAtk: req.body.initialAtk,
    initialDefense: req.body.initialDefense,
    initialSpirit: req.body.initialSpirit,
    initialSpeed: req.body.initialSpeed,
    finalHealth: req.body.finalHealth,
    finalAtk: req.body.finalAtk,
    finalDefense: req.body.finalDefense,
    finalSpirit: req.body.finalSpirit,
    finalSpeed: req.body.finalSpeed,
    burstName: req.body.burstName,
    burstDescription: req.body.burstDescription,
    skill1Name: req.body.skill1Name,
    skill1Description: req.body.skill1Description,
    skill2Name: req.body.skill2Name,
    skill2Description: req.body.skill2Description,
    skill3Name: req.body.skill3Name,
    skill3Description: req.body.skill3Description,
    skill4Name: req.body.skill4Name,
    skill4Description: req.body.skill4Description,
  });

  // Save Character in the database
  character
    .save(character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });
};

// Retrieve all Characters from the database by author.
exports.findAll = (req, res) => {
  const author = req.query.author;
  var condition = author ? { author: { $regex: new RegExp(author), $options: "i" } } : {};

  Character.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};

// Find a single Character with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Character.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Character with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Character with id=" + id });
    });
};

// Update a Character by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Character.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Character with id=${id}. Maybe Character was not found!`
        });
      } else res.send({ message: "Character was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Character with id=" + id
      });
    });
};

// Delete a Character with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Character.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Character with id=${id}. Maybe Character was not found!`
        });
      } else {
        res.send({
          message: "Character was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Character with id=" + id
      });
    });
};

// Delete all Characters from the database.
exports.deleteAll = (req, res) => {
  Character.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Characters were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Characters."
      });
    });
};
