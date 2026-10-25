"use strict";

const BAGIAN_SEMAR = [
  {
    id: "beranda",
    nama: "Beranda",
    href: "index.html",
    penjelasan: "Beranda adalah titik awal untuk mengenal Peta Cerita Nusantara. Gunakan tombol jelajah atau menu atas untuk memilih bagian yang ingin dibuka."
  },
  {
    id: "peta",
    nama: "Peta",
    href: "peta.html",
    penjelasan: "Peta menampilkan cerita rakyat, candi, dan tarian berdasarkan wilayah. Pilih pulau atau gunakan pencarian, lalu klik pin untuk membuka kisah dan kuisnya."
  },
  {
    id: "detail",
    nama: "Detail budaya",
    href: "detail.html",
    penjelasan: "Halaman detail memuat kisah atau penjelasan budaya, informasi daerah, dan kuis bila tersedia. Baca isinya lalu coba jawab kuis di bagian bawah."
  },
  {
    id: "wayang",
    nama: "Galeri Wayang",
    href: "wayang.html",
    penjelasan: "Galeri Wayang berisi tokoh-tokoh pewayangan. Cari nama tokoh atau pilih kelompok untuk menemukan tokoh yang ingin kamu kenali."
  },
  {
    id: "keris",
    nama: "Galeri Keris",
    href: "keris.html",
    penjelasan: "Galeri Keris mengenalkan ragam dapur dan ciri bilahnya. Gunakan pencarian dan kelompok yang tersedia untuk menyaring koleksi."
  },
  {
    id: "tombak",
    nama: "Galeri Tombak",
    href: "tombak.html",
    penjelasan: "Galeri Tombak menjelaskan ragam dapur tombak, ciri bilah, dan makna yang tercantum pada setiap entri. Cari atau saring daftar untuk menjelajahinya."
  },
  {
    id: "tentang",
    nama: "Tentang situs",
    href: "tentang.html",
    penjelasan: "Bagian Tentang menjelaskan tujuan situs, cara menjelajah, sumber data, dan teknologi yang digunakan."
  }
];

const KUNCI_BAGIAN = "pbn_bagian_dikunjungi_v1";

let bagianSaatIni = cariBagianSaatIni();

const bubbleSemar = document.getElementById("semar-bubble");
const teksSemar = document.getElementById("semar-text");
const stepSemar = document.getElementById("semar-step");
const tombolLanjut = document.getElementById("semar-next");
const tombolTutup = document.getElementById("semar-close");
const avatarSemar = document.getElementById("semar-avatar");

function cariBagianSaatIni() {
  const namaFile = window.location.pathname.split("/").pop().toLowerCase();
  const petaHalaman = {
    "": "beranda",
    "index.html": "beranda",
    "peta.html": "peta",
    "detail.html": "detail",
    "wayang.html": "wayang",
    "keris.html": "keris",
    "tombak.html": "tombak",
    "tentang.html": "tentang"
  };
  const id = petaHalaman[namaFile] || "beranda";
  return BAGIAN_SEMAR.find((bagian) => bagian.id === id) || BAGIAN_SEMAR[0];
}

function bacaBagianDikunjungi() {
  try {
    const tersimpan = JSON.parse(localStorage.getItem(KUNCI_BAGIAN) || "[]");
    if (!Array.isArray(tersimpan)) return [];

    const idSah = new Set(BAGIAN_SEMAR.map((bagian) => bagian.id));
    return [...new Set(tersimpan.filter((id) => idSah.has(id)))];
  } catch (error) {
    return [];
  }
}

function simpanBagianDikunjungi(daftar) {
  try {
    localStorage.setItem(KUNCI_BAGIAN, JSON.stringify(daftar));
  } catch (error) {
    // Panduan tetap dapat dipakai saat penyimpanan browser tidak tersedia.
  }
}

function tandaiBagianDikunjungi() {
  const daftar = bacaBagianDikunjungi();
  if (!daftar.includes(bagianSaatIni.id)) {
    daftar.push(bagianSaatIni.id);
    simpanBagianDikunjungi(daftar);
  }
  return daftar;
}

function buatTautanBagian(bagian) {
  if (bagian.id !== "detail") return bagian.href;

  const data = typeof dataLengkap !== "undefined" && Array.isArray(dataLengkap)
    ? dataLengkap
    : [];
  const contoh = data.find((entri) => entri.kategori === "cerita") || data[0];
  const id = contoh ? contoh.id : "malin-kundang";
  return `detail.html?id=${encodeURIComponent(id)}`;
}

function buatPanelJelajah() {
  if (!bubbleSemar || bubbleSemar.querySelector(".semar-explorer")) return;

  const panel = document.createElement("details");
  panel.className = "semar-explorer";
  panel.setAttribute("aria-label", "Bagian situs dan status penjelajahan");

  const judul = document.createElement("summary");
  judul.className = "semar-explorer-title";
  judul.textContent = "Lihat semua bagian";

  const ringkasan = document.createElement("p");
  ringkasan.className = "semar-progress";
  ringkasan.id = "semar-progress";

  const daftar = document.createElement("ul");
  daftar.className = "semar-section-list";
  daftar.id = "semar-section-list";

  panel.append(judul, ringkasan, daftar);

  const kontrol = bubbleSemar.querySelector(".semar-controls");
  if (kontrol) bubbleSemar.insertBefore(panel, kontrol);
  else bubbleSemar.appendChild(panel);
}

function penjelasanBagianAktif() {
  if (bagianSaatIni.id !== "detail") return bagianSaatIni.penjelasan;

  const id = new URLSearchParams(window.location.search).get("id");
  const data = typeof dataLengkap !== "undefined" && Array.isArray(dataLengkap)
    ? dataLengkap
    : [];
  const entri = data.find((item) => item.id === id);
  if (!entri) return bagianSaatIni.penjelasan;

  return `Kamu sedang membaca ${entri.judul} dari ${entri.daerah}. Bagian ini memuat sinopsis, cerita atau penjelasan budaya, dan kuis bila tersedia.`;
}

function buatBarisBagian(bagian, sudahDikunjungi) {
  const item = document.createElement("li");
  item.className = "semar-section-item";

  const tautan = document.createElement("a");
  tautan.className = "semar-section-link";
  tautan.href = buatTautanBagian(bagian);

  if (bagian.id === bagianSaatIni.id) {
    tautan.classList.add("is-current");
    tautan.setAttribute("aria-current", "page");
  }

  const nama = document.createElement("span");
  nama.className = "semar-section-name";
  nama.textContent = bagian.nama;

  const status = document.createElement("span");
  status.className = "semar-section-status";
  if (bagian.id === bagianSaatIni.id) status.textContent = "Di sini";
  else status.textContent = sudahDikunjungi ? "Sudah dibuka" : "Belum dibuka";

  tautan.append(nama, status);
  const keterangan = document.createElement("p");
  keterangan.className = "semar-section-description";
  keterangan.textContent = bagian.penjelasan;

  item.append(tautan, keterangan);
  return item;
}

function perbaruiPanduan() {
  if (!bubbleSemar || !teksSemar) return;

  buatPanelJelajah();

  const dikunjungi = tandaiBagianDikunjungi();
  const belumDikunjungi = BAGIAN_SEMAR.filter(
    (bagian) => !dikunjungi.includes(bagian.id)
  );

  teksSemar.textContent = `Kita sedang di ${bagianSaatIni.nama}. ${penjelasanBagianAktif()}`;

  const ringkasan = document.getElementById("semar-progress");
  if (ringkasan) {
    ringkasan.textContent = belumDikunjungi.length
      ? `${dikunjungi.length} dari ${BAGIAN_SEMAR.length} bagian sudah dibuka. Bagian yang belum dijelajahi ditandai di bawah.`
      : `Hebat, semua ${BAGIAN_SEMAR.length} bagian sudah kamu buka. Kamu bisa menjelajahinya lagi kapan saja.`;
  }

  const judulJelajah = bubbleSemar.querySelector(".semar-explorer-title");
  if (judulJelajah) {
    judulJelajah.textContent = `Jejak penjelajahan · ${dikunjungi.length}/${BAGIAN_SEMAR.length}`;
  }

  const daftar = document.getElementById("semar-section-list");
  if (daftar) {
    daftar.replaceChildren(
      ...BAGIAN_SEMAR.map((bagian) =>
        buatBarisBagian(bagian, dikunjungi.includes(bagian.id))
      )
    );
  }

  if (stepSemar) {
    stepSemar.textContent = `${dikunjungi.length}/${BAGIAN_SEMAR.length} dibuka`;
  }

  if (tombolLanjut) {
    const rekomendasi = belumDikunjungi[0] || BAGIAN_SEMAR.find((bagian) => bagian.id === "peta");
    tombolLanjut.textContent = belumDikunjungi.length
      ? `Arahkan ke ${rekomendasi.nama}`
      : "Jelajahi Peta lagi";
    tombolLanjut.dataset.href = buatTautanBagian(rekomendasi);
  }
}

function sembunyikanPanduan() {
  if (!bubbleSemar) return;
  bubbleSemar.classList.add("hidden");
  if (avatarSemar) avatarSemar.setAttribute("aria-expanded", "false");
}

function tampilkanPanduan() {
  if (!bubbleSemar) return;
  perbaruiPanduan();
  bubbleSemar.classList.remove("hidden");
  if (avatarSemar) avatarSemar.setAttribute("aria-expanded", "true");
}

if (avatarSemar) {
  avatarSemar.setAttribute("aria-controls", "semar-bubble");
  avatarSemar.setAttribute("aria-label", "Buka panduan dan progres Ki Semar");
  avatarSemar.setAttribute("aria-expanded", "false");
  avatarSemar.addEventListener("click", function () {
    if (bubbleSemar && bubbleSemar.classList.contains("hidden")) tampilkanPanduan();
    else sembunyikanPanduan();
  });
}

if (tombolTutup) {
  tombolTutup.setAttribute("aria-label", "Tutup panduan Ki Semar");
  tombolTutup.addEventListener("click", function () {
    sembunyikanPanduan();
  });
}

if (tombolLanjut) {
  tombolLanjut.addEventListener("click", function () {
    const tujuan = tombolLanjut.dataset.href;
    if (tujuan) window.location.href = tujuan;
  });
}

if (bubbleSemar) {
  perbaruiPanduan();
  sembunyikanPanduan();
}

window.addEventListener("storage", function (event) {
  if (event.key === KUNCI_BAGIAN && bubbleSemar && !bubbleSemar.classList.contains("hidden")) {
    perbaruiPanduan();
  }
});
