---
slug: "mengenal-inertiajs"
title: "Mengenal InertiaJS"
date: "2025-03-16"
published: "2025-03-16T09:45:00.000-07:00"
summary: "Dalam pengembangan web modern, ada dua pendekatan utama yang sering digunakan: aplikasi berbasis server tradisional dan Single Page Application (SPA). Masing-masing memiliki kelebihan dan..."
sourceUrl: "https://blog.programinglive.com/2025/03/mengenal-inertiajs.html"
image: "/img/posts/mengenal-inertiajs/a48de130c6_e_20Page_20Application_20Tanpa_20API.png"
categories:
  - "Backend"
wordCount: 1018
---

![](/img/posts/mengenal-inertiajs/a48de130c6_e_20Page_20Application_20Tanpa_20API.png)

## Pendahuluan

Dalam pengembangan web modern, ada dua pendekatan utama yang sering digunakan: aplikasi berbasis server tradisional dan Single Page Application (SPA). Masing-masing memiliki kelebihan dan kekurangannya sendiri. InertiaJS hadir sebagai jembatan yang menghubungkan kedua pendekatan ini, menawarkan pengalaman terbaik dari keduanya.

Artikel ini akan membahas tentang InertiaJS, bagaimana cara kerjanya, dan bagaimana Anda dapat menggunakannya untuk membangun aplikasi web modern tanpa perlu membuat API terpisah.

## Apa itu InertiaJS?

InertiaJS bukanlah framework atau library JavaScript baru. Inertia lebih tepat disebut sebagai adapter yang memungkinkan Anda membangun aplikasi single-page dengan menggunakan backend server tradisional. Dengan Inertia, Anda dapat menggunakan frontend framework modern seperti React, Vue.js, atau Svelte, namun tetap bekerja dengan pola dan alur kerja server-side tradisional.

Secara resmi, Inertia didefinisikan sebagai:

"Inertia adalah client-side routing yang memungkinkan Anda membuat aplikasi single-page (SPA) tanpa membangun API."

Inertia terdiri dari komponen server-side dan client-side yang bekerja bersama untuk memberikan pengalaman pengguna yang mulus seperti SPA sambil mempertahankan kenyamanan pengembangan server-side.

## Mengapa Menggunakan InertiaJS?

Ada beberapa alasan mengapa pengembang memilih InertiaJS:

- **Tidak perlu API terpisah** - Anda tidak perlu membuat REST API atau GraphQL endpoint khusus untuk aplikasi Anda.
- **Pengalaman seperti SPA** - Pengguna mendapatkan pengalaman navigasi cepat dan mulus seperti aplikasi single-page.
- **Kenyamanan server-side** - Pengembang dapat terus menggunakan alur kerja server-side yang sudah familiar, termasuk validasi, otentikasi, otorisasi, dan lainnya.
- **Frontend modern** - Anda dapat menggunakan framework frontend modern seperti React, Vue, atau Svelte.
- **SEO-friendly** - Tidak seperti SPA tradisional, aplikasi Inertia mudah di-crawler dan diindeks oleh mesin pencari.
- **Pemeliharaan lebih mudah** - Dengan menghilangkan API terpisah, Anda mengurangi jumlah kode yang perlu dipelihara.

## Cara Kerja InertiaJS

InertiaJS bekerja dengan mengubah permintaan HTTP tradisional menjadi permintaan XHR (AJAX) untuk mengambil data yang diperlukan. Berikut adalah alur kerja dasarnya:

- Ketika pengguna mengklik tautan dalam aplikasi, Inertia mencegat klik tersebut.
- Inertia kemudian mengirim permintaan XHR ke URL yang diminta, dengan header "X-Inertia" ditambahkan.
- Server mendeteksi header ini dan mengetahui bahwa ini adalah permintaan Inertia.
- Server menyiapkan data yang diperlukan (disebut "props") dan mengembalikannya sebagai respons JSON.
- Client-side Inertia menerima data ini dan merender komponen yang sesuai dengan data tersebut.
- Jika ini adalah permintaan langsung (bukan XHR), server akan merender aplikasi penuh dengan data awal.

Pendekatan ini memungkinkan pengalaman navigasi cepat seperti SPA, tetapi dengan keamanan dan kenyamanan backend tradisional.

## Instalasi dan Konfigurasi

Untuk menggunakan InertiaJS, Anda perlu menginstal dan mengkonfigurasi komponen server dan client. Berikut adalah langkah-langkah dasar untuk Laravel (backend) dan Vue.js (frontend):

### Instalasi Server-side (Laravel)

```
    
      composer require inertiajs/inertia-laravel
```

Setelah menginstal, Anda perlu membuat middleware Inertia:

```
    
      php artisan inertia:middleware
```

Lalu tambahkan middleware ke kernel:

```
    
      // app/Http/Kernel.php
      'web' => [
          // ...
          \App\Http\Middleware\HandleInertiaRequests::class,
      ],
```

### Instalasi Client-side (Vue.js)

```
    
      npm install @inertiajs/vue3
      // atau
      npm install @inertiajs/vue2
```

Kemudian siapkan aplikasi Vue:

```
    
      // resources/js/app.js
      import { createApp, h } from 'vue'
      import { createInertiaApp } from '@inertiajs/vue3'

      createInertiaApp({
        resolve: name => import(`./Pages/${name}.vue`),
        setup({ el, App, props, plugin }) {
          createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
        },
      })
```

## Contoh Kasus Penggunaan

Mari kita lihat contoh sederhana untuk memahami bagaimana InertiaJS digunakan dalam proyek nyata. Misalkan kita ingin membuat aplikasi daftar tugas (todo list) sederhana.

### 1. Controller (Laravel)

```
    
      // TaskController.php
      public function index()
      {
          return Inertia::render('Tasks/Index', [
              'tasks' => Task::all()->map(function ($task) {
                  return [
                      'id' => $task->id,
                      'title' => $task->title,
                      'completed' => $task->completed,
                  ];
              })
          ]);
      }

      public function store(Request $request)
      {
          $validated = $request->validate([
              'title' => 'required|string|max:255',
          ]);

          Task::create([
              'title' => $validated['title'],
              'completed' => false,
          ]);

          return redirect()->route('tasks.index');
      }

      public function update(Task $task)
      {
          $task->completed = !$task->completed;
          $task->save();

          return redirect()->back();
      }
```

### 2. Vue Component

```
    
      
      <template>
        <div>
          <h1>Task List</h1>
          
          <form @submit.prevent="addTask">
            <input v-model="form.title" placeholder="New task..." />
            <button type="submit">Add</button>
          </form>
          
          <ul>
            <li v-for="task in tasks" :key="task.id">
              <input 
                type="checkbox" 
                :checked="task.completed" 
                @change="toggleTask(task.id)" 
              />
              <span :class="{ completed: task.completed }">
                {{ task.title }}
              </span>
            </li>
          </ul>
        </div>
      </template>

      <script>
      import { defineComponent } from 'vue'
      import { useForm } from '@inertiajs/vue3'

      export default defineComponent({
        props: {
          tasks: Array,
        },
        setup() {
          const form = useForm({
            title: '',
          })

          function addTask() {
            form.post(route('tasks.store'), {
              onSuccess: () => form.reset('title'),
            })
          }

          function toggleTask(id) {
            useForm().put(route('tasks.update', id))
          }

          return { form, addTask, toggleTask }
        }
      })
      </script>

      <style>
      .completed {
        text-decoration: line-through;
        opacity: 0.7;
      }
      </style>
```

### 3. Routes (Laravel)

```
    
      // web.php
      Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
      Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
      Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
```

Dalam contoh di atas, kita memiliki:

- Controller yang merender komponen Vue dengan data tugas.
- Komponen Vue yang menampilkan tugas dan menangani interaksi pengguna.
- Form untuk menambahkan tugas baru menggunakan useForm dari Inertia.
- Fungsi untuk menandai tugas sebagai selesai/belum selesai.

Yang perlu diperhatikan adalah bagaimana kita tidak perlu membuat API terpisah. Kita langsung mengirim data dari controller ke komponen Vue, dan komponen Vue mengirim permintaan kembali ke endpoint Laravel tradisional.

## Kelebihan dan Kekurangan

### Kelebihan InertiaJS

- **Tidak ada duplicasi kode** - Menghilangkan kebutuhan untuk membuat endpoint API dan lapisan transformasi data.
- **Alur kerja sederhana** - Bekerja dengan cara yang mirip dengan aplikasi server-rendered tradisional.
- **Performa SPA** - Pengguna mendapatkan pengalaman aplikasi cepat dan responsif.
- **SEO yang baik** - Halaman pertama di-render di server, membuatnya lebih baik untuk SEO dibandingkan SPA tradisional.
- **Integrasi mudah** - Bekerja dengan baik dengan ekosistem Laravel, seperti validasi, otentikasi, dan otorisasi.

### Kekurangan InertiaJS

- **Ketergantungan framework** - Saat ini, Inertia hanya mendukung Laravel, Rails, dan beberapa adapter server lainnya.
- **Kompleksitas tambahan** - Meskipun lebih sederhana daripada kombinasi SPA+API, tetap ada kompleksitas tambahan dibandingkan aplikasi MPA tradisional.
- **Tidak cocok untuk aplikasi besar yang sangat kompleks** - Untuk aplikasi yang sangat besar dan kompleks, pendekatan microservice dengan API terpisah mungkin lebih sesuai.
- **Kurva pembelajaran** - Pengembang perlu memahami bagaimana Inertia mengintegrasikan backend dan frontend.

## Kesimpulan

InertiaJS membawa pendekatan segar dalam pengembangan aplikasi web modern. Ini memungkinkan pengembang untuk membangun aplikasi yang terasa seperti SPA tetapi dibangun dengan alur kerja tradisional server-side. Pendekatan ini menghilangkan kebutuhan untuk membuat dan memelihara API terpisah, sehingga mengurangi kompleksitas dan mempercepat pengembangan.

Dengan InertiaJS, Anda mendapatkan kenyamanan pengembangan server-side tradisional dengan
