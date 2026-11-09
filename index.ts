// let nama:  = 2;

// console.log(nama);

// tipe primitif
// string
// boolean
// number

// tipe kompleks
// array
// object

const daftarSayur: string[] = ["bayam", "kangkung", "wortel"];

// type / interface

type Identitas = {
    nama: string;
    umur: string | number;
    sudahMenikah: boolean;
    voucherCode: "DISCON10" | "DISKON50"
}

const identitas1: Identitas = {
    nama: "John Doe",
    umur: "3",
    sudahMenikah: true,
    voucherCode: "DISCON10"
}

const identitas2: Identitas = {
    nama: "Jane Doe",
    umur: 3,
    sudahMenikah: true,
    voucherCode: "DISKON50"
}

const identitas3: Identitas = {
    nama: "Jane Doe",
    umur: 3,
    sudahMenikah: true,
    voucherCode: "DISKON100"
}

function hitungDiskon(voucherCode: any) {
    if (voucherCode === "DISCON10") {
        return 10;
    } else if (voucherCode === "DISKON50") {
        return 50;
    } else {
        return 0;
    }
}

hitungDiskon("DISCON100");

function hitungDiskon2(voucherCode: "DISCON10" | "DISKON50") {
    if (voucherCode === "DISCON10") {
        return 10;
    } else {
        return 50;
    }
}
hitungDiskon2("DISCON100");


