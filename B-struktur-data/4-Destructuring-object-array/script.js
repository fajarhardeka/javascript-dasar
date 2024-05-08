console.log("Destructuring object & array")


/* Destructuring merupakan sintaksis yang dapat mengeluarkan nilai dari array ataupun 
properties dari sebuah object ke dalam satuan yang lebih kecil.
 */
 
// Destructuring object pada deklarasi variable
const profile = {
    namaDepan: "Jamal",
    namaAkhir: "Licious",
    umur: 20
}

const { namaDepan, namaAkhir, umur } = profile;

console.log(namaDepan, namaAkhir, umur);

console.log(""); // Jeda pada console

// Destructuring pada variable yang sudah dideklrasikan
const aboutKulo = {
    namiNgajeng: "Udin",
    namiWingking: "Jawed",
    yuswa: 23 
}

let namiNgajeng = "Jamals";
let yuswa = 24;

// Menginisialisasi nilai baru melalui destructuring object
({ namiNgajeng, yuswa } = aboutKulo);

console.log(namiNgajeng);
console.log(yuswa);
