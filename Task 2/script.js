/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let i = 0;
document
    .querySelector('#btn__element')
    .addEventListener('click', () =>{
        i += 1
        let newClick = document.createTextNode(i);
        let btnState = document.querySelector('#btn__state');
        btnState.innerHTML='';
        btnState.appendChild(newClick);
    }
);