# 🚀 Latihan Kolaborasi Git & TypeScript: Checkout Belanja

> 💡 **Tugas Baru: Latihan TypeScript Dasar**  
> Untuk penugasan migrasi dan pengembangan TypeScript berdasarkan video Programmer Zaman Now, silakan buka panduan lengkap di:  
> 👉 **[TASKS.md](./TASKS.md)**
>
> Perintah Cepat Pengujian:
> ```bash
> npm test        # Menjalankan pengujian otomatis per task
> npm run check   # Memeriksa validasi tipe data (strict type check)
> ```

---

Proyek ini dirancang untuk latihan alur kerja (*workflow*) kolaborasi tim menggunakan Git dan GitHub antara **Guru** dan **Murid**.

---

## 🎯 Target Pembelajaran Murid
1. Melakukan **`git clone`** dari repository bersama.
2. Membuat **branch baru** untuk fitur yang ditugaskan.
3. Melakukan **`commit`** perubahan di branch lokal.
4. Melakukan **`pull`** untuk mengambil kode yang telah diselesaikan oleh Guru.
5. Melakukan **`push`** branch hasil pengerjaan ke remote repository.
6. Memastikan pengujian otomatis (**1 file test**) berstatus **LULUS / PASS**.

---

## 🛠️ Pembagian Berkas (File Separation)

| File | Penanggung Jawab | Deskripsi |
| :--- | :--- | :--- |
| **`subtotal.js`** | **Guru** | Menghitung total harga belanjaan berdasarkan harga & kuantiti. |
| **`discount.js`** | **Murid** | Menerapkan potongan harga sesuai kode voucher (`DISKON10`, `DISKON50`). |
| **`checkout.js`** | Bersama (Integrasi) | Menggabungkan fungsi dari `subtotal.js` dan `discount.js`. |
| **`test.js`** | Pengujian Otomatis | 1 File test penentu kelulusan integrasi. |

---

## 📋 Langkah-Langkah Pengerjaan

### 1. Kloning Repositori (Murid)
```bash
git clone <URL_REPOSITORY>
cd latihan-git
```

Uji coba jalankan test:
```bash
node test.js
```
*(Wajar jika hasilnya gagal/error di awal)*

---

### 2. Buat Branch Baru (Murid)
Jangan bekerja langsung di branch `main`. Buat branch baru khusus untuk fitur diskon:
```bash
git checkout -b fitur-diskon
```

---

### 3. Selesaikan Tugas Murid di `discount.js`
Buka file `discount.js`, lalu lengkapi fungsi `applyDiscount`.

---

### 4. Simpan Perubahan (Commit)
Setelah selesai mengedit:
```bash
git add discount.js
git commit -m "feat: implementasi fungsi voucher diskon"
```

Coba jalankan kembali:
```bash
node test.js
```
*Catatan:* Test **masih akan gagal** karena fungsi `calculateSubtotal` milik Guru di `subtotal.js` belum diimplementasikan!

---

### 5. Tarik Kode dari Guru (Git Pull)
Tunggu kabar dari Guru bahwa file `subtotal.js` telah selesai dan di-push ke branch `main`.
Setelah Guru selesai, tarik perubahannya ke branch Anda:
```bash
git pull origin main
```

---

### 6. Verifikasi Test (Evaluasi Akhir)
Jalankan file test kembali:
```bash
node test.js
```
🎉 Jika kedua fungsi sudah benar dan terintegrasi, pesan **SEMUA TES LULUS 100%** akan muncul!

---

### 7. Kirim Pekerjaan Anda ke GitHub (Git Push)
Kirim branch Anda ke repository GitHub:
```bash
git push -u origin fitur-diskon
```
Buka repository di GitHub dan buat **Pull Request (PR)** agar bisa direview oleh Guru.
