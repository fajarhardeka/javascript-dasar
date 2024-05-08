// Array
let myArray = ["Timun", 100.4, 32, true, "Jamalicious"];
console.log(myArray); // akses array tanpa menggunakan index 
console.log(myArray[4]); // akses array menggunakan index
console.log(myArray[5]); // undefined (karena mengakses index di luar ukuran array)
console.log("Panjang nilai dari myArray adalah = " + myArray.length + ".");

       // Memanipulasi data pada array
// Push
const arrayKu = ["Apel", 50.4, 29, false, "Jamalicia"];
arrayKu.push('Jamaludins') // menambahkan data ke dalam array
console.log(arrayKu); 

// Pop
const akudiArray = ["Pier", 39.4, 19, true, "Jamalaws"];
akudiArray.pop(); // mengeluarkan data terakhir dari array
console.log(akudiArray);

// Shift and Unshift
const mengArray = ["Salak", 9.4, 21, false, "Jamalskill"];
mengArray.shift(); // mengeluarkan data pertama dari array
mengArray.unshift("Manggis"); // menambahkan data di awal array
console.log(mengArray);

// Delete 
const sangArray = ["Salak", 9.4, 21, false, "Jamalskill"];
sangArray.shift(); // mengeluarkan data pertama dari array
sangArray.unshift("Manggis"); // menambahkan data di awal array
delete sangArray[2]; // menghapus data dalam array mengugunakan index
console.log(sangArray);

// Splice
const ngeArray = ["Salak", 9.4, 21, false, "Jamalskill"];
ngeArray.shift(); // mengeluarkan data pertama dari array
ngeArray.unshift("Manggis"); // menambahkan data di awal array
ngeArray.splice(2, 1); // menghapus data dari index 2 sebanyak 1 elemen
console.log(ngeArray);

const bulan = ['Januari', 'Maret', 'April', 'Mei'];
console.log('sebelum displice: ', bulan); // Sebelum ditambahkan data menggunakan splice

bulan.splice(1, 0, 'Februari');
console.log('setelah displice: ', bulan); // Setelah ditambahkan data menggunakan splice



