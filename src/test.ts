import assert from "node:assert";
import { calculateSubtotal } from "./subtotal";
import { applyDiscount } from "./discount";
import { calculateAdditionalFees, applyCustomPromotion } from "./calculator";
import { processCheckout } from "./checkout";
import { DiscountRate } from "./types";

interface TestReport {
  name: string;
  passed: boolean;
  message?: string;
}

const reports: Record<string, TestReport[]> = {
  "Task 1: Subtotal & Array Typing": [],
  "Task 2: Diskon, Union Types & Enum": [],
  "Task 3: Rest Parameters & Callback": [],
  "Task 4: Integrasi Checkout & Interface Receipt": [],
};

function recordTest(category: string, name: string, fn: () => void) {
  try {
    fn();
    reports[category].push({ name, passed: true });
  } catch (err: any) {
    reports[category].push({ name, passed: false, message: err.message });
  }
}

// ============================================================================
// DATA PENGUJIAN
// ============================================================================
const sampleCart = [
  { name: "Buku TypeScript", price: 60000, quantity: 2 }, // 120.000
  { name: "Stiker Koding", price: 15000, quantity: 2 },   //  30.000
]; // Total Subtotal yang diharapkan: 150.000

// ============================================================================
// EKSEKUSI PENGUJIAN
// ============================================================================

// --- TASK 1 ---
recordTest("Task 1: Subtotal & Array Typing", "Menghitung subtotal keranjang belanja dengan tepat", () => {
  const result = calculateSubtotal(sampleCart);
  assert.strictEqual(
    result,
    150000,
    `Ekspektasi subtotal 150.000, namun mendapatkan: ${result}`
  );
});

recordTest("Task 1: Subtotal & Array Typing", "Menangani keranjang belanja kosong dengan aman (mengembalikan 0)", () => {
  const result = calculateSubtotal([]);
  assert.strictEqual(
    result,
    0,
    `Ekspektasi keranjang kosong adalah 0, namun mendapatkan: ${result}`
  );
});

// --- TASK 2 ---
recordTest("Task 2: Diskon, Union Types & Enum", "Enum DiscountRate terdefinisi dengan nilai yang tepat", () => {
  assert.ok(
    DiscountRate !== undefined && typeof DiscountRate === "object",
    "Enum DiscountRate belum didefinisikan atau belum diekspor dari src/types.ts"
  );
  assert.strictEqual(
    DiscountRate.DISKON10,
    0.1,
    `DiscountRate.DISKON10 harus bernilai 0.10, tapi bernilai: ${(DiscountRate as any).DISKON10}`
  );
  assert.strictEqual(
    DiscountRate.DISKON50,
    0.5,
    `DiscountRate.DISKON50 harus bernilai 0.50, tapi bernilai: ${(DiscountRate as any).DISKON50}`
  );
});

recordTest("Task 2: Diskon, Union Types & Enum", "Memotong harga dengan kode DISKON10 (potongan 10%)", () => {
  const result = applyDiscount(100000, "DISKON10");
  assert.strictEqual(
    result,
    90000,
    `Ekspektasi setelah DISKON10 adalah 90.000, tapi mendapatkan: ${result}`
  );
});

recordTest("Task 2: Diskon, Union Types & Enum", "Memotong harga dengan kode DISKON50 (potongan 50%)", () => {
  const result = applyDiscount(100000, "DISKON50");
  assert.strictEqual(
    result,
    50000,
    `Ekspektasi setelah DISKON50 adalah 50.000, tapi mendapatkan: ${result}`
  );
});

recordTest("Task 2: Diskon, Union Types & Enum", "Mengembalikan harga utuh jika voucher tidak ada atau null", () => {
  const resultNull = applyDiscount(100000, null);
  const resultUndefined = applyDiscount(100000);
  assert.strictEqual(resultNull, 100000, "applyDiscount dengan null harus mengembalikan nilai utuh");
  assert.strictEqual(resultUndefined, 100000, "applyDiscount tanpa voucher harus mengembalikan nilai utuh");
});

// --- TASK 3 ---
recordTest("Task 3: Rest Parameters & Callback", "Rest Parameter: Menjumlahkan seluruh biaya tambahan (fees)", () => {
  const fees = calculateAdditionalFees(10000, 5000, 2500); // 17.500
  assert.strictEqual(
    fees,
    17500,
    `Ekspektasi total fees 17.500, namun mendapatkan: ${fees}`
  );

  const noFees = calculateAdditionalFees();
  assert.strictEqual(
    noFees,
    0,
    `Ekspektasi calculateAdditionalFees tanpa argumen adalah 0, namun mendapatkan: ${noFees}`
  );
});

recordTest("Task 3: Rest Parameters & Callback", "Callback Promo: Menjalankan custom rule diskon secara dinamis", () => {
  // Aturan promo khusus: potongan flat Rp 20.000 jika belanja >= 100.000
  const flat20kPromo = (subtotal: number) => (subtotal >= 100000 ? subtotal - 20000 : subtotal);
  const result = applyCustomPromotion(150000, flat20kPromo);
  assert.strictEqual(
    result,
    130000,
    `Ekspektasi promo custom adalah 130.000, namun mendapatkan: ${result}`
  );
});

// --- TASK 4 ---
recordTest("Task 4: Integrasi Checkout & Interface Receipt", "Menghasilkan objek OrderReceipt yang lengkap dan valid", () => {
  const customer = { name: "Budi Santoso", email: "budi@example.com", isMember: true };
  const receipt = processCheckout(
    sampleCart,     // subtotal: 150.000
    "DISKON10",     // discount 10%: 15.000 -> sisa 135.000
    customer,
    10000, 5000     // additional fees: 15.000 -> grandTotal: 150.000
  );

  assert.ok(receipt, "Fungsi processCheckout mengembalikan null/undefined!");
  assert.strictEqual(receipt.subtotal, 150000, `Subtotal receipt salah: ${receipt.subtotal}`);
  assert.strictEqual(receipt.discount, 15000, `Nominal diskon receipt salah: ${receipt.discount}`);
  assert.strictEqual(receipt.additionalFees, 15000, `Biaya tambahan receipt salah: ${receipt.additionalFees}`);
  assert.strictEqual(receipt.grandTotal, 150000, `Grand total receipt salah: ${receipt.grandTotal}`);
  assert.ok(receipt.createdAt instanceof Date, "Properti createdAt harus merupakan instance dari Date!");
  assert.strictEqual(receipt.customer?.name, "Budi Santoso", "Data customer pada receipt tidak sesuai");
  assert.strictEqual(receipt.items.length, 2, "Daftar items pada receipt tidak lengkap");
});

// ============================================================================
// CETAK REKAPITULASI HASIL PENGUJIAN
// ============================================================================
console.log("\n=======================================================");
console.log("🧪 HASIL PENGUJIAN OTOMATIS: LATIHAN TYPESCRIPT");
console.log("=======================================================\n");

let totalTests = 0;
let totalPassed = 0;

for (const [category, tests] of Object.entries(reports)) {
  console.log(`📌 [${category}]`);
  for (const test of tests) {
    totalTests++;
    if (test.passed) {
      totalPassed++;
      console.log(`   ✅ [PASS] ${test.name}`);
    } else {
      console.log(`   ❌ [FAIL] ${test.name}`);
      console.log(`      └─ Pesan: ${test.message}`);
    }
  }
  console.log("");
}

console.log("=======================================================");
const percentage = Math.round((totalPassed / totalTests) * 100);
console.log(`📊 TOTAL KELULUSAN: ${totalPassed}/${totalTests} (${percentage}%)`);

if (totalPassed === totalTests) {
  console.log("🎉 SELAMAT! SEMUA SKENARIO PENGUJIAN LULUS 100%!");
  console.log("Lanjutkan dengan 'npm run check' dan 'npm run build'.");
  console.log("=======================================================\n");
  process.exit(0);
} else {
  console.log("⚠️  MASIH ADA TUGAS YANG PERLU DIPERBAIKI ATAU DILENGKAPI.");
  console.log("💡 Baca panduan detail pengerjaan di berkas 'TASKS.md'.");
  console.log("=======================================================\n");
  process.exit(1);
}
