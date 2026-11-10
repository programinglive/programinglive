---
slug: "fake-storage-dalam-laravel-testing"
title: "Fake Storage dalam Laravel Testing"
date: "2025-04-13"
published: "2025-04-13T13:08:00.000-07:00"
summary: "**Fake Storage** di Laravel adalah fitur yang memungkinkan kita untuk \"memalsukan\" sistem penyimpanan file saat melakukan testing. Dengan Fake Storage, file tidak benar-benar disimpan di disk,..."
sourceUrl: "https://blog.programinglive.com/2025/04/fake-storage-dalam-laravel-testing.html"
image: "/img/posts/fake-storage-dalam-laravel-testing/b235abd51f_0Storage_20dalam_20Laravel_20Testing.png"
categories:
  - "Backend"
wordCount: 345
---

![](/img/posts/fake-storage-dalam-laravel-testing/b235abd51f_0Storage_20dalam_20Laravel_20Testing.png)

## 1. Apa Itu Fake Storage?

**Fake Storage** di Laravel adalah fitur yang memungkinkan kita untuk "memalsukan" sistem penyimpanan file saat melakukan testing. Dengan Fake Storage, file tidak benar-benar disimpan di disk, tapi hanya dalam memori sementara yang aman untuk pengujian.

## 2. Tujuan Penggunaan Fake Storage

- **Mencegah file nyata tersimpan saat testing** – Tidak akan membuat file di folder asli seperti `storage/app` atau `public`.
- **Menguji logika upload tanpa menyentuh sistem file**.
- **Menjaga kebersihan data** – Setelah test selesai, tidak ada file tertinggal.
- **Meningkatkan kecepatan pengujian** karena tidak perlu menulis ke disk.

## 3. Kapan Menggunakan Fake Storage?

Fake Storage sangat berguna ketika kamu melakukan pengujian terhadap:

- Upload file (gambar, dokumen, dll)
- Menyimpan file hasil generate (PDF, Excel)
- Menghapus file dalam proses tertentu

## 4. Contoh Kasus Penggunaan Fake Storage

Misalnya kamu memiliki fitur upload foto profil pengguna. Kamu ingin menguji bahwa file benar-benar diupload ke direktori yang tepat, dan nama filenya sesuai yang diharapkan — tapi kamu tidak ingin benar-benar menyimpan file saat testing.

## 5. Contoh Kode Testing dengan Fake Storage

Berikut adalah contoh pengujian upload file menggunakan Laravel dan Fake Storage:

```
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

public function test_file_diupload_dengan_benar()
{
    Storage::fake('public');

    $response = $this->post('/upload', [
        'photo' => UploadedFile::fake()->image('avatar.jpg')
    ]);

    $response->assertStatus(200);

    // Pastikan file tersimpan di storage/public/photos
    Storage::disk('public')->assertExists('photos/avatar.jpg');
}
```

Dengan `Storage::fake()`, tidak ada file yang benar-benar disimpan di disk, tapi Laravel masih memungkinkan kita untuk melakukan assert dan validasi bahwa proses upload bekerja seperti yang diharapkan.

## 6. Fitur-fitur Pendukung Fake Storage

- `assertExists()` – Mengecek apakah file benar-benar "dianggap" ada.
- `assertMissing()` – Mengecek apakah file tidak ada.
- `assertDirectoryExists()` – Mengecek direktori tertentu.
- `assertDirectoryMissing()` – Mengecek bahwa direktori tidak ada.
- `delete()` – Menghapus file di storage palsu.

## 7. Kesimpulan

Fake Storage di Laravel adalah alat yang sangat powerful untuk melakukan testing terhadap file upload dan penyimpanan tanpa menyentuh sistem file secara nyata. Ini membantu menjaga lingkungan testing tetap bersih, cepat, dan aman. Fitur ini sangat cocok digunakan dalam pengujian fitur upload, generate file, atau file deletion di aplikasi Laravel.
