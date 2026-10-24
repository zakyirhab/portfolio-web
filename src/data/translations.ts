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
      aiLab: '02/ AI Lab',
      systems: '03/ 4 Sistem',
      methodology: '04/ Cara Kerja',
      discuss: 'Kontak WhatsApp',
      themeDark: 'Mode Gelap',
      themeLight: 'Mode Terang'
    },
    hero: {
      roleMain: 'PERAN',
      flexibility: 'METODE',
      flexibilityVal: 'ORKESTRASI AI & AUDIT',
      speed: 'RILIS',
      speedVal: 'HITUNGAN HARI',
      audit: 'PENGUJIAN',
      auditVal: 'HARDWARE & CODE AUDIT',
      stamp: 'SYSTEM ARCHITECT',
      statusLive: 'Terbuka untuk Kolaborasi Proyek',
      tagline: 'System Architect & Product Builder.',
      subheadline: 'Merancang Sistem, Mengorkestrasi AI, Menguji di Perangkat Nyata.',
      intro1:
        'Saya membantu bisnis dan founder membangun aplikasi, sistem backend, dan otomasi cerdas tanpa berbulan-bulan menunggu. Cepat, aman, dan langsung siap pakai.',
      intro2:
        'Setiap kode yang dihasilkan AI diaudit ketat dan diuji di hardware fisik (tablet kasir, server database, hingga smartphone Android riil).',
      degree: 'S.Kom / Sistem Informasi',
      trackRecordHeader: 'REKAM JEJAK UTAMA',
      trackRecords: [
        {
          title: 'S.Kom / Sistem Informasi',
          desc: 'Fondasi arsitektur sistem, desain database relasional, dan analisis proses bisnis.'
        },
        {
          title: 'Strategic Data Analytics',
          desc: 'Mengolah puluhan ribu percakapan medsos & riset komunikasi strategis (Python, Tableau).'
        },
        {
          title: 'East Java LKS AI Mentor',
          desc: 'Membimbing siswa SMK meraih Juara 1 Kota & Juara 3 Provinsi Jawa Timur di LKS AI.'
        },
        {
          title: 'AI Mastery - Orbit Future Academy',
          desc: 'Implementasi praktis machine learning industri, computer vision, dan pipeline NLP.'
        }
      ],
      dna1Title: '01. CEPAT BELAJAR',
      dna1Desc: 'Kuasai domain bisnis & teknologi baru.',
      dna2Title: '02. ORKESTRASI AI',
      dna2Desc: 'Bangun fitur instan dengan LLM & API.',
      dna3Title: '03. AUDIT FISIK',
      dna3Desc: 'Bebas celah error. Dites di hardware.',
      ctaSystems: 'Coba 4 Simulator Sistem',
      ctaChallenge: 'Bedah Kebutuhan Baru',
      diagTitle: 'DIAGNOSA KEBUTUHAN',
      diagSubtitle: 'Pilih Masalah Operasional Anda:',
      diagHint: 'PILIH',
      diagTabs: [
        '01. Otomasi AI & Eksplorasi Sistem',
        '02. Kasir POS & Kunci Saldo Shift',
        '03. Proteksi Dokumen & Anti-Bajak',
        '04. Pemrosesan Data & Opini Publik',
        '05. Otomasi Smartphone Android'
      ],
      diagLabelProblem: 'MASALAH:',
      diagLabelSolution: 'SOLUSI:',
      btnToLab: 'Ke Lab AI ->',
      btnToSystem: 'Buka Simulator ->'
    },
    aiLab: {
      sectionTag: '// 02. LAB OTOMASI AI',
      title: 'Punya Masalah Operasional? Mari Kita Bedah Solusinya.',
      desc: 'Pilih skenario atau ketik langsung kebutuhan Anda untuk melihat rancangan arsitektur dan langkah eksekusinya.',
      examplesLabel: 'CONTOH KASUS UMUM:',
      customInputLabel: 'ATAU TULIS MASALAH ANDA:',
      customPlaceholder: 'Contoh: Otomasi rekap order WhatsApp ke Google Sheets...',
      btnBedah: 'Bedah',
      planHeader: 'RANCANGAN ARSITEKTUR',
      step1: '1. RISET KEBUTUHAN',
      step2: '2. ORKESTRASI AI',
      step3: '3. UJI & VALIDASI',
      interested: 'Ingin membangun solusi seperti ini?',
      ctaWa: 'Diskusikan via WhatsApp'
    },
    workbench: {
      sectionTag: '// 03. 4 BUKTI HASIL SISTEM NYATA',
      title: '4 Hasil Proyek Nyata dengan Simulator Interaktif',
      desc: 'Bisa langsung Anda coba di browser. Tiap sistem telah diaudit dan diuji pada perangkat riil.',
      tabSimAndPhoto: 'SIMULASI + FOTO',
      tabSimOnly: 'SIMULASI',
      problemLabel: 'HASIL SISTEM & DAMPAK NYATA',
      archLabel: 'FITUR & SOLUSI KUNCI',
      divisionHeader: 'PEMBAGIAN PERAN: ARSITEK VS AI',
      mandorLabel: 'PERAN SAYA (ARSITEK):',
      aiLabel: 'PERAN AI (EKSEKUTOR):',
      modeSim: 'Live Simulator',
      modePhoto: 'Foto Hardware',
      nlpPrivacyNotice: '[PROTECTED] Proyek NLP: Mode Simulasi (Privasi Data Klien)',
      hardwareAssurance: '[OK] DIUJI PADA HARDWARE ASLI',
      modeSimActive: 'MODE: SIMULATOR AKTIF',
      modePhotoActive: 'MODE: FOTO DOKUMENTASI',
      btnNextPhoto: 'Foto'
    },
    methodology: {
      sectionTag: '// 04. PRINSIP KERJA',
      title: 'Eksekusi Cepat, Diaudit Ketat, Siap Produksi',
      card1Tag: '01 // ARSITEKTUR',
      card1Title: 'Pahami Aturan & Tutup Celah',
      card1Desc: 'Mengunci celah kebocoran uang dan data bisnis sebelum penulisan kode dimulai.',
      card2Tag: '02 // ORKESTRASI AI',
      card2Title: 'Bangun Cepat Lintas Stack',
      card2Desc: 'Mengomandoi AI untuk menulis komponen dan otomasi dalam hitungan hari, bukan bulan.',
      card3Tag: '03 // REAL-CASE AUDIT & PRECISION TUNING',
      card3Title: 'Pengujian Skenario Nyata & Tuning Presisi',
      card3Desc: 'Setiap sistem diuji langsung pada skenario nyata di lapangan, kemudian dituning dan diperbaiki tuntas hingga benar-benar stabil dan siap operasi.',
      tableHeaderParam: 'Aspek',
      tableHeaderTrad: 'Developer Konvensional',
      tableHeaderVibe: 'Coder AI Tanpa Audit',
      tableHeaderZaky: 'Zaky Irhab (System Architect)',
      row1Param: 'Kecepatan Selesai',
      row1Trad: 'Berminggu-minggu / Bulanan',
      row1Vibe: 'Sangat cepat tapi rentan bug',
      row1Zaky: 'Hitungan Hari (Cepat & Teruji)',
      row2Param: 'Kualitas Kode & Logika',
      row2Trad: 'Bagus tapi proses lambat',
      row2Vibe: 'AI slop, mudah jebol saat error',
      row2Zaky: 'Diaudit ketat, anti-halusinasi',
      row3Param: 'Pengujian Lapangan',
      row3Trad: 'Jarang tes di kondisi riil',
      row3Vibe: 'Hanya jalan di browser demo',
      row3Zaky: 'Real-case testing, tuning ketat, & perbaikan tuntas'
    },
    footer: {
      badge: 'TERBUKA UNTUK PROYEK',
      title: 'Siap Membangun Sistem Tanpa Menunggu Berbulan-bulan?',
      desc: 'Mari berdiskusi singkat tentang alur kerja yang ingin Anda sederhanakan atau sistem baru yang ingin Anda luncurkan.',
      ctaWa: 'Chat WhatsApp',
      ctaEmail: 'Kirim Email',
      ctaGithub: 'Lihat GitHub',
      tagline: 'System Architect & Product Builder. Divalidasi di perangkat keras nyata.',
      adminPanel: 'Panel Admin'
    }
  },
  en: {
    nav: {
      profile: '01/ Profile',
      aiLab: '02/ AI Lab',
      systems: '03/ 4 Systems',
      methodology: '04/ Methodology',
      discuss: 'WhatsApp Chat',
      themeDark: 'Dark Mode',
      themeLight: 'Light Mode'
    },
    hero: {
      roleMain: 'ROLE',
      flexibility: 'METHOD',
      flexibilityVal: 'AI ORCHESTRATION & AUDIT',
      speed: 'DELIVERY',
      speedVal: 'DAYS, NOT MONTHS',
      audit: 'VERIFICATION',
      auditVal: 'HARDWARE & CODE AUDIT',
      stamp: 'SYSTEM ARCHITECT',
      statusLive: 'Open for Direct Engineering Work',
      tagline: 'System Architect & Product Builder.',
      subheadline: 'Architecting Systems, Orchestrating AI, Testing on Real Devices.',
      intro1:
        'I help businesses and founders build applications, reliable backends, and smart automations in days instead of months. Fast, resilient, and production-ready.',
      intro2:
        'All AI-generated code is strictly audited and verified against real physical hardware (tablets, thermal printers, database servers, and Android phones).',
      degree: 'B.Sc / Information Systems',
      trackRecordHeader: 'KEY TRACK RECORD',
      trackRecords: [
        {
          title: 'B.Sc / Information Systems',
          desc: 'Foundational systems design, relational database schemas, and business process modeling.'
        },
        {
          title: 'Strategic Data Analytics',
          desc: 'Processing tens of thousands of social media streams & communication intelligence (Python, Tableau).'
        },
        {
          title: 'East Java LKS AI Mentor',
          desc: 'Mentored vocational students to 1st Place City and 3rd Place Province at the official AI Skills Competition.'
        },
        {
          title: 'AI Mastery - Orbit Future Academy',
          desc: 'Industrial applied machine learning, computer vision architectures, and NLP pipelines.'
        }
      ],
      dna1Title: '01. RAPID LEARNER',
      dna1Desc: 'Quickly master new stacks & workflows.',
      dna2Title: '02. AI ORCHESTRATION',
      dna2Desc: 'Ship instantly with LLMs & APIs.',
      dna3Title: '03. HARDWARE AUDIT',
      dna3Desc: 'Zero AI slop. Verified on devices.',
      ctaSystems: 'Try 4 Live Simulators',
      ctaChallenge: 'Audit a New Challenge',
      diagTitle: 'QUICK DIAGNOSTIC',
      diagSubtitle: 'Select Your System Challenge:',
      diagHint: 'CHOOSE',
      diagTabs: [
        '01. Custom AI Automation & R&D',
        '02. Retail POS & Shift Cash Locks',
        '03. Document DRM & Anti-Piracy',
        '04. Data Pipelines & Public Opinion',
        '05. Physical Android Automation'
      ],
      diagLabelProblem: 'PROBLEM:',
      diagLabelSolution: 'SOLUTION:',
      btnToLab: 'Open AI Lab ->',
      btnToSystem: 'Launch Simulator ->'
    },
    aiLab: {
      sectionTag: '// 02. RAPID AI LAB',
      title: 'Facing an Operational Bottleneck? Let Us Architect It.',
      desc: 'Pick a scenario or type your custom requirement to see my architecture and execution plan.',
      examplesLabel: 'COMMON USE CASES:',
      customInputLabel: 'OR TYPE YOUR REQUIREMENT:',
      customPlaceholder: 'e.g. Parse WhatsApp orders to Google Sheets with automated invoice...',
      btnBedah: 'Architect It',
      planHeader: 'EXECUTION BLUEPRINT',
      step1: '1. REQUIREMENT R&D',
      step2: '2. AI ORCHESTRATION',
      step3: '3. VERIFICATION',
      interested: 'Want to build an architecture like this?',
      ctaWa: 'Discuss via WhatsApp'
    },
    workbench: {
      sectionTag: '// 03. 4 PRODUCTION PROJECT DELIVERABLES',
      title: '4 Battle-Tested Project Deliverables with Interactive Simulators',
      desc: 'Test each core mechanism live in your browser. Every system has been verified in production-grade environments.',
      tabSimAndPhoto: 'SIM + PHOTOS',
      tabSimOnly: 'SIMULATOR',
      problemLabel: 'PROJECT IMPACT & OUTCOME',
      archLabel: 'KEY ARCHITECTURAL FIXES',
      divisionHeader: 'DIVISION OF LABOR: ARCHITECT VS AI',
      mandorLabel: 'MY ARCHITECT ROLE:',
      aiLabel: 'AI FLEET ROLE:',
      modeSim: 'Live Simulator',
      modePhoto: 'Hardware Photos',
      nlpPrivacyNotice: '[PROTECTED] NLP System: Simulation Only (Client Privacy Guard)',
      hardwareAssurance: '[OK] VERIFIED IN REAL-WORLD SCENARIOS',
      modeSimActive: 'MODE: SIMULATOR ACTIVE',
      modePhotoActive: 'MODE: PHOTO PROOF',
      btnNextPhoto: 'Photo'
    },
    methodology: {
      sectionTag: '// 04. METHODOLOGY',
      title: 'Fast Execution, Strictly Audited, Production Ready',
      card1Tag: '01 // ARCHITECTURE',
      card1Title: 'Understand Rules & Lock Edge Cases',
      card1Desc: 'Eliminating financial and data leaks before any code is generated.',
      card2Tag: '02 // AI ORCHESTRATION',
      card2Title: 'Rapid Cross-Stack Building',
      card2Desc: 'Directing AI fleets to build complex logic and automations in days, not months.',
      card3Tag: '03 // REAL-CASE AUDIT & PRECISION TUNING',
      card3Title: 'Real-World Scenario Auditing & Fine Tuning',
      card3Desc: 'Systems are rigorously tested on actual operational workflows, followed by thorough fine-tuning and bug fixing until fully stable.',
      tableHeaderParam: 'Aspect',
      tableHeaderTrad: 'Conventional Dev',
      tableHeaderVibe: 'Unaudited "Vibe Coder"',
      tableHeaderZaky: 'Zaky Irhab (System Architect)',
      row1Param: 'Delivery Speed',
      row1Trad: 'Weeks to Months',
      row1Vibe: 'Fast but full of silent bugs',
      row1Zaky: 'Days (Fast & Audited)',
      row2Param: 'Code Quality',
      row2Trad: 'Good but slow delivery',
      row2Vibe: 'AI slop, crashes on edge cases',
      row2Zaky: 'Strictly audited, zero hallucination',
      row3Param: 'Real-Case Validation',
      row3Trad: 'Rarely tested on real scenarios',
      row3Vibe: 'Only runs on demo browser',
      row3Zaky: 'Real-case testing, precision tuning & full fixes'
    },
    footer: {
      badge: 'OPEN FOR DIRECT BUILDS',
      title: 'Ready to Ship Your System Without Waiting Months?',
      desc: 'Let us have a brief chat about your operational bottleneck or the new system you want to deploy.',
      ctaWa: 'Chat WhatsApp',
      ctaEmail: 'Send Email',
      ctaGithub: 'View GitHub',
      tagline: 'System Architect & Product Builder. Verified on real physical hardware.',
      adminPanel: 'Admin Panel'
    }
  }
}
