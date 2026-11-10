---
slug: "kapan-menggunakan-static-variable-dalam-c"
title: "Kapan Menggunakan Static Variable dalam C++"
date: "2025-02-28"
published: "2025-02-28T19:29:00.000-08:00"
summary: "Static variable dalam C++ adalah variabel yang mempertahankan nilainya selama masa eksekusi program. Berbeda dengan variabel lokal biasa yang dibuat ulang setiap kali fungsi dipanggil, static..."
sourceUrl: "https://blog.programinglive.com/2025/02/kapan-menggunakan-static-variable-dalam.html"
image: "/img/posts/kapan-menggunakan-static-variable-dalam-c/1ed913288f_an_20Static_20Variable_20dalam_20C++.png"
categories:
  - "Growth"
wordCount: 248
---

![](/img/posts/kapan-menggunakan-static-variable-dalam-c/1ed913288f_an_20Static_20Variable_20dalam_20C++.png)

## Pengertian Static Variable

Static variable dalam C++ adalah variabel yang mempertahankan nilainya selama masa eksekusi program. Berbeda dengan variabel lokal biasa yang dibuat ulang setiap kali fungsi dipanggil, static variable hanya diinisialisasi sekali dan nilainya tetap ada di antara pemanggilan fungsi.

## Keuntungan Menggunakan Static Variable

Static variable memiliki beberapa keuntungan utama:

- **Persistensi Nilai:** Nilai variabel tetap dipertahankan antara pemanggilan fungsi.
- **Pengurangan Penggunaan Memori:** Static variable hanya dialokasikan satu kali dalam memori.
- **Encapsulation:** Dapat digunakan dalam lingkup file untuk membatasi akses terhadap variabel dalam satu file.

## Kapan Menggunakan Static Variable?

Static variable cocok digunakan dalam situasi berikut:

- **Menjaga Status Antar Pemanggilan Fungsi:** Misalnya, untuk menghitung jumlah pemanggilan fungsi.
- **Variabel Global dengan Scope Terbatas:** Jika ingin menggunakan variabel global tetapi hanya dalam satu file.
- **Optimalisasi Performa:** Mengurangi overhead pembuatan ulang variabel dalam fungsi yang sering dipanggil.

## Contoh Penerapan Static Variable

```
#include <iostream>
using namespace std;

void counter() {
    static int count = 0; // Static variable
    count++;
    cout << "Fungsi dipanggil: " << count << " kali" << endl;
}

int main() {
    counter();
    counter();
    counter();
    return 0;
}
```

Output:

```
Fungsi dipanggil: 1 kali
Fungsi dipanggil: 2 kali
Fungsi dipanggil: 3 kali
```

## Kesimpulan

Static variable dalam C++ digunakan untuk mempertahankan nilai variabel selama masa eksekusi program. Penggunaannya cocok untuk menghitung pemanggilan fungsi, membatasi lingkup variabel dalam file, dan meningkatkan efisiensi memori. Dengan memahami kapan harus menggunakannya, pengembang dapat mengoptimalkan kode mereka secara lebih efektif.
