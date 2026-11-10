---
slug: "pengertian-stream-dan-buffers-dalam-server"
title: "Pengertian Stream dan Buffers dalam Server"
date: "2025-04-11"
published: "2025-04-11T09:44:00.000-07:00"
summary: "**Stream** adalah aliran data yang dapat dibaca atau ditulis secara bertahap (chunk by chunk), tanpa harus menunggu seluruh data selesai. Dalam konteks server, stream memungkinkan pemrosesan data..."
sourceUrl: "https://blog.programinglive.com/2025/04/pengertian-stream-dan-buffers-dalam.html"
image: "/img/posts/pengertian-stream-dan-buffers-dalam-server/51f6349fe0_eam_20dan_20Buffers_20dalam_20Server.png"
categories:
  - "Backend"
wordCount: 399
---

## Pengertian Stream dan Buffers dalam Server

![](/img/posts/pengertian-stream-dan-buffers-dalam-server/51f6349fe0_eam_20dan_20Buffers_20dalam_20Server.png)

### 1. Apa Itu Stream?

**Stream** adalah aliran data yang dapat dibaca atau ditulis secara bertahap (chunk by chunk), tanpa harus menunggu seluruh data selesai. Dalam konteks server, stream memungkinkan pemrosesan data secara efisien — terutama saat menangani file besar atau data jaringan seperti HTTP request dan response.

Ada 4 jenis stream di Node.js:

- **Readable** – untuk membaca data
- **Writable** – untuk menulis data
- **Duplex** – dapat dibaca dan ditulis
- **Transform** – dapat dimodifikasi saat data mengalir

### 2. Apa Itu Buffer?

**Buffer** adalah tempat penyimpanan sementara untuk data mentah (binary data), terutama ketika mentransfer data antara dua proses, misalnya antara server dan client.

Buffer sangat penting ketika: Menangani file atau data binari (gambar, video) Menerima stream data jaringan yang belum lengkap Memproses data dalam ukuran besar secara efisien

### 3. Perbedaan Stream dan Buffer

| Stream | Buffer |
|---|---|
| Data diproses secara bertahap (chunk) | Data ditampung secara penuh dulu baru diproses |
| Lebih efisien untuk data besar | Menggunakan memori lebih banyak untuk data besar |
| Cocok untuk file besar dan koneksi jaringan | Cocok untuk data kecil atau kebutuhan manipulasi langsung |

### 4. Fungsi Stream dan Buffer di Server

Dalam pengembangan server (misalnya dengan Node.js), stream dan buffer digunakan untuk mengelola:

- Upload dan download file
- Streaming video/audio secara langsung
- Pengiriman data antar microservice
- Membaca file log berukuran besar tanpa memuat seluruh file ke memori

### 5. Contoh Kasus Penggunaan Stream

```
const fs = require('fs');

const readStream = fs.createReadStream('video.mp4');
const writeStream = fs.createWriteStream('copy.mp4');

readStream.pipe(writeStream);
```

Penjelasan: Stream digunakan untuk menyalin file video besar tanpa harus membaca seluruh isi file ke memori. Ini membuat proses lebih efisien dan cepat.

### 6. Contoh Kasus Penggunaan Buffer

```
const buffer = Buffer.from('Halo Dunia');
console.log(buffer);           // Output dalam bentuk biner
console.log(buffer.toString()); // Konversi ke string kembali
```

Penjelasan: Buffer digunakan untuk menyimpan data dalam bentuk biner yang kemudian bisa dikonversi ke bentuk lain sesuai kebutuhan, seperti teks atau file.

### 7. Kesimpulan

**Stream** dan **Buffer** adalah dua konsep fundamental dalam pemrosesan data di server.

- **Stream** digunakan untuk mengelola data secara bertahap, efisien untuk file besar atau data jaringan.
- **Buffer** berguna untuk menyimpan data mentah secara sementara dalam format biner sebelum diproses lebih lanjut.

Dengan memahami keduanya, kamu bisa membangun server yang lebih optimal, hemat memori, dan scalable.
