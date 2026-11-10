---
slug: "perbedaan-state-dengan-props-dalam-reactjs"
title: "Perbedaan State dengan Props dalam ReactJS"
date: "2025-04-12"
published: "2025-04-12T13:22:00.000-07:00"
summary: "**State** adalah data internal dalam komponen React yang dapat berubah seiring waktu dan memengaruhi tampilan UI."
sourceUrl: "https://blog.programinglive.com/2025/04/perbedaan-state-dengan-props-dalam.html"
image: "/img/posts/perbedaan-state-dengan-props-dalam-reactjs/5f5b176c62_e_20dengan_20Props_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 296
---

![](/img/posts/perbedaan-state-dengan-props-dalam-reactjs/5f5b176c62_e_20dengan_20Props_20dalam_20ReactJS.png)

## Pengertian State dan Props

**State** adalah data internal dalam komponen React yang dapat berubah seiring waktu dan memengaruhi tampilan UI.

**Props** (properties) adalah data yang dikirim dari komponen induk ke komponen anak dan bersifat immutable (tidak dapat diubah oleh komponen penerima).

## Perbedaan State dan Props

| State | Props |
|---|---|
| Bisa diubah dalam komponen. | Tidak bisa diubah oleh komponen penerima. |
| Digunakan untuk data yang berubah dinamis. | Digunakan untuk data yang tetap atau dikirim dari parent. |
| Dideklarasikan dalam komponen itu sendiri. | Dikirim dari parent ke child sebagai atribut. |

## Menggunakan State dalam React

State dikelola menggunakan `useState` dalam functional component.

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

## Menggunakan Props dalam React

Props digunakan untuk mengirim data dari parent ke child.

```
const Greeting = ({ name }) => {
  return Hello, {name}!;
};

export default function App() {
  return ;
}
```

## Manfaat dan Kegunaan State dan Props

- **State:** Digunakan untuk mengelola data yang dapat berubah, seperti input pengguna atau status aplikasi.
- **Props:** Digunakan untuk mengirim data antar komponen agar lebih modular dan reusable.

## Contoh Penerapan

Misalnya, sebuah aplikasi yang menampilkan nama pengguna dan memungkinkan perubahan nama.

```
const UserProfile = ({ name }) => {
  return Nama: {name};
};

const App = () => {
  const [userName, setUserName] = useState("Alice");

  return (
    
      
       setUserName("Bob")}>Ubah Nama
    
  );
};
```

## Kesimpulan

State dan Props adalah dua konsep utama dalam React. State digunakan untuk mengelola data yang berubah, sedangkan Props digunakan untuk mengirim data antara komponen. Dengan memahami perbedaannya, pengembang dapat membangun aplikasi React yang lebih terstruktur dan efisien.
