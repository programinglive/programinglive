---
slug: "controlled-element-dalam-javascript"
title: "Controlled Element dalam JavaScript"
date: "2025-04-11"
published: "2025-04-11T12:55:00.000-07:00"
summary: "Controlled Element dalam JavaScript adalah elemen formulir yang nilai dan perubahannya dikendalikan oleh JavaScript, biasanya melalui state dalam React. Nilai elemen ini selalu ditentukan oleh..."
sourceUrl: "https://blog.programinglive.com/2025/04/controlled-element-dalam-javascript.html"
image: "/img/posts/controlled-element-dalam-javascript/d0287288c2_olled_20Element_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 217
---

![](/img/posts/controlled-element-dalam-javascript/d0287288c2_olled_20Element_20dalam_20JavaScript.png)

## Pengertian Controlled Element

Controlled Element dalam JavaScript adalah elemen formulir yang nilai dan perubahannya dikendalikan oleh JavaScript, biasanya melalui state dalam React. Nilai elemen ini selalu ditentukan oleh state, bukan DOM secara langsung.

## Perbedaan Controlled dan Uncontrolled Element

| Controlled Element | Uncontrolled Element |
|---|---|
| Nilai dikendalikan oleh state. | Nilai disimpan langsung dalam DOM. |
| Memerlukan event `onChange` untuk mengubah nilai. | Memerlukan `ref` untuk mengakses nilai. |
| Lebih mudah dikelola dan divalidasi. | Lebih sederhana tetapi kurang fleksibel. |

## Menggunakan Controlled Element dalam React

Dalam React, controlled element dikelola melalui state.

```
import React, { useState } from "react";

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
     setInputValue(e.target.value)}
    />
  );
};
```

## Manfaat Controlled Element

- **Lebih mudah divalidasi:** Memungkinkan validasi langsung saat pengguna mengetik.
- **State-driven UI:** Nilai input selalu tersinkronisasi dengan state aplikasi.
- **Mengelola event lebih baik:** Perubahan nilai dikendalikan dengan lebih jelas.

## Contoh Penerapan

Controlled Element sering digunakan untuk:

- Form login dan registrasi.
- Pencarian real-time dengan filter.
- Input yang memerlukan validasi langsung.

## Kesimpulan

Controlled Element dalam JavaScript, terutama di React, memberikan kontrol penuh terhadap nilai input melalui state. Ini membantu meningkatkan validasi, kemudahan pengelolaan, dan memastikan UI selalu tersinkronisasi dengan state aplikasi.
