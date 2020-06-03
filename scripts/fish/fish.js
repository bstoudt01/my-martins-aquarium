/*
    This function will convert a single fish object to an
    HTML representation and return it.. ITS A FISH CONVERTER!
*/
const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = `<section class="fish">
        <div class="fish__picture">
            <img class="fish__picture" src="${fishObject.picture}"
                alt="${fishObject.name} the ${fishObject.species}" />
        </div>
        <div class="fish__details">
            <ul>
                <li>Species: ${fishObject.species}</li>
                <li>Length: ${fishObject.length}</li>
                <li>Name: ${fishObject.name}</li>
                <li>Location: ${fishObject.location}</li>
                <li>Food: ${fishObject.food}</li>
            </ul>
        </div>
    </section>`

    return fishHTMLRepresentation

}
//this function return value of "fishHTMLRepresentation" which is a string
// reutning to the variable makes it easier to navigate and debugg in the future
// you can return the 

//