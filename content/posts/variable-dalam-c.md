---
slug: "variable-dalam-c"
title: "Variable dalam C++"
date: "2025-02-26"
published: "2025-02-26T19:12:00.000-08:00"
summary: "Variable dalam C++ adalah tempat penyimpanan data yang memiliki nama dan tipe tertentu. Variable digunakan untuk menyimpan nilai yang dapat digunakan dan dimodifikasi selama program berjalan."
sourceUrl: "https://blog.programinglive.com/2025/02/variable-dalam-c.html"
image: "/img/posts/variable-dalam-c/930387d466_Variable_20dalam_20C++.png"
categories:
  - "Growth"
wordCount: 311
---

![](/img/posts/variable-dalam-c/930387d466_Variable_20dalam_20C++.png)

## Pengertian Variable

Variable dalam C++ adalah tempat penyimpanan data yang memiliki nama dan tipe tertentu. Variable digunakan untuk menyimpan nilai yang dapat digunakan dan dimodifikasi selama program berjalan.

## Deklarasi dan Inisialisasi

Variable harus dideklarasikan sebelum digunakan. Inisialisasi adalah pemberian nilai awal pada variable.

```
#include <iostream>
using namespace std;

int main() {
    int angka; // Deklarasi variable
    angka = 10; // Inisialisasi variable
    int nilai = 20; // Deklarasi dan inisialisasi
    cout << "Angka: " << angka << endl;
    cout << "Nilai: " << nilai << endl;
    return 0;
}
```

## Tipe Variable

Variable dalam C++ dapat memiliki berbagai tipe:

- `int`: Menyimpan bilangan bulat.
- `float`: Menyimpan bilangan desimal dengan presisi tunggal.
- `double`: Menyimpan bilangan desimal dengan presisi ganda.
- `char`: Menyimpan karakter tunggal.
- `bool`: Menyimpan nilai true atau false.
- `string`: Menyimpan teks (memerlukan pustaka `#include `).

## Scope dan Lifetime

Scope (cakupan) menentukan di mana variable dapat diakses, sementara lifetime (masa hidup) menentukan seberapa lama variable tersedia dalam memori.

- **Global Variable:** Dideklarasikan di luar fungsi dan dapat diakses dari seluruh program.
- **Local Variable:** Dideklarasikan di dalam fungsi dan hanya dapat digunakan dalam fungsi tersebut.
- **Static Variable:** Retains its value between function calls.

## Contoh Penggunaan Variable

```
#include <iostream>
using namespace std;

int globalVar = 100; // Global variable

void fungsi() {
    static int count = 0; // Static variable
    count++;
    cout << "Nilai count: " << count << endl;
}

int main() {
    int localVar = 50; // Local variable
    cout << "Global Variable: " << globalVar << endl;
    cout << "Local Variable: " << localVar << endl;
    fungsi();
    fungsi();
    return 0;
}
```

## Kesimpulan

Variable dalam C++ adalah elemen penting dalam pemrograman yang digunakan untuk menyimpan dan mengelola data. Dengan memahami deklarasi, tipe data, scope, dan lifetime, pengembang dapat menulis kode yang lebih efisien dan terstruktur.
