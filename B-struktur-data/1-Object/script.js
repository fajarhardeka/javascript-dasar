// Tipe Data Object

console.log("Selamat datang di Object Javascript!")

// Object merupakan pasangan key dan value atau biasa disebut dengan property.
// Untuk menetapkan sebuah object gunakan {}
const pintu = {
    kunci1: "Gembok 1", 
    kunci2: "Gembok 2", 
    kunci3: "Gembok 3",
    jumlahPintu: 1,
    pintuNormal: false,
    pintuRusak: true, 
    "Doraemon": "Pintu ke mana saja",
    warnaPintu: "Hijau promag"
};
console.log(`Pintu pertama pasangkan dengan : ${pintu.kunci1}`)
console.log(`Pintu kedua pasangkan dengan : ${pintu.kunci2}`)
console.log(`Pintu ketiga pasangkan dengan : ${pintu.kunci3}`)
console.log(`Pintunya rusak yah? Jamal menjawab : "${pintu.pintuRusak}"`)
console.log(`Pintunya rusak yah? Jamal menjawab : "${pintu.pintuNormal}"`)
console.log(`Apakah Doraemon punya pintu? Jamal menjawab : "${pintu["Doraemon"]}"`)

// Memodifikasi sebuah object
// Mengubah nilai properti pada object gunakan assignment operator (=)
const cbIcikiwir = {
    tipe: "Classic Bike",
    manufaktur: "Federal MFG",
    cc: 100,
    warna : "White and Black",
};

cbIcikiwir.warna = "Silver Metallic"; // Merubah value pada warna
cbIcikiwir["cc"] = 125; // Merubah value pada cc
console.log(cbIcikiwir);
/* Object cbIcikiwir dideklarasikan sebagai const, kok bisa mengubah nilainya?
Hanya mengubah saja bisa, namun untuk menginisialisasi berbeda cerita, cobalah contoh di bawah ini.*/
// cbIcikiwir = { tipe: "Modern Bike" }; 
/* It's must be error, uncomments the line codes above.*/

// Menghapus property pada object
delete cbIcikiwir.tipe;

console.log(cbIcikiwir);