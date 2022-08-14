const mongoose = require("mongoose");

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

module.exports = () => {
  mongoose.connect(DB, () => console.log(`db connected`));
};
