const db = require("../models/index.js");
const Review = db.reviews;
const Email = db.emails; 
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.description) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const review = new Review({
    description: req.body.description,
    visible: false
  });

  // Save Tutorial in the database
  review
    .save(review)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Review."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Review.find(true)
        .then(data => {
            res.send(data); 
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving the Review."
            })
        })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Review.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Review with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Review with id=" + id });
        });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Review.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Review with id=${id}. Maybe Tutorial was not found!`
            });
          } else res.send({ message: "Review was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Review with id=" + id
          });
        });

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Review.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Review with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Review was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Review with id=" + id
        });
      });

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Review.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Reviews were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Reviews."
      });
    });

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Review.find({ visible: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.addEmail = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const email = new Email({
    email: req.body.email,
  });

  // Save Tutorial in the database
  email
    .save(email)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Review."
      });
    });
}
