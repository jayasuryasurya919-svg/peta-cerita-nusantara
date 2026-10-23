// ===== Statistik dihitung dari data, jadi selalu sesuai isi data-budaya.js =====
const totalKonten = dataBudaya.length;
const jumlahPulau = new Set(
  dataBudaya.filter(function (d) { return d.pulau; }).map(function (d) { return d.pulau; })
).size;
const jumlahKategori = new Set(dataBudaya.map(function (d) { return d.kategori; })).size;

document.getElementById("stat-konten").dataset.target = totalKonten;
document.getElementById("stat-pulau").dataset.target = jumlahPulau;
document.getElementById("stat-kategori").dataset.target = jumlahKategori;

// Angka naik perlahan saat bagian statistik terlihat
function hitungNaik(elemen) {
  const target = parseInt(elemen.dataset.target, 10);
  const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (kurangiGerak) { elemen.textContent = target; return; }

  const durasi = 1300;
  const mulai = performance.now();

  function langkah(sekarang) {
    const t = Math.min((sekarang - mulai) / durasi, 1);
    const halus = 1 - Math.pow(1 - t, 3);
    elemen.textContent = Math.round(target * halus);
    if (t < 1) requestAnimationFrame(langkah);
  }
  requestAnimationFrame(langkah);
}

const pengamatStatistik = new IntersectionObserver(function (daftar) {
  daftar.forEach(function (entri) {
    if (entri.isIntersecting) {
      entri.target.querySelectorAll(".statistik-angka").forEach(hitungNaik);
      pengamatStatistik.unobserve(entri.target);
    }
  });
}, { threshold: 0.4 });

pengamatStatistik.observe(document.querySelector(".statistik-beranda"));

// ===== Gradien emas untuk ikon (didefinisikan sekali, dipakai semua SVG di halaman) =====
document.body.insertAdjacentHTML("afterbegin",
  '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
  '<linearGradient id="emasGrad" x1="0" y1="0" x2="0" y2="1">' +
  '<stop offset="0" stop-color="#fff0b8"/><stop offset=".55" stop-color="#e8c874"/><stop offset="1" stop-color="#b8862b"/>' +
  "</linearGradient></defs></svg>");

// ===== Kartu kategori =====
const ikonKategori = {
  cerita: '<g transform="translate(0 3)"><path class="g" d="M24 11C19 8 12 8 6 10.5V34c6-2.2 13-1.6 18 1.6Z"/><path class="g" d="M24 11c5-3 12-3 18-.5V34c-6-2.2-13-1.6-18 1.6Z"/><path class="ks" stroke-width="1.5" d="M10 15.5c4-1 8-.6 11 .9M10 20.5c4-1 8-.6 11 .9M10 25.5c4-1 8-.6 11 .9M27 16.4c3-1.5 7-1.9 11-.9M27 21.4c3-1.5 7-1.9 11-.9M27 26.4c3-1.5 7-1.9 11-.9"/><path class="ks" stroke-width="1.6" d="M24 11v24.6"/></g><path class="g" d="M38.5 3.5l1.3 3.4 3.4 1.3-3.4 1.3-1.3 3.4-1.3-3.4-3.4-1.3 3.4-1.3z"/>',
  candi: '<rect class="g" x="5" y="36" width="38" height="6" rx="1.2"/><rect class="g" x="9" y="30" width="30" height="6" rx="1"/><rect class="g" x="13" y="24" width="22" height="6" rx="1"/><path class="g" d="M16 24c0-9 16-9 16 0Z"/><path class="g" d="M24 3.5l2.2 5h-4.4z"/><rect class="g" x="22.6" y="8" width="2.8" height="7"/><g class="k"><rect x="9" y="38" width="3" height="3" rx=".5"/><rect x="15" y="38" width="3" height="3" rx=".5"/><rect x="22.5" y="38" width="3" height="3" rx=".5"/><rect x="30" y="38" width="3" height="3" rx=".5"/><rect x="36" y="38" width="3" height="3" rx=".5"/><rect x="14" y="32" width="2.6" height="2.6" rx=".5"/><rect x="22.7" y="32" width="2.6" height="2.6" rx=".5"/><rect x="31.4" y="32" width="2.6" height="2.6" rx=".5"/></g><path class="ks" stroke-width="1.3" d="M20 22.5c1.5-4 6.5-4 8 0"/>',
  tarian: '<path class="g" d="M20.2 7.2L24 1.8l3.8 5.4Z"/><circle class="g" cx="24" cy="10.5" r="4"/><path class="g" d="M20 16.5c0-1.8 8-1.8 8 0L27.5 28h-7Z"/><path class="g" d="M20.5 28h7l5 15h-17Z"/><path class="gs" stroke-width="2.8" d="M21 18.5c-6 .5-9.5-3-11.5-8"/><path class="gs" stroke-width="2.8" d="M27 18.5c6 2 10 .5 12-5"/><path class="gs" stroke-width="1.5" d="M39 13.5c3.5 3 .5 7 3.5 10.5"/><path class="ks" stroke-width="1.2" d="M24 29l.2 13M21 31l-3 11M27 31l3 11"/>',
  wayang: '<g transform="translate(13.2 .8) scale(.18)"><path class="g" d="M60 4C66 40 112 80 112 150C112 215 90 250 60 256C30 250 8 215 8 150C8 80 54 40 60 4Z"/><path class="k" d="M44 241V200Q44 184 60 184Q76 184 76 200V241Z"/><path class="ks" stroke-width="5" d="M60 52V184"/><path class="ks" stroke-width="5" d="M60 100Q40 92 34 76M60 100Q80 92 86 76M60 130Q38 122 30 104M60 130Q82 122 90 104M60 158Q40 152 32 136M60 158Q80 152 88 136"/><path class="ks" stroke-width="3" opacity=".55" d="M60 22C64 52 98 88 98 150"/></g>',
  keris: '<g transform="rotate(36 24 24)"><path class="g" d="M23.9 3.0L23.9 3.7L23.9 4.4L24.0 5.2L23.9 5.9L23.7 6.6L23.4 7.3L23.0 8.1L22.5 8.8L22.0 9.5L21.4 10.2L20.9 10.9L20.5 11.7L20.2 12.4L20.1 13.1L20.2 13.8L20.5 14.6L20.9 15.3L21.4 16.0L21.9 16.7L22.3 17.4L22.7 18.2L22.9 18.9L22.8 19.6L22.4 20.3L21.9 21.1L21.1 21.8L20.4 22.5L19.7 23.2L19.1 23.9L18.7 24.7L18.6 25.4L18.8 26.1L19.2 26.8L19.7 27.6L20.5 28.3L21.2 29.0L27.6 29.0L26.9 28.3L26.1 27.6L25.6 26.8L25.2 26.1L25.0 25.4L25.1 24.7L25.5 23.9L26.1 23.2L26.8 22.5L27.5 21.8L28.3 21.1L28.8 20.3L29.2 19.6L29.3 18.9L29.1 18.2L28.7 17.4L28.1 16.7L27.3 16.0L26.6 15.3L25.9 14.6L25.4 13.8L25.0 13.1L24.8 12.4L24.8 11.7L25.0 10.9L25.2 10.2L25.5 9.5L25.8 8.8L26.0 8.1L26.1 7.3L26.1 6.6L25.9 5.9L25.7 5.2L25.3 4.4L24.9 3.7L24.3 3.0Z"/><path class="ks" stroke-width=".7" d="M24.9 6.6L24.8 7.3L24.5 8.1L24.2 8.8L23.8 9.5L23.3 10.2L22.9 10.9L22.6 11.7L22.5 12.4L22.5 13.1L22.8 13.8L23.2 14.6L23.7 15.3L24.4 16.0L25.0 16.7L25.5 17.4L25.9 18.2L26.1 18.9L26.0 19.6L25.6 20.3L25.1 21.1L24.3 21.8L23.6 22.5L22.9 23.2L22.3 23.9L21.9 24.7L21.8 25.4L22.0 26.1"/><rect class="g" x="15.5" y="28.6" width="17" height="3.2" rx="1.6"/><path class="g" d="M21.6 31.6h4.8v9.4c0 2.8-4.8 2.8-4.8 0Z"/><circle class="g" cx="24" cy="43.6" r="2.6"/><path class="ks" stroke-width="1" d="M22.3 34.6h3.4M22.3 37.4h3.4"/></g>',
  tombak: '<g transform="rotate(32 24 24)"><path class="g" d="M24 1.5c5.5 6 5.5 13 0 19.5C18.5 14.5 18.5 7.5 24 1.5Z"/><path class="ks" stroke-width="1.1" d="M24 4.5V18.5"/><rect class="g" x="21" y="20.5" width="6" height="3.2" rx="1.2"/><path class="gs" stroke-width="1.6" d="M24 24c-4 3-5.500 7.500-3.500 11M24 24c4 3 5.500 7.500 3.500 11M24 24v12"/><rect class="g" x="22.9" y="23" width="2.2" height="23" rx="1.1"/></g>'
};

const daftarKategori = [
  { kunci: "cerita", nama: "Cerita Rakyat", tujuan: "peta.html", label: "Di peta", deskripsi: "Legenda dan dongeng dari berbagai daerah, lengkap dengan kuis." },
  { kunci: "candi", nama: "Candi", tujuan: "peta.html", label: "Di peta", deskripsi: "Jejak peradaban dan tempat ibadah bersejarah di Nusantara." },
  { kunci: "tarian", nama: "Tarian", tujuan: "peta.html", label: "Di peta", deskripsi: "Gerak, irama, dan makna dari tari-tarian tradisi." },
  { kunci: "wayang", nama: "Wayang", tujuan: "wayang.html", label: "Galeri", deskripsi: "Tokoh Ramayana dan Punakawan, dikelompokkan per golongan." },
  { kunci: "keris", nama: "Keris", tujuan: "keris.html", label: "Galeri", deskripsi: "Dapur, luk, dan makna filosofis bilah keris." },
  { kunci: "tombak", nama: "Tombak", tujuan: "tombak.html", label: "Galeri", deskripsi: "Ragam dapur tombak pusaka dan filosofinya." }
];

const wadahKategori = document.getElementById("kategori-grid");

daftarKategori.forEach(function (k) {
  const jumlah = dataBudaya.filter(function (d) { return d.kategori === k.kunci; }).length;

  const kartu = document.createElement("a");
  kartu.className = "kartu-kategori";
  kartu.href = k.tujuan;
  kartu.innerHTML =
    '<span class="kartu-label">' + k.label + "</span>" +
    '<div class="kartu-ikon"><svg viewBox="0 0 48 48" aria-hidden="true">' + ikonKategori[k.kunci] + "</svg></div>" +
    "<h3>" + k.nama + "</h3>" +
    '<span class="kartu-jumlah">' + jumlah + " konten</span>" +
    '<p class="kartu-deskripsi">' + k.deskripsi + "</p>";
  wadahKategori.appendChild(kartu);
});

// ===== Peta emas di hero + titik lokasi dari data =====
const wadahPeta = document.getElementById("hero-peta");

fetch("assets/peta-indonesia.svg")
  .then(function (res) { return res.text(); })
  .then(function (svg) {
    wadahPeta.insertAdjacentHTML("afterbegin", svg);

    dataBudaya
      .filter(function (d) { return d.koordinat; })
      .forEach(function (d, urutan) {
        const titik = document.createElement("a");
        titik.className = "hero-pin";
        titik.href = "detail.html?id=" + d.id;
        titik.style.left = d.koordinat.x + "%";
        titik.style.top = d.koordinat.y + "%";
        titik.style.setProperty("--tunda", (urutan * 0.3) + "s");
        titik.setAttribute("aria-label", d.judul);

        const nama = document.createElement("span");
        nama.className = "hero-pin-nama";
        nama.textContent = d.judul;
        titik.appendChild(nama);

        wadahPeta.appendChild(titik);
      });
  });