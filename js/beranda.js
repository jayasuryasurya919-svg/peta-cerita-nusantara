
"use strict";

/* =========================================================
   PETA CERITA NUSANTARA — BERANDA.JS
   Fitur:
   1. Statistik dinamis dan animasi angka
   2. Gradien emas untuk ikon SVG
   3. Kartu kategori budaya
   4. Peta Indonesia pada hero
   5. Pin lokasi berdasarkan data-budaya.js
   6. Validasi data dan penanganan error
   ========================================================= */


/* =========================================================
   1. UTILITAS
   ========================================================= */

function ambilElemen(id) {
  return document.getElementById(id);
}

function ambilDataBudaya() {
  if (
    typeof dataLengkap !== "undefined" &&
    Array.isArray(dataLengkap)
  ) {
    return dataLengkap;
  }

  console.error(
    "[Beranda] Data budaya tidak ditemukan. " +
    "Pastikan data-budaya.js dimuat sebelum beranda.js."
  );

  return [];
}

function buatElemen(tag, className, teks) {
  const elemen = document.createElement(tag);

  if (className) {
    elemen.className = className;
  }

  if (teks !== undefined && teks !== null) {
    elemen.textContent = String(teks);
  }

  return elemen;
}

function gerakanDikurangi() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}


/* =========================================================
   2. STATISTIK BERANDA
   ========================================================= */

function siapkanStatistik(data) {
  const elemenKonten = ambilElemen("stat-konten");
  const elemenPulau = ambilElemen("stat-pulau");
  const elemenKategori = ambilElemen("stat-kategori");

  // Jika elemen statistik tidak ada, hentikan bagian ini saja.
  if (!elemenKonten || !elemenPulau || !elemenKategori) {
    console.warn(
      "[Beranda] Sebagian elemen statistik tidak ditemukan."
    );
    return;
  }

  const totalKonten = data.length;

  const jumlahPulau = new Set(
    data
      .map(function (item) {
        return item && item.pulau
          ? String(item.pulau).trim()
          : "";
      })
      .filter(Boolean)
  ).size;

  const jumlahKategori = new Set(
    data
      .map(function (item) {
        return item && item.kategori
          ? String(item.kategori).trim()
          : "";
      })
      .filter(Boolean)
  ).size;

  elemenKonten.dataset.target = String(totalKonten);
  elemenPulau.dataset.target = String(jumlahPulau);
  elemenKategori.dataset.target = String(jumlahKategori);

  // Nilai awal agar statistik tetap terbaca sebelum animasi.
  [elemenKonten, elemenPulau, elemenKategori].forEach(
    function (elemen) {
      elemen.textContent = "0";
    }
  );

  const bagianStatistik = document.querySelector(
    ".statistik-beranda"
  );

  if (!bagianStatistik) {
    // Tetap tampilkan angka jika pembungkus statistik tidak ada.
    [elemenKonten, elemenPulau, elemenKategori].forEach(
      function (elemen) {
        elemen.textContent = elemen.dataset.target;
      }
    );
    return;
  }

  function hitungNaik(elemen) {
    const target = Number.parseInt(
      elemen.dataset.target || "0",
      10
    );

    if (!Number.isFinite(target) || target < 0) {
      elemen.textContent = "0";
      return;
    }

    if (gerakanDikurangi()) {
      elemen.textContent = String(target);
      return;
    }

    const durasi = 1300;
    const mulai = performance.now();

    function langkah(sekarang) {
      const progres = Math.min(
        (sekarang - mulai) / durasi,
        1
      );

      // Efek easing agar animasi terasa lebih halus.
      const halus = 1 - Math.pow(1 - progres, 3);

      elemen.textContent = String(
        Math.round(target * halus)
      );

      if (progres < 1) {
        requestAnimationFrame(langkah);
      }
    }

    requestAnimationFrame(langkah);
  }

  const angkaStatistik = [
    elemenKonten,
    elemenPulau,
    elemenKategori
  ];

  // Fallback jika browser tidak mendukung IntersectionObserver.
  if (!("IntersectionObserver" in window)) {
    angkaStatistik.forEach(hitungNaik);
    return;
  }

  const pengamatStatistik = new IntersectionObserver(
    function (daftar) {
      daftar.forEach(function (entri) {
        if (entri.isIntersecting) {
          angkaStatistik.forEach(hitungNaik);

          pengamatStatistik.unobserve(
            entri.target
          );
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  pengamatStatistik.observe(bagianStatistik);
}


/* =========================================================
   3. GRADIEN EMAS UNTUK IKON SVG
   ========================================================= */

function siapkanGradienEmas() {
  const NS = "http://www.w3.org/2000/svg";

  // Hindari membuat gradien berulang jika sudah tersedia.
  if (document.getElementById("emasGrad")) {
    return;
  }

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.position = "absolute";
  svg.style.overflow = "hidden";

  const defs = document.createElementNS(NS, "defs");
  const gradient = document.createElementNS(
    NS,
    "linearGradient"
  );

  gradient.setAttribute("id", "emasGrad");
  gradient.setAttribute("x1", "0");
  gradient.setAttribute("y1", "0");
  gradient.setAttribute("x2", "0");
  gradient.setAttribute("y2", "1");

  const daftarWarna = [
    {
      offset: "0",
      warna: "#fff0b8"
    },
    {
      offset: ".55",
      warna: "#e8c874"
    },
    {
      offset: "1",
      warna: "#b8862b"
    }
  ];

  daftarWarna.forEach(function (item) {
    const stop = document.createElementNS(NS, "stop");

    stop.setAttribute("offset", item.offset);
    stop.setAttribute("stop-color", item.warna);

    gradient.appendChild(stop);
  });

  defs.appendChild(gradient);
  svg.appendChild(defs);

  document.body.insertBefore(
    svg,
    document.body.firstChild
  );
}


/* =========================================================
   4. IKON KATEGORI
   ========================================================= */

// Ikon dibuat sebagai SVG statis.
// Jangan memasukkan teks atau data pengguna ke dalam string SVG ini.

const ikonKategori = {
  cerita: `
    <g transform="translate(0 3)">
      <path class="g"
        d="M24 11C19 8 12 8 6 10.5V34c6-2.2 13-1.6 18 1.6Z"/>
      <path class="g"
        d="M24 11c5-3 12-3 18-.5V34c-6-2.2-13-1.6-18 1.6Z"/>
      <path class="ks" stroke-width="1.5"
        d="M10 15.5c4-1 8-.6 11 .9
           M10 20.5c4-1 8-.6 11 .9
           M10 25.5c4-1 8-.6 11 .9
           M27 16.4c3-1.5 7-1.9 11-.9
           M27 21.4c3-1.5 7-1.9 11-.9
           M27 26.4c3-1.5 7-1.9 11-.9"/>
      <path class="ks" stroke-width="1.6"
        d="M24 11v24.6"/>
    </g>
    <path class="g"
      d="M38.5 3.5l1.3 3.4 3.4 1.3-3.4 1.3-1.3 3.4-1.3-3.4-3.4-1.3 3.4-1.3z"/>
  `,

  candi: `
    <rect class="g" x="5" y="36" width="38" height="6" rx="1.2"/>
    <rect class="g" x="9" y="30" width="30" height="6" rx="1"/>
    <rect class="g" x="13" y="24" width="22" height="6" rx="1"/>
    <path class="g" d="M16 24c0-9 16-9 16 0Z"/>
    <path class="g" d="M24 3.5l2.2 5h-4.4z"/>
    <rect class="g" x="22.6" y="8" width="2.8" height="7"/>
    <g class="k">
      <rect x="9" y="38" width="3" height="3" rx=".5"/>
      <rect x="15" y="38" width="3" height="3" rx=".5"/>
      <rect x="22.5" y="38" width="3" height="3" rx=".5"/>
      <rect x="30" y="38" width="3" height="3" rx=".5"/>
      <rect x="36" y="38" width="3" height="3" rx=".5"/>
      <rect x="14" y="32" width="2.6" height="2.6" rx=".5"/>
      <rect x="22.7" y="32" width="2.6" height="2.6" rx=".5"/>
      <rect x="31.4" y="32" width="2.6" height="2.6" rx=".5"/>
    </g>
    <path class="ks" stroke-width="1.3"
      d="M20 22.5c1.5-4 6.5-4 8 0"/>
  `,

  tarian: `
    <path class="g" d="M20.2 7.2L24 1.8l3.8 5.4Z"/>
    <circle class="g" cx="24" cy="10.5" r="4"/>
    <path class="g"
      d="M20 16.5c0-1.8 8-1.8 8 0L27.5 28h-7Z"/>
    <path class="g" d="M20.5 28h7l5 15h-17Z"/>
    <path class="gs" stroke-width="2.8"
      d="M21 18.5c-6 .5-9.5-3-11.5-8"/>
    <path class="gs" stroke-width="2.8"
      d="M27 18.5c6 2 10 .5 12-5"/>
    <path class="gs" stroke-width="1.5"
      d="M39 13.5c3.5 3 .5 7 3.5 10.5"/>
    <path class="ks" stroke-width="1.2"
      d="M24 29l.2 13M21 31l-3 11M27 31l3 11"/>
  `,

  wayang: `
    <g transform="translate(13.2 .8) scale(.18)">
      <path class="g"
        d="M60 4C66 40 112 80 112 150
           C112 215 90 250 60 256
           C30 250 8 215 8 150
           C8 80 54 40 60 4Z"/>
      <path class="k"
        d="M44 241V200Q44 184 60 184Q76 184 76 200V241Z"/>
      <path class="ks" stroke-width="5"
        d="M60 52V184
           M60 100Q40 92 34 76
           M60 100Q80 92 86 76
           M60 130Q38 122 30 104
           M60 130Q82 122 90 104
           M60 158Q40 152 32 136
           M60 158Q80 152 88 136"/>
      <path class="ks" stroke-width="3" opacity=".55"
        d="M60 22C64 52 98 88 98 150"/>
    </g>
  `,

  keris: `
    <g transform="rotate(35 24 24)">
      <path class="g"
        d="M21 5
           Q24 1 27 5
           L26 10
           Q31 13 27 17
           L29 22
           L25 27
           L27 32
           L24 42
           L21 32
           L23 27
           L19 22
           L21 17
           Q17 13 22 10Z"/>
      <path class="ks" stroke-width="1.5"
        d="M24 7L24 38"/>
      <path class="g"
        d="M17 12Q24 15 31 12L30 15Q24 18 18 15Z"/>
      <path class="k"
        d="M21 40L27 40L28 44L20 44Z"/>
    </g>
  `,

  tombak: `
    <g transform="rotate(32 24 24)">
      <path class="g"
        d="M24 2
           Q29 10 28 17
           L25 22
           L25 39
           L23 39
           L23 22
           L20 17
           Q19 10 24 2Z"/>
      <path class="ks" stroke-width="1.4"
        d="M24 5L24 21"/>
      <path class="g"
        d="M20 38L28 38L28 41L20 41Z"/>
      <path class="k"
        d="M21 41L27 41L27 46L21 46Z"/>
    </g>
  `
};


/* =========================================================
   5. DAFTAR KATEGORI
   ========================================================= */

const daftarKategori = [
  {
    kunci: "cerita",
    nama: "Cerita Rakyat",
    tujuan: "peta.html",
    label: "Di peta",
    deskripsi:
      "Legenda dan dongeng dari berbagai daerah, lengkap dengan kuis."
  },
  {
    kunci: "candi",
    nama: "Candi",
    tujuan: "peta.html",
    label: "Di peta",
    deskripsi:
      "Jejak peradaban dan tempat ibadah bersejarah di Nusantara."
  },
  {
    kunci: "tarian",
    nama: "Tarian",
    tujuan: "peta.html",
    label: "Di peta",
    deskripsi:
      "Gerak, irama, dan makna dari tari-tarian tradisi."
  },
  {
    kunci: "wayang",
    nama: "Wayang",
    tujuan: "wayang.html",
    label: "Galeri",
    deskripsi:
      "Tokoh Ramayana dan Punakawan, dikelompokkan per golongan."
  },
  {
    kunci: "keris",
    nama: "Keris",
    tujuan: "keris.html",
    label: "Galeri",
    deskripsi:
      "Dapur, luk, dan makna filosofis bilah keris."
  },
  {
    kunci: "tombak",
    nama: "Tombak",
    tujuan: "tombak.html",
    label: "Galeri",
    deskripsi:
      "Ragam dapur tombak pusaka dan filosofinya."
  }
];


/* =========================================================
   6. MEMBUAT KARTU KATEGORI
   ========================================================= */

function buatKartuKategori(kategori, data) {
  const jumlah = data.filter(function (item) {
    return item && item.kategori === kategori.kunci;
  }).length;

  const kartu = buatElemen(
    "a",
    "kartu-kategori"
  );

  kartu.href = kategori.tujuan;

  const label = buatElemen(
    "span",
    "kartu-label",
    kategori.label
  );

  const wadahIkon = buatElemen(
    "div",
    "kartu-ikon"
  );

  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svg.setAttribute("viewBox", "0 0 48 48");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  /*
   * Konten ikon berasal dari konstanta SVG statis di atas,
   * bukan dari data pengguna atau sumber eksternal.
   */
  svg.innerHTML =
    ikonKategori[kategori.kunci] || "";

  wadahIkon.appendChild(svg);

  const judul = buatElemen(
    "h3",
    "",
    kategori.nama
  );

  const jumlahKonten = buatElemen(
    "span",
    "kartu-jumlah",
    jumlah + " konten"
  );

  const deskripsi = buatElemen(
    "p",
    "kartu-deskripsi",
    kategori.deskripsi
  );

  kartu.append(
    label,
    wadahIkon,
    judul,
    jumlahKonten,
    deskripsi
  );

  return kartu;
}

function siapkanKartuKategori(data) {
  const wadah = ambilElemen("kategori-grid");

  if (!wadah) {
    console.warn(
      '[Beranda] Elemen dengan ID "kategori-grid" tidak ditemukan.'
    );
    return;
  }

  // Kosongkan hanya wadah kategori, bukan bagian halaman lain.
  wadah.replaceChildren();

  const fragmen = document.createDocumentFragment();

  daftarKategori.forEach(function (kategori) {
    fragmen.appendChild(
      buatKartuKategori(kategori, data)
    );
  });

  wadah.appendChild(fragmen);
}


/* =========================================================
   7. MEMUAT DAN MEMVALIDASI SVG PETA INDONESIA
   ========================================================= */


function validasiSvgPeta(svg) {
  const NS = "http://www.w3.org/2000/svg";

  if (
    !svg ||
    svg.namespaceURI !== NS ||
    svg.localName.toLowerCase() !== "svg"
  ) {
    throw new Error("Berkas yang dimuat bukan SVG yang valid.");
  }

  // Hapus elemen aktif atau elemen yang tidak diperlukan
  // untuk ilustrasi peta statis.
  svg.querySelectorAll(
    "script, foreignObject, iframe, object, embed"
  ).forEach(function (elemen) {
    elemen.remove();
  });

  // Periksa seluruh elemen, termasuk elemen SVG utama.
  const semuaElemen = [
    svg,
    ...svg.querySelectorAll("*")
  ];

  semuaElemen.forEach(function (elemen) {
    Array.from(elemen.attributes).forEach(
      function (atribut) {
        const nama = atribut.name.toLowerCase();
        const nilai = atribut.value.trim();

        // Hapus event handler seperti onclick dan onload.
        if (nama.startsWith("on")) {
          elemen.removeAttribute(atribut.name);
          return;
        }

        // Hapus referensi ke sumber eksternal.
        if (nama === "href" || nama === "xlink:href") {
          if (
            nilai &&
            !nilai.startsWith("#") &&
            !nilai.startsWith("data:image/")
          ) {
            elemen.removeAttribute(atribut.name);
          }

          return;
        }

        // Hapus style inline yang memanggil URL eksternal.
        if (
          nama === "style" &&
          /url\s*\(/i.test(nilai) &&
          !/url\s*\(\s*['"]?\s*#/i.test(nilai)
        ) {
          elemen.removeAttribute(atribut.name);
        }
      }
    );
  });

  return svg;
}



/* =========================================================
   8. MENAMPILKAN PESAN ERROR PETA
   ========================================================= */

function tampilkanPesanPeta(wadah, pesan) {
  if (!wadah) {
    return;
  }

  const pesanLama = wadah.querySelector(
    ".hero-peta-error"
  );

  if (pesanLama) {
    pesanLama.remove();
  }

  const elemenPesan = buatElemen(
    "p",
    "hero-peta-error",
    pesan
  );

  elemenPesan.setAttribute("role", "status");
  elemenPesan.setAttribute("aria-live", "polite");

  wadah.appendChild(elemenPesan);
}


/* =========================================================
   9. MEMBUAT PIN PADA PETA HERO
   ========================================================= */

function buatPinPeta(item, urutan) {
  if (
    !item ||
    item.id === undefined ||
    item.id === null ||
    !item.koordinat
  ) {
    return null;
  }

  const x = Number(item.koordinat.x);
  const y = Number(item.koordinat.y);

  // Pastikan koordinat adalah angka dalam rentang 0–100%.
  if (
    !Number.isFinite(x) ||
    !Number.isFinite(y) ||
    x < 0 ||
    x > 100 ||
    y < 0 ||
    y > 100
  ) {
    console.warn(
      "[Beranda] Koordinat tidak valid untuk konten:",
      item.id
    );
    return null;
  }

  const pin = buatElemen(
    "a",
    "hero-pin"
  );

  pin.href =
    "detail.html?id=" +
    encodeURIComponent(String(item.id));

  pin.style.left = x + "%";
  pin.style.top = y + "%";

  // Variabel ini dipakai CSS untuk mengatur jeda animasi.
  pin.style.setProperty(
    "--tunda",
    (urutan * 0.3) + "s"
  );

  const judul = String(
    item.judul || "Lihat cerita budaya"
  );

  pin.setAttribute("aria-label", judul);
  pin.setAttribute("title", judul);

  const nama = buatElemen(
    "span",
    "hero-pin-nama",
    judul
  );

  pin.appendChild(nama);

  return pin;
}


/* =========================================================
   10. MEMUAT PETA DAN MEMASANG PIN
   ========================================================= */

async function siapkanPetaHero(data) {
  const wadah = ambilElemen("hero-peta");

  if (!wadah) {
    console.warn(
      '[Beranda] Elemen dengan ID "hero-peta" tidak ditemukan.'
    );
    return;
  }

  try {
    const respons = await fetch(
      "assets/peta-indonesia.svg",
      {
        method: "GET",
        credentials: "same-origin"
      }
    );

    if (!respons.ok) {
      throw new Error(
        "Gagal memuat SVG. Status HTTP: " +
        respons.status
      );
    }

    const teksSvg = await respons.text();

    if (!teksSvg.trim()) {
      throw new Error("Berkas SVG kosong.");
    }

    const parser = new DOMParser();

    const dokumenSvg = parser.parseFromString(
      teksSvg,
      "image/svg+xml"
    );

    // Parser dapat menghasilkan elemen parsererror jika SVG rusak.
    if (
      dokumenSvg.querySelector("parsererror")
    ) {
      throw new Error("Format SVG tidak valid.");
    }

    const svgAsli = dokumenSvg.documentElement;

    validasiSvgPeta(svgAsli);

    // Salin SVG yang telah diperiksa ke halaman.
    const svgSalinan = document.importNode(
      svgAsli,
      true
    );

    svgSalinan.setAttribute(
      "aria-hidden",
      "true"
    );

    svgSalinan.setAttribute(
      "focusable",
      "false"
    );

    // Pastikan SVG tidak menutupi pin yang dapat diklik.
    if (!svgSalinan.getAttribute("class")) {
      svgSalinan.setAttribute(
        "class",
        "hero-peta-svg"
      );
    }

    wadah.prepend(svgSalinan);

    const fragmenPin = document.createDocumentFragment();

    const dataBerkoordinat = data.filter(
      function (item) {
        return item && item.koordinat;
      }
    );

    let jumlahPin = 0;

    dataBerkoordinat.forEach(function (item, urutan) {
      const pin = buatPinPeta(item, urutan);

      if (pin) {
        fragmenPin.appendChild(pin);
        jumlahPin += 1;
      }
    });

    wadah.appendChild(fragmenPin);

    if (jumlahPin === 0) {
      tampilkanPesanPeta(
        wadah,
        "Lokasi budaya belum tersedia. Silakan jelajahi galeri budaya."
      );
    }
  } catch (error) {
    console.error(
      "[Beranda] Peta gagal dimuat:",
      error
    );

    tampilkanPesanPeta(
      wadah,
      "Peta belum dapat dimuat. Kamu tetap bisa menjelajahi cerita budaya melalui menu peta dan galeri."
    );
  }
}


/* =========================================================
   11. INISIALISASI BERANDA
   ========================================================= */

function inisialisasiBeranda() {
  const data = ambilDataBudaya();

  siapkanGradienEmas();
  siapkanStatistik(data);
  siapkanKartuKategori(data);

  // Fungsi ini async dan memiliki penanganan error sendiri.
  siapkanPetaHero(data);
}


/* =========================================================
   12. MENJALANKAN SCRIPT
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    inisialisasiBeranda,
    { once: true }
  );
} else {
  inisialisasiBeranda();
}
