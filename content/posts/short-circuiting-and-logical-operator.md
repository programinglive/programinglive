---
slug: "short-circuiting-and-logical-operator"
title: "Short-Circuiting and Logical Operator"
date: "2025-03-14"
published: "2025-03-14T09:17:00.000-07:00"
summary: "Short-Circuiting adalah teknik dalam JavaScript di mana ekspresi logika dievaluasi hanya sampai nilai yang cukup ditemukan untuk menentukan hasil akhir, tanpa mengevaluasi keseluruhan ekspresi."
sourceUrl: "https://blog.programinglive.com/2025/03/short-circuiting-and-logical-operator.html"
image: "/img/posts/short-circuiting-and-logical-operator/b678dceecf_ircuiting_20and_20Logical_20Operator.png"
categories:
  - "Frontend"
wordCount: 256
---

![](/img/posts/short-circuiting-and-logical-operator/b678dceecf_ircuiting_20and_20Logical_20Operator.png)

## Pengertian Short-Circuiting

Short-Circuiting adalah teknik dalam JavaScript di mana ekspresi logika dievaluasi hanya sampai nilai yang cukup ditemukan untuk menentukan hasil akhir, tanpa mengevaluasi keseluruhan ekspresi.

## Operator Logika dalam JavaScript

JavaScript memiliki tiga operator logika utama:

- **AND (&&):** Mengembalikan nilai pertama yang falsy atau nilai terakhir jika semua benar.
- **OR (||):** Mengembalikan nilai pertama yang truthy atau nilai terakhir jika semua salah.
- **Nullish Coalescing (??):** Mengembalikan nilai pertama yang bukan `null` atau `undefined`.

## Short-Circuiting pada Operator AND (&&)

Operator AND akan berhenti mengevaluasi jika menemukan nilai falsy.

```
console.log(false && "Hello"); // Output: false
console.log(true && "Hello"); // Output: Hello
```

## Short-Circuiting pada Operator OR (||)

Operator OR akan berhenti mengevaluasi jika menemukan nilai truthy.

```
console.log(true || "Hello"); // Output: true
console.log(false || "Hello"); // Output: Hello
```

## Operator Nullish Coalescing (??)

Operator `??` digunakan untuk menangani nilai `null` atau `undefined` tanpa menganggap `false` sebagai nilai kosong.

```
let username = null;
console.log(username ?? "Guest"); // Output: Guest
```

## Manfaat dan Keuntungan

- **Efisiensi:** Menghindari evaluasi yang tidak perlu.
- **Kode lebih bersih:** Mengurangi penggunaan `if-else` untuk kondisi sederhana.
- **Fleksibilitas:** Memudahkan pengelolaan nilai default.

## Contoh Penerapan

Menentukan nilai default dengan short-circuiting:

```
const user = "" || "Guest";
console.log(user); // Output: Guest
```

Memastikan pemanggilan fungsi hanya jika kondisi terpenuhi:

```
isLoggedIn && showDashboard();
```

## Kesimpulan

Short-Circuiting dalam JavaScript memungkinkan kita menulis kode yang lebih efisien dan mudah dibaca. Dengan memahami bagaimana operator logika bekerja, pengembang dapat mengoptimalkan kondisi dalam aplikasi mereka.
