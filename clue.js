let suspectsArray = ["Matt", "Alyssa", "Weston", "Jamie", "Steph", "Alex"];
let weaponsArray = ["gun", "grenade", "frying pan", "chair", "brick", "knife", "sword", "mace"];
let roomsArray = ["Lower West Cedar", "Hancock", "Champ", "Dyson", "Fulton", "Donnelly", "Ward", "Fontaine", "McCann", "Campus Green"];

function selectRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
}

function pickMystery() {

    return { killer: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), place: selectRandom(roomsArray) };
}
const deathSolution = pickMystery();
document.querySelector("#startGameButton").addEventListener("click", function () {
    alert(deathSolution.killer + " killed Mr. Marist using a " + deathSolution.weapon + " at " + deathSolution.place + "!");
})