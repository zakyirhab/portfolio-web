import type { ProfileData, BlueprintProject, NlpModelConfig } from '../types/portfolio'

export const DEFAULT_NLP_MODEL_CONFIG: NlpModelConfig = {
  modelName: 'IndoBERT-SlangNormalizer-v2.4',
  version: '2.4.1 (Protected)',
  inferenceType: 'rule_based',
  isProtected: true
}

export const DEFAULT_PROFILE: ProfileData = {
  fullName: 'ZAKY IRHAB',
  brandTitle: 'SYSTEM ARCHITECT',
  roleTitle: 'SYSTEM ARCHITECT & PRODUCT BUILDER',
  heroTagline: 'System Architect & Product Builder.',
  heroSubheadline: 'Merancang Sistem, Mengorkestrasi AI, Menguji di Kasus Nyata.',
  intro1:
    'Saya membantu bisnis dan founder membangun aplikasi, sistem backend, dan otomasi cerdas tanpa berbulan-bulan menunggu. Cepat, aman, dan langsung siap pakai.',
  intro2:
    'Setiap kode yang dihasilkan AI diaudit ketat dan diuji di skenario lapangan nyata.',
  degree: 'S.Kom / Sistem Informasi',
  profilePhoto: 'https://placehold.co/300x360/121212/F4F1EA?text=FOTO\\nZAKY+IRHAB',
  whatsappNumber: '6282236358872',
  whatsappMessage: 'Halo Zaky, saya ingin berdiskusi mengenai kebutuhan sistem / otomasi AI.',
  email: 'zakyirhab09@gmail.com',
  githubUrl: 'https://github.com/zakyirhab',
  trackRecord: [
    {
      id: 'tr-1',
      title: 'S.Kom / Sistem Informasi',
      desc: ''
    },
    {
      id: 'tr-2',
      title: 'Strategic Data Analytics',
      desc: ''
    },
    {
      id: 'tr-3',
      title: 'East Java LKS AI Mentor',
      desc: ''
    },
    {
      id: 'tr-4',
      title: 'AI Mastery - Orbit Future Academy',
      desc: ''
    }
  ]
}

export const DEFAULT_PROJECTS: BlueprintProject[] = [
  {
    id: 'pos',
    code: 'SYS-01',
    title: 'Retail POS & Financial Accounting Engine (CahayaPlastik)',
    subtitle: 'Android Native • Bluetooth Thermal ESC/POS • Dynamic QRIS',
    tags: ['ANDROID NATIVE', 'ATOMIC SHIFT', 'ESC/POS THERMAL'],
    problem:
      'Lahir dari kebutuhan toko retail yang kesulitan merekap kas dan stok secara manual, sistem kasir Android ini mengunci otomatis pergantian shift kasir (anti-selisih) serta menolak transaksi jika stok gudang kurang dari permintaan.',
    features: [
      '[OK] Atomic Shift Closing: Kunci berantai saldo kas antar shift kasir.',
      '[OK] Anti-Minus Guard: Tolak transaksi otomatis jika stok fisik kurang.',
      '[OK] Direct ESC/POS & Dynamic QRIS: Cetak struk thermal cepat & QRIS otomatis.'
    ],
    mandorRole: [
      '• Merancang logika akuntansi kasir & kunci shift.',
      '• Menguji langsung di tablet & printer fisik.'
    ],
    aiRole: [
      '• Mengeksekusi komponen layar UI Android.',
      '• Menulis fungsi format byte kertas 58mm.'
    ],
    hasPhotos: true,
    photos: [
      {
        url: 'https://placehold.co/800x450/162947/F4F1EA?text=Screenshot+UI+Kasir+CahayaPlastik+(Ganti+Path+Foto)',
        caption: 'Antarmuka Kasir Android Native & Guardrail Anti-Minus'
      },
      {
        url: 'https://placehold.co/800x450/121212/FF3B00?text=Foto+Struk+Thermal+ESC/POS+%26+QRIS+Fisik',
        caption: 'Pengujian Cetak Struk Bluetooth ESC/POS & Dynamic QRIS di Perangkat Fisik'
      }
    ]
  },
  {
    id: 'drm',
    code: 'SYS-02',
    title: 'Interactive DRM & Digital Catalog Platform (Katalog Restorasi)',
    subtitle: '245 Halaman PDF Canvas Streaming • PostgreSQL Atomic Lock',
    tags: ['CANVAS DRM', 'POSTGRESQL LOCK', 'MAX 2 DEVICES'],
    problem:
      'Menjawab masalah pencurian dokumen digital berbayar dan patungan akun ilegal, katalog 245 halaman ini ditampilkan lewat kanvas streaming tanpa file mentah serta dikunci ketat maksimal ke 2 perangkat aktif via PostgreSQL.',
    features: [
      '[OK] Canvas Page Streaming: Render per lembar tanpa ekspos file PDF mentah.',
      '[OK] PostgreSQL Row-Locking: Kunci keras maksimal 2 perangkat aktif.',
      '[OK] CORS-Free Proxy: Streaming cepat langsung dari cloud storage.'
    ],
    mandorRole: [
      '• Merancang query kunci atomik PostgreSQL.',
      '• Mengaudit proteksi Network Tab browser.'
    ],
    aiRole: [
      '• Membangun UI pembaca katalog & navigasi.',
      '• Menulis endpoint autentikasi sesi.'
    ],
    hasPhotos: true,
    photos: [
      {
        url: 'https://placehold.co/800x450/162947/38BDF8?text=Screenshot+Canvas+Reader+245+Halaman+(Ganti+Path+Foto)',
        caption: 'Tampilan Pembaca Katalog Restorasi via HTML5 Canvas Streaming'
      },
      {
        url: 'https://placehold.co/800x450/121212/FF3B00?text=Screenshot+Proteksi+Maksimal+2+Device+PostgreSQL',
        caption: 'Bukti Pemblokiran Otomatis Saat Perangkat Ke-3 Mencoba Login'
      }
    ]
  },
  {
    id: 'nlp',
    code: 'SYS-03',
    title: 'Public Sentiment & Social Listening Engine (Applied NLP)',
    subtitle: 'Pipeline Puluhan Ribu Opini Bahasa Indonesia • Anonim & Etis',
    tags: ['INDONESIAN NLP', 'SLANG NORMALIZER', 'PRIVACY SAFE'],
    problem:
      'Mengatasi kekacauan puluhan ribu komentar netizen yang penuh singkatan dan bahasa daerah, pipeline NLP ini otomatis membakukan bahasa gaul Indonesia untuk klasifikasi sentimen akurat sambil menyensor data pribadi warga.',
    features: [
      '[OK] Kamus Normalisasi Slang & Singkatan Lokal Indonesia.',
      '[OK] Batch Pipeline Stabil untuk Puluhan Ribu Baris Teks.',
      '[OK] Redaksi Otomatis Identitas & Data Rahasia Warga (PII).'
    ],
    mandorRole: [
      '• Merancang arsitektur kamus slang & sanitasi data.',
      '• Mengkalibrasi akurasi polaritas kalimat.'
    ],
    aiRole: [
      '• Membantu ekspansi kosakata sinonim slang.',
      '• Menulis skrip visualisasi laporan agregat.'
    ],
    hasPhotos: false,
    photos: []
  },
  {
    id: 'adb',
    code: 'SYS-04',
    title: 'Physical Android Automation & Orchestration (InstaHuman)',
    subtitle: 'Real Android Hardware via ADB • Bezier Human Touch Curve',
    tags: ['PHYSICAL ANDROID', 'ADB HARDWARE', 'BEZIER TOUCH'],
    problem:
      'Dibuat karena bot otomasi biasa selalu terblokir akibat deteksi emulator komputer, sistem ini mengendalikan HP Android fisik langsung dengan kurva sentuhan jari melengkung alami yang lolos deteksi keamanan aplikasi.',
    features: [
      '[OK] 100% Perangkat Android Fisik via Jembatan ADB.',
      '[OK] Generator Kurva Bezier & Micro-Jitter Sentuhan Manusia Alami.',
      '[OK] Auto-Recovery Saat Aplikasi Target Mengalami Pop-up/Crash.'
    ],
    mandorRole: [
      '• Merancang rumus matematika kurva Bezier.',
      '• Merakit dan menguji langsung di HP Android fisik.'
    ],
    aiRole: [
      '• Menulis parser XML layar UIAutomator2.',
      '• Membuat pencatatan log telemetri.'
    ],
    hasPhotos: true,
    photos: [
      {
        url: 'https://placehold.co/800x450/121212/34D399?text=Foto+Setup+HP+Android+Fisik+ADB+(Ganti+Path+Foto)',
        caption: 'Pengujian Langsung InstaHuman di Perangkat Smartphone Android Fisik'
      },
      {
        url: 'https://placehold.co/800x450/162947/F4F1EA?text=Screenshot+Log+Orchestrator+%26+Bezier+Telemetry',
        caption: 'Tampilan Log Kendali ADB & Telemetri Sentuhan Kurva Manusia'
      }
    ]
  }
]
