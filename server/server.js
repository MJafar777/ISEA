require("dotenv").config({});
const app = require("./middlewares/app");
const db = require("./configs/db");

// connecting database to server
db();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
