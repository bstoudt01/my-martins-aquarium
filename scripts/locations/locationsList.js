  
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

//Event Listener placed on button located below nav bar
// hides locations list using css class

// create variable that looks for a class in the document called "toggleLocations"
const locationsVisibilityButton = document.querySelector(".toggleLocations")

//access the variable and add an event listener that pushes through a function
//.addEventListener(is pre defined action) 
//"click" is the action its listening for
//(clickEvent) is a taco and is a paramater/argument descriptor for the user & does not have to be in ()
locationsVisibilityButton.addEventListener("click", (clickEvent) => {
//the function looks at the document and searchs for ".locationsList" class
//  .classList manipulates an elements class content attribute ,whcih  we chose to manipulate ".toggle" property when "hidden" populates in the locationslist class field.
//  
        document.querySelector(".locationsList").classList.toggle("hidden")
})
