const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


//SERVER ROUTES END-POINTS SERVING THE VIEW

router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create("burger_name, devoured", [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.status
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist. Throw
      return res.status(404).send({message: 'No burger found with that ID.'});
    } else {
      res.send({message: 'Your burger was updated.'});
    }
  });
});

router.delete("/api/burgers/:id", (req, res) => {

  burger.delete({ id: req.params.id }, data => {

    console.log(data);
    res.json(data);
  });
});

// Export routes for server.js to use
module.exports = router;
