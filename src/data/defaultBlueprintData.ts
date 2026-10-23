import type { ProfileData, BlueprintProject } from '../types/portfolio'

export const DEFAULT_PROFILE: ProfileData = {
  fullName: 'ZAKY IRHAB',
  brandTitle: 'AI-ORCHESTRATED ARCHITECT',
  roleTitle: 'MANDOR TEKNIS SISTEM & OTOMASI AI',
  heroTagline: 'AI-Orchestrated System Architect.',
  heroSubheadline: 'Riset Cepat, Otomasi AI Apapun, Siap Produksi.',
  intro1:
    'Berlatar belakang Sistem Informasi, saya menjembatani logika bisnis, analitik data, dan rekayasa sistem dengan mengorkestrasi armada AI modern untuk membangun aplikasi maupun otomasi dalam hitungan hari, bukan bulan.',
  intro2:
    'Dari merancang sistem kasir & proteksi dokumen, mengolah data opini publik skala regional–nasional, hingga membimbing juara LKS Artificial Intelligence Jawa Timur—saya terbiasa mempelajari domain baru dengan cepat, menerjemahkan bahasa teknis menjadi solusi praktis, dan menguji langsung hasilnya di perangkat nyata.',
  degree: 'S.Kom / Information Systems',
  profilePhoto: 'https://placehold.co/300x360/121212/F4F1EA?text=FOTO\\nZAKY+IRHAB',
  whatsappNumber: '6282236358872',
  whatsappMessage: 'Halo Zaky, saya ingin berdiskusi mengenai kebutuhan sistem / otomasi AI.',
  email: 'zakyirhab09@gmail.com',
  githubUrl: 'https://github.com/zakyirhab',
  trackRecord: [
    {
      id: 'tr-1',
      title: 'Data & Strategic Analytics',
      desc: 'Berpengalaman mengolah data medsos & riset komunikasi strategis tokoh publik/institusi (Python, Tableau, Sheets).'
    },
    {
      id: 'tr-2',
      title: 'AI Mentor Berprestasi',
      desc: 'Membimbing siswa SMK meraih Juara 1 Kota & Juara 3 Provinsi Jawa Timur pada ajang LKS Artificial Intelligence.'
    },
    {
      id: 'tr-3',
      title: 'Eks IT Support Universitas',
      desc: 'Terbiasa menangani troubleshooting perangkat fisik dan berkomunikasi lugas dengan pengguna non-teknis.'
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
      'Menutup celah selisih uang pergantian shift kasir, mencegah stok barang minus di pembukuan, dan memastikan cetak struk Bluetooth stabil.',
    features: [
      '[OK] Atomic Shift Closing: Kunci berantai antar shift kasir.',
      '[OK] Anti-Minus Guard: Tolak transaksi otomatis jika stok kurang.',
      '[OK] Direct ESC/POS & Dynamic QRIS: Cetak struk thermal cepat.'
    ],
    mandorRole: [
      '• Merancang logika akuntansi & kunci shift.',
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
      'Melindungi dokumen riset 245 halaman agar tidak bisa diunduh paksa (IDM) dan membatasi satu lisensi hanya untuk maksimal 2 perangkat aktif.',
    features: [
      '[OK] Canvas Page Streaming: Tanpa mengekspos URL PDF asli.',
      '[OK] PostgreSQL Row-Locking: Kunci keras maksimal 2 device.',
      '[OK] CORS-Free Proxy: Streaming cepat dari penyimpanan cloud.'
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
      'Membersihkan puluhan ribu komentar medsos penuh singkatan/bahasa gaul Indonesia menjadi klasifikasi sentimen yang akurat tanpa membuka data rahasia klien.',
    features: [
      '[OK] Kamus Normalisasi Slang & Singkatan Lokal Indonesia.',
      '[OK] Batch Pipeline Stabil untuk Puluhan Ribu Baris Teks.',
      '[OK] Redaksi Otomatis Identitas & Data Rahasia (PII).'
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
      'Menjalankan otomasi di atas HP Android fisik (bukan emulator) dengan lekukan sentuhan jari manusia alami agar aman dari deteksi anti-bot.',
    features: [
      '[OK] 100% Perangkat Android Fisik via Jembatan ADB.',
      '[OK] Generator Kurva Bezier & Micro-Jitter Manusia Alami.',
      '[OK] Auto-Recovery Saat Aplikasi Target Crash/Pop-up.'
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
