let Name = 'Eline'; //string literal
console.log("Hallo Winc Academy studenten");

document.write(1230941 x 1823794)

document.write(637263 / 54)


let interestRate = 0,3;
interestRate = 1;
console.log(interestRate);

// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 808; 
*/

if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("You can better get a cab!");
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op je biertje");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (name === "Sarah" || name === "Bram") {
    console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
    console.log("Je doet niet mee aan onze ludieke Sarah Abraham actie");
}

if (totalAmount >= 100) {
    console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
    console.log("gratis portie nachos");
} else if (totalAmount > 25) {
    console.log("gratis (vega)bitterballen");
} else {
    console.log("Helaas geen korting, maar leuk dat je er bent");
}


let person = {
    Name: 'Eline',
    age: 25
};
// Dot Notation
person.name = 'Jan';

// Bracket Notation
person['Name'] = 'Lisa';

console.log(person.name);

let coll = Numbers();
coll.set('key', 9, 10);


let selectedColors = ['Red', 'Blue'];
selectedColors[2] = 'Green';
console.log(selectedColors[0]);


let kat_1 = {
    CatBreed: 'Abyssinian'
    origin: 'Egypt'
    Care: 'Easy'
    dog_friendly: '4'
    life_span: '14-15'
    temperament: 'Active, Energetic, Independent, Intelligent, Gentile'
    favorite_food: 'Fish'
};


let kat_2 = {
    CatBreed: 'Aegean'
    origin: 'Greece'
    Care: 'Easy'
    dog_friendly: '4'
    energy_level: '53'
    life_span: '9-12'
    temperament: 'Affectionate, Social, Intelligent, Playful, Active'
    favorite_food: 'Tuna'

};

let kat_3 = {
    CatBreed: 'American Bobtail'
    origin: 'United States'
    Care: 'Easy'
    dog_friendly: '3'
    energy_level: '3'
    life_span: '11-15'
    temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive'
    favorite_food: 'Meaty things'

};