/**
 *  FishList which renders individual fish objects as HTML
 */
const fishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}