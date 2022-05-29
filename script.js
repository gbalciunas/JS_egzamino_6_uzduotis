/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1. Vardai naujame masyve

const newUsers = users.map(getUsersNames =>{
  return getUsersNames.name
})
console.log(newUsers)


// 2.Amžiaus vidurkis

/* let amount = 0
for (let i = 0; i < users.length; i++) {
  amount += users[i].age
}
let avg = (amount/users.length).toFixed(0);
console.log("Amžiaus vidurkis: " + avg) */

// 2.Amžiaus vidurkis 2 variantas

const average = (users.reduce((total, users) => {
  return total + users.age
}, 0) / users.length).toFixed(2)
console.log("Amžiaus vidurkis: " + average) 