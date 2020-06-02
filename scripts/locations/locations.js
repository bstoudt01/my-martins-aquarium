/*
    This function will convert a single fish object to an
    HTML representation and return it.. ITS A FISH CONVERTER!
*/
const locationsConverter = (locationsObject) => {

    const locationsHTMLRepresentation = ` <section class="location">
    <div class="">
        <img class="location__picture" src="${locationsObject.picture}" 
        alt="${locationsObject.location}" />
    </div>
    <div class="location__details">
        <ul>
            <li>Location: ${locationsObject.location}</li>
            <li>Travel Tip: ${locationsObject.travelTip}</li>
        </ul>
</section>`

    return locationsHTMLRepresentation

}

