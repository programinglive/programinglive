---
slug: "class-component-dalam-reactjs"
title: "Class Component dalam ReactJS"
date: "2025-03-30"
published: "2025-03-30T00:20:00.000-07:00"
summary: "Class Component dalam ReactJS adalah komponen yang dibuat menggunakan class JavaScript dan diperluas dari `React.Component`. Komponen ini memiliki kemampuan untuk menggunakan `state` dan..."
sourceUrl: "https://blog.programinglive.com/2025/03/class-component-dalam-reactjs.html"
image: "/img/posts/class-component-dalam-reactjs/0ad547d968_Class_20Component_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 318
---

![](/img/posts/class-component-dalam-reactjs/0ad547d968_Class_20Component_20dalam_20ReactJS.png)

## Pengertian Class Component

Class Component dalam ReactJS adalah komponen yang dibuat menggunakan class JavaScript dan diperluas dari `React.Component`. Komponen ini memiliki kemampuan untuk menggunakan `state` dan `lifecycle methods` untuk mengelola data dan perilaku komponen.

## Keunggulan Class Component

- **Mendukung state:** Dapat menyimpan dan mengelola state secara internal.
- **Mendukung lifecycle methods:** Memungkinkan pengelolaan siklus hidup komponen.
- **Struktur lebih terorganisir:** Cocok untuk komponen yang kompleks.

## Cara Membuat Class Component

Class Component dibuat dengan mendeklarasikan class yang memperluas `React.Component` dan memiliki metode `render()` untuk menampilkan UI.

```
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return Hello, {this.props.name}!;
  }
}

export default Greeting;
```

## Menggunakan State dalam Class Component

State dalam Class Component dideklarasikan di dalam constructor.

```
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      
        Nilai: {this.state.count}
        Tambah
      
    );
  }
}
```

## Menggunakan Lifecycle Methods

Lifecycle methods memungkinkan pengelolaan efek samping dalam komponen.

```
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return Waktu: {this.state.time};
  }
}
```

## Contoh Penerapan

Class Component digunakan dalam berbagai skenario, seperti:

- **Mengelola state dan event:** Seperti counter atau form handling.
- **Mengelola efek samping:** Seperti polling data atau timer.
- **Membangun komponen kompleks:** Seperti layout atau dashboard yang membutuhkan banyak interaksi.

```
class App extends Component {
  render() {
    return (
      
        
        
      
    );
  }
}
```

## Kesimpulan

Class Component dalam ReactJS adalah komponen yang lebih kompleks dan mendukung fitur seperti state dan lifecycle methods. Meskipun sekarang banyak digantikan oleh Functional Component dengan React Hooks, Class Component masih digunakan dalam proyek yang membutuhkan kontrol mendalam terhadap lifecycle.
