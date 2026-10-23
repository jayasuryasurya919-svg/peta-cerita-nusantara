// Efek suara gamelan.
// Memakai berkas di assets/audio/ bila tersedia. Kalau berkasnya tidak ada,
// bunyi dibuat langsung oleh browser (Web Audio API) supaya situs tetap bersuara.
const klipAudio = {
  hit: new Audio("assets/audio/gamelan-hit.mp3"),
  gong: new Audio("assets/audio/gamelan-gong.mp3")
};

Object.values(klipAudio).forEach(function (audio) {
  audio.preload = "auto";
  audio.addEventListener("error", function () {
    audio.gagalMuat = true;
  });
});

let konteksAudio = null;

function inisialisasiKonteksAudio() {
  if (!konteksAudio) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) konteksAudio = new AC();
  }
  if (konteksAudio && konteksAudio.state === "suspended") {
    konteksAudio.resume();
  }
}

// Inisialisasi audio konteks pada interaksi pertama untuk mematuhi kebijakan browser
['click', 'keydown', 'touchstart'].forEach(function (evt) {
  window.addEventListener(evt, function () {
    inisialisasiKonteksAudio();
  }, { once: true });
});

function penggunaSudahBerinteraksi() {
  return !navigator.userActivation || navigator.userActivation.hasBeenActive;
}

function bunyiSintesis(nama, pitch, volume) {
  inisialisasiKonteksAudio();
  if (!konteksAudio) return;

  const gong = nama === "gong";
  const frekuensiDasar = (gong ? 110 : 440) * pitch;
  const durasi = gong ? 2.2 : 0.9;
  const mulai = konteksAudio.currentTime;

  const master = konteksAudio.createGain();
  master.gain.setValueAtTime(volume * 0.5, mulai);
  master.gain.exponentialRampToValueAtTime(0.0001, mulai + durasi);
  master.connect(konteksAudio.destination);

  // Rasio nada tak-harmonis memberi kesan logam seperti bilah gamelan
  [1, 2.76, 5.4].forEach(function (rasio, i) {
    const osc = konteksAudio.createOscillator();
    const lapis = konteksAudio.createGain();
    osc.type = "sine";
    osc.frequency.value = frekuensiDasar * rasio;
    lapis.gain.value = 1 / (i + 1);
    osc.connect(lapis);
    lapis.connect(master);
    osc.start(mulai);
    osc.stop(mulai + durasi);
  });
}

function putarKlip(nama, pitch, volume) {
  const sumber = klipAudio[nama];
  if (!sumber) return;
  const nadaPitch = pitch || 1;
  const nadaVolume = volume != null ? volume : 0.5;

  if (sumber.gagalMuat) {
    bunyiSintesis(nama, nadaPitch, nadaVolume);
    return;
  }

  const salinan = sumber.cloneNode();
  salinan.playbackRate = nadaPitch;
  salinan.volume = nadaVolume;
  salinan.play().catch(function () {
    bunyiSintesis(nama, nadaPitch, nadaVolume);
  });
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