/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('./cars.json')
    .then(res => res.json())
    .then(data => data.forEach(dat => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        let brandHeading = document.createElement('h1');
        let brandHeadingText = document.createTextNode(`${dat.brand} models:`);
        brandHeading.appendChild(brandHeadingText);
        let listOfModels = document.createElement('ul');

        dat.models.forEach(model => {
            let listItem = document.createElement('li');
            let listItemText = document.createTextNode(model);
            listItem.appendChild(listItemText);
            listOfModels.appendChild(listItem)

        })
        
        cardDiv.append(brandHeading, listOfModels)
        document.querySelector('#output').appendChild(cardDiv);
    })
);