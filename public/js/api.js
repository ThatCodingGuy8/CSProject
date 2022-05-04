function CreateLink(text, classes) {
    var Container = document.createElement("a") // Create an empty paragraph node
    var Container2 = document.createElement("h3")
    Container2.className = classes // Allow the programmer (me) to insert any classes I wish to insert
    Container2.appendChild(Container)
    var text2 = document.createTextNode(text) // Create a text node to put inside the p node
    Container.appendChild(text2) // Apply the text inside the paragraph element
    Container.href = "/api/" + text
    document.body.appendChild(Container2) // Append the final built paragraph node into the document
}

async function APICall(path) {
    var response = await fetch(path)
    var textresponse = await response.text()
    return textresponse
}

//Wait for document to finish loading fully before we modify it
document.addEventListener("DOMContentLoaded", async function (ev) {
    console.log("DOM has loaded!")

    var apilist = JSON.parse(await APICall("/api/getapis"));
    apilist.forEach((api) => {
        CreateLink(api, "center")
    })
})