/*
    Branden's HTML-modifying JS File
    MIT License, All Rights Reserved (2022)

    Keep in mind that any code run here is run by the CLIENT, not the server!
*/

function CreateParagraph(text, classes, specialtext = "nil") {
    var Container = document.createElement("p") // Create an empty paragraph node
    var text = document.createTextNode(text) // Create a text node to put inside the p node
    Container.className = classes // Allow the programmer (me) to insert any classes I wish to insert
    Container.appendChild(text) // Apply the text inside the paragraph element
    if (specialtext != "nil") {
        var Container2 = document.createElement("span")
        var text2 = document.createTextNode(specialtext)
        Container2.className = "red"
        Container2.appendChild(text2)
        Container.appendChild(Container2)
    }
    document.body.appendChild(Container) // Append the final built paragraph node into the document
}

async function APICall(path) {
    var response = await fetch(path)
    var textresponse = await response.text()
    return textresponse
}

//Wait for document to finish loading fully before we modify it
document.addEventListener("DOMContentLoaded", async function (ev) {
    console.log("DOM has loaded!")

    var extip = await APICall("/api/ip") // Get the user's IP from the server
    var reqip = await APICall("/api/reqip") // Get the IP used to initiate the GET request
    CreateParagraph("Your IP appears to be ", "center white-text", extip); // Display the IP back to the user
    CreateParagraph("Your Request IP appears to be ", "center white-text", reqip) // Display the user's Request IP back to the user
})