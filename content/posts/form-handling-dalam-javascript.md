---
slug: "form-handling-dalam-javascript"
title: "Form Handling dalam JavaScript"
date: "2025-04-10"
published: "2025-04-10T12:53:00.000-07:00"
summary: "Form handling dalam JavaScript adalah proses mengelola input pengguna, memvalidasi data, dan mengirimkan data ke server. JavaScript memungkinkan pengembang untuk menangani event formulir seperti..."
sourceUrl: "https://blog.programinglive.com/2025/04/form-handling-dalam-javascript.html"
image: "/img/posts/form-handling-dalam-javascript/eddfbee929_Form_20Handling_20dalam_20JavaScript.png"
categories:
  - "Frontend"
wordCount: 227
---

![](/img/posts/form-handling-dalam-javascript/eddfbee929_Form_20Handling_20dalam_20JavaScript.png)

## Pengertian Form Handling

Form handling dalam JavaScript adalah proses mengelola input pengguna, memvalidasi data, dan mengirimkan data ke server. JavaScript memungkinkan pengembang untuk menangani event formulir seperti `onSubmit`, `onChange`, dan `onClick`.

## Menangani Form dengan Event Listener

Dalam JavaScript, event listener digunakan untuk menangkap input dari formulir dan mencegah perilaku default pengiriman form.

```
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  alert("Nama: " + name);
});
```

## Menggunakan State dalam Form React

Dalam React, form dikendalikan menggunakan state untuk menangkap perubahan nilai input.

```
import React, { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Nama: " + name);
  };

  return (
    
       setName(e.target.value)} />
      Kirim
    
  );
};
```

## Validasi Form dalam JavaScript

Validasi form dapat dilakukan sebelum data dikirim ke server.

```
const validateForm = () => {
  let email = document.getElementById("email").value;
  let errorMessage = "";

  if (!email.includes("@")) {
    errorMessage = "Email tidak valid";
  }

  document.getElementById("error").innerText = errorMessage;
};
```

## Contoh Penerapan

Form handling sering digunakan untuk:

- Autentikasi pengguna (login, registrasi).
- Pencarian data dengan input pengguna.
- Pengumpulan data survei atau formulir kontak.

## Kesimpulan

Form handling dalam JavaScript memungkinkan pengelolaan input pengguna dengan lebih efektif. Dengan memanfaatkan event listener, state dalam React, dan validasi form, pengembang dapat meningkatkan pengalaman pengguna dan mencegah kesalahan input.
