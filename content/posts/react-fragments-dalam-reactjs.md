---
slug: "react-fragments-dalam-reactjs"
title: "React Fragments dalam ReactJS"
date: "2025-04-01"
published: "2025-04-01T20:56:00.000-07:00"
summary: "React Fragments adalah fitur dalam React yang memungkinkan kita untuk mengelompokkan elemen tanpa menambahkan node tambahan ke dalam DOM."
sourceUrl: "https://blog.programinglive.com/2025/04/react-fragments-dalam-reactjs.html"
image: "/img/posts/react-fragments-dalam-reactjs/fda43632b3_React_20Fragments_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 251
---

![](/img/posts/react-fragments-dalam-reactjs/fda43632b3_React_20Fragments_20dalam_20ReactJS.png)

## Pengertian React Fragments

React Fragments adalah fitur dalam React yang memungkinkan kita untuk mengelompokkan elemen tanpa menambahkan node tambahan ke dalam DOM.

## Kenapa Menggunakan React Fragments?

- **Menjaga struktur DOM tetap bersih:** Tidak menambahkan elemen ekstra yang tidak diperlukan.
- **Meningkatkan performa:** Mengurangi jumlah elemen yang dirender di DOM.
- **Menghindari masalah styling:** Tidak mempengaruhi layout seperti elemen ``.

## Cara Menggunakan React Fragments

Ada dua cara utama untuk menggunakan Fragments:

### 1. Menggunakan ``

```
import React from "react";

const MyComponent = () => {
  return (
    
      Judul
      Deskripsi konten.
    
  );
};
```

### 2. Menggunakan `<>` (Sintaks Singkat)

```
const MyComponent = () => {
  return (
    <>
      Judul
      Deskripsi konten.
    
  );
};
```

## Perbedaan Fragment dengan div

| Fragment | div |
|---|---|
| Tidak menambahkan elemen tambahan ke DOM. | Menambahkan elemen tambahan ke dalam DOM. |
| Lebih efisien dan bersih dalam struktur HTML. | Dapat mengganggu tata letak dengan elemen tambahan. |
| Dapat digunakan tanpa atribut tambahan. | Bisa digunakan dengan className dan styling. |

## Contoh Penerapan

React Fragments sangat berguna dalam rendering list atau layout yang tidak memerlukan elemen tambahan.

```
const ItemList = () => {
  return (
    <>
      Item 1
      Item 2
      Item 3
    
  );
};
```

## Kesimpulan

React Fragments adalah fitur yang sangat berguna untuk mengelompokkan elemen dalam komponen tanpa menambahkan elemen tambahan ke dalam DOM. Dengan menggunakan Fragments, kita dapat membuat struktur kode yang lebih bersih, meningkatkan performa aplikasi, dan menghindari masalah styling.
