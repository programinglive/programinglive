---
slug: "global-state-dalam-reactjs"
title: "Global State dalam ReactJS"
date: "2025-04-16"
published: "2025-04-16T21:24:00.000-07:00"
summary: "Global State adalah state yang dapat diakses oleh banyak komponen dalam aplikasi React. Global state digunakan untuk menyimpan data yang harus digunakan oleh beberapa komponen tanpa perlu..."
sourceUrl: "https://blog.programinglive.com/2025/04/global-state-dalam-reactjs.html"
image: "/img/posts/global-state-dalam-reactjs/7c1c18a20a_Global_20State_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 409
---

![](/img/posts/global-state-dalam-reactjs/7c1c18a20a_Global_20State_20dalam_20ReactJS.png)

## Pengertian Global State

Global State adalah state yang dapat diakses oleh banyak komponen dalam aplikasi React. Global state digunakan untuk menyimpan data yang harus digunakan oleh beberapa komponen tanpa perlu meneruskan props secara manual (prop drilling).

## Perbedaan Local State dan Global State

| Local State | Global State |
|---|---|
| Dikelola di dalam satu komponen saja. | Dapat diakses oleh beberapa komponen. |
| Digunakan untuk data yang hanya relevan dengan satu komponen. | Digunakan untuk data yang dibutuhkan oleh banyak komponen, seperti autentikasi pengguna. |
| Dikelola dengan `useState` atau `useReducer`. | Dikelola dengan `Context API` atau `Redux`. |

## Cara Menggunakan Global State

### Menggunakan Context API

Context API memungkinkan kita untuk mengelola global state tanpa perlu library tambahan.

```
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    
      {children}
    
  );
};

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    
      Mode: {theme}
       setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      
    
  );
};
```

### Menggunakan Redux

Redux digunakan untuk mengelola global state dalam aplikasi yang lebih kompleks.

```
import { createStore } from "redux";

const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
```

## Manfaat Global State

- **Mengurangi prop drilling:** Tidak perlu meneruskan props secara manual dari komponen induk ke anak.
- **Memudahkan pengelolaan state kompleks:** Seperti data autentikasi atau tema aplikasi.
- **Meningkatkan efisiensi kode:** Dengan memisahkan logika state dari komponen UI.

## Contoh Penerapan

Global State sering digunakan dalam:

- Manajemen autentikasi pengguna.
- Pengaturan tema aplikasi (dark mode, light mode).
- Pengelolaan data global seperti keranjang belanja dalam e-commerce.

## Kesalahan yang Sering Terjadi

- **Menggunakan Global State untuk semua hal:** Tidak semua state harus global, gunakan hanya jika diperlukan.
- **Memperbarui state tanpa mempertimbangkan performa:** Perubahan state global bisa memicu re-render yang tidak diperlukan.
- **Tidak menggunakan selector dalam Redux:** Menggunakan selector dapat membantu menghindari re-render yang berlebihan.

## Kesimpulan

Global State dalam ReactJS memungkinkan pengelolaan data yang dapat diakses oleh banyak komponen. Dengan Context API atau Redux, pengembang dapat mengurangi prop drilling dan membuat aplikasi lebih terstruktur. Namun, penting untuk memilih strategi yang sesuai dengan kebutuhan aplikasi agar performa tetap optimal.
