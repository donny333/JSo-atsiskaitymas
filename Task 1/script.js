/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document
    .querySelector('.wrapper > form')
    .addEventListener('submit', event => {
        event.preventDefault();
        let svorisKg = Number(event.target.elements.search.value);
        let svorislb = svorisKg * 2.2046;
        let svorisg = svorisKg / 0.001;
        let svorisoz = svorisKg * 35.274;

        let outputDiv = document.querySelector('#output');
        let lbHeading = document.createElement('h2');
        let gHeading = document.createElement('h2');
        let ozHeading = document.createElement('h2');
        let lbTextNode = document.createTextNode(`${svorisKg}kg = ${svorislb}lb`);
        let gTextNode = document.createTextNode(`${svorisKg}kg = ${svorisg}g`);
        let ozTextNode = document.createTextNode(`${svorisKg}kg = ${svorisoz}oz`);

        lbHeading.appendChild(lbTextNode);
        gHeading.appendChild(gTextNode);
        ozHeading.appendChild(ozTextNode);

        outputDiv.append(lbHeading, gHeading, ozHeading);


});