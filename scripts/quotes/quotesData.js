let quotesCollection = [
    // {
    //     quote: "Forage brooklyn prism shaman readymade hammock selvage hot chicken, mumblecore master cleanse post-ironic palo santo copper mug.",
    //     author: "Ron Burgandy"
    // },

    // {
    //     quote: "Bango desert pupfish bullhead suckermouth armored catfish jewfish snake mackerel spiderfish spinefoot.",
    //     author: "John Maden"
    // },
    
    // {
    //     quote: "Northern sea robin masu salmon oceanic whitetip shark; sandfish ray combtail gourami northern squawfish.",
    //     author: "NPH"
    // }

]

const getQuotesData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (reponse) => {
            return reponse.json()
        }
    )
        .then(
            (arrayOfQuotes) => {
                quotesCollection = arrayOfQuotes
            }
        )
}