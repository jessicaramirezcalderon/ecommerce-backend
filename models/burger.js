//DATA BASE MODEL
//These functions interact with the database

//REQUIRE ORM TEMPLATE 
const orm = require("../config/orm.js");

const burgermodel = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(filters, cb){
    orm.delete("burgers", filters, res => cb(res));
  }
};

// Export the model
module.exports = burgermodel;