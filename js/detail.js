const params = new URLSearchParams(window.location.search);
const idItem = params.get("id");

const item = dataLengkap.find(function (d) {
  return d.id === idItem;
});

const elJudul = document.getElementById("cerita-judul");
const elDaerah = document.getElementById("cerita-daerah");
const elIsi = document.getElementById("cerita-isi");
const linkKembali = document.getElementById("link-kembali");

function tentukanLinkKembali(dataItem) {
  if (!dataItem) return "peta.html";
  if (dataItem.koordinat) return "peta.html";
  return dataItem.kategori + ".html";
}

if (item) {
  document.title = item.judul + " - Peta Cerita Nusantara";
  elJudul.textContent = item.judul;
  elDaerah.textContent = item.daerah;
  linkKembali.textContent = "← Kembali";
  linkKembali.href = tentukanLinkKembali(item);

  const paragraf = item.isi || [item.sinopsis];
  paragraf.forEach(function (teks) {
    const p = document.createElement("p");
    p.textContent = teks;
    elIsi.appendChild(p);
  });

  try {
    const dibaca = JSON.parse(localStorage.getItem("pbn_dibaca")) || [];
    if (!dibaca.includes(item.id)) {
      dibaca.push(item.id);
      localStorage.setItem("pbn_dibaca", JSON.stringify(dibaca));
    }
  } catch (e) {
    // localStorage bisa diblokir (mode privat); status "sudah dibaca" saja yang tidak tersimpan
  }
} else {
  elJudul.textContent = "Konten tidak ditemukan";
  elDaerah.textContent = "Kembali dan pilih konten yang tersedia.";
  linkKembali.href = "peta.html";
}

// ===== KUIS =====
const kuisWadah = document.getElementById("kuis-wadah");

function tampilkanKuis(daftarSoal) {
  if (!daftarSoal || daftarSoal.length === 0) return;

  const judulKuis = document.createElement("h2");
  judulKuis.textContent = "Uji Pemahamanmu";
  kuisWadah.appendChild(judulKuis);

  daftarSoal.forEach(function (soal, indexSoal) {
    const wadahSoal = document.createElement("div");
    wadahSoal.className = "soal";
    wadahSoal.dataset.soal = indexSoal;

    const pertanyaan = document.createElement("p");
    pertanyaan.textContent = (indexSoal + 1) + ". " + soal.pertanyaan;
    wadahSoal.appendChild(pertanyaan);

    soal.pilihan.forEach(function (teks, indexPilihan) {
      const label = document.createElement("label");
      label.className = "pilihan-item";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "soal-" + indexSoal;
      input.value = indexPilihan;

      label.append(input, document.createTextNode(" " + teks));
      wadahSoal.appendChild(label);
    });

    kuisWadah.appendChild(wadahSoal);
  });

  const tombolCek = document.createElement("button");
  tombolCek.className = "btn-cta";
  tombolCek.id = "btn-cek-kuis";
  tombolCek.type = "button";
  tombolCek.textContent = "Cek Jawaban";

  const hasil = document.createElement("p");
  hasil.className = "hasil-kuis";
  hasil.id = "hasil-kuis";
  hasil.setAttribute("role", "status");
  hasil.setAttribute("aria-live", "polite");
  hasil.setAttribute("aria-atomic", "true");

  kuisWadah.append(tombolCek, hasil);

  tombolCek.addEventListener("click", function () {
    const belumDijawab = daftarSoal.filter(function (soal, indexSoal) {
      return !document.querySelector('input[name="soal-' + indexSoal + '"]:checked');
    }).length;

    if (belumDijawab > 0) {
      hasil.textContent =
        "Masih ada " + belumDijawab + " pertanyaan yang belum dijawab.";
      return;
    }

    let jumlahBenar = 0;

    daftarSoal.forEach(function (soal, indexSoal) {
      const dipilih = document.querySelector('input[name="soal-' + indexSoal + '"]:checked');
      const semuaPilihan = document.querySelectorAll('.soal[data-soal="' + indexSoal + '"] .pilihan-item');

      semuaPilihan.forEach(function (label, indexPilihan) {
        label.classList.remove("benar", "salah");
        if (indexPilihan === soal.benar) {
          label.classList.add("benar");
        } else if (dipilih && parseInt(dipilih.value) === indexPilihan) {
          label.classList.add("salah");
        }
      });

      if (dipilih && parseInt(dipilih.value) === soal.benar) {
        jumlahBenar++;
      }
    });

    if (jumlahBenar === daftarSoal.length) {
      bunyiSukses();
    } else {
      bunyiGagal();
    }

    hasil.textContent =
      "Skor kamu: " + jumlahBenar + " dari " + daftarSoal.length + " benar.";
  });
}

if (item && item.kuis) {
  tampilkanKuis(item.kuis);
}

// ===== NAVIGASI SEBELUMNYA/SELANJUTNYA (dalam kategori yang sama) =====
if (item) {
  const dalamKategoriSama = dataLengkap.filter(function (d) {
    return d.kategori === item.kategori;
  });

  const indexSekarang = dalamKategoriSama.findIndex(function (d) {
    return d.id === item.id;
  });

  const indexSebelumnya = (indexSekarang - 1 + dalamKategoriSama.length) % dalamKategoriSama.length;
  const indexSelanjutnya = (indexSekarang + 1) % dalamKategoriSama.length;

  document.getElementById("cerita-sebelumnya").href =
    "detail.html?id=" + dalamKategoriSama[indexSebelumnya].id;
  document.getElementById("cerita-selanjutnya").href =
    "detail.html?id=" + dalamKategoriSama[indexSelanjutnya].id;
}

// ===== PROGRESS BAR BACA =====
const progressBar = document.getElementById("progress-bar");
const progressKeris = document.getElementById("progress-keris");

function perbaruiProgressBaca() {
  const tinggiDokumen = document.documentElement.scrollHeight - window.innerHeight;
  const persen = tinggiDokumen > 0
    ? Math.min(100, Math.max(0, (window.scrollY / tinggiDokumen) * 100))
    : 100;

  progressBar.style.width = persen + "%";
  progressKeris.style.left = persen + "%";
}

window.addEventListener("scroll", perbaruiProgressBaca, { passive: true });
window.addEventListener("resize", perbaruiProgressBaca);

// Atur posisi progres sejak halaman pertama kali ditampilkan.
perbaruiProgressBaca();

// ===== REVEAL SAAT SCROLL =====
const elemenReveal = document.querySelectorAll("#cerita-isi p, #kuis-wadah .soal, #kuis-wadah h2");

if ("IntersectionObserver" in window) {
  const pengamat = new IntersectionObserver(function (daftarEntri) {
    daftarEntri.forEach(function (entri) {
      if (entri.isIntersecting) {
        entri.target.classList.add("terlihat");
      }
    });
  }, { threshold: 0.15 });

  elemenReveal.forEach(function (el) {
    el.classList.add("reveal");
    pengamat.observe(el);
  });
} else {
  elemenReveal.forEach(function (el) {
    el.classList.add("terlihat");
  });
}
