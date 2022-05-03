/*
    Branden's HTML-modifying JS File
    MIT License, All Rights Reserved (2022)

    Keep in mind that any code run here is run by the CLIENT, not the server!
*/

function CreateParagraph(text, classes) {
    var Container = document.createElement("p") // Create an empty paragraph node
    var text = document.createTextNode(text) // Create a text node to put inside the p node
    Container.className = classes // Allow the programmer (me) to insert any classes I wish to insert
    Container.appendChild(text) // Apply the text inside the paragraph element
    document.body.appendChild(Container) // Append the final built paragraph node into the document
}

//Wait for document to finish loading fully before we modify it
document.addEventListener("DOMContentLoaded", function (ev) {
    console.log("DOM has loaded!")

    //Repeat 10 times
    for (i = 1; i < 10; i++) {
        CreateParagraph("Hello World!", "center white-text") // Call the CreateParagraph function
    }
})