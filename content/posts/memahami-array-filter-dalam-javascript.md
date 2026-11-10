---
slug: "memahami-array-filter-dalam-javascript"
title: "Memahami Array Filter dalam JavaScript"
date: "2025-03-16"
published: "2025-03-16T19:22:00.000-07:00"
summary: "Array `filter()` adalah metode dalam JavaScript yang digunakan untuk membuat array baru berdasarkan kondisi tertentu. Metode ini akan menyaring elemen dalam array asli dan hanya menyertakan elemen..."
sourceUrl: "https://blog.programinglive.com/2025/03/memahami-array-filter-dalam-javascript.html"
image: "/img/posts/memahami-array-filter-dalam-javascript/c26f090c6d_0Array_20Filter_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 334
---

![](/img/posts/memahami-array-filter-dalam-javascript/c26f090c6d_0Array_20Filter_20dalam_20JavaScript.png)

## Apa Itu Array Filter?

Array `filter()` adalah metode dalam JavaScript yang digunakan untuk membuat array baru berdasarkan kondisi tertentu. Metode ini akan menyaring elemen dalam array asli dan hanya menyertakan elemen yang memenuhi kondisi yang diberikan.

## Sintaks Array Filter

```
const newArray = array.filter(function(element, index, array) {
    return kondisi;
});
```

## Penggunaan Array Filter

### 1. Menyaring Angka dalam Array

```
const numbers = [10, 25, 30, 5, 50];
const filteredNumbers = numbers.filter(num => num > 20);
console.log(filteredNumbers); // Output: [25, 30, 50]
```

### 2. Menyaring Data dalam Array Objek

```
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 30 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);
// Output: [{ id: 1, name: "Alice", age: 25 }, { id: 3, name: "Charlie", age: 30 }]
```

### 3. Menyaring String Berdasarkan Kondisi

```
const words = ["apple", "banana", "cherry", "avocado"];
const filteredWords = words.filter(word => word.startsWith("a"));
console.log(filteredWords); // Output: ["apple", "avocado"]
```

## Contoh Kasus

### Kasus: Menyaring Produk dengan Harga Tertentu

Misalkan kita memiliki daftar produk dan ingin menyaring hanya produk dengan harga di atas 100.

```
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Keyboard", price: 150 }
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);
// Output: [{ id: 1, name: "Laptop", price: 1200 }, { id: 3, name: "Keyboard", price: 150 }]
```

## Keuntungan Menggunakan Array Filter

- **Mempermudah Penyaringan Data**: Dapat menyaring elemen berdasarkan kondisi yang fleksibel.
- **Kode Lebih Ringkas**: Menghindari penggunaan loop manual untuk menyaring data.
- **Non-Mutatif**: Tidak mengubah array asli, tetapi menghasilkan array baru.

## Kesimpulan

Metode `filter()` dalam JavaScript adalah cara yang efisien untuk menyaring elemen dalam array berdasarkan kondisi tertentu. Dengan `filter()`, kita dapat melakukan berbagai operasi seleksi data dengan kode yang lebih bersih dan mudah dibaca.
