//get express server up and running
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Running")); //a simple endpoint for testing

const PORT = 5000 || process.env.PORT; //either locally or Heroku

app.listen(PORT, () => console.log(`server started on port${PORT}`));
