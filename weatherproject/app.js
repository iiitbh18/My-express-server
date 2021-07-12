const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res)
{
const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=cc4a46a1ee6710f735a5f26907939199&units=metric"
https.get(url, function(response)
{
  console.log(response);
})

  res.send("Server is up and running very well")
})





app.listen(4000, function()
{
  console.log("Server is runing on port 4000");
})
