
/**
 * Efek suara Peta Cerita Nusantara.
 * Seluruh suara dibuat langsung melalui Web Audio API.
 * Tidak membutuhkan berkas MP3 eksternal.
 */

let konteksAudio = null;

function inisialisasiKonteksAudio() {
  if (!konteksAudio) {
    const AC = window.AudioContext || window.webkitAudioContext;

    if (AC) {
      konteksAudio = new AC();
    }
  }

  if (konteksAudio && konteksAudio.state === "suspended") {
    konteksAudio.resume().catch(function () {});
  }
}

// Browser umumnya mengizinkan audio setelah interaksi pengguna.
["click", "keydown", "touchstart"].forEach(function (evt) {
  window.addEventListener(
    evt,
    function () {
      inisialisasiKonteksAudio();
    },
    { once: true }
  );
});

function bunyiSintesis(nama, pitch, volume) {
  inisialisasiKonteksAudio();

  if (!konteksAudio) return;

  const gong = nama === "gong";
  const nadaPitch = pitch || 1;
  const nadaVolume = volume != null ? volume : 0.5;
  const frekuensiDasar = (gong ? 110 : 440) * nadaPitch;
  const durasi = gong ? 2.2 : 0.9;
  const mulai = konteksAudio.currentTime;

  const master = konteksAudio.createGain();

  master.gain.setValueAtTime(
    Math.max(0.0001, nadaVolume * 0.5),
    mulai
  );
  master.gain.exponentialRampToValueAtTime(
    0.0001,
    mulai + durasi
  );
  master.connect(konteksAudio.destination);

  // Beberapa lapisan frekuensi untuk efek bernuansa logam.
  [1, 2.76, 5.4].forEach(function (rasio, indeks) {
    const oscillator = konteksAudio.createOscillator();
    const lapisanGain = konteksAudio.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      frekuensiDasar * rasio,
      mulai
    );

    lapisanGain.gain.setValueAtTime(
      1 / (indeks + 1),
      mulai
    );

    oscillator.connect(lapisanGain);
    lapisanGain.connect(master);

    oscillator.start(mulai);
    oscillator.stop(mulai + durasi);
  });
}

function putarKlip(nama, pitch, volume) {
  bunyiSintesis(
    nama,
    pitch != null ? pitch : 1,
    volume != null ? volume : 0.5
  );
}

function bunyiHover() {
  putarKlip("hit", 1.3, 0.3);
}

function bunyiKlik() {
  putarKlip("hit", 1.0, 0.5);
}

function bunyiSukses() {
  putarKlip("hit", 1.0, 0.5);

  setTimeout(function () {
    putarKlip("hit", 1.3, 0.5);
  }, 140);

  setTimeout(function () {
    putarKlip("gong", 0.9, 0.6);
  }, 280);
}

function bunyiGagal() {
  putarKlip("hit", 0.75, 0.4);

  setTimeout(function () {
    putarKlip("gong", 0.6, 0.35);
  }, 160);
}
