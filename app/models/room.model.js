const sql = require("./db.js");


const Room = function(room) {
    this.room_name = room.room_name;
};

Room.create = (newRoom, result) =>{
    sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created room: ", { id: res.insertId, ...newRoom });
result(null, { id: res.insertId, ...newRoom });
});

};

Room.findById = (room_id, result) => {
    sql.query(`SELECT * FROM room WHERE room_id = ${room_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found room: ", res[0]);
        result(null, res[0]);
        return;
      }
  
     
      result({ kind: "not_found" }, null);
    });
  };

    Room.getAll = result => {
    sql.query("SELECT * FROM room", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("room: ", res);
      result(null, res);
    });
  };

  Room.remove = (room_id, result) => {
    sql.query("DELETE FROM room WHERE room_id = ?", room_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted room with id: ", room_id);
      result(null, res);
    });
  };

  
  Room.removeAll = result => {
  sql.query("DELETE FROM room", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} room`);
    result(null, res);
  });
};
  
  module.exports = Room;