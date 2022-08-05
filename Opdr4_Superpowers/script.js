const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];
//console.log(superheroes);


// 1. Make an array of all superhero names

// manier 1
const superheroNames1 = function (array) {
    return array.map(hero => hero.name);
};
console.log(superheroNames1(superheroes));

// manier 2 korter
const superheroNames2 = superheroes.map(hero => hero.name);
console.log(superheroNames2);


//2 Make an array of all "light" superheroes (< 190 pounds)

// manier 1
const lightSuperheroes1 = function (array) {
    return array.filter(hero => { if (hero.weight <= 190) { return hero.name } });
};
console.log(lightSuperheroes1(superheroes));

// manier 2 korter
const lightSuperheroes2 = superheroes.filter(hero => { if (hero.weight <= 190) { return hero.name } });
console.log(lightSuperheroes2);


//3 Create an array with the names of the superheroes who weigh 200 pounds

// manier 1
const heavySuperheroes1 = function (array) {
    return array.filter(hero => hero.weight > 200).map(hero => hero.name);
};
console.log(heavySuperheroes1(superheroes));

// manier 2 korter
const heavySuperheroes2 = superheroes.filter(hero => hero.weight > 200).map(hero => hero.name);
console.log(heavySuperheroes2);


//4 Make an array with all the comics where the superheroes had their "first appearances"

// manier 1
const firstAppearances1 = function (array) {
    return array.map(hero => hero.name + ': ' + hero.first_appearance);
};
console.log(firstAppearances1(superheroes));

// manier 2 korter
const firstAppearances2 = superheroes.map(hero => hero.name + ': ' + hero.first_appearance);
console.log(firstAppearances2);


//5 part 1: Create an array of all DC Comics superheroes.

// manier 1
const allDCComicsHeroes1 = function (array) {
    return array.filter(hero => hero.publisher == "DC Comics").map(hero => hero.name);
};
console.log(allDCComicsHeroes1(superheroes));

// manier 2 korter
const allDCComicsHeroes2 = superheroes.filter(hero => hero.publisher == "DC Comics").map(hero => hero.name);
console.log(allDCComicsHeroes2);


//5 part 2: Then repeat the above function and also create an array with all Marvel Comics superheroes.

// manier 1
const allMarvelComicsHeroes1 = function (array) {
    return array.filter(hero => hero.publisher == "Marvel Comics").map(hero => hero.name);
};
console.log(allMarvelComicsHeroes1(superheroes));

// manier 2 korter
const allMarvelComicsHeroes2 = superheroes.filter(hero => hero.publisher == "Marvel Comics").map(hero => hero.name);
console.log(allMarvelComicsHeroes2);


//6 Add up the weight of all DC Comics superheroes. 

// manier 1
const totalWeightDCHeroes1 = function (array) {
    const initialValue = 0;
    return array.filter(hero => hero.publisher == "DC Comics").map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
};
console.log(totalWeightDCHeroes1(superheroes));

// manier 2 korter
const totalWeightDCHeroes2 = superheroes.filter(hero => hero.publisher == "DC Comics").map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalWeightDCHeroes2);

//7 Do the same with all Marvel Comics superheroes
const totalWeightMarvelHeroes1 = function (array) {
    const initialValue = 0;
    return array.filter(hero => hero.publisher == "Marvel Comics").filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
};
console.log(totalWeightMarvelHeroes1(superheroes));

const totalWeightMarvelHeroes2 = superheroes.filter(hero => hero.publisher == "Marvel Comics").filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalWeightMarvelHeroes2);


/* // all superheroes totalweight
// manier1
const totalWeightHeroes1 = function (array) {
    const initialValue = 0;
    return array.filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
};
console.log(totalWeightHeroes1(superheroes));
// manier 2 korter
const totalWeightHeroes2 = superheroes.filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalWeightHeroes2); */


//8 Bonus: find the toughest superhero!

//manier 1
const toughestSuperhero1 = function (array) {
    const toughest = Math.max.apply(null, array.filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)));
    return superheroes.filter(hero => hero.weight == toughest).map(hero => hero.name);
};
console.log(toughestSuperhero1(superheroes));

// manier 2 korter
const toughestSuperhero2 = superheroes.filter(hero => hero.weight == Math.max.apply(null, superheroes.filter(hero => hero.weight >= Number("0")).map(hero => Number(hero.weight)))).map(hero => hero.name);
console.log(toughestSuperhero2);