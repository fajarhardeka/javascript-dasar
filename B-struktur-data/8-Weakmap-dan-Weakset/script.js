console.log("WeakMap dan WeakSet");

// Weakmap
const { inspect } = require('util');

const visitCountMap = new WeakMap(); // menyimpan daftar user

function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let jamal = {name: "Jamal"};
countUser(jamal); // menambahkan user "Jamal"

jamal = null; // data object "Jamal" dihapus

// membuat delay untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitCountMap, { showHidden:true}));
}, 10000);
