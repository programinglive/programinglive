---
slug: "instalasi-typescript"
title: "Instalasi TypeScript"
date: "2025-03-18"
published: "2025-03-18T13:06:00.000-07:00"
summary: "TypeScript adalah bahasa pemrograman yang merupakan superset dari JavaScript, menambahkan fitur static typing dan fitur-fitur modern lainnya. Sebelum Anda dapat mulai menulis dan menjalankan kode..."
sourceUrl: "https://blog.programinglive.com/2025/03/instalasi-typescript.html"
image: "/img/posts/instalasi-typescript/e3c938cf53_Instalasi_20TypeScript.png"
categories:
  - "Frontend"
wordCount: 793
---

![](/img/posts/instalasi-typescript/e3c938cf53_Instalasi_20TypeScript.png)

## Pendahuluan

TypeScript adalah bahasa pemrograman yang merupakan superset dari JavaScript, menambahkan fitur static typing dan fitur-fitur modern lainnya. Sebelum Anda dapat mulai menulis dan menjalankan kode TypeScript, Anda perlu menginstalnya di sistem Anda. Artikel ini akan memandu Anda melalui proses instalasi TypeScript, baik secara global maupun lokal (per proyek), serta memberikan informasi tambahan yang berguna.

## Prasyarat Instalasi

Sebelum memulai instalasi TypeScript, pastikan Anda telah memenuhi prasyarat berikut:

- **Node.js dan npm (Node Package Manager):** TypeScript memerlukan Node.js untuk menjalankan compiler-nya (`tsc`). npm digunakan untuk mengelola package dan dependencies proyek Anda. Anda dapat mengunduh dan menginstal Node.js dari website resminya: [https://nodejs.org](https://nodejs.org). npm biasanya sudah termasuk dalam instalasi Node.js. Pastikan versi Node.js Anda adalah versi LTS (Long Term Support) yang stabil.

Setelah menginstal Node.js, Anda dapat memverifikasi instalasi dengan membuka terminal atau command prompt dan menjalankan perintah berikut:

```
node -v
npm -v
```

Perintah di atas akan menampilkan versi Node.js dan npm yang terinstal di sistem Anda.

## Instalasi TypeScript secara Global

Instalasi TypeScript secara global memungkinkan Anda menggunakan compiler `tsc` dari mana saja di sistem Anda. Ini adalah cara yang paling umum dan mudah untuk memulai dengan TypeScript.

- **Buka Terminal atau Command Prompt:** Buka terminal (Linux/macOS) atau command prompt (Windows) sebagai administrator (jika diperlukan).
- **Jalankan Perintah Instalasi:** Jalankan perintah berikut untuk menginstal TypeScript secara global menggunakan npm:

## Instalasi TypeScript secara Lokal (Per Proyek)

Instalasi TypeScript secara lokal memungkinkan Anda menggunakan versi TypeScript tertentu untuk proyek tertentu. Ini berguna jika Anda bekerja pada beberapa proyek yang membutuhkan versi TypeScript yang berbeda.

- **Buat Proyek Baru:** Buat folder baru untuk proyek TypeScript Anda.
- **Inisialisasi Proyek npm:** Buka terminal atau command prompt di dalam folder proyek Anda dan jalankan perintah berikut:
- **Instal TypeScript secara Lokal:** Jalankan perintah berikut untuk menginstal TypeScript sebagai dependency lokal proyek Anda:

## Verifikasi Instalasi

Setelah menginstal TypeScript, Anda perlu memverifikasi bahwa instalasi berhasil.

- **Verifikasi Instalasi Global:** Buka terminal atau command prompt baru dan jalankan perintah berikut:
- **Verifikasi Instalasi Lokal:** Buka terminal atau command prompt di dalam folder proyek Anda dan jalankan perintah berikut:

## Konfigurasi TypeScript (tsconfig.json)

File `tsconfig.json` digunakan untuk mengkonfigurasi compiler TypeScript (`tsc`). File ini menentukan opsi kompilasi, seperti target ECMAScript version, module system, dan direktori output.

Untuk membuat file `tsconfig.json`, jalankan perintah berikut di dalam folder proyek Anda:

```
tsc --init
```

Perintah ini akan membuat file `tsconfig.json` dengan konfigurasi default. Anda dapat memodifikasi file ini sesuai dengan kebutuhan proyek Anda. Beberapa opsi konfigurasi yang umum digunakan meliputi:

- `compilerOptions.target`: Menentukan target ECMAScript version (misalnya, "es5", "es6", "esnext").
- `compilerOptions.module`: Menentukan module system (misalnya, "commonjs", "amd", "esnext").
- `compilerOptions.outDir`: Menentukan direktori output untuk file JavaScript yang dihasilkan.
- `compilerOptions.rootDir`: Menentukan root directory untuk file TypeScript Anda.
- `compilerOptions.sourceMap`: Menentukan apakah akan menghasilkan source map untuk debugging.
- `include`: Menentukan file atau direktori mana yang akan dikompilasi.
- `exclude`: Menentukan file atau direktori mana yang akan dikecualikan dari kompilasi.

Contoh file `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

Setelah Anda mengkonfigurasi file `tsconfig.json`, Anda dapat menjalankan compiler TypeScript dengan perintah:

```
tsc
```

Perintah ini akan mengkompilasi semua file TypeScript di direktori `src` dan menghasilkan file JavaScript yang sesuai di direktori `dist`.

## Integrasi dengan IDE

TypeScript memiliki integrasi yang sangat baik dengan banyak Integrated Development Environment (IDE) populer, seperti Visual Studio Code, Sublime Text, dan WebStorm. Integrasi IDE menyediakan fitur-fitur seperti:

- **Syntax highlighting:** Menyoroti sintaks TypeScript untuk meningkatkan readability.
- **Code completion:** Menawarkan saran untuk kode yang Anda ketik.
- **Error checking:** Menemukan kesalahan dalam kode Anda secara real-time.
- **Debugging:** Memungkinkan Anda untuk men-debug kode TypeScript Anda.
- **Refactoring:** Membantu Anda untuk merestrukturisasi kode Anda dengan aman.

Visual Studio Code adalah pilihan yang sangat baik untuk pengembangan TypeScript karena memiliki dukungan bawaan untuk TypeScript dan menyediakan banyak fitur yang berguna.

## Pemecahan Masalah Umum

Berikut adalah beberapa masalah umum yang mungkin Anda hadapi saat menginstal dan mengkonfigurasi TypeScript, beserta solusinya:

- **Perintah `tsc` tidak ditemukan:** Pastikan direktori instalasi npm global ada di PATH environment variable Anda.
- **Error kompilasi:** Periksa file `tsconfig.json` Anda untuk memastikan bahwa opsi kompilasi dikonfigurasi dengan benar.
- **Masalah integrasi IDE:** Pastikan Anda telah menginstal plugin atau ekstensi TypeScript yang sesuai untuk IDE Anda.
- **Versi TypeScript tidak sesuai:** Jika Anda menggunakan instalasi lokal, pastikan versi TypeScript yang Anda gunakan sesuai dengan kebutuhan proyek Anda.

## Kesimpulan

Instalasi TypeScript adalah langkah pertama untuk mulai menulis kode TypeScript. Dengan mengikuti panduan ini, Anda seharusnya dapat menginstal TypeScript secara global atau lokal, mengkonfigurasi compiler, dan mengintegrasikannya dengan IDE Anda. Setelah Anda berhasil menginstal TypeScript, Anda dapat mulai mempelajari dasar-dasar bahasa dan membangun aplikasi yang lebih kompleks.

Selamat mencoba dan semoga berhasil!
