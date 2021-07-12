//js hint esversion:7


const express = require('express');

const app = express();

app.get("/" , function(request, response)
{
  response.send("<h1>HELLO OM NAMAH SHIVAY</>h1>");
});
app.get("/contact", function(req,res)
{
  res.send("contact me at: bhaskarkumar654321@gmail.com");
});
app.get("/about", function(req,res)
{
  res.send("I ma Bhaskar kumar and currently i am pursuing B.Tech from IIIT BBSR");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
app.get("/hobbies", function(req,res)
{
  res.send("I love to play cricket and chess");
});
app.get("/favouritecricketer", function(req,res)
{
  res.send("Virat kohli is my all time fav");
});
app.get("/favouritefootballer", function(req,res)
{
  res.send("I dont know much bout football but Messi I have heard he is good");
});
app.get("/motherlan", function(req,res)
{
  res.send("Meri matribhas maithli h");
});
app.get("/food", function(req,res)
{
  res.send("Razm chawal is best");
});
