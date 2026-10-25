// ===================== Elemen halaman =====================
const panggung = document.getElementById("panggung");
const kamera = document.getElementById("kamera");
const wadahSvg = document.getElementById("peta-svg");
const wadahMarker = document.getElementById("marker-container");
const tipPulau = document.getElementById("tip-pulau");
const petunjuk = document.getElementById("petunjuk");
const infoKosong = document.getElementById("info-kosong");
const inputCari = document.getElementById("cari");
const wadahChip = document.getElementById("chip-kategori");
const panel = document.getElementById("panel");
const panelEyebrow = document.getElementById("panel-eyebrow");
const panelJudul = document.getElementById("panel-judul");
const panelIsi = document.getElementById("panel-isi");
const infoProgres = document.getElementById("peta-progres");
const progresIsi = document.getElementById("progres-isi");
const statusPeta = document.getElementById("status-peta");
const infoZoom = document.getElementById("zoom-level");
const daftarTab = document.querySelectorAll(".tab");

// ===================== Data & status =====================
const LEBAR_SVG = 1920;
const TINGGI_SVG = 744;
const Z_MIN = 1;
const Z_MAX = 8;

const labelKategori = { cerita: "Cerita Rakyat", candi: "Candi", tarian: "Tarian" };
const namaPulau = {};
daftarTab.forEach(function (t) { namaPulau[t.dataset.pulau] = t.textContent.trim(); });

// Hanya konten yang punya koordinat yang tampil di peta (wayang, keris, tombak ada di galeri)
const semuaItem = dataLengkap.filter(function (d) { return d.koordinat; });

let pulauAktif = "semua";
let kataKunci = "";
let itemTerpilih = null;
let hasilSaatIni = [];
const kategoriAktif = new Set(Object.keys(labelKategori));
let svgSiap = false;

// Keadaan kamera: z = skala, (px, py) = posisi pojok kiri atas peta di dalam panggung
let lebar = 0, tinggi = 0, pw = 0, ph = 0;
let z = 1, px = 0, py = 0;
let zoomMarkerSaatRender = 1;
let pewaktuRenderPin = null;

// ===================== Pin SVG (digambar sendiri) =====================
const bentukPin = '<path class="pin-bentuk" d="M18 1C8.6 1 1 8.5 1 17.8 1 30 18 45 18 45S35 30 35 17.8C35 8.5 27.4 1 18 1Z"/>';

const ikonPin = {
  cerita:
    '<g transform="translate(9,8)" fill="#fdf6e3">' +
      '<path d="M9 2.3C7.2 1 4.6 0.6 2.6 1.4V13c2-0.8 4.6-0.4 6.4 0.9V2.3Z"/>' +
      '<path d="M9 2.3C10.8 1 13.4 0.6 15.4 1.4V13c-2-0.8-4.6-0.4-6.4 0.9V2.3Z"/>' +
    "</g>",
  candi:
    '<g transform="translate(9,8)" fill="#fdf6e3">' +
      '<polygon points="9,0 15,6 3,6"/>' +
      '<rect x="4" y="6" width="10" height="6"/>' +
      '<rect x="1.5" y="12" width="15" height="2.4"/>' +
    "</g>",
  tarian:
    '<g transform="translate(9,7)" fill="none" stroke="#fdf6e3" stroke-width="1.8" stroke-linecap="round">' +
      '<circle cx="9" cy="2.2" r="1.8" fill="#fdf6e3" stroke="none"/>' +
      '<path d="M9 4.5V11"/><path d="M9 11L5 16"/><path d="M9 11L14 14"/>' +
      '<path d="M9 6L4 3.5"/><path d="M9 6L15 3"/>' +
    "</g>"
};

function buatPinSvg(kategori) {
  return '<svg viewBox="0 0 36 46" aria-hidden="true">' + bentukPin + (ikonPin[kategori] || ikonPin.cerita) + "</svg>";
}

// ===================== Penyimpanan status baca =====================
function ambilDaftarDibaca() {
  try {
    const data = JSON.parse(localStorage.getItem("pbn_dibaca"));
    return Array.isArray(data)
      ? data.filter(function (id) { return typeof id === "string"; })
      : [];
  } catch (e) {
    return [];
  }
}

// ===================== Kamera: zoom, geser, terbang =====================
function batas(nilai, kecil, besar) {
  return Math.min(besar, Math.max(kecil, nilai));
}

function ukur() {
  lebar = panggung.clientWidth;
  pw = lebar;
  ph = lebar * TINGGI_SVG / LEBAR_SVG;

  const sempit = window.innerWidth < 760;
  const atas = panggung.getBoundingClientRect().top + window.scrollY;
  tinggi = sempit
    ? Math.max(ph + 130, 340)
    : batas(window.innerHeight - atas - 16, ph + 70, 640);

  panggung.style.height = tinggi + "px";
  kamera.style.width = pw + "px";
  kamera.style.height = ph + "px";
  panel.style.height = window.innerWidth >= 960 ? tinggi + "px" : "";
}

function jepit() {
  const lw = pw * z;
  const lh = ph * z;
  px = lw >= lebar ? batas(px, lebar - lw, 0) : (lebar - lw) / 2;
  py = lh >= tinggi ? batas(py, tinggi - lh, 0) : (tinggi - lh) / 2;
}

function terapkan() {
  kamera.style.transform = "translate(" + px + "px," + py + "px) scale(" + z + ")";
  kamera.style.setProperty("--zoom", z);
  infoZoom.textContent = Math.round(z * 100) + "%";

  if (hasilSaatIni.length && Math.abs(z - zoomMarkerSaatRender) > 0.08) {
    clearTimeout(pewaktuRenderPin);
    pewaktuRenderPin = setTimeout(renderPin, 110);
  }
}

let pewaktuTerbang = null;

function aturKamera(zBaru, pxBaru, pyBaru, animasi) {
  z = batas(zBaru, Z_MIN, Z_MAX);
  px = pxBaru;
  py = pyBaru;
  jepit();

  clearTimeout(pewaktuTerbang);
  if (animasi) {
    kamera.classList.add("terbang");
    pewaktuTerbang = setTimeout(function () { kamera.classList.remove("terbang"); }, 800);
  } else {
    kamera.classList.remove("terbang");
  }
  terapkan();
}

function zoomDi(cx, cy, faktor, animasi) {
  const zBaru = batas(z * faktor, Z_MIN, Z_MAX);
  const rasio = zBaru / z;
  aturKamera(zBaru, cx - (cx - px) * rasio, cy - (cy - py) * rasio, animasi);
}

function lihatSemua(animasi) {
  aturKamera(1, 0, (tinggi - ph) / 2, animasi);
}

// Terbang ke sebuah kotak (satuan koordinat SVG 1920 x 744)
function terbangKeKotak(bx, by, bw, bh, animasi, zMaks) {
  const s = pw / LEBAR_SVG;
  const cx = (bx + bw / 2) * s;
  const cy = (by + bh / 2) * s;
  const zTarget = batas(Math.min(lebar / (bw * s), tinggi / (bh * s)) * 0.72, 1, zMaks || 6);
  aturKamera(zTarget, lebar / 2 - cx * zTarget, tinggi / 2 - cy * zTarget, animasi);
}

// Terbang ke satu titik (persen dari lebar/tinggi peta)
function terbangKeTitik(item, zTarget, animasi) {
  const wx = item.koordinat.x / 100 * pw;
  const wy = item.koordinat.y / 100 * ph;
  aturKamera(zTarget, lebar / 2 - wx * zTarget, tinggi / 2 - wy * zTarget, animasi !== false);
}

function fokusKelompok(items) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  items.forEach(function (item) {
    const x = item.koordinat.x / 100 * LEBAR_SVG;
    const y = item.koordinat.y / 100 * TINGGI_SVG;
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  });
  const ruang = 30;
  terbangKeKotak(minX - ruang, minY - ruang, Math.max(maxX - minX, 24) + ruang * 2, Math.max(maxY - minY, 24) + ruang * 2, true, 6.5);
}

function terbangKeHasil(hasil) {
  if (!svgSiap || hasil.length === 0) return;
  if (hasil.length === 1) { terbangKeTitik(hasil[0], 4, true); return; }

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  hasil.forEach(function (d) {
    const x = d.koordinat.x / 100 * LEBAR_SVG;
    const y = d.koordinat.y / 100 * TINGGI_SVG;
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  });
  const sisi = 70;
  terbangKeKotak(minX - sisi, minY - sisi, (maxX - minX) + sisi * 2, (maxY - minY) + sisi * 2, true, 5);
}

// Kembalikan kamera ke fokus yang sedang aktif (semua / satu pulau / satu pin)
function fokusKamera(animasi) {
  if (!svgSiap) return;
  if (itemTerpilih) {
    terbangKeTitik(itemTerpilih, Math.max(z, 3.6), animasi);
  } else if (pulauAktif === "semua") {
    lihatSemua(animasi);
  } else {
    const g = wadahSvg.querySelector("#" + pulauAktif);
    if (g) {
      const b = g.getBBox();
      terbangKeKotak(b.x, b.y, b.width, b.height, animasi);
    }
  }
}

// ===================== Filter, hasil, dan tampilan =====================
function cocokPulauDanKata(item) {
  if (pulauAktif !== "semua" && item.pulau !== pulauAktif) return false;
  if (kataKunci) {
    const teks = (item.judul + " " + item.daerah + " " + labelKategori[item.kategori]).toLowerCase();
    if (!teks.includes(kataKunci)) return false;
  }
  return true;
}

function hitungHasil() {
  return semuaItem.filter(function (item) {
    return kategoriAktif.has(item.kategori) && cocokPulauDanKata(item);
  });
}

function sorotPulau() {
  document.querySelectorAll(".pulau").forEach(function (g) {
    g.classList.toggle("redup", pulauAktif !== "semua" && g.id !== pulauAktif);
    g.classList.toggle("fokus", pulauAktif !== "semua" && g.id === pulauAktif);
    g.setAttribute("aria-pressed", g.id === pulauAktif ? "true" : "false");
  });
}

function perbaruiProgres(dibaca) {
  const sudah = semuaItem.filter(function (d) { return dibaca.includes(d.id); }).length;
  infoProgres.textContent = "Sudah dibaca: " + sudah + " dari " + semuaItem.length + " lokasi";
  progresIsi.style.width = (semuaItem.length ? (sudah / semuaItem.length) * 100 : 0) + "%";
}

function perbaruiChip() {
  const hitung = {};
  semuaItem.filter(cocokPulauDanKata).forEach(function (d) {
    hitung[d.kategori] = (hitung[d.kategori] || 0) + 1;
  });
  wadahChip.querySelectorAll(".chip").forEach(function (chip) {
    chip.querySelector(".chip-jumlah").textContent = hitung[chip.dataset.kategori] || 0;
    chip.classList.toggle("aktif", kategoriAktif.has(chip.dataset.kategori));
    chip.setAttribute("aria-pressed", kategoriAktif.has(chip.dataset.kategori));
  });
}

function perbaruiPin() {
  wadahMarker.querySelectorAll(".marker").forEach(function (pin) {
    pin.classList.remove("sorot");
    pin.classList.toggle("terpilih", !!itemTerpilih && pin.dataset.id === itemTerpilih.id);
  });
}

function sorotPin(id, nyala) {
  const pin = wadahMarker.querySelector('.marker[data-id="' + id + '"]');
  if (pin) pin.classList.toggle("sorot", nyala);
}

function buatElemen(tag, kelas, teks) {
  const e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks !== undefined) e.textContent = teks;
  return e;
}

function kelompokkanPin(items) {
  const kelompok = [];
  const jarakMaks = 42 / z;

  items.forEach(function (item) {
    const titik = {
      x: item.koordinat.x / 100 * pw,
      y: item.koordinat.y / 100 * ph
    };
    let terdekat = null;
    let jarakTerdekat = jarakMaks;

    kelompok.forEach(function (grup) {
      if (grup.items.length === 1 && itemTerpilih && grup.items[0].id === itemTerpilih.id) return;
      const jarak = Math.hypot(titik.x - grup.x, titik.y - grup.y);
      if (jarak < jarakTerdekat) {
        terdekat = grup;
        jarakTerdekat = jarak;
      }
    });

    if (!terdekat) {
      kelompok.push({ items: [item], x: titik.x, y: titik.y });
      return;
    }

    terdekat.items.push(item);
    terdekat.x += (titik.x - terdekat.x) / terdekat.items.length;
    terdekat.y += (titik.y - terdekat.y) / terdekat.items.length;
  });

  return kelompok;
}

function renderPin() {
  const dibaca = ambilDaftarDibaca();
  wadahMarker.innerHTML = "";

  kelompokkanPin(hasilSaatIni).forEach(function (grup) {
    const item = grup.items[0];
    const berkelompok = grup.items.length > 1;
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = berkelompok
      ? "marker marker-klaster"
      : "marker marker-" + item.kategori + (dibaca.includes(item.id) ? " dibaca" : "");
    if (!berkelompok) pin.dataset.id = item.id;
    pin.style.left = (grup.x / pw * 100) + "%";
    pin.style.top = (grup.y / ph * 100) + "%";

    if (berkelompok) {
      pin.textContent = grup.items.length;
      pin.setAttribute("aria-label", grup.items.length + " lokasi berdekatan. Tekan untuk memperbesar peta.");
      pin.title = grup.items.length + " lokasi · tekan untuk memperbesar";
      pin.appendChild(buatElemen("span", "marker-nama", grup.items.length + " lokasi · perbesar untuk melihat"));
      pin.addEventListener("click", function () {
        bunyiKlik();
        fokusKelompok(grup.items);
      });
    } else {
      pin.innerHTML = buatPinSvg(item.kategori);
      pin.setAttribute("aria-label", item.judul + ", " + item.daerah);
      pin.appendChild(buatElemen("span", "marker-nama", item.judul));
      pin.addEventListener("mouseenter", function () { bunyiHover(); });
      pin.addEventListener("click", function () {
        bunyiKlik();
        pilihItem(item);
      });
    }

    wadahMarker.appendChild(pin);
  });

  zoomMarkerSaatRender = z;
  infoKosong.hidden = hasilSaatIni.length > 0;
  perbaruiPin();
}

function renderMarker() {
  hasilSaatIni = hitungHasil();

  if (itemTerpilih && !hasilSaatIni.some(function (d) { return d.id === itemTerpilih.id; })) {
    itemTerpilih = null;
  }

  renderPin();
  perbaruiChip();
  perbaruiProgres(ambilDaftarDibaca());
  sorotPulau();
  isiPanel();

  const wilayah = pulauAktif === "semua" ? "semua wilayah" : namaPulau[pulauAktif];
  const pencarian = kataKunci ? " · hasil untuk “" + inputCari.value.trim() + "”" : "";
  statusPeta.textContent = hasilSaatIni.length + " lokasi ditampilkan · " + wilayah + pencarian;
}

// ===================== Panel samping =====================
function isiPanel() {
  const dibaca = ambilDaftarDibaca();
  panelIsi.innerHTML = "";
  panelIsi.scrollTop = 0;

  if (itemTerpilih) {
    tampilkanDetail(itemTerpilih, dibaca);
    return;
  }

  panelEyebrow.textContent = pulauAktif === "semua" ? "Semua wilayah" : namaPulau[pulauAktif];
  panelJudul.textContent = hasilSaatIni.length + " lokasi";

  if (hasilSaatIni.length === 0) {
    panelIsi.appendChild(buatElemen("p", "panel-kosong", "Belum ada konten yang cocok. Coba ubah filter atau kata kunci."));
    return;
  }

  const daftar = buatElemen("ul", "daftar-lokasi");
  hasilSaatIni.forEach(function (item) {
    const li = document.createElement("li");
    const tombol = buatElemen("button", "baris-lokasi");
    tombol.type = "button";

    tombol.appendChild(buatElemen("span", "titik titik-" + item.kategori));

    const teks = buatElemen("span", "baris-teks");
    teks.appendChild(buatElemen("strong", "", item.judul));
    teks.appendChild(buatElemen("small", "", item.daerah + " · " + labelKategori[item.kategori]));
    tombol.appendChild(teks);

    if (dibaca.includes(item.id)) tombol.appendChild(buatElemen("span", "tanda-baca", "✓"));

    tombol.addEventListener("click", function () { bunyiKlik(); pilihItem(item); });
    tombol.addEventListener("mouseenter", function () { sorotPin(item.id, true); });
    tombol.addEventListener("mouseleave", function () { sorotPin(item.id, false); });

    li.appendChild(tombol);
    daftar.appendChild(li);
  });
  panelIsi.appendChild(daftar);
}

function tampilkanDetail(item, dibaca) {
  panelEyebrow.textContent = labelKategori[item.kategori];
  panelJudul.textContent = item.judul;

  const kembali = buatElemen("button", "kembali-daftar", "← Daftar lokasi");
  kembali.type = "button";
  kembali.addEventListener("click", function () {
    itemTerpilih = null;
    renderPin();
    isiPanel();
    fokusKamera(true);
  });

  const lencana = buatElemen("span", "lencana lencana-" + item.kategori, labelKategori[item.kategori]);
  const daerah = buatElemen("p", "detail-daerah", item.daerah);
  const sinopsis = buatElemen("p", "detail-sinopsis", item.sinopsis);

  const aksi = buatElemen("a", "btn-cta detail-tombol", "Baca Selengkapnya");
  aksi.href = "detail.html?id=" + item.id;

  const status = buatElemen("p", "status-baca", dibaca.includes(item.id) ? "✓ Sudah kamu baca" : "Belum dibaca");

  [kembali, lencana, daerah, sinopsis, aksi, status].forEach(function (e) { panelIsi.appendChild(e); });
}

function pilihItem(item) {
  itemTerpilih = item;
  perbaruiPin();
  isiPanel();
  if (svgSiap) terbangKeTitik(item, Math.max(z, 3.6), true);
  if (window.innerWidth < 960) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function pilihPulau(id, terbang) {
  pulauAktif = id;
  itemTerpilih = null;
  daftarTab.forEach(function (t) {
    const aktif = t.dataset.pulau === id;
    t.classList.toggle("aktif", aktif);
    t.setAttribute("aria-pressed", aktif);
  });
  renderMarker();
  if (terbang !== false) fokusKamera(true);
}

// ===================== Chip kategori (legenda sekaligus filter) =====================
Object.keys(labelKategori).forEach(function (kunci) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip chip-" + kunci + " aktif";
  chip.dataset.kategori = kunci;
  chip.setAttribute("aria-pressed", "true");
  chip.innerHTML =
    '<span class="chip-ikon">' + buatPinSvg(kunci) + "</span>" +
    '<span class="chip-nama">' + labelKategori[kunci] + "</span>" +
    '<span class="chip-jumlah"></span>';

  chip.addEventListener("click", function () {
    if (kategoriAktif.has(kunci)) kategoriAktif.delete(kunci);
    else kategoriAktif.add(kunci);
    renderMarker();
  });

  wadahChip.appendChild(chip);
});

// ===================== Tab pulau & pencarian =====================
daftarTab.forEach(function (tab) {
  tab.addEventListener("click", function () { pilihPulau(tab.dataset.pulau); });
});

let pewaktuCari = null;
inputCari.addEventListener("input", function () {
  kataKunci = inputCari.value.trim().toLowerCase();
  itemTerpilih = null;
  renderMarker();

  clearTimeout(pewaktuCari);
  pewaktuCari = setTimeout(function () {
    if (kataKunci) terbangKeHasil(hasilSaatIni);
    else fokusKamera(true);
  }, 280);
});

inputCari.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && hasilSaatIni.length > 0) {
    clearTimeout(pewaktuCari);
    pilihItem(hasilSaatIni[0]);
  }
});

// ===================== Interaksi peta: seret, pinch, scroll =====================
const pointer = new Map();
let awalSeret = null;
let jarakAwal = 0;
let zAwalPinch = 1;
let sudahGeser = false;
let targetAwal = null;

if (window.matchMedia("(pointer: coarse)").matches) {
  petunjuk.textContent = "Cubit untuk zoom · seret untuk menggeser · ketuk pulau atau angka kelompok";
}

function sembunyikanPetunjuk() {
  petunjuk.classList.add("sembunyi");
}

function posisiDiPanggung(clientX, clientY) {
  const r = panggung.getBoundingClientRect();
  return { x: clientX - r.left, y: clientY - r.top };
}

panggung.addEventListener("pointerdown", function (e) {
  if (e.target.closest(".marker, .kontrol-zoom")) return;

  panggung.setPointerCapture(e.pointerId);
  pointer.set(e.pointerId, { x: e.clientX, y: e.clientY });
  kamera.classList.remove("terbang");
  tipPulau.hidden = true;

  if (pointer.size === 1) {
    targetAwal = e.target;
    sudahGeser = false;
    awalSeret = { x: e.clientX, y: e.clientY, px: px, py: py };
  } else if (pointer.size === 2) {
    const dua = Array.from(pointer.values());
    jarakAwal = Math.hypot(dua[0].x - dua[1].x, dua[0].y - dua[1].y);
    zAwalPinch = z;
    sudahGeser = true;
  }
  panggung.classList.add("menyeret");
});

panggung.addEventListener("pointermove", function (e) {
  if (!pointer.has(e.pointerId)) {
    tampilkanTipPulau(e);
    return;
  }

  const p = pointer.get(e.pointerId);
  p.x = e.clientX;
  p.y = e.clientY;

  if (pointer.size === 1 && awalSeret) {
    const dx = e.clientX - awalSeret.x;
    const dy = e.clientY - awalSeret.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) sudahGeser = true;
    if (sudahGeser) {
      px = awalSeret.px + dx;
      py = awalSeret.py + dy;
      jepit();
      terapkan();
      sembunyikanPetunjuk();
    }
  } else if (pointer.size === 2) {
    const dua = Array.from(pointer.values());
    const jarak = Math.hypot(dua[0].x - dua[1].x, dua[0].y - dua[1].y);
    const tengah = posisiDiPanggung((dua[0].x + dua[1].x) / 2, (dua[0].y + dua[1].y) / 2);
    const zBaru = batas(zAwalPinch * (jarak / jarakAwal), Z_MIN, Z_MAX);
    const rasio = zBaru / z;
    z = zBaru;
    px = tengah.x - (tengah.x - px) * rasio;
    py = tengah.y - (tengah.y - py) * rasio;
    jepit();
    terapkan();
    sembunyikanPetunjuk();
  }
});

function akhiriPointer(e) {
  if (!pointer.has(e.pointerId)) return;

  // Ketukan tanpa geseran pada sebuah pulau = fokus ke pulau itu
  if (pointer.size === 1 && !sudahGeser && targetAwal && e.type === "pointerup") {
    const g = targetAwal.closest ? targetAwal.closest(".pulau") : null;
    if (g && g.id) {
      pilihPulau(pulauAktif === g.id ? "semua" : g.id);
    }
  }

  pointer.delete(e.pointerId);
  if (pointer.size === 0) {
    awalSeret = null;
    targetAwal = null;
    panggung.classList.remove("menyeret");
  } else if (pointer.size === 1) {
    const sisa = Array.from(pointer.values())[0];
    awalSeret = { x: sisa.x, y: sisa.y, px: px, py: py };
  }
}

panggung.addEventListener("pointerup", akhiriPointer);
panggung.addEventListener("pointercancel", akhiriPointer);

panggung.addEventListener("pointerleave", function () { tipPulau.hidden = true; });

panggung.addEventListener("wheel", function (e) {
  e.preventDefault();
  const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
  const p = posisiDiPanggung(e.clientX, e.clientY);
  zoomDi(p.x, p.y, Math.pow(1.0018, -delta), false);
  sembunyikanPetunjuk();
}, { passive: false });

panggung.addEventListener("dblclick", function (e) {
  if (e.target.closest(".marker, .kontrol-zoom")) return;
  const p = posisiDiPanggung(e.clientX, e.clientY);
  zoomDi(p.x, p.y, 1.8, true);
});

function tampilkanTipPulau(e) {
  const g = e.target.closest ? e.target.closest(".pulau") : null;
  if (!g || !g.id) { tipPulau.hidden = true; return; }

  const jumlah = semuaItem.filter(function (d) { return d.pulau === g.id; }).length;
  tipPulau.textContent = (namaPulau[g.id] || g.id) + " · " + jumlah + " lokasi";

  const p = posisiDiPanggung(e.clientX, e.clientY);
  tipPulau.style.left = Math.min(p.x + 14, lebar - 150) + "px";
  tipPulau.style.top = (p.y + 16) + "px";
  tipPulau.hidden = false;
}

// ===================== Tombol zoom & papan ketik =====================
document.getElementById("zoom-masuk").addEventListener("click", function () {
  zoomDi(lebar / 2, tinggi / 2, 1.6, true);
});
document.getElementById("zoom-keluar").addEventListener("click", function () {
  zoomDi(lebar / 2, tinggi / 2, 1 / 1.6, true);
});
document.getElementById("zoom-reset").addEventListener("click", function () {
  pilihPulau("semua");
});

document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT") return;

  if (e.key === "Escape") {
    if (itemTerpilih) {
      itemTerpilih = null;
      renderPin();
      isiPanel();
      fokusKamera(true);
    } else if (pulauAktif !== "semua" || z > 1) {
      pilihPulau("semua");
    }
  } else if (e.key === "+" || e.key === "=") {
    zoomDi(lebar / 2, tinggi / 2, 1.6, true);
  } else if (e.key === "-" || e.key === "_") {
    zoomDi(lebar / 2, tinggi / 2, 1 / 1.6, true);
  } else if (e.key === "0") {
    pilihPulau("semua");
  }
});

// ===================== Muat peta =====================
fetch("assets/peta-indonesia.svg")
  .then(function (res) { return res.text(); })
  .then(function (svg) {
    wadahSvg.innerHTML = svg;
    svgSiap = true;
    siapkanPulauUntukKeyboard();
    sorotPulau();
    fokusKamera(false);
  })
  .catch(function () {
    wadahSvg.innerHTML =
      '<p class="peta-galat">Peta gagal dimuat. Jalankan situs lewat server lokal ' +
      '(mis. <code>python -m http.server</code>), jangan dibuka langsung dari file.</p>';
  });

// ===================== Ukuran ulang =====================
let pewaktuUkur = null;
window.addEventListener("resize", function () {
  clearTimeout(pewaktuUkur);
  pewaktuUkur = setTimeout(function () {
    ukur();
    if (svgSiap) fokusKamera(false);
    else { lihatSemua(false); }
    renderPin();
  }, 150);
});

function siapkanPulauUntukKeyboard() {
  wadahSvg.querySelectorAll(".pulau").forEach(function (grup) {
    const nama = namaPulau[grup.id] || grup.getAttribute("data-pulau") || grup.id;
    const jumlah = semuaItem.filter(function (item) { return item.pulau === grup.id; }).length;
    grup.setAttribute("tabindex", "0");
    grup.setAttribute("role", "button");
    grup.setAttribute("aria-label", nama + ", " + jumlah + " lokasi budaya. Tekan Enter atau Spasi untuk fokus.");
    grup.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      pilihPulau(pulauAktif === grup.id ? "semua" : grup.id);
    });
  });
}

// ===================== Mulai =====================
ukur();
lihatSemua(false);
renderMarker();

// Tata letak bisa bergeser setelah font dan aset selesai dimuat, jadi ukur ulang
function ukurUlangSetelahMuat() {
  ukur();
  fokusKamera(false);
  if (!svgSiap) lihatSemua(false);
  renderPin();
}

window.addEventListener("load", ukurUlangSetelahMuat);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(ukurUlangSetelahMuat);
