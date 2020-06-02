/* this function will convert a single quotes object and convert it to 
an HTML string that it will return to a variable "objectHTMLRepresentativ" */

// quoteConverter is my function name
//quoteObject is my paramater that i am passing through my function
//my paramater is what i am passing through the function, and my paramater is defined
//by the contents insie {} and then returned to a variable that the parameter is defining,
// both those also happen inside the {} 
const quotesConverter = (quotesObject) => {
    const quotesHTMLRepresentation = `<section class="quote">${quotesCollection.quote} 
                                    <a class="quote__author">${quotesCollection.author}</a>
                                    </section>`

    return quotesHTMLRepresentation
}