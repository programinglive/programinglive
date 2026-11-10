---
slug: "ternary-operator"
title: "Ternary Operator"
date: "2025-03-09"
published: "2025-03-09T14:12:00.000-07:00"
summary: "Ternary Operator adalah operator kondisional dalam JavaScript yang memungkinkan kita untuk menulis pernyataan `if-else` dalam satu baris kode. Operator ini mempermudah penulisan ekspresi..."
sourceUrl: "https://blog.programinglive.com/2025/03/ternary-operator.html"
image: "/img/posts/ternary-operator/cda7c85a42_Ternary_20Operator.png"
categories:
  - "Growth"
wordCount: 249
---

![](/img/posts/ternary-operator/cda7c85a42_Ternary_20Operator.png)

## Pengertian Ternary Operator

Ternary Operator adalah operator kondisional dalam JavaScript yang memungkinkan kita untuk menulis pernyataan `if-else` dalam satu baris kode. Operator ini mempermudah penulisan ekspresi kondisional dengan sintaks yang lebih ringkas.

## Sintaks Ternary Operator

Format dasar dari Ternary Operator adalah:

```
kondisi ? ekspresi_jika_true : ekspresi_jika_false
```

Contoh penggunaan:

```
const umur = 20;
const status = umur >= 18 ? "Dewasa" : "Anak-anak";
console.log(status); // Output: Dewasa
```

## Penggunaan dalam Kondisi

Ternary Operator dapat digunakan untuk menggantikan pernyataan `if-else` sederhana:

```
// Menggunakan if-else
let status;
if (umur >= 18) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}

// Menggunakan Ternary Operator
const statusBaru = umur >= 18 ? "Dewasa" : "Anak-anak";
```

## Penggunaan Ternary Operator dalam React

Dalam React, Ternary Operator sering digunakan untuk rendering bersyarat:

```
const isLoggedIn = true;
return (
  
    {isLoggedIn ? Selamat Datang! : Silakan Login}
  
);
```

## Manfaat dan Keuntungan

- **Kode lebih ringkas:** Mengurangi jumlah baris kode yang digunakan untuk kondisi.
- **Mudah dibaca:** Struktur yang lebih jelas dibandingkan dengan `if-else`.
- **Digunakan dalam JSX:** Memudahkan rendering bersyarat dalam React.

## Contoh Penerapan

Menentukan status berdasarkan nilai input:

```
const nilai = 75;
const hasil = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log(hasil); // Output: Lulus
```

## Kesimpulan

Ternary Operator adalah cara efektif untuk menulis kondisi dalam JavaScript dengan lebih ringkas dan mudah dibaca. Penggunaannya sangat berguna dalam pengembangan web, terutama dalam framework seperti React untuk rendering bersyarat.
