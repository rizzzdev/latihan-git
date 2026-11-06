import assert from "node:assert";
import { Member, MemberTier } from "./member";
import { determineTier } from "./tier";
import { calculateBonusPoints } from "./bonus";

interface TestItem {
  title: string;
  run: () => void;
}

const suite: Record<string, TestItem[]> = {
  "Task 1: Model Data Member & Tipe Data": [
    {
      title: "Membuat objek Member lengkap (dengan properti isActive)",
      run: () => {
        const member: Member = {
          id: "M-001",
          name: "Rian",
          tier: "GOLD",
          points: 1500,
          isActive: true,
        };
        assert.strictEqual(member.id, "M-001");
        assert.strictEqual(member.tier, "GOLD");
        assert.strictEqual(member.isActive, true);
      },
    },
    {
      title: "Membuat objek Member tanpa properti opsional isActive",
      run: () => {
        const member: Member = {
          id: "M-002",
          name: "Siti",
          tier: "BRONZE",
          points: 100,
        };
        assert.strictEqual(member.id, "M-002");
        assert.strictEqual(member.tier, "BRONZE");
        assert.strictEqual(member.isActive, undefined);
      },
    },
  ],
  "Task 2: Penentuan Tier Berdasarkan Poin": [
    {
      title: "Points >= 1000 menghasilkan tier GOLD",
      run: () => {
        assert.strictEqual(determineTier(1500), "GOLD", "Points 1500 harusnya GOLD");
        assert.strictEqual(determineTier(1000), "GOLD", "Points 1000 harusnya GOLD");
      },
    },
    {
      title: "Points 500-999 menghasilkan tier SILVER",
      run: () => {
        assert.strictEqual(determineTier(999), "SILVER", "Points 999 harusnya SILVER");
        assert.strictEqual(determineTier(500), "SILVER", "Points 500 harusnya SILVER");
      },
    },
    {
      title: "Points < 500 menghasilkan tier BRONZE",
      run: () => {
        assert.strictEqual(determineTier(499), "BRONZE", "Points 499 harusnya BRONZE");
        assert.strictEqual(determineTier(0), "BRONZE", "Points 0 harusnya BRONZE");
      },
    },
  ],
  "Task 3: Kalkulasi Bonus Poin Belanja": [
    {
      title: "Kalkulasi poin tier GOLD (poin dasar x 3)",
      run: () => {
        // Belanja 100.000 -> dasar 10 -> GOLD dikali 3 -> 30 poin
        const points = calculateBonusPoints(100000, "GOLD");
        assert.strictEqual(points, 30, `Harusnya 30 poin, tapi dapat: ${points}`);
      },
    },
    {
      title: "Kalkulasi poin tier SILVER (poin dasar x 2) & BRONZE (poin dasar x 1)",
      run: () => {
        const silver = calculateBonusPoints(100000, "SILVER");
        assert.strictEqual(silver, 20, `SILVER harusnya 20 poin, tapi dapat: ${silver}`);

        const bronze = calculateBonusPoints(100000, "BRONZE");
        assert.strictEqual(bronze, 10, `BRONZE harusnya 10 poin, tapi dapat: ${bronze}`);
      },
    },
    {
      title: "Parameter multiplier bekerja dengan benar (default = 1)",
      run: () => {
        // Belanja 100.000 -> dasar 10 -> GOLD = 30 -> multiplier x2 = 60
        const pointsWithMultiplier = calculateBonusPoints(100000, "GOLD", 2);
        assert.strictEqual(
          pointsWithMultiplier,
          60,
          `Harusnya 60 poin (dengan multiplier 2), tapi dapat: ${pointsWithMultiplier}`
        );

        // Belanja di bawah 10.000 (tidak dapat poin dasar)
        const zeroPoints = calculateBonusPoints(8500, "GOLD");
        assert.strictEqual(zeroPoints, 0, "Belanja < Rp 10.000 harusnya 0 poin");
      },
    },
  ],
};

console.log("\n=======================================================");
console.log("⏱️  LIVE CODING TEST: UJIAN PRAKTIK TYPESCRIPT");
console.log("=======================================================\n");

let total = 0;
let passed = 0;

for (const [section, tests] of Object.entries(suite)) {
  console.log(`📌 [${section}]`);
  for (const t of tests) {
    total++;
    try {
      t.run();
      passed++;
      console.log(`   ✅ [PASS] ${t.title}`);
    } catch (err: any) {
      console.log(`   ❌ [FAIL] ${t.title}`);
      console.log(`      └─ ${err.message}`);
    }
  }
  console.log("");
}

console.log("=======================================================");
const score = Math.round((passed / total) * 100);
console.log(`📊 SKOR UJIAN LIVE: ${passed}/${total} (${score}%)`);

if (passed === total) {
  console.log("🎉 SEMPURNA! SELURUH TUGAS LIVE CODING BERHASIL DISELESAIKAN!");
  console.log("=======================================================\n");
  process.exit(0);
} else {
  console.log("⚠️  MASIH ADA TUGAS YANG BELUM SESUAI SPESIFIKASI.");
  console.log("💡 Baca petunjuk soal di 'src/live-test/SOAL.md'.");
  console.log("=======================================================\n");
  process.exit(1);
}
