---
slug: "apa-itu-jsx"
title: "Apa Itu JSX?"
date: "2025-03-24"
published: "2025-03-24T14:37:00.000-07:00"
summary: "JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang digunakan dalam React untuk mendeskripsikan tampilan UI. JSX memungkinkan kita untuk menulis kode yang menyerupai HTML di dalam..."
sourceUrl: "https://blog.programinglive.com/2025/03/apa-itu-jsx.html"
image: "/img/posts/apa-itu-jsx/0fb27d57f8_Apa_20Itu_20JSX.png"
categories:
  - "Frontend"
wordCount: 281
---

![](/img/posts/apa-itu-jsx/0fb27d57f8_Apa_20Itu_20JSX.png)

## Pengertian JSX

JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang digunakan dalam React untuk mendeskripsikan tampilan UI. JSX memungkinkan kita untuk menulis kode yang menyerupai HTML di dalam JavaScript.

## Kenapa Menggunakan JSX?

JSX digunakan karena membuat kode lebih mudah dibaca dan dikelola. Dengan JSX, kita bisa langsung menuliskan struktur UI dalam JavaScript, tanpa perlu menggunakan `document.createElement()` atau `appendChild()`.

## Sintaks Dasar JSX

Berikut adalah contoh sederhana JSX dalam React:

```
const element = Hello, World!;
ReactDOM.render(element, document.getElementById('root'));
```

JSX juga mendukung ekspresi JavaScript di dalamnya:

```
const name = "Alice";
const element = Hello, {name}!;
```

## Perbedaan JSX dan HTML

| JSX | HTML |
|---|---|
| Gunakan `className` untuk atribut kelas. | Gunakan `class` untuk atribut kelas. |
| Gunakan `camelCase` untuk properti inline style. | Gunakan sintaks CSS standar. |
| Harus memiliki satu elemen pembungkus utama. | Tidak memerlukan elemen pembungkus. |

## Menggunakan JSX dalam React

JSX digunakan dalam komponen React untuk merender UI.

```
function Welcome(props) {
  return Hello, {props.name}!;
}

ReactDOM.render(, document.getElementById('root'));
```

## Manfaat dan Keuntungan

- **Kode lebih mudah dibaca:** Struktur yang menyerupai HTML membuat kode lebih intuitif.
- **Lebih efisien:** JSX dikompilasi menjadi JavaScript murni yang lebih optimal.
- **Mendukung ekspresi JavaScript:** Memudahkan manipulasi UI secara dinamis.

## Contoh Penerapan

JSX sering digunakan dalam React untuk membangun UI secara dinamis, seperti dalam penggunaan conditional rendering:

```
const isLoggedIn = true;
const message = isLoggedIn ? Welcome back! : Please sign in;
```

## Kesimpulan

JSX adalah fitur utama dalam React yang memungkinkan pengembang menulis kode UI dengan cara yang lebih bersih dan mudah dipahami. Dengan memahami JSX, pengembang dapat membuat komponen yang lebih efisien dan mudah dikelola.
