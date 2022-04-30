/*
    Branden's Computer Science Create Task Project
*/

//Config
const HttpPort = 8344; // The port the webserver will listen on.

//Actual Code
const express = require("express");
const server = express();
const options = {
    root: __dirname
}

//GET Handlers
server.get("/", (req, res) => {
    res.sendFile("public/html/main.html", options); // Serve main html file
})

//Middleware
server.use(express.static('public'))

//Server Initialization
server.listen(HttpPort, () => {
    console.log("Server listening on http://localhost:" + HttpPort)
})