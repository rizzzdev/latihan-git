# 🚀 Latihan Kolaborasi Git: Checkout Belanja

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

## 🛠️ Pembagian Tugas di `app.js`

| Peran | Fungsi yang Dikerjakan | Deskripsi |
| :--- | :--- | :--- |
| **Guru** | `calculateSubtotal(items)` | Menghitung total harga belanjaan berdasarkan harga & kuantiti. |
| **Murid** | `applyDiscount(subtotal, voucherCode)` | Menerapkan potongan harga sesuai kode voucher (`DISKON10`, `DISKON50`). |

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

### 3. Selesaikan Tugas Murid di `app.js`
Buka file `app.js`, cari bagian **BAGIAN 2: TUGAS MURID**, lalu lengkapi fungsi `applyDiscount`.

---

### 4. Simpan Perubahan (Commit)
Setelah selesai mengedit:
```bash
git add app.js
git commit -m "feat: implementasi fitur diskon kupon"
```

Coba jalankan kembali:
```bash
node test.js
```
*Catatan:* Test **masih akan gagal** karena fungsi `calculateSubtotal` milik Guru belum ada di laptop Anda!

---

### 5. Tarik Kode dari Guru (Git Pull)
Tunggu kabar dari Guru bahwa fitur `calculateSubtotal` telah selesai dan di-push ke branch `main`.
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
