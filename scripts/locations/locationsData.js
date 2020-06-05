let locationsCollection = [
    // {
    //     picture: "https://caribbeannewsservice.com/now/wp-content/uploads/2017/05/Caribbean-Sea.jpg",
    //     location: "Carribean Sea",
    //     travelTip: "Dont go out at night!"
    // },
    
    // {
    //     picture: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    //     location: "Thailand",
    //     travelTip: "Go South!"
    // },

    // {
    //     picture: "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/9c/99/76/shutterstock-428582293.jpg",
    //     location: "Floating Island",
    //     traveltip: "Remember your viral shots"
    // },

    // {
    //     picture: "https://static.toiimg.com/photo/72179473.cms.cms",
    //     location: "Vietnam",
    //     travelTip: "Eat Noodles & go to Ba Na Hills for sightseeing "
    // }
]
//declare a function that holds our data until it is displayed
const getLocationsData = () => {
    //this function will return a fetch call from our json server... then. 
    return fetch("http://localhost:8088/locations").then(
        //the ".then" method uses another function to return that "response" to a jscript format 
        (tipHTTPResponse) => {
            // the.json returns a javascript array from the string data that was returned via our fetch http request from the json serve
            return tipHTTPResponse.json() 
        }
    )
    // once your data is in a javascript format ".then" you throw it at a funtion that adds it to a declared variable
        .then(
            (arrayofLocations) => {
                //".then" you throw it at a funtion that adds it to a declared variable
                locationsCollection = arrayofLocations
            }
        )
}

//then pass it to a declared array