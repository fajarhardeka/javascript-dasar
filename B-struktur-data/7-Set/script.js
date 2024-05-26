console.log("Set on Javascript");
// Set merupakan kumpulan dari nilai (set of values), struktur data pada Set tidak terstruktur dan juga tidak di indeks, bersifat unik dan tidak ada duplikasi.

const ruwet = new Set([3,2,3,1,4]);

console.log(ruwet); // hasil yang dihasilkan Set (4) 3, 2, 1, 4

// Menambahkan data ke dalam Set
const nambahRuwet = new Set([3,2,3,1,4]);
nambahRuwet.add(51);
nambahRuwet.add(66);
nambahRuwet.add(17);

console.log(nambahRuwet);

// Menghapus dala dalam Set
nambahRuwet.delete(1); // Menghapus nilai 1

console.log(nambahRuwet); 