---
slug: "cara-instal-mysql-di-windows-macos-dan-linux"
title: "Cara Instal MySQL di Windows, macOS, dan Linux"
date: "2023-06-24"
published: "2023-06-24T00:08:00.017-07:00"
summary: "MySQL adalah salah satu sistem manajemen basis data relasional (RDBMS) yang paling populer dan digunakan secara luas. MySQL bersifat open-source dan mendukung berbagai aplikasi, termasuk aplikasi..."
sourceUrl: "https://blog.programinglive.com/2023/06/cara-menginstal-mysql.html"
image: "/img/posts/cara-instal-mysql-di-windows-macos-dan-linux/910df29e5f_di_20Windows__20macOS__20dan_20Linux.png"
categories:
  - "Backend"
wordCount: 346
---

![](/img/posts/cara-instal-mysql-di-windows-macos-dan-linux/910df29e5f_di_20Windows__20macOS__20dan_20Linux.png)

## Apa Itu MySQL?

MySQL adalah salah satu sistem manajemen basis data relasional (RDBMS) yang paling populer dan digunakan secara luas. MySQL bersifat open-source dan mendukung berbagai aplikasi, termasuk aplikasi berbasis web seperti WordPress dan Magento.

## Persiapan Sebelum Instalasi

Sebelum memulai instalasi, pastikan Anda telah melakukan hal berikut:

- Memiliki akses administrator pada perangkat Anda.
- Mengunduh installer MySQL yang sesuai dengan sistem operasi dari situs resmi [MySQL Downloads](https://dev.mysql.com/downloads/).
- Memastikan perangkat Anda memenuhi spesifikasi sistem yang dibutuhkan.

## Cara Instal MySQL di Windows

Berikut langkah-langkah untuk menginstal MySQL di Windows:

- Unduh **MySQL Installer** dari situs resmi MySQL.
- Jalankan file installer dan pilih opsi instalasi seperti *Developer Default* atau *Custom*.
- Ikuti wizard instalasi, termasuk konfigurasi server, pengaturan user, dan pengaturan kata sandi root.
- Pastikan MySQL Server berhasil dijalankan menggunakan **MySQL Workbench** atau command line dengan perintah: mysql -u root -p

**Contoh:** Setelah instalasi, Anda dapat membuat database baru dengan perintah: CREATE DATABASE contoh_db;

## Cara Instal MySQL di macOS

Berikut langkah-langkah untuk menginstal MySQL di macOS:

- Unduh file DMG MySQL dari situs resmi MySQL.
- Jalankan installer dan ikuti langkah-langkah wizard.
- Setelah instalasi selesai, tambahkan MySQL ke *System Preferences* untuk mempermudah pengelolaan server.
- Buka terminal dan jalankan MySQL dengan perintah: sudo /usr/local/mysql/bin/mysql -u root -p

**Contoh:** Anda dapat membuat tabel baru dengan perintah: CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) );

## Cara Instal MySQL di Linux

Berikut langkah-langkah untuk menginstal MySQL di distribusi Linux:

- **Untuk Ubuntu/Debian:** sudo apt update sudo apt install mysql-server sudo mysql_secure_installation
- **Untuk CentOS/RHEL:** sudo yum update sudo yum install mysql-server sudo systemctl start mysqld sudo mysql_secure_installation

Setelah instalasi, pastikan MySQL berjalan dengan memeriksa status: sudo systemctl status mysql

**Contoh:** Jalankan kueri untuk melihat semua database yang ada: SHOW DATABASES;

## Kesimpulan

Instalasi MySQL di Windows, macOS, dan Linux membutuhkan langkah-langkah spesifik tergantung pada sistem operasi. Setelah MySQL berhasil diinstal, Anda dapat mulai menggunakan perintah SQL untuk membuat, mengelola, dan memelihara database. Memahami langkah-langkah instalasi adalah langkah awal untuk menjadi mahir dalam pengelolaan basis data.
