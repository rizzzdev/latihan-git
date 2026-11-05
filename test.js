const assert = require("node:assert");
const { checkout } = require("./app");

console.log("==========================================");
console.log("🧪 MENJALANKAN PENGUJIAN CHECKOUT BELANJA");
console.log("==========================================\n");

const keranjangBelanja = [
  { name: "Buku Git & GitHub", price: 50000, quantity: 2 }, // 100.000
  { name: "Stiker Koding", price: 10000, quantity: 5 },     //  50.000
]; // Subtotal yang diharapkan: 150.000

try {
  // Test 1: Checkout tanpa diskon
  const totalNormal = checkout(keranjangBelanja);
  assert.strictEqual(
    totalNormal,
    150000,
    `Gagal di Test 1: Harusnya 150000, tapi dapat ${totalNormal}`
  );
  console.log("✅ [PASSED] Test 1: Checkout normal tanpa voucher berhasil (Rp 150.000).");

  // Test 2: Checkout dengan voucher DISKON10 (potongan 10% = 15.000 -> sisa 135.000)
  const totalDiskon10 = checkout(keranjangBelanja, "DISKON10");
  assert.strictEqual(
    totalDiskon10,
    135000,
    `Gagal di Test 2: Harusnya 135000, tapi dapat ${totalDiskon10}`
  );
  console.log("✅ [PASSED] Test 2: Voucher DISKON10 berhasil diterapkan (Rp 135.000).");

  // Test 3: Checkout dengan voucher DISKON50 (potongan 50% = 75.000 -> sisa 75.000)
  const totalDiskon50 = checkout(keranjangBelanja, "DISKON50");
  assert.strictEqual(
    totalDiskon50,
    75000,
    `Gagal di Test 3: Harusnya 75000, tapi dapat ${totalDiskon50}`
  );
  console.log("✅ [PASSED] Test 3: Voucher DISKON50 berhasil diterapkan (Rp 75.000).");

  console.log("\n==========================================");
  console.log("🎉 SELAMAT! SEMUA TES LULUS 100%!");
  console.log("Fitur Guru & Murid berhasil terintegrasi dengan sempurna.");
  console.log("==========================================\n");
} catch (err) {
  console.error("❌ HASIL TEST: GAGAL");
  console.error(`Pesan Kesalahan: ${err.message}\n`);
  console.log("💡 Petunjuk Pengerjaan:");
  console.log("1. Pastikan Guru sudah membuat calculateSubtotal().");
  console.log("2. Pastikan Murid sudah membuat applyDiscount().");
  console.log("3. Pastikan Murid sudah melakukan 'git pull origin main' agar kode Guru masuk!\n");
  process.exit(1);
}
