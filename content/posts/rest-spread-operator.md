---
slug: "rest-spread-operator"
title: "Rest/Spread Operator"
date: "2025-03-07"
published: "2025-03-07T09:25:00.000-08:00"
summary: "Rest dan Spread Operator (`...`) adalah fitur JavaScript yang digunakan untuk menangani array atau objek dengan lebih fleksibel."
sourceUrl: "https://blog.programinglive.com/2025/03/restspread-operator.html"
image: "/img/posts/rest-spread-operator/c4ccc9911b_Rest_20atau_20Spread_20Operator.png"
categories:
  - "Growth"
wordCount: 319
---

![](/img/posts/rest-spread-operator/c4ccc9911b_Rest_20atau_20Spread_20Operator.png)

## Pengertian Rest/Spread

Rest dan Spread Operator (`...`) adalah fitur JavaScript yang digunakan untuk menangani array atau objek dengan lebih fleksibel.

## Spread Operator

Spread digunakan untuk menyebarkan elemen dalam array atau properti dalam objek.

```
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4, 5];
console.log(angkaBaru); // Output: [1, 2, 3, 4, 5]
```

Spread juga dapat digunakan untuk menggabungkan objek:

```
const user = { nama: "John", umur: 25 };
const userBaru = { ...user, lokasi: "Jakarta" };
console.log(userBaru); // Output: { nama: "John", umur: 25, lokasi: "Jakarta" }
```

## Rest Operator

Rest digunakan untuk mengumpulkan sisa nilai dalam sebuah array atau parameter fungsi.

```
const [a, b, ...sisanya] = [1, 2, 3, 4, 5];
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(sisanya); // Output: [3, 4, 5]
```

Dalam fungsi, Rest Operator dapat menangani parameter yang tidak diketahui jumlahnya:

```
function jumlahkan(...angka) {
    return angka.reduce((total, num) => total + num, 0);
}
console.log(jumlahkan(1, 2, 3, 4)); // Output: 10
```

## Manfaat dan Keuntungan

Beberapa manfaat menggunakan Rest/Spread Operator adalah:

- **Kode Lebih Bersih:** Mengurangi jumlah baris kode yang diperlukan untuk mengambil nilai dari objek atau array.
- **Pemrosesan Data yang Lebih Efisien:** Menghindari pengambilan nilai satu per satu secara manual.
- **Meningkatkan Readability:** Kode menjadi lebih mudah dibaca dan dipahami.
- **Fleksibilitas dalam Penanganan Data:** Memudahkan manipulasi array dan objek dalam berbagai situasi.

## Contoh Penerapan

Rest/Spread Operator sering digunakan dalam pengembangan ReactJS, misalnya dalam penggunaan props:

```
function Greeting({ name, ...props }) {
  return Hello, {name}!;
}
```

Contoh lainnya dalam penggunaan API response:

```
fetch("https://api.example.com/user")
  .then(response => response.json())
  .then(({ nama, umur, ...dataLain }) => console.log(`User: ${nama}, Age: ${umur}`, dataLain));
```

## Kesimpulan

Rest/Spread Operator dalam JavaScript adalah fitur yang sangat berguna untuk menangani array dan objek dengan lebih efisien. Dengan sintaks yang lebih bersih dan fleksibel, fitur ini membantu pengembang menulis kode yang lebih ringkas dan mudah dikelola.
