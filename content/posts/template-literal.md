---
slug: "template-literal"
title: "Template Literal"
date: "2025-03-08"
published: "2025-03-08T13:05:00.000-08:00"
summary: "Template Literal adalah fitur dalam JavaScript yang memungkinkan kita untuk membuat string dengan cara yang lebih fleksibel dan mudah dibaca, terutama saat menyertakan variabel atau ekspresi di..."
sourceUrl: "https://blog.programinglive.com/2025/03/template-literal.html"
image: "/img/posts/template-literal/ac5c05632d_Template_20Literal.png"
categories:
  - "Growth"
wordCount: 289
---

![](/img/posts/template-literal/ac5c05632d_Template_20Literal.png)

## Pengertian Template Literal

Template Literal adalah fitur dalam JavaScript yang memungkinkan kita untuk membuat string dengan cara yang lebih fleksibel dan mudah dibaca, terutama saat menyertakan variabel atau ekspresi di dalamnya.

## Sintaks Template Literal

Template Literal menggunakan tanda backtick (`'`) daripada tanda kutip biasa (`'` atau `"`).

```
const nama = "John";
const pesan = `Halo, ${nama}! Selamat datang.`;
console.log(pesan); // Output: Halo, John! Selamat datang.
```

## Penggunaan Ekspresi dalam Template Literal

Kita bisa menyisipkan ekspresi dalam Template Literal menggunakan sintaks `${}`.

```
const a = 10;
const b = 20;
console.log(`Hasil penjumlahan: ${a + b}`); // Output: Hasil penjumlahan: 30
```

## Multi-Line String

Dengan Template Literal, kita bisa membuat string multi-baris tanpa perlu menggunakan karakter `\n`.

```
const paragraf = `Ini adalah teks multi-baris.
Kita bisa menulis tanpa harus menambahkan \n secara manual.`;
console.log(paragraf);
```

## Tagged Template

Tagged Template memungkinkan kita untuk memproses Template Literal menggunakan fungsi.

```
function highlight(strings, ...values) {
    return strings.map((str, i) => `${str}${values[i] || ''}`).join('');
}

const nama = "Alice";
const umur = 25;
const hasil = highlight`Nama: ${nama}, Umur: ${umur}`;
console.log(hasil);
```

## Manfaat dan Keuntungan

- **Kode lebih bersih:** Memudahkan penyusunan string.
- **Mendukung ekspresi:** Bisa langsung menyisipkan variabel atau perhitungan.
- **Mudah digunakan untuk multi-line string:** Tidak perlu karakter escape.

## Contoh Penerapan

Template Literal sering digunakan dalam pengembangan web, misalnya dalam JSX React:

```
const name = "Bob";
const element = {`Halo, ${name}!`};
```

Atau dalam penggunaan API:

```
const id = 5;
const url = `https://api.example.com/users/${id}`;
console.log(url);
```

## Kesimpulan

Template Literal adalah fitur JavaScript yang sangat berguna untuk membangun string dengan lebih mudah dan fleksibel. Dengan sintaks yang lebih intuitif, Template Literal membantu pengembang menulis kode yang lebih rapi dan mudah dibaca.
