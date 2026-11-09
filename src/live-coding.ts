/**
 * ============================================================================
 * MODUL LIVE CODING: PANDUAN PRAKTIK TYPESCRIPT DASAR
 * ============================================================================
 * 
 * File ini dirancang untuk sesi live coding bersama murid.
 * Ikuti setiap petunjuk JSDoc langkah demi langkah untuk menyelesaikan tugas.
 * 
 * Topik yang dipelajari:
 * 1. Variabel & Tipe Data Primitif (string, number, boolean, null, undefined)
 * 2. Tipe Data Kompleks (Array, Union, Literal Types, Tuple, Interface & Object)
 * 3. Fungsi (Parameter Types, Return Values, Default & Optional Params, Callback)
 * 4. Integrasi Mini Kasus Belanja (Type Narrowing & Logika Bisnis Dasar)
 * 
 * Cara Pengujian:
 * Jalankan perintah berikut di terminal:
 *   npm run test:live
 * ============================================================================
 */

// ============================================================================
// BAGIAN 1: VARIABEL & TIPE DATA PRIMITIF
// ============================================================================

/**
 * Task 1.1: Deklarasi Variabel Primitif
 * 
 * @description
 * TypeScript memungkinkan kita mendeklarasikan tipe data secara eksplisit menggunakan sintaks titik dua (`: tipe`).
 * Tipe data primitif paling umum meliputi:
 * - `string`: teks
 * - `number`: angka bulat maupun desimal
 * - `boolean`: `true` atau `false`
 * - `null`: nilai kosong yang disengaja
 * 
 * LANGKAH PENGERJAAN:
 * 1. Beri tipe eksplisit pada variabel di bawah ini:
 *    - `namaSiswa` bernilai string (contoh: "Budi Santoso")
 *    - `umurSiswa` bernilai number (contoh: 17)
 *    - `isAktif` bernilai boolean (contoh: true)
 *    - `catatan` bertipe union `string | null` bernilai `null`
 */
export let namaSiswa: string = "Budi Santoso";
export let umurSiswa: number = 17;
export let isAktif: boolean = true;
export let catatan: string | null = null;


/**
 * Task 1.2: Fungsi Pembantu & String Template
 * 
 * @description
 * Fungsi di TypeScript sebaiknya memiliki tipe eksplisit untuk setiap parameter dan tipe kembalian (return type).
 * Format penulisan: `function namaFungsi(param1: tipe, param2: tipe): tipeReturn { ... }`
 * 
 * @param nama - Nama siswa (string)
 * @param umur - Usia siswa (number)
 * @param aktif - Status keaktifan siswa (boolean)
 * @returns String profil berformat: "Nama: [nama], Umur: [umur] tahun, Status: [Aktif/Nonaktif]"
 * 
 * @example
 * formatProfil("Budi", 17, true)
 * // Menghasilkan: "Nama: Budi, Umur: 17 tahun, Status: Aktif"
 * 
 * LANGKAH PENGERJAAN:
 * 1. Tentukan kondisi jika `aktif` bernilai true, gunakan teks "Aktif", jika false gunakan "Nonaktif".
 * 2. Kembalikan string yang sesuai dengan format menggunakan template literals (`...`).
 */
export function formatProfil(nama: string, umur: number, aktif: boolean): string {
  throw new Error("Fungsi formatProfil belum diimplementasikan!");
}


// ============================================================================
// BAGIAN 2: TIPE DATA KOMPLEKS
// ============================================================================

/**
 * Task 2.1: Array Primitif & Manipulasi Array
 * 
 * @description
 * Di TypeScript, tipe array dapat dituliskan dengan format:
 * - `tipe[]` (contoh: `number[]` atau `string[]`)
 * - `Array<tipe>` (contoh: `Array<number>`)
 * 
 * LANGKAH PENGERJAAN:
 * 1. Deklarasikan array `daftarNilai` bertipe `number[]` yang berisi sekumpulan angka.
 */
export const daftarNilai: number[] = [80, 90, 75, 85];

/**
 * Menghitung nilai rata-rata dari array angka.
 * 
 * @param nilai - Kumpulan nilai angka (number[])
 * @returns Nilai rata-rata dalam bentuk number. Jika array kosong, kembalikan 0.
 * 
 * @example
 * hitungRataRata([80, 90, 100]) // Menghasilkan: 90
 * hitungRataRata([]) // Menghasilkan: 0
 * 
 * LANGKAH PENGERJAAN:
 * 1. Cek apakah panjang array adalah 0 (`nilai.length === 0`). Jika ya, kembalikan 0.
 * 2. Hitung jumlah total angka menggunakan perulangan atau `reduce()`.
 * 3. Bagi total dengan jumlah elemen (`nilai.length`) lalu kembalikan hasilnya.
 */
export function hitungRataRata(nilai: number[]): number {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi hitungRataRata belum diimplementasikan!");
}


/**
 * Task 2.2: Union Types & Literal Types
 * 
 * @description
 * - **Union Type (`|`)**: Memungkinkan sebuah tipe menerima lebih dari satu kemungkinan tipe (contoh: `string | number`).
 * - **Literal Type**: Mengunci nilai variabel hanya boleh bernilai teks/angka tertentu secara pasti.
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat type alias `StatusPesanan` yang hanya menerima nilai:
 *    "MENUNGGU" | "DIPROSES" | "SELESAI" | "BATAL"
 * 2. Buat type alias `UserID` yang dapat berupa `string` atau `number`.
 */
export type StatusPesanan = "MENUNGGU" | "DIPROSES" | "SELESAI" | "BATAL";
export type UserID = string | number;

/**
 * Memberikan pesan deskriptif berdasarkan status pesanan.
 * 
 * @param status - Status pesanan bertipe StatusPesanan
 * @returns Pesan ramah pengguna sesuai status:
 * - "MENUNGGU"  -> "Pesanan sedang menunggu konfirmasi"
 * - "DIPROSES"  -> "Pesanan sedang dipersiapkan"
 * - "SELESAI"   -> "Pesanan telah selesai"
 * - "BATAL"     -> "Pesanan telah dibatalkan"
 * 
 * LANGKAH PENGERJAAN:
 * 1. Gunakan switch-case atau if-else untuk memeriksa nilai `status`.
 * 2. Kembalikan string pesan yang sesuai.
 */
export function cekStatusPesanan(status: StatusPesanan): string {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi cekStatusPesanan belum diimplementasikan!");
}

/**
 * Format ID Pengguna (Demonstrasi Type Narrowing / Type Guard).
 * 
 * @description
 * Karena `UserID` bisa berupa `string` atau `number`, kita menggunakan `typeof`
 * untuk membedakan perlakuan (*Type Narrowing*):
 * - Jika `number`: tambahkan prefix "USR-" dan pad 4 digit (misal: 7 -> "USR-0007")
 * - Jika `string`: ubah menjadi huruf besar kapital (misal: "adm_01" -> "ADM_01")
 * 
 * @param id - Identitas pengguna (string | number)
 * @returns ID yang telah diformat (string)
 * 
 * @example
 * formatUserID(7) // "USR-0007"
 * formatUserID("adm_01") // "ADM_01"
 * 
 * LANGKAH PENGERJAAN:
 * 1. Periksa `if (typeof id === "number")`.
 * 2. Format number dengan `String(id).padStart(4, "0")` dan tambahkan awalan `"USR-"`.
 * 3. Jika bukan number (maka otomatis string), gunakan `id.toUpperCase()`.
 */
export function formatUserID(id: UserID): string {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi formatUserID belum diimplementasikan!");
}


/**
 * Task 2.3: Tuple Data
 * 
 * @description
 * **Tuple** adalah tipe array khusus yang jumlah elemen dan urutan tipe tiap indeksnya sudah ditentukan secara pasti.
 * Contoh: `[string, number]` artinya indeks ke-0 wajib string dan indeks ke-1 wajib number.
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat type alias `Koordinat` berupa tuple dua angka: `[latitude: number, longitude: number]`.
 */
export type Koordinat = [latitude: number, longitude: number];

/**
 * Membuat tuple koordinat geografis.
 * 
 * @param lat - Nilai latitude (number)
 * @param lng - Nilai longitude (number)
 * @returns Tuple bertipe Koordinat ([number, number])
 * 
 * @example
 * buatKoordinat(-6.2, 106.8) // [-6.2, 106.8]
 * 
 * LANGKAH PENGERJAAN:
 * 1. Kembalikan array berisi pasangan `[lat, lng]` sebagai tuple `Koordinat`.
 */
export function buatKoordinat(lat: number, lng: number): Koordinat {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi buatKoordinat belum diimplementasikan!");
}


/**
 * Task 2.4: Object, Type Alias & Interface
 * 
 * @description
 * **Interface** digunakan untuk mendefinisikan bentuk (kontrak) dari sebuah objek.
 * Properti opsional ditandai dengan simbol tanda tanya (`?`), yang berarti properti tersebut boleh tidak diisi (`undefined`).
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat interface `Produk` dengan properti:
 *    - `id`: number
 *    - `nama`: string
 *    - `harga`: number
 *    - `kategori`: string
 *    - `stok?`: number (opsional)
 */
export interface Produk {
  id: number;
  nama: string;
  harga: number;
  kategori: string;
  stok?: number;
}

/**
 * Menghasilkan teks deskripsi singkat untuk suatu produk.
 * 
 * @param produk - Objek yang memenuhi interface Produk
 * @returns String dengan format:
 * - Jika `stok` ada (terdefinisi dan >= 0): "[Kategori] Nama - Rp Harga (Stok: X)"
 * - Jika `stok` tidak diisi (undefined): "[Kategori] Nama - Rp Harga (Stok: Tidak tersedia)"
 * 
 * @example
 * deskripsiProduk({ id: 1, nama: "Laptop", harga: 10000000, kategori: "Elektronik", stok: 5 })
 * // "[Elektronik] Laptop - Rp 10000000 (Stok: 5)"
 * 
 * deskripsiProduk({ id: 2, nama: "Meja", harga: 500000, kategori: "Mebel" })
 * // "[Mebel] Meja - Rp 500000 (Stok: Tidak tersedia)"
 * 
 * LANGKAH PENGERJAAN:
 * 1. Cek apakah `produk.stok !== undefined`.
 * 2. Tentukan teks informasi stok ("Stok: " + produk.stok ATAU "Stok: Tidak tersedia").
 * 3. Kembalikan string gabungan sesuai contoh format di atas.
 */
export function deskripsiProduk(produk: Produk): string {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi deskripsiProduk belum diimplementasikan!");
}


// ============================================================================
// BAGIAN 3: FUNGSI (DEFAULT/OPTIONAL PARAMETERS & CALLBACKS)
// ============================================================================

/**
 * Task 3.1: Parameter Default & Opsional
 * 
 * @description
 * Di TypeScript, kita dapat memberikan nilai bawaan (default value) pada parameter fungsi.
 * Jika pemanggil fungsi tidak menyertakan argumen tersebut, nilai bawaan yang akan digunakan.
 * 
 * @param harga - Harga dasar produk (number)
 * @param persenDiskon - Persentase diskon (number, default: 0)
 * @returns Harga akhir setelah dipotong diskon (number)
 * 
 * @example
 * hitungDiskon(100000, 20) // 80000 (diskon 20%)
 * hitungDiskon(100000)     // 100000 (default diskon 0%)
 * 
 * LANGKAH PENGERJAAN:
 * 1. Berikan default parameter `persenDiskon: number = 0`.
 * 2. Hitung nominal potongan: `(harga * persenDiskon) / 100`.
 * 3. Kembalikan harga bersih: `harga - nominalPotongan`.
 */
export function hitungDiskon(harga: number, persenDiskon: number = 0): number {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi hitungDiskon belum diimplementasikan!");
}


/**
 * Task 3.2: Callback Function & Higher-Order Function
 * 
 * @description
 * Kita dapat mendefinisikan tipe untuk sebuah fungsi (Function Signature) menggunakan type alias.
 * Ini sangat berguna saat membuat fungsi yang menerima fungsi lain sebagai parameter (Callback / HOF).
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat type alias `FilterProdukCallback` yaitu fungsi yang menerima parameter `produk: Produk`
 *    dan mengembalikan `boolean`.
 */
export type FilterProdukCallback = (produk: Produk) => boolean;

/**
 * Menyaring daftar produk berdasarkan kriteria fungsi callback.
 * 
 * @param daftar - Kumpulan objek Produk (Produk[])
 * @param kriteria - Fungsi callback bertipe FilterProdukCallback
 * @returns Array baru berisi produk yang memenuhi kriteria (kriteria(produk) === true)
 * 
 * @example
 * const elektronik = saringProduk(daftarProduk, (p) => p.kategori === "Elektronik");
 * 
 * LANGKAH PENGERJAAN:
 * 1. Gunakan method `.filter()` pada array `daftar` dengan memasukkan `kriteria`.
 * 2. Kembalikan hasil filter tersebut.
 */
export function saringProduk(daftar: Produk[], kriteria: FilterProdukCallback): Produk[] {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi saringProduk belum diimplementasikan!");
}


// ============================================================================
// BAGIAN 4: MINI STUDI KASUS INTEGRASI
// ============================================================================

/**
 * Task 4.1: Interface ItemKeranjang Belanja
 * 
 * @description
 * Menggabungkan interface `Produk` ke dalam interface baru `ItemKeranjang`.
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat interface `ItemKeranjang` dengan properti:
 *    - `produk`: Produk
 *    - `jumlah`: number
 */
export interface ItemKeranjang {
  produk: Produk;
  jumlah: number;
}

/**
 * Task 4.2: Menghitung Subtotal Seluruh Keranjang Belanja
 * 
 * @param items - Daftar item dalam keranjang (ItemKeranjang[])
 * @returns Total harga keseluruhan (number). Jika keranjang kosong, kembalikan 0.
 * 
 * @example
 * const items = [
 *   { produk: { id: 1, nama: "Buku", harga: 50000, kategori: "Alat Tulis" }, jumlah: 2 }, // 100.000
 *   { produk: { id: 2, nama: "Pena", harga: 10000, kategori: "Alat Tulis" }, jumlah: 3 }, //  30.000
 * ];
 * hitungTotalKeranjang(items); // Menghasilkan: 130000
 * 
 * LANGKAH PENGERJAAN:
 * 1. Inisialisasi total = 0.
 * 2. Loop setiap item di dalam array `items`.
 * 3. Kalikan `item.produk.harga * item.jumlah` dan tambahkan ke total.
 * 4. Kembalikan nilai total akhir.
 */
export function hitungTotalKeranjang(items: ItemKeranjang[]): number {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi hitungTotalKeranjang belum diimplementasikan!");
}


/**
 * Task 4.3: Literal Union & Penerapan Voucher Diskon
 * 
 * @description
 * Tipe `KodeVoucher` mendefinisikan kode kupon yang valid:
 * - "DISKON10": potongan harga 10%
 * - "DISKON50": potongan harga 50%
 * - "GRATISONGKIR": tidak ada potongan pada subtotal barang (diskon 0%)
 * 
 * LANGKAH PENGERJAAN:
 * 1. Buat type alias `KodeVoucher`: `"DISKON10" | "DISKON50" | "GRATISONGKIR"`.
 */
export type KodeVoucher = "DISKON10" | "DISKON50" | "GRATISONGKIR";

/**
 * Menerapkan voucher diskon terhadap total belanja.
 * 
 * @param total - Total belanja sebelum diskon (number)
 * @param voucher - Kode voucher opsional ("DISKON10" | "DISKON50" | "GRATISONGKIR" | undefined)
 * @returns Total belanja setelah diskon (number)
 * 
 * @example
 * terapkanVoucher(100000, "DISKON10")    // 90000
 * terapkanVoucher(100000, "DISKON50")    // 50000
 * terapkanVoucher(100000, "GRATISONGKIR")// 100000
 * terapkanVoucher(100000)                // 100000 (tanpa voucher)
 * 
 * LANGKAH PENGERJAAN:
 * 1. Jika `voucher === "DISKON10"`, kurangi total sebesar 10% (total * 0.9).
 * 2. Jika `voucher === "DISKON50"`, kurangi total sebesar 50% (total * 0.5).
 * 3. Untuk kondisi lainnya (termasuk undefined atau "GRATISONGKIR"), kembalikan nilai `total` utuh.
 */
export function terapkanVoucher(total: number, voucher?: KodeVoucher): number {
  // TODO (Murid): Implementasikan fungsi ini
  throw new Error("Fungsi terapkanVoucher belum diimplementasikan!");
}
