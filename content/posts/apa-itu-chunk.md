---
slug: "apa-itu-chunk"
title: "Apa Itu Chunk?"
date: "2025-04-11"
published: "2025-04-11T10:06:00.000-07:00"
summary: "**Chunk** adalah potongan kecil data yang dikirim, diproses, atau disimpan secara bertahap. Alih-alih menangani seluruh data sekaligus, sistem dapat membagi data menjadi beberapa chunk (bagian)..."
sourceUrl: "https://blog.programinglive.com/2025/04/apa-itu-chunk.html"
image: "/img/posts/apa-itu-chunk/9152d9eddd_Apa_20Itu_20Chunk.png"
categories:
  - "Backend"
wordCount: 352
---

## Apa Itu Chunk?

![](/img/posts/apa-itu-chunk/9152d9eddd_Apa_20Itu_20Chunk.png)

### 1. Pengertian Chunk

**Chunk** adalah potongan kecil data yang dikirim, diproses, atau disimpan secara bertahap. Alih-alih menangani seluruh data sekaligus, sistem dapat membagi data menjadi beberapa chunk (bagian) agar bisa dikelola dengan lebih efisien.

### 2. Fungsi Chunk dalam Pemrosesan Data

Chunk memungkinkan aplikasi untuk:

- Menghindari penggunaan memori besar secara tiba-tiba
- Menangani data besar seperti file video, audio, atau dokumen besar
- Mengalirkan data secara real-time ke pengguna (streaming)

### 3. Chunk dalam Stream

Dalam **streaming**, chunk adalah bagian-bagian data yang dikirim secara berurutan. Setiap chunk bisa diproses segera saat diterima, tanpa perlu menunggu seluruh data selesai dikirim.

```
stream.on('data', (chunk) => {
  console.log('Menerima chunk:', chunk);
});
```

### 4. Chunk dalam Jaringan dan HTTP

Dalam protokol HTTP, dikenal istilah **chunked transfer encoding**. Artinya, server mengirimkan respon dalam bentuk potongan-potongan data (chunk), sehingga browser bisa mulai menampilkan data tanpa harus menunggu semuanya selesai.

Contoh: saat kamu membuka halaman dengan gambar besar, gambar bisa mulai tampil sebagian sambil sisa datanya masih dikirim oleh server.

### 5. Chunk dalam File Handling

Ketika membaca file besar seperti video 1GB, lebih efisien jika file dibaca per 64KB atau 128KB daripada dimuat sekaligus ke memori. Setiap potongan itulah yang disebut chunk.

```
const fs = require('fs');
const readStream = fs.createReadStream('video.mp4');

readStream.on('data', (chunk) => {
  console.log('Chunk size:', chunk.length);
});
```

### 6. Manfaat Penggunaan Chunk

- **Efisiensi memori:** Tidak perlu menyimpan seluruh data dalam RAM
- **Respon cepat:** Data bisa mulai diproses meski belum lengkap
- **Real-time processing:** Cocok untuk live streaming atau aplikasi besar

### 7. Contoh Kasus Chunk di Node.js

```
const http = require('http');

http.createServer((req, res) => {
  req.on('data', (chunk) => {
    console.log('Menerima bagian data:', chunk.toString());
  });

  req.on('end', () => {
    res.end('Data diterima.');
  });
}).listen(3000);
```

Penjelasan: Server menerima data dari client secara bertahap dalam bentuk chunk. Cocok untuk upload file atau streaming data dari frontend ke backend.

### 8. Kesimpulan

**Chunk** adalah bagian kecil dari data yang dikirim atau dibaca secara bertahap. Konsep ini sangat penting dalam pengembangan aplikasi yang melibatkan file besar, streaming, atau komunikasi jaringan. Dengan chunk, sistem menjadi lebih ringan, cepat, dan efisien.
