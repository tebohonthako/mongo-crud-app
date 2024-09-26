const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model')
const app = express(); //initilize the app

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// G E T   A   P R O D U C T 
app.get("/", (req, res) => {
  res.send("Hello from Node API 💗👩🏽‍💻"); // response renders on localhost:3000
});

//  A D D   o r    S A V E   A   P R O D U C T   T O   D B 
app.post('/api/products', async (req, res) => {
    try {
       const product =  await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({messsage: error.messsage})
    }
})

//  C O N N E C T I N G    O U R    D B

// This code connects your application to a MongoDB database using Mongoose.
mongoose
  .connect(
    "mongodb+srv://tebohonthako1:IpiCxRqIfbOccpOe@mongocruddb.sooam.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MongoCrudDB"
  )
  .then(() => console.log("Connected to Database!"))
  .catch(() => {
    console.log("Connection failed! ❌");
  });
