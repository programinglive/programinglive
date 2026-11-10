---
slug: "mengenal-siklus-red-green-refactor"
title: "Mengenal Siklus Red-Green-Refactor"
date: "2025-04-18"
published: "2025-04-18T10:09:00.000-07:00"
summary: "**Red-Green-Refactor** adalah siklus kerja utama dalam Test-Driven Development (TDD) yang membantu developer memastikan kode mereka berkualitas tinggi dan bebas bug sejak awal. Siklus ini terdiri..."
sourceUrl: "https://blog.programinglive.com/2025/04/mengenal-siklus-red-green-refactor.html"
image: "/img/posts/mengenal-siklus-red-green-refactor/0528586a52_ngenal_20Siklus_20Red-Green-Refactor.png"
categories:
  - "Testing & DevOps"
wordCount: 450
---

![](/img/posts/mengenal-siklus-red-green-refactor/0528586a52_ngenal_20Siklus_20Red-Green-Refactor.png)

## Apa Itu Red-Green-Refactor?

**Red-Green-Refactor** adalah siklus kerja utama dalam Test-Driven Development (TDD) yang membantu developer memastikan kode mereka berkualitas tinggi dan bebas bug sejak awal. Siklus ini terdiri dari tiga langkah berulang: menulis tes yang gagal (*Red*), membuat kode yang meluluskan tes tersebut (*Green*), lalu memperbaiki struktur kode tanpa mengubah fungsinya (*Refactor*).

## Mengapa Red-Green-Refactor Penting dalam TDD?

Siklus ini penting karena membuat kode kamu tidak hanya berfungsi dengan benar, tetapi juga mudah dipahami, diubah, dan diperbaiki di kemudian hari.

## Fase Red: Menulis Tes yang Gagal Dulu

Pada tahap ini, kamu menulis tes yang menggambarkan perilaku yang diinginkan dari kode kamu, namun belum ada implementasi yang membuat tes ini berhasil. Dengan demikian, tes tersebut pasti gagal dan akan menampilkan warna merah.

## Fase Green: Membuat Kode yang Meluluskan Tes

Di tahap ini, kamu menulis kode secukupnya agar tes yang kamu tulis tadi bisa lulus. Jangan berpikir tentang optimasi atau keindahan kode dulu—fokus pada kelulusan tes.

## Fase Refactor: Membersihkan dan Merapikan Kode

Setelah tes kamu lulus, saatnya kamu memperbaiki dan merapikan kode yang tadi kamu buat. Tujuan tahap ini adalah untuk menjaga kode agar tetap bersih, mudah dipahami, dan efisien tanpa mengubah fungsi kode tersebut.

## Manfaat Menggunakan Siklus Red-Green-Refactor

- Menghasilkan kode yang bersih dan rapi sejak awal.
- Lebih sedikit bug dan kesalahan.
- Meningkatkan kepercayaan diri saat mengubah atau menambahkan fitur baru.
- Mempermudah pemeliharaan jangka panjang.

## Contoh Praktis Siklus Red-Green-Refactor

Misalnya kamu ingin membuat fungsi yang menghitung luas persegi:

- **Tulis Tes (Red):**

```
// Test menggunakan Jest
test('Menghitung luas persegi', () => {
    expect(hitungLuasPersegi(4)).toBe(16);
});
```

Tes ini akan gagal karena belum ada fungsi `hitungLuasPersegi`.

- **Tulis Implementasi (Green):**

```
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}
```

Sekarang, tes sudah berhasil (green).

- **Refactor Kode (Refactor):**

Misalnya kamu ingin memastikan input selalu positif:

```
function hitungLuasPersegi(sisi) {
    if (sisi <= 0) throw new Error('Panjang sisi harus positif');
    return sisi * sisi;
}
```

Kode menjadi lebih kuat dan tetap lulus tes.

## Kesalahan Umum Saat Menggunakan Red-Green-Refactor

- Melakukan refactoring sebelum test berhasil (green).
- Melewatkan tahap refactoring karena merasa kode sudah cukup baik.
- Membuat tes yang terlalu kompleks.

## Kapan Sebaiknya Siklus Red-Green-Refactor Digunakan?

- Ketika memulai fitur baru.
- Saat melakukan refactoring kode lama.
- Ketika menghadapi fitur yang rumit dan rawan error.

## Tips Efektif Menerapkan Red-Green-Refactor

- Mulai dari tes paling sederhana.
- Usahakan setiap siklus Red-Green-Refactor berlangsung singkat.
- Selalu cek ulang semua tes setelah tahap refactoring.
- Disiplin untuk tidak melewati tahapan siklus ini demi kode yang optimal.

Dengan memahami dan menerapkan siklus Red-Green-Refactor, kamu bisa membuat proses coding menjadi lebih menyenangkan, kode lebih bersih, dan bug menjadi minimal. Yuk mulai coba!
