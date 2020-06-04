
locationsList()
quotesList()

getFishData().then(
	() => {
		fishList()
	}
)

getTipsData().then(
    () => {
        tipsList()
    }
)

getQuotesData().then(
    () => {
        quotesList()
    }
)