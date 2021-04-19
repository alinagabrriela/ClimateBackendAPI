module.exports = app => {
    const preference = require("../controllers/preference.controller.js");
  
    // Create a new Customer
    app.post("/preference", preference.create);
  
    // Retrieve all preference
    app.get("/preference", preference.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/preference/:preference_id", preference.findOne);
  
    // Update a Customer with customerId
    app.put("/preference/:preference_id", preference.update);
  
    // Delete a Customer with customerId
    app.delete("/preference/:preference_id", preference.delete);
  
    // Create a new Customer
    app.delete("/preference", preference.deleteAll);

};