const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", (clickEvent) => {


    document.querySelector(".tipsList").classList.toggle("hidden")
})


//toggle can be applied to any html element, it adds hidden to tipsList Class which will hide that class..


/*tipsList.js has a dependency on tipsData.js & tips.js 
MODULARIZE YOUR CODE! GOTTA KEEP IT SEPERATED 
This is my list creater "Compiler" Module */
/* 
-tipsList.js contains a function that pull together information from other js files to compile a list of travel tips
-our function "tipsList" has no paramaters since we will initalize it in main.js 
- It does contain a "for of loop" that will iterate using the js files it references.
- In the "for of loop" "currentTipsObject" is a new constant that iterates through the array OF "tipsCollection" for every item in the array.. "for NewConstantVariable of Array"
- inside the for loop 
    "tipsHTML" constant is declared and set equal to tipsConverter(currentTipsObject) 
        -which is a single object that is located inside the tipsCollection array 
    "tipsArticleElement" constant is declared and set equal to a document seach tool called "document.querySelector" used to locate a class (this time)
        -- on index.html we locate the elements(article/div/etc.) we want to populate our html tips list to on and determine the class for that article/div/etc.
        -- then we call the tipsHTML constant into the .innerHTML (of tipsArticleElement) using dot notation, and add each generated tipsHTML string to the list using +=
        --- make sure you dont overwrite the last tipsHTML string by using "+=" 
    invoke the function "tipsList() on main.js and it will display the parameters of tipsList, which is the tips data converted to html and inserted for the user to see and use. 

*/
const tipsList = () => {
    for (const currentTipsObject of tipsCollection) {
        
        const tipsHTML = tipsConverter(currentTipsObject)

        const tipsArticleElement = document.querySelector(".tipsList")

        tipsArticleElement.innerHTML += tipsHTML
    }
}