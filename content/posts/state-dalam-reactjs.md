---
slug: "state-dalam-reactjs"
title: "State dalam ReactJS"
date: "2025-03-20"
published: "2025-03-20T10:48:00.000-07:00"
summary: "State dalam ReactJS adalah objek yang menyimpan data atau status suatu komponen. State memungkinkan komponen merespons perubahan data secara dinamis tanpa harus me-reload halaman."
sourceUrl: "https://blog.programinglive.com/2025/03/state-dalam-reactjs.html"
image: "/img/posts/state-dalam-reactjs/bc0fa5c8f4_State_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 344
---

![](/img/posts/state-dalam-reactjs/bc0fa5c8f4_State_20dalam_20ReactJS.png)

## Pengertian State

State dalam ReactJS adalah objek yang menyimpan data atau status suatu komponen. State memungkinkan komponen merespons perubahan data secara dinamis tanpa harus me-reload halaman.

## Cara Menggunakan State

State digunakan dalam komponen berbasis fungsi menggunakan hook `useState` atau dalam class component menggunakan `this.state`.

### State dalam Functional Component

```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    
      Nilai: {count}
       setCount(count + 1)}>Tambah
    
  );
}
```

### State dalam Class Component

```
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      
        Nilai: {this.state.count}
        Tambah
      
    );
  }
}
```

## Perbedaan State dan Props

| State | Props |
|---|---|
| Dapat diubah oleh komponen itu sendiri | Bersifat read-only, tidak dapat diubah oleh komponen penerima |
| Berlaku hanya dalam komponen yang mendefinisikannya | Dikirim dari parent ke child component |
| Digunakan untuk data yang berubah secara dinamis | Digunakan untuk data yang bersifat statis atau berasal dari parent |

## Managing State dengan useState

Hook `useState` digunakan dalam komponen fungsional untuk mengelola state dengan cara yang lebih sederhana.

```
const [name, setName] = useState("John");

const changeName = () => {
  setName("Alice");
};
```

## Manfaat dan Keuntungan

- **Reaktivitas:** Komponen dapat merespons perubahan data secara otomatis.
- **Modularitas:** Memisahkan logika dan tampilan dengan lebih baik.
- **Mudah dikelola:** Dengan bantuan React hooks seperti `useState`, manajemen state menjadi lebih sederhana.

## Contoh Penerapan

State digunakan dalam berbagai skenario, seperti:

- **Form Handling:** Menyimpan input pengguna sebelum dikirim ke backend.
- **Dark Mode Toggle:** Mengubah tema aplikasi secara dinamis.
- **Cart Management:** Menambahkan dan menghapus produk dalam aplikasi e-commerce.

## Kesimpulan

State adalah salah satu fitur utama ReactJS yang memungkinkan komponen untuk menyimpan dan mengelola data yang berubah secara dinamis. Dengan memahami cara kerja state dan bagaimana menggunakannya dengan React hooks atau class components, pengembang dapat membangun aplikasi yang lebih interaktif dan efisien.
