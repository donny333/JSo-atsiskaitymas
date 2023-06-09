/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document
    .querySelector('.btn-container')
    .addEventListener('click', () =>{
        document.querySelector('#message').remove()
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => data.forEach(dat => {
                let avatarDiv = document.createElement('div');
                avatarDiv.classList.add('avatar')
                let newImage = document.createElement('img');
                newImage.setAttribute('src', dat.avatar_url);
                let newPar = document.createElement('p');
                let newParText = document.createTextNode(dat.login);
                newPar.appendChild(newParText);

                avatarDiv.append(newImage, newPar)
                document.querySelector('#output').appendChild(avatarDiv);
            })
        );
    }
)