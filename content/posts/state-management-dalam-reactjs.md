---
slug: "state-management-dalam-reactjs"
title: "State Management dalam ReactJS"
date: "2025-04-14"
published: "2025-04-14T14:29:00.000-07:00"
summary: "State Management dalam ReactJS adalah cara mengelola data yang berubah dalam aplikasi dan memastikan bahwa perubahan tersebut dapat diakses oleh komponen yang membutuhkannya. State Management..."
sourceUrl: "https://blog.programinglive.com/2025/04/state-management-dalam-reactjs.html"
image: "/img/posts/state-management-dalam-reactjs/6a7b1063ba_State_20Management_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 399
---

![](/img/posts/state-management-dalam-reactjs/6a7b1063ba_State_20Management_20dalam_20ReactJS.png)

## Pengertian State Management

State Management dalam ReactJS adalah cara mengelola data yang berubah dalam aplikasi dan memastikan bahwa perubahan tersebut dapat diakses oleh komponen yang membutuhkannya. State Management sangat penting untuk menjaga konsistensi dan keteraturan dalam pengelolaan data aplikasi.

## Jenis-jenis State dalam React

- **Local State:** Dikelola dalam satu komponen menggunakan `useState`.
- **Global State:** Digunakan di banyak komponen, bisa dikelola dengan Context API atau Redux.
- **Server State:** Data yang berasal dari API atau database eksternal.
- **URL State:** Informasi yang tersimpan dalam URL, seperti query params.

## Cara Mengelola State dalam React

### Mengelola State Lokal dengan `useState`

```
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    
      Nilai: {count}
       setCount(count + 1)}>Tambah
    
  );
};
```

## State Management dengan Context API

Context API digunakan untuk mengelola state global tanpa perlu prop drilling.

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

## State Management dengan Redux

Redux digunakan untuk mengelola state dalam skala besar dengan pendekatan `store`, `actions`, dan `reducers`.

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

## Perbandingan Context API dan Redux

| Fitur | Context API | Redux |
|---|---|---|
| Kompleksitas | Sederhana | Lebih kompleks |
| Ukuran Aplikasi | Cocok untuk aplikasi kecil-menengah | Cocok untuk aplikasi besar |
| Performa | Bisa menyebabkan re-render berlebihan | Lebih efisien dengan selector dan middleware |

## Contoh Penerapan

Misalnya, aplikasi yang mengelola state tema dan jumlah klik tombol:

```
const App = () => {
  return (
    
      
      
    
  );
};
```

## Kesimpulan

State Management dalam ReactJS sangat penting untuk mengelola data secara efisien. Untuk aplikasi kecil hingga menengah, Context API cukup efektif, sedangkan untuk aplikasi besar, Redux menawarkan solusi yang lebih terstruktur. Memilih metode yang tepat akan membantu dalam pengelolaan state yang lebih baik dan meningkatkan performa aplikasi.
