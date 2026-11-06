/**
 * ============================================================================
 * TUGAS MURID: DEKLARASI TIPE DATA (TYPES & INTERFACES)
 * ============================================================================
 * 
 * Materi Terkait di Video Tutorial TypeScript Dasar (Programmer Zaman Now):
 * - Tipe Data Primitif, Array & Objek
 * - Union Types & Type Alias
 * - Enum
 * - Interface & Optional Properties
 * - Function Types (Callback)
 * 
 * PETUNJUK:
 * - Gantilah semua tipe 'any' sementara di bawah ini dengan definisi tipe yang tepat!
 * - Jangan biarkan ada tipe 'any' yang tersisa.
 */

// ----------------------------------------------------------------------------
// Task 1: Tipe Item Belanja (Primitif & Object Type)
// ----------------------------------------------------------------------------
// Buat type alias atau interface bernama 'CartItem' dengan properti:
// - name: string (nama produk)
// - price: number (harga satuan dalam rupiah)
// - quantity: number (jumlah unit belanja)
//
// TODO (Murid): Hapus 'any' dan tuliskan spesifikasi propertinya
export type CartItem = any;


// ----------------------------------------------------------------------------
// Task 2: Union Type & Enum Diskon
// ----------------------------------------------------------------------------
// 1. Buat Union Type 'VoucherCode' yang nilainya HANYA boleh bernilai
//    string "DISKON10" atau "DISKON50".
//
// TODO (Murid): Hapus 'any' dan tuliskan Union Type
export type VoucherCode = any;


// 2. Buat Enum 'DiscountRate' yang memetakan kode diskon ke desimal:
//    - DISKON10 = 0.10
//    - DISKON50 = 0.50
//
// TODO (Murid): Definisikan anggota enum DiscountRate di bawah ini
export enum DiscountRate {
  // Tuliskan anggota enum di sini:
  // DISKON10 = ...,
  // DISKON50 = ...
}


// ----------------------------------------------------------------------------
// Task 3: Tipe Fungsi Callback (Function as Parameter)
// ----------------------------------------------------------------------------
// Buat Function Type Alias bernama 'PromoCalculator'.
// Fungsi ini harus menerima parameter 'subtotal' (number) dan mengembalikan nilai 'number'.
//
// TODO (Murid): Hapus 'any' dan tuliskan signature tipe fungsi
export type PromoCalculator = any;


// ----------------------------------------------------------------------------
// Task 4: Interface Pelanggan & Tanda Terima Transaksi
// ----------------------------------------------------------------------------
// 1. Buat interface 'Customer' dengan properti:
//    - name: string (nama pelanggan)
//    - email: string (email pelanggan)
//    - isMember?: boolean (opsional: apakah pelanggan adalah member VIP)
//
// TODO (Murid): Tuliskan deklarasi properti interface Customer
export interface Customer {
  [key: string]: any;
}


// 2. Buat interface 'OrderReceipt' dengan properti:
//    - items: CartItem[] (daftar item yang dibeli)
//    - subtotal: number (total harga kotor sebelum diskon & biaya)
//    - discount: number (nominal potongan diskon rupiah)
//    - additionalFees: number (total seluruh biaya tambahan)
//    - grandTotal: number (total akhir yang harus dibayar)
//    - createdAt: Date (waktu transaksi dibuat)
//    - customer?: Customer (opsional: data pelanggan jika ada)
//
// TODO (Murid): Tuliskan deklarasi properti interface OrderReceipt
export interface OrderReceipt {
  [key: string]: any;
}
