module.exports = app => {
    const island = require("../controllers/island.controller.js");
  
    // Create a new Customer
    app.post("/island", island.create);
  
    // Retrieve all island
    app.get("/island", island.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/island/:island_id", island.findOne);
  
    // Update a Customer with customerId
    app.put("/island/:island_id", island.update);
  
    // Delete a Customer with customerId
    app.delete("/island/:island_id", island.delete);
  
    // Create a new Customer
    app.delete("/island", island.deleteAll);

};