let dataBudaya = [
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

// =====================================================================
// Pelengkapan, perbaikan, dan penggabungan data budaya.
// Semua skrip halaman memuat berkas ini sebelum skrip fiturnya:
//   console.log(validasi(dataLengkap));
// =====================================================================

// ---------------------------------------------------------------------
// 3. PERBAIKAN DATA YANG SUDAH ADA
// ---------------------------------------------------------------------
const perbaikan = {
  // Tumang adalah ayah Sangkuriang (suami Dayang Sumbi), bukan ayah Dayang Sumbi.
  "sangkuriang": (d) => {
    d.kuis[0].pertanyaan = "Siapa nama anjing yang ternyata adalah ayah Sangkuriang?";
    d.isi[0] = "Dayang Sumbi adalah seorang putri yang tanpa sengaja mengucap janji akan menikahi siapa pun yang mengambilkan alat tenunnya yang terjatuh. Yang mengambilkannya adalah seekor anjing bernama Tumang, yang ternyata adalah dewa yang dikutuk menjadi anjing. Dari pernikahan itu lahirlah Sangkuriang.";
  },
  // Dalam Ramayana, Satrughna kembar dengan Laksmana (keduanya putra Dewi Sumitra), bukan dengan Bharata.
  "satrughna": (d) => {
    d.sinopsis = "Adik kembar Laksmana, putra Dewi Sumitra dan Prabu Dasarata yang setia menjaga kerajaan.";
  }
};

// ---------------------------------------------------------------------
// 1. ISI + KUIS UNTUK ENTRI YANG MASIH KOSONG (wayang)
// ---------------------------------------------------------------------
const lengkapan = {
  "togog": {
    isi: [
      "Togog adalah Punakawan yang mengabdi pada pihak raksasa dan para penguasa angkara. Dalam pewayangan Jawa ia dipercaya sebagai kakak Semar.",
      "Meski melayani pihak raksasa, Togog selalu menasihati majikannya agar berbuat baik. Sayangnya, nasihat itu jarang dituruti.",
      "Tokoh ini sering dimaknai sebagai pengingat bahwa kebaikan tetap perlu disuarakan, walaupun belum tentu didengar."
    ],
    kuis: [
      { pertanyaan: "Togog mengabdi pada pihak mana?", pilihan: ["Para ksatria Pandawa", "Pihak raksasa", "Para dewa", "Pasukan wanara"], benar: 1 },
      { pertanyaan: "Bagaimana nasib nasihat Togog kepada majikannya?", pilihan: ["Selalu dituruti", "Jarang didengar", "Dijadikan hukum kerajaan", "Dibukukan"], benar: 1 }
    ]
  },
  "bilung": {
    isi: [
      "Bilung, juga disebut Sarawita, adalah Punakawan pendamping Togog yang mengabdi pada pihak raksasa.",
      "Ia dikenal jenaka dan kerap melengkapi Togog dalam adegan dagelan.",
      "Bersama Togog, Bilung menjadi gambaran abdi yang tetap setia meski majikannya sering tersesat."
    ],
    kuis: [
      { pertanyaan: "Siapa pendamping Bilung dalam Punakawan sisi raksasa?", pilihan: ["Semar", "Togog", "Petruk", "Gareng"], benar: 1 },
      { pertanyaan: "Bilung dikenal dengan sifat apa?", pilihan: ["Jenaka", "Kejam", "Pendiam", "Serakah"], benar: 0 }
    ]
  },
  "laksmana": {
    isi: [
      "Laksmana adalah adik Sri Rama, putra Dewi Sumitra dan Prabu Dasarata. Ia memilih ikut Rama menjalani pengasingan di hutan.",
      "Selama di hutan, Laksmana menjaga Rama dan Dewi Shinta. Dialah yang memotong hidung Sarpakenaka, sehingga kemarahan Alengka terpicu.",
      "Dalam banyak versi kisah, Laksmana juga yang mengalahkan Indrajit dalam perang. Ia menjadi teladan kesetiaan seorang adik."
    ],
    kuis: [
      { pertanyaan: "Siapa ibu kandung Laksmana?", pilihan: ["Dewi Kausalya", "Dewi Kekayi", "Dewi Sumitra", "Dewi Shinta"], benar: 2 },
      { pertanyaan: "Apa yang dilakukan Laksmana saat Rama diasingkan?", pilihan: ["Memerintah Ayodhya", "Ikut mendampingi Rama di hutan", "Bergabung dengan Rahwana", "Menjadi raja wanara"], benar: 1 }
    ]
  },
  "prabu-dasarata": {
    isi: [
      "Prabu Dasarata adalah raja Ayodhya yang memiliki tiga permaisuri: Dewi Kausalya, Dewi Kekayi, dan Dewi Sumitra.",
      "Dari ketiganya lahir empat putra: Rama, Bharata, Laksmana, dan Satrughna.",
      "Karena janjinya kepada Dewi Kekayi, Dasarata terpaksa melepas Rama ke pengasingan. Kesedihan itu dikisahkan membuatnya wafat tak lama kemudian."
    ],
    kuis: [
      { pertanyaan: "Prabu Dasarata adalah raja dari kerajaan mana?", pilihan: ["Alengka", "Ayodhya", "Mantili", "Kiskenda"], benar: 1 },
      { pertanyaan: "Berapa jumlah putra Prabu Dasarata dalam kisah ini?", pilihan: ["Dua", "Tiga", "Empat", "Lima"], benar: 2 }
    ]
  },
  "bharata": {
    isi: [
      "Bharata adalah putra Prabu Dasarata dan Dewi Kekayi. Ibunya meminta agar ia yang naik takhta, bukan Rama.",
      "Bharata menolak permintaan itu. Ia menyusul Rama ke hutan dan memohon agar kakaknya pulang.",
      "Ketika Rama tetap menjalani pengasingan, Bharata memerintah Ayodhya sebagai wakil Rama. Ia menjadi lambang kesetiaan dan ketulusan."
    ],
    kuis: [
      { pertanyaan: "Siapa ibu kandung Bharata?", pilihan: ["Dewi Kausalya", "Dewi Sumitra", "Dewi Kekayi", "Dewi Anjani"], benar: 2 },
      { pertanyaan: "Bagaimana sikap Bharata terhadap takhta Ayodhya?", pilihan: ["Merebutnya dari Rama", "Menolaknya dan memerintah sebagai wakil Rama", "Menyerahkannya kepada Rahwana", "Meninggalkannya begitu saja"], benar: 1 }
    ]
  },
  "satrughna": {
    isi: [
      "Satrughna adalah putra bungsu Prabu Dasarata, kembar dengan Laksmana, dan putra Dewi Sumitra.",
      "Ia mendampingi Bharata dalam menjaga Ayodhya selama Rama diasingkan.",
      "Satrughna mewakili kesetiaan yang bekerja diam-diam dalam menjaga kerajaan."
    ],
    kuis: [
      { pertanyaan: "Satrughna kembar dengan siapa?", pilihan: ["Rama", "Bharata", "Laksmana", "Wibisana"], benar: 2 },
      { pertanyaan: "Siapa yang didampingi Satrughna menjaga Ayodhya?", pilihan: ["Bharata", "Rahwana", "Sugriwa", "Kumbakarna"], benar: 0 }
    ]
  },
  "dewi-kausalya": {
    isi: [
      "Dewi Kausalya adalah permaisuri utama Prabu Dasarata dan ibu kandung Sri Rama.",
      "Ketika Rama diasingkan, ia melepas putranya dengan hati berat namun tabah.",
      "Kausalya menjadi gambaran kesabaran seorang ibu yang menerima takdir demi kewajiban."
    ],
    kuis: [
      { pertanyaan: "Dewi Kausalya adalah ibu dari siapa?", pilihan: ["Rama", "Bharata", "Laksmana", "Satrughna"], benar: 0 },
      { pertanyaan: "Bagaimana sikap Kausalya saat Rama diasingkan?", pilihan: ["Memberontak", "Melepas dengan hati berat namun tabah", "Ikut menyerang Kekayi", "Pergi ke Alengka"], benar: 1 }
    ]
  },
  "dewi-kekayi": {
    isi: [
      "Dewi Kekayi adalah salah satu istri Prabu Dasarata dan ibu Bharata.",
      "Ia pernah mendapat janji dua permintaan dari Dasarata. Atas dorongan dayangnya, ia memakainya untuk meminta Rama diasingkan dan Bharata dinobatkan.",
      "Permintaan itu menjadi pemicu rangkaian peristiwa dalam Ramayana, dan Bharata sendiri menolak hasilnya."
    ],
    kuis: [
      { pertanyaan: "Apa yang diminta Dewi Kekayi kepada Dasarata?", pilihan: ["Rama diasingkan dan Bharata dinobatkan", "Rama dinobatkan lebih cepat", "Perang melawan Alengka", "Pembangunan candi"], benar: 0 },
      { pertanyaan: "Dewi Kekayi adalah ibu dari siapa?", pilihan: ["Rama", "Laksmana", "Bharata", "Anoman"], benar: 2 }
    ]
  },
  "dewi-sumitra": {
    isi: [
      "Dewi Sumitra adalah istri Prabu Dasarata, ibu dari Laksmana dan Satrughna.",
      "Ia merelakan Laksmana ikut mendampingi Rama ke hutan, dengan pesan agar melayani Rama dan Shinta dengan tulus.",
      "Sumitra dikenang sebagai ibu yang mendahulukan pengabdian dan kebenaran."
    ],
    kuis: [
      { pertanyaan: "Dewi Sumitra adalah ibu dari siapa saja?", pilihan: ["Rama dan Bharata", "Laksmana dan Satrughna", "Bharata dan Satrughna", "Rama dan Laksmana"], benar: 1 },
      { pertanyaan: "Apa yang dilakukan Sumitra saat Laksmana hendak ikut Rama?", pilihan: ["Melarangnya", "Merelakan dan berpesan agar melayani dengan tulus", "Menyuruhnya menjadi raja", "Menyembunyikannya"], benar: 1 }
    ]
  },
  "prabu-janaka": {
    isi: [
      "Prabu Janaka adalah raja Mantili. Ia menemukan seorang bayi perempuan dari dalam bumi saat membajak sawah, lalu mengasuhnya sebagai putri, yaitu Dewi Shinta.",
      "Ketika Shinta dewasa, Janaka mengadakan sayembara dengan busur sakti sebagai ujiannya.",
      "Rama berhasil memenangkan sayembara itu dan menikah dengan Shinta."
    ],
    kuis: [
      { pertanyaan: "Prabu Janaka adalah raja dari kerajaan mana?", pilihan: ["Mantili", "Ayodhya", "Alengka", "Kiskenda"], benar: 0 },
      { pertanyaan: "Dari mana Janaka menemukan Dewi Shinta?", pilihan: ["Dari buih sungai", "Dari dalam bumi saat membajak sawah", "Dari batang bambu", "Dari telur"], benar: 1 }
    ]
  },
  "sarpakenaka": {
    isi: [
      "Sarpakenaka adalah adik perempuan Rahwana. Ia jatuh hati pada Rama dan Laksmana saat bertemu mereka di hutan.",
      "Cintanya ditolak, lalu ia menyerang Dewi Shinta. Laksmana pun memotong hidungnya.",
      "Dengan hati terhina, Sarpakenaka mengadu kepada Rahwana dan memicu serangkaian pembalasan yang berujung penculikan Shinta."
    ],
    kuis: [
      { pertanyaan: "Apa hubungan Sarpakenaka dengan Rahwana?", pilihan: ["Istri", "Adik perempuan", "Ibu", "Putri"], benar: 1 },
      { pertanyaan: "Apa yang dilakukan Laksmana pada Sarpakenaka?", pilihan: ["Memotong hidungnya", "Mengusirnya ke laut", "Mengangkatnya sebagai ratu", "Menikahinya"], benar: 0 }
    ]
  },
  "indrajit": {
    isi: [
      "Indrajit, juga disebut Megananda, adalah putra Rahwana yang sangat sakti dan mampu menghilang di medan perang.",
      "Dalam pertempuran, ia memakai senjata saktinya untuk mengikat Rama dan Laksmana, sehingga pasukan Rama sempat terdesak.",
      "Dalam banyak versi kisah, Indrajit akhirnya gugur oleh Laksmana."
    ],
    kuis: [
      { pertanyaan: "Siapa ayah Indrajit?", pilihan: ["Kumbakarna", "Rahwana", "Wibisana", "Sugriwa"], benar: 1 },
      { pertanyaan: "Kemampuan khas Indrajit di medan perang adalah?", pilihan: ["Menghilang", "Terbang tanpa sayap", "Mengendalikan hujan", "Berubah menjadi batu"], benar: 0 }
    ]
  },
  "subali": {
    isi: [
      "Subali adalah kakak Sugriwa dan raja wanara di Gua Kiskenda.",
      "Perselisihan kakak-beradik ini bermula dari kesalahpahaman saat Subali bertarung melawan raksasa di dalam gua.",
      "Sugriwa kemudian meminta bantuan Rama. Subali gugur terkena panah Rama, dan Sugriwa naik takhta sebagai raja wanara."
    ],
    kuis: [
      { pertanyaan: "Siapa adik Subali?", pilihan: ["Anoman", "Sugriwa", "Jambawan", "Nala"], benar: 1 },
      { pertanyaan: "Apa pemicu perselisihan Subali dan Sugriwa?", pilihan: ["Perebutan Shinta", "Kesalahpahaman saat pertarungan di gua", "Pembagian harta", "Perbedaan agama"], benar: 1 }
    ]
  },
  "anggada": {
    isi: [
      "Anggada adalah putra Subali dan pangeran wanara dalam pasukan Sugriwa.",
      "Dalam lakon \"Anggada Duta\", ia diutus Rama menghadap Rahwana untuk menawarkan jalan damai. Rahwana menolak tawaran itu.",
      "Anggada mewakili generasi muda yang berani dan setia, meski ayahnya gugur oleh pihak yang kini ia bela."
    ],
    kuis: [
      { pertanyaan: "Anggada adalah putra siapa?", pilihan: ["Sugriwa", "Subali", "Anoman", "Rahwana"], benar: 1 },
      { pertanyaan: "Apa tugas Anggada dalam lakon \"Anggada Duta\"?", pilihan: ["Menjadi utusan Rama kepada Rahwana", "Membangun jembatan", "Menjaga Shinta", "Memimpin pasukan raksasa"], benar: 0 }
    ]
  },
  "peksi-jatayu": {
    isi: [
      "Jatayu adalah burung raksasa sakti yang dalam banyak versi dianggap sahabat lama Prabu Dasarata.",
      "Saat melihat Rahwana membawa lari Dewi Shinta, Jatayu menyerangnya meski tahu kalah kuat. Sayapnya dilukai dan ia jatuh.",
      "Sebelum wafat, Jatayu sempat memberi tahu Rama ke mana Shinta dibawa. Ia dikenang sebagai pahlawan yang berkorban."
    ],
    kuis: [
      { pertanyaan: "Apa yang dilakukan Jatayu saat Shinta diculik?", pilihan: ["Melarikan diri", "Menyerang Rahwana untuk menyelamatkan Shinta", "Membantu Rahwana", "Bersembunyi di hutan"], benar: 1 },
      { pertanyaan: "Informasi apa yang disampaikan Jatayu kepada Rama?", pilihan: ["Arah Shinta dibawa pergi", "Letak harta karun", "Rahasia kelemahan Rahwana", "Lokasi gua Kiskenda"], benar: 0 }
    ]
  },
  "peksi-sempati": {
    isi: [
      "Sempati adalah kakak Jatayu, burung sakti yang sayapnya terbakar saat terbang terlalu dekat matahari.",
      "Dari kejauhan ia dapat melihat jauh, dan memberi tahu pasukan wanara bahwa Shinta ditahan di Alengka.",
      "Keterangan Sempati menjadi petunjuk penting bagi Anoman dan pasukannya untuk menyeberangi lautan."
    ],
    kuis: [
      { pertanyaan: "Apa hubungan Sempati dengan Jatayu?", pilihan: ["Kakak", "Anak", "Musuh", "Gurunya"], benar: 0 },
      { pertanyaan: "Informasi apa yang diberikan Sempati kepada pasukan wanara?", pilihan: ["Shinta ditahan di Alengka", "Rama berada di Ayodhya", "Rahwana menyerah", "Jembatan sudah rusak"], benar: 0 }
    ]
  },
  "batara-narada": {
    isi: [
      "Batara Narada adalah dewa yang dalam banyak lakon menjadi kepercayaan sekaligus juru bicara Batara Guru.",
      "Ia sering turun ke dunia menyampaikan pesan para dewa atau menengahi perselisihan.",
      "Dengan penampilan yang jenaka namun bijak, Narada menjadi jembatan antara kahyangan dan dunia manusia."
    ],
    kuis: [
      { pertanyaan: "Apa peran Batara Narada dalam kisah pewayangan?", pilihan: ["Penyampai pesan dan penengah para dewa", "Raja raksasa", "Pembuat keris", "Panglima wanara"], benar: 0 },
      { pertanyaan: "Narada mendampingi dewa siapa?", pilihan: ["Batara Guru", "Batara Surya", "Batara Bayu", "Batara Yamadipati"], benar: 0 }
    ]
  },
  "batara-bayu": {
    isi: [
      "Batara Bayu adalah dewa angin dalam jajaran dewa pewayangan.",
      "Dalam kisah Ramayana ia dipercaya sebagai ayah Anoman, yang mewarisi kekuatan dan kemampuan terbang.",
      "Dalam kisah Mahabharata, Bayu juga dikaitkan dengan Bima atau Werkudara."
    ],
    kuis: [
      { pertanyaan: "Batara Bayu adalah dewa apa?", pilihan: ["Dewa angin", "Dewa api", "Dewa laut", "Dewa bumi"], benar: 0 },
      { pertanyaan: "Siapa putra Batara Bayu dalam Ramayana?", pilihan: ["Anoman", "Rama", "Laksmana", "Wibisana"], benar: 0 }
    ]
  },
  "dewi-anjani": {
    isi: [
      "Dewi Anjani dikisahkan sebagai bidadari yang dikutuk menjadi berwujud kera.",
      "Menurut kisahnya, melalui anugerah Batara Bayu ia mengandung dan melahirkan Anoman.",
      "Anjani digambarkan sebagai ibu yang melahirkan pahlawan dari keadaan yang awalnya merupakan hukuman."
    ],
    kuis: [
      { pertanyaan: "Dewi Anjani adalah ibu dari siapa?", pilihan: ["Anoman", "Sugriwa", "Rahwana", "Indrajit"], benar: 0 },
      { pertanyaan: "Wujud apa yang dikutukkan kepada Anjani?", pilihan: ["Kera", "Burung", "Batu", "Ular"], benar: 0 }
    ]
  },
  "jambawan": {
    isi: [
      "Jambawan adalah tokoh sepuh dalam pasukan Rama yang dikenal bijaksana dan berpengalaman.",
      "Ia menjadi penasihat pasukan, dan dalam banyak versi mengingatkan Anoman akan kekuatannya sendiri sebelum menyeberangi lautan.",
      "Jambawan mewakili peran orang tua yang membimbing generasi muda dengan nasihat."
    ],
    kuis: [
      { pertanyaan: "Apa peran Jambawan dalam pasukan Rama?", pilihan: ["Penasihat yang bijaksana", "Panglima raksasa", "Penjaga taman Argasoka", "Pembuat jembatan"], benar: 0 },
      { pertanyaan: "Siapa yang diingatkan Jambawan akan kekuatannya?", pilihan: ["Anoman", "Rama", "Laksmana", "Rahwana"], benar: 0 }
    ]
  },
  "nala": {
    isi: [
      "Nala adalah wanara ahli bangunan dalam pasukan Sugriwa.",
      "Ia memimpin pembangunan jembatan batu yang menghubungkan daratan India dengan Alengka.",
      "Jembatan itu memungkinkan pasukan Rama menyeberangi lautan dan menjadi simbol kerja sama dan keahlian."
    ],
    kuis: [
      { pertanyaan: "Apa jasa terbesar Nala dalam kisah ini?", pilihan: ["Memimpin pembangunan jembatan ke Alengka", "Membunuh Rahwana", "Menculik Shinta", "Menjaga Ayodhya"], benar: 0 },
      { pertanyaan: "Nala berasal dari bangsa apa?", pilihan: ["Wanara", "Raksasa", "Dewa", "Resi"], benar: 0 }
    ]
  },
  "kala-marica": {
    isi: [
      "Kala Marica adalah raksasa yang diperintah Rahwana untuk menyamar menjadi kijang emas.",
      "Kijang itu memikat Dewi Shinta, yang meminta Rama menangkapnya. Rama pun meninggalkan Shinta bersama Laksmana.",
      "Marica akhirnya terkena panah Rama. Suaranya meniru jeritan Rama sehingga Laksmana menyusul, dan Shinta pun tertinggal sendirian."
    ],
    kuis: [
      { pertanyaan: "Menyamar menjadi apa Kala Marica?", pilihan: ["Kijang emas", "Burung garuda", "Naga", "Singa"], benar: 0 },
      { pertanyaan: "Siapa yang memerintahkan Marica menyamar?", pilihan: ["Rahwana", "Sugriwa", "Rama", "Wibisana"], benar: 0 }
    ]
  },
  "resi-wiswamitra": {
    isi: [
      "Resi Wiswamitra adalah pertapa sakti yang membimbing Rama dan Laksmana sejak muda.",
      "Ia meminta bantuan mereka melindungi pertapaan dari raksasa pengganggu seperti Subahu dan Marica, lalu mengajarkan pemakaian senjata sakti.",
      "Wiswamitra juga membawa Rama ke Mantili, tempat Rama memenangkan sayembara Dewi Shinta."
    ],
    kuis: [
      { pertanyaan: "Apa peran Resi Wiswamitra bagi Rama?", pilihan: ["Guru dan pembimbing", "Musuh utama", "Raja Ayodhya", "Pembuat keris"], benar: 0 },
      { pertanyaan: "Ke mana Wiswamitra membawa Rama dan Laksmana?", pilihan: ["Mantili", "Alengka", "Kiskenda", "Hutan Seram"], benar: 0 }
    ]
  },
  "sayempraba": {
    isi: [
      "Sayempraba adalah bidadari penghuni gua ajaib yang ditemui pasukan wanara saat mencari Shinta.",
      "Ia menyambut mereka dengan makanan dan membantu mereka keluar dari gua yang membingungkan.",
      "Sayempraba mewakili pertolongan tak terduga yang datang di tengah perjalanan yang berat."
    ],
    kuis: [
      { pertanyaan: "Siapa yang ditolong oleh Sayempraba?", pilihan: ["Pasukan wanara", "Pasukan raksasa", "Dewi Shinta", "Prabu Dasarata"], benar: 0 },
      { pertanyaan: "Di mana Sayempraba tinggal?", pilihan: ["Gua ajaib", "Istana Alengka", "Puncak Kelimutu", "Dasar laut"], benar: 0 }
    ]
  }
  ,
  "batara-surya": {
    isi: [
      "Batara Surya adalah dewa matahari dalam jajaran dewa pewayangan, sumber cahaya dan kehidupan bagi dunia.",
      "Dalam kisah Ramayana, ia dikenal sebagai ayah Sugriwa, raja wanara Kiskenda yang menjadi sekutu Rama.",
      "Surya melambangkan terang, keteraturan, dan kesetiaan menjalankan peran setiap hari."
    ],
    kuis: [
      { pertanyaan: "Batara Surya adalah dewa apa?", pilihan: ["Dewa matahari", "Dewa angin", "Dewa laut", "Dewa kematian"], benar: 0 },
      { pertanyaan: "Siapa putra Batara Surya dalam Ramayana?", pilihan: ["Sugriwa", "Rahwana", "Laksmana", "Wibisana"], benar: 0 }
    ]
  },
  "batara-indra": {
    isi: [
      "Batara Indra adalah dewa penguasa langit dan hujan, yang dalam banyak kisah dipandang sebagai raja kahyangan.",
      "Dalam Ramayana, Indra dikenal sebagai ayah Subali, kakak Sugriwa. Nama Indra juga melekat pada Indrajit, putra Rahwana, yang namanya berarti penakluk Indra.",
      "Indra mewakili kekuasaan atas langit dan kesuburan yang dibawa hujan."
    ],
    kuis: [
      { pertanyaan: "Batara Indra menguasai apa?", pilihan: ["Langit dan hujan", "Samudra", "Api", "Bumi"], benar: 0 },
      { pertanyaan: "Siapa putra Indra dalam Ramayana?", pilihan: ["Subali", "Anoman", "Rama", "Bharata"], benar: 0 }
    ]
  },
  "batara-brahma": {
    isi: [
      "Batara Brahma adalah dewa pencipta dalam jajaran dewa pewayangan.",
      "Dalam Ramayana, Brahma dikenal sebagai dewa yang menganugerahkan kesaktian kepada Rahwana atas pertapaannya yang panjang.",
      "Kisah ini memperlihatkan bahwa kesaktian yang diperoleh tanpa kebijaksanaan dapat berujung pada malapetaka."
    ],
    kuis: [
      { pertanyaan: "Apa peran Batara Brahma?", pilihan: ["Dewa pencipta", "Dewa kematian", "Dewa angin", "Dewa matahari"], benar: 0 },
      { pertanyaan: "Kepada siapa Brahma menganugerahkan kesaktian dalam Ramayana?", pilihan: ["Rahwana", "Rama", "Anoman", "Laksmana"], benar: 0 }
    ]
  },
  "batara-yamadipati": {
    isi: [
      "Batara Yamadipati adalah dewa penguasa kematian dan alam akhirat dalam jajaran dewa pewayangan.",
      "Ia bertugas menimbang perbuatan manusia setelah wafat, sehingga dipandang sebagai penjaga keadilan terakhir.",
      "Tokoh ini mengingatkan bahwa setiap perbuatan akan dimintai pertanggungjawaban."
    ],
    kuis: [
      { pertanyaan: "Batara Yamadipati menguasai apa?", pilihan: ["Kematian dan akhirat", "Hujan", "Kesuburan", "Perang"], benar: 0 },
      { pertanyaan: "Apa pesan moral dari tokoh Yamadipati?", pilihan: ["Setiap perbuatan akan dipertanggungjawabkan", "Kekayaan menentukan segalanya", "Kekuatan fisik utama", "Hidup tanpa aturan"], benar: 0 }
    ]
  },
  "resi-gotama": {
    isi: [
      "Dalam pewayangan Jawa, Resi Gotama dikenal sebagai ayah Dewi Anjani, Subali, dan Sugriwa.",
      "Kisah keluarganya diwarnai perselisihan karena sebuah pusaka yang diperebutkan anak-anaknya, yang berujung pada kutukan.",
      "Dari rangkaian peristiwa itulah dipercaya lahir asal-usul Anoman, sehingga Gotama berada di awal silsilah para wanara."
    ],
    kuis: [
      { pertanyaan: "Resi Gotama adalah ayah dari siapa?", pilihan: ["Dewi Anjani, Subali, dan Sugriwa", "Rama dan Laksmana", "Rahwana dan Kumbakarna", "Bharata dan Satrughna"], benar: 0 },
      { pertanyaan: "Tokoh terkenal yang asal-usulnya terkait kisah Gotama?", pilihan: ["Anoman", "Semar", "Buto Cakil", "Wibisana"], benar: 0 }
    ]
  },
  "resi-agastya": {
    isi: [
      "Resi Agastya adalah pertapa bijaksana yang dihormati oleh Rama dalam masa pengasingannya.",
      "Ia memberikan nasihat dan senjata sakti kepada Rama untuk menghadapi Rahwana.",
      "Agastya menjadi teladan guru spiritual yang membekali, bukan menggantikan, perjuangan seseorang."
    ],
    kuis: [
      { pertanyaan: "Apa yang diberikan Resi Agastya kepada Rama?", pilihan: ["Nasihat dan senjata sakti", "Mahkota Alengka", "Seekor kuda", "Sebuah kapal"], benar: 0 },
      { pertanyaan: "Apa peran Agastya bagi Rama?", pilihan: ["Pembimbing bijaksana", "Musuh", "Raja Mantili", "Panglima raksasa"], benar: 0 }
    ]
  },
  "patih-prahasta": {
    isi: [
      "Patih Prahasta adalah patih dan panglima kerajaan Alengka di bawah Rahwana.",
      "Ia memimpin pasukan raksasa menghadapi serbuan wanara. Dalam banyak versi ia gugur di tangan Nila.",
      "Prahasta menggambarkan pejabat setia yang tetap membela rajanya meski perang berpihak pada pihak lawan."
    ],
    kuis: [
      { pertanyaan: "Apa jabatan Prahasta di Alengka?", pilihan: ["Patih dan panglima", "Pendeta", "Juru masak", "Penjaga taman"], benar: 0 },
      { pertanyaan: "Prahasta gugur saat menghadapi pasukan apa?", pilihan: ["Wanara", "Dewa", "Ayodhya", "Mantili"], benar: 0 }
    ]
  },
  "trisirah": {
    isi: [
      "Trisirah adalah raksasa berkepala tiga yang menjadi salah satu panglima Alengka.",
      "Wujud berkepala tiga menjadi tanda kesaktian dan kegagahannya di medan perang.",
      "Ia gugur dalam pertempuran melawan pasukan Rama, seperti banyak panglima Alengka lainnya."
    ],
    kuis: [
      { pertanyaan: "Berapa jumlah kepala Trisirah?", pilihan: ["Tiga", "Satu", "Sepuluh", "Lima"], benar: 0 },
      { pertanyaan: "Trisirah mengabdi pada kerajaan mana?", pilihan: ["Alengka", "Ayodhya", "Kiskenda", "Mantili"], benar: 0 }
    ]
  },
  "atikaya": {
    isi: [
      "Atikaya adalah putra Rahwana yang bertubuh besar dan dikenal sangat kuat di medan perang.",
      "Ia maju memimpin pasukan membela ayahnya setelah banyak panglima Alengka gugur.",
      "Dalam banyak versi kisah, Atikaya gugur oleh Laksmana."
    ],
    kuis: [
      { pertanyaan: "Atikaya adalah putra siapa?", pilihan: ["Rahwana", "Rama", "Sugriwa", "Dasarata"], benar: 0 },
      { pertanyaan: "Atikaya dikenal dengan sifat apa?", pilihan: ["Sangat kuat dalam pertempuran", "Sangat bijaksana", "Pendiam", "Ahli membangun"], benar: 0 }
    ]
  },
  "narantaka": {
    isi: [
      "Narantaka adalah raksasa prajurit Alengka yang maju dalam barisan perang melawan pasukan wanara.",
      "Ia tewas di tangan pasukan wanara, sebagaimana tertulis dalam kisah pertempuran Alengka.",
      "Kisahnya menjadi bagian dari gambaran besar jatuhnya para panglima Rahwana satu per satu."
    ],
    kuis: [
      { pertanyaan: "Narantaka tewas di tangan siapa?", pilihan: ["Pasukan wanara", "Para dewa", "Ayahnya", "Prahasta"], benar: 0 },
      { pertanyaan: "Narantaka berasal dari pihak mana?", pilihan: ["Alengka", "Ayodhya", "Mantili", "Kiskenda"], benar: 0 }
    ]
  },
  "dewantaka": {
    isi: [
      "Dewantaka adalah raksasa prajurit Alengka dan saudara Narantaka.",
      "Ia ikut maju dalam pertempuran besar membela Rahwana.",
      "Perannya menggambarkan banyaknya anggota keluarga dan pasukan yang ikut tenggelam dalam perang Alengka."
    ],
    kuis: [
      { pertanyaan: "Siapa saudara Dewantaka?", pilihan: ["Narantaka", "Anoman", "Sugriwa", "Rama"], benar: 0 },
      { pertanyaan: "Dewantaka berperang membela siapa?", pilihan: ["Rahwana", "Rama", "Bharata", "Wibisana"], benar: 0 }
    ]
  },
  "subahu": {
    isi: [
      "Subahu adalah raksasa yang bersama Marica mengganggu pertapaan para resi di hutan.",
      "Resi Wiswamitra meminta Rama dan Laksmana melindungi upacaranya dari gangguan itu.",
      "Rama menumpas Subahu, dan peristiwa ini menjadi salah satu ujian pertama Rama sebagai ksatria."
    ],
    kuis: [
      { pertanyaan: "Apa yang dilakukan Subahu?", pilihan: ["Mengganggu pertapaan para resi", "Membangun jembatan", "Menjaga Shinta", "Memimpin wanara"], benar: 0 },
      { pertanyaan: "Siapa yang meminta Rama menghadapi Subahu?", pilihan: ["Resi Wiswamitra", "Rahwana", "Sugriwa", "Prabu Janaka"], benar: 0 }
    ]
  },
  "viradha": {
    isi: [
      "Viradha adalah raksasa penghuni hutan yang menghadang Rama, Laksmana, dan Shinta di awal pengasingan.",
      "Ia sempat menyeret Shinta, tetapi dikalahkan oleh kedua kakak-beradik itu.",
      "Menurut kisahnya, kematian Viradha membebaskannya dari kutukan yang membuatnya berwujud raksasa."
    ],
    kuis: [
      { pertanyaan: "Siapa yang dihadang Viradha?", pilihan: ["Rama, Laksmana, dan Shinta", "Pasukan wanara", "Rahwana", "Bharata"], benar: 0 },
      { pertanyaan: "Apa dampak kematian Viradha menurut kisahnya?", pilihan: ["Terbebas dari kutukan", "Menjadi raja", "Menjadi dewa laut", "Berubah menjadi batu"], benar: 0 }
    ]
  },
  "kabandha": {
    isi: [
      "Kabandha adalah raksasa berwujud mengerikan dengan kepala di perut, akibat sebuah kutukan.",
      "Setelah dikalahkan oleh Rama dan Laksmana, ia terbebas dari wujudnya.",
      "Sebagai balas budi, Kabandha menunjukkan agar Rama mencari bantuan Sugriwa untuk menemukan Shinta."
    ],
    kuis: [
      { pertanyaan: "Apa ciri wujud Kabandha?", pilihan: ["Kepala di perut", "Bersayap", "Berekor panjang", "Bertanduk tiga"], benar: 0 },
      { pertanyaan: "Siapa yang ditunjuk Kabandha sebagai sekutu Rama?", pilihan: ["Sugriwa", "Rahwana", "Indrajit", "Subahu"], benar: 0 }
    ]
  },
  "kala-khara": {
    isi: [
      "Kala Khara adalah raksasa panglima yang menempati wilayah hutan tempat Rama menjalani pengasingan.",
      "Setelah Sarpakenaka mengadu, ia memimpin pasukan menyerang pertapaan Rama bersama Kala Dusana.",
      "Pasukan itu dikalahkan Rama, dan kekalahan ini membuat Rahwana turun tangan sendiri."
    ],
    kuis: [
      { pertanyaan: "Siapa yang mengadu hingga Khara menyerang Rama?", pilihan: ["Sarpakenaka", "Wibisana", "Kumbakarna", "Marica"], benar: 0 },
      { pertanyaan: "Bersama siapa Kala Khara menyerang?", pilihan: ["Kala Dusana", "Anoman", "Sugriwa", "Jatayu"], benar: 0 }
    ]
  },
  "kala-dusana": {
    isi: [
      "Kala Dusana adalah raksasa, saudara Kala Khara, yang ikut memimpin pasukan menyerang tempat pengasingan Rama.",
      "Bersama pasukannya ia dikalahkan Rama.",
      "Kekalahan Khara dan Dusana menjadi titik balik yang memicu rencana Rahwana menculik Shinta."
    ],
    kuis: [
      { pertanyaan: "Siapa saudara Kala Dusana?", pilihan: ["Kala Khara", "Narantaka", "Anila", "Nala"], benar: 0 },
      { pertanyaan: "Apa dampak kekalahan Khara dan Dusana?", pilihan: ["Memicu Rahwana menculik Shinta", "Rama kembali ke Ayodhya", "Perang berakhir", "Wanara menyerah"], benar: 0 }
    ]
  },
  "wil-kataksini": {
    isi: [
      "Wil Kataksini adalah raksasi penjaga taman Argasoka di Alengka.",
      "Di taman itulah Dewi Shinta ditahan selama menunggu pertolongan Rama.",
      "Ia mewakili para penjaga yang menjalankan perintah tanpa mempertanyakan, sementara Shinta tetap teguh pada kesetiaannya."
    ],
    kuis: [
      { pertanyaan: "Apa tugas Wil Kataksini?", pilihan: ["Menjaga taman Argasoka", "Memimpin pasukan wanara", "Menjadi resi", "Membuat keris"], benar: 0 },
      { pertanyaan: "Siapa yang ditahan di taman Argasoka?", pilihan: ["Dewi Shinta", "Dewi Kausalya", "Dewi Anjani", "Dewi Sumitra"], benar: 0 }
    ]
  },
  "anila": {
    isi: [
      "Anila adalah panglima wanara, salah satu pemimpin dalam pasukan penyerbu Alengka.",
      "Ia memimpin pasukannya dalam serangan terhadap benteng Alengka.",
      "Bersama Nala, Nila, dan Anoman, ia mewakili kerja sama bangsa wanara dalam memenangkan perang."
    ],
    kuis: [
      { pertanyaan: "Anila berasal dari bangsa apa?", pilihan: ["Wanara", "Raksasa", "Dewa", "Manusia"], benar: 0 },
      { pertanyaan: "Apa peran Anila?", pilihan: ["Panglima pasukan wanara", "Raja Alengka", "Penjaga taman", "Dalang"], benar: 0 }
    ]
  },
  "nila": {
    isi: [
      "Nila adalah panglima wanara yang turut membangun jembatan menuju Alengka bersama Nala.",
      "Dalam pertempuran ia memimpin pasukan dan, dalam banyak versi, mengalahkan Patih Prahasta.",
      "Nila melambangkan kecakapan memadukan keahlian membangun dan keberanian bertempur."
    ],
    kuis: [
      { pertanyaan: "Siapa yang membangun jembatan bersama Nila?", pilihan: ["Nala", "Rahwana", "Subahu", "Bharata"], benar: 0 },
      { pertanyaan: "Nila adalah panglima dari bangsa mana?", pilihan: ["Wanara", "Raksasa", "Dewa", "Resi"], benar: 0 }
    ]
  },
  "kapi-dwimukha": {
    isi: [
      "Kapi Dwimukha adalah prajurit wanara dalam pasukan Sugriwa.",
      "Ia termasuk ribuan wanara yang ikut mencari Shinta dan menyerbu Alengka.",
      "Meski namanya jarang disebut, ia mewakili kekuatan pasukan yang bekerja bersama."
    ],
    kuis: [
      { pertanyaan: "Kapi Dwimukha berada di pasukan siapa?", pilihan: ["Sugriwa", "Rahwana", "Dasarata", "Janaka"], benar: 0 },
      { pertanyaan: "Apa arti kata kapi dalam kelompok ini?", pilihan: ["Wanara atau kera", "Raksasa", "Dewa", "Resi"], benar: 0 }
    ]
  },
  "kapi-vindha": {
    isi: [
      "Kapi Vindha adalah prajurit wanara dalam pasukan Sugriwa.",
      "Ia ikut dalam pasukan yang menyeberangi lautan menuju Alengka.",
      "Bersama prajurit lain, ia menggambarkan kebersamaan sebuah pasukan besar."
    ],
    kuis: [
      { pertanyaan: "Kapi Vindha berasal dari bangsa apa?", pilihan: ["Wanara", "Raksasa", "Dewa", "Manusia"], benar: 0 },
      { pertanyaan: "Di mana Kapi Vindha ikut berperang?", pilihan: ["Alengka", "Ayodhya", "Mantili", "Seram"], benar: 0 }
    ]
  },
  "kapi-jenda": {
    isi: [
      "Kapi Jenda adalah prajurit wanara dalam pasukan Sugriwa.",
      "Ia ikut berbaris bersama pasukan wanara lain dalam perjalanan menuju Alengka.",
      "Perannya menunjukkan bahwa kemenangan Rama ditopang oleh banyak pihak, bukan hanya tokoh besar."
    ],
    kuis: [
      { pertanyaan: "Kapi Jenda berada di pasukan siapa?", pilihan: ["Sugriwa", "Rahwana", "Prahasta", "Indrajit"], benar: 0 },
      { pertanyaan: "Tujuan pasukan wanara?", pilihan: ["Membebaskan Shinta di Alengka", "Merebut Ayodhya", "Mencari harta", "Membangun candi"], benar: 0 }
    ]
  },
  "kapi-sraba": {
    isi: [
      "Kapi Sraba adalah prajurit wanara dalam pasukan Sugriwa.",
      "Ia termasuk pasukan yang ikut menyerbu Alengka.",
      "Seperti prajurit wanara lainnya, ia mewakili kesetiaan pasukan kepada pimpinannya."
    ],
    kuis: [
      { pertanyaan: "Kapi Sraba termasuk bangsa apa?", pilihan: ["Wanara", "Raksasa", "Dewa", "Resi"], benar: 0 },
      { pertanyaan: "Siapa raja pasukan Kapi Sraba?", pilihan: ["Sugriwa", "Rahwana", "Wibisana", "Subali"], benar: 0 }
    ]
  },
  "bukbis": {
    isi: [
      "Bukbis adalah raksasa penjaga di kerajaan Alengka.",
      "Tokoh seperti ini menjadi bagian dari barisan penjaga kerajaan yang membela Rahwana.",
      "Meski perannya kecil, penjaga dan prajurit raksasa menggambarkan besarnya kekuatan Alengka sebelum kalah."
    ],
    kuis: [
      { pertanyaan: "Apa peran Bukbis?", pilihan: ["Penjaga di Alengka", "Resi di hutan", "Raja wanara", "Dewa langit"], benar: 0 },
      { pertanyaan: "Bukbis termasuk kelompok apa?", pilihan: ["Bangsa Buto dan Raksasa", "Bangsa Wanara", "Dewa dan Resi", "Punakawan"], benar: 0 }
    ]
  },
  "kala-suranimitta": {
    isi: [
      "Kala Suranimitta adalah raksasa prajurit dalam pasukan Alengka.",
      "Ia ikut dalam barisan perang membela Rahwana menghadapi pasukan Rama.",
      "Nama-nama prajurit seperti ini menegaskan skala perang besar antara Alengka dan pasukan wanara."
    ],
    kuis: [
      { pertanyaan: "Kala Suranimitta berada di pihak siapa?", pilihan: ["Alengka", "Ayodhya", "Kiskenda", "Mantili"], benar: 0 },
      { pertanyaan: "Apa perannya?", pilihan: ["Prajurit raksasa", "Dewa", "Resi", "Punakawan"], benar: 0 }
    ]
  },
  "kala-wisungkara": {
    isi: [
      "Kala Wisungkara adalah raksasa prajurit dalam pasukan Alengka.",
      "Ia ikut berperang dalam barisan raksasa yang membela Rahwana.",
      "Seperti prajurit lainnya, ia mewakili pasukan yang setia pada rajanya hingga akhir perang."
    ],
    kuis: [
      { pertanyaan: "Kala Wisungkara termasuk bangsa apa?", pilihan: ["Raksasa", "Wanara", "Dewa", "Manusia"], benar: 0 },
      { pertanyaan: "Siapa raja yang dibelanya?", pilihan: ["Rahwana", "Rama", "Sugriwa", "Dasarata"], benar: 0 }
    ]
  },
  "pratangga": {
    isi: [
      "Pratangga adalah raksasa prajurit dalam barisan pasukan Alengka.",
      "Ia bertempur membela Rahwana menghadapi serbuan wanara.",
      "Kisahnya mengingatkan bahwa perang melibatkan banyak pihak di luar tokoh-tokoh utama."
    ],
    kuis: [
      { pertanyaan: "Pratangga berasal dari pihak mana?", pilihan: ["Alengka", "Ayodhya", "Kiskenda", "Mantili"], benar: 0 },
      { pertanyaan: "Apa peran Pratangga?", pilihan: ["Prajurit raksasa", "Resi", "Raja", "Dewa"], benar: 0 }
    ]
  },
  "kala-ditya": {
    isi: [
      "Kala Ditya adalah raksasa prajurit dalam barisan pasukan Rahwana.",
      "Ia ikut maju dalam pertempuran di Alengka.",
      "Bersama prajurit lain, ia menjadi bagian dari pasukan yang akhirnya dikalahkan oleh Rama dan sekutunya."
    ],
    kuis: [
      { pertanyaan: "Kala Ditya mengabdi pada siapa?", pilihan: ["Rahwana", "Rama", "Sugriwa", "Bharata"], benar: 0 },
      { pertanyaan: "Siapa yang akhirnya mengalahkan pasukan Alengka?", pilihan: ["Rama dan sekutunya", "Para dewa saja", "Kumbakarna", "Indrajit"], benar: 0 }
    ]
  }
};

// ---------------------------------------------------------------------
// 2. ENTRI BARU
// ---------------------------------------------------------------------
// Catatan: koordinat adalah ESTIMASI dari pola koordinat yang sudah ada.
// Cek visual di petamu dan geser jika pin tidak pas.
const entriBaru = [
  // ----- CERITA RAKYAT -----
  {
    id: "lutung-kasarung", judul: "Lutung Kasarung", daerah: "Jawa Barat", pulau: "jawa", kategori: "cerita",
    koordinat: { x: 30.0, y: 76.2 },
    sinopsis: "Putri bungsu yang disingkirkan kakaknya dan ditolong seekor lutung yang ternyata putra dewa.",
    isi: [
      "Prabu Tapa Agung memiliki beberapa putri. Yang tertua, Purbararang, iri pada adik bungsunya, Purbasari, lalu menyingkirkannya ke hutan.",
      "Di hutan, Purbasari ditemani seekor lutung bernama Lutung Kasarung. Ia sebenarnya Guruminda, putra dewa yang dikutuk berwujud kera.",
      "Berkat pertolongan Lutung Kasarung, Purbasari dibersihkan dari penyakitnya dan menang dalam adu panjang rambut melawan kakaknya.",
      "Setelah kutukannya berakhir, Lutung Kasarung kembali menjadi Guruminda dan menikah dengan Purbasari."
    ],
    kuis: [
      { pertanyaan: "Siapa sebenarnya Lutung Kasarung?", pilihan: ["Guruminda, putra dewa yang dikutuk", "Raja hutan", "Prajurit kerajaan", "Anak Purbararang"], benar: 0 },
      { pertanyaan: "Mengapa Purbasari disingkirkan?", pilihan: ["Karena iri kakaknya, Purbararang", "Karena melanggar adat", "Karena kalah perang", "Karena ingin menjadi pertapa"], benar: 0 }
    ]
  },
  {
    id: "sri-tanjung", judul: "Sri Tanjung", daerah: "Jawa Timur", pulau: "jawa", kategori: "cerita",
    koordinat: { x: 41.4, y: 82.2 },
    sinopsis: "Kisah setia seorang istri yang menjadi asal-usul nama Banyuwangi.",
    isi: [
      "Sri Tanjung adalah istri Sidapaksa, patih kerajaan yang setia. Raja Sulakrama jatuh hati pada Sri Tanjung dan ingin menyingkirkan Sidapaksa.",
      "Sang raja mengirim Sidapaksa pergi, lalu menuduh Sri Tanjung berbuat serong. Termakan fitnah, Sidapaksa marah.",
      "Di tepi sungai, Sri Tanjung menyatakan bahwa jika ia bersalah, darahnya akan berbau busuk. Namun, jika ia suci, darahnya akan harum.",
      "Setelah ia gugur, air sungai itu berbau harum. Sidapaksa pun menyadari kebenaran, dan sungai itu dinamai Banyuwangi, yang berarti air harum."
    ],
    kuis: [
      { pertanyaan: "Apa arti nama Banyuwangi dalam cerita ini?", pilihan: ["Air harum", "Air deras", "Air suci", "Air dalam"], benar: 0 },
      { pertanyaan: "Siapa suami Sri Tanjung?", pilihan: ["Sidapaksa", "Sulakrama", "Bandung Bondowoso", "Toar"], benar: 0 }
    ]
  },
  {
    id: "la-galigo", judul: "La Galigo", daerah: "Sulawesi Selatan", pulau: "sulawesi", kategori: "cerita",
    koordinat: { x: 56.0, y: 54.0 },
    sinopsis: "Epos besar Bugis tentang turunnya Batara Guru ke bumi dan pengembaraan Sawerigading.",
    isi: [
      "La Galigo adalah epos masyarakat Bugis yang dituturkan dalam bentuk naskah Sureq Galigo, salah satu karya sastra terpanjang di dunia.",
      "Kisahnya bermula dari Batara Guru, putra penguasa langit, yang turun ke bumi untuk menjadi raja pertama.",
      "Tokoh utamanya yang terkenal adalah Sawerigading, pengembara dan pelaut yang menjalani banyak petualangan lintas negeri.",
      "Epos ini diakui UNESCO sebagai Ingatan Dunia (Memory of the World) pada tahun 2011."
    ],
    kuis: [
      { pertanyaan: "La Galigo berasal dari masyarakat apa?", pilihan: ["Bugis", "Minang", "Batak", "Dayak"], benar: 0 },
      { pertanyaan: "Siapa tokoh pengembara utama dalam La Galigo?", pilihan: ["Sawerigading", "Malin Kundang", "Toar", "Bandung Bondowoso"], benar: 0 }
    ]
  },
  {
    id: "bawang-merah-bawang-putih", judul: "Bawang Merah Bawang Putih", daerah: "Riau", pulau: "sumatra", kategori: "cerita",
    koordinat: { x: 16.5, y: 36.0 },
    sinopsis: "Dua saudari tiri yang watak dan nasibnya berlawanan, tentang ketulusan versus keserakahan.",
    isi: [
      "Bawang Putih adalah gadis baik hati, sedangkan Bawang Merah dan ibunya bersikap kasar dan sering menyuruhnya bekerja.",
      "Suatu hari pakaian yang dicuci Bawang Putih hanyut di sungai. Dalam pencariannya, ia menolong seorang nenek.",
      "Sebagai balasan, nenek menawarkan hadiah berupa labu. Bawang Putih memilih yang kecil, dan di dalamnya terdapat harta yang melimpah.",
      "Bawang Merah yang serakah mencoba meniru, namun labu besar yang ia pilih justru berisi hal yang tidak menyenangkan."
    ],
    kuis: [
      { pertanyaan: "Labu yang dipilih Bawang Putih berukuran apa?", pilihan: ["Kecil", "Besar", "Sangat besar", "Seukuran kepala"], benar: 0 },
      { pertanyaan: "Pesan utama cerita ini adalah?", pilihan: ["Ketulusan membawa kebaikan, keserakahan membawa kerugian", "Kekuatan menentukan segalanya", "Harta adalah tujuan utama", "Merantau selalu berhasil"], benar: 0 }
    ]
  },

  // ----- CANDI -----
  {
    id: "candi-prambanan", judul: "Candi Prambanan", daerah: "Yogyakarta", pulau: "jawa", kategori: "candi",
    koordinat: { x: 36.4, y: 79.6 },
    sinopsis: "Kompleks candi Hindu terbesar di Indonesia, dipersembahkan untuk Trimurti.",
    isi: [
      "Candi Prambanan adalah kompleks candi Hindu yang dibangun sekitar abad ke-9 Masehi dan dipersembahkan kepada tiga dewa utama, Trimurti: Brahma, Wisnu, dan Siwa.",
      "Candi Siwa berdiri di tengah sebagai bangunan terbesar dan tertinggi. Dindingnya dihiasi relief kisah Ramayana yang dibaca berurutan mengelilingi candi.",
      "Kompleks ini ditetapkan sebagai Situs Warisan Dunia UNESCO. Masyarakat juga mengaitkannya dengan legenda Roro Jonggrang."
    ],
    kuis: [
      { pertanyaan: "Prambanan dipersembahkan kepada dewa apa?", pilihan: ["Trimurti: Brahma, Wisnu, dan Siwa", "Hanya Buddha", "Dewi Sri", "Batara Surya"], benar: 0 },
      { pertanyaan: "Relief kisah apa yang menghiasi candi utama Prambanan?", pilihan: ["Ramayana", "Malin Kundang", "Sangkuriang", "Tantri"], benar: 0 }
    ]
  },
  {
    id: "candi-penataran", judul: "Candi Penataran", daerah: "Jawa Timur", pulau: "jawa", kategori: "candi",
    koordinat: { x: 39.2, y: 81.4 },
    sinopsis: "Kompleks candi Hindu terbesar di Jawa Timur, dekat Blitar, dari masa Kadiri hingga Majapahit.",
    isi: [
      "Candi Penataran terletak di Blitar, Jawa Timur, dan merupakan kompleks candi Hindu terbesar di provinsi itu.",
      "Pembangunannya dimulai pada masa Kerajaan Kadiri dan diperluas pada masa Majapahit, sehingga kompleksnya terdiri dari banyak bangunan yang tersebar di satu halaman luas.",
      "Reliefnya menggambarkan kisah-kisah seperti Ramayana dan Kresnayana, sehingga ia menjadi sumber penting untuk mempelajari seni dan keyakinan masa itu."
    ],
    kuis: [
      { pertanyaan: "Di kota apa Candi Penataran berada?", pilihan: ["Blitar", "Magelang", "Bandung", "Padang"], benar: 0 },
      { pertanyaan: "Candi Penataran dibangun hingga masa kerajaan apa?", pilihan: ["Majapahit", "Sriwijaya", "Mataram Islam", "Tarumanagara"], benar: 0 }
    ]
  },
  {
    id: "candi-muara-takus", judul: "Candi Muara Takus", daerah: "Riau", pulau: "sumatra", kategori: "candi",
    koordinat: { x: 15.0, y: 36.5 },
    sinopsis: "Kompleks candi Buddha tertua di Sumatra, di tepi Sungai Kampar.",
    isi: [
      "Candi Muara Takus adalah kompleks candi Buddha di Kabupaten Kampar, Riau, yang berada di tepi Sungai Kampar Kanan.",
      "Bangunannya terbuat dari bata dan batu pasir, dengan beberapa bangunan utama seperti Candi Tua, Candi Bungsu, dan Stupa Mahligai.",
      "Para ahli memperkirakan situs ini berasal dari masa awal berkembangnya agama Buddha di Sumatra, meski penanggalan pastinya masih diperdebatkan."
    ],
    kuis: [
      { pertanyaan: "Candi Muara Takus berada di provinsi apa?", pilihan: ["Riau", "Jambi", "Bali", "Aceh"], benar: 0 },
      { pertanyaan: "Candi Muara Takus merupakan candi dengan latar agama apa?", pilihan: ["Buddha", "Hindu", "Islam", "Kristen"], benar: 0 }
    ]
  },

  // ----- TARIAN -----
  {
    id: "tari-pendet", judul: "Tari Pendet", daerah: "Bali", pulau: "nusa-tenggara", kategori: "tarian",
    koordinat: { x: 42.6, y: 86.0 },
    sinopsis: "Tarian persembahan Bali yang kini juga dipakai untuk menyambut tamu.",
    isi: [
      "Tari Pendet awalnya adalah tarian pemujaan yang dipentaskan di pura sebagai persembahan kepada para dewa.",
      "Para penari membawa bokor berisi bunga dan menaburkannya dengan gerak yang lembut dan anggun.",
      "Seiring waktu, Pendet berkembang menjadi tarian penyambutan, sehingga sering dipentaskan saat tamu datang."
    ],
    kuis: [
      { pertanyaan: "Apa fungsi awal Tari Pendet?", pilihan: ["Persembahan di pura", "Tarian perang", "Hiburan di pasar", "Upacara panen"], benar: 0 },
      { pertanyaan: "Apa yang dibawa para penari Pendet?", pilihan: ["Bokor berisi bunga", "Tombak", "Piring", "Kipas"], benar: 0 }
    ]
  },
  {
    id: "tari-piring", judul: "Tari Piring", daerah: "Sumatera Barat", pulau: "sumatra", kategori: "tarian",
    koordinat: { x: 14.0, y: 40.5 },
    sinopsis: "Tarian Minangkabau dengan piring di telapak tangan, lahir dari ungkapan syukur atas panen.",
    isi: [
      "Tari Piring berasal dari Minangkabau, Sumatera Barat. Penarinya memegang piring di kedua telapak tangan sambil menari dengan gerakan cepat tanpa menjatuhkan piring.",
      "Tarian ini dahulu merupakan ungkapan rasa syukur kepada dewa atas hasil panen yang baik.",
      "Dalam pertunjukan modern, sering ada bagian di mana penari menginjak pecahan piring, yang menunjukkan keterampilan dan keberanian."
    ],
    kuis: [
      { pertanyaan: "Apa yang dipegang penari dalam Tari Piring?", pilihan: ["Piring", "Keris", "Kipas", "Selendang"], benar: 0 },
      { pertanyaan: "Tari Piring berasal dari suku apa?", pilihan: ["Minangkabau", "Bugis", "Dayak", "Sunda"], benar: 0 }
    ]
  },
  {
    id: "tari-reog-ponorogo", judul: "Reog Ponorogo", daerah: "Jawa Timur", pulau: "jawa", kategori: "tarian",
    koordinat: { x: 37.5, y: 79.8 },
    sinopsis: "Pertunjukan kolosal Ponorogo dengan Singa Barong bermahkota bulu merak.",
    isi: [
      "Reog adalah kesenian khas Ponorogo, Jawa Timur. Ikonnya adalah Singa Barong, topeng singa besar bermahkota bulu merak yang sangat berat dan dibawa dengan kekuatan gigi penarinya.",
      "Pertunjukannya melibatkan tokoh Warok yang gagah, penari Jathil yang menunggang kuda anyaman, dan Klono Sewandono sang raja.",
      "Banyak cerita menghubungkan Reog dengan sindiran terhadap raja pada masa akhir Majapahit. Nama Singa Barong juga dikenal sebagai nama dapur keris."
    ],
    kuis: [
      { pertanyaan: "Apa ikon utama Reog Ponorogo?", pilihan: ["Singa Barong dengan bulu merak", "Topeng Cakil", "Piring", "Naga"], benar: 0 },
      { pertanyaan: "Penari berkuda anyaman dalam Reog disebut?", pilihan: ["Jathil", "Warok", "Sinden", "Dalang"], benar: 0 }
    ]
  },
  {
    id: "tari-pakarena", judul: "Tari Pakarena", daerah: "Sulawesi Selatan", pulau: "sulawesi", kategori: "tarian",
    koordinat: { x: 54.5, y: 60.8 },
    sinopsis: "Tarian lemah lembut dari Gowa yang menggambarkan keanggunan perempuan Makassar.",
    isi: [
      "Tari Pakarena berasal dari Gowa, Sulawesi Selatan, dan awalnya dipentaskan di lingkungan istana.",
      "Gerakannya lambat dan mengalir, dengan penari perempuan yang memegang kipas sambil diiringi musik tradisional.",
      "Tarian ini melambangkan kelembutan, kesopanan, dan kesetiaan perempuan Makassar."
    ],
    kuis: [
      { pertanyaan: "Dari kabupaten mana Tari Pakarena berasal?", pilihan: ["Gowa", "Ponorogo", "Karo", "Flores"], benar: 0 },
      { pertanyaan: "Bagaimana ciri gerakan Tari Pakarena?", pilihan: ["Lambat dan mengalir", "Cepat dan menghentak", "Melompat tinggi", "Berputar tanpa henti"], benar: 0 }
    ]
  },
  {
    id: "tari-cakalele", judul: "Tari Cakalele", daerah: "Maluku", pulau: "maluku", kategori: "tarian",
    koordinat: { x: 72.5, y: 56.5 },
    sinopsis: "Tarian perang Maluku dengan parang dan perisai, menggambarkan keberanian prajurit.",
    isi: [
      "Cakalele adalah tarian perang dari Maluku yang dipentaskan dengan parang dan perisai (salawaku).",
      "Para penari yang umumnya mengenakan pakaian berwarna menyala menari diiringi tifa dan gong sambil berseru dan menghentak.",
      "Tarian ini menggambarkan semangat dan keberanian prajurit, dan kini sering dipentaskan dalam upacara adat serta penyambutan tamu."
    ],
    kuis: [
      { pertanyaan: "Apa nama perisai yang dipakai dalam Cakalele?", pilihan: ["Salawaku", "Landeyan", "Warangka", "Pamor"], benar: 0 },
      { pertanyaan: "Apa jenis Tari Cakalele?", pilihan: ["Tarian perang", "Tarian panen", "Tarian pernikahan", "Tarian bulan"], benar: 0 }
    ]
  },
  {
    id: "tari-tor-tor", judul: "Tari Tor-tor", daerah: "Sumatera Utara", pulau: "sumatra", kategori: "tarian",
    koordinat: { x: 11.4, y: 24.8 },
    sinopsis: "Tarian adat Batak yang diiringi gondang dan biasa hadir dalam upacara.",
    isi: [
      "Tor-tor adalah tarian adat masyarakat Batak di Sumatera Utara, diiringi musik gondang.",
      "Gerakannya yang berpusat pada gerak tangan dan hentakan kaki menyampaikan penghormatan dan rasa syukur.",
      "Tor-tor biasa ditarikan dalam upacara adat seperti pernikahan dan acara kebersamaan keluarga."
    ],
    kuis: [
      { pertanyaan: "Tor-tor berasal dari masyarakat apa?", pilihan: ["Batak", "Bugis", "Sunda", "Dayak"], benar: 0 },
      { pertanyaan: "Apa nama musik pengiring Tor-tor?", pilihan: ["Gondang", "Gamelan", "Kolintang", "Angklung"], benar: 0 }
    ]
  }
];

// ---------------------------------------------------------------------
// GENERATOR ISI + KUIS UNTUK DAPUR KERIS DAN TOMBAK
// Hanya memakai informasi yang sudah ada di `sinopsis`, tanpa fakta baru.
// ---------------------------------------------------------------------
function _hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }
function _kapital(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function _huruf(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

function _urai(sinopsis) {
  const m = sinopsis.match(/^(.*?)\.\s*Melambangkan\s+(.*?)\.?$/);
  return m ? { ciri: m[1].trim(), makna: m[2].trim() } : null;
}

function _susunPilihan(benar, pengecoh, kunci) {
  const opsi = pengecoh.slice(0, 3);
  const posisi = _hash(kunci) % (opsi.length + 1);
  opsi.splice(posisi, 0, benar);
  return { pilihan: opsi, benar: posisi };
}

const _istilah = {
  "kembang kacang": "bagian di pangkal bilah yang menonjol dan melengkung, bentuknya mirip belalai gajah",
  "pejetan": "cekungan di pangkal bilah",
  "sogokan": "alur memanjang pada bilah",
  "lambe gajah": "tonjolan di pangkal bilah yang menyerupai bibir gajah",
  "tikel alis": "lekukan di pangkal bilah yang bentuknya menyerupai alis",
  "gandik": "bagian pangkal bilah tempat ricikan-ricikan dipahat"
};

function _infoLuk(entri) {
  const m = entri.sinopsis.match(/luk\s+([a-z]+(?:\s+belas)?(?:\s+atau\s+[a-z]+)?)/i);
  if (m) return `Bilahnya berkelok (luk) dengan jumlah luk: ${m[1].toLowerCase()}.`;
  if (/lurus/i.test(entri.kelompok)) return "Bilahnya lurus, tanpa kelokan (luk).";
  return "";
}

function bangunKontenDapur(entri, semua, kosong) {
  const u = _urai(entri.sinopsis);
  if (!u) return null;
  const saudara = semua
    .filter((e) => e.kategori === entri.kategori && e.id !== entri.id && kosong.has(e.id) && e.sinopsis)
    .map((e) => ({ e, u: _urai(e.sinopsis) }))
    .filter((x) => x.u)
    .sort((a, b) => _hash(entri.id + a.e.id) - _hash(entri.id + b.e.id));

  const maknaLain = [...new Set(saudara.map((x) => _kapital(x.u.makna)).filter((t) => t !== _kapital(u.makna)))];
  const ciriLain = [...new Set(saudara.map((x) => _kapital(x.u.ciri)).filter((t) => t !== _kapital(u.ciri)))];
  if (maknaLain.length < 3 || ciriLain.length < 3) return null;

  const kelompokLain = [...new Set(
    semua.filter((e) => e.kategori === entri.kategori && e.kelompok && e.kelompok !== entri.kelompok).map((e) => e.kelompok)
  )].sort((a, b) => _hash(entri.id + a) - _hash(entri.id + b));

  const jenis = entri.kategori === "keris" ? "keris" : "tombak";
  const lcSin = entri.sinopsis.toLowerCase();
  const adaIstilah = Object.keys(_istilah).filter((t) => lcSin.includes(t));
  const glosarium = adaIstilah.length
    ? "Istilah: " + adaIstilah.map((t) => `${t} ialah ${_istilah[t]}`).join("; ") + "."
    : "";
  const luk = _infoLuk(entri);

  const penutup = jenis === "keris"
    ? "Bilah keris ditempa oleh seorang empu dengan lapisan logam berpamor, sehingga tidak ada dua keris yang benar-benar sama. Makna dapur menjadi harapan dan pengingat bagi pemiliknya."
    : "Seperti keris, bilah tombak ditempa oleh seorang empu dan dikelompokkan menurut dapur. Tombak pusaka dihormati sebagai lambang kewibawaan dan perlindungan.";

  const isi = [
    `${entri.judul} termasuk dapur ${jenis} dalam kelompok "${entri.kelompok}".${luk ? " " + luk : ""}`,
    `Ciri bilahnya: ${_huruf(u.ciri)}.${glosarium ? " " + glosarium : ""}`,
    `Secara filosofis, dapur ini melambangkan ${u.makna}.`,
    penutup
  ];

  const q1 = _susunPilihan(_kapital(u.makna), maknaLain, entri.id + "m");
  const q2 = _susunPilihan(_kapital(u.ciri), ciriLain, entri.id + "c");
  const kuis = [
    { pertanyaan: `Apa makna filosofis dapur ${entri.judul}?`, ...q1 },
    { pertanyaan: `Manakah ciri bilah dapur ${entri.judul}?`, ...q2 }
  ];
  if (kelompokLain.length >= 2) {
    const q3 = _susunPilihan(entri.kelompok, kelompokLain, entri.id + "k");
    kuis.push({ pertanyaan: `${entri.judul} termasuk dalam kelompok apa?`, ...q3 });
  }
  return { isi, kuis };
}

// ---------------------------------------------------------------------
// PENGGABUNG
// ---------------------------------------------------------------------
function gabungkan(dataAsli) {
  // salin dalam supaya data asli tidak berubah
  const data = JSON.parse(JSON.stringify(dataAsli));

  // 1) perbaikan data lama
  data.forEach((d) => { if (perbaikan[d.id]) perbaikan[d.id](d); });

  // 2) isi + kuis untuk wayang yang sudah ditulis tangan
  data.forEach((d) => {
    if (!d.isi && lengkapan[d.id]) { d.isi = lengkapan[d.id].isi; d.kuis = lengkapan[d.id].kuis; }
  });

  // 3) entri baru (lewati jika id sudah ada)
  const ada = new Set(data.map((d) => d.id));
  entriBaru.forEach((e) => { if (!ada.has(e.id)) data.push(JSON.parse(JSON.stringify(e))); });

  // 4) dapur keris/tombak: bangun otomatis dari sinopsis
  const snapshot = data.slice();
  const kosong = new Set(snapshot.filter((d) => !d.isi).map((d) => d.id)); // tetap, agar hasil tidak bergantung urutan
  data.forEach((d) => {
    if (!d.isi && (d.kategori === "keris" || d.kategori === "tombak")) {
      const k = bangunKontenDapur(d, snapshot, kosong);
      if (k) { d.isi = k.isi; d.kuis = k.kuis; }
    }
  });
  return data;
}

// ---------------------------------------------------------------------
// VALIDATOR
// ---------------------------------------------------------------------
function validasi(data) {
  const kategoriSah = ["cerita", "candi", "tarian", "wayang", "keris", "tombak"];
  const pulauSah = ["sumatra", "jawa", "kalimantan", "sulawesi", "nusa-tenggara", "maluku", "papua"];
  const perluPeta = ["cerita", "candi", "tarian"];
  const galat = [], peringatan = [], ids = new Map(), judulKategori = new Map();
  let tanpaIsi = 0;

  data.forEach((d, i) => {
    const t = `[${i}] ${d.id || "(tanpa id)"}`;
    ["id", "judul", "daerah", "kategori", "sinopsis"].forEach((f) => { if (!d[f]) galat.push(`${t}: field "${f}" kosong`); });
    if (d.id) { if (ids.has(d.id)) galat.push(`${t}: id duplikat`); ids.set(d.id, true); }
    if (d.kategori && !kategoriSah.includes(d.kategori)) galat.push(`${t}: kategori "${d.kategori}" tidak dikenal`);

    if (perluPeta.includes(d.kategori)) {
      if (!d.koordinat) galat.push(`${t}: koordinat hilang`);
      else if (!(d.koordinat.x >= 0 && d.koordinat.x <= 100 && d.koordinat.y >= 0 && d.koordinat.y <= 100)) galat.push(`${t}: koordinat di luar 0-100`);
      if (!pulauSah.includes(d.pulau)) galat.push(`${t}: pulau "${d.pulau}" tidak valid`);
    }

    if (d.isi && !Array.isArray(d.isi)) galat.push(`${t}: isi bukan array`);
    if (d.kuis) {
      if (!d.isi) peringatan.push(`${t}: punya kuis tapi tanpa isi`);
      d.kuis.forEach((q, j) => {
        if (!q.pertanyaan || !Array.isArray(q.pilihan) || q.pilihan.length < 2) galat.push(`${t} kuis[${j}]: bentuk salah`);
        else {
          if (!(Number.isInteger(q.benar) && q.benar >= 0 && q.benar < q.pilihan.length)) galat.push(`${t} kuis[${j}]: indeks "benar" di luar jangkauan`);
          if (new Set(q.pilihan).size !== q.pilihan.length) galat.push(`${t} kuis[${j}]: pilihan duplikat`);
        }
      });
    }
    if (!d.isi) tanpaIsi++;

    const kj = `${d.kategori}|${(d.judul || "").toLowerCase()}`;
    if (judulKategori.has(kj)) galat.push(`${t}: judul sama dalam kategori yang sama`);
    judulKategori.set(kj, true);
  });

  return { total: data.length, tanpaIsi, galat, peringatan };
}

if (typeof module !== "undefined") module.exports = { gabungkan, validasi, perbaikan, lengkapan, entriBaru, bangunKontenDapur };
dataBudaya = gabungkan(dataBudaya);
const dataLengkap = dataBudaya;
