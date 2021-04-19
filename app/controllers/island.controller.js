const Island = require("../models/island.model.js");

// Create and Save a new Room
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Room
    const island = new Island({
      island_id: req.body.island_id,
      room_id: req.body.room_id,
     });
  
    // Save Room in the database
    Island.create(island, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Island."
        });
      else res.send(data);
    });
  };


// Retrieve all Rooms from the database.
exports.findAll = (req, res) => {
    Island.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving islands."
        });
      else res.send(data);
    });
  };
// Find a single Room with a RoomId
exports.findOne = (req, res) => {
    Island.findById(req.params.island_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Island with id ${req.params.island_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Island with id " + req.params.island_id
          });
        }
      } else res.send(data);
    });
  };

// Update a Room identified by the RoomId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Island.updateById(
      req.params.island_id,
      new Island(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Island with id ${req.params.island_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Island with id " + req.params.island_id
            });
          }
        } else res.send(data);
      }
    );
  };
// Delete a Room with the specified RoomId in the request
exports.delete = (req, res) => {
    Island.remove(req.params.island_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Island with id ${req.params.island_id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Island with id " + req.params.island_id
          });
        }
      } else res.send({ message: `Island was deleted successfully!` });
    });
  };
// Delete all Rooms from the database.
exports.deleteAll = (req, res) => {
    Island.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Islands."
        });
      else res.send({ message: `All Islands were deleted successfully!` });
    });
  };