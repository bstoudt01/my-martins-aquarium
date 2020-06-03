const fishCollection = [
    {
        species: "Parrot Fish",
        length: 8,
        name: "Angus",
        location: "Sea of Google",
        food: "Popcorn",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"
    },

    { 
        species: "Mahi",
        length: 6,
        name: "Lunch",
        location: "The Ocean",
        food: "Lime",
        picture: "https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4.jpg"
    },

    {
        species: "Spotted Eel",
        length: 7,
        name: "Spotted Grumpy Fish",
        location: "Gulf of Mexico",
        food: "Anything Puree'd",
        picture: "https://www.hakaimagazine.com/wp-content/uploads/trout-fish-feel.jpg"
    },

    {
        species: "Rainblow",
        length: 8,
        name: "Fish outta Wata",
        location: "Homedepot",
        food: "Old People",
        picture: "https://images.homedepot-static.com/productImages/36dc334f-0135-497d-9e79-7fdfd8811506/svn/multicolor-badash-crystal-sculptures-j527-64_600.jpg"
    },

    {
        species: "Triggerfish",
        length: 3,
        name: "NoSeaEm",
        location: "The Purple Ocean Reef",
        food: "Highlighters",
        picture: "https://i.etsystatic.com/7622160/r/il/c0dd51/1276548045/il_570xN.1276548045_jemv.jpg"
    },

    {
        species: "Swordfish",
        length: 320,
        location: "Atlantic Ocean",
        picture: "https://cedepesca.net/wp-content/uploads/2019/03/prome-pez-espada-t-820x461.jpg",
        food: "Herring",
        name: "Chester"
    },

    {
        species: "Angel Fish",
        length: 10,
        location: "Pacific Ocean",
        picture: "https://www.aquariumofpacific.org/images/made/images/olc/king-angelfish_530_488_80auto_s.jpg",
        food: "Plankton",
        name: "Michael"
    },

    {
        species: "Elegant Corydoras",
        length: 15,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "https://riverpark.biz/54/elegant-cory.jpg"
    },
    
    {
        species: "Orange Roughy",
        length: 16,
        location: "Southern Ocean",
        picture: "https://www.oneworldoneocean.com/images/blog/3604698319_e32488227d_z.jpg",
        food: "Anchovies",
        name: "Michael"
    }
];

// 3, 6, 9, 12, etc... fish

const mostHolyFish = () => {
    const holyFish = []

    for (const fishLength of fishCollection) {
        if (fishLength.length % 3 === 0) {
            holyFish.push(fishLength)
            
        }
    }
    return holyFish

}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = []

    for (const fishLength of fishCollection) {
        if (fishLength.length % 5 === 0 && fishLength.length % 3 !== 0) {
            soldiers.push(fishLength)
            
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []

    for (const fishLength of fishCollection) {
        if (fishLength.length % 3 !== 0 && fishLength.length % 5 !== 0) {
            regularFish.push(fishLength)
            
        }
    }
    return regularFish
}
const ab = mostHolyFish()
const cd = soldierFish()
const ef = nonHolyFish()
console.log(ab)
console.log(cd)
console.log(ef)