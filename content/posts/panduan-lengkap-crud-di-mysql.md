---
slug: "panduan-lengkap-crud-di-mysql"
title: "Panduan Lengkap CRUD di MySQL"
date: "2023-06-24"
published: "2023-06-24T04:07:00.016-07:00"
summary: "CRUD adalah akronim untuk Create, Read, Update, dan Delete. CRUD mencakup empat operasi dasar yang digunakan untuk mengelola data dalam basis data."
sourceUrl: "https://blog.programinglive.com/2023/06/perintah-crud-mysql-di-terminal.html"
image: "/img/posts/panduan-lengkap-crud-di-mysql/e8cc234def_anduan_20Lengkap_20CRUD_20di_20MySQL.png"
categories:
  - "Backend"
wordCount: 292
---

![](/img/posts/panduan-lengkap-crud-di-mysql/e8cc234def_anduan_20Lengkap_20CRUD_20di_20MySQL.png)

## [Apa Itu CRUD?](https://blog.programinglive.com/2024/12/arti-crud-dan-penjelasannya.html)

CRUD adalah akronim untuk Create, Read, Update, dan Delete. CRUD mencakup empat operasi dasar yang digunakan untuk mengelola data dalam basis data.

**Contoh:** Sebuah aplikasi toko online menggunakan CRUD untuk menambahkan produk baru, melihat daftar produk, memperbarui harga produk, dan menghapus produk yang tidak tersedia lagi.

## Membuat Database dan Tabel

Sebelum memulai operasi CRUD, Anda perlu membuat database dan tabel.

```
-- Membuat database
CREATE DATABASE toko_online;

-- Menggunakan database
USE toko_online;

-- Membuat tabel
CREATE TABLE produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    harga DECIMAL(10, 2),
    stok INT
);
```

## CREATE (Menambahkan Data)

CREATE digunakan untuk menambahkan data baru ke tabel.

```
-- Menambahkan data ke tabel produk
INSERT INTO produk (nama, harga, stok)
VALUES ('Laptop', 15000000, 10);
```

**Contoh:** Data `nama = 'Laptop'`, `harga = 15000000`, dan `stok = 10` ditambahkan ke tabel.

## READ (Membaca Data)

READ digunakan untuk membaca data dari tabel.

```
-- Membaca semua data dari tabel produk
SELECT * FROM produk;

-- Membaca data tertentu
SELECT nama, harga FROM produk WHERE stok > 0;
```

**Contoh:** Anda dapat menampilkan nama dan harga produk yang stoknya lebih dari 0.

## UPDATE (Memperbarui Data)

UPDATE digunakan untuk memperbarui data dalam tabel.

```
-- Memperbarui harga produk
UPDATE produk
SET harga = 14000000
WHERE nama = 'Laptop';
```

**Contoh:** Harga produk `Laptop` diperbarui menjadi `14000000`.

## DELETE (Menghapus Data)

DELETE digunakan untuk menghapus data dari tabel.

```
-- Menghapus data produk
DELETE FROM produk
WHERE nama = 'Laptop';
```

**Contoh:** Data produk `Laptop` dihapus dari tabel.

## Kesimpulan

CRUD adalah dasar dari manajemen data dalam database. Dengan memahami cara melakukan operasi CREATE, READ, UPDATE, dan DELETE di MySQL, Anda dapat mengelola data dengan efisien dan membangun aplikasi yang dinamis.
