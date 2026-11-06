import { MemberTier } from "./member";

/**
 * ============================================================================
 * LIVE TEST - TASK 3: OPTIONAL PARAMETERS & KALKULASI (~8 Menit)
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Berikan anotasi tipe pada parameter:
 *    - `subtotal`: harus bertipe `number`
 *    - `tier`: harus bertipe `MemberTier`
 *    - `multiplier`: parameter bertipe `number` dengan nilai default = 1
 * 2. Berikan tipe kembalian fungsi berupa `number`.
 * 3. Hapus seluruh tipe `any`.
 * 4. Aturan Perhitungan Poin:
 *    - Poin Dasar: Math.floor(subtotal / 10000) (tiap kelipatan Rp 10.000 dapat 1 poin).
 *    - Pengali Tier:
 *      * "GOLD"   -> poin dasar dikali 3
 *      * "SILVER" -> poin dasar dikali 2
 *      * "BRONZE" -> poin dasar dikali 1
 *    - Total Akhir: kalikan hasil poin tier dengan nilai `multiplier`.
 *    - Kembalikan total poin berupa bilangan bulat (number).
 */
export function calculateBonusPoints(
  subtotal: any,
  tier: any,
  multiplier: any = 1
): any {
  // TODO: Tuliskan logika perhitungan bonus poin di sini
  return 0;
}
