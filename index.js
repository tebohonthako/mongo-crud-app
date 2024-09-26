const express = require('express')
const mongoose = require('mongoose');
const app = express()       //initilize the app

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
    res.send("Hello from Node API 💗👩🏽‍💻")    // response renders on localhost:3000
})


//  C O N N E C T I N G    O U R    D B  

// This code connects your application to a MongoDB database using Mongoose.
mongoose.connect('mongodb+srv://tebohonthako1:IpiCxRqIfbOccpOe@mongocruddb.sooam.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MongoCrudDB')
  .then(() => console.log('Connected to Database!')) 
  .catch(() => {
    console.log("Connection failed! ❌")
  });