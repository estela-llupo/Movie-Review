const mongoose = require('mongoose');

const Team = require("../models/team.models");


module.exports = {
  create: (req, res) => {
    Team.create(req.body)
      .then((team) => res.json(team))
      .catch((err) => {
        console.error("Create Error:", err);
        res.status(400).json(err);
      });
  }
    ,
    getAll: (req, res) => {
        Team.find()
            .then((team) => res.json(team))
            .catch((err) => {
              console.error("Get All Error:", err);
              res.status(400).json(err);
            });
    }
    ,
    getOne: (req, res) => {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return res.status(400).json({ message: "Invalid ID format" });
      }

      Team.findById(req.params.id)
          .then(team => {
              if (!team) {
                  return res.status(404).json({ message: "Meal not found" });
              }
              res.json(team);
          })
          .catch(err => {
              console.log("Get One Error:", err);
              res.status(400).json(err);
          });
  },

  delete: (req, res) => {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return res.status(400).json({ message: "Invalid ID format" });
      }

      Team.findByIdAndDelete(req.params.id)
          .then(team => {
              if (!team) {
                  return res.status(404).json({ message: "Meal not found" });
              }
              console.log("Successfully deleted team:", team);
              res.json(team);
          })
          .catch(err => {
              console.log("Delete Error:", err);
              res.status(400).json(err);
          });
  }     
};
