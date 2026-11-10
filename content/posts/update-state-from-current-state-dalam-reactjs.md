---
slug: "update-state-from-current-state-dalam-reactjs"
title: "Update State from Current State dalam ReactJS"
date: "2025-04-08"
published: "2025-04-08T12:44:00.000-07:00"
summary: "Dalam ReactJS, `state` adalah data internal yang dapat berubah selama siklus hidup komponen. Untuk memastikan perubahan state berjalan dengan benar, terutama saat update bergantung pada nilai..."
sourceUrl: "https://blog.programinglive.com/2025/04/update-state-from-current-state-dalam.html"
image: "/img/posts/update-state-from-current-state-dalam-reactjs/a9733ef37e__20Current_20State_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 296
---

![](/img/posts/update-state-from-current-state-dalam-reactjs/a9733ef37e__20Current_20State_20dalam_20ReactJS.png)

## Pengertian Update State

Dalam ReactJS, `state` adalah data internal yang dapat berubah selama siklus hidup komponen. Untuk memastikan perubahan state berjalan dengan benar, terutama saat update bergantung pada nilai sebelumnya, perlu menggunakan fungsi updater.

## Pentingnya Mengupdate State dengan Benar

- **Mencegah bug:** Menggunakan nilai state sebelumnya secara langsung bisa menyebabkan inkonsistensi.
- **Reaktivitas yang lebih akurat:** React bisa menjadwalkan ulang update state sehingga penggunaan fungsi updater lebih disarankan.
- **Menghindari race condition:** Jika state diperbarui secara langsung, nilai lama mungkin belum diperbarui secara sempurna.

## Cara Mengupdate State dari Current State

React menyediakan fungsi updater untuk memastikan state diperbarui dengan benar.

```
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    
      Nilai: {count}
      Tambah
    
  );
};
```

## Contoh Penerapan

Misalnya, kita ingin menambahkan jumlah klik dengan mempertimbangkan nilai sebelumnya:

```
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementByTwo = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    
      Nilai: {count}
      Tambah 2
    
  );
};
```

Menggunakan `prevCount` memastikan bahwa setiap update menggunakan nilai terbaru dari state.

## Kesalahan yang Harus Dihindari

- **Langsung menggunakan nilai state lama:** `setCount(count + 1)` bisa menyebabkan bug jika ada beberapa update yang terjadi bersamaan.
- **Tidak menggunakan fungsi updater:** Bisa menyebabkan nilai state tidak berubah sesuai harapan.
- **Mutasi langsung state:** React memerlukan immutable state untuk bekerja dengan optimal.

## Kesimpulan

Update state dari current state dalam ReactJS sangat penting untuk memastikan perubahan data yang akurat dan menghindari bug. Dengan menggunakan fungsi updater, kita dapat memastikan bahwa setiap perubahan menggunakan nilai state yang paling baru, sehingga aplikasi lebih stabil dan efisien.
