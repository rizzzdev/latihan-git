/**
 * LATIHAN KOLABORASI GIT: KALKULATOR CHECKOUT BELANJA
 * 
 * File ini dibagi menjadi dua bagian tugas:
 * - BAGIAN 1: Dikerjakan oleh GURU
 * - BAGIAN 2: Dikerjakan oleh MURID
 */

// ==========================================
// BAGIAN 1: TUGAS GURU
// ==========================================
function calculateSubtotal(items) {
  // TODO (Guru): Hitung jumlah total harga belanjaan
  // items adalah array of object: [{ name: string, price: number, quantity: number }]
  // Rumus: total dari (item.price * item.quantity)
  throw new Error("calculateSubtotal() belum diimplementasikan oleh Guru!");
}

// ==========================================
// BAGIAN 2: TUGAS MURID
// ==========================================
function applyDiscount(subtotal, voucherCode = null) {
  // TODO (Murid):
  // 1. Jika voucherCode === "DISKON10", berikan potongan diskon 10%
  // 2. Jika voucherCode === "DISKON50", berikan potongan diskon 50%
  // 3. Jika voucher tidak valid / null, potongan = 0
  // Return nominal total akhir setelah dipotong diskon
  throw new Error("applyDiscount() belum diimplementasikan oleh Murid!");
}

// ==========================================
// FUNGSI UTAMA (INTEGRASI FITUR GURU & MURID)
// ==========================================
function checkout(items, voucherCode = null) {
  const subtotal = calculateSubtotal(items);
  const totalAkhir = applyDiscount(subtotal, voucherCode);
  return totalAkhir;
}

module.exports = {
  calculateSubtotal,
  applyDiscount,
  checkout,
};
