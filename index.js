const express = require('express')
const app = express()       //initilize the app

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
    res.send("Hello from Node API 💗👩🏽‍💻")    // response renders on localhost:3000
})