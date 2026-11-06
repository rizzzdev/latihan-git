/**
 * ============================================================================
 * LIVE TEST - TASK 1: INTERFACE & UNION TYPE (~5 Menit)
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Gantilah tipe 'any' pada 'MemberTier' menjadi Union Type yang HANYA mengizinkan:
 *    "BRONZE" | "SILVER" | "GOLD"
 * 
 * 2. Lengkapi interface 'Member' dengan spesifikasi properti:
 *    - id: string
 *    - name: string
 *    - tier: MemberTier
 *    - points: number
 *    - isActive?: boolean (opsional)
 */

// 1. Union Type
export type MemberTier = any; // TODO: Hapus any, ganti dengan Union Type

// 2. Interface
export interface Member {
  // TODO: Tuliskan deklarasi properti di sini
  [key: string]: any;
}
