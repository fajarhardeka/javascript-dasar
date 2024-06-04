console.log("Map on Javascript");
// Map adalah tipe data yang mengoleksi data dengan format key-value layaknya sebuah object.
const myMap = new Map([
    ['1', 'a String key'],
    [31, 'a number key'],
    [true, true]
]);
console.log(myMap);

console.log("");

// Mendapatkan nilai tertentu dari key tertentu get(), menambahkan pasangan key-value baru set().
const kecamatan = new Map([

    ["Mendala", "Karangkobar"],
    ["Kincang", "Rakit"],
    ["Sigandu", "Wanadadi"],
    ["Magangan", "Madukara"]
]);

console.log(kecamatan.size); // mengambil total kecamatan dari key-value yang sudah ada
console.log(kecamatan.get("Kincang")); // mengambil sebuah value dari key kincang 
kecamatan.set("Bondolharjo","Punggelan"); // menambahkan key-value baru set()
console.log(kecamatan.size); // mengambil total kecamatan termasuk dari set() yang baru
console.log(kecamatan.get("Bondolharjo")) // menampilan value baru yang telah ditambahkan

// Contoh map yang kurang tepat menggunakan .has dan .delete dalam mendapatkan nilai tanpa set() dan get().
const ngawir = new Map();
ngawir["Gembok"]="Kunci";

console.log(ngawir.has("Gembok")); // hasil false
console.log(ngawir.delete("Gembok")); // hasil false

// 
