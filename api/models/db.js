
try{
const mongoose = require("mongoose");
const dbPath = "mongodb+srv://gagan:54321@ASDFg@ecommerce.ngo9b.mongodb.net/restaurent";
mongoose.connect(dbPath, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});


module.exports = mongoose; }
catch(err){
  console.log(err)
}