const nama = "Hildan Adisqi Ali Hasan";
var usia = 21;
let alamat = "Lumajang";

let identitas =
  "Nama saya " +
  nama +
  ", usia saya " +
  usia +
  ", dan saya berasal dari " +
  alamat;
console.log(nama);
console.log(usia);
console.log(alamat);
console.log(identitas);

let perguruanTinggi = {
  nama: "ITSK RS. dr. Soepraoen Malang",
  tahun: 2021,
  alamat: "Malang",
};
console.log(perguruanTinggi);
console.log(perguruanTinggi.nama);

let angka = 18;
let angka2 = 10;
let perkalian = angka * angka2;
console.log(perkalian);
console.log(typeof perkalian);

let perkalianToString = String(perkalian);
console.log(perkalianToString);
console.log(typeof perkalianToString);

function sepuluh() {
  for (let index = 0; index < 10; index++) {
    console.log(index);
    if (index == 8) {
      console.log("aku ganteng");
      continue;
    }
  }
}
sepuluh();
