/* tipsData.js contains a array of travel tips as objects
-each object has a key:value (string) assoicated with it
-you will utilise the tipsCollection array inside the tipsList.js where it will be introduced to tips.js in a function to be converted to html string an put into the html for the user.
...tips.js contains a function that creates a string based on tip keys that it is initalized in the tipsList.js.. but it needs tipsData to provide the data that goes into the string, 
MODULARIZE YOUR CODE! GOTTA KEEP IT SEPERATED 
This is my Data Module
... tipsList.js is dependent on tipsData.js... tipsData.js is not dependant on anything, at the moment.
*/
const tipsCollection = [
    {
        tip: "Poutine viral man braid farm-to-table chambray stumptown."
    },

    {
        tip: "River stingray river loach dorado cepalin cutthroat eel, cusk-eel sculpin driftfish escolar Old World rivuline plownose chimaera, pike conger."
    },

    {
        tip: "Marine hatchetfish horsefish brook lamprey white marlin."
    },

    {
        tip: "Freshwater flyingfish porcupinefish anglerfish, freshwater flyingfish weever ladyfish spiny-back mola mola sunfish."
    }


]