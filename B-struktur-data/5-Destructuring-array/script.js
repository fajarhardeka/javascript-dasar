console.log("Destructuring Array :");

/* Destructuring Array serupa dengan destructuring object. Jika Object menggunakan {} sedangkan array []
dan Destructuring array bekerja berdasarkan posisi daripada penamaan propertinya*/

console.log("");

const kesenengan = ["Ciwel", "Buntil", "Gethuk", "Candil"];

const [jajanKesiji, jajanKeloro, jajanKetelu, jajanKepapat] = kesenengan;

console.log(jajanKesiji);
console.log(jajanKeloro);
console.log(jajanKetelu);
console.log(jajanKepapat);

console.log("");
console.log("Index Destructuring :")
// memilih index untuk destrukturisasi
const enak = ["Cilok", "Cucur", "Serabi", "Ampyang"];

const [, , , sekawan ] = enak; // menampilkan index 3

console.log(sekawan);
console.log("");
// Destructuring Assignment
console.log("Destructuring Assignment :");

const favmbanget = ["Cimplungs"];

// [maemeNyong, maemeAyang] = favmbanget // Unddefined
[maemeNyong, maemeAyang="Seblaks"] = favmbanget

console.log(maemeNyong);
console.log(maemeAyang);

