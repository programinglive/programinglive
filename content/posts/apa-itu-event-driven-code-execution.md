---
slug: "apa-itu-event-driven-code-execution"
title: "Apa itu Event-driven Code Execution"
date: "2025-04-14"
published: "2025-04-14T04:24:00.000-07:00"
summary: "**Event-driven code execution** adalah model pemrograman di mana alur program ditentukan oleh kejadian (event), seperti aksi pengguna, pesan dari sistem, atau sinyal waktu. Dalam pendekatan ini,..."
sourceUrl: "https://blog.programinglive.com/2025/04/apa-itu-event-driven-code-execution.html"
image: "/img/posts/apa-itu-event-driven-code-execution/24a2154f7d_tu_20Event-driven_20Code_20Execution.png"
categories:
  - "Backend"
wordCount: 473
---

![](/img/posts/apa-itu-event-driven-code-execution/24a2154f7d_tu_20Event-driven_20Code_20Execution.png)

## 1. Pengertian Event-driven Code Execution

**Event-driven code execution** adalah model pemrograman di mana alur program ditentukan oleh kejadian (event), seperti aksi pengguna, pesan dari sistem, atau sinyal waktu. Dalam pendekatan ini, sistem menunggu event terjadi, lalu mengeksekusi fungsi atau handler yang telah didefinisikan sebelumnya.

Model ini sangat umum dalam pengembangan aplikasi GUI, web, server real-time, dan IoT. Node.js adalah contoh bahasa dan platform modern yang sangat mengandalkan event-driven programming.

## 2. Konsep Dasar: Event, Listener, dan Callback

- **Event:** Kejadian atau aksi yang dipicu oleh pengguna atau sistem, seperti klik tombol, koneksi masuk, atau file diubah.
- **Event Listener:** Fungsi yang “mendengarkan” sebuah event tertentu dan akan dieksekusi saat event itu terjadi.
- **Callback:** Fungsi yang dipanggil sebagai respon terhadap event yang terpicu.

Contoh sederhana: ketika pengguna mengklik tombol "Submit", maka event listener akan merespons klik tersebut dan memanggil fungsi untuk memproses data.

## 3. Bagaimana Cara Kerja Event-driven Execution?

Secara umum, event-driven code bekerja dengan **event loop**. Ini adalah mekanisme yang terus-menerus memantau event yang terjadi dan memprosesnya satu per satu menggunakan queue (antrian).

Prosesnya secara garis besar adalah:

- Program mendaftarkan event listener.
- Saat event terjadi, event loop akan mendeteksi dan menambahkan ke event queue.
- Event queue memproses event dengan memanggil callback yang sesuai.

## 4. Contoh Kode: Implementasi Event-driven di Node.js

Berikut adalah contoh implementasi event-driven dengan modul `events` di Node.js:

```
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Mendaftarkan listener
emitter.on('login', (username) => {
  console.log(`${username} telah login.`);
});

// Memicu event
emitter.emit('login', 'admin');
```

Output dari kode di atas akan mencetak: `admin telah login.`

Ini menunjukkan bagaimana sebuah fungsi dijalankan sebagai respon terhadap sebuah event.

## 5. Kelebihan Model Event-driven

- **Responsif:** Aplikasi merespons langsung terhadap input atau aksi pengguna.
- **Ringan:** Tidak memerlukan banyak thread karena bersifat asynchronous.
- **Efisien:** Cocok untuk aplikasi dengan banyak I/O, seperti API dan chat apps.
- **Mudah Skalabel:** Bisa menangani banyak koneksi secara simultan.

## 6. Kekurangan dan Tantangan

- **Callback Hell:** Penanganan event yang saling bersarang bisa membuat kode sulit dibaca.
- **Susah di-debug:** Karena alur program tidak linier, tracking error lebih kompleks.
- **Tidak cocok untuk CPU-heavy tasks:** Proses berat bisa menghambat event loop.

## 7. Penerapan dalam Dunia Nyata

Event-driven programming sangat umum dalam banyak bidang:

- **Aplikasi Web:** Menangani klik, scroll, input form, AJAX calls, dsb.
- **Server Real-time:** Chat, notifikasi, streaming video (contoh: WhatsApp Web, Discord).
- **IoT dan Embedded Systems:** Respon terhadap sinyal sensor atau input perangkat.
- **Game Development:** Setiap aksi pemain atau perubahan status dianggap sebagai event.

## 8. Penutup

Event-driven code execution adalah pendekatan efisien dalam membangun aplikasi modern yang interaktif dan real-time. Dengan memahami konsep event, listener, dan callback, pengembang dapat menciptakan sistem yang ringan dan responsif. Namun, pendekatan ini juga menuntut pemahaman yang baik akan asynchronous programming agar aplikasi tetap terstruktur dan mudah dirawat.
