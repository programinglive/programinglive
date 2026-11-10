---
slug: "jsx-rules-dalam-reactjs"
title: "JSX Rules dalam ReactJS"
date: "2025-04-01"
published: "2025-04-01T09:45:00.000-07:00"
summary: "JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang digunakan dalam React untuk menulis elemen UI dengan sintaks yang menyerupai HTML."
sourceUrl: "https://blog.programinglive.com/2025/04/jsx-rules-dalam-reactjs.html"
image: "/img/posts/jsx-rules-dalam-reactjs/64ef17ef8a_JSX_20Rules_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 206
---

![](/img/posts/jsx-rules-dalam-reactjs/64ef17ef8a_JSX_20Rules_20dalam_20ReactJS.png)

## Pengertian JSX

JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang digunakan dalam React untuk menulis elemen UI dengan sintaks yang menyerupai HTML.

## Aturan Dasar JSX

- JSX harus memiliki satu elemen pembungkus utama.
- JSX menggunakan `className` bukan `class` untuk atribut CSS.
- Semua elemen JSX harus ditutup dengan benar.

```
const element = (
  
    Hello, React!
  
);
```

## Ekspresi dalam JSX

JSX mendukung ekspresi JavaScript dengan menyelipkannya di dalam kurung kurawal `{ }`.

```
const name = "Alice";
const element = Hello, {name}!;
```

## Atribut dalam JSX

JSX menggunakan `camelCase` untuk atribut, seperti `onClick` dan `className`.

```
const button =  alert("Clicked!")}>Klik Saya;
```

## Fragment dalam JSX

Fragment digunakan untuk mengelompokkan elemen tanpa menambahkan elemen tambahan ke DOM.

```
import React from "react";

const MyComponent = () => {
  return (
    <>
      Judul
      Deskripsi konten.
    
  );
};
```

## Menggunakan JSX dalam Komponen

JSX sering digunakan dalam komponen React untuk merender UI.

```
const Greeting = ({ name }) => {
  return Hello, {name}!;
};
```

## Kesimpulan

JSX adalah fitur utama dalam React yang memungkinkan pengembang menulis UI dengan cara yang lebih bersih dan intuitif. Dengan memahami aturan dasar JSX, pengembang dapat membangun aplikasi React dengan lebih mudah.
