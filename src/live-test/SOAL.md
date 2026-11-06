# ⏱️ Lembar Ujian Praktik: Live Coding TypeScript

* **Waktu Pengerjaan**: 15 – 20 Menit  
* **Format**: Live Coding di hadapan Guru  
* **Perintah Uji**: `npm run test:live`

---

## 🎯 Instruksi Utama
1. **Dilarang menggunakan tipe `any`**.
2. Setiap fungsi wajib memiliki anotasi tipe pada parameter dan *return type*.
3. Kerjakan 3 berkas di folder `src/live-test/` secara berurutan.

---

### 🔹 Task 1: Interface & Union Type (~5 Menit)
* **Berkas**: `src/live-test/member.ts`
* **Soal**:
  1. Buat **Union Type** `MemberTier` yang hanya mengizinkan 3 nilai string:
     * `"BRONZE"`
     * `"SILVER"`
     * `"GOLD"`
  2. Buat **Interface** `Member` dengan properti:
     * `id`: string
     * `name`: string
     * `tier`: MemberTier
     * `points`: number
     * `isActive?`: boolean *(opsional)*

---

### 🔹 Task 2: Penentuan Tier Member (~7 Menit)
* **Berkas**: `src/live-test/tier.ts`
* **Soal**:
  * Lengkapi fungsi `determineTier(points)`:
    * Parameter `points`: bertipe `number`
    * Return type: bertipe `MemberTier`
    * Aturan:
      * Jika `points >= 1000` $\rightarrow$ kembalikan `"GOLD"`
      * Jika `points >= 500` $\rightarrow$ kembalikan `"SILVER"`
      * Sisanya $\rightarrow$ kembalikan `"BRONZE"`

---

### 🔹 Task 3: Kalkulasi Bonus Poin Belanja (~8 Menit)
* **Berkas**: `src/live-test/bonus.ts`
* **Soal**:
  * Lengkapi fungsi `calculateBonusPoints(subtotal, tier, multiplier)`:
    * Parameter `subtotal`: bertipe `number`
    * Parameter `tier`: bertipe `MemberTier`
    * Parameter `multiplier`: bertipe `number` dengan nilai default = `1`
    * Return type: bertipe `number`
    * Aturan:
      * **Poin Dasar**: `Math.floor(subtotal / 10000)` (tiap kelipatan Rp 10.000 dapat 1 poin).
      * **Pengali Tier**:
        * `"GOLD"`: Poin dasar $\times 3$
        * `"SILVER"`: Poin dasar $\times 2$
        * `"BRONZE"`: Poin dasar $\times 1$
      * Kalikan hasil poin tier dengan nilai `multiplier`.
      * Kembalikan total poin (angka bulat).

---

## 🧪 Verifikasi Akhir
Jalankan perintah berikut di terminal:
```bash
npm run test:live
```
Jika berhasil, skor harus mencapai **8/8 (100%)**!
