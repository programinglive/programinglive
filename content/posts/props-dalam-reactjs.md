---
slug: "props-dalam-reactjs"
title: "Props dalam ReactJS"
date: "2025-03-21"
published: "2025-03-21T10:50:00.000-07:00"
summary: "Props (singkatan dari \"properties\") dalam ReactJS adalah mekanisme untuk mengirim data dari komponen induk (parent) ke komponen anak (child). Props bersifat read-only, artinya komponen anak tidak..."
sourceUrl: "https://blog.programinglive.com/2025/03/props-dalam-reactjs.html"
image: "/img/posts/props-dalam-reactjs/65f2bc1b19_Props_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 311
---

![](/img/posts/props-dalam-reactjs/65f2bc1b19_Props_20dalam_20ReactJS.png)

## Pengertian Props

Props (singkatan dari "properties") dalam ReactJS adalah mekanisme untuk mengirim data dari komponen induk (parent) ke komponen anak (child). Props bersifat read-only, artinya komponen anak tidak dapat mengubah nilai yang diterimanya dari parent.

## Cara Menggunakan Props

Props digunakan dengan cara mengirimkan nilai sebagai atribut pada komponen.

### Props dalam Functional Component

```
const Greeting = (props) => {
  return Halo, {props.name}!;
};

export default function App() {
  return ;
}
```

### Props dalam Class Component

```
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return Halo, {this.props.name}!;
  }
}

export default function App() {
  return ;
}
```

## Perbedaan Props dan State

| Props | State |
|---|---|
| Dikirim dari parent ke child component | Berlaku hanya dalam komponen yang mendefinisikannya |
| Bersifat read-only (tidak dapat diubah oleh child) | Dapat diubah oleh komponen itu sendiri |
| Digunakan untuk data yang bersifat statis atau berasal dari parent | Digunakan untuk data yang berubah secara dinamis |

## Passing dan Default Props

Kita dapat memberikan nilai default untuk props menggunakan `defaultProps`.

```
const Greeting = ({ name = "Guest" }) => {
  return Halo, {name}!;
};
```

## Manfaat dan Keuntungan

- **Mempermudah komunikasi antar komponen:** Memungkinkan komponen berbagi data.
- **Membantu membuat komponen yang reusable:** Komponen dapat digunakan kembali dengan konfigurasi yang berbeda.
- **Memisahkan logika dan tampilan:** Memudahkan pemeliharaan kode.

## Contoh Penerapan

Props digunakan dalam berbagai skenario, seperti:

- **Menampilkan daftar data:** Mengirim data dari parent ke child untuk ditampilkan dalam bentuk list.
- **Menyesuaikan komponen UI:** Mengubah tampilan komponen berdasarkan nilai props.
- **Pengelolaan form:** Mengirim nilai input dari parent ke child untuk pengolahan data.

## Kesimpulan

Props dalam ReactJS adalah cara utama untuk mengirim data antara komponen. Dengan menggunakan props, pengembang dapat membuat komponen yang fleksibel, reusable, dan lebih mudah dikelola.
