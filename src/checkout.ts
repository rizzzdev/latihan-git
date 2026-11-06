import { CartItem, VoucherCode, Customer, OrderReceipt } from "./types";
import { calculateSubtotal } from "./subtotal";
import { applyDiscount } from "./discount";
import { calculateAdditionalFees } from "./calculator";

/**
 * ============================================================================
 * TASK 4: INTEGRASI CHECKOUT & INTERFACE ORDER RECEIPT
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Gantilah anotasi tipe parameter:
 *    - `items: any` -> `items: CartItem[]`
 *    - `voucherCode: any` -> `voucherCode?: VoucherCode | null`
 *    - `customer: any` -> `customer?: Customer`
 *    - `...additionalFees: any[]` -> `...additionalFees: number[]`
 * 2. Gantilah anotasi tipe nilai kembalian `: any` -> `: OrderReceipt`.
 * 3. Logika Integrasi:
 *    - Hitung `subtotal` belanjaan menggunakan `calculateSubtotal(items)`.
 *    - Hitung harga setelah diskon menggunakan `applyDiscount(subtotal, voucherCode)`.
 *    - Hitung nominal potongan diskon: `discount = subtotal - hargaSetelahDiskon`.
 *    - Hitung total biaya tambahan menggunakan `calculateAdditionalFees(...additionalFees)`.
 *    - Hitung `grandTotal = hargaSetelahDiskon + totalBiayaTambahan`.
 *    - Buat dan kembalikan objek `OrderReceipt`:
 *      {
 *        customer,
 *        items,
 *        subtotal,
 *        discount,
 *        additionalFees: totalBiayaTambahan,
 *        grandTotal,
 *        createdAt: new Date()
 *      }
 */
export function processCheckout(
  items: any,
  voucherCode: any = null,
  customer: any = undefined,
  ...additionalFees: any[]
): any {
  // TODO (Murid): Lengkapi integrasi checkout dan kembalikan objek OrderReceipt
  return null;
}
