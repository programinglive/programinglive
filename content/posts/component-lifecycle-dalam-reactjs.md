---
slug: "component-lifecycle-dalam-reactjs"
title: "Component Lifecycle dalam ReactJS"
date: "2025-04-09"
published: "2025-04-09T12:49:00.000-07:00"
summary: "Component Lifecycle dalam ReactJS mengacu pada serangkaian metode yang dipanggil selama siklus hidup suatu komponen. Lifecycle ini mencakup tahap mounting, updating, dan unmounting."
sourceUrl: "https://blog.programinglive.com/2025/04/component-lifecycle-dalam-reactjs.html"
image: "/img/posts/component-lifecycle-dalam-reactjs/815b85eedd_ponent_20Lifecycle_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 256
---

![](/img/posts/component-lifecycle-dalam-reactjs/815b85eedd_ponent_20Lifecycle_20dalam_20ReactJS.png)

## Pengertian Component Lifecycle

Component Lifecycle dalam ReactJS mengacu pada serangkaian metode yang dipanggil selama siklus hidup suatu komponen. Lifecycle ini mencakup tahap mounting, updating, dan unmounting.

## Fase-fase Component Lifecycle

- **Mounting:** Saat komponen pertama kali dimuat ke dalam DOM.
- **Updating:** Saat state atau props berubah dan menyebabkan re-render.
- **Unmounting:** Saat komponen dihapus dari DOM.

## Metode Lifecycle pada Class Component

Dalam Class Component, terdapat metode lifecycle yang dapat digunakan:

- `componentDidMount()` – Dipanggil setelah komponen dimasukkan ke DOM.
- `componentDidUpdate()` – Dipanggil setiap kali komponen diperbarui.
- `componentWillUnmount()` – Dipanggil sebelum komponen dihapus dari DOM.

```
class LifecycleDemo extends React.Component {
  componentDidMount() {
    console.log("Komponen telah dimuat");
  }

  componentDidUpdate() {
    console.log("Komponen telah diperbarui");
  }

  componentWillUnmount() {
    console.log("Komponen akan dihapus");
  }

  render() {
    return Lifecycle React;
  }
}
```

## Menggunakan useEffect sebagai Alternatif

Pada Functional Component, `useEffect` digunakan sebagai pengganti lifecycle methods.

```
import React, { useState, useEffect } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponen telah dimuat");
    return () => console.log("Komponen akan dihapus");
  }, []);

  useEffect(() => {
    console.log("Komponen telah diperbarui");
  }, [count]);

  return (
    
      Nilai: {count}
       setCount(count + 1)}>Tambah
    
  );
};
```

## Contoh Penerapan

Lifecycle method sering digunakan untuk:

- Fetching data dari API.
- Menjalankan operasi side-effect seperti event listener.
- Mengelola interval atau timeout dalam komponen.

## Kesimpulan

Component Lifecycle dalam ReactJS memungkinkan pengelolaan komponen dengan lebih baik. Dalam Class Component, metode seperti `componentDidMount` dan `componentDidUpdate` digunakan, sementara dalam Functional Component, `useEffect` menjadi alternatif yang lebih modern.
