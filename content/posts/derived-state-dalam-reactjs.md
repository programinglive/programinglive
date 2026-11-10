---
slug: "derived-state-dalam-reactjs"
title: "Derived State dalam ReactJS"
date: "2025-04-19"
published: "2025-04-19T22:51:00.000-07:00"
summary: "Derived State adalah state yang diturunkan dari props atau state lain dalam komponen React. Alih-alih menyimpan data yang dapat dihitung ulang, derived state memungkinkan pengembang untuk..."
sourceUrl: "https://blog.programinglive.com/2025/04/derived-state-dalam-reactjs.html"
image: "/img/posts/derived-state-dalam-reactjs/dd3d0735c2_Derived_20State_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 394
---

![](/img/posts/derived-state-dalam-reactjs/dd3d0735c2_Derived_20State_20dalam_20ReactJS.png)

## Pengertian Derived State

Derived State adalah state yang diturunkan dari props atau state lain dalam komponen React. Alih-alih menyimpan data yang dapat dihitung ulang, derived state memungkinkan pengembang untuk menghitung nilai berdasarkan perubahan props atau state yang ada.

## Perbedaan Derived State dengan State Biasa

| Derived State | State Biasa |
|---|---|
| Dihitung berdasarkan props atau state lain. | Disimpan langsung dalam komponen. |
| Selalu diperbarui secara otomatis ketika data sumber berubah. | Perlu diperbarui secara manual menggunakan setter function. |
| Menghindari duplikasi data yang tidak perlu dalam state. | Dapat menyimpan data statis atau dinamis. |

## Cara Mengelola Derived State

### Menggunakan Variabel dalam `render`

Derived state dapat dihitung langsung dalam fungsi render atau return statement.

```
const PriceDisplay = ({ price, discount }) => {
  const finalPrice = price - (price * discount) / 100;
  return Harga Akhir: ${finalPrice};
};
```

### Menggunakan `useMemo` untuk Optimalisasi

Jika perhitungan cukup berat, gunakan `useMemo` untuk menghindari perhitungan ulang yang tidak perlu.

```
import { useMemo } from "react";

const PriceDisplay = ({ price, discount }) => {
  const finalPrice = useMemo(() => price - (price * discount) / 100, [price, discount]);
  return Harga Akhir: ${finalPrice};
};
```

## Manfaat Derived State

- **Mengurangi kompleksitas state:** Tidak perlu menyimpan data yang bisa dihitung ulang.
- **Meningkatkan performa:** Menghindari penyimpanan data yang berlebihan.
- **Sinkronisasi otomatis:** Nilai selalu diperbarui sesuai dengan perubahan props atau state lain.

## Contoh Penerapan

Derived State sering digunakan dalam:

- Menghitung subtotal dan total harga di aplikasi e-commerce.
- Memfilter daftar item berdasarkan input pengguna.
- Mengonversi format data, seperti tanggal atau mata uang.

```
const ProductList = ({ products, searchQuery }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
      {filteredProducts.map((product) => (
        {product.name}
      ))}
    
  );
};
```

## Kesalahan yang Sering Terjadi

- **Menyimpan derived state dalam state lokal:** Jangan menyimpan nilai yang dapat dihitung ulang dalam `useState`.
- **Tidak menggunakan memoization saat diperlukan:** Jika perhitungan berat, gunakan `useMemo` untuk optimalisasi.
- **Menggunakan derived state dengan cara yang tidak efisien:** Hitung nilai hanya saat dibutuhkan, bukan di setiap render tanpa alasan.

## Kesimpulan

Derived State dalam ReactJS memungkinkan komponen untuk menghitung data berdasarkan props atau state lain secara efisien. Dengan memahami cara menggunakannya dengan benar, pengembang dapat meningkatkan performa aplikasi, mengurangi duplikasi data, dan memastikan sinkronisasi data yang lebih baik.
