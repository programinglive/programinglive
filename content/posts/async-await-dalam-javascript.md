---
slug: "async-await-dalam-javascript"
title: "Async/Await dalam JavaScript"
date: "2025-03-23"
published: "2025-03-23T13:54:00.000-07:00"
summary: "Async/Await adalah fitur dalam JavaScript yang digunakan untuk menangani operasi asinkron dengan cara yang lebih mudah dibaca dan dipahami dibandingkan dengan Promise atau callback."
sourceUrl: "https://blog.programinglive.com/2025/03/asyncawait-dalam-javascript.html"
image: "/img/posts/async-await-dalam-javascript/86d13d692c__20atau_20Await_20dalam_20JavaScript.png"
categories:
  - "Growth"
wordCount: 279
---

![](/img/posts/async-await-dalam-javascript/86d13d692c__20atau_20Await_20dalam_20JavaScript.png)

## Pengertian Async/Await

Async/Await adalah fitur dalam JavaScript yang digunakan untuk menangani operasi asinkron dengan cara yang lebih mudah dibaca dan dipahami dibandingkan dengan Promise atau callback.

## Cara Kerja Async/Await

Fitur ini bekerja dengan mendeklarasikan fungsi sebagai `async`, yang memungkinkan penggunaan `await` di dalamnya untuk menunggu penyelesaian sebuah Promise sebelum melanjutkan eksekusi kode berikutnya.

## Menggunakan Async/Await

Berikut adalah contoh penggunaan `async` dan `await` dalam JavaScript:

```
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

fetchData();
```

## Perbandingan dengan Promise

| Promise | Async/Await |
|---|---|
| Menggunakan `.then()` dan `.catch()` untuk menangani hasil. | Gunakan `await` untuk menunggu hasil tanpa `.then()`. |
| Lebih sulit dibaca saat ada banyak `.then()` (Promise chaining). | Lebih mudah dibaca karena menyerupai kode sinkron. |
| Memungkinkan eksekusi paralel dengan `Promise.all()`. | Menjalankan operasi secara berurutan, tetapi dapat dikombinasikan dengan `Promise.all()` untuk eksekusi paralel. |

## Manfaat dan Keuntungan

- **Meningkatkan keterbacaan kode:** Struktur kode lebih jelas dan lebih mudah dipahami.
- **Mengelola error lebih baik:** Dapat menggunakan `try/catch` untuk menangani error.
- **Mengurangi callback hell:** Tidak memerlukan chaining seperti dalam Promise.

## Contoh Penerapan

Menjalankan beberapa operasi async secara bersamaan menggunakan `Promise.all()`:

```
async function fetchMultipleData() {
  try {
    let [data1, data2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json())
    ]);
    console.log(data1, data2);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

fetchMultipleData();
```

## Kesimpulan

Async/Await adalah cara yang lebih sederhana dan lebih intuitif untuk menangani operasi asinkron dalam JavaScript. Dengan menggunakan fitur ini, pengembang dapat menulis kode yang lebih bersih, lebih mudah dipahami, dan lebih mudah dikelola.
