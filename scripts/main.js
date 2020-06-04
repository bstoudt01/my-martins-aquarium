
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

//after your data is placed in a declared variable in jscript format (not http)
// you ".then" throw it into the List object that is invoked

getLocationsData().then(
    () => {
        locationsList()
    }
)