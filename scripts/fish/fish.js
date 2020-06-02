/**
 *  Fish which renders individual fish objects as HTML
 */
const fishHTMLRepresentation = (fishObject) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fishObject.image}" alt="">
            </div>
            <div class="fish__name">${fishObject.name}</div>
            <button id="button--${fishObject.name}">Details</button>

            <dialog class="dialog--fish" id="details--${fishObject.name}">
                <div>Species: ${fishObject.species}</div>
                <div>Location: ${fishObject.location}</div>
                <div>Length: ${fishObject.size}</div>
                <div>Food: ${fishObject.food.join(",")}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}