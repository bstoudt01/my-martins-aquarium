/* tips.js contains a function "tipsConverter" that take a new parameter "tipsObject"(which is a single tip object) and converts it to an HTML string
you must put that new string in a container, "tipsHTMLRepresentation"
...the HTML string is in backticks so you can reference variable with ${}...

we must give out new object (that is passed through as a parameter) a key to ouput "tipsObject.tip" 
...which displays the "tip" key from tipsCollection when its introduced in tipsList.js

you must then return that container.(so it compiles the function?)
tipsList.js is dependant on tips.js... tips.js is not dependant on anything
*/

const tipsConverter = (tipsObject) => {
    const tipsHTMLRepresentation = `<section class="tip">${tipsObject.tip}</section>`

    return tipsHTMLRepresentation
}