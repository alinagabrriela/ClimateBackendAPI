const sql = require("./db.js");


const Preference = function(preference) {
    this.island_id = preference.island_id;
    this.ptype = preference.ptype;
    this.temperature = preference.temperature;
    this.humidity = preference.humidity;
    this.fanspeed = preference.fanspeed;
};

Preference.create = (newPreference, result) =>{
    sql.query("INSERT INTO preference SET ?", newPreference, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}
console.log("created preference: ", { id: res.insertId, ...newPreference });
result(null, { id: res.insertId, ...newPreference });
});

};

Preference.findById = (preference_id, result) => {
    sql.query(`SELECT * FROM preference WHERE preference_id = ${preference_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found preference: ", res[0]);
        result(null, res[0]);
        return;
      }
  
     
      result({ kind: "not_found" }, null);
    });
  };

    Preference.getAll = result => {
    sql.query("SELECT * FROM preference", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("preference: ", res);
      result(null, res);
    });
  };

  Preference.remove = (preference_id, result) => {
    sql.query("DELETE FROM preference WHERE id = ?", preference_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted preference with id: ", preference_id);
      result(null, res);
    });
  };
  
  module.exports = Preference;