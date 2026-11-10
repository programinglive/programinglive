---
slug: "apa-itu-git-merge"
title: "Apa Itu Git Merge?"
date: "2025-05-02"
published: "2025-05-02T09:00:00.000-07:00"
summary: "Git Merge itu salah satu teknik penting buat gabungin perubahan dari satu branch ke branch lain. Yuk kita bedah detailnya biar makin jago!"
sourceUrl: "https://blog.programinglive.com/2025/05/apa-itu-git-merge.html"
image: "/img/posts/apa-itu-git-merge/f9662b1641_Apa_20Itu_20Git_20Merge_3F.png"
categories:
  - "Testing & DevOps"
wordCount: 403
---

![](/img/posts/apa-itu-git-merge/f9662b1641_Apa_20Itu_20Git_20Merge_3F.png)

Git Merge itu salah satu teknik penting buat gabungin perubahan dari satu branch ke branch lain. Yuk kita bedah detailnya biar makin jago!

## 1. Pengertian Git Merge

Git Merge adalah proses buat menggabungkan dua branch berbeda jadi satu. Biasanya dipakai buat ngambil perubahan dari branch lain ke branch yang lagi kamu kerjain tanpa ngerusak sejarah commit yang udah ada.

## 2. Fungsi Git Merge

- **Gabungin kerjaan tim** ke branch utama.
- **Sinkronisasi perubahan** dari branch lain ke branch kamu.
- **Mengelola kolaborasi** biar semua update masuk rapi.

## 3. Jenis-Jenis Git Merge

- **Fast-forward merge:** Kalau branch target bisa langsung maju ke commit terbaru tanpa konflik.
- **Three-way merge:** Kalau perubahan di kedua branch beda-beda, Git akan gabungin berdasarkan common ancestor.

## 4. Perbedaan Git Merge dan Git Rebase

**Merge** gabungin semua perubahan dengan tetap mempertahankan sejarah commit asli (bisa kelihatan bercabang).

**Rebase** lebih kayak "nyelipin" commit kamu di atas commit branch lain, jadinya sejarahnya lebih lurus.

*Singkatnya:* Merge = sejarah asli tetap. Rebase = sejarah diubah supaya lebih rapi.

## 5. Contoh Kasus Git Merge

Misalnya kamu kerja di branch `fitur-login` dan mau gabungin ke `main`:

```
git checkout main
git merge fitur-login
```

Kalau semua lancar, Git bakal buat commit baru (merge commit) yang gabungin perubahan dari `fitur-login` ke `main`.

## 6. Cara Melakukan Git Merge

- **Checkout** ke branch tujuan (misal `main`).
- **Merge** branch sumber ke branch tujuan.
- **Resolve conflict** (kalau ada).
- **Commit** hasil merge kalau perlu.

## 7. Apa yang Terjadi Kalau Ada Conflict?

Kalau dua branch ngubah bagian yang sama di file yang sama, Git bakal bingung. Ini yang namanya **merge conflict**. Kamu harus:

- Edit file yang konflik, pilih perubahan yang mau dipakai.
- Hapus tanda-tanda konflik (>>>>>).
- Setelah beres, jalankan `git add` dan `git commit` buat nyelesein merge.

## 8. Tips Merge Biar Gak Pusing

- **Selalu fetch dulu** sebelum merge (`git fetch`).
- **Merge branch kecil-kecil** biar konfliknya minimal.
- **Sering-sering merge** biar branch kamu tetap update.
- **Jangan takut konflik**! Conflict itu hal biasa dalam teamwork.

## 9. Kapan Waktu Tepat Menggunakan Git Merge?

- Kalau mau gabungin kerjaan fitur ke branch utama.
- Kalau mau bawa update dari branch utama ke fitur branch kamu.
- Kalau butuh maintain sejarah perubahan biar tetap lengkap dan transparan.

Itu dia panduan tentang Git Merge. Teknik simpel tapi wajib dikuasai semua developer supaya project jalan mulus dan teamwork makin solid!
