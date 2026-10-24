import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import type { TrackRecordItem } from '../types/portfolio'

export const AdminModal: React.FC = () => {
  const {
    profile,
    projects,
    adminPin,
    isAdminOpen,
    closeAdmin,
    updateProfile,
    updateProject,
    changeAdminPin,
    resetToDefault,
    exportDataJson,
    importDataJson
  } = usePortfolio()

  const [pinInput, setPinInput] = useState<string>('')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [pinError, setPinError] = useState<string>('')

  // Admin tabs: 'profile' | 'projects' | 'nlp' | 'security'
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'nlp' | 'security'>('profile')
  const { nlpModelConfig, updateNlpModelConfig } = usePortfolio()
  const [editNlpConfig, setEditNlpConfig] = useState(nlpModelConfig)

  // Handlers for Track Record dynamic additions
  const handleAddTrackRecord = () => {
    const newItem: TrackRecordItem = {
      id: 'tr-' + Date.now(),
      title: 'Judul Rekam Jejak Baru',
      desc: ''
    }
    setEditProfile((prev) => ({
      ...prev,
      trackRecord: [...prev.trackRecord, newItem]
    }))
  }

  const handleRemoveTrackRecord = (idx: number) => {
    setEditProfile((prev) => ({
      ...prev,
      trackRecord: prev.trackRecord.filter((_, i) => i !== idx)
    }))
  }

  const handleSaveNlpConfig = (e: React.FormEvent) => {
    e.preventDefault()
    updateNlpModelConfig(editNlpConfig)
    alert('Konfigurasi Model NLP berhasil disimpan dan terkunci secara aman!')
  }

  // Form states for profile
  const [editProfile, setEditProfile] = useState(profile)

  // PIN change state
  const [oldPin, setOldPin] = useState<string>('')
  const [newPin, setNewPin] = useState<string>('')
  const [confirmPin, setConfirmPin] = useState<string>('')
  const [pinSuccessMsg, setPinSuccessMsg] = useState<string>('')

  // JSON import/export state
  const [jsonInput, setJsonInput] = useState<string>('')
  const [backupMsg, setBackupMsg] = useState<string>('')

  // Selected project for editing
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '')

  if (!isAdminOpen) return null

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (pinInput.trim() === adminPin) {
      setIsAuthenticated(true)
      setPinError('')
      setEditProfile(profile)
    } else {
      setPinError('PIN Admin salah. Default awal adalah: 882199')
    }
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile(editProfile)
    alert('Profil dan data diri berhasil diperbarui!')
  }

  const handleProfilePhotoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const res = event.target?.result
      if (res) {
        setEditProfile((prev) => ({
          ...prev,
          profilePhoto: res as string
        }))
      }
    }
    reader.readAsDataURL(file)
  }

  const handleTrackRecordChange = (idx: number, field: keyof TrackRecordItem, val: string) => {
    const updated = [...editProfile.trackRecord]
    updated[idx] = { ...updated[idx], [field]: val }
    setEditProfile((prev) => ({ ...prev, trackRecord: updated }))
  }

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault()
    setPinError('')
    setPinSuccessMsg('')

    if (oldPin !== adminPin) {
      setPinError('PIN Lama tidak sesuai!')
      return
    }
    if (newPin.length < 4) {
      setPinError('PIN Baru minimal 4 karakter!')
      return
    }
    if (newPin !== confirmPin) {
      setPinError('Konfirmasi PIN Baru tidak cocok!')
      return
    }

    const success = changeAdminPin(newPin)
    if (success) {
      setPinSuccessMsg('PIN Admin berhasil diubah ke PIN baru!')
      setOldPin('')
      setNewPin('')
      setConfirmPin('')
    } else {
      setPinError('Gagal mengubah PIN.')
    }
  }

  const handleExport = () => {
    const jsonStr = exportDataJson()
    const blob = new Blob([jsonStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `zakyirhab_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setBackupMsg('File backup JSON berhasil diunduh.')
  }

  const handleImport = () => {
    if (!jsonInput.trim()) return
    const ok = importDataJson(jsonInput)
    if (ok) {
      setBackupMsg('Data portfolio berhasil dipulihkan dari JSON!')
      setJsonInput('')
    } else {
      setBackupMsg('Format JSON tidak valid!')
    }
  }

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className="w-full max-w-4xl max-h-[90dvh] overflow-y-auto rounded-xl border-2 border-[#FF3B00] surface-card shadow-2xl p-6 relative font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b ledger-border">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B00] animate-pulse"></span>
            <span className="font-bold text-sm text-[#FF3B00]">PANEL ADMIN MANDOR TEKNIS SISTEM</span>
            <span className="text-[10px] surface-muted px-2 py-0.5 rounded border ledger-border">
              zakyirhab.it.com
            </span>
          </div>

          <button
            onClick={closeAdmin}
            className="px-2.5 py-1 rounded bg-[#121212] text-white hover:bg-[#FF3B00] font-bold transition cursor-pointer"
          >
            [Tutup]
          </button>
        </div>

        {/* PIN LOGIN GATE */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-12 text-center space-y-4">
            <div className="font-mono text-xs text-[#FF3B00] font-bold">[AUTH GATE]</div>
            <h3 className="font-display font-bold text-lg text-white">Masukkan PIN Admin</h3>
            <p className="text-secondary-tone text-xs leading-relaxed">
              Panel ini untuk mengubah foto profil, rekam jejak, deskripsi sistem, atau bukti screenshot tanpa harus mengedit kodingan.
            </p>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Masukkan PIN (Default: 882199)"
                className="w-full px-4 py-2.5 text-center text-sm tracking-widest rounded border ledger-border surface-muted focus:outline-none focus:border-[#FF3B00]"
                autoFocus
              />

              {pinError && <p className="text-red-500 font-bold">{pinError}</p>}

              <button
                type="submit"
                className="btn-safety w-full py-2.5 rounded font-bold cursor-pointer"
              >
                Buka Panel Admin &rarr;
              </button>
            </form>

            <p className="text-[10px] text-secondary-tone pt-4 border-t ledger-border">
              PIN default awal adalah <strong>882199</strong>. Kamu bisa menggantinya di dalam tab Pengaturan Keamanan.
            </p>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN DASHBOARD */
          <div className="space-y-6">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b ledger-border pb-3">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-1.5 rounded transition cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-[#FF3B00] text-white font-bold'
                    : 'surface-muted border ledger-border hover:border-[#FF3B00]'
                }`}
              >
                [01] Data Diri &amp; Foto Profil
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-1.5 rounded transition cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-[#FF3B00] text-white font-bold'
                    : 'surface-muted border ledger-border hover:border-[#FF3B00]'
                }`}
              >
                [02] Kelola Proyek &amp; Foto Bukti
              </button>
              <button
                onClick={() => setActiveTab('nlp')}
                className={`px-3 py-1.5 rounded transition cursor-pointer ${
                  activeTab === 'nlp'
                    ? 'bg-[#FF3B00] text-white font-bold'
                    : 'surface-muted border ledger-border hover:border-[#FF3B00]'
                }`}
              >
                [03] Model NLP (Zero-Leak)
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-3 py-1.5 rounded transition cursor-pointer ${
                  activeTab === 'security'
                    ? 'bg-[#FF3B00] text-white font-bold'
                    : 'surface-muted border ledger-border hover:border-[#FF3B00]'
                }`}
              >
                [04] Ganti PIN &amp; Backup
              </button>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="ml-auto px-2.5 py-1 text-red-500 hover:underline cursor-pointer font-bold"
              >
                [Kunci / Logout]
              </button>
            </div>

            {/* TAB 1: PROFILE, FOTO & REKAM JEJAK */}
            {activeTab === 'profile' && (
              <form onSubmit={handleSaveProfile} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                  {/* Photo Preview & Upload (EXCLUSIVE FOR ADMIN) */}
                  <div className="p-4 rounded border ledger-border surface-muted text-center space-y-3">
                    <span className="font-bold text-[11px] block text-[#FF3B00]">FOTO PROFIL</span>
                    <div className="w-28 h-36 mx-auto rounded border-2 border-[#121212] overflow-hidden bg-black shadow-[3px_3px_0px_#FF3B00]">
                      <img
                        src={editProfile.profilePhoto}
                        alt="Foto Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="btn-architect block w-full py-2 rounded cursor-pointer font-bold text-[11px]">
                      <span>Upload Foto Baru</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfilePhotoFile}
                      />
                    </label>
                    <span className="text-[10px] text-secondary-tone block">
                      Foto langsung tersimpan otomatis ke storage web.
                    </span>
                  </div>

                  {/* Profile Form Fields */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">NAMA LENGKAP</label>
                        <input
                          type="text"
                          value={editProfile.fullName}
                          onChange={(e) => setEditProfile({ ...editProfile, fullName: e.target.value })}
                          className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">GELAR / PENDIDIKAN</label>
                        <input
                          type="text"
                          value={editProfile.degree}
                          onChange={(e) => setEditProfile({ ...editProfile, degree: e.target.value })}
                          className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">BRAND / TITLE</label>
                      <input
                        type="text"
                        value={editProfile.brandTitle}
                        onChange={(e) => setEditProfile({ ...editProfile, brandTitle: e.target.value })}
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">PARAGRAF PENGANTAR 1</label>
                      <textarea
                        rows={2}
                        value={editProfile.intro1}
                        onChange={(e) => setEditProfile({ ...editProfile, intro1: e.target.value })}
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">PARAGRAF PENGANTAR 2</label>
                      <textarea
                        rows={2}
                        value={editProfile.intro2}
                        onChange={(e) => setEditProfile({ ...editProfile, intro2: e.target.value })}
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Rekam Jejak (CRUD: Tambah / Hapus / Edit Judul) */}
                <div className="p-4 rounded border ledger-border surface-muted space-y-3">
                  <div className="flex items-center justify-between border-b ledger-border pb-2">
                    <span className="font-bold text-[11px] text-[#FF3B00] block">
                      REKAM JEJAK &amp; KREDENSIAL UTAMA (CHIPS):
                    </span>
                    <button
                      type="button"
                      onClick={handleAddTrackRecord}
                      className="px-2.5 py-1 rounded bg-[#FF3B00] text-white font-bold text-[10px] cursor-pointer hover:bg-[#E03400] transition"
                    >
                      + Tambah Rekam Jejak
                    </button>
                  </div>

                  <div className="space-y-2">
                    {editProfile.trackRecord.map((item, idx) => (
                      <div key={item.id} className="p-2.5 rounded surface-card border ledger-border flex items-center gap-2">
                        <span className="font-bold text-[11px] text-[#FF3B00] shrink-0">#{idx + 1}</span>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleTrackRecordChange(idx, 'title', e.target.value)}
                          placeholder="Contoh: S.Kom / Sistem Informasi"
                          className="flex-1 px-2.5 py-1.5 rounded border ledger-border surface-muted text-xs font-semibold focus:outline-none focus:border-[#FF3B00]"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveTrackRecord(idx)}
                          className="px-2 py-1 rounded border border-red-500/40 text-red-500 hover:bg-red-500 hover:text-white transition font-mono text-[10px] cursor-pointer shrink-0"
                          title="Hapus poin ini"
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-secondary-tone text-[10px] mb-1">NOMOR WHATSAPP (Awali 62)</label>
                    <input
                      type="text"
                      value={editProfile.whatsappNumber}
                      onChange={(e) => setEditProfile({ ...editProfile, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary-tone text-[10px] mb-1">EMAIL KONTAK</label>
                    <input
                      type="email"
                      value={editProfile.email}
                      onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                      className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary-tone text-[10px] mb-1">URL GITHUB</label>
                    <input
                      type="text"
                      value={editProfile.githubUrl}
                      onChange={(e) => setEditProfile({ ...editProfile, githubUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-safety w-full py-3 rounded font-bold text-sm cursor-pointer"
                >
                  Simpan Perubahan Profil &amp; Data Diri
                </button>
              </form>
            )}

            {/* TAB 2: PROJECTS MANAGEMENT */}
            {activeTab === 'projects' && (
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2 border-b ledger-border pb-3">
                  {projects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      className={`px-3 py-1.5 rounded transition cursor-pointer ${
                        selectedProjectId === p.id
                          ? 'bg-[#121212] text-white font-bold border-2 border-[#FF3B00]'
                          : 'surface-muted border ledger-border hover:border-[#FF3B00]'
                      }`}
                    >
                      {p.code} // {p.title.split('(')[0].trim()}
                    </button>
                  ))}
                </div>

                {activeProject && (
                  <div className="p-4 rounded border ledger-border surface-muted space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#FF3B00]">
                        EDIT PROYEK: {activeProject.code} &mdash; {activeProject.title}
                      </span>
                      <span className="text-[10px] surface-card px-2 py-0.5 rounded border ledger-border">
                        {activeProject.hasPhotos ? 'DILENGKAPI FOTO' : 'KHUSUS SIMULASI'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">JUDUL UTAMA</label>
                        <input
                          type="text"
                          value={activeProject.title}
                          onChange={(e) => updateProject(activeProject.id, { title: e.target.value })}
                          className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">SUBTITLE</label>
                        <input
                          type="text"
                          value={activeProject.subtitle}
                          onChange={(e) => updateProject(activeProject.id, { subtitle: e.target.value })}
                          className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">MASALAH BISNIS YANG DISELESAIKAN</label>
                      <textarea
                        rows={2}
                        value={activeProject.problem}
                        onChange={(e) => updateProject(activeProject.id, { problem: e.target.value })}
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    {/* Photos list if hasPhotos (ADMIN ONLY UPLOAD) */}
                    {activeProject.hasPhotos && (
                      <div className="p-3 rounded border ledger-border surface-card space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[11px] text-[#FF3B00]">
                            FOTO BUKTI / SCREENSHOT ({activeProject.photos.length} Foto)
                          </span>
                          <label className="btn-architect px-2.5 py-1 rounded cursor-pointer font-bold text-[10px]">
                            <span>+ Tambah Screenshot Baru</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (!file) return
                                const reader = new FileReader()
                                reader.onload = (ev) => {
                                  const res = ev.target?.result
                                  if (res) {
                                    updateProject(activeProject.id, {
                                      photos: [
                                        ...activeProject.photos,
                                        {
                                          url: res as string,
                                          caption: `Foto Dokumentasi: ${file.name}`
                                        }
                                      ]
                                    })
                                  }
                                }
                                reader.readAsDataURL(file)
                              }}
                            />
                          </label>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProject.photos.map((photo, pIdx) => (
                            <div key={pIdx} className="p-2 rounded border ledger-border surface-muted space-y-2">
                              <div className="aspect-video bg-black rounded overflow-hidden">
                                <img src={photo.url} alt="Photo" className="w-full h-full object-cover" />
                              </div>
                              <input
                                type="text"
                                value={photo.caption}
                                onChange={(e) => {
                                  const updated = [...activeProject.photos]
                                  updated[pIdx] = { ...updated[pIdx], caption: e.target.value }
                                  updateProject(activeProject.id, { photos: updated })
                                }}
                                placeholder="Keterangan foto..."
                                className="w-full px-2 py-1 rounded border ledger-border surface-card text-[10px]"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = activeProject.photos.filter((_, idx) => idx !== pIdx)
                                  updateProject(activeProject.id, { photos: updated })
                                }}
                                className="text-red-500 hover:underline text-[10px] cursor-pointer"
                              >
                                Hapus Foto Ini
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: NLP MODEL CONFIG & ZERO-LEAK VAULT */}
            {activeTab === 'nlp' && (
              <form onSubmit={handleSaveNlpConfig} className="space-y-5">
                <div className="p-4 rounded border border-emerald-500/40 bg-emerald-950/20 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>VAULT MODEL NLP TERPROTEKSI (ZERO DOWNLOAD GUARANTEE)</span>
                  </div>
                  <p className="text-[11px] text-secondary-tone leading-relaxed">
                    Semua konfigurasi model LLM/NLP di bawah ini <strong>terkunci dan tidak pernah terekspos ke publik</strong>. Pengunjung website di tab simulasi hanya bisa melihat output teks, tanpa akses unduh file bobot (*weights*), API secret, atau dataset rahasia Anda.
                  </p>
                </div>

                <div className="p-4 rounded border ledger-border surface-muted space-y-4">
                  <span className="font-bold text-[12px] text-[#FF3B00] block">
                    IDENTITAS MODEL &amp; RUNTIME INFERENCE
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">NAMA MODEL AI</label>
                      <input
                        type="text"
                        value={editNlpConfig.modelName}
                        onChange={(e) => setEditNlpConfig({ ...editNlpConfig, modelName: e.target.value })}
                        placeholder="Contoh: IndoBERT Slang-Normalized v2.4"
                        className="w-full px-3 py-2 rounded border ledger-border surface-card text-xs focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">VERSI / TAG MODEL</label>
                      <input
                        type="text"
                        value={editNlpConfig.version}
                        onChange={(e) => setEditNlpConfig({ ...editNlpConfig, version: e.target.value })}
                        placeholder="Contoh: v2.4.1 (Protected)"
                        className="w-full px-3 py-2 rounded border ledger-border surface-card text-xs focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-secondary-tone text-[10px] mb-1">METODE INFERENCE</label>
                    <select
                      value={editNlpConfig.inferenceType}
                      onChange={(e) =>
                        setEditNlpConfig({
                          ...editNlpConfig,
                          inferenceType: e.target.value as any
                        })
                      }
                      className="w-full px-3 py-2 rounded border ledger-border surface-card text-xs focus:outline-none focus:border-[#FF3B00]"
                    >
                      <option value="rule_based">Rule-Based + Lexicon Normalizer (Lokal Aman &amp; Cepat)</option>
                      <option value="private_endpoint">Private Inference API (Server VPS / Ollama / RunPod)</option>
                      <option value="onnx_local">ONNX Runtime Local Sandbox</option>
                    </select>
                  </div>

                  {editNlpConfig.inferenceType === 'private_endpoint' && (
                    <div className="space-y-3 pt-2 border-t ledger-border">
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">PRIVATE ENDPOINT URL (RAHASIA)</label>
                        <input
                          type="url"
                          value={editNlpConfig.endpointUrl || ''}
                          onChange={(e) => setEditNlpConfig({ ...editNlpConfig, endpointUrl: e.target.value })}
                          placeholder="https://api.internal-domain.com/v1/sentiment"
                          className="w-full px-3 py-2 rounded border ledger-border surface-card text-xs focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary-tone text-[10px] mb-1">BEARER TOKEN / API KEY (DISIMPAN TERENKRIPSI)</label>
                        <input
                          type="password"
                          value={editNlpConfig.authToken || ''}
                          onChange={(e) => setEditNlpConfig({ ...editNlpConfig, authToken: e.target.value })}
                          placeholder="sk-secret-..."
                          className="w-full px-3 py-2 rounded border ledger-border surface-card text-xs focus:outline-none focus:border-[#FF3B00]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="p-3 rounded surface-card border ledger-border flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs block">Status Proteksi Ekspor</span>
                      <span className="text-[10px] text-secondary-tone">
                        Blokir unduhan publik dan cegah ekstraksi model via Network inspect.
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      [LOCKED] AKTIF
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-safety w-full py-3 rounded font-bold text-sm cursor-pointer"
                >
                  Simpan Konfigurasi Model NLP &amp; Kunci Vault
                </button>
              </form>
            )}

            {/* TAB 4: SECURITY, GANTI PIN & BACKUP */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                {/* Ganti PIN Section */}
                <div className="p-5 rounded border ledger-border surface-muted space-y-4">
                  <span className="font-bold text-[12px] text-[#FF3B00] block">
                    GANTI PIN ADMIN
                  </span>
                  <p className="text-secondary-tone text-xs">
                    Ganti PIN bawaan (882199) dengan PIN rahasia pribadimu agar tidak sembarang orang bisa mengedit portofolio.
                  </p>

                  <form onSubmit={handleChangePin} className="max-w-md space-y-3">
                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">PIN LAMA</label>
                      <input
                        type="password"
                        value={oldPin}
                        onChange={(e) => setOldPin(e.target.value)}
                        placeholder="PIN saat ini"
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">PIN BARU (Min. 4 Digit)</label>
                      <input
                        type="password"
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="Ketik PIN baru"
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary-tone text-[10px] mb-1">KONFIRMASI PIN BARU</label>
                      <input
                        type="password"
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value)}
                        placeholder="Ulangi PIN baru"
                        className="w-full px-3 py-2 rounded border ledger-border surface-card focus:outline-none focus:border-[#FF3B00]"
                      />
                    </div>

                    {pinError && <p className="text-red-500 font-bold">{pinError}</p>}
                    {pinSuccessMsg && <p className="text-emerald-500 font-bold">{pinSuccessMsg}</p>}

                    <button
                      type="submit"
                      className="btn-safety px-4 py-2 rounded font-bold cursor-pointer"
                    >
                      Update PIN Sekarang
                    </button>
                  </form>
                </div>

                {/* Backup & Restore Data */}
                <div className="p-5 rounded border ledger-border surface-muted space-y-4">
                  <span className="font-bold text-[12px] text-[#FF3B00] block">
                    BACKUP &amp; RESTORE PORTOFOLIO (JSON)
                  </span>
                  <p className="text-secondary-tone text-xs leading-relaxed">
                    Unduh cadangan data untuk disimpan di komputermu, atau pulihkan data saat membuka website dari browser lain.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleExport}
                      className="btn-architect px-4 py-2 rounded font-bold cursor-pointer"
                    >
                      Download Backup JSON
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Yakin ingin mereset data web ke pengaturan awal blueprint?')) {
                          resetToDefault()
                          alert('Data di-reset ke template awal.')
                        }
                      }}
                      className="px-4 py-2 rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold transition cursor-pointer"
                    >
                      Reset ke Default Blueprint
                    </button>
                  </div>

                  <div className="pt-3 border-t ledger-border space-y-2">
                    <label className="block text-secondary-tone text-[10px]">
                      RESTORE: PASTE TEKS JSON DI SINI
                    </label>
                    <textarea
                      rows={3}
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      placeholder="Paste isi file JSON backup di sini..."
                      className="w-full px-3 py-2 rounded border ledger-border surface-card font-mono text-xs focus:outline-none focus:border-[#FF3B00]"
                    />
                    <button
                      type="button"
                      onClick={handleImport}
                      className="btn-architect px-4 py-1.5 rounded font-bold cursor-pointer"
                    >
                      Pulihkan Data dari Teks JSON
                    </button>
                    {backupMsg && <p className="text-emerald-500 font-bold">{backupMsg}</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
