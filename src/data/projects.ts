export interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  category: string
  tag: string
  statusBadge: string
  statusColor: 'emerald' | 'sky' | 'purple' | 'amber'
  businessProblem: string
  foremanRole: string
  aiRole: string
  architectureHighlights: string[]
  metricsOrImpact: string
  techStack: string[]
  confidentialNotice?: string
  demoUrl?: string
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'cahaya-plastik',
    title: 'Retail POS & Financial Accounting Engine',
    subtitle: 'Sistem Kasir Toko Fisik Native Android dengan Proteksi Arus Kas Berantai',
    category: 'Mobile & Hardware Integration',
    tag: 'Production POS',
    statusBadge: 'Digunakan Operasional Harian',
    statusColor: 'emerald',
    businessProblem:
      'Toko retail fisik rentan kebocoran uang kas akibat pergantian shift yang tidak tercatat akurat, pencatatan manual bon gantung, dan selisih modal awal kasir.',
    foremanRole:
      'Merancang state machine pergantian shift kasir (atomic shift closing), validasi anti-saldo minus, audit kas harian, dan protokol ESC/POS printer thermal Bluetooth.',
    aiRole:
      'Mengonversi spesifikasi bisnis menjadi kode native Android (Kotlin), Room Database lokal, kalkulator subtotal diskon dinamis, dan generator struk belanja.',
    architectureHighlights: [
      'Atomic Shift Closing: Kasir tidak bisa tutup kas tanpa input fisik modal akhir + sistem otomatis menghitung selisih.',
      'Bluetooth ESC/POS Direct Stream: Komunikasi hardware printer thermal tanpa driver pihak ketiga.',
      'Negative Balance & Void Guard: Pencegahan manipulasi transaksi batal tanpa PIN otorisasi.',
      'Dynamic QRIS Base64 Renderer: Cetak QRIS langsung di atas struk kasir.'
    ],
    metricsOrImpact: 'Berjalan stabil setiap hari di toko retail fisik, memproses ratusan transaksi tanpa komplain selisih kas.',
    techStack: ['Android (Kotlin)', 'Room DB', 'ESC/POS Bluetooth', 'Coroutines', 'Material Design 3']
  },
  {
    id: 'katalog-restorasi',
    title: 'Interactive DRM & Digital Catalog Platform',
    subtitle: 'Platform Web Katalog Restorasi dengan Proteksi Pembajakan Keras 2-Device Lock',
    category: 'Full-Stack Web & Licensing SaaS',
    tag: 'Web Platform & DRM',
    statusBadge: 'Production Ready',
    statusColor: 'sky',
    businessProblem:
      'Riset manual restorasi motor klasik 245 halaman bernilai tinggi rentan dibajak, dicetak ilegal, dan disebarkan gratis jika didistribusikan dalam format PDF biasa.',
    foremanRole:
      'Merancang arsitektur zero-cost hosting: bypass CORS streaming Google Drive via reverse proxy, canvas rendering non-downloadable, dan PostgreSQL row-locking RPC untuk membatasi lisensi maksimal 2 perangkat.',
    aiRole:
      'Menulis kode serverless Vercel API, rendering PDF.js canvas viewport, Stored Procedure Supabase dengan transaksi FOR UPDATE, serta anti-copy key listener.',
    architectureHighlights: [
      'Google Drive Proxy Streaming: Memecah file PDF besar 245 halaman langsung ke memory canvas tanpa link file mentah bocor ke publik.',
      'Atomic 2-Device Hard Limit: Stored procedure Supabase mencegah race-condition aktivasi paralel.',
      'Dynamic Forensic Watermarking: Watermark canvas memuat kode lisensi unik pengguna aktif.',
      'Zero-Cost Infrastructure: Arsitektur serverless & cloud storage gratis yang sanggup menampung puluhan model motor.'
    ],
    metricsOrImpact: 'Daya tampung 100 model motor x 80 modul data, biaya server Rp 0/bulan, 100% tahan manipulasi DevTools.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase (PostgreSQL RPC)', 'PDF.js Canvas', 'Vercel Serverless']
  },
  {
    id: 'nlp-sentiment-engine',
    title: 'Large-Scale Public Sentiment & Social Listening Engine',
    subtitle: 'Pipeline Klasifikasi Teks Tidak Terstruktur & Opini Publik Skala Puluhan Ribu Data',
    category: 'Applied NLP & Text Mining',
    tag: 'Data Intelligence',
    statusBadge: 'Confidential Case Study',
    statusColor: 'purple',
    businessProblem:
      'Memahami persepsi publik di media sosial secara akurat sangat sulit karena data sangat berisik, dipenuhi bahasa gaul (slang regional), singkatan tidak baku, dan volume puluhan ribu komentar.',
    foremanRole:
      'Merancang pipeline normalisasi kamus slang Indonesia, pembersihan stopword kontekstual, pemetaan label multi-class sentimen, dan dashboard agregat tanpa bias algoritma.',
    aiRole:
      'Mengembangkan skrip scraping berkecepatan tinggi, regex text normalizer, tokenisasi, dan pelatihan classifier (LSTM & Naive Bayes/KNN ensemble).',
    architectureHighlights: [
      'Regional Slang & Typo Normalizer: Kamus leksikon otomatis yang memetakan variasi ketikan non-standar ke kata baku.',
      'Multi-Polarity Sentiment Classification: Klasifikasi presisi untuk sentimen Positif, Negatif, dan Netral.',
      'Noise & Bot Filtering: Eliminasi duplikasi komentar dan akun spam sebelum masuk ke pipeline evaluasi.',
      'Executive Aggregate Trends: Agregasi waktu nyata untuk membaca pergeseran opini tanpa membaca puluhan ribu teks manual.'
    ],
    metricsOrImpact: 'Mengolah puluhan ribu baris komentar media sosial menjadi laporan inteligensi sentimen publik yang bersih.',
    techStack: ['Python', 'NLP Preprocessing', 'Scikit-Learn', 'LSTM / Ensemble Classifiers', 'Pandas / NumPy'],
    confidentialNotice: 'Studi kasus metodologi & arsitektur sistem. Dataset mentah dan entitas klien dilindungi kerahasiaan penuh.'
  },
  {
    id: 'instahuman-adb',
    title: 'Physical Android Automation & Device Orchestration',
    subtitle: 'Engine Otomasi Perangkat Fisik Tingkat Rendah via Android ADB & UIAutomator2',
    category: 'Hardware & Mobile Automation',
    tag: 'Device Orchestration',
    statusBadge: 'Open Engineering Demo',
    statusColor: 'amber',
    businessProblem:
      'Otomasi pengujian aplikasi mobile dan interaksi akun via emulator sering kali terdeteksi dan diblokir oleh sistem keamanan aplikasi modern.',
    foremanRole:
      'Merancang arsitektur otomasi yang mengendalikan HP fisik langsung lewat kabel/WiFi ADB dengan simulasi perilaku sentuhan manusia (humanized touch curves).',
    aiRole:
      'Menulis driver kontrol ADB, parsing hierarki XML UIAutomator2, fungsi random jitter timing, dan koordinat gestur tap/swipe berbasis elemen UI.',
    architectureHighlights: [
      'Physical Hardware Bypass: Berjalan di perangkat Android fisik nyata, bukan emulator yang mudah dideteksi.',
      'Human-Mimic Motion Curves: Delay acak terdistribusi normal (Gaussian) dan offset koordinat klik alami.',
      'DOM/XML Hierarchy Inspection: Mencari elemen tombol secara dinamis meskipun resolusi layar berbeda.',
      'Fault-Tolerant Daemon: Auto-reconnect jika kabel USB atau koneksi ADB terputus sementara.'
    ],
    metricsOrImpact: 'Eksekusi ratusan siklus interaksi otomatis tanpa crash dan lolos sensor bot emulator.',
    techStack: ['Python', 'Android ADB', 'UIAutomator2', 'Device Daemon', 'Shell Automation']
  }
]
