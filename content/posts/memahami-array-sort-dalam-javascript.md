---
slug: "memahami-array-sort-dalam-javascript"
title: "Memahami Array Sort dalam JavaScript"
date: "2025-03-18"
published: "2025-03-18T21:57:00.000-07:00"
summary: "Array `sort()` adalah metode dalam JavaScript yang digunakan untuk mengurutkan elemen-elemen dalam sebuah array. Metode ini mengubah array asli dan dapat digunakan untuk menyortir elemen secara..."
sourceUrl: "https://blog.programinglive.com/2025/03/memahami-array-sort-dalam-javascript.html"
image: "/img/posts/memahami-array-sort-dalam-javascript/2f446d77e2__20Array_20Sort_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 393
---

![](/img/posts/memahami-array-sort-dalam-javascript/2f446d77e2__20Array_20Sort_20dalam_20JavaScript.png)

## Apa Itu Array Sort?

Array `sort()` adalah metode dalam JavaScript yang digunakan untuk mengurutkan elemen-elemen dalam sebuah array. Metode ini mengubah array asli dan dapat digunakan untuk menyortir elemen secara ascending (menaik) atau descending (menurun).

## Sintaks Array Sort

```
array.sort(compareFunction);
```

Parameter `compareFunction` adalah fungsi opsional yang digunakan untuk menentukan aturan pengurutan.

## Penggunaan Array Sort

### 1. Menyortir Angka

Secara default, `sort()` mengurutkan elemen sebagai string, sehingga untuk angka, kita perlu menggunakan `compareFunction`:

```
const numbers = [10, 5, 20, 15];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // Output: [5, 10, 15, 20]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // Output: [20, 15, 10, 5]
```

### 2. Menyortir String

String dapat diurutkan secara alphabetic menggunakan `sort()`:

```
const fruits = ["apple", "orange", "banana", "grape"];
fruits.sort(); // Ascending (default)
console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]

fruits.sort((a, b) => b.localeCompare(a)); // Descending
console.log(fruits); // Output: ["orange", "grape", "banana", "apple"]
```

### 3. Menyortir Objek

Kita dapat menyortir array objek berdasarkan properti tertentu:

```
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

users.sort((a, b) => a.age - b.age); // Ascending berdasarkan usia
console.log(users);
// Output: [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]
```

## Contoh Kasus

### Kasus: Menyortir Produk Berdasarkan Harga

Misalkan kita memiliki daftar produk, dan kita ingin menyortirnya berdasarkan harga:

```
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 150 }
];

products.sort((a, b) => a.price - b.price); // Ascending
console.log(products);
// Output: [
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 150 },
//   { name: "Laptop", price: 1200 }
// ]
```

## Keuntungan Menggunakan Array Sort

- **Mudah Digunakan**: Mengurutkan elemen array dengan sintaks sederhana.
- **Fleksibel**: Dapat disesuaikan dengan aturan pengurutan menggunakan fungsi pembanding.
- **Efisien**: Cocok untuk berbagai kebutuhan pengurutan data.

## Kesimpulan

Metode `sort()` dalam JavaScript adalah alat yang sangat berguna untuk mengurutkan elemen dalam array. Dengan `compareFunction`, kita dapat menyortir data dalam berbagai cara, baik itu untuk angka, string, atau objek. Pastikan untuk memahami kebutuhan pengurutan sebelum menggunakan metode ini untuk menghindari hasil yang tidak diinginkan.
