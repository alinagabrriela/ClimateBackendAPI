module.exports = app => {
    const room = require("../controllers/room.controller.js");
  
    // Create a new Customer
    app.post("/room", room.create);
  
    // Retrieve all room
    app.get("/room", room.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/room/:room_id", room.findOne);
  
    // Update a Customer with customerId
    app.put("/room/:room_id", room.update);
  
    // Delete a Customer with customerId
    app.delete("/room/:room_id", room.delete);
  
    // Create a new Customer
    app.delete("/room", room.deleteAll);

};
