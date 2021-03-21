const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


//SERVER ROUTES END-POINTS SERVING THE VIEW
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgermodel.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgermodel.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgermodel.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// The `catsController.js` file to have a `/api/cats/:id` delete route, 
// to call the delete key of the cat model, and to pass in arguments as necessary
router.delete("/api/burgers/:id", (req, res) => {
  // req.params --> we have req.params.id
  // req.body --> not needed
  // query.... no do we have model? --> we will use the cat.delete
  burgermodel.delete({ id: req.params.id }, data => {
    // errs -> no error input
    // data hande it
    console.log(data);
    res.json(data);
  });
});

// Export routes for server.js to use.
module.exports = router;
