/*
    Branden's HTML-modifying JS File
    MIT License, All Rights Reserved (2022)

    Keep in mind that any console.log() functions called here will be output to the CLIENT'S console and not the server.
*/

function CreateParagraph(text, center) {
    var Container = document.createElement("p") // Create an empty paragraph node
    var text = document.createTextNode(text) // Create a text node to put inside the p node
    if (center) {
        Container.className = "center" // Align the text to the center of the page if it needs to be centered
    }
    Container.appendChild(text) // Apply the text inside the paragraph element
    document.body.appendChild(Container) // Append the final built paragraph node into the document
}

//Wait for document to finish loading fully before we modify it
document.addEventListener("DOMContentLoaded", function (ev) {
    //Repeat 10 times
    for (i = 1; i < 10; i++) {
        CreateParagraph("Hello World!", true) // Call the CreateParagraph function
    }
})