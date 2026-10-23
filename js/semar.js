
"use strict";

const langkahSemar = [
  {
    teks: "Sugeng rawuh! Saya Ki Semar, akan menemanimu menjelajahi Peta Budaya Nusantara.",
    tombol: "Lanjut ➔"
  },
  {
    teks: "Klik pin di peta untuk membaca cerita rakyat, candi, atau tarian. Jelajahi juga galeri Wayang, Keris, dan Tombak di menu atas.",
    tombol: "Lanjut ➔"
  },
  {
    teks: "Cerita rakyat, candi, dan tarian punya kuis singkat di akhir. Selamat menjelajah!",
    tombol: "Mengerti ✓"
  }
];

let langkahSaatIni = 0;

const bubbleSemar = document.getElementById("semar-bubble");
const teksSemar = document.getElementById("semar-text");
const stepSemar = document.getElementById("semar-step");
const tombolLanjut = document.getElementById("semar-next");
const tombolTutup = document.getElementById("semar-close");
const avatarSemar = document.getElementById("semar-avatar");

const KUNCI_PANDUAN = "pbn_panduan_selesai";

/**
 * Membaca status panduan.
 * Jika penyimpanan browser tidak tersedia, panduan tetap berfungsi.
 */
function bacaStatusPanduan() {
  try {
    return localStorage.getItem(KUNCI_PANDUAN) === "1";
  } catch (error) {
    return false;
  }
}

/**
 * Menyimpan status panduan telah selesai atau ditutup.
 */
function simpanStatusPanduan() {
  try {
    localStorage.setItem(KUNCI_PANDUAN, "1");
  } catch (error) {
    // Panduan tetap dapat digunakan tanpa localStorage.
  }
}

/**
 * Memperbarui status aksesibilitas avatar.
 */
function perbaruiStatusAvatar(terbuka) {
  if (!avatarSemar) return;

  avatarSemar.setAttribute("aria-expanded", String(terbuka));
}

/**
 * Menutup panduan Ki Semar.
 */
function sembunyikanPanduan() {
  if (!bubbleSemar) return;

  bubbleSemar.classList.add("hidden");
  perbaruiStatusAvatar(false);
}

/**
 * Menampilkan panduan Ki Semar.
 */
function tampilkanPanduan() {
  if (!bubbleSemar) return;

  bubbleSemar.classList.remove("hidden");
  perbaruiStatusAvatar(true);

  tampilkanLangkah();
}

/**
 * Menampilkan langkah panduan yang sedang aktif.
 */
function tampilkanLangkah() {
  if (
    !bubbleSemar ||
    !teksSemar ||
    !stepSemar ||
    !tombolLanjut
  ) {
    return;
  }

  // Semua langkah sudah selesai.
  if (langkahSaatIni >= langkahSemar.length) {
    sembunyikanPanduan();
    simpanStatusPanduan();
    langkahSaatIni = 0;
    return;
  }

  const langkah = langkahSemar[langkahSaatIni];

  teksSemar.textContent = langkah.teks;
  tombolLanjut.textContent = langkah.tombol;

  stepSemar.textContent =
    `${langkahSaatIni + 1}/${langkahSemar.length}`;
}

/**
 * Tombol lanjut ke langkah berikutnya.
 */
if (tombolLanjut) {
  tombolLanjut.addEventListener("click", function () {
    langkahSaatIni++;
    tampilkanLangkah();
  });
}

/**
 * Tombol tutup panduan.
 */
if (tombolTutup) {
  tombolTutup.addEventListener("click", function () {
    sembunyikanPanduan();
    simpanStatusPanduan();
  });
}

/**
 * Avatar untuk membuka atau menutup panduan.
 */
if (avatarSemar) {
  // Pastikan atribut aksesibilitas tersedia meskipun
  // atribut tersebut belum ditambahkan di HTML.
  avatarSemar.setAttribute("aria-controls", "semar-bubble");
  avatarSemar.setAttribute(
    "aria-label",
    "Buka atau tutup panduan Ki Semar"
  );
  avatarSemar.setAttribute("aria-expanded", "false");

  avatarSemar.addEventListener("click", function () {
    if (!bubbleSemar) return;

    if (bubbleSemar.classList.contains("hidden")) {
      // Membuka kembali dari langkah pertama.
      langkahSaatIni = 0;
      tampilkanPanduan();
    } else {
      sembunyikanPanduan();
    }
  });
}

/**
 * Inisialisasi panduan saat halaman dibuka.
 * Panduan otomatis tampil jika pengguna belum menyelesaikannya.
 */
if (bubbleSemar) {
  if (bacaStatusPanduan()) {
    sembunyikanPanduan();
  } else {
    langkahSaatIni = 0;
    tampilkanPanduan();
  }
}
