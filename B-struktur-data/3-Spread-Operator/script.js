console.log("spread operator cihuyyyyy");


const paporit = ["Buntil", "Dawet", "Muntul", "Gedang goreng"];
const doyanbanget = ["Rambak", "Ciwel", "Tape goreng", "Salak gudug"];

// Spread Operator digunakan untuk menyebarkan nilai pada array
console.log(paporit); // Tidak menggunakan spread operator
console.log(...paporit); // Menggunakan spread operator

const allCinta = [...paporit, ...doyanbanget]; // Menggabungkan 2 array

console.log(allCinta);

const obj1 = { nama: 'Jamal-Kun', usia: 39};
const obj2 = { jersey: 'Timnas', size: 'XL'};

const hasil = {...obj1, ...obj2};

console.log(hasil);