---
slug: "algoritma-binary-search"
title: "Algoritma Binary Search"
date: "2025-05-08"
published: "2025-05-08T10:25:00.000-07:00"
summary: "Kalau kamu udah kenal sama Linear Search, sekarang saatnya naik level ke algoritma yang lebih cepat dan efisien: Binary Search. Ini adalah algoritma pencarian yang super populer dan sering dipakai..."
sourceUrl: "https://blog.programinglive.com/2025/05/algoritma-binary-search.html"
image: "/img/posts/algoritma-binary-search/f204f9a7b5_Algoritma_20Binary_20Search.png"
categories:
  - "Growth"
wordCount: 401
---

![](/img/posts/algoritma-binary-search/f204f9a7b5_Algoritma_20Binary_20Search.png)

Kalau kamu udah kenal sama Linear Search, sekarang saatnya naik level ke algoritma yang lebih cepat dan efisien: Binary Search. Ini adalah algoritma pencarian yang super populer dan sering dipakai di dunia nyata, terutama kalau datanya udah diurutkan.

## 1. Apa Itu Binary Search?

Binary Search adalah algoritma pencarian yang membagi data menjadi dua bagian setiap langkahnya. Jadi, daripada cek satu-satu kayak Linear Search, Binary Search langsung “lompat” ke tengah dan terus potong datanya jadi setengah sampai ketemu yang dicari.

## 2. Syarat Binary Search

**⚠️ Data HARUS dalam keadaan terurut.** Kalau datanya belum diurutkan, hasilnya bisa kacau.

## 3. Cara Kerja Binary Search

- Tentukan nilai tengah dari list.
- Bandingkan nilai tengah dengan target.
- Kalau cocok → selesai.
- Kalau target lebih kecil → cari di kiri.
- Kalau target lebih besar → cari di kanan.
- Ulangi langkah 1–5 pada bagian yang dipilih.

## 4. Ilustrasi Gampangnya

Bayangin kamu cari kata di kamus. Kamu gak mulai dari halaman 1, kan? Biasanya kamu buka di tengah, lalu sesuaikan: "Oh, hurufnya masih terlalu ke depan" → geser ke kanan. Nah, itu prinsip Binary Search.

## 5. Contoh Kode dalam Python

```
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1  # target tidak ditemukan
```

## 6. Kapan Pakai Binary Search?

- Kalau datanya udah diurutkan.
- Kalau kamu butuh kecepatan tinggi dalam pencarian.
- Kalau kamu sedang optimasi program biar lebih efisien.

## 7. Kelebihan Binary Search

- Jauh lebih cepat daripada Linear Search untuk data besar.
- Efisien: kompleksitas waktunya O(log n).

## 8. Kekurangan Binary Search

- Data HARUS sudah diurutkan terlebih dahulu.
- Susah diterapkan di data yang tidak disimpan secara berurutan (misalnya linked list).

## 9. Binary vs Linear Search

| Fitur | Binary Search | Linear Search |
|---|---|---|
| Data harus terurut? | Ya | Tidak |
| Kecepatan (data besar) | Sangat cepat (logaritmik) | Lambat (linear) |
| Kompleksitas logika | Sedang | Sangat mudah |

*Kesimpulan:* Binary Search adalah pilihan utama kalau kamu punya data yang sudah terurut dan ingin pencarian super cepat. Tapi inget, kalau datanya belum berurutan, kamu harus urutin dulu. Cocok banget buat optimasi program atau aplikasi skala besar.
