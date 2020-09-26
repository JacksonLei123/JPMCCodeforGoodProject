const mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
const dotenv = require("dotenv"); 
dotenv.config(); 

const db = {}; 

db.mongoose = mongoose;

db.url = process.env.DATABASE_URL; 
db.reviews = require("./models.js")(mongoose); 
db.emails = require("./emailmodel.js")(mongoose); 

module.exports = db;