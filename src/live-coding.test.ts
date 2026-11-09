import assert from "node:assert";
import {
  name,
  age,
  isActive,
  notes,
  formatProfil,
  scores,
  hitungRataRata,
  StatusPesanan,
  UserID,
  cekStatusPesanan,
  formatUserID,
  Koordinat,
  buatKoordinat,
  Produk,
  deskripsiProduk,
  hitungDiskon,
  FilterProdukCallback,
  saringProduk,
  ItemKeranjang,
  hitungTotalKeranjang,
  KodeVoucher,
  terapkanVoucher,
} from "./live-coding";

interface TestReport {
  name: string;
  passed: boolean;
  message?: string;
}

const reports: Record<string, TestReport[]> = {
  "Bagian 1: Variabel & Tipe Primitif": [],
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)": [],
  "Bagian 3: Fungsi, Parameter & Callback": [],
  "Bagian 4: Mini Studi Kasus Integrasi Belanja": [],
};

function recordTest(category: string, name: string, fn: () => void) {
  try {
    fn();
    reports[category].push({ name, passed: true });
  } catch (err: any) {
    reports[category].push({
      name,
      passed: false,
      message: err.message || String(err),
    });
  }
}

// ============================================================================
// DATA CONTOH PENGUJIAN
// ============================================================================

const sampleProdukList: Produk[] = [
  { id: 1, nama: "Laptop Gaming", harga: 15000000, kategori: "Elektronik", stok: 3 },
  { id: 2, nama: "Mouse Wireless", harga: 150000, kategori: "Elektronik", stok: 10 },
  { id: 3, nama: "Kemeja Flanel", harga: 200000, kategori: "Pakaian", stok: 5 },
  { id: 4, nama: "Buku Pemrograman TS", harga: 80000, kategori: "Buku" }, // stok undefined
];

// ============================================================================
// PENGUJIAN BAGIAN 1: VARIABEL & TIPE PRIMITIF
// ============================================================================

recordTest(
  "Bagian 1: Variabel & Tipe Primitif",
  "Task 1.1: Variabel primitif dideklarasikan dengan tipe dan nilai awal yang tepat",
  () => {
    assert.strictEqual(typeof name, "string", "name harus bertipe string");
    assert.strictEqual(typeof age, "number", "age harus bertipe number");
    assert.strictEqual(typeof isActive, "boolean", "isActive harus bertipe boolean");
    assert.strictEqual(notes === null || typeof notes === "string", true, "notes harus bertipe string | null");
  }
);

recordTest(
  "Bagian 1: Variabel & Tipe Primitif",
  "Task 1.2: formatProfil menghasilkan format profil 'Aktif' dengan benar",
  () => {
    const hasil = formatProfil("Budi", 17, true);
    assert.strictEqual(
      hasil,
      "Nama: Budi, Umur: 17 tahun, Status: Aktif",
      `Format profil salah. Diterima: "${hasil}"`
    );
  }
);

recordTest(
  "Bagian 1: Variabel & Tipe Primitif",
  "Task 1.2: formatProfil menghasilkan format profil 'Nonaktif' dengan benar",
  () => {
    const hasil = formatProfil("Siti", 20, false);
    assert.strictEqual(
      hasil,
      "Nama: Siti, Umur: 20 tahun, Status: Nonaktif",
      `Format profil salah. Diterima: "${hasil}"`
    );
  }
);

// ============================================================================
// PENGUJIAN BAGIAN 2: TIPE DATA KOMPLEKS
// ============================================================================

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.1: scores merupakan array angka bertipe number[]",
  () => {
    assert.ok(Array.isArray(scores), "scores harus berupa Array");
    assert.ok(scores.length > 0, "scores sebaiknya berisi data nilai awal");
    for (const val of scores) {
      assert.strictEqual(typeof val, "number", "Elemen scores harus berupa number");
    }
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.1: hitungRataRata menghitung nilai rata-rata dari kumpulan angka",
  () => {
    const hasil1 = hitungRataRata([80, 90, 70]);
    assert.strictEqual(hasil1, 80, `Rata-rata [80, 90, 70] seharusnya 80, diterima: ${hasil1}`);

    const hasil2 = hitungRataRata([100, 50]);
    assert.strictEqual(hasil2, 75, `Rata-rata [100, 50] seharusnya 75, diterima: ${hasil2}`);
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.1: hitungRataRata mengembalikan 0 jika array kosong",
  () => {
    const hasil = hitungRataRata([]);
    assert.strictEqual(hasil, 0, `Rata-rata dari [] seharusnya 0, diterima: ${hasil}`);
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.2: cekStatusPesanan mengembalikan pesan deskriptif sesuai literal status",
  () => {
    assert.strictEqual(cekStatusPesanan("MENUNGGU"), "Pesanan sedang menunggu konfirmasi");
    assert.strictEqual(cekStatusPesanan("DIPROSES"), "Pesanan sedang dipersiapkan");
    assert.strictEqual(cekStatusPesanan("SELESAI"), "Pesanan telah selesai");
    assert.strictEqual(cekStatusPesanan("BATAL"), "Pesanan telah dibatalkan");
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.2: formatUserID melakukan type narrowing dengan benar (number vs string)",
  () => {
    const hasilNumber = formatUserID(7);
    assert.strictEqual(
      hasilNumber,
      "USR-0007",
      `Format ID number 7 seharusnya "USR-0007", diterima: "${hasilNumber}"`
    );

    const hasilNumber2 = formatUserID(123);
    assert.strictEqual(
      hasilNumber2,
      "USR-0123",
      `Format ID number 123 seharusnya "USR-0123", diterima: "${hasilNumber2}"`
    );

    const hasilString = formatUserID("admin_utama");
    assert.strictEqual(
      hasilString,
      "ADMIN_UTAMA",
      `Format ID string "admin_utama" seharusnya huruf kapital "ADMIN_UTAMA", diterima: "${hasilString}"`
    );
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.3: buatKoordinat mengembalikan tuple [lat, lng] dengan panjang 2",
  () => {
    const k: Koordinat = buatKoordinat(-6.2088, 106.8456);
    assert.ok(Array.isArray(k), "Koordinat harus berupa array (tuple)");
    assert.strictEqual(k.length, 2, "Tuple Koordinat harus memiliki tepat 2 elemen");
    assert.strictEqual(k[0], -6.2088, "Indeks 0 (latitude) salah");
    assert.strictEqual(k[1], 106.8456, "Indeks 1 (longitude) salah");
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.4: deskripsiProduk memformat produk dengan stok terdefinisi",
  () => {
    const produk: Produk = { id: 1, nama: "Laptop", harga: 10000000, kategori: "Elektronik", stok: 5 };
    const hasil = deskripsiProduk(produk);
    assert.strictEqual(
      hasil,
      "[Elektronik] Laptop - Rp 10000000 (Stok: 5)",
      `Format salah. Diterima: "${hasil}"`
    );
  }
);

recordTest(
  "Bagian 2: Tipe Data Kompleks (Array, Union, Tuple, Object)",
  "Task 2.4: deskripsiProduk menangani produk dengan stok opsional (undefined)",
  () => {
    const produk: Produk = { id: 2, nama: "Meja Kayu", harga: 450000, kategori: "Mebel" };
    const hasil = deskripsiProduk(produk);
    assert.strictEqual(
      hasil,
      "[Mebel] Meja Kayu - Rp 450000 (Stok: Tidak tersedia)",
      `Format salah saat stok undefined. Diterima: "${hasil}"`
    );
  }
);

// ============================================================================
// PENGUJIAN BAGIAN 3: FUNGSI, PARAMETER & CALLBACK
// ============================================================================

recordTest(
  "Bagian 3: Fungsi, Parameter & Callback",
  "Task 3.1: hitungDiskon memotong harga sesuai persentase yang diberikan",
  () => {
    const hasil = hitungDiskon(100000, 20);
    assert.strictEqual(hasil, 80000, `Harga 100000 diskon 20% harusnya 80000, diterima: ${hasil}`);

    const hasil50 = hitungDiskon(200000, 50);
    assert.strictEqual(hasil50, 100000, `Harga 200000 diskon 50% harusnya 100000, diterima: ${hasil50}`);
  }
);

recordTest(
  "Bagian 3: Fungsi, Parameter & Callback",
  "Task 3.1: hitungDiskon menggunakan default parameter 0% jika argumen tidak diisi",
  () => {
    const hasilDefault = hitungDiskon(150000);
    assert.strictEqual(
      hasilDefault,
      150000,
      `Tanpa persentase diskon harusnya tetap 150000, diterima: ${hasilDefault}`
    );
  }
);

recordTest(
  "Bagian 3: Fungsi, Parameter & Callback",
  "Task 3.2: saringProduk memfilter array menggunakan callback FilterProdukCallback",
  () => {
    const hanyaElektronik = saringProduk(
      sampleProdukList,
      (item) => item.kategori === "Elektronik"
    );
    assert.strictEqual(hanyaElektronik.length, 2, "Harus ditemukan 2 produk elektronik");
    assert.ok(hanyaElektronik.every((p) => p.kategori === "Elektronik"));

    const hargaDiAtas1Juta = saringProduk(
      sampleProdukList,
      (item) => item.harga > 1000000
    );
    assert.strictEqual(hargaDiAtas1Juta.length, 1, "Harus ditemukan 1 produk harga > 1jt");
    assert.strictEqual(hargaDiAtas1Juta[0].nama, "Laptop Gaming");
  }
);

// ============================================================================
// PENGUJIAN BAGIAN 4: MINI STUDI KASUS INTEGRASI
// ============================================================================

recordTest(
  "Bagian 4: Mini Studi Kasus Integrasi Belanja",
  "Task 4.2: hitungTotalKeranjang menghitung total harga seluruh item keranjang",
  () => {
    const keranjang: ItemKeranjang[] = [
      {
        produk: { id: 1, nama: "Buku", harga: 50000, kategori: "Alat Tulis" },
        jumlah: 2, // 100.000
      },
      {
        produk: { id: 2, nama: "Pena", harga: 10000, kategori: "Alat Tulis" },
        jumlah: 3, //  30.000
      },
    ];

    const total = hitungTotalKeranjang(keranjang);
    assert.strictEqual(total, 130000, `Total belanja harusnya 130000, diterima: ${total}`);
  }
);

recordTest(
  "Bagian 4: Mini Studi Kasus Integrasi Belanja",
  "Task 4.2: hitungTotalKeranjang mengembalikan 0 untuk keranjang kosong",
  () => {
    const total = hitungTotalKeranjang([]);
    assert.strictEqual(total, 0, `Total keranjang kosong harusnya 0, diterima: ${total}`);
  }
);

recordTest(
  "Bagian 4: Mini Studi Kasus Integrasi Belanja",
  "Task 4.3: terapkanVoucher menghitung potongan voucher literal dengan tepat",
  () => {
    const totalAwal = 200000;

    const voucher10 = terapkanVoucher(totalAwal, "DISKON10");
    assert.strictEqual(voucher10, 180000, `DISKON10 pada 200000 harusnya 180000, diterima: ${voucher10}`);

    const voucher50 = terapkanVoucher(totalAwal, "DISKON50");
    assert.strictEqual(voucher50, 100000, `DISKON50 pada 200000 harusnya 100000, diterima: ${voucher50}`);

    const voucherOngkir = terapkanVoucher(totalAwal, "GRATISONGKIR");
    assert.strictEqual(
      voucherOngkir,
      200000,
      `GRATISONGKIR tidak memotong subtotal produk, diterima: ${voucherOngkir}`
    );

    const tanpaVoucher = terapkanVoucher(totalAwal);
    assert.strictEqual(
      tanpaVoucher,
      200000,
      `Tanpa voucher seharusnya tetap 200000, diterima: ${tanpaVoucher}`
    );
  }
);

// ============================================================================
// CETAK REKAPITULASI HASIL PENGUJIAN
// ============================================================================
console.log("\n=======================================================");
console.log("🧪 HASIL PENGUJIAN: LIVE CODING TYPESCRIPT DASAR");
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
      console.log(`      └─ Petunjuk: ${test.message}`);
    }
  }
  console.log("");
}

console.log("=======================================================");
const percentage = Math.round((totalPassed / totalTests) * 100);
console.log(`📊 TOTAL KELULUSAN: ${totalPassed}/${totalTests} (${percentage}%)`);

if (totalPassed === totalTests) {
  console.log("🎉 LUAR BIASA! SEMUA TASKS LIVE CODING BERHASIL DISELESAIKAN DENGAN SEMPURNA!");
  console.log("Murid Anda telah menguasai konsep dasar TypeScript!");
  console.log("=======================================================\n");
  process.exit(0);
} else {
  console.log("⚠️  BEBERAPA FUNGSI MASIH PERLU DIKERJAKAN BERSAMA DI SESI LIVE CODING.");
  console.log("💡 Buka berkas 'src/live-coding.ts' dan ikuti panduan JSDoc pada masing-masing task.");
  console.log("=======================================================\n");
  // Menggunakan exit 0 saat pengujian awal agar murid bisa menjalankan tes bertahap tanpa npm error crash
  process.exit(0);
}
