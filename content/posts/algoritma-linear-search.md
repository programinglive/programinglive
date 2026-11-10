---
slug: "algoritma-linear-search"
title: "Algoritma Linear Search"
date: "2025-05-07"
published: "2025-05-07T10:21:00.000-07:00"
summary: "Kalau kamu baru mulai belajar algoritma, Linear Search ini adalah salah satu yang paling dasar dan gampang dimengerti. Meski kelihatannya sederhana, algoritma ini masih banyak dipakai di berbagai..."
sourceUrl: "https://blog.programinglive.com/2025/05/algoritma-linear-search.html"
image: "/img/posts/algoritma-linear-search/86adb0ddcd_Algoritma_20Linear_20Search.png"
categories:
  - "Growth"
wordCount: 388
---

![](/img/posts/algoritma-linear-search/86adb0ddcd_Algoritma_20Linear_20Search.png)

Kalau kamu baru mulai belajar algoritma, Linear Search ini adalah salah satu yang paling dasar dan gampang dimengerti. Meski kelihatannya sederhana, algoritma ini masih banyak dipakai di berbagai situasi, terutama kalau datanya belum diurutkan.

## 1. Apa Itu Linear Search?

Linear Search (atau pencarian linear) adalah metode pencarian paling simpel. Kamu cek satu per satu elemen dalam list sampai nemu yang kamu cari atau sampai habis dicek semua.

## 2. Cara Kerja Linear Search

Langkah-langkahnya:

- Mulai dari elemen pertama dalam list.
- Bandingkan elemen tersebut dengan nilai yang dicari.
- Kalau cocok, berhenti.
- Kalau belum cocok, lanjut ke elemen berikutnya.
- Ulangi sampai ketemu atau sampai akhir list.

## 3. Ilustrasi Kasual

Bayangin kamu lagi nyari kunci motor di tas. Kamu buka satu per satu kantong: depan, samping, belakang, dalam. Kalau ketemu di kantong belakang, berarti kamu udah cek 3 kantong sebelumnya. Nah, itu sama kayak cara kerja Linear Search.

## 4. Contoh Kasus pada Koding

```
List: [7, 2, 9, 4, 5]
Cari angka: 4

Langkah:
- Cek 7 → bukan
- Cek 2 → bukan
- Cek 9 → bukan
- Cek 4 → cocok → selesai
```

Dalam Python, kodenya kira-kira seperti ini:

```
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # posisi ditemukan
    return -1  # tidak ditemukan
```

## 5. Kapan Linear Search Digunakan?

- Kalau datanya sedikit.
- Kalau datanya belum diurutkan.
- Kalau kamu butuh solusi cepat dan gak ribet.

**Contoh:** Aplikasi scan QR code pakai Linear Search untuk nyocokin data QR dengan daftar yang belum terurut.

## 6. Kelebihan Linear Search

- Mudah diimplementasikan.
- Tidak butuh data terurut.
- Bisa dipakai di struktur data apapun (array, list, dll).

## 7. Kekurangan Linear Search

- Lambat kalau datanya banyak.
- Waktu pencarian maksimal = jumlah data (O(n)).

## 8. Perbandingan dengan Binary Search

| Fitur | Linear Search | Binary Search |
|---|---|---|
| Data harus terurut? | Tidak | Ya |
| Waktu terbaik | O(1) | O(1) |
| Waktu terburuk | O(n) | O(log n) |
| Kompleksitas implementasi | Mudah | Lebih rumit |

*Kesimpulan:* Linear Search itu kayak “cari manual”, cocok buat kondisi yang sederhana dan cepat. Tapi kalau kamu kerja dengan data besar atau butuh efisiensi tinggi, sebaiknya mulai eksplor algoritma lain yang lebih optimal.
