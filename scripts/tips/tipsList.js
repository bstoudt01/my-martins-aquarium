/*tipsList.js has a dependency on tipsData.js & tips.js */
/* 
-tipsList.js contains a function that pull together information from other js files to compile a list of tips
-our function "tipsList" has no paramaters since a for loop will iterate using the js files it references.
- In the for loop "currentTipsObject" is a new constant that iterates through the array OF "tipsCollection"
- inside the for loop 
    "tipsHTML" constant is declared and set equal to tipsConverter(currentTipsObject) 
        -which is a single object inside the tipsCollection array 
    "tipsArticleElement" constant is declared and set equal to a document seach tool called "document.querySelector"
        -- on index.html we locate the elements(article/div/etc.) we want to populate our html tips list to on and determine the class for that article/div/etc.
        -- then we call the tipsHTML constant to the .innerHTML (of tipsArticleElement) and add each generated tipsHTML string to the list
        --- make sure you dont overwrite the last tipsHTML string by using "+=" 

*/
const tipsList = () => {
    for (const currentTipsObject of tipsCollection) {
        
        const tipsHTML = tipsConverter(currentTipsObject)

        const tipsArticleElement = document.querySelector(".tipsList")

        tipsArticleElement.innerHTML += tipsHTML
    }
}