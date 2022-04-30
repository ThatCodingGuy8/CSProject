/*
    Branden's Computer Science Create Task Project
*/

//Config
const HttpPort = 8344; // The port the webserver will listen on.

//Actual Code
const express = require("express"); // WebServer library, directly endorsed by NodeJS.
const request = require("request"); // HTTP request library, directly endorsed by NodeJS.
const server = express(); // Instantiate a new server object
const options = {
    root: __dirname // Create an object and set the root property as the current directory's filepath. Prevents some ExpressJS errors.
}

//GET Handlers
server.get("/", (req, res) => {
    //Below gets the IP of the party initiating the GET request
    request("http://api.ipify.org/", {json: true}, (err, res, body) => {
        console.log("[+] GET request from " + body)
    })
    res.sendFile("public/html/main.html", options); // Serve main html file, using options object as settings.
})

//Middleware
server.use(express.static('public')) // Allows all content in the "public" directory to be requested by the client

//Server Initialization
server.listen(HttpPort, () => {
    console.log("[+] Server listening on http://localhost:" + HttpPort)
})