---
slug: "promise-dalam-javascript"
title: "Promise dalam JavaScript"
date: "2025-03-22"
published: "2025-03-22T13:34:00.000-07:00"
summary: "Promise dalam JavaScript adalah objek yang mewakili hasil dari operasi asinkron yang bisa selesai atau gagal di masa depan. Promise digunakan untuk menangani operasi yang membutuhkan waktu seperti..."
sourceUrl: "https://blog.programinglive.com/2025/03/promise-dalam-javascript.html"
image: "/img/posts/promise-dalam-javascript/6341dbb142_Promise_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 296
---

![](/img/posts/promise-dalam-javascript/6341dbb142_Promise_20dalam_20JavaScript.png)

## Pengertian Promise

Promise dalam JavaScript adalah objek yang mewakili hasil dari operasi asinkron yang bisa selesai atau gagal di masa depan. Promise digunakan untuk menangani operasi yang membutuhkan waktu seperti pengambilan data dari API.

## Cara Kerja Promise

Promise memiliki tiga status utama:

- **Pending:** Promise sedang berjalan dan belum mendapatkan hasil.
- **Fulfilled:** Promise berhasil diselesaikan dengan hasil yang diharapkan.
- **Rejected:** Promise gagal diselesaikan karena terjadi error.

## Membuat Promise

Kita bisa membuat Promise menggunakan konstruktor `new Promise()`.

```
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Data berhasil diambil");
    } else {
      reject("Terjadi kesalahan");
    }
  }, 2000);
});
```

## Menggunakan then(), catch(), finally()

Promise dapat ditangani menggunakan `.then()` untuk hasil sukses, `.catch()` untuk error, dan `.finally()` untuk eksekusi akhir.

```
myPromise
  .then((result) => console.log(result)) // Output: Data berhasil diambil
  .catch((error) => console.log(error))  // Output: Terjadi kesalahan (jika gagal)
  .finally(() => console.log("Operasi selesai"));
```

## Async/Await

Async/Await adalah cara modern untuk menangani Promise agar lebih mudah dibaca.

```
async function fetchData() {
  try {
    let result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Operasi selesai");
  }
}

fetchData();
```

## Manfaat dan Keuntungan

- **Mengelola operasi asinkron dengan lebih baik:** Menghindari callback hell.
- **Meningkatkan keterbacaan kode:** Async/Await membuat kode lebih bersih dan mudah dipahami.
- **Lebih fleksibel:** Bisa digunakan dengan API berbasis HTTP, database, atau operasi lainnya.

## Contoh Penerapan

Promise sering digunakan dalam pengambilan data API:

```
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Terjadi kesalahan: ", error));
```

## Kesimpulan

Promise dalam JavaScript sangat berguna untuk menangani operasi asinkron seperti pengambilan data. Dengan memahami cara kerja Promise, penggunaan `then()`, `catch()`, serta Async/Await, pengembang dapat menulis kode yang lebih bersih dan efisien.
