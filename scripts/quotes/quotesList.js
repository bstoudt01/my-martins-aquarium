/* Responsible for creating a list of "quote HTML representations"
and showing them on the browser.. this creates the platform for the quoteshtmlrep to place its compiled quote object */ 

const quotesList = () => {

    for (const currentQuotesObject of quotesCollection) {

        const quotesHTML = quotesConverter(currentQuotesObject)

        const quotesArticleElement = document.querySelector(".quotesList")

        quotesArticleElement.innerHTML += quotesHTML

    }
}