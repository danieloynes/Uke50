// Oppgave 1
/*
const tall1 = parseFloat(prompt("Skriv inn tall 1: "));
const tall2 = parseFloat(prompt("Skriv inn tall 2: "));
const operasjon = prompt("Skriv inn operasjon (+, -, *, /): ");

if (operasjon === "+") {
    console.log(tall1 + tall2);
} else if (operasjon === "-") {
    console.log(tall1 - tall2);
} else if (operasjon === "*") {
    console.log(tall1 * tall2);
} else if (operasjon === "/") {
    console.log(tall1 / tall2);
} else {
    console.log("Ugyldig operasjon");
}
*/

// Oppgave 2
/*
var høyde = parseInt(prompt("Skriv høyde"));
var bredde = parseInt(prompt("Skriv bredde"));
var areal = (høyde * bredde);

alert(`Arealet til rektangelet er ${areal}`);
*/

// Oppgave trey
/*
const navn = prompt("Skriv navn: ");
const alder = parseInt(prompt("Skriv alder (under 100): "), 10);

if (alder > 100) {
    alert("Ugyldig tall");
} else if (alder < 0) {
    alert("Ugyldig tall");
} else {
    alert(`Hei ${navn}, du fyller 100 om ${100 - alder} år.`);
}
*/

//Oppgave fiere
/*
const tall = parseInt(prompt("Skriv et tall: "), 10);

if (tall > 0) {
    console.log(`Tall ${tall} er et positivt tall`);
} else if (tall < 0) {
    console.log(`Tall ${tall} er et negativt tall`);
} else {
    console.log(`Tall ${tall} er bare 0 :)`);
}
*/

//Oppgave feim
/*
const tall = parseInt(prompt("Skriv et tall: "), 10);

let sum = 0;

for (let i = 1; i <= tall; i++) {
    sum += i;
}

console.log(`Summen av alle tall fra 1 til ${tall} er ${sum}`);
*/

//Oppgave suck
/*
const navn1 = prompt("Skriv navn 1: ");
const navn2 = prompt("Skriv navn 2: ");
const navn3 = prompt("Skriv navn 3: ");
const navn4 = prompt("Skriv navn 4: ");
const navn5 = prompt("Skriv navn 5: ");

const navnListe = [navn1, navn2, navn3, navn4, navn5];

console.log("Navnene i listen er:", navnListe);
*/

//Oppgave siuuuuu
const navnListe = [];

for (let i = 0; i < 5; i++) {
    const navn = prompt(`Skriv navn ${i + 1}: `);
    navnListe.push(navn);
}

console.log("Navnene i listen er:", navnListe);