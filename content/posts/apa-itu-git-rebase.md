---
slug: "apa-itu-git-rebase"
title: "Apa itu Git Rebase?"
date: "2025-04-28"
published: "2025-04-28T08:34:00.000-07:00"
summary: "Git rebase itu sebenarnya sederhana banget: dia buat **merapikan** sejarah commit kamu di Git. Tapi supaya makin paham, yuk kita bahas tuntas!"
sourceUrl: "https://blog.programinglive.com/2025/04/apa-itu-git-rebase.html"
image: "/img/posts/apa-itu-git-rebase/f27494d0ce_Apa_20itu_20Git_20Rebase.png"
categories:
  - "Testing & DevOps"
wordCount: 456
---

![](/img/posts/apa-itu-git-rebase/f27494d0ce_Apa_20itu_20Git_20Rebase.png)

Git rebase itu sebenarnya sederhana banget: dia buat **merapikan** sejarah commit kamu di Git. Tapi supaya makin paham, yuk kita bahas tuntas!

## 1. Pengertian Git Rebase

Git Rebase adalah proses buat memindahkan basis cabang (branch) kamu ke commit terbaru dari branch lain. Singkatnya, rebase itu kayak "pindahin" cerita kamu supaya gabung dengan cerita terbaru dari orang lain, tanpa bikin cabang tambahan kayak merge.

## 2. Fungsi Utama Git Rebase

- **Merapikan sejarah project** biar lurus dan enak dibaca.
- **Menghindari commit "merge-mergean"** yang numpuk.
- **Mudahin tracking perubahan** saat kolaborasi rame-rame.

## 3. Perbedaan Rebase vs Merge

**Merge:** Gabungin branch, tapi sejarah commitnya kelihatan bercabang.

**Rebase:** Ambil commit kamu dan "replay" di atas branch target, jadinya lurus dan bersih.

*Analogi:* Merge kayak jalan baru yang ketemu di pertigaan, Rebase kayak mindahin jalanmu ke jalan utama dari awal.

## 4. Cara Kerja Git Rebase

- Checkout ke branch yang mau kamu rebase.
- Jalankan `git rebase nama-branch-tujuan`.
- Git bakal ambil semua commit kamu, re-apply di atas branch tujuan.
- Kalau ada konflik? Beresin dulu, terus lanjut rebase pakai `git rebase --continue`.

## 5. Contoh Kasus Git Rebase

Misal kamu kerja di branch `fitur-A`, dan teman kamu update di `main`. Biar branch kamu update, kamu bisa:

```
git checkout fitur-A
git fetch origin
git rebase origin/main
```

Kalau ada konflik, Git kasih tau file mana yang harus dibenerin. Setelah beres:

```
git add .
git rebase --continue
```

## 6. Perintah Dasar Git Rebase

- `git rebase main` – Rebase branch aktif ke `main`.
- `git rebase --continue` – Lanjut rebase setelah beresin konflik.
- `git rebase --abort` – Batalin rebase kalau kacau.

## 7. Git Rebase Interaktif (Biar Lebih Power)

Pakai `git rebase -i HEAD~n` buat:

- Gabungin (squash) beberapa commit.
- Edit pesan commit (amend).
- Hapus commit yang nggak perlu.

Contoh:

```
git rebase -i HEAD~3
```

Nanti muncul list commit di editor, dan kamu tinggal atur mau `pick`, `edit`, atau `squash`.

## 8. Kesalahan Umum Saat Rebase

- **Rebase branch yang udah dishare ke tim.** Ini bisa bikin konflik besar, karena hash commit berubah!
- **Asal lanjut rebase tanpa cek konflik.** Bisa nyelipin bug tanpa sadar.

## 9. Tips Aman Pakai Rebase

- Selalu `git fetch` dulu sebelum rebase.
- Rebase branch lokal aja, hindari branch publik yang udah dipakai rame-rame.
- Pakai `git status` dan `git log` buat pastiin semua jalan mulus.

## 10. Kapan Sebaiknya Pakai Rebase?

- Pas mau update branch kamu dengan perubahan terbaru dari main/master.
- Pas mau rapihin commit sebelum push ke repo utama.
- Kalau mau bikin sejarah project terlihat lurus, bersih, dan gampang ditelusuri.

Itulah panduan tentang Git Rebase. Gampang kan? Dengan rebase, project kamu bakal makin rapi dan keren kayak developer pro!
