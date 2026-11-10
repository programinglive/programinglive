---
slug: "functional-component-dalam-reactjs"
title: "Functional Component dalam ReactJS"
date: "2025-03-29"
published: "2025-03-29T00:09:00.000-07:00"
summary: "Functional Component dalam ReactJS adalah komponen yang dibuat menggunakan fungsi JavaScript biasa. Komponen ini lebih ringan dan lebih mudah digunakan dibandingkan dengan Class Component karena..."
sourceUrl: "https://blog.programinglive.com/2025/03/functional-component-dalam-reactjs.html"
image: "/img/posts/functional-component-dalam-reactjs/b00640d986_tional_20Component_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 284
---

![](/img/posts/functional-component-dalam-reactjs/b00640d986_tional_20Component_20dalam_20ReactJS.png)

## Pengertian Functional Component

Functional Component dalam ReactJS adalah komponen yang dibuat menggunakan fungsi JavaScript biasa. Komponen ini lebih ringan dan lebih mudah digunakan dibandingkan dengan Class Component karena tidak memerlukan penggunaan `this` dan mendukung React Hooks.

## Keunggulan Functional Component

- **Kode lebih sederhana:** Tidak memerlukan deklarasi class atau penggunaan `this`.
- **Performa lebih baik:** Karena tidak memiliki lifecycle methods yang kompleks.
- **Dukungan React Hooks:** Memungkinkan penggunaan `useState` dan `useEffect` untuk mengelola state dan efek samping.
- **Mudah diuji:** Functional Component lebih mudah diuji dibandingkan Class Component.

## Cara Membuat Functional Component

Functional Component didefinisikan dengan menggunakan fungsi JavaScript.

```
const Greeting = () => {
  return Hello, World!;
};
```

## Menggunakan Props dalam Functional Component

Props digunakan untuk mengirimkan data dari komponen induk ke komponen anak.

```
const Greeting = ({ name }) => {
  return Hello, {name}!;
};

export default function App() {
  return ;
}
```

## Menggunakan State dengan useState

Functional Component menggunakan `useState` untuk mengelola state.

```
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    
      Nilai: {count}
       setCount(count + 1)}>Tambah
    
  );
};
```

## Contoh Penerapan

Functional Component digunakan dalam banyak skenario, seperti:

- **Membuat UI modular:** Komponen seperti tombol, formulir, dan kartu.
- **Mengelola state lokal:** Menggunakan `useState` untuk mengelola data dalam komponen.
- **Efek samping:** Menggunakan `useEffect` untuk menangani operasi asinkron.

```
const App = () => {
  return (
    
      
      
    
  );
};
```

## Kesimpulan

Functional Component adalah cara yang lebih sederhana dan efisien untuk membuat komponen dalam React. Dengan mendukung React Hooks, komponen ini memungkinkan pengelolaan state dan efek samping dengan mudah, menjadikannya pilihan utama dalam pengembangan aplikasi React modern.
