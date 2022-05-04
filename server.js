/*
    Branden's Computer Science Create Task Project
*/

//Config
const HttpPort = 8344; // The port the webserver will listen on.

//Actual Code
const express = require("express"); // WebServer library, directly endorsed by NodeJS.
const request = require("request"); // HTTP request library, directly endorsed by NodeJS.
const fs = require("fs"); // NodeJS filesystem library
const server = express(); // Instantiate a new server object
const options = {
    root: __dirname // Create an object and set the root property as the current directory's filepath. Prevents some ExpressJS errors.
}

//GET Handlers
server.get("/", (req, res) => {
    //Below gets the IP of the party initiating the GET request
    console.log("[+] GET request from " + req.socket.remoteAddress)
    res.sendFile("public/html/main.html", options); // Serve main html file, using options object as settings.
})

//API Handlers
server.get("/api", (req, res) => {
    res.sendFile("public/html/api.html", options)
})

server.get("/api/ip", (req, res) => {
    request("http://api.ipify.org/", {json: true}, (err, res2, body) => {
        if (res2 == undefined || err) {
            res.send("Internal Server Error")
            res.statusCode = 503
        } else {
            res.send(body)
        }
    })
})

server.get("/api/reqip", (req, res) => {
    res.send(req.socket.remoteAddress)
})

server.get("/api/getapis", async (req, res) => {
    const files = await fs.readdirSync("./public/api")
    const fileobjs = [];
    files.forEach((file) => {
        fileobjs.push(file)
    })
    res.send(fileobjs)
})

//Middleware
server.use(express.static('public')) // Allows all content in the "public" directory to be requested by the client. Also makes it the root directory oddly.

//Server Initialization
server.listen(HttpPort, () => {
    console.log("[+] Server listening on http://localhost:" + HttpPort)
})