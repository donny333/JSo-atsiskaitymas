/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white'
};

let showObjectKeys = object => {
  let objektKeysMasyvas = Object.keys(object);
  return objektKeysMasyvas;
};

console.log(showObjectKeys(audi));