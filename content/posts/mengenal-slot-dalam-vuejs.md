---
slug: "mengenal-slot-dalam-vuejs"
title: "Mengenal Slot dalam VueJS"
date: "2025-03-17"
published: "2025-03-17T10:47:00.000-07:00"
summary: "Slot dalam VueJS adalah mekanisme powerful yang memungkinkan kita menyusun ulang komponen dengan lebih fleksibel. Dengan slot, kita dapat menyisipkan konten ke dalam komponen dari luar, tanpa..."
sourceUrl: "https://blog.programinglive.com/2025/03/mengenal-slot-dalam-vuejs.html"
image: "/img/posts/mengenal-slot-dalam-vuejs/9820e0c4e2_Mengenal_20Slot_20dalam_20VueJS.png"
categories:
  - "Frontend"
wordCount: 262
---

![](/img/posts/mengenal-slot-dalam-vuejs/9820e0c4e2_Mengenal_20Slot_20dalam_20VueJS.png)

## Pengantar

Slot dalam VueJS adalah mekanisme powerful yang memungkinkan kita menyusun ulang komponen dengan lebih fleksibel. Dengan slot, kita dapat menyisipkan konten ke dalam komponen dari luar, tanpa perlu mendefinisikan isi secara statis di dalamnya.

## Jenis Slot dalam VueJS

Ada beberapa jenis slot dalam VueJS, antara lain:

### 1. Slot Biasa

Slot biasa digunakan untuk menampilkan konten default dalam sebuah komponen.

### 2. Named Slot

Named slot memungkinkan kita untuk menentukan slot dengan nama tertentu agar bisa digunakan lebih fleksibel.

### 3. Scoped Slot

Scoped slot memungkinkan kita untuk mengirimkan data dari komponen induk ke dalam slot yang berada dalam komponen anak.

## Contoh Penggunaan

Berikut adalah contoh penggunaan masing-masing jenis slot dalam VueJS:

### 1. Slot Biasa

```
// Komponen Child.vue
<template>
  <div>
    <slot>Ini adalah konten default jika tidak ada slot yang diberikan.</slot>
  </div>
</template>

// Penggunaan dalam Parent.vue
<Child>
  <p>Konten ini akan menggantikan slot default.</p>
</Child>
```

### 2. Named Slot

```
// Komponen Child.vue
<template>
  <div>
    <header>
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <slot>Default Content</slot>
    </main>
  </div>
</template>

// Penggunaan dalam Parent.vue
<Child>
  <template v-slot:header>
    <h1>Header Kustom</h1>
  </template>
  <p>Konten utama yang akan menggantikan default content.</p>
</Child>
```

### 3. Scoped Slot

```
// Komponen Child.vue
<template>
  <div>
    <slot :message="'Hello from Child'"></slot>
  </div>
</template>

// Penggunaan dalam Parent.vue
<Child v-slot="slotProps">
  <p>Pesan dari child: {{ slotProps.message }}</p>
</Child>
```

## Kesimpulan

Slot dalam VueJS adalah fitur yang sangat berguna untuk membuat komponen lebih fleksibel dan dapat digunakan kembali dengan berbagai cara. Dengan memahami slot biasa, named slot, dan scoped slot, kita bisa membangun antarmuka yang lebih dinamis dan modular.
