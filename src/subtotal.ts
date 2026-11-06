import { CartItem } from "./types";

/**
 * ============================================================================
 * TASK 1: KALKULASI SUBTOTAL KERANJANG BELANJA
 * ============================================================================
 * 
 * TODO (Murid):
 * 1. Gantilah anotasi tipe parameter `items: any` dengan `items: CartItem[]`.
 * 2. Gantilah anotasi tipe nilai kembalian `: any` dengan `: number`.
 * 3. DILARANG menggunakan tipe `any`.
 * 4. Hitung total: jumlahkan (item.price * item.quantity) untuk seluruh item.
 * 5. Jika array items kosong, fungsi harus mengembalikan 0.
 */
export function calculateSubtotal(items: CartItem[]): number {
  if (items.length === 0) {
    return 0;
  }

  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }

  return total;
} 
