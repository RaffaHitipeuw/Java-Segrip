
// ! Latihan 1

// *Tugas 1
let penduduk = {
    NamaDepan: 'Slamet',
    NamaBelakang: 'Santoso',
    Umur: '45 Tahun',
    Pekerjaan: 'Petani',
}
// *Tugas 2
penduduk.Alamat = 'Yogyakarta';

// *Tugas 3
let {NamaBelakang} = penduduk;
console.log(NamaBelakang);

// *Tugas 4
console.log(penduduk.Pekerjaan);

// ! Latihan 2

let buahFavorit = ["Mangga", "Jeruk", "Apel"];
console.log(buahFavorit);

// *Tugas 1
buahFavorit.push("Pisang");
console.log(buahFavorit);

// *Tugas 2
buahFavorit[1] = ("Anggur")
console.log(buahFavorit);

// *Tugas 3
buahFavorit.pop();
console.log(buahFavorit);

// *Tugas 4
console.log(buahFavorit);

// ! Latihan 3

// *Tugas 1
let menuRestoran = ([
    ["Nasi Goreng", 15000],
    ["Mie Ayam", 13000],
    ["Es Teh Manis", 5000],
]);

// *Tugas 2
menuRestoran.push(["ayambakar", 20000]);
console.log(menuRestoran);

// *Tugas 3
console.log(menuRestoran[1][1]);

// *Tugas 4
menuRestoran.splice(2,1);
console.log(menuRestoran);

// *Tugas 5
console.log(menuRestoran);

// ! Latihan 4

let koleksiBuku = new Set (["Laskar Pelangi", "Bumi", "Hujan"]);

// *Tugas 1
koleksiBuku.add("Filosofi Teras");

// *Tugas 2
koleksiBuku.add("Bumi");
// Enggak ada

// *Tugas 3
koleksiBuku.delete("Hujan");

// *Tugas 4
console.log(koleksiBuku);

// ! Latihan 5

let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardigan"]; 

// *Tugas 1
let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);

// *Tugas 2
const updatepakaianToko = [...pakaianToko, "kaos"];
console.log(updatepakaianToko);

// ! Latihan 6

// *Tugas 1
function pesanMakanan(...makanan) {
    return makanan;
  }
console.log(pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis"));