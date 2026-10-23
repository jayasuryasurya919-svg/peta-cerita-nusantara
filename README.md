# Peta Budaya Nusantara (PBN)

Situs edukatif interaktif untuk mengenal budaya Indonesia: cerita rakyat, candi
dan tarian ditampilkan sebagai pin di **peta interaktif**, sedangkan wayang,
keris, dan tombak ditampilkan sebagai **galeri** karena tidak terikat satu titik
lokasi. Dibuat untuk **2026 International Digital Coding Competition — Web
Development Division**.

🔗 Live demo: *(isi link Netlify/Vercel/GitHub Pages di sini)*

---

## Fitur

- **Peta interaktif berbasis SVG**: peta kepulauan Indonesia dibuat dari data
  geografis publik (lihat *Sumber Aset*), bukan gambar jadi. Pin dibuat otomatis
  dari data, dengan ikon dan warna berbeda untuk cerita rakyat, candi, dan tarian.
- **Filter per pulau dan pencarian real-time** pada peta.
- **Galeri Wayang, Keris, dan Tombak** yang dikelompokkan per golongan
  (misalnya Punakawan, Bangsa Wanara, Dapur Keris Luk 7 dan Luk 9), lengkap
  dengan badge ikon dan warna aksen per golongan.
- **Halaman detail** (`detail.html?id=...`): satu halaman melayani semua konten,
  dengan navigasi sebelumnya/selanjutnya dalam kategori yang sama.
- **Kuis interaktif** dengan penilaian otomatis pada konten yang memiliki soal.
- **Status "sudah dibaca"** tersimpan di `localStorage` browser, tanpa server dan
  tanpa database.
- **Ki Semar**, widget panduan yang muncul otomatis pada kunjungan pertama dan
  bisa dibuka lagi kapan saja.
- **Efek suara bernuansa gamelan** pada pin dan kuis.
- **Animasi dan tampilan**: peta muncul bertahap per pulau, pulsa pada pin, popup
  3D, kartu galeri muncul bertahap, progress bar baca dengan ikon keris, efek
  muncul saat scroll, motif batik tipis di latar, dan scrollbar kustom.
- **Halaman Tentang** dengan statistik konten yang dihitung otomatis dari data.
- Dibangun dengan **HTML, CSS, dan JavaScript murni** tanpa framework dan tanpa
  database server, sesuai ketentuan lomba.

---

## Isi Konten

| Kategori | Jumlah | Tampil di |
|---|---|---|
| Cerita rakyat | 11 | Peta |
| Candi | 2 | Peta |
| Tarian | 2 | Peta |
| Tokoh wayang | 65 | Galeri Wayang |
| Dapur keris | 45 | Galeri Keris |
| Dapur tombak | 15 | Galeri Tombak |

Sebagian item memiliki teks lengkap dan kuis, sisanya berupa kartu sinopsis
singkat yang dapat dilengkapi bertahap tanpa mengubah kode.

---

## Struktur Proyek

```
peta-budaya-nusantara/
├── index.html          # Beranda
├── peta.html           # Peta interaktif
├── wayang.html         # Galeri wayang
├── keris.html          # Galeri keris
├── tombak.html         # Galeri tombak
├── detail.html         # Halaman detail (template, diisi dinamis lewat JS)
├── tentang.html        # Tentang situs dan sumber aset
├── css/
│   ├── style.css       # Variabel warna, navbar, footer, tombol, Ki Semar
│   ├── peta.css        # Peta, pin, filter, popup
│   ├── galeri.css      # Kartu dan pengelompokan galeri
│   ├── cerita.css      # Halaman detail, kuis, progress bar
│   └── tentang.css     # Halaman Tentang
├── js/
│   ├── data-budaya.js  # Seluruh data konten (satu sumber data)
│   ├── peta.js         # Render pin, filter, pencarian, popup
│   ├── galeri.js       # Render galeri dan pengelompokan
│   ├── detail.js       # Halaman detail, kuis, navigasi, progress bar
│   ├── tentang.js      # Statistik konten
│   ├── semar.js        # Widget panduan Ki Semar
│   └── audio.js        # Efek suara
├── assets/
│   └── peta-indonesia.svg
└── README.md
```

---

## Cara Menjalankan

Peta SVG dimuat lewat `fetch()`, sehingga situs **harus dijalankan lewat server
lokal**, bukan dibuka langsung dengan klik dua kali (`file://`).

1. Clone atau unduh repo ini.
2. Jalankan lewat salah satu cara berikut:
   - **VS Code**: pasang ekstensi *Live Server*, klik kanan `index.html`, pilih
     "Open with Live Server".
   - **Python**: `python -m http.server`, lalu buka `http://localhost:8000`.
3. Buka `index.html` di browser.

---

## Menambah Konten Baru

Semua konten berada di `js/data-budaya.js` dalam satu array `dataBudaya`.
Tambahkan satu objek baru, tanpa mengubah HTML.

Konten yang tampil di **peta** (cerita, candi, tarian) wajib punya `pulau` dan
`koordinat`:

```js
{
  id: "nama-unik",
  judul: "Judul",
  daerah: "Nama Provinsi",
  pulau: "jawa",                    // sama persis dengan id grup di SVG dan tab filter
  kategori: "cerita",               // cerita | candi | tarian
  koordinat: { x: 00.0, y: 00.0 },  // posisi pin dalam persen
  sinopsis: "Ringkasan singkat.",
  isi: ["Paragraf 1...", "Paragraf 2..."],   // opsional
  kuis: [{ pertanyaan: "...", pilihan: ["A", "B", "C", "D"], benar: 1 }]  // opsional
}
```

Konten **galeri** (wayang, keris, tombak) tidak memakai `pulau` dan `koordinat`,
tetapi memakai `kelompok` agar tampil terkelompok:

```js
{ id: "nama-unik", judul: "Judul", daerah: "Jawa", kategori: "wayang",
  kelompok: "Punakawan", sinopsis: "Ringkasan singkat." }
```

---

## Sumber Aset dan Konten

- **Peta Indonesia** (`assets/peta-indonesia.svg`): dibuat dari data
  [Natural Earth](https://www.naturalearthdata.com/) (domain publik), disederhanakan
  dan dikelompokkan menjadi tujuh wilayah pulau memakai skrip Python.
- **Font**: Playfair Display, Cinzel, dan Poppins dari Google Fonts.
- **Ikon, pin, dan motif batik**: digambar sendiri dalam bentuk SVG.
- **Efek suara**: memakai berkas di `assets/audio/` bila tersedia. Bila tidak ada,
  bunyi dibuat langsung oleh browser lewat Web Audio API, sehingga tidak ada
  aset suara pihak ketiga yang wajib disertakan. *(Jika memakai sampel dari
  Freesound, cantumkan pembuat dan lisensinya di sini.)*
- **Cerita rakyat, candi, tarian, dan tokoh wayang**: ditulis ulang dengan kata-kata
  sendiri berdasarkan kisah dan pengetahuan budaya yang beredar luas. Daftar
  tokoh wayang disusun dari daftar tokoh Ramayana dan Punakawan.
- **Dapur keris dan tombak**: nama dapur, ciri bilah, dan makna filosofisnya disusun dari ringkasan pakem dapur Jawa.
  *(Isi di sini referensi yang dipakai untuk memverifikasi, misalnya buku atau situs museum.)*

---

## Teknologi

- HTML5, CSS3 (Custom Properties, Flexbox, Grid, CSS Animations)
- JavaScript (ES6+) tanpa framework
- Web Storage API (`localStorage`) tanpa database server
- Web Audio API (cadangan efek suara)
- SVG untuk peta dan ikon

---

## Lisensi

Dibuat untuk keperluan kompetisi. Data peta bersumber dari Natural Earth (domain
publik). Cerita rakyat dan pengetahuan budaya yang digunakan merupakan milik
bersama masyarakat Indonesia.