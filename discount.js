/**
 * ==========================================
 * FILE INI ADALAH TUGAS MURID
 * ==========================================
 * 
 * Silakan lengkapi fungsi di bawah ini:
 * Aturan Diskon:
 * 1. Jika voucherCode === "DISKON10", berikan potongan diskon 10% dari subtotal.
 * 2. Jika voucherCode === "DISKON50", berikan potongan diskon 50% dari subtotal.
 * 3. Jika tidak ada voucher atau kode salah, diskon = 0.
 * 
 * Kembalikan nilai total akhir setelah dipotong diskon.
 */

function applyDiscount(subtotal, voucherCode = null) {
  // TODO (Murid): Implementasikan logika voucher diskon
  if(voucherCode === "DISKON10") {
    return subtotal - (subtotal * 0.10);
  }
  if(voucherCode === "DISKON50") {
    return subtotal - (subtotal * 0.50);
  }
  return subtotal;
}

module.exports = { applyDiscount };