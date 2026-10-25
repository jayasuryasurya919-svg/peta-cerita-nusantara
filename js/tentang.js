// Statistik konten dihitung dari data, jadi selalu sesuai isi data-budaya.js
const namaKategori = {
  cerita: "Cerita rakyat",
  candi: "Candi",
  tarian: "Tarian",
  wayang: "Tokoh wayang",
  keris: "Dapur keris",
  tombak: "Dapur tombak"
};

const wadahStatistik = document.getElementById("statistik");

Object.keys(namaKategori).forEach(function (kunci) {
  const jumlah = dataLengkap.filter(function (item) {
    return item.kategori === kunci;
  }).length;

  const kotak = document.createElement("div");
  kotak.className = "statistik-kotak";

  const angka = document.createElement("span");
  angka.className = "statistik-angka";
  angka.textContent = jumlah;

  const label = document.createElement("span");
  label.className = "statistik-label";
  label.textContent = namaKategori[kunci];

  kotak.appendChild(angka);
  kotak.appendChild(label);
  wadahStatistik.appendChild(kotak);
});
