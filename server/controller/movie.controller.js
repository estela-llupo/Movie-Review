const mongoose = require('mongoose');
const User = require('../models/movie.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async (req, res) => {
        try{
            const potentialUser = await User.findOne({email: req.body.email});
            if(potentialUser) {
                res,status(400).json({message: "User already exists"});
            }
            else {
                const newUser = await User.create(req.body);
                console.log(newUser);
                res.status(201).json(newUser);
            }
        }
        catch(err) {
            res.status(500).json({error: err});
        }
        
    
}
}



// const Form = require("../models/movie.models");
// module.exports = {
//   create: (req, res) => {
//     Form.create(req.body)
//       .then((team) => res.json(team))
//       .catch((err) => {
//         console.error("Create Error:", err);
//         res.status(400).json(err);
//       });
//   }
//     ,
//     getAll: (req, res) => {
//         Form.find()
//             .then((form) => res.json(form))
//             .catch((err) => {
//               console.error("Get All Error:", err);
//               res.status(400).json(err);
//             });
//     }
//     ,
//     getOne: (req, res) => {
//       if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//           return res.status(400).json({ message: "Invalid ID format" });
//       }

//       Form.findById(req.params.id)
//           .then(form => {
//               if (!form) {
//                   return res.status(404).json({ message: "Movie not found" });
//               }
//               res.json(form);
//           })
//           .catch(err => {
//               console.log("Get One Error:", err);
//               res.status(400).json(err);
//           });
//   },

//   delete: (req, res) => {
//       if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//           return res.status(400).json({ message: "Invalid ID format" });
//       }

//       Form.findByIdAndDelete(req.params.id)
//           .then(form => {
//               if (!form) {
//                   return res.status(404).json({ message: "Movie not found" });
//               }
//               console.log("Successfully deleted comment:", form);
//               res.json(form);
//           })
//           .catch(err => {
//               console.log("Delete Error:", err);
//               res.status(400).json(err);
//           });
//   }     
// };
