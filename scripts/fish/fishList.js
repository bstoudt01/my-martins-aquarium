
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
})


/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
/*
const fishList = () => {
    // Iterate the collection of fish objects
    for (const currentFishObject of fishCollection) {

        // Convert the current fish to its HTML representation
        const fishHTML = fishConverter(currentFishObject)

        // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        // Put the fish HTML representation inside the <article> element.. apends string to the dom
        fishArticleElement.innerHTML += fishHTML
    }
}
*/
// Function to show holy fish in the browser
const showHolyFish = () => {
    //get holy fish array by calling the function that gathered the array and invoke the function with () to access the array inside of it.
    const fishObjectsArray = mostHolyFish()
    // iterate the array of holy fish one at a time 
    for (const fishObject of fishObjectsArray) {
        // pass the fishobject through the fishConverter as a paramater and save the iterations in a varable (const in this case)
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show common fish in the browser
const showRegularFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}



const fishList = () => {
//     Invoke all three functions here/ the order they are listed are the order they appear.
    showHolyFish()
    showSoldierFish()
    showRegularFish()
}