# Peta Cerita Nusantara (PBN)

Situs edukatif interaktif untuk menjelajahi budaya Indonesia. Cerita rakyat, candi, dan tarian ditampilkan sebagai pin pada peta interaktif; wayang, keris, dan tombak ditampilkan dalam galeri. Proyek ini dikembangkan untuk **2026 International Digital Coding Competition — Web Development Division**.

**Demo langsung:** belum tersedia. Kompetisi meminta URL situs yang sudah di-host serta tautan repositori publik.

---

# Fitur

- Peta interaktif berbasis SVG dengan pin untuk cerita rakyat, candi, dan tarian.
- Filter wilayah pulau dan pencarian untuk membantu menemukan konten pada peta.
- Galeri Wayang, Keris, dan Tombak dengan pengelompokan konten.
- Halaman detail dinamis (`detail.html?id=...`) dengan navigasi ke konten sebelumnya dan berikutnya dalam kategori yang sama.
- Kuis interaktif dengan pemeriksaan jawaban dan skor otomatis pada konten yang menyediakan soal.
- Status baca yang disimpan di "localStorage" browser.
- Ki Semar, widget panduan penggunaan situs.
- Efek suara yang dihasilkan oleh browser melalui Web Audio API; pemutaran bergantung pada dukungan browser dan interaksi pengguna.
- Animasi dan indikator progres membaca pada halaman detail.
- Halaman Tentang dengan statistik yang dihitung dari dataset gabungan.
- Desain responsif dan beberapa dukungan aksesibilitas, termasuk indikator fokus keyboard serta preferensi pengurangan gerakan.

> Catatan: daftar fitur menjelaskan implementasi yang tersedia pada kode. Perilaku akhir tetap perlu diuji pada browser dan perangkat target setelah perubahan atau deployment.


# Isi Konten

Jumlah berikut merupakan isi dataset gabungan yang dimuat dari `js/data-budaya.js`.

| Kategori | Jumlah entri | Tampilan |
|---|---:|---|
| Cerita rakyat | 15 | Peta dan halaman detail |
| Candi | 5 | Peta dan halaman detail |
| Tarian | 8 | Peta dan halaman detail |
| Tokoh wayang | 65 | Galeri Wayang |
| Dapur keris | 45 | Galeri Keris |
| Dapur tombak | 15 | Galeri Tombak |
| Total | 153 | |

Kelengkapan isi tiap entri tidak selalu sama. Sebagian entri memiliki teks cerita dan kuis, sementara sebagian lainnya menggunakan sinopsis singkat.


# Struktur Proyek

peta-cerita-nusantara/
├── index.html
├── peta.html
├── wayang.html
├── keris.html
├── tombak.html
├── detail.html
├── tentang.html
├── css/
│   ├── style.css
│   ├── peta.css
│   ├── galeri.css
│   ├── cerita.css
│   └── tentang.css
├── js/
│   ├── data-budaya.js
│   ├── peta.js
│   ├── galeri.js
│   ├── detail.js
│   ├── tentang.js
│   ├── semar.js
│   └── audio.js
├── assets/
│   ├── logo-peta-cerita.svg
│   └── peta-indonesia.svg
└── README.md
```

---

`js/data-budaya.js` memuat data utama, pelengkapan, dan fungsi penggabungan. Berkas ini dimuat sebelum skrip fitur pada setiap halaman.

## Cara Menjalankan Secara Lokal

Peta SVG dimuat melalui `fetch()`. Karena itu, jalankan proyek melalui server lokal, bukan dengan membuka berkas `index.html` langsung menggunakan alamat `file://`.

### Opsi 1 — VS Code Live Server

1. Buka folder proyek di VS Code.
2. Pasang ekstensi **Live Server** jika belum tersedia.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Browser akan membuka situs melalui alamat lokal.

### Opsi 2 — Python

1. Buka terminal di folder utama proyek.
2. Jalankan:

   ```bash
   python -m http.server 8000
   ```

3. Buka `http://localhost:8000` di browser.

---

## Menambah Konten

Data utama, perbaikan, pelengkapan isi, dan entri baru berada dalam satu berkas, `js/data-budaya.js`. Setelah digabung, array `dataLengkap` digunakan oleh halaman situs.

### Konten peta

Cerita rakyat, candi, dan tarian yang ditampilkan di peta membutuhkan `pulau` dan `koordinat`.

```js
{
  id: "id-unik",
  judul: "Judul konten",
  daerah: "Nama daerah",
  pulau: "jawa",
  kategori: "cerita", // cerita | candi | tarian
  koordinat: { x: 30.0, y: 70.0 },
  sinopsis: "Ringkasan singkat.",
  isi: ["Paragraf pertama.", "Paragraf kedua."],
  kuis: [
    {
      pertanyaan: "Contoh pertanyaan?",
      pilihan: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
      benar: 1
    }
  ]
}
```

`id` harus unik. Nilai `pulau` harus sesuai dengan ID wilayah pada peta SVG dan filter yang digunakan proyek. Koordinat pin menggunakan nilai persentase sesuai sistem koordinat yang diterapkan di kode peta.

### Konten galeri

Konten wayang, keris, dan tombak menggunakan `kelompok` untuk pengelompokan galeri dan tidak membutuhkan koordinat peta.

```js
{
  id: "id-unik",
  judul: "Judul konten",
  daerah: "Nama daerah",
  kategori: "wayang",
  kelompok: "Nama kelompok",
  sinopsis: "Ringkasan singkat."
}
```

Sesuaikan struktur objek dengan kategori dan properti yang dipakai oleh komponen terkait sebelum menambahkan konten baru.

---

## Sumber Aset, Konten, dan Transparansi

- **Peta Indonesia:** berkas `assets/peta-indonesia.svg` dibuat dari data Natural Earth yang disebut sebagai domain publik pada proyek ini: <https://www.naturalearthdata.com/>.
- **Font:** Playfair Display, Cinzel, dan Poppins dimuat melalui Google Fonts, sehingga koneksi internet diperlukan agar font eksternal dapat diambil.
- **Ikon dan pin:** menggunakan SVG di dalam proyek.
- **Efek suara:** menggunakan Web Audio API. Jika aset suara eksternal ditambahkan di masa mendatang, cantumkan sumber dan lisensinya.
- **Konten budaya:** cerita dan keterangan dirangkum atau ditulis ulang berdasarkan kisah dan pengetahuan budaya yang dikenal luas. Untuk penggunaan edukasi atau publikasi, verifikasi informasi sejarah, nama lokal, dan variasi tradisi dengan sumber tepercaya, termasuk sumber budaya daerah atau museum.
- **Penggunaan AI:** Claude (Anthropic) digunakan untuk diskusi arsitektur, penjelasan konsep, pembuatan skrip konversi peta, dan saran debugging. Kode aplikasi final dan konten ditulis oleh peserta. Aturan kompetisi membatasi AI sebagai bantuan belajar atau debugging; penggunaan untuk diskusi arsitektur dan pembuatan skrip konversi peta perlu diklarifikasi kepada panitia sebelum pengumpulan.

---

## Teknologi

- HTML5 dan CSS3
- JavaScript (ES6+) tanpa framework
- SVG untuk peta dan ikon
- Web Storage API (`localStorage`) untuk status baca
- Web Audio API untuk efek suara

Aplikasi tidak memerlukan database server. Status baca tersimpan secara lokal pada browser yang digunakan dan tidak otomatis tersinkronisasi ke perangkat lain.

---

## Pengujian dan Batasan

- Uji peta, pencarian, filter, galeri, kuis, navigasi detail, dan status baca setelah melakukan perubahan.
- Uji tampilan pada beberapa lebar layar dan navigasi keyboard.
- Periksa Console browser dan Network panel saat menjalankan situs melalui server lokal.
- Periksa kembali akurasi konten budaya dan sumber aset sebelum publikasi.
- Pengujian statis tidak menggantikan pengujian langsung pada browser dan perangkat target.

---

## Lisensi

Proyek ini disiapkan untuk keperluan kompetisi. Pastikan hak penggunaan setiap aset eksternal dan atribusi sumber yang digunakan sesuai dengan lisensinya sebelum distribusi atau publikasi.
