import type { Language } from '../types/portfolio'

export interface TranslationDictionary {
  nav: {
    profile: string
    aiLab: string
    systems: string
    methodology: string
    discuss: string
    themeDark: string
    themeLight: string
  }
  hero: {
    roleMain: string
    flexibility: string
    flexibilityVal: string
    speed: string
    speedVal: string
    audit: string
    auditVal: string
    stamp: string
    statusLive: string
    tagline: string
    subheadline: string
    intro1: string
    intro2: string
    degree: string
    trackRecordHeader: string
    trackRecords: {
      title: string
      desc: string
    }[]
    dna1Title: string
    dna1Desc: string
    dna2Title: string
    dna2Desc: string
    dna3Title: string
    dna3Desc: string
    ctaSystems: string
    ctaChallenge: string
    diagTitle: string
    diagSubtitle: string
    diagHint: string
    diagTabs: string[]
    diagLabelProblem: string
    diagLabelSolution: string
    btnToLab: string
    btnToSystem: string
  }
  aiLab: {
    sectionTag: string
    title: string
    desc: string
    examplesLabel: string
    customInputLabel: string
    customPlaceholder: string
    btnBedah: string
    planHeader: string
    step1: string
    step2: string
    step3: string
    interested: string
    ctaWa: string
  }
  workbench: {
    sectionTag: string
    title: string
    desc: string
    tabSimAndPhoto: string
    tabSimOnly: string
    problemLabel: string
    archLabel: string
    divisionHeader: string
    mandorLabel: string
    aiLabel: string
    modeSim: string
    modePhoto: string
    nlpPrivacyNotice: string
    hardwareAssurance: string
    modeSimActive: string
    modePhotoActive: string
    btnNextPhoto: string
  }
  methodology: {
    sectionTag: string
    title: string
    card1Tag: string
    card1Title: string
    card1Desc: string
    card2Tag: string
    card2Title: string
    card2Desc: string
    card3Tag: string
    card3Title: string
    card3Desc: string
    tableHeaderParam: string
    tableHeaderTrad: string
    tableHeaderVibe: string
    tableHeaderZaky: string
    row1Param: string
    row1Trad: string
    row1Vibe: string
    row1Zaky: string
    row2Param: string
    row2Trad: string
    row2Vibe: string
    row2Zaky: string
    row3Param: string
    row3Trad: string
    row3Vibe: string
    row3Zaky: string
  }
  footer: {
    badge: string
    title: string
    desc: string
    ctaWa: string
    ctaEmail: string
    ctaGithub: string
    tagline: string
    adminPanel: string
  }
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  id: {
    nav: {
      profile: '01/ Profil',
      aiLab: '02/ Lab Otomasi AI',
      systems: '03/ 4 Proyek Nyata',
      methodology: '04/ Cara Kerja',
      discuss: 'Diskusi Proyek',
      themeDark: 'Mode Gelap',
      themeLight: 'Mode Terang'
    },
    hero: {
      roleMain: 'PERAN UTAMA',
      flexibility: 'FLEKSIBILITAS',
      flexibilityVal: 'PROYEK SERUPA / RISET BARU',
      speed: 'KECEPATAN RILIS',
      speedVal: 'HITUNGAN HARI (BUKAN BULAN)',
      audit: 'VALIDASI MUTU',
      auditVal: 'AUDIT KETAT & UJI HARDWARE',
      stamp: 'MANDOR TEKNIS SISTEM & OTOMASI AI',
      statusLive: 'Terbuka untuk Eksplorasi & Proyek Baru',
      tagline: 'AI-Orchestrated System Architect.',
      subheadline: 'Riset Cepat, Otomasi AI Apapun, Siap Produksi.',
      intro1:
        'Berlatar belakang Sistem Informasi, saya menjembatani logika bisnis, analitik data, dan rekayasa sistem dengan mengorkestrasi armada AI modern untuk membangun aplikasi maupun otomasi dalam hitungan hari, bukan bulan.',
      intro2:
        'Dari merancang sistem kasir & proteksi dokumen, mengolah data opini publik skala regional–nasional, hingga membimbing juara LKS Artificial Intelligence Jawa Timur—saya terbiasa mempelajari domain baru dengan cepat, menerjemahkan bahasa teknis menjadi solusi praktis, dan menguji langsung hasilnya di perangkat nyata.',
      degree: 'S.Kom / Information Systems',
      trackRecordHeader: 'REKAM JEJAK & LATAR BELAKANG',
      trackRecords: [
        {
          title: 'Data & Strategic Analytics',
          desc: 'Berpengalaman mengolah data medsos & riset komunikasi strategis tokoh publik/institusi (Python, Tableau, Sheets).'
        },
        {
          title: 'AI Mentor Berprestasi',
          desc: 'Membimbing siswa SMK meraih Juara 1 Kota & Juara 3 Provinsi Jawa Timur pada ajang LKS Artificial Intelligence.'
        },
        {
          title: 'AI Mastery - Orbit Future Academy',
          desc: 'Studi mendalam & implementasi computer vision, NLP, dan orkestrasi machine learning industri.'
        },
        {
          title: 'Eks IT Support Universitas',
          desc: 'Terbiasa menangani troubleshooting perangkat fisik dan berkomunikasi lugas dengan pengguna non-teknis.'
        }
      ],
      dna1Title: '01. CEPAT BELAJAR',
      dna1Desc: 'Adaptif kuasai teknologi & alur bisnis baru.',
      dna2Title: '02. ORKESTRASI AI',
      dna2Desc: 'Eksekusi cepat dengan LLM, Agent, & API.',
      dna3Title: '03. AUDIT FISIK',
      dna3Desc: 'Bebas AI-slop. Dites di hardware nyata.',
      ctaSystems: 'Lihat 4 Proyek & Simulator',
      ctaChallenge: 'Tantang Ide Otomasi Baru',
      diagTitle: 'DIAGNOSA CEPAT',
      diagSubtitle: 'Apa Kebutuhan Anda Saat Ini?',
      diagHint: 'KLIK PILIHAN',
      diagTabs: [
        '01. Otomasi AI Kustom / Eksplorasi Sistem Baru',
        '02. POS & Kasir Anti-Bocor',
        '03. Proteksi DRM Dokumen',
        '04. Pipeline NLP & Opini',
        '05. Otomasi Android Fisik'
      ],
      diagLabelProblem: 'MASALAH:',
      diagLabelSolution: 'SOLUSI ARSITEKTUR:',
      btnToLab: 'Ke Lab AI ->',
      btnToSystem: 'Lihat Proyek ->'
    },
    aiLab: {
      sectionTag: '// 02. LAB EKSPLORASI & OTOMASI AI',
      title: 'Punya Tantangan Otomasi Baru? Mari Kita Bedah Arsitekturnya.',
      desc: 'Pilih skenario di bawah atau ketik langsung masalah operasional Anda untuk melihat pendekatan riset & eksekusi saya.',
      examplesLabel: 'CONTOH OTOMASI LINTAS BIDANG:',
      customInputLabel: 'KETIK KEBUTUHAN KUSTOM ANDA:',
      customPlaceholder: 'Contoh: Otomasi rekap invoice dari WA...',
      btnBedah: 'Bedah',
      planHeader: 'RENCANA EKSEKUSI ARSITEK',
      step1: '1. RISET CEPAT',
      step2: '2. ORKESTRASI AI',
      step3: '3. AUDIT & KUNCI',
      interested: 'Tertarik membangun sistem ini?',
      ctaWa: 'Diskusi via WhatsApp'
    },
    workbench: {
      sectionTag: '// 03. 4 BUKTI SISTEM NYATA LINTAS INDUSTRI',
      title: 'Bukti Kemampuan Belajar & Eksekusi di 4 Medan Teknis Berbeda',
      desc: 'Dilengkapi Simulator Interaktif dan Galeri Dokumentasi Foto (khusus proyek NLP hanya menampilkan simulasi demi privasi data).',
      tabSimAndPhoto: 'SIMULASI + FOTO',
      tabSimOnly: 'MURNI SIMULASI',
      problemLabel: 'MASALAH INTI YANG DISELESAIKAN',
      archLabel: 'ARSITEKTUR KUNCI',
      divisionHeader: 'PEMBAGIAN TUGAS: ARSITEK VS. AI',
      mandorLabel: 'PERAN SAYA (ARSITEK):',
      aiLabel: 'PERAN AI (EKSEKUTOR):',
      modeSim: 'Simulasi Interaktif',
      modePhoto: 'Bukti Foto / Screenshot',
      nlpPrivacyNotice: '[PROTECTED] Proyek NLP: Hanya Simulasi (Privasi Data Klien)',
      hardwareAssurance: '[OK] DIUJI DI PERANGKAT FISIK',
      modeSimActive: 'MODE: SIMULATOR AKTIF',
      modePhotoActive: 'MODE: BUKTI FOTO PROYEK',
      btnNextPhoto: 'Foto'
    },
    methodology: {
      sectionTag: '// 04. CARA KERJA & STANDAR KUALITAS',
      title: 'Eksekusi Cepat dengan Armada AI, Dikunci Ketat oleh Audit Arsitek',
      card1Tag: '01 // RISET & ARSITEKTUR',
      card1Title: 'Pahami Alur & Tutup Celah',
      card1Desc: 'Mempelajari cepat aturan main bisnis Anda dan mengunci potensi kebocoran kas/data sebelum kode ditulis.',
      card2Tag: '02 // ORKESTRASI AI',
      card2Title: 'Eksekusi Lintas Teknologi',
      card2Desc: 'Mengomandoi armada AI untuk membangun modul sistem maupun alur otomasi cerdas dalam hitungan hari.',
      card3Tag: '03 // UJI LAPANGAN',
      card3Title: 'Audit Ketat & Uji Hardware',
      card3Desc: 'Setiap baris kode diuji terhadap skenario error, offline, hingga pengetesan langsung di perangkat keras fisik.',
      tableHeaderParam: 'Parameter',
      tableHeaderTrad: 'Developer Manual Biasa',
      tableHeaderVibe: '"Vibe Coder" Tanpa Audit',
      tableHeaderZaky: 'Zaky Irhab (AI-Orchestrated Architect)',
      row1Param: 'Kecepatan Rilis',
      row1Trad: '2 – 4 Bulan',
      row1Vibe: 'Cepat tapi rapuh di produksi',
      row1Zaky: 'Hitungan Hari & Siap Produksi',
      row2Param: 'Keamanan Kas & Data',
      row2Trad: 'Sering luput race-condition',
      row2Vibe: 'Rawan tembus & saldo minus',
      row2Zaky: 'Atomic Locking & Guardrail Ketat',
      row3Param: 'Uji Perangkat Fisik',
      row3Trad: 'Hanya simulator laptop',
      row3Vibe: 'Tidak pernah tes hardware',
      row3Zaky: 'Dites langsung di Printer & HP Fisik'
    },
    footer: {
      badge: 'DISKUSI LANGSUNG DENGAN ARSITEK',
      title: 'Punya Ide Otomasi AI atau Sistem yang Ingin Dibangun Cepat?',
      desc: 'Ceritakan alur yang ingin Anda bangun atau otomatisasi. Kita bedah arsitekturnya secara praktis dan transparan.',
      ctaWa: 'WhatsApp Sekarang ->',
      ctaEmail: 'Email',
      ctaGithub: 'GitHub',
      tagline: 'SSR/SEO READY • INDONESIA',
      adminPanel: 'Panel Admin'
    }
  },
  en: {
    nav: {
      profile: '01/ Profile',
      aiLab: '02/ AI Automation Lab',
      systems: '03/ 4 Live Systems',
      methodology: '04/ How I Work',
      discuss: 'Project Inquiry',
      themeDark: 'Dark Mode',
      themeLight: 'Light Mode'
    },
    hero: {
      roleMain: 'PRIMARY ROLE',
      flexibility: 'FLEXIBILITY',
      flexibilityVal: 'SIMILAR BUILDS / FRESH R&D',
      speed: 'DELIVERY SPEED',
      speedVal: 'DAYS, NOT MONTHS',
      audit: 'QUALITY GATING',
      auditVal: 'STRICT AUDIT & HARDWARE LAB',
      stamp: 'SYSTEMS ARCHITECT & AI AUTOMATION FOREMAN',
      statusLive: 'Available for Custom Builds & R&D',
      tagline: 'AI-Orchestrated System Architect.',
      subheadline: 'Rapid R&D, Any AI Automation, Production Ready.',
      intro1:
        'With an Information Systems engineering background, I bridge business logic, data analytics, and software architecture by orchestrating modern AI fleets to ship robust systems in days, not months.',
      intro2:
        'From architecting retail cash-guard POS and interactive DRM streaming to analyzing large-scale public sentiment and mentoring Vocational AI Competition winners—I quickly master unfamiliar domains, eliminate edge cases, and verify code on real physical devices.',
      degree: 'B.Sc / Information Systems',
      trackRecordHeader: 'TRACK RECORD & BACKGROUND',
      trackRecords: [
        {
          title: 'Data & Strategic Analytics',
          desc: 'Experienced in processing social media streams and strategic communication intelligence for institutions (Python, Tableau, Sheets).'
        },
        {
          title: 'National AI Competition Mentor',
          desc: 'Mentored vocational students to win 1st Place City and 3rd Place East Java Province at the official Artificial Intelligence Skills Competition.'
        },
        {
          title: 'AI Mastery - Orbit Future Academy',
          desc: 'Deep study and production implementation of computer vision, NLP, and enterprise machine learning.'
        },
        {
          title: 'Former University IT Support',
          desc: 'Hands-on troubleshooting of physical hardware and translating complex technical concepts to non-technical stakeholders.'
        }
      ],
      dna1Title: '01. RAPID LEARNER',
      dna1Desc: 'Mastering new business domains and stacks swiftly.',
      dna2Title: '02. AI ORCHESTRATION',
      dna2Desc: 'Ultra-fast execution with LLMs, Agents, and APIs.',
      dna3Title: '03. PHYSICAL AUDITING',
      dna3Desc: 'Zero AI slop. Rigorously tested on real hardware.',
      ctaSystems: 'Explore 4 Systems & Simulators',
      ctaChallenge: 'Challenge a Custom Automation',
      diagTitle: 'QUICK DIAGNOSTIC',
      diagSubtitle: 'What System Challenge Are You Facing?',
      diagHint: 'SELECT OPTION',
      diagTabs: [
        '01. Custom AI Automation / Unfamiliar System R&D',
        '02. Retail POS & Cash Shift Leak Prevention',
        '03. Document DRM & Licensing Protection',
        '04. Large-Scale NLP & Sentiment Pipeline',
        '05. Physical Android Device Automation'
      ],
      diagLabelProblem: 'CHALLENGE:',
      diagLabelSolution: 'ARCHITECTURAL FIX:',
      btnToLab: 'Explore in AI Lab ->',
      btnToSystem: 'Inspect System ->'
    },
    aiLab: {
      sectionTag: '// 02. EXPLORATION & AI AUTOMATION LAB',
      title: 'Facing a Novel Automation Challenge? Let Us Architect It.',
      desc: 'Pick an operational scenario below or type your custom bottleneck to see my rapid R&D and execution blueprint.',
      examplesLabel: 'CROSS-INDUSTRY AUTOMATION EXAMPLES:',
      customInputLabel: 'TYPE YOUR CUSTOM BOTTLENECK:',
      customPlaceholder: 'e.g. Automated invoice parsing from WhatsApp to ERP...',
      btnBedah: 'Architect It',
      planHeader: 'ARCHITECTURAL EXECUTION BLUEPRINT',
      step1: '1. RAPID R&D',
      step2: '2. AI ORCHESTRATION',
      step3: '3. AUDIT & GATEKEEPING',
      interested: 'Ready to build this system?',
      ctaWa: 'Discuss on WhatsApp'
    },
    workbench: {
      sectionTag: '// 03. 4 PROVEN PRODUCTION SYSTEMS',
      title: 'Evidence of Mastery & Execution Across 4 Distinct Technical Arenas',
      desc: 'Interactive sandboxes and live hardware documentation photos (NLP project is restricted to sanitized simulation for client confidentiality).',
      tabSimAndPhoto: 'SIMULATION + PHOTOS',
      tabSimOnly: 'SANITIZED SIMULATION',
      problemLabel: 'CORE BUSINESS PROBLEM RESOLVED',
      archLabel: 'KEY ARCHITECTURAL SAFEGUARDS',
      divisionHeader: 'RESPONSIBILITY MATRIX: ARCHITECT VS. AI',
      mandorLabel: 'MY ROLE (ARCHITECT & FOREMAN):',
      aiLabel: 'AI ROLE (RAPID CODE WORKER):',
      modeSim: 'Interactive Simulator',
      modePhoto: 'Hardware Photo Proof',
      nlpPrivacyNotice: '[CONFIDENTIAL] Institutional NLP: Sanitized Architecture Only',
      hardwareAssurance: '[OK] VERIFIED ON PHYSICAL HARDWARE',
      modeSimActive: 'MODE: INTERACTIVE SIMULATOR',
      modePhotoActive: 'MODE: PHOTO PROOF GALLERY',
      btnNextPhoto: 'Photo'
    },
    methodology: {
      sectionTag: '// 04. METHODOLOGY & QUALITY BENCHMARK',
      title: 'Rapid AI Velocity, Locked Down by Strict Architect Audits',
      card1Tag: '01 // R&D & ARCHITECTURE',
      card1Title: 'Understand Flows & Patch Leaks',
      card1Desc: 'Dissecting your exact business rules and locking down potential cash or security vulnerabilities before code is written.',
      card2Tag: '02 // AI ORCHESTRATION',
      card2Title: 'Multi-Stack Rapid Execution',
      card2Desc: 'Commanding high-performance AI models to assemble system modules and intelligent workflows in days.',
      card3Tag: '03 // FIELD VALIDATION',
      card3Title: 'Strict Audit & Physical Testing',
      card3Desc: 'Stress-testing against offline modes, race conditions, and testing directly on physical mobile devices and printers.',
      tableHeaderParam: 'Metric',
      tableHeaderTrad: 'Traditional Developer',
      tableHeaderVibe: 'Ungated "Vibe Coder"',
      tableHeaderZaky: 'Zaky Irhab (AI-Orchestrated Architect)',
      row1Param: 'Delivery Speed',
      row1Trad: '2 – 4 Months',
      row1Vibe: 'Fast but fragile in production',
      row1Zaky: 'Days & Production Ready',
      row2Param: 'Financial & Data Safety',
      row2Trad: 'Often misses race conditions',
      row2Vibe: 'Prone to negative balances',
      row2Zaky: 'Atomic Row-Locking & Hard Guardrails',
      row3Param: 'Physical Device Testing',
      row3Trad: 'Laptop emulator only',
      row3Vibe: 'Never touches real hardware',
      row3Zaky: 'Directly verified on physical devices',
    },
    footer: {
      badge: 'DIRECT DIALOGUE WITH THE ARCHITECT',
      title: 'Have an AI Automation or System That Needs to Be Built Fast?',
      desc: 'Tell me about the workflow you want to construct or automate. We will break down the architecture transparently.',
      ctaWa: 'Chat on WhatsApp ->',
      ctaEmail: 'Email',
      ctaGithub: 'GitHub',
      tagline: 'SSR/SEO READY • INDONESIA / GLOBAL',
      adminPanel: 'Admin Panel'
    }
  }
}
