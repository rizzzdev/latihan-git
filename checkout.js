const { calculateSubtotal } = require("./subtotal");
const { applyDiscount } = require("./discount");

/**
 * ==========================================
 * FUNGSI UTAMA (INTEGRASI FITUR GURU & MURID)
 * ==========================================
 * Fungsi ini menggabungkan:
 * - Subtotal belanjaan dari subtotal.js (Tugas Guru)
 * - Potongan diskon dari discount.js (Tugas Murid)
 */
function checkout(items, voucherCode = null) {
  const subtotal = calculateSubtotal(items);
  const totalAkhir = applyDiscount(subtotal, voucherCode);
  return totalAkhir;
}

module.exports = { checkout };
