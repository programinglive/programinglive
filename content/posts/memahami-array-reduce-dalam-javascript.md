---
slug: "memahami-array-reduce-dalam-javascript"
title: "Memahami Array Reduce dalam JavaScript"
date: "2025-03-17"
published: "2025-03-17T21:03:00.000-07:00"
summary: "Array `reduce()` adalah metode dalam JavaScript yang digunakan untuk mengakumulasi nilai dari sebuah array menjadi satu nilai tunggal. Metode ini sangat berguna untuk operasi seperti penjumlahan,..."
sourceUrl: "https://blog.programinglive.com/2025/03/memahami-array-reduce-dalam-javascript.html"
image: "/img/posts/memahami-array-reduce-dalam-javascript/b0d64cf9a1_0Array_20Reduce_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 329
---

![](/img/posts/memahami-array-reduce-dalam-javascript/b0d64cf9a1_0Array_20Reduce_20dalam_20JavaScript.png)

## Apa Itu Array Reduce?

Array `reduce()` adalah metode dalam JavaScript yang digunakan untuk mengakumulasi nilai dari sebuah array menjadi satu nilai tunggal. Metode ini sangat berguna untuk operasi seperti penjumlahan, pengelompokan, atau transformasi data.

## Sintaks Array Reduce

```
const result = array.reduce(function(accumulator, element, index, array) {
    return operasi;
}, initialValue);
```

## Penggunaan Array Reduce

### 1. Menjumlahkan Nilai dalam Array

```
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100
```

### 2. Mengelompokkan Data dalam Array

```
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];
const groupedByAge = users.reduce((acc, user) => {
    acc[user.age] = acc[user.age] || [];
    acc[user.age].push(user.name);
    return acc;
}, {});
console.log(groupedByAge);
// Output: { "25": ["Alice", "Bob"], "30": ["Charlie"] }
```

### 3. Mengonversi Array ke Objek

```
const keyValuePairs = [["name", "Alice"], ["age", 25], ["city", "Jakarta"]];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log(obj);
// Output: { name: "Alice", age: 25, city: "Jakarta" }
```

## Contoh Kasus

### Kasus: Menghitung Total Harga Produk

Misalkan kita memiliki daftar produk dalam bentuk array objek, dan kita ingin menghitung total harga dari semua produk.

```
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 150 }
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // Output: 1400
```

## Keuntungan Menggunakan Array Reduce

- **Mengurangi Kompleksitas Kode**: Menghindari penggunaan loop tambahan untuk agregasi data.
- **Fleksibilitas Tinggi**: Dapat digunakan untuk berbagai jenis transformasi data.
- **Non-Mutatif**: Tidak mengubah array asli, tetapi menghasilkan nilai baru.

## Kesimpulan

Metode `reduce()` dalam JavaScript adalah cara yang efisien untuk mengolah data dalam array dan mengubahnya menjadi satu nilai. Dengan `reduce()`, kita dapat melakukan operasi matematika, pengelompokan data, dan transformasi lainnya dengan cara yang lebih ringkas dan efektif.
