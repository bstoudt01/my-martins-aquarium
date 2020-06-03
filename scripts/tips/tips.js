/* tips.js contains a function "tipsConverter" that take a new parameter "tipsObject"(which is a single tip object) and converts it to an HTML string
use dot notation to inject the key(s) of the tipsData you need by adding it onto the paramater you give tipsConverter.. the parameter name is chosen to best reflect what will be moved through the function.
you must put that new string in a container, "tipsHTMLRepresentation"
...the HTML string is in backticks so you can have html code and then reference variable with ${}...

you must then return that container.(so it compiles the function?)
MODULARIZE YOUR CODE! GOTTA KEEP IT SEPERATED 
This is my Data -> HTML string "converter" Module
tipsList.js is dependant on tips.js... tips.js is not dependant on anything
*/

const tipsConverter = (tipsObject) => {
    const tipsHTMLRepresentation = `<section class="tip">${tipsObject.tip}</section>`

    return tipsHTMLRepresentation
}