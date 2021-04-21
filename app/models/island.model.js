const sql = require("./db.js");


const Island = function(island) {
    this.island_id = island.island_id;
    this.room_id = island.room_id;
};

Island.create = (newIsland, result) =>{
    sql.query("INSERT INTO Island SET ?", newIsland, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}

console.log("something");
  });
};

Island.findById = (island_id, result) => {
    sql.query(`SELECT * FROM Island WHERE Island_id = ${island_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Island: ", res[0]);
        result(null, res[0]);
        return;
      }
  
     
      result({ kind: "not_found" }, null);
    });
  };

  Island.getAll = result => {
    sql.query("SELECT * FROM Island", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Island: ", res);
      result(null, res);
    });
  };

  Island.remove = (island_id, result) => {
    sql.query("DELETE FROM Island WHERE island_id = ?", island_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted Island with island_id: ", island_id);
      result(null, res);
    });
  };

  Island.removeAll = result => {
    sql.query("DELETE FROM island", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} island`);
      result(null, res);
    });
  };
    
  module.exports = Island;