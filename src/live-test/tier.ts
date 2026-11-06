import { MemberTier } from "./member";

/**
 * ============================================================================
 * LIVE TEST - TASK 2: FUNCTION & TYPE NARROWING (~7 Menit)
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Berikan anotasi tipe pada parameter `points` (harus `number`).
 * 2. Berikan anotasi tipe pada nilai kembalian (harus `MemberTier`).
 * 3. Hapus seluruh tipe `any`.
 * 4. Aturan Penentuan Tier:
 *    - Jika points >= 1000, kembalikan "GOLD"
 *    - Jika points >= 500 (dan < 1000), kembalikan "SILVER"
 *    - Jika points < 500, kembalikan "BRONZE"
 */
export function determineTier(points: any): any {
  // TODO: Tuliskan logika penentuan tier di sini
  return "BRONZE";
}
