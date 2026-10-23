const dataBudaya = [
  // ===== CERITA RAKYAT =====
  {
    id: "malin-kundang",
    judul: "Malin Kundang",
    daerah: "Sumatera Barat",
    pulau: "sumatra",
    kategori: "cerita",
    koordinat: { x: 13.2, y: 43.0 },
    sinopsis: "Seorang anak durhaka yang dikutuk menjadi batu setelah menolak mengakui ibunya.",
    isi: [
      "Malin Kundang adalah anak nelayan miskin yang hidup berdua dengan ibunya di pesisir Sumatra Barat. Demi mengubah nasib, ia merantau dengan menumpang kapal dagang.",
      "Bertahun-tahun kemudian, Malin kembali sebagai saudagar kaya dengan kapal megah dan istri bangsawan. Ibunya yang sudah renta berlari menyambutnya, namun Malin malu dan menolak mengakuinya.",
      "Sang ibu yang sakit hati berdoa agar anaknya mendapat balasan. Badai datang menghancurkan kapal itu, dan Malin Kundang berubah menjadi batu di tepi pantai."
    ],
    kuis: [
      { pertanyaan: "Mengapa Malin Kundang dikutuk menjadi batu?", pilihan: ["Mencuri harta ibunya", "Menolak mengakui ibunya", "Kalah berlayar", "Melanggar janji dagang"], benar: 1 },
      { pertanyaan: "Apa pekerjaan Malin Kundang sebelum merantau?", pilihan: ["Petani", "Nelayan", "Pedagang kain", "Pandai besi"], benar: 1 }
    ]
  },
  {
    id: "sangkuriang",
    judul: "Sangkuriang",
    daerah: "Jawa Barat",
    pulau: "jawa",
    kategori: "cerita",
    koordinat: { x: 28.4, y: 74.0 },
    sinopsis: "Kisah pemuda yang jatuh cinta pada ibunya sendiri dan terjadinya Gunung Tangkuban Parahu.",
    isi: [
      "Dayang Sumbi adalah seorang putri yang tanpa sengaja mengucap janji akan menikahi siapa pun yang menolong anjingnya, Tumang, yang ternyata adalah ayahnya sendiri yang dikutuk menjadi anjing. Dari pernikahan itu lahirlah Sangkuriang.",
      "Sangkuriang tumbuh menjadi pemburu yang gagah, namun suatu hari tanpa sadar ia membunuh Tumang. Mengetahui hal itu, Dayang Sumbi marah dan memukul kepala Sangkuriang hingga terluka, lalu mengusirnya pergi.",
      "Bertahun-tahun kemudian, Sangkuriang kembali sebagai pemuda gagah dan bertemu Dayang Sumbi tanpa mengenalinya. Keduanya saling jatuh cinta dan berniat menikah, hingga Dayang Sumbi menyadari bekas luka di kepala Sangkuriang.",
      "Untuk menggagalkan pernikahan itu, Dayang Sumbi meminta syarat mustahil: membuat perahu dan telaga dalam semalam. Saat Sangkuriang hampir berhasil, Dayang Sumbi membuat tipu daya sehingga ayam berkokok lebih awal. Sangkuriang murka dan menendang perahu yang belum selesai, yang kemudian dipercaya menjadi Gunung Tangkuban Parahu."
    ],
    kuis: [
      { pertanyaan: "Siapa nama anjing yang ternyata adalah ayah Dayang Sumbi?", pilihan: ["Tumang", "Kuntum", "Barong", "Lembu"], benar: 0 },
      { pertanyaan: "Apa syarat yang diminta Dayang Sumbi kepada Sangkuriang?", pilihan: ["Membawakan bunga langka", "Membuat perahu dan telaga dalam semalam", "Mengalahkan raksasa", "Menemukan cincin yang hilang"], benar: 1 }
    ]
  },
  {
    id: "timun-mas",
    judul: "Timun Mas",
    daerah: "Jawa Tengah",
    pulau: "jawa",
    kategori: "cerita",
    koordinat: { x: 32.4, y: 75.5 },
    sinopsis: "Gadis pemberani yang melarikan diri dari raksasa dengan bantuan bekal ajaib.",
    isi: [
      "Seorang janda bernama Mbok Rondo sangat mendambakan anak. Ia pun meminta bantuan raksasa bernama Buto Ijo, yang memberinya biji mentimun dengan syarat anak yang lahir kelak harus diserahkan kepadanya setelah dewasa.",
      "Dari biji itu tumbuh mentimun emas berisi seorang bayi perempuan yang diberi nama Timun Mas. Ia tumbuh menjadi gadis cantik dan baik hati, namun hari penyerahan kepada Buto Ijo pun semakin dekat.",
      "Mbok Rondo yang tidak tega memberikan empat bungkusan ajaib kepada Timun Mas: biji mentimun, jarum, garam, dan terasi, untuk digunakan saat melarikan diri.",
      "Saat Buto Ijo mengejarnya, Timun Mas melempar tiap bungkusan satu per satu. Biji mentimun menjadi hutan lebat, jarum menjadi pohon bambu tajam, garam menjadi lautan luas, dan terasi menjadi lumpur panas yang akhirnya menenggelamkan Buto Ijo, menyelamatkan Timun Mas."
    ],
    kuis: [
      { pertanyaan: "Dari mana asal Timun Mas lahir?", pilihan: ["Telur emas", "Biji mentimun", "Batang bambu", "Kuncup bunga"], benar: 1 },
      { pertanyaan: "Benda apa yang berubah menjadi lumpur panas dan mengalahkan Buto Ijo?", pilihan: ["Garam", "Jarum", "Terasi", "Biji mentimun"], benar: 2 }
    ]
  },
  {
    id: "roro-jonggrang",
    judul: "Roro Jonggrang",
    daerah: "Yogyakarta",
    pulau: "jawa",
    kategori: "cerita",
    koordinat: { x: 35.3, y: 80.4 },
    sinopsis: "Legenda seribu candi yang berkaitan dengan asal-usul Candi Prambanan.",
    isi: [
      "Bandung Bondowoso, seorang pangeran sakti, menaklukkan kerajaan Baka dan jatuh cinta pada Roro Jonggrang, putri raja yang baru dikalahkannya. Ia pun melamar sang putri.",
      "Roro Jonggrang tidak ingin menikahi pembunuh ayahnya, namun takut menolak secara terang-terangan. Ia pun mengajukan syarat yang dianggap mustahil: membangun seribu candi dalam satu malam.",
      "Dengan bantuan para makhluk gaib, Bandung Bondowoso hampir menyelesaikan syarat tersebut. Panik, Roro Jonggrang meminta para dayang membakar jerami dan menumbuk lesung agar ayam-ayam berkokok lebih awal, membuat para makhluk gaib mengira pagi telah tiba dan menghentikan pekerjaan.",
      "Mengetahui dirinya ditipu, Bandung Bondowoso murka dan mengutuk Roro Jonggrang menjadi arca batu untuk melengkapi candi yang kesembilan ratus sembilan puluh sembilan, sehingga genap menjadi seribu."
    ],
    kuis: [
      { pertanyaan: "Apa syarat yang diajukan Roro Jonggrang kepada Bandung Bondowoso?", pilihan: ["Membawakan permata langka", "Membangun seribu candi dalam semalam", "Mengalahkan pasukan musuh", "Menemukan mahkota yang hilang"], benar: 1 },
      { pertanyaan: "Apa yang terjadi pada Roro Jonggrang di akhir cerita?", pilihan: ["Menikah dengan Bandung Bondowoso", "Melarikan diri ke hutan", "Dikutuk menjadi arca batu", "Menjadi ratu kerajaan baru"], benar: 2 }
    ]
  },
  {
    id: "danau-toba",
    judul: "Danau Toba",
    daerah: "Sumatera Utara",
    pulau: "sumatra",
    kategori: "cerita",
    koordinat: { x: 10.1, y: 23.2 },
    sinopsis: "Janji seorang pemuda kepada istrinya yang berasal dari ikan, dan akibat ketika janji itu dilanggar.",
    isi: [
      "Seorang pemuda petani bernama Toba menangkap ikan emas yang ajaibnya berubah menjadi seorang wanita cantik. Wanita itu bersedia menjadi istrinya dengan satu syarat: Toba tidak boleh pernah menyebut asal-usulnya sebagai ikan kepada siapa pun, termasuk anak mereka kelak.",
      "Mereka menikah dan dikaruniai seorang anak laki-laki bernama Samosir. Namun Samosir tumbuh menjadi anak yang pemalas dan sering tidak menghabiskan makanannya.",
      "Suatu hari karena kesal, Toba lupa diri dan membentak Samosir dengan menyebutnya 'anak ikan'. Pelanggaran janji itu memicu bencana besar.",
      "Hujan deras turun tanpa henti, mata air meluap dari tempat Samosir berdiri, dan wilayah itu tenggelam membentuk danau yang kini dikenal sebagai Danau Toba, dengan Pulau Samosir di tengahnya."
    ],
    kuis: [
      { pertanyaan: "Apa syarat yang diajukan wanita ikan kepada Toba?", pilihan: ["Tidak boleh menyebut asal-usulnya sebagai ikan", "Harus pindah ke desa lain", "Tidak boleh memancing lagi", "Harus menikah lagi dalam setahun"], benar: 0 },
      { pertanyaan: "Apa yang terbentuk dari peristiwa dalam cerita ini?", pilihan: ["Gunung berapi", "Danau Toba dan Pulau Samosir", "Sungai Musi", "Selat Sunda"], benar: 1 }
    ]
  },
  {
    id: "putri-mandalika",
    judul: "Putri Mandalika",
    daerah: "Nusa Tenggara Barat",
    pulau: "nusa-tenggara",
    kategori: "cerita",
    koordinat: { x: 46.4, y: 85.5 },
    sinopsis: "Putri cantik dari Lombok yang menjadi asal-usul tradisi Bau Nyale.",
    isi: [
      "Putri Mandalika adalah putri Kerajaan Tonjang Beru di Lombok yang terkenal sangat cantik dan bijaksana. Banyak pangeran dari berbagai kerajaan datang melamarnya, masing-masing berharap menjadi satu-satunya yang terpilih.",
      "Karena para pangeran saling bersaing dan mengancam akan berperang jika lamaran mereka ditolak, Putri Mandalika merasa sedih. Ia tidak ingin kecantikannya menjadi sebab pertumpahan darah di antara rakyatnya.",
      "Untuk menghentikan perselisihan, Putri Mandalika mengumpulkan seluruh rakyat dan para pangeran di tepi pantai, lalu menyatakan bahwa ia akan menjadi milik seluruh rakyat Lombok, bukan satu orang saja.",
      "Setelah berpesan demikian, Putri Mandalika menjatuhkan diri ke laut dan menghilang. Konon ia berubah menjadi cacing laut berwarna-warni yang disebut nyale, yang muncul setiap tahun dan ditangkap dalam tradisi Bau Nyale sebagai kenangan atas pengorbanannya."
    ],
    kuis: [
      { pertanyaan: "Mengapa Putri Mandalika memilih menjatuhkan diri ke laut?", pilihan: ["Untuk menghindari salah satu pangeran", "Agar tidak terjadi perang antar pangeran yang melamarnya", "Karena diusir dari kerajaan", "Untuk mencari harta karun"], benar: 1 },
      { pertanyaan: "Tradisi apa yang berasal dari legenda Putri Mandalika?", pilihan: ["Bau Nyale", "Kasada", "Ngaben", "Sekaten"], benar: 0 }
    ]
  },
  {
    id: "kelimutu",
    judul: "Danau Kelimutu",
    daerah: "Nusa Tenggara Timur",
    pulau: "nusa-tenggara",
    kategori: "cerita",
    koordinat: { x: 58.0, y: 84.8 },
    sinopsis: "Tiga danau berwarna di puncak Kelimutu yang dipercaya sebagai tempat arwah orang yang telah meninggal.",
    isi: [
      "Di puncak Gunung Kelimutu, Pulau Flores, terdapat tiga danau kawah yang warnanya dapat berubah-ubah dari waktu ke waktu, mulai dari biru kehijauan, merah kecokelatan, hingga hitam pekat.",
      "Masyarakat setempat memiliki kepercayaan turun-temurun bahwa ketiga danau tersebut merupakan tempat persinggahan arwah setelah kematian. Danau yang satu dipercaya menjadi tempat arwah orang muda, danau lain untuk orang tua, dan danau ketiga untuk arwah orang yang semasa hidupnya berbuat jahat.",
      "Setiap tahun, masyarakat setempat mengadakan upacara adat Pati Ka di tepi danau sebagai bentuk penghormatan kepada para leluhur dan arwah yang dipercaya bersemayam di sana.",
      "Perubahan warna air danau hingga kini masih menjadi daya tarik ilmiah sekaligus spiritual, menjadikan Kelimutu sebagai salah satu tempat paling dihormati di Nusa Tenggara Timur."
    ],
    kuis: [
      { pertanyaan: "Apa yang unik dari tiga danau di Kelimutu?", pilihan: ["Selalu kering sepanjang tahun", "Warnanya dapat berubah-ubah", "Terletak di bawah laut", "Hanya ada satu warna tetap"], benar: 1 },
      { pertanyaan: "Menurut kepercayaan setempat, danau-danau itu dipercaya sebagai tempat apa?", pilihan: ["Persinggahan arwah setelah kematian", "Istana raja laut", "Tempat latihan prajurit", "Sumber mata air suci untuk pertanian"], benar: 0 }
    ]
  },
  {
    id: "putri-junjung-buih",
    judul: "Putri Junjung Buih",
    daerah: "Kalimantan Selatan",
    pulau: "kalimantan",
    kategori: "cerita",
    koordinat: { x: 44.3, y: 50.6 },
    sinopsis: "Putri yang muncul dari buih di sungai dan kelak menjadi ratu Negara Dipa.",
    isi: [
      "Kerajaan Negara Dipa di Kalimantan Selatan dahulu belum memiliki raja. Para pembesar kerajaan pun bersemedi memohon petunjuk agar diberikan seorang pemimpin.",
      "Petunjuk gaib mengarahkan mereka ke sebuah sungai, tempat muncul segumpal buih besar yang perlahan menjelma menjadi seorang bayi perempuan yang sangat elok rupanya. Bayi itu kemudian diberi nama Putri Junjung Buih.",
      "Putri Junjung Buih dibesarkan dengan penuh penghormatan oleh para petinggi kerajaan, dipercaya sebagai titisan yang dikirim secara gaib untuk memimpin Negara Dipa.",
      "Setelah dewasa, ia dinikahkan dengan Pangeran Suryanata dan bersama-sama memerintah Negara Dipa, menjadikan kisah kemunculannya sebagai asal-usul yang dihormati dalam sejarah kerajaan-kerajaan di tanah Banjar."
    ],
    kuis: [
      { pertanyaan: "Dari mana asal kemunculan Putri Junjung Buih?", pilihan: ["Dari dalam gua", "Dari buih di sungai", "Dari telur naga", "Dari bunga raksasa"], benar: 1 },
      { pertanyaan: "Siapa yang kemudian menjadi suami Putri Junjung Buih?", pilihan: ["Bandung Bondowoso", "Pangeran Suryanata", "Toar", "Sangkuriang"], benar: 1 }
    ]
  },
  {
    id: "toar-lumimuut",
    judul: "Toar dan Lumimuut",
    daerah: "Sulawesi Utara",
    pulau: "sulawesi",
    kategori: "cerita",
    koordinat: { x: 64.4, y: 30.6 },
    sinopsis: "Kisah dua leluhur yang dipercaya menurunkan orang Minahasa.",
    isi: [
      "Menurut legenda masyarakat Minahasa, Lumimuut adalah sosok wanita pertama yang muncul dari tanah setelah banjir besar melanda bumi. Ia berjalan ke arah timur mengikuti burung Manguni yang dipercaya sebagai pembawa petunjuk.",
      "Dalam perjalanannya, Lumimuut melahirkan seorang putra bernama Toar tanpa suami, sebagai keajaiban alam. Toar pun tumbuh menjadi pemuda kuat dan gagah.",
      "Tanpa mengetahui bahwa mereka adalah ibu dan anak, Toar dan Lumimuut kemudian dipertemukan kembali dan menikah, sesuai petunjuk gaib yang mereka terima masing-masing.",
      "Dari keturunan Toar dan Lumimuut inilah, menurut kepercayaan turun-temurun, suku Minahasa di Sulawesi Utara berasal, menjadikan keduanya leluhur yang sangat dihormati."
    ],
    kuis: [
      { pertanyaan: "Burung apa yang menjadi penunjuk arah bagi Lumimuut?", pilihan: ["Garuda", "Manguni", "Cenderawasih", "Merak"], benar: 1 },
      { pertanyaan: "Suku apa yang dipercaya berasal dari keturunan Toar dan Lumimuut?", pilihan: ["Minahasa", "Bugis", "Dayak", "Batak"], benar: 0 }
    ]
  },
  {
    id: "hainuwele",
    judul: "Hainuwele",
    daerah: "Maluku",
    pulau: "maluku",
    kategori: "cerita",
    koordinat: { x: 74.0, y: 53.8 },
    sinopsis: "Gadis ajaib dari Pulau Seram yang dalam mitos menjadi asal-usul umbi-umbian.",
    isi: [
      "Di Pulau Seram, seorang pemuda bernama Ameta menemukan buah kelapa ajaib yang tumbuh dari mayat babi hutan yang dibunuhnya. Dari pohon kelapa itu lahirlah seorang bayi perempuan yang diberi nama Hainuwele.",
      "Hainuwele memiliki kemampuan luar biasa: setiap kali buang air, ia mengeluarkan barang-barang berharga seperti piring antik dan gong. Hal ini membuat warga kampung terkagum sekaligus curiga.",
      "Karena iri dan takut akan kekuatannya, warga kampung bersepakat membunuh Hainuwele saat sebuah upacara adat berlangsung, lalu menguburkan tubuhnya di tengah tempat menari.",
      "Dari dalam kuburannya, tubuh Hainuwele berubah menjadi berbagai jenis tanaman umbi-umbian yang sebelumnya belum dikenal manusia, sehingga ia dipercaya sebagai asal mula tumbuhan umbi yang menjadi sumber makanan masyarakat Seram."
    ],
    kuis: [
      { pertanyaan: "Dari apa Hainuwele lahir menurut mitos ini?", pilihan: ["Telur burung", "Pohon kelapa ajaib", "Batu sungai", "Bunga raksasa"], benar: 1 },
      { pertanyaan: "Apa yang tumbuh dari kuburan Hainuwele?", pilihan: ["Pohon beringin", "Tanaman umbi-umbian", "Bunga bangkai", "Pohon kelapa baru"], benar: 1 }
    ]
  },
  {
    id: "asal-mula-danau-sentani",
    judul: "Asal Mula Danau Sentani",
    daerah: "Papua",
    pulau: "papua",
    kategori: "cerita",
    koordinat: { x: 96.9, y: 51.6 },
    sinopsis: "Kisah tentang terbentuknya Danau Sentani dari sebuah kampung yang dahulu berdiri di daratan.",
    isi: [
      "Menurut cerita turun-temurun masyarakat Sentani, dahulu kala kawasan yang kini menjadi danau adalah sebuah daratan luas tempat berdirinya sebuah kampung yang makmur.",
      "Suatu ketika, penduduk kampung tersebut dikenal mulai melupakan adat dan tidak lagi menghormati para leluhur maupun alam di sekitar mereka. Para tetua kampung berulang kali memperingatkan, namun peringatan itu diabaikan.",
      "Sebagai akibatnya, menurut kepercayaan setempat, datanglah bencana besar berupa air yang terus naik dan menggenangi seluruh daratan kampung tersebut, sehingga wilayah itu berubah menjadi danau luas yang kini dikenal sebagai Danau Sentani.",
      "Hingga kini, masyarakat Sentani memandang danau tersebut bukan sekadar sumber kehidupan dan mata pencaharian, tetapi juga sebagai pengingat pentingnya menjaga keseimbangan dengan alam dan menghormati adat leluhur."
    ],
    kuis: [
      { pertanyaan: "Menurut cerita ini, apa yang dahulu ada di tempat Danau Sentani sekarang?", pilihan: ["Lautan luas", "Sebuah kampung di daratan", "Gunung berapi", "Hutan kosong"], benar: 1 },
      { pertanyaan: "Apa pesan utama yang terkandung dalam cerita ini?", pilihan: ["Pentingnya berdagang antar kampung", "Pentingnya menghormati adat dan menjaga alam", "Cara membangun kapal", "Pentingnya bercocok tanam"], benar: 1 }
    ]
  },

  // ===== CANDI =====
  {
    id: "candi-borobudur",
    judul: "Candi Borobudur",
    daerah: "Jawa Tengah",
    pulau: "jawa",
    kategori: "candi",
    koordinat: { x: 33.8, y: 78.5 },
    sinopsis: "Candi Buddha terbesar di dunia, dibangun pada masa Dinasti Syailendra.",
    isi: [
      "Candi Borobudur adalah candi Buddha terbesar di dunia, dibangun sekitar abad ke-8 dan ke-9 Masehi pada masa Dinasti Syailendra di Jawa Tengah.",
      "Bangunan ini tersusun dari jutaan balok batu andesit yang disusun membentuk sembilan tingkat teras, melambangkan perjalanan manusia dari alam duniawi menuju pencerahan dalam ajaran Buddha.",
      "Dinding candi dihiasi ribuan relief yang menggambarkan ajaran Buddha, kehidupan masyarakat, dan kisah-kisah moral, menjadikan Borobudur sebagai salah satu warisan budaya dunia yang diakui UNESCO."
    ],
    kuis: [
      { pertanyaan: "Pada masa dinasti apa Candi Borobudur dibangun?", pilihan: ["Majapahit", "Syailendra", "Mataram Islam", "Sriwijaya"], benar: 1 },
      { pertanyaan: "Berapa jumlah tingkat teras utama Candi Borobudur?", pilihan: ["Lima", "Tujuh", "Sembilan", "Sebelas"], benar: 2 }
    ]
  },
  {
    id: "candi-muaro-jambi",
    judul: "Candi Muaro Jambi",
    daerah: "Jambi",
    pulau: "sumatra",
    kategori: "candi",
    koordinat: { x: 19.8, y: 45.5 },
    sinopsis: "Salah satu kompleks percandian Buddha terluas di Asia Tenggara, tepi Sungai Batanghari.",
    isi: [
      "Kompleks Candi Muaro Jambi merupakan salah satu situs percandian Buddha terluas di Asia Tenggara, terletak di tepi Sungai Batanghari, Jambi.",
      "Kawasan ini dipercaya pernah menjadi pusat pendidikan agama Buddha yang ramai dikunjungi para biksu dari berbagai penjuru Asia pada masa kejayaan Kerajaan Sriwijaya hingga Melayu Kuno.",
      "Hingga kini, penggalian arkeologis di Muaro Jambi masih terus dilakukan, dan kompleks ini dipercaya memiliki puluhan reruntuhan candi yang tersebar di area seluas ribuan hektare."
    ],
    kuis: [
      { pertanyaan: "Di tepi sungai apa kompleks Candi Muaro Jambi berada?", pilihan: ["Sungai Musi", "Sungai Batanghari", "Sungai Kapuas", "Sungai Mahakam"], benar: 1 },
      { pertanyaan: "Candi Muaro Jambi dahulu dipercaya menjadi pusat apa?", pilihan: ["Perdagangan rempah", "Pendidikan agama Buddha", "Pelatihan militer", "Pembuatan kapal"], benar: 1 }
    ]
  },

  // ===== TARIAN =====
  {
    id: "tari-kecak",
    judul: "Tari Kecak",
    daerah: "Bali",
    pulau: "nusa-tenggara",
    kategori: "tarian",
    koordinat: { x: 43.9, y: 85.1 },
    sinopsis: "Tarian khas Bali dengan seruan 'cak' bersahutan, biasa mengangkat kisah Ramayana.",
    isi: [
      "Tari Kecak adalah seni pertunjukan khas Bali yang menampilkan puluhan hingga ratusan penari pria duduk melingkar sambil menyerukan 'cak cak cak' berirama tanpa iringan alat musik.",
      "Pertunjukan ini biasanya mengangkat kisah Ramayana, khususnya adegan penyelamatan Dewi Shinta, dan dipadukan dengan gerakan tangan serta nyanyian yang menciptakan suasana magis.",
      "Tari Kecak awalnya dikembangkan pada tahun 1930-an dari ritual sanghyang, dan kini menjadi salah satu pertunjukan budaya paling dikenal dari Bali di mata dunia."
    ],
    kuis: [
      { pertanyaan: "Kisah apa yang biasa diangkat dalam pertunjukan Tari Kecak?", pilihan: ["Mahabharata", "Ramayana", "Panji", "Calon Arang"], benar: 1 },
      { pertanyaan: "Apa ciri khas suara dalam Tari Kecak?", pilihan: ["Gamelan lengkap", "Seruan 'cak cak cak' penari", "Suling tunggal", "Nyanyian solo"], benar: 1 }
    ]
  },
  {
    id: "tari-saman",
    judul: "Tari Saman",
    daerah: "Aceh",
    pulau: "sumatra",
    kategori: "tarian",
    koordinat: { x: 6.3, y: 16.1 },
    sinopsis: "Tarian kompak masyarakat Gayo, diakui UNESCO sebagai Warisan Budaya Takbenda.",
    isi: [
      "Tari Saman berasal dari masyarakat Gayo di Aceh, ditampilkan oleh sekelompok penari yang duduk berbanjar rapat sambil menepuk dada, paha, dan tangan secara serempak dan cepat.",
      "Gerakan yang kompak dan berirama tinggi ini melambangkan kebersamaan, kekompakan, serta nilai-nilai pendidikan dan keagamaan dalam masyarakat Gayo.",
      "Pada tahun 2011, UNESCO menetapkan Tari Saman sebagai Warisan Budaya Takbenda yang memerlukan perlindungan mendesak karena regenerasi penarinya yang semakin menurun."
    ],
    kuis: [
      { pertanyaan: "Tari Saman berasal dari masyarakat apa di Aceh?", pilihan: ["Gayo", "Alas", "Aceh pesisir", "Tamiang"], benar: 0 },
      { pertanyaan: "Lembaga apa yang menetapkan Tari Saman sebagai Warisan Budaya Takbenda?", pilihan: ["UNESCO", "PBB", "ASEAN", "UNICEF"], benar: 0 }
    ]
  },

  // ===== WAYANG: PUNAKAWAN =====
  {
    id: "semar",
    judul: "Semar",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Punakawan",
    sinopsis: "Tokoh paling dihormati dalam Punakawan, dipercaya sebagai dewa yang menitis menjadi pengasuh para ksatria.",
    isi: [
      "Semar adalah pemimpin para Punakawan, kelompok abdi setia yang mengasuh dan menasihati para ksatria dalam kisah pewayangan Jawa. Berbeda dengan dewa-dewa lain yang digambarkan gagah, Semar justru berwujud bulat, pendek, dan sederhana.",
      "Di balik penampilannya yang sederhana dan sering jadi sumber humor, Semar dipercaya sebagai penjelmaan dewa yang turun ke bumi untuk membimbing manusia menuju kebijaksanaan, bukan dengan kekuatan, melainkan dengan kearifan dan ketulusan hati.",
      "Semar mengajarkan bahwa kebijaksanaan sejati sering kali datang dari sosok yang tampak biasa dan rendah hati, bukan dari mereka yang terlihat megah dan berkuasa. Nilai inilah yang membuat Semar menjadi tokoh paling dicintai dalam budaya pewayangan Jawa."
    ],
    kuis: [
      { pertanyaan: "Apa peran utama Semar dalam kisah pewayangan?", pilihan: ["Raja kerajaan besar", "Pemimpin Punakawan, pengasuh para ksatria", "Panglima perang musuh", "Dalang pertunjukan"], benar: 1 },
      { pertanyaan: "Apa pesan filosofis utama dari tokoh Semar?", pilihan: ["Kekuatan fisik menentukan segalanya", "Kebijaksanaan sejati bisa datang dari sosok yang sederhana", "Kekayaan adalah ukuran kehormatan", "Keturunan bangsawan selalu benar"], benar: 1 }
    ]
  },
  {
    id: "gareng",
    judul: "Gareng",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Punakawan",
    sinopsis: "Putra sulung Semar dalam Punakawan, dikenal lewat sikap hati-hati dan kejujurannya.",
    isi: [
      "Gareng digambarkan sebagai sosok dengan kaki pincang dan mata juling, namun kekurangan fisik ini justru menjadi simbol bahwa penampilan luar bukan ukuran nilai seseorang.",
      "Dalam berbagai lakon, Gareng dikenal sebagai tokoh yang berhati-hati dalam bertindak dan berbicara, sering menjadi pengingat agar tidak gegabah dalam mengambil keputusan.",
      "Sifat jujur dan apa adanya membuat Gareng disukai penonton, karena ia berani menyuarakan kebenaran meski dengan cara yang sederhana dan kadang mengundang tawa."
    ],
    kuis: [
      { pertanyaan: "Apa ciri fisik khas yang digambarkan pada tokoh Gareng?", pilihan: ["Hidung panjang", "Kaki pincang dan mata juling", "Badan sangat tinggi", "Bertaring besar"], benar: 1 },
      { pertanyaan: "Sifat apa yang paling menonjol dari Gareng?", pilihan: ["Sombong dan pemarah", "Hati-hati dan jujur", "Licik dan curang", "Pemalas"], benar: 1 }
    ]
  },
  {
    id: "petruk",
    judul: "Petruk",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Punakawan",
    sinopsis: "Anggota Punakawan berhidung panjang, dikenal cerdas dan jenaka.",
    isi: [
      "Petruk mudah dikenali dari bentuk hidungnya yang panjang dan tubuhnya yang tinggi menjulang dibanding Punakawan lainnya, menjadikannya salah satu tokoh paling khas secara visual.",
      "Di balik penampilannya yang jenaka, Petruk dikenal sebagai sosok yang cerdas dan pandai berbicara, sering menjadi penengah dalam situasi sulit dengan kecerdikannya.",
      "Petruk kerap tampil sebagai tokoh yang mampu mengakali lawan atau situasi rumit melalui kelucuan dan kata-kata jenaka, menjadikannya simbol kecerdasan rakyat kecil dalam menghadapi persoalan hidup."
    ],
    kuis: [
      { pertanyaan: "Ciri fisik paling khas dari Petruk adalah?", pilihan: ["Hidung panjang", "Badan sangat pendek", "Bertanduk", "Berambut panjang"], benar: 0 },
      { pertanyaan: "Petruk dikenal sebagai simbol dari sifat apa?", pilihan: ["Kekuatan fisik", "Kecerdikan dan kecerdasan", "Keserakahan", "Kemalasan"], benar: 1 }
    ]
  },
  {
    id: "bagong",
    judul: "Bagong",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Punakawan",
    sinopsis: "Anggota termuda Punakawan, dipercaya lahir dari bayangan Semar sendiri.",
    isi: [
      "Dalam sebagian versi cerita, Bagong dipercaya tercipta dari bayangan Semar, sehingga wujudnya bulat dan pendek, mirip dengan sosok Semar sendiri namun dengan karakter yang lebih lugas.",
      "Bagong dikenal sebagai tokoh yang berbicara blak-blakan dan apa adanya, tanpa banyak basa-basi, sering menyuarakan hal-hal yang sebenarnya dipikirkan banyak orang namun jarang diucapkan secara terbuka.",
      "Melalui gaya bicaranya yang polos dan jenaka, Bagong kerap menjadi corong kritik sosial dalam pertunjukan wayang, menyampaikan sindiran ringan terhadap situasi di sekitar penonton."
    ],
    kuis: [
      { pertanyaan: "Menurut sebagian cerita, dari mana asal Bagong tercipta?", pilihan: ["Dari bayangan Semar", "Dari telur raksasa", "Dari batang bambu", "Dari buih sungai"], benar: 0 },
      { pertanyaan: "Apa yang menjadi ciri khas cara bicara Bagong?", pilihan: ["Sangat sopan dan berbelit", "Blak-blakan dan apa adanya", "Selalu diam", "Berbicara dalam bahasa asing"], benar: 1 }
    ]
  },
  { id: "togog", judul: "Togog", daerah: "Jawa", kategori: "wayang", kelompok: "Punakawan", sinopsis: "Punakawan yang mengabdi pada pihak raksasa, sering digambarkan sebagai penasihat yang nasihatnya jarang didengar." },
  { id: "bilung", judul: "Bilung", daerah: "Jawa", kategori: "wayang", kelompok: "Punakawan", sinopsis: "Punakawan pendamping Togog, mengabdi pada pihak Alengka dengan sifat jenaka." },

  // ===== WAYANG: KELUARGA AYODHYA DAN MANTILI =====
  {
    id: "sri-rama",
    judul: "Sri Ramawijaya",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Keluarga Ayodhya dan Mantili",
    sinopsis: "Pangeran Ayodhya yang menjadi titisan Wisnu, tokoh utama dalam epos Ramayana.",
    isi: [
      "Rama adalah putra sulung Prabu Dasarata, raja Ayodhya, yang dipercaya sebagai titisan Dewa Wisnu yang turun ke bumi untuk menumpas kejahatan.",
      "Karena permintaan salah satu ibu tirinya, Dewi Kekayi, Rama harus menjalani pengasingan selama empat belas tahun di hutan bersama istrinya Dewi Shinta dan adiknya Laksmana, meski sesungguhnya ia berhak atas takhta Ayodhya.",
      "Selama pengasingan, Dewi Shinta diculik oleh Rahwana, raja raksasa dari Alengka. Rama pun memimpin pasukan, termasuk bala tentara wanara pimpinan Anoman dan Sugriwa, untuk menyeberangi lautan dan membebaskan Shinta.",
      "Setelah mengalahkan Rahwana dalam pertempuran besar, Rama kembali ke Ayodhya dan dinobatkan sebagai raja. Kisahnya menjadi teladan tentang kesetiaan pada kebenaran, tanggung jawab, dan pengorbanan diri demi kewajiban."
    ],
    kuis: [
      { pertanyaan: "Rama dipercaya sebagai titisan dewa apa?", pilihan: ["Dewa Siwa", "Dewa Wisnu", "Dewa Brahma", "Dewa Indra"], benar: 1 },
      { pertanyaan: "Mengapa Rama harus menjalani pengasingan ke hutan?", pilihan: ["Melanggar hukum kerajaan", "Permintaan Dewi Kekayi kepada Prabu Dasarata", "Dikalahkan dalam sayembara", "Diusir oleh Rahwana"], benar: 1 }
    ]
  },
  {
    id: "dewi-shinta",
    judul: "Dewi Shinta",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Keluarga Ayodhya dan Mantili",
    sinopsis: "Istri setia Rama yang diculik Rahwana, tokoh sentral dalam kisah Ramayana.",
    isi: [
      "Dewi Shinta adalah putri Prabu Janaka, raja Mantili, yang menurut sebagian versi cerita ditemukan dari dalam bumi saat sang raja membajak sawah, sehingga dianggap sebagai titisan Dewi Sri.",
      "Shinta menikah dengan Rama setelah berhasil memenangkan sayembara memanah busur sakti, dan dengan setia mendampingi suaminya menjalani masa pengasingan di hutan.",
      "Ketika berada di hutan, Shinta diculik oleh Rahwana yang tertarik akan kecantikannya, dan dibawa ke kerajaan Alengka. Meski dibujuk dan diancam, Shinta tetap teguh menjaga kesetiaannya kepada Rama.",
      "Setelah Rama berhasil mengalahkan Rahwana dan membebaskannya, kesetiaan Shinta diuji lagi melalui upacara pembuktian kesucian. Kisah Shinta menjadi simbol kesetiaan dan keteguhan hati seorang istri dalam budaya Nusantara."
    ],
    kuis: [
      { pertanyaan: "Siapa yang menculik Dewi Shinta?", pilihan: ["Kumbakarna", "Rahwana", "Indrajit", "Patih Prahasta"], benar: 1 },
      { pertanyaan: "Dewi Shinta adalah putri dari raja mana?", pilihan: ["Prabu Dasarata dari Ayodhya", "Prabu Janaka dari Mantili", "Prabu Sugriwa dari Kiskenda", "Rahwana dari Alengka"], benar: 1 }
    ]
  },
  { id: "laksmana", judul: "Laksmana", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Adik setia Sri Rama yang mendampingi dalam pengasingan dan peperangan melawan Rahwana." },
  { id: "prabu-dasarata", judul: "Prabu Dasarata", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Raja Ayodhya, ayah dari Rama, Bharata, Laksmana, dan Satrughna." },
  { id: "bharata", judul: "Bharata", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Putra Prabu Dasarata yang memerintah Ayodhya mewakili Rama selama masa pengasingan." },
  { id: "satrughna", judul: "Satrughna", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Adik kembar Bharata, putra Dasarata yang setia menjaga kerajaan." },
  { id: "dewi-kausalya", judul: "Dewi Kausalya", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Permaisuri utama Prabu Dasarata dan ibu kandung Sri Rama." },
  { id: "dewi-kekayi", judul: "Dewi Kekayi", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Salah satu istri Prabu Dasarata yang permintaannya menyebabkan pengasingan Rama." },
  { id: "dewi-sumitra", judul: "Dewi Sumitra", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Istri Prabu Dasarata, ibu dari Laksmana dan Satrughna." },
  { id: "prabu-janaka", judul: "Prabu Janaka", daerah: "Jawa", kategori: "wayang", kelompok: "Keluarga Ayodhya dan Mantili", sinopsis: "Raja Mantili, ayah angkat Dewi Shinta yang ditemukan dari dalam bumi." },

  // ===== WAYANG: BANGSA BUTO DAN RAKSASA =====
  {
    id: "rahwana",
    judul: "Rahwana (Dasamuka)",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Bangsa Buto dan Raksasa",
    sinopsis: "Raja raksasa Alengka berkepala sepuluh, antagonis utama dalam kisah Ramayana.",
    isi: [
      "Rahwana, juga dikenal sebagai Dasamuka karena digambarkan memiliki sepuluh kepala, adalah raja kerajaan Alengka yang terkenal sangat sakti namun juga angkuh dan tamak akan kekuasaan.",
      "Berkat pertapaannya yang panjang, Rahwana memperoleh anugerah kesaktian luar biasa dari para dewa, yang membuatnya nyaris tak terkalahkan oleh bangsa dewa maupun raksasa lainnya.",
      "Kejatuhan Rahwana bermula ketika ia menculik Dewi Shinta karena terpikat kecantikannya, memicu peperangan besar dengan Rama dan pasukan wanara yang menyeberangi lautan menuju Alengka.",
      "Dalam pertempuran akhir, Rahwana tewas di tangan Rama. Kisahnya menjadi pengingat bahwa kesaktian dan kekuasaan tanpa dikendalikan oleh kebijaksanaan pada akhirnya akan membawa kehancuran."
    ],
    kuis: [
      { pertanyaan: "Mengapa Rahwana disebut juga Dasamuka?", pilihan: ["Memiliki sepuluh kepala", "Memiliki sepuluh anak", "Memerintah sepuluh kerajaan", "Berusia sepuluh windu"], benar: 0 },
      { pertanyaan: "Apa yang memicu peperangan besar antara Rahwana dan Rama?", pilihan: ["Perebutan takhta Ayodhya", "Penculikan Dewi Shinta", "Sengketa wilayah hutan", "Perlombaan memanah"], benar: 1 }
    ]
  },
  {
    id: "kumbakarna",
    judul: "Kumbakarna",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Bangsa Buto dan Raksasa",
    sinopsis: "Raksasa bertubuh besar, adik Rahwana yang tetap membela negaranya meski menentang kejahatan kakaknya.",
    isi: [
      "Kumbakarna adalah adik Rahwana yang digambarkan memiliki tubuh sangat besar dan terkenal karena kebiasaannya tidur dalam waktu yang sangat lama akibat kutukan para dewa.",
      "Berbeda dengan Rahwana, Kumbakarna sebenarnya tidak menyetujui tindakan kakaknya menculik Dewi Shinta, dan sempat menasihatinya agar mengembalikan Shinta kepada Rama demi menghindari peperangan.",
      "Meski demikian, ketika perang benar-benar pecah, Kumbakarna memilih untuk tetap membela Alengka dan keluarganya, karena baginya kesetiaan pada negeri dan keluarga tetap harus diutamakan walau ia tidak membenarkan kesalahan kakaknya.",
      "Kumbakarna gugur di medan perang melawan pasukan Rama. Tokohnya sering dimaknai sebagai simbol dilema moral antara kesetiaan keluarga dan prinsip kebenaran."
    ],
    kuis: [
      { pertanyaan: "Apa sikap Kumbakarna terhadap tindakan Rahwana menculik Shinta?", pilihan: ["Mendukung penuh", "Tidak menyetujui, tapi tetap membela negaranya saat perang", "Tidak peduli sama sekali", "Melaporkan ke Rama"], benar: 1 },
      { pertanyaan: "Kumbakarna dikenal karena kebiasaan apa?", pilihan: ["Tidur sangat lama", "Berburu setiap hari", "Bertapa di gunung", "Berkelana ke berbagai negeri"], benar: 0 }
    ]
  },
  { id: "sarpakenaka", judul: "Sarpakenaka", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Adik perempuan Rahwana yang hidungnya dipotong Laksmana, memicu kemarahan Alengka." },
  { id: "patih-prahasta", judul: "Patih Prahasta", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Patih kerajaan Alengka yang gugur dalam pertempuran melawan pasukan wanara." },
  { id: "indrajit", judul: "Indrajit (Megananda)", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Putra Rahwana yang terkenal sakti dan mampu menghilang di medan perang." },
  { id: "trisirah", judul: "Trisirah", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa berkepala tiga, salah satu panglima kerajaan Alengka." },
  { id: "atikaya", judul: "Atikaya", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Putra Rahwana yang dikenal sangat kuat dalam pertempuran." },
  { id: "narantaka", judul: "Narantaka", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit Alengka yang tewas di tangan pasukan wanara." },
  { id: "dewantaka", judul: "Dewantaka", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit Alengka, saudara Narantaka." },
  { id: "bukbis", judul: "Bukbis", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa penjaga di kerajaan Alengka." },
  { id: "kala-marica", judul: "Kala Marica", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa yang menyamar menjadi kijang emas untuk memancing Dewi Shinta." },
  { id: "subahu", judul: "Subahu", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa yang mengganggu pertapaan para resi di hutan." },
  { id: "viradha", judul: "Viradha", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa penghuni hutan yang menghadang Rama dan Laksmana dalam pengasingan." },
  { id: "kabandha", judul: "Kabandha", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa berkepala di perut yang dahulu dikutuk menjadi wujud mengerikan." },
  { id: "kala-khara", judul: "Kala Khara", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa panglima yang menyerang pertapaan Rama di hutan." },
  { id: "kala-dusana", judul: "Kala Dusana", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa, saudara Kala Khara yang turut menyerang tempat pengasingan Rama." },
  { id: "kala-suranimitta", judul: "Kala Suranimitta", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit dalam pasukan Alengka." },
  { id: "kala-wisungkara", judul: "Kala Wisungkara", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit dalam pasukan Alengka." },
  { id: "wil-kataksini", judul: "Wil Kataksini", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasi penjaga taman Argasoka, tempat Dewi Shinta ditahan." },
  { id: "pratangga", judul: "Pratangga", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit dalam barisan pasukan Alengka." },
  { id: "kala-ditya", judul: "Kala Ditya", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Buto dan Raksasa", sinopsis: "Raksasa prajurit dalam barisan pasukan Rahwana." },
  {
    id: "buto-cakil",
    judul: "Buto Cakil",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Bangsa Buto dan Raksasa",
    sinopsis: "Tokoh raksasa kecil bertaring dalam wayang, terkenal lewat adegan perang kembang.",
    isi: [
      "Buto Cakil adalah salah satu tokoh raksasa (buto) paling populer dalam pewayangan Jawa, digambarkan bertubuh kecil namun bertaring tajam dan bersifat sangat agresif.",
      "Tokoh ini paling dikenal lewat adegan 'perang kembang', pertarungan khas antara raksasa dan ksatria (sering kali Arjuna) yang diiringi gerakan tari cepat dan dinamis, menjadi salah satu bagian paling dinanti penonton dalam pertunjukan wayang kulit.",
      "Meski tampil garang dan menyerang lebih dulu, Buto Cakil hampir selalu kalah dalam pertarungan, melambangkan pesan moral bahwa sikap sombong dan mengandalkan kekuatan kasar pada akhirnya akan kalah oleh kebijaksanaan dan ketenangan."
    ],
    kuis: [
      { pertanyaan: "Buto Cakil paling dikenal lewat adegan apa?", pilihan: ["Perang kembang", "Upacara pernikahan", "Sidang kerajaan", "Perburuan rusa"], benar: 0 },
      { pertanyaan: "Apa pesan moral yang terkandung dari kekalahan Buto Cakil dalam pertarungan?", pilihan: ["Kekuatan kasar selalu menang", "Kesombongan pada akhirnya kalah oleh kebijaksanaan", "Raksasa selalu jadi pahlawan", "Pertarungan tidak penting"], benar: 1 }
    ]
  },

  // ===== WAYANG: BANGSA WANARA =====
  {
    id: "anoman",
    judul: "Anoman (Hanoman)",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Bangsa Wanara",
    sinopsis: "Kera putih sakti, putra Batara Bayu, dikenal karena kesetiaan dan kehebatannya membantu Rama.",
    isi: [
      "Anoman, yang juga dikenal sebagai Hanoman, adalah kera putih sakti yang dipercaya merupakan putra Batara Bayu, dewa angin, sehingga memiliki kekuatan luar biasa termasuk kemampuan terbang dan mengubah ukuran tubuhnya.",
      "Anoman menjadi utusan kepercayaan Rama, berhasil menyeberangi lautan menuju Alengka untuk menemukan keberadaan Dewi Shinta dan menyampaikan pesan dari Rama sebagai tanda harapan.",
      "Dalam pertempuran besar melawan Alengka, Anoman menunjukkan kesetiaan dan keberanian luar biasa, termasuk membakar sebagian kerajaan Alengka setelah ditangkap dan ekornya disulut api oleh pasukan Rahwana.",
      "Anoman dikenal luas sebagai simbol kesetiaan, keberanian, dan pengabdian tanpa pamrih, dan menjadi salah satu tokoh pewayangan paling dicintai di Nusantara."
    ],
    kuis: [
      { pertanyaan: "Anoman dipercaya sebagai putra dewa apa?", pilihan: ["Batara Guru", "Batara Bayu", "Batara Indra", "Batara Surya"], benar: 1 },
      { pertanyaan: "Apa peran penting Anoman dalam mencari Dewi Shinta?", pilihan: ["Menjadi raja sementara Alengka", "Menyeberangi lautan dan menemukan keberadaan Shinta", "Menikahi Shinta", "Membangun istana baru"], benar: 1 }
    ]
  },
  {
    id: "sugriwa",
    judul: "Sugriwa",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Bangsa Wanara",
    sinopsis: "Raja kerajaan wanara Kiskenda, sekutu penting Rama dalam menyerang Alengka.",
    isi: [
      "Sugriwa adalah raja kerajaan wanara (kera) di Kiskenda, yang sebelumnya terlibat perselisihan dengan kakaknya sendiri, Subali, akibat kesalahpahaman tentang pertarungan melawan raksasa.",
      "Setelah Subali meninggal dalam konflik tersebut dengan bantuan Rama, Sugriwa naik takhta menjadi raja Kiskenda, dan sebagai balas budi ia berjanji membantu Rama mencari Dewi Shinta.",
      "Sugriwa mengerahkan seluruh pasukan wanaranya, termasuk Anoman dan Anggada, untuk mencari keberadaan Shinta ke berbagai penjuru dan kemudian ikut berperang melawan Alengka.",
      "Kepemimpinan dan kesetiaan Sugriwa terhadap janjinya menjadikannya salah satu sekutu terpenting dalam kemenangan Rama melawan Rahwana."
    ],
    kuis: [
      { pertanyaan: "Sugriwa adalah raja dari kerajaan wanara mana?", pilihan: ["Alengka", "Kiskenda", "Mantili", "Ayodhya"], benar: 1 },
      { pertanyaan: "Mengapa Sugriwa bersedia membantu Rama?", pilihan: ["Diancam oleh Rama", "Sebagai balas budi karena Rama membantunya menjadi raja", "Diperintah oleh para dewa", "Ingin menguasai Alengka"], benar: 1 }
    ]
  },
  { id: "subali", judul: "Subali", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Raja wanara Gua Kiskenda, kakak Sugriwa yang tewas akibat kesalahpahaman dengan Rama." },
  { id: "anggada", judul: "Anggada", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Putra Subali, pangeran wanara yang ikut dalam pasukan penyerbu Alengka." },
  { id: "anila", judul: "Anila", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Panglima wanara, salah satu pemimpin pasukan dalam penyerbuan Alengka." },
  { id: "jambawan", judul: "Jambawan", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Wanara sepuh dan bijaksana, penasihat dalam pasukan Rama." },
  { id: "nala", judul: "Nala", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Wanara arsitek yang memimpin pembangunan jembatan menuju Alengka." },
  { id: "nila", judul: "Nila", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Panglima wanara yang turut membangun jembatan dan berperang di Alengka." },
  { id: "kapi-dwimukha", judul: "Kapi Dwimukha", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Prajurit wanara dalam pasukan Sugriwa." },
  { id: "kapi-vindha", judul: "Kapi Vindha", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Prajurit wanara dalam pasukan Sugriwa." },
  { id: "kapi-jenda", judul: "Kapi Jenda", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Prajurit wanara dalam pasukan Sugriwa." },
  { id: "kapi-sraba", judul: "Kapi Sraba", daerah: "Jawa", kategori: "wayang", kelompok: "Bangsa Wanara", sinopsis: "Prajurit wanara dalam pasukan Sugriwa." },

  // ===== WAYANG: DEWA DAN RESI =====
  {
    id: "batara-guru",
    judul: "Batara Guru",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Dewa dan Resi",
    sinopsis: "Raja para dewa dalam kahyangan pewayangan Jawa, pemimpin tertinggi jagat dewata.",
    isi: [
      "Batara Guru adalah sosok dewa tertinggi dalam kosmologi pewayangan Jawa, dipercaya sebagai raja kahyangan yang memimpin dan mengatur seluruh dewa serta alam semesta.",
      "Dalam berbagai lakon, Batara Guru sering turun tangan memberikan titah, anugerah, atau hukuman kepada para dewa maupun manusia, termasuk mengutus titisan dewa untuk membantu dunia yang sedang dilanda kekacauan.",
      "Batara Guru juga digambarkan memiliki banyak putra dewa lain seperti Batara Narada dan Batara Brahma, yang masing-masing memiliki peran dan tugas berbeda dalam menjaga keseimbangan kahyangan dan dunia."
    ],
    kuis: [
      { pertanyaan: "Apa peran Batara Guru dalam kosmologi pewayangan Jawa?", pilihan: ["Patih kerajaan Alengka", "Raja tertinggi para dewa di kahyangan", "Raja wanara", "Resi pertapa di hutan"], benar: 1 },
      { pertanyaan: "Siapa salah satu putra Batara Guru yang disebutkan sering menjadi penyampai pesan dewa?", pilihan: ["Batara Narada", "Rahwana", "Anoman", "Prabu Janaka"], benar: 0 }
    ]
  },
  { id: "batara-narada", judul: "Batara Narada", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa penyampai pesan para dewa, sering menjadi penengah dalam kisah pewayangan." },
  { id: "batara-bayu", judul: "Batara Bayu", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa angin, dipercaya sebagai ayah dari Anoman." },
  { id: "batara-surya", judul: "Batara Surya", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa matahari dalam jajaran dewa pewayangan." },
  { id: "batara-indra", judul: "Batara Indra", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa penguasa langit dan hujan, raja kahyangan." },
  { id: "batara-brahma", judul: "Batara Brahma", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa pencipta dalam jajaran dewa pewayangan." },
  { id: "batara-yamadipati", judul: "Batara Yamadipati", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Dewa penguasa kematian dan akhirat." },
  { id: "resi-wiswamitra", judul: "Resi Wiswamitra", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Resi sakti yang membimbing Rama dan Laksmana sejak muda." },
  { id: "resi-gotama", judul: "Resi Gotama", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Resi yang dikenal dalam kisah asal-usul Dewi Anjani dan Anoman." },
  { id: "resi-agastya", judul: "Resi Agastya", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Resi bijaksana yang memberi nasihat dan senjata sakti kepada Rama." },
  { id: "dewi-anjani", judul: "Dewi Anjani", daerah: "Jawa", kategori: "wayang", kelompok: "Dewa dan Resi", sinopsis: "Bidadari yang dikutuk menjadi wanara, dipercaya sebagai ibu Anoman." },

  // ===== WAYANG: SEKUTU DAN SATWA SAKTI =====
  {
    id: "wibisana",
    judul: "Gunawan Wibisana",
    daerah: "Jawa",
    kategori: "wayang",
    kelompok: "Sekutu dan Satwa Sakti",
    sinopsis: "Adik Rahwana yang memilih membela kebenaran dan bergabung dengan pihak Rama.",
    isi: [
      "Wibisana adalah adik bungsu Rahwana yang memiliki watak jauh berbeda dari kakaknya, dikenal bijaksana dan selalu berpegang pada nilai kebenaran.",
      "Ketika Rahwana menculik Dewi Shinta, Wibisana berulang kali menasihati agar Shinta dikembalikan kepada Rama untuk mencegah bencana bagi Alengka, namun nasihatnya ditolak dan ia justru diusir dari kerajaan.",
      "Wibisana kemudian memilih bergabung dengan pihak Rama, memberikan informasi penting tentang kelemahan dan strategi pertahanan Alengka yang sangat membantu kemenangan pasukan Rama.",
      "Setelah Rahwana gugur, Wibisana dinobatkan sebagai raja Alengka yang baru, menjadikannya simbol bahwa keberanian mengambil sikap yang benar akan membawa kebaikan, meski harus berhadapan dengan keluarga sendiri."
    ],
    kuis: [
      { pertanyaan: "Mengapa Wibisana diusir dari Alengka?", pilihan: ["Mencuri harta kerajaan", "Menasihati Rahwana agar mengembalikan Shinta", "Kalah berperang", "Menolak menjadi raja"], benar: 1 },
      { pertanyaan: "Apa yang terjadi pada Wibisana setelah Rahwana gugur?", pilihan: ["Diasingkan selamanya", "Dinobatkan menjadi raja Alengka yang baru", "Kembali ke hutan", "Menjadi pertapa"], benar: 1 }
    ]
  },
  { id: "peksi-jatayu", judul: "Peksi Jatayu", daerah: "Jawa", kategori: "wayang", kelompok: "Sekutu dan Satwa Sakti", sinopsis: "Burung raksasa sakti yang gugur saat berusaha menyelamatkan Dewi Shinta dari Rahwana." },
  { id: "peksi-sempati", judul: "Peksi Sempati", daerah: "Jawa", kategori: "wayang", kelompok: "Sekutu dan Satwa Sakti", sinopsis: "Kakak Jatayu, burung sakti yang membantu pasukan wanara menemukan keberadaan Shinta." },
  { id: "sayempraba", judul: "Sayempraba", daerah: "Jawa", kategori: "wayang", kelompok: "Sekutu dan Satwa Sakti", sinopsis: "Bidadari penghuni gua ajaib yang membantu pasukan wanara dalam perjalanan mereka." },

  // ===== KERIS: PENGENALAN =====
  {
    id: "keris-jawa",
    judul: "Keris Jawa",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Mengenal Keris",
    sinopsis: "Senjata tikam tradisional berbilah asimetris, diakui UNESCO sebagai warisan budaya dunia.",
    isi: [
      "Keris adalah senjata tikam tradisional berbilah asimetris yang menjadi simbol budaya penting di Jawa dan beberapa wilayah Nusantara lainnya, dibuat oleh pandai besi yang disebut empu.",
      "Proses pembuatan keris melibatkan penempaan lapisan logam berulang kali (pamor), sehingga menghasilkan corak unik pada bilahnya yang dipercaya memiliki makna filosofis dan spiritual tersendiri.",
      "Pada tahun 2005, UNESCO menetapkan keris Indonesia sebagai Mahakarya Warisan Budaya Lisan dan Nonbendawi Manusia, mengakui nilai seni, sejarah, dan spiritual yang dikandungnya."
    ],
    kuis: [
      { pertanyaan: "Sebutan untuk pembuat keris adalah?", pilihan: ["Dalang", "Empu", "Sinden", "Pawang"], benar: 1 },
      { pertanyaan: "Corak unik pada bilah keris akibat penempaan lapisan logam disebut?", pilihan: ["Pamor", "Wayang", "Gending", "Blencong"], benar: 0 }
    ]
  },
  {
    id: "keris-bugis",
    judul: "Keris Bugis",
    daerah: "Sulawesi Selatan",
    kategori: "keris",
    kelompok: "Mengenal Keris",
    sinopsis: "Varian keris khas masyarakat Bugis, melambangkan status sosial dan kehormatan keluarga.",
    isi: [
      "Keris Bugis adalah varian keris khas masyarakat Bugis di Sulawesi Selatan, dikenal dengan bentuk bilah dan gagang yang memiliki ciri estetika berbeda dari keris Jawa.",
      "Bagi masyarakat Bugis, keris bukan sekadar senjata, melainkan juga pusaka yang menandakan status sosial, kehormatan keluarga, serta sering diwariskan turun-temurun sebagai benda sakral.",
      "Keris Bugis juga kerap digunakan dalam upacara adat dan pernikahan, melambangkan keberanian serta tanggung jawab seorang laki-laki Bugis terhadap keluarga dan masyarakatnya."
    ],
    kuis: [
      { pertanyaan: "Keris Bugis berasal dari daerah mana?", pilihan: ["Sulawesi Selatan", "Kalimantan Timur", "Maluku Utara", "Nusa Tenggara Barat"], benar: 0 },
      { pertanyaan: "Selain senjata, keris Bugis juga melambangkan apa bagi pemiliknya?", pilihan: ["Status sosial dan kehormatan keluarga", "Jabatan pemerintahan", "Kekayaan material semata", "Keahlian berdagang"], benar: 0 }
    ]
  },
  {
    id: "keris-istilah-dasar",
    judul: "Istilah Dasar Keris",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Mengenal Keris",
    sinopsis: "Memahami dapur, luk, dan ricikan, tiga istilah kunci untuk membaca bentuk bilah keris.",
    isi: [
      "Keris dikenal lewat penamaan bentuk bilahnya yang disebut dapur. Dapur ditentukan oleh dua hal: jumlah luk (kelokan pada bilah) dan kombinasi ricikan, yaitu detail ornamen pada bilah.",
      "Bilah yang tidak berkelok disebut lurus, sedangkan bilah berkelok memiliki luk dalam jumlah ganjil, mulai dari tiga hingga belasan. Bilah dengan luk lebih dari tiga belas sering digolongkan sebagai kalawija. Beberapa ricikan yang sering disebut antara lain kembang kacang, pejetan, sogokan, lambe gajah, dan tikel alis.",
      "Setiap dapur dipercaya memiliki makna filosofis, misalnya ketenangan, keberanian, atau kepemimpinan. Bilahnya ditempa oleh seorang empu dan dihiasi corak pamor dari lapisan logam, sehingga tidak ada dua keris yang benar-benar sama."
    ],
    kuis: [
      { pertanyaan: "Apa yang dimaksud dengan dapur pada keris?", pilihan: ["Sarung keris", "Nama bentuk bilah berdasarkan jumlah luk dan ricikan", "Nama pembuat keris", "Upacara pembersihan keris"], benar: 1 },
      { pertanyaan: "Apa yang dimaksud dengan luk?", pilihan: ["Gagang keris", "Corak pada bilah", "Kelokan pada bilah keris", "Sarung keris"], benar: 2 }
    ]
  },

  // ===== KERIS: DAPUR BILAH LURUS =====
  { id: "keris-betok", judul: "Betok", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Bilah lebar dan pendek dengan gandik lugas. Melambangkan ketenangan jiwa dan pengayoman." },
  { id: "keris-brojol", judul: "Brojol", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Bilah sederhana dengan gandik lugas dan pejetan. Melambangkan kelancaran rezeki dan kemudahan hidup." },
  { id: "keris-tilam-urip", judul: "Tilam Urip", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Bilah sedang dengan gandik lugas dan pejetan. Melambangkan keharmonisan dan ketenteraman hidup." },
  { id: "keris-tilam-sari", judul: "Tilam Sari", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Gandik lugas, pejetan, dan tikel alis. Melambangkan ketenangan dan kebahagiaan keluarga." },
  { id: "keris-jalak-sanggabhuana", judul: "Jalak Sanggabhuana", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Pejetan, tikel alis, dan sraweyan. Melambangkan keluhuran derajat dan kehormatan." },
  { id: "keris-jalak-ngore", judul: "Jalak Ngore", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Kembang kacang, pejetan, dan tikel alis. Melambangkan kegigihan dan semangat kerja keras." },
  { id: "keris-jalak-sumelang-gandring", judul: "Jalak Sumelang Gandring", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Kembang kacang, sraweyan, dan pejetan. Melambangkan ketenangan hati saat menghadapi ujian." },
  {
    id: "keris-pasopati",
    judul: "Pasopati",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Dapur Keris Bilah Lurus",
    sinopsis: "Dapur berbilah lurus dengan kembang kacang, pejetan, tikel alis, dan sogokan. Melambangkan kepemimpinan tegas dan kelurusan moral.",
    isi: [
      "Pasopati termasuk dapur keris berbilah lurus, tanpa luk. Ricikannya antara lain kembang kacang, pejetan, tikel alis, dan sogokan.",
      "Bilah lurus sering dimaknai sebagai simbol kelurusan hati dan pendirian yang teguh. Karena itu Pasopati dikaitkan dengan kepemimpinan yang tegas dan moral yang lurus.",
      "Nama Pasopati juga dikenal dalam dunia pewayangan sebagai nama senjata sakti milik Arjuna, sehingga dapur ini sering dikaitkan dengan ketangkasan seorang ksatria."
    ],
    kuis: [
      { pertanyaan: "Pasopati termasuk dapur keris dengan bentuk bilah apa?", pilihan: ["Luk lima", "Lurus (tanpa luk)", "Luk sembilan", "Luk tiga belas"], benar: 1 },
      { pertanyaan: "Apa makna filosofis Pasopati?", pilihan: ["Kepemimpinan tegas dan kelurusan moral", "Kemudahan rezeki", "Ketenangan saat berduka", "Keharmonisan keluarga"], benar: 0 }
    ]
  },
  { id: "keris-kebo-lajer", judul: "Kebo Lajer", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Bilah lebar dan tebal dengan gandik lugas. Melambangkan ketahanan fisik dan kekuatan bertani." },
  { id: "keris-kebo-giri", judul: "Kebo Giri", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Bilah lebar dengan pejetan dan tikel alis. Melambangkan kesejahteraan dan kelimpahan hasil bumi." },
  { id: "keris-karna-tinanding", judul: "Karna Tinanding", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Dua kembang kacang berhadapan di pangkal bilah. Melambangkan keadilan dan keseimbangan sifat." },
  { id: "keris-panji-semerang", judul: "Panji Semerang", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Kembang kacang dan dua lambe gajah. Melambangkan kewibawaan dan daya pikat sosial." },
  { id: "keris-bale-bandung", judul: "Bale Bandung", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Sogokan rangkap hingga tengah bilah. Melambangkan kestabilan posisi dan kedudukan." },
  { id: "keris-regol", judul: "Regol", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Gandik miring dengan pejetan sederhana. Melambangkan perlindungan dari marabahaya." },
  { id: "keris-sepang", judul: "Sepang", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Bilah Lurus", sinopsis: "Ujung bilah terbelah dua secara simetris. Melambangkan persatuan dan keharmonisan hubungan." },

  // ===== KERIS: DAPUR LUK 3 DAN LUK 5 =====
  { id: "keris-jangkung", judul: "Jangkung", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk tiga dengan kembang kacang dan pejetan. Melambangkan cita-cita tinggi dan harapan hidup." },
  { id: "keris-jangkung-mayang", judul: "Jangkung Mayang", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk tiga dengan kembang kacang dan satu lambe gajah. Melambangkan kemakmuran dan dorongan sukses." },
  { id: "keris-jangkung-mangkurat", judul: "Jangkung Mangkurat", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk tiga dengan kembang kacang, dua lambe gajah, dan sogokan. Melambangkan pengayoman wilayah dan kewibawaan." },
  { id: "keris-campur-bawur", judul: "Campur Bawur", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk tiga dengan gandik lugas dan pejetan sederhana. Melambangkan keluwesan beradaptasi di masyarakat." },
  { id: "keris-pandawa-lare", judul: "Pandawa Lare", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk lima dengan kembang kacang dan pejetan. Melambangkan kejujuran dan ketulusan hati." },
  { id: "keris-pandawa-cinarita", judul: "Pandawa Cinarita", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk lima dengan kembang kacang dan satu lambe gajah. Melambangkan kebijaksanaan dan keadilan." },
  { id: "keris-pulanggeni", judul: "Pulanggeni", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk lima dengan kembang kacang, pejetan, dan tikel alis. Melambangkan kesetiaan dan kerendahan hati." },
  {
    id: "keris-anoman",
    judul: "Anoman",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Dapur Keris Luk 3 dan Luk 5",
    sinopsis: "Luk lima dengan kembang kacang, dua lambe gajah, dan sogokan. Melambangkan ketangkasan dan keteguhan janji.",
    isi: [
      "Anoman adalah dapur keris berluk lima dengan ricikan kembang kacang, lambe gajah dua, dan sogokan.",
      "Namanya diambil dari tokoh kera putih dalam Ramayana, yang dikenal setia dan tangkas. Karena itu dapur ini dimaknai sebagai simbol ketangkasan dan keteguhan menepati janji.",
      "Hubungan antara keris dan wayang ini menunjukkan bagaimana berbagai ragam budaya Nusantara saling terhubung. Kisah tokoh Anoman bisa kamu baca di galeri Wayang."
    ],
    kuis: [
      { pertanyaan: "Dapur Anoman memiliki berapa luk?", pilihan: ["Tiga", "Lima", "Tujuh", "Sembilan"], benar: 1 },
      { pertanyaan: "Dari tokoh apa nama dapur Anoman diambil?", pilihan: ["Kera putih dalam Ramayana", "Raja raksasa Alengka", "Dewa matahari", "Pandai besi sakti"], benar: 0 }
    ]
  },
  { id: "keris-kebo-dengen", judul: "Kebo Dengen", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 3 dan Luk 5", sinopsis: "Luk lima dengan bilah lebar tebal dan pejetan. Melambangkan kekuatan fisik dan benteng perlindungan." },

  // ===== KERIS: DAPUR LUK 7 DAN LUK 9 =====
  {
    id: "keris-singa-barong",
    judul: "Singa Barong",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Dapur Keris Luk 7 dan Luk 9",
    sinopsis: "Luk tujuh dengan ukiran figur singa di gandik bilah. Melambangkan keberanian, kekuasaan, dan keagungan.",
    isi: [
      "Singa Barong adalah dapur keris berluk tujuh yang ditandai dengan ukiran figur singa pada bagian gandik bilah.",
      "Figur singa melambangkan keberanian, kekuasaan, dan keagungan. Karena ukirannya yang menonjol, dapur ini termasuk yang mudah dikenali di antara dapur-dapur lain.",
      "Nama singa barong juga dikenal dalam kesenian rakyat seperti reog, sehingga namanya terasa akrab di telinga banyak orang."
    ],
    kuis: [
      { pertanyaan: "Apa ciri khas dapur Singa Barong?", pilihan: ["Bilah lurus tanpa hiasan", "Ukiran figur singa di gandik bilah", "Sembilan kelokan rapat", "Dua kembang kacang berhadapan"], benar: 1 },
      { pertanyaan: "Figur singa pada dapur ini melambangkan?", pilihan: ["Ketenangan keluarga", "Kemudahan menuntut ilmu", "Keberanian, kekuasaan, dan keagungan", "Kelincahan menghadapi hambatan"], benar: 2 }
    ]
  },
  { id: "keris-megantara", judul: "Megantara", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk tujuh yang berada di pangkal, sedangkan bagian atas bilah lurus. Melambangkan wawasan luas dan kewibawaan raja." },
  { id: "keris-carita-keprabon", judul: "Carita Keprabon", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk tujuh dengan kembang kacang dan sogokan rangkap. Melambangkan kepemimpinan mulia dan kejayaan." },
  { id: "keris-jaran-guyang", judul: "Jaran Guyang", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk tujuh dengan kembang kacang dan pejetan. Melambangkan daya pikat dan keharmonisan sosial." },
  { id: "keris-sempana", judul: "Sempana", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk sembilan dengan kembang kacang dan satu lambe gajah. Melambangkan kemudahan dalam menuntut ilmu." },
  { id: "keris-jaruman", judul: "Jaruman", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk sembilan dengan kembang kacang dan pejetan sederhana. Melambangkan ketelitian dan kecerdasan mengatur strategi." },
  { id: "keris-kidang-soka", judul: "Kidang Soka", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk sembilan dengan kembang kacang, tikel alis, dan sraweyan. Melambangkan ketenangan dalam menghadapi duka." },
  { id: "keris-kidang-mas", judul: "Kidang Mas", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk sembilan dengan kembang kacang dan dua lambe gajah. Melambangkan keberuntungan dan kemudahan rezeki." },
  { id: "keris-buto-ijo", judul: "Buto Ijo", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 7 dan Luk 9", sinopsis: "Luk sembilan dengan gandik lugas dan pejetan panjang. Melambangkan penjaga keselamatan dan penolak bala." },

  // ===== KERIS: DAPUR LUK 11, LUK 13, DAN KALAWIJA =====
  { id: "keris-sabuk-inten", judul: "Sabuk Inten", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Dengan kembang kacang, dua lambe gajah, dan sogokan. Melambangkan kejayaan ekonomi dan kemakmuran." },
  { id: "keris-carita-daleman", judul: "Carita Daleman", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk sebelas dengan kembang kacang dan satu lambe gajah. Melambangkan keluhuran budi dan ketenangan batin." },
  { id: "keris-santan", judul: "Santan", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk sebelas dengan kembang kacang dan pejetan. Melambangkan kemurnian niat dan kebersihan hati." },
  {
    id: "keris-sengkelat",
    judul: "Sengkelat",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija",
    sinopsis: "Luk tiga belas dengan kembang kacang, satu lambe gajah, dan tikel alis. Melambangkan pengayoman rakyat dan kebijaksanaan.",
    isi: [
      "Sengkelat adalah dapur keris berluk tiga belas dengan ricikan kembang kacang, lambe gajah satu, dan tikel alis.",
      "Luk yang banyak membuat bilahnya tampak meliuk anggun. Dapur ini dimaknai sebagai simbol pengayoman rakyat dan kebijaksanaan seorang pemimpin.",
      "Sengkelat termasuk dapur luk tiga belas yang cukup dikenal, bersama Nogososro dan Naga Siluman yang juga ada di halaman ini."
    ],
    kuis: [
      { pertanyaan: "Berapa luk pada dapur Sengkelat?", pilihan: ["Lima", "Sembilan", "Sebelas", "Tiga belas"], benar: 3 },
      { pertanyaan: "Apa makna filosofis Sengkelat?", pilihan: ["Pengayoman rakyat dan kebijaksanaan", "Keharmonisan keluarga", "Ketahanan bertani", "Kemudahan rezeki"], benar: 0 }
    ]
  },
  {
    id: "keris-nogososro",
    judul: "Nogososro",
    daerah: "Jawa",
    kategori: "keris",
    kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija",
    sinopsis: "Luk tiga belas dengan ukiran naga bermahkota di gandik bilah. Melambangkan kekuasaan tertinggi dan kepemimpinan.",
    isi: [
      "Nogososro adalah dapur keris berluk tiga belas dengan ukiran naga bermahkota pada gandik bilah.",
      "Naga bermahkota melambangkan kekuasaan tertinggi, sehingga dapur ini dimaknai sebagai simbol kepemimpinan.",
      "Ukiran naga membuat dapur ini tergolong istimewa karena memadukan bentuk bilah dengan seni pahat."
    ],
    kuis: [
      { pertanyaan: "Hiasan khas pada gandik dapur Nogososro adalah?", pilihan: ["Singa", "Kera", "Naga bermahkota", "Burung"], benar: 2 },
      { pertanyaan: "Apa makna dapur Nogososro?", pilihan: ["Kesederhanaan", "Kekuasaan tertinggi dan kepemimpinan", "Kemudahan menuntut ilmu", "Ketenangan batin"], benar: 1 }
    ]
  },
  { id: "keris-naga-siluman", judul: "Naga Siluman", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk tiga belas dengan ukiran kepala naga tanpa badan di gandik. Melambangkan ketenangan dan strategi tersembunyi." },
  { id: "keris-parangsuli", judul: "Parangsuli", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk tiga belas dengan kembang kacang dan pejetan. Melambangkan kematangan berpikir dan keluhuran." },
  { id: "keris-bima-kurda", judul: "Bima Kurda", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk lima belas dengan bilah gagah dan tebal. Melambangkan keberanian besar dan penolak bahaya." },
  { id: "keris-kalantaka", judul: "Kalantaka", daerah: "Jawa", kategori: "keris", kelompok: "Dapur Keris Luk 11, Luk 13, dan Kalawija", sinopsis: "Luk tujuh belas dengan kelokan rapat dari pangkal hingga ujung. Melambangkan ketegasan dan penetralisir energi negatif." },

  // ===== TOMBAK: PENGENALAN =====
  {
    id: "tombak-pengenalan",
    judul: "Mengenal Tombak",
    daerah: "Jawa",
    kategori: "tombak",
    kelompok: "Mengenal Tombak",
    sinopsis: "Senjata bertangkai panjang dengan bilah runcing di ujungnya, juga dihormati sebagai pusaka.",
    isi: [
      "Tombak adalah senjata bertangkai panjang dengan bilah runcing di ujungnya. Tangkainya disebut landeyan, dan bilahnya dibuat dari logam yang ditempa oleh seorang empu.",
      "Seperti keris, bilah tombak dikelompokkan menurut dapur, yaitu bentuk bilah yang bisa lurus atau berkelok (luk). Setiap dapur memiliki nama dan makna filosofi tersendiri.",
      "Selain sebagai senjata prajurit, tombak pusaka juga dihormati sebagai benda yang melambangkan kewibawaan dan perlindungan."
    ],
    kuis: [
      { pertanyaan: "Apa sebutan untuk tangkai tombak?", pilihan: ["Warangka", "Gandik", "Landeyan", "Pamor"], benar: 2 },
      { pertanyaan: "Bentuk bilah tombak dikelompokkan menurut?", pilihan: ["Warna logam", "Dapur (lurus atau berluk)", "Panjang tangkai", "Nama pemiliknya"], benar: 1 }
    ]
  },

  // ===== TOMBAK: BILAH LURUS =====
  { id: "tombak-kudup-gambir", judul: "Kudup Gambir", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah ramping meruncing menyerupai kuncup bunga gambir. Melambangkan ketenangan jiwa dan keteguhan niat." },
  { id: "tombak-banyak-angrem", judul: "Banyak Angrem", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah lebar pipih membulat menyerupai angsa mengeram. Melambangkan pengayoman, ketenteraman, dan perlindungan keluarga." },
  { id: "tombak-godong-pring", judul: "Godong Pring", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah pipih memanjang menyerupai daun bambu. Melambangkan kesederhanaan, keluwesan, dan daya tahan hidup." },
  { id: "tombak-godong-tebu", judul: "Godong Tebu", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah sedikit lebih lebar dari godong pring dengan tulang tengah. Melambangkan keharmonisan dan kedamaian hidup." },
  { id: "tombak-sadak", judul: "Sadak", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah ramping pipih dan tajam, simetris di kedua sisi. Melambangkan kejujuran, ketegasan, dan kelurusan moral." },
  { id: "tombak-cipir", judul: "Cipir", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Bilah berpenampang bersudut empat atau berbingkai tebal. Melambangkan benteng pertahanan dan ketahanan diri." },
  { id: "tombak-sumping", judul: "Sumping", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Lurus", sinopsis: "Pangkal bilah berhiasan sayap di kanan dan kiri. Melambangkan keagungan, derajat, dan kedudukan." },
  {
    id: "tombak-kyai-pleret",
    judul: "Kyai Pleret",
    daerah: "Jawa",
    kategori: "tombak",
    kelompok: "Dapur Tombak Bilah Lurus",
    sinopsis: "Bilah lurus simetris dan tebal dengan pamor halus. Melambangkan kepemimpinan prajurit dan penjaga wilayah.",
    isi: [
      "Kyai Pleret termasuk dapur tombak berbilah lurus, simetris, dan tebal, dengan pamor yang halus.",
      "Bilahnya yang lurus dan kokoh dimaknai sebagai simbol kepemimpinan prajurit dan penjaga wilayah.",
      "Sebutan 'Kyai' di depan nama menunjukkan bahwa pusaka ini dihormati, sebagaimana kebiasaan masyarakat Jawa menyebut benda pusaka yang dianggap bertuah."
    ],
    kuis: [
      { pertanyaan: "Apa ciri bilah dapur Kyai Pleret?", pilihan: ["Berkelok tujuh", "Lurus, simetris, tebal dengan pamor halus", "Menyerupai daun bambu", "Berhiasan sayap di pangkal"], benar: 1 },
      { pertanyaan: "Apa makna dapur Kyai Pleret?", pilihan: ["Kelincahan menghadapi hambatan", "Kemudahan rezeki", "Kepemimpinan prajurit dan penjaga wilayah", "Keharmonisan keluarga"], benar: 2 }
    ]
  },

  // ===== TOMBAK: BILAH LUK DAN BENTUK KHUSUS =====
  {
    id: "tombak-baru-klinting",
    judul: "Baru Klinting",
    daerah: "Jawa",
    kategori: "tombak",
    kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus",
    sinopsis: "Luk tiga atau lima dengan pejetan di pangkal. Melambangkan kewaspadaan, pertahanan, dan kesetiaan.",
    isi: [
      "Baru Klinting adalah dapur tombak berbilah berkelok, dengan jumlah luk tiga atau lima, dan pejetan di bagian pangkal.",
      "Kelokan pada bilah membuat tombak ini tampak lentur dan waspada, sehingga dimaknai sebagai simbol kewaspadaan, pertahanan, dan kesetiaan.",
      "Nama Baru Klinting juga dikenal dalam legenda asal-usul Rawa Pening di Jawa Tengah, sehingga dapur ini terasa dekat dengan cerita rakyat."
    ],
    kuis: [
      { pertanyaan: "Berapa jumlah luk dapur tombak Baru Klinting?", pilihan: ["Tiga atau lima", "Tujuh atau sembilan", "Sebelas", "Tanpa luk"], benar: 0 },
      { pertanyaan: "Apa makna Baru Klinting?", pilihan: ["Kesederhanaan dan daya tahan hidup", "Keagungan dan derajat", "Kewaspadaan, pertahanan, dan kesetiaan", "Ketenangan jiwa"], benar: 2 }
    ]
  },
  { id: "tombak-cacing-kanil", judul: "Cacing Kanil", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus", sinopsis: "Luk tiga atau lima yang meliuk rapat dari pangkal hingga ujung. Melambangkan keluwesan beradaptasi dan kecerdasan strategi." },
  { id: "tombak-megantara", judul: "Megantara", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus", sinopsis: "Luk tiga hanya di pangkal, bagian atas bilah lurus. Melambangkan wawasan luas dan kewibawaan pemimpin." },
  { id: "tombak-panggang-welut", judul: "Panggang Welut", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus", sinopsis: "Luk tiga atau lima, bilah ramping memanjang dengan kelok halus. Melambangkan kelincahan dan kemudahan menghadapi hambatan." },
  { id: "tombak-saringan", judul: "Saringan", daerah: "Jawa", kategori: "tombak", kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus", sinopsis: "Luk lima atau tujuh, berkelok tegas dengan pejetan dalam. Melambangkan ketajaman berpikir dan kecermatan bertindak." },
  {
    id: "tombak-birawa",
    judul: "Birawa",
    daerah: "Jawa",
    kategori: "tombak",
    kelompok: "Dapur Tombak Bilah Luk dan Bentuk Khusus",
    sinopsis: "Luk tujuh atau sembilan dengan bilah tebal dan gagah. Melambangkan keberanian besar dan benteng penolak bahaya.",
    isi: [
      "Birawa adalah dapur tombak berluk tujuh atau sembilan dengan bilah tebal dan gagah, berukuran lebih besar dibanding dapur lainnya.",
      "Ukurannya yang besar membuat Birawa dimaknai sebagai simbol keberanian besar dan benteng penolak bahaya.",
      "Bilah yang tebal dan kokoh membuat Birawa dikenal sebagai salah satu dapur tombak yang paling gagah dalam daftar ini."
    ],
    kuis: [
      { pertanyaan: "Apa ciri bilah dapur Birawa?", pilihan: ["Ramping meruncing seperti kuncup", "Tebal, gagah, dan berukuran lebih besar", "Menyerupai daun bambu", "Berpenampang bersudut empat"], benar: 1 },
      { pertanyaan: "Apa makna dapur Birawa?", pilihan: ["Kelincahan menghadapi hambatan", "Keluwesan beradaptasi", "Keberanian besar dan benteng penolak bahaya", "Kewibawaan pemimpin"], benar: 2 }
    ]
  }
];