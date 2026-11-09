import { VoucherCode, DiscountRate } from "./types";

/**
 * ============================================================================
 * TASK 2: PENERAPAN DISKON & UNION TYPES / ENUM
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Gantilah tipe parameter:
 *    - `subtotal: any` -> `subtotal: number`
 *    - `voucherCode: any` -> `voucherCode?: VoucherCode | null`
 * 2. Gantilah tipe kembalian fungsi `: any` -> `: number`.
 * 3. Aturan Diskon:
 *    - Jika voucherCode === "DISKON10", berikan potongan 10% (Gunakan enum DiscountRate.DISKON10 jika didefinisikan!)
 *    - Jika voucherCode === "DISKON50", berikan potongan 50% (Gunakan enum DiscountRate.DISKON50 jika didefinisikan!)
 *    - Jika voucherCode tidak valid, null, atau undefined, kembalikan subtotal utuh (diskon 0%).
 * 4. Kembalikan total belanja setelah dikurangi nilai diskon.
 */
export function applyDiscount(
  subtotal: number,
  voucherCode?: VoucherCode | null
): number {
  if (voucherCode === "DISKON10") {
    return subtotal - subtotal * DiscountRate.DISKON10;
  }

  if (voucherCode === "DISKON50") {
    return subtotal - subtotal * DiscountRate.DISKON50;
  }

  return subtotal;
}
