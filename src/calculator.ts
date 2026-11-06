import { PromoCalculator } from "./types";

/**
 * ============================================================================
 * TASK 3: REST PARAMETERS & CALLBACK (FUNCTION AS PARAMETER)
 * ============================================================================
 * 
 * TODO (Murid) Bagian A - Rest Parameter:
 * 1. Gantilah anotasi tipe `...fees: any[]` menjadi Rest Parameter bertipe angka: `...fees: number[]`.
 * 2. Berikan tipe kembalian fungsi `: number`.
 * 3. Jumlahkan seluruh elemen di dalam array `fees` (misal: ongkir, asuransi, biaya kemasan).
 * 4. Jika tidak ada biaya tambahan yang dilewatkan, kembalikan 0.
 */
export function calculateAdditionalFees(...fees: any[]): any {
  // TODO (Murid): Implementasikan kalkulasi rest parameter di sini
  return 0;
}

/**
 * TODO (Murid) Bagian B - Callback Function (Function as Parameter):
 * 1. Gantilah anotasi parameter:
 *    - `subtotal: any` -> `subtotal: number`
 *    - `promo: any` -> `promo: PromoCalculator`
 * 2. Berikan tipe kembalian fungsi `: number`.
 * 3. Jalankan fungsi callback `promo` dengan melewatkan `subtotal` sebagai argumen,
 *    lalu kembalikan nilai hasil eksekusi promo tersebut.
 */
export function applyCustomPromotion(subtotal: any, promo: any): any {
  // TODO (Murid): Implementasikan pemanggilan callback promo di sini
  return 0;
}
