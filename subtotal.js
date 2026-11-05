/**
 * ==========================================
 * FILE INI ADALAH TUGAS GURU
 * ==========================================
 *
 * Silakan lengkapi fungsi di bawah ini:
 * items adalah array of object:
 * [
 *   { name: "Nama Produk", price: 50000, quantity: 2 },
 *   ...
 * ]
 *
 * Rumus: Jumlahkan (item.price * item.quantity) untuk seluruh item.
 */

function calculateSubtotal(items) {
  // TODO (Guru): Hitung total harga belanjaan
  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return subtotal;
}

module.exports = { calculateSubtotal };
