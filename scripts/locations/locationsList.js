  
/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

const locationsList = () => {
    // Iterate the collection of fish objects
    for (const currentLocationsObject of locationsCollection) {

        // Convert the current fish to its HTML representation
        const locationsHTML = locationsConverter(currentLocationsObject)

        // Find the <article> element in index.html
        const locationsArticleElement = document.querySelector(".locationsList")

        // Put the fish HTML representation inside the <article> element
        locationsArticleElement.innerHTML += locationsHTML
    }
}