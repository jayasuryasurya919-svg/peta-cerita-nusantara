const kategoriHalaman = document.body.dataset.kategori;
const wadahGaleri = document.getElementById("galeri-grid");

const daftar = dataBudaya.filter(function (item) {
  return item.kategori === kategoriHalaman;
});

// Ikon badge per golongan wayang (digambar sendiri, bentuk generik)
const ikonKelompok = {
  "Punakawan":
    '<circle cx="12" cy="12" r="9"/>' +
    '<circle cx="9" cy="11" r="1.4" fill="#faf3e3"/>' +
    '<circle cx="15" cy="11" r="1.4" fill="#faf3e3"/>' +
    '<path d="M8 16c1.5 1.3 6.5 1.3 8 0" stroke="#faf3e3" stroke-width="1.6" fill="none" stroke-linecap="round"/>',

  "Keluarga Ayodhya dan Mantili":
    '<path d="M4 17h16l-1.5-7-3 3-2.5-5-2.5 5-3-3L4 17Z"/>',

  "Bangsa Buto dan Raksasa":
    '<path d="M4 9c2-3 14-3 16 0l-1 6c-1 2-3 2-3 0l-.6-2-1 3c-.6 1.6-2.2 1.6-2.8 0l-1-3-.6 2c0 2-2 2-3 0L4 9Z"/>',

  "Bangsa Wanara":
    '<circle cx="12" cy="12" r="6"/>' +
    '<circle cx="6.5" cy="8" r="2.4"/>' +
    '<circle cx="17.5" cy="8" r="2.4"/>' +
    '<path d="M18 15c2 1 3 3 2 5" stroke-width="1.8" fill="none" stroke-linecap="round"/>',

  "Dewa dan Resi":
    '<circle cx="12" cy="12" r="4.5"/>' +
    '<g stroke-width="1.6" stroke-linecap="round">' +
      '<path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>' +
      '<path d="M4.9 4.9l2.1 2.1"/><path d="M17 17l2.1 2.1"/>' +
      '<path d="M19.1 4.9 17 7"/><path d="M7 17l-2.1 2.1"/>' +
    '</g>',

  "Sekutu dan Satwa Sakti":
    '<path d="M12 4c3 3 9 4 9 4s-2 6-9 10c-7-4-9-10-9-10s6-1 9-4Z"/>'
};

// Ikon cadangan per kategori (dipakai kalau golongan tidak punya ikon sendiri)
const ikonKeris =
  '<path d="M12 2l2 4-2 4 2 4-2 3-2-3 2-4-2-4 2-4Z"/>' +
  '<rect x="9.5" y="17" width="5" height="1.8" rx=".6"/>' +
  '<rect x="11" y="18.8" width="2" height="3.2" rx=".8"/>';

const ikonTombak =
  '<path d="M12 2c2.6 2.6 3 5.4 0 8.4C9 7.4 9.4 4.6 12 2Z"/>' +
  '<rect x="9.5" y="10" width="5" height="1.4" rx=".6"/>' +
  '<rect x="11.2" y="11.4" width="1.6" height="10.6" rx=".8"/>';

const ikonPerKategori = { keris: ikonKeris, tombak: ikonTombak };

const ikonDefault = '<path d="M12 2 5 7v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V7l-7-5Z"/>';

const warnaKelompok = {
  // Wayang
  "Punakawan": "var(--emas)",
  "Keluarga Ayodhya dan Mantili": "var(--merah-bata)",
  "Bangsa Buto dan Raksasa": "var(--coklat-tua)",
  "Bangsa Wanara": "var(--hijau-tua)",
  "Dewa dan Resi": "var(--emas-terang)",
  "Sekutu dan Satwa Sakti": "var(--coklat-sedang)",
  // Keris
  "Mengenal Keris": "var(--emas)",
  "Dapur Keris Bilah Lurus": "var(--coklat-tua)",
  "Dapur Keris Luk 3 dan Luk 5": "var(--hijau-tua)",
  "Dapur Keris Luk 7 dan Luk 9": "var(--merah-bata)",
  "Dapur Keris Luk 11, Luk 13, dan Kalawija": "var(--coklat-sedang)",
  // Tombak
  "Mengenal Tombak": "var(--emas)",
  "Dapur Tombak Bilah Lurus": "var(--hijau-tua)",
  "Dapur Tombak Bilah Luk dan Bentuk Khusus": "var(--merah-bata)"
};

// Urutan kartu dipakai untuk jeda animasi muncul (dibatasi supaya tidak menunggu terlalu lama)
let urutanKartu = 0;

function buatKartu(item) {
  const warna = warnaKelompok[item.kelompok] || "var(--coklat-sedang)";
  const ikon = ikonKelompok[item.kelompok] || ikonPerKategori[item.kategori] || ikonDefault;

  const kartu = document.createElement("div");
  kartu.className = "galeri-card";
  kartu.dataset.teks = (item.judul + " " + item.daerah + " " + (item.kelompok || "") + " " + item.sinopsis).toLowerCase();
  kartu.style.borderLeftColor = warna;
  kartu.style.animationDelay = (Math.min(urutanKartu, 15) * 0.08) + "s";
  urutanKartu++;

  kartu.innerHTML =
    '<div class="galeri-badge" style="border-color:' + warna + '">' +
      '<svg viewBox="0 0 24 24" fill="' + warna + '" stroke="' + warna + '" stroke-width="0">' + ikon + '</svg>' +
    '</div>' +
    "<h3>" + item.judul + "</h3>" +
    "<p class='galeri-daerah'>" + item.daerah + "</p>" +
    "<p>" + item.sinopsis + "</p>" +
    "<a href='detail.html?id=" + item.id + "' class='btn-cta'>Baca Selengkapnya</a>";

  // Transisi singkat sebelum pindah ke halaman detail
  const tombol = kartu.querySelector(".btn-cta");
  tombol.addEventListener("click", function (e) {
    e.preventDefault();
    const tujuan = tombol.getAttribute("href");
    kartu.classList.add("keluar");
    setTimeout(function () {
      window.location.href = tujuan;
    }, 350);
  });

  return kartu;
}

const adaKelompok = daftar.some(function (item) {
  return item.kelompok;
});

// Kalau dikelompokkan, wadah utama cukup jadi penampung biasa (bukan grid)
if (adaKelompok) {
  wadahGaleri.classList.remove("galeri-grid");
}

if (adaKelompok) {
  const urutanKelompok = [];
  const petaKelompok = {};

  daftar.forEach(function (item) {
    const nama = item.kelompok || "Lainnya";
    if (!petaKelompok[nama]) {
      petaKelompok[nama] = [];
      urutanKelompok.push(nama);
    }
    petaKelompok[nama].push(item);
  });

  urutanKelompok.forEach(function (nama) {
    const judulKelompok = document.createElement("h3");
    judulKelompok.className = "galeri-kelompok-judul";
    judulKelompok.textContent = nama;
    wadahGaleri.appendChild(judulKelompok);

    const grid = document.createElement("div");
    grid.className = "galeri-grid-dalam";
    petaKelompok[nama].forEach(function (item) {
      grid.appendChild(buatKartu(item));
    });
    wadahGaleri.appendChild(grid);
  });
} else {
  daftar.forEach(function (item) {
    wadahGaleri.appendChild(buatKartu(item));
  });
}

// ===== PENCARIAN REAL-TIME =====
const inputCariGaleri = document.getElementById("cari-galeri");
const infoJumlah = document.getElementById("galeri-jumlah");
const infoKosongGaleri = document.getElementById("galeri-kosong");
const semuaKartu = wadahGaleri.querySelectorAll(".galeri-card");

function terapkanCari() {
  const kata = inputCariGaleri.value.trim().toLowerCase();
  let jumlahCocok = 0;

  semuaKartu.forEach(function (kartu) {
    const cocok = kartu.dataset.teks.includes(kata);
    kartu.classList.toggle("tersembunyi", !cocok);
    if (cocok) jumlahCocok++;
  });

  // Sembunyikan judul kelompok beserta grid-nya kalau tidak ada kartu yang cocok
  wadahGaleri.querySelectorAll(".galeri-grid-dalam").forEach(function (grid) {
    const adaYangTampil = grid.querySelector(".galeri-card:not(.tersembunyi)") !== null;
    grid.classList.toggle("tersembunyi", !adaYangTampil);
    grid.previousElementSibling.classList.toggle("tersembunyi", !adaYangTampil);
  });

  infoJumlah.textContent = kata
    ? jumlahCocok + " dari " + semuaKartu.length + " ditampilkan"
    : semuaKartu.length + " entri";
  infoKosongGaleri.hidden = jumlahCocok > 0;
}

inputCariGaleri.addEventListener("input", terapkanCari);
terapkanCari();