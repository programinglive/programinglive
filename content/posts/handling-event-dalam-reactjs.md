---
slug: "handling-event-dalam-reactjs"
title: "Handling Event dalam ReactJS"
date: "2025-04-03"
published: "2025-04-03T00:19:00.000-07:00"
summary: "Handling event dalam ReactJS adalah cara untuk menangani interaksi pengguna, seperti klik tombol, perubahan input, atau pergerakan mouse, dengan menggunakan event handler."
sourceUrl: "https://blog.programinglive.com/2025/04/handling-event-dalam-reactjs.html"
image: "/img/posts/handling-event-dalam-reactjs/a7511e4611_Handling_20Event_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 267
---

![](/img/posts/handling-event-dalam-reactjs/a7511e4611_Handling_20Event_20dalam_20ReactJS.png)

## Pengertian Handling Event

Handling event dalam ReactJS adalah cara untuk menangani interaksi pengguna, seperti klik tombol, perubahan input, atau pergerakan mouse, dengan menggunakan event handler.

## Cara Menangani Event dalam React

- Event dalam React menggunakan `camelCase` (contoh: `onClick` bukan `onclick`).
- Event handler diberikan dalam bentuk fungsi, bukan string seperti pada HTML.

```
const handleClick = () => {
  alert("Tombol diklik!");
};

return Klik Saya;
```

## Menggunakan Event Handler

Event handler dapat dideklarasikan sebagai fungsi biasa atau fungsi panah.

```
const Button = () => {
  const handleClick = () => {
    console.log("Tombol diklik!");
  };

  return Klik Saya;
};
```

## Event Object dalam React

React menyediakan objek event yang dapat digunakan dalam event handler.

```
const handleChange = (event) => {
  console.log("Nilai input: ", event.target.value);
};

return ;
```

## Binding this dalam Class Component

Dalam Class Component, event handler perlu diikat ke `this` agar memiliki konteks yang benar.

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return Tambah {this.state.count};
  }
}
```

## Contoh Penerapan

Event handling sering digunakan dalam form, tombol, dan elemen interaktif lainnya.

```
const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form berhasil dikirim!");
  };

  return (
    
      Kirim
    
  );
};
```

## Kesimpulan

Handling event dalam ReactJS memungkinkan kita untuk menangani interaksi pengguna dengan cara yang efisien dan terstruktur. Dengan memahami cara kerja event handler, binding `this`, dan penggunaan event object, kita dapat membangun aplikasi yang lebih interaktif dan responsif.
