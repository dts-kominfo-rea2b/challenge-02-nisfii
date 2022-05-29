// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  //create new array of fullName
  let hasilLooping = [];
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    hasilLooping.push(
      arrayObjectPegawai[i].namaDepan + " " + arrayObjectPegawai[i].namaBelakang
    )
  }

  //count Male
  let jumlahPria = 0;
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    if (arrayObjectPegawai[i].jenisKelamin == "M") {
      jumlahPria = jumlahPria + 1;
    }
  }
  
  //count Female
  let jumlahWanita = 0;
  for (let i = 0; i < arrayObjectPegawai.length; i++) {
    if (arrayObjectPegawai[i].jenisKelamin == "F") {
      jumlahWanita = jumlahWanita + 1;
    }
  }

  //add conclusion
  let komentar = ( jumlahPria > jumlahWanita ) ? "jumlah pria lebih banyak dari wanita" : "jumlah wanita lebih banyak dari pria";

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
