const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/database");


//sequelize.authenticate returns a promise
//and hence we should handle it with then and catch statements.
//always remember that the callback function in catch takes an error as parameter
sequelize.authenticate()
  .then(()  => console.log("Database Connected..."))
  .catch(err => console.log("error:" + err))

//Should see something like this [in server console] when succesfully authenticated to our configured DB.
/* Executing (default): SELECT 1+1 AS result
   [along with execution of callback function in .then statement of authenticate promise]*/


const app = express();

app.engine("handlebars", exphbs({ defaultLayout : 'main'}));
app.set("view engine", "handlebars");

//Gig routes
app.use("/gigs", require("./routes/gig.js"));


const PORT = process.env.PORT || 4000;





app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
});