---
slug: "pagination-dalam-inertiajs"
title: "Pagination dalam InertiaJS"
date: "2025-03-21"
published: "2025-03-21T01:38:00.000-07:00"
summary: "InertiaJS telah merevolusi cara kita membangun aplikasi web modern dengan menggabungkan kenyamanan traditional server-side rendering dengan kekuatan Single Page Application (SPA). Salah satu..."
sourceUrl: "https://blog.programinglive.com/2025/03/pagination-dalam-inertiajs.html"
image: "/img/posts/pagination-dalam-inertiajs/6fc1e951bd_Pagination_20dalam_20InertiaJS.png"
categories:
  - "Frontend"
wordCount: 1370
---

![](/img/posts/pagination-dalam-inertiajs/6fc1e951bd_Pagination_20dalam_20InertiaJS.png)

## Pengenalan Pagination dengan InertiaJS

InertiaJS telah merevolusi cara kita membangun aplikasi web modern dengan menggabungkan kenyamanan traditional server-side rendering dengan kekuatan Single Page Application (SPA). Salah satu komponen penting dalam pengembangan aplikasi web adalah pagination, yang memungkinkan pengguna untuk menjelajahi sejumlah besar data dengan cara yang terorganisir.

Pagination dalam InertiaJS menjembatani kesenjangan antara backend dan frontend dengan mulus, memungkinkan pengembang untuk memanfaatkan kemampuan pagination bawaan dari framework backend (seperti Laravel) sambil menampilkan data dengan komponen frontend (Vue.js atau React) yang interaktif dan responsif.

## Konsep Dasar Pagination

Sebelum kita mendalami implementasi teknis, mari kita pahami konsep dasar pagination:

- **Page Size**: Jumlah item yang ditampilkan per halaman
- **Current Page**: Halaman yang sedang aktif dilihat oleh pengguna
- **Total Items**: Jumlah total item dalam dataset
- **Total Pages**: Total halaman yang diperlukan untuk menampilkan semua item
- **Navigation Links**: Kontrol untuk berpindah antar halaman

Dalam konteks InertiaJS, pagination melibatkan pengiriman data yang dipaginasi dari server ke klien menggunakan mekanisme prop InertiaJS, lalu menampilkan data dan kontrol halaman menggunakan komponen frontend.

## Implementasi Pagination di Backend

### Pagination dengan Laravel

Laravel, sebagai backend yang paling umum digunakan dengan InertiaJS, menyediakan dukungan pagination yang sangat baik. Berikut adalah cara mengimplementasikannya:

```
// PostController.php
public function index()
{
    $posts = Post::latest()->paginate(10);
    
    return Inertia::render('Posts/Index', [
        'posts' => $posts
    ]);
}
```

Metode `paginate()` secara otomatis mengatur pagination dengan parameter berikut:

- Jumlah item per halaman (dalam contoh ini 10)
- Link ke halaman sebelumnya dan berikutnya
- Total item dan halaman
- Halaman saat ini

Laravel akan otomatis mendeteksi parameter `page` dari query string URL dan mengembalikan data yang sesuai.

### Pengaturan Query Pagination

Kita dapat mengkustomisasi query pagination dengan berbagai cara:

```
// Pagination dengan kondisi where
$posts = Post::where('is_published', true)
            ->orderBy('created_at', 'desc')
            ->paginate(15);

// Pagination dengan eager loading relation
$posts = Post::with(['author', 'comments'])
            ->paginate(10);

// Pagination dengan penghitungan relasi
$posts = Post::withCount('comments')
            ->having('comments_count', '>', 5)
            ->paginate(10);

// Pagination sederhana (tanpa total count untuk performa lebih baik)
$posts = Post::latest()->simplePaginate(10);
```

**Tip:** Untuk koleksi data yang sangat besar, gunakan `simplePaginate()` daripada `paginate()` untuk menghindari query COUNT yang berat.

## Implementasi Pagination di Frontend

### Menampilkan Pagination Links

Ketika menggunakan Laravel dengan InertiaJS, data pagination yang dikirim ke frontend memiliki struktur berikut:

```
{
  "data": [ /* item-item halaman saat ini */ ],
  "links": [
    { "url": "/?page=1", "label": "«", "active": false },
    { "url": "/?page=1", "label": "1", "active": false },
    { "url": "/?page=2", "label": "2", "active": true },
    { "url": "/?page=3", "label": "3", "active": false },
    { "url": "/?page=3", "label": "»", "active": false }
  ],
  "current_page": 2,
  "from": 11,
  "last_page": 3,
  "path": "/",
  "per_page": 10,
  "to": 20,
  "total": 26
}
```

Kita dapat menggunakan informasi ini untuk membangun komponen pagination yang interaktif.

### Komponen Pagination dengan Vue

Berikut adalah contoh komponen pagination dasar dengan Vue:

```
<template>
  <div class="posts-container">
    <!-- Tampilkan daftar post -->
    <div v-for="post in posts.data" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
    </div>
    
    <!-- Tampilkan pagination links -->
    <div class="pagination">
      <template v-for="(link, i) in posts.links" :key="i">
        <inertia-link
          v-if="link.url"
          :href="link.url"
          class="pagination-link"
          :class="{ 'active': link.active }"
          v-html="link.label"
        />
        <span v-else class="pagination-link disabled" v-html="link.label" />
      </template>
    </div>
    
    <div class="pagination-info">
      Menampilkan {{ posts.from }} hingga {{ posts.to }} dari {{ posts.total }} item
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Object
  }
}
</script>
```

Dalam contoh di atas, kita menggunakan `inertia-link` untuk membuat link pagination yang akan menavigasi tanpa reload halaman penuh. InertiaJS akan otomatis menangani pemuatan data yang diperlukan.

### Komponen Pagination dengan React

Jika Anda menggunakan React sebagai frontend, berikut adalah contoh implementasinya:

```
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {/* Tampilkan daftar post */}
      {posts.data.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
      
      {/* Tampilkan pagination links */}
      <div className="pagination">
        {posts.links.map((link, i) => (
          
            {link.url ? (
              <InertiaLink
                href={link.url}
                className={`pagination-link ${link.active ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ) : (
              <span 
                className="pagination-link disabled"
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            )}
          
        ))}
      </div>
      
      <div className="pagination-info">
        Menampilkan {posts.from} hingga {posts.to} dari {posts.total} item
      </div>
    </div>
  );
};

export default Posts;
```

## Kustomisasi Pagination

### Styling Pagination

Styling pagination links dapat dilakukan dengan CSS biasa. Berikut contoh sederhana:

```
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
}

.pagination-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 0.25rem;
  background-color: #f3f4f6;
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.pagination-link:hover {
  background-color: #e5e7eb;
}

.pagination-link.active {
  background-color: #3b82f6;
  color: white;
}

.pagination-link.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.pagination-info {
  text-align: center;
  margin-top: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
}
```

### Logika Kustom

Untuk kasus yang lebih kompleks, Anda mungkin ingin membuat komponen pagination kustom:

```
// Komponen pagination kustom (Vue)
<template>
  <div class="pagination-container">
    <inertia-link 
      :href="previousPageUrl" 
      class="pagination-button"
      :class="{ 'disabled': !hasPreviousPage }"
    >
      <span class="icon"><i class="fas fa-chevron-left"></i></span>
      Sebelumnya
    </inertia-link>
    
    <div class="page-numbers">
      <span v-if="showingStartEllipsis">...</span>
      
      <template v-for="page in visiblePageNumbers" :key="page">
        <inertia-link 
          :href="getPageUrl(page)"
          class="page-number"
          :class="{ 'active': page === currentPage }"
        >
          {{ page }}
        </inertia-link>
      </template>
      
      <span v-if="showingEndEllipsis">...</span>
    </div>
    
    <inertia-link 
      :href="nextPageUrl" 
      class="pagination-button"
      :class="{ 'disabled': !hasNextPage }"
    >
      Selanjutnya
      <span class="icon"><i class="fas fa-chevron-right"></i></span>
    </inertia-link>
  </div>
</template>

<script>
export default {
  props: {
    pagination: Object,
    maxVisiblePages: {
      type: Number,
      default: 5
    }
  },
  
  computed: {
    currentPage() {
      return this.pagination.current_page;
    },
    
    lastPage() {
      return this.pagination.last_page;
    },
    
    hasPreviousPage() {
      return this.currentPage > 1;
    },
    
    hasNextPage() {
      return this.currentPage  this.lastPage) {
        start = Math.max(1, start - (end - this.lastPage));
        end = this.lastPage;
      }
      
      const pages = [];
      for (let i = start; i  1;
    },
    
    showingEndEllipsis() {
      return this.visiblePageNumbers[this.visiblePageNumbers.length - 1] < this.lastPage;
    }
  },
  
  methods: {
    getPageUrl(page) {
      const path = this.pagination.path;
      return `${path}?page=${page}`;
    }
  }
}
</script>
```

## Optimasi Performa Pagination

Untuk meningkatkan performa pagination, terutama untuk dataset yang besar, pertimbangkan teknik-teknik berikut:

- **Gunakan `simplePaginate()`**: Untuk dataset yang sangat besar, gunakan `simplePaginate()` di Laravel karena ini menghindari query COUNT dan hanya menyediakan link "sebelumnya" dan "selanjutnya". `$posts = Post::latest()->simplePaginate(10);`
- **Batasi jumlah data yang dikirim**: Hanya kirim kolom yang diperlukan untuk tampilan. `$posts = Post::select('id', 'title', 'excerpt', 'created_at') ->latest() ->paginate(10);`
- **Indeks database**: Pastikan kolom yang digunakan untuk ordering dan filtering memiliki indeks untuk mempercepat query. `// Migration Schema::table('posts', function (Blueprint $table) { $table->index('created_at'); $table->index('is_published'); });`
- **Manfaatkan cache**: Untuk data yang jarang berubah, pertimbangkan untuk meng-cache hasil pagination. `$posts = Cache::remember('posts_page_' . request('page', 1), now()->addMinutes(5), function () { return Post::latest()->paginate(10); });`
- **Cursor pagination**: Untuk dataset yang sangat besar, cursor pagination lebih efisien (tersedia di Laravel 8+). `$posts = Post::latest('id')->cursorPaginate(10);`

## Praktik Terbaik

Berikut beberapa praktik terbaik yang perlu dipertimbangkan ketika mengimplementasikan pagination di InertiaJS:

- **Konsistensi UI**: Jaga konsistensi desain pagination di seluruh aplikasi untuk pengalaman pengguna yang lebih baik.
- **Preservasi State**: Gunakan parameter query untuk filter dan pencarian agar state tetap terjaga saat navigasi pagination. `// Controller public function index(Request $request) { $query = Post::query(); if ($request->has('search')) { $query->where('title', 'like', '%' . $request->search . '%'); } if ($request->has('category')) { $query->where('category_id', $request->category); } $posts = $query->latest()->paginate(10)->withQueryString(); return Inertia::render('Posts/Index', [ 'posts' => $posts, 'filters' => $request->only(['search', 'category']) ]); } `
- **Form Submissions**: Gunakan `preserveState` agar filter dan state pagination tetap terjaga setelah submit form. `// Vue Component Search export default { data() { return { form: this.$inertia.form({ search: this.$page.props.filters.search || '' }) } }, methods: { submit() { this.form.get(this.route('posts.index'), { preserveState: true, preserveScroll: true, only: ['posts'] }); } } } `
- **URL yang Bersih**: Gunakan URL yang SEO-friendly dan mudah dibagikan. `// route di web.php Route::get('posts/page/{page}', [PostController::class, 'index']) ->name('posts.index') ->where('page', '[0-9]+');`
- **Lazy Loading Komponen**: Untuk aplikasi yang besar, pertimbangkan untuk lazy-load komponen pagination. `// Vue lazy loading const Pagination = () => import('./Pagination.vue');`

## Kesimpulan

Pagination adalah aspek penting dalam pengembangan aplikasi web modern, dan InertiaJS menyediakan cara yang elegan untuk mengimplementasikannya dengan menjembatani framework backend seperti Laravel dengan frontend Vue atau React.

Dengan memahami konsep dasar, implementasi backend dan frontend, serta teknik optimasi yang telah kita bahas, Anda dapat membuat sistem pagination yang efisien, responsif, dan user-friendly untuk aplikasi InertiaJS Anda.

Yang terpenting, manfaatkan kekuatan masing-masing bagian: gunakan kemampuan pagination bawaan Laravel di backend dan kekuatan komponisasi Vue/React di frontend untuk menciptakan pengalaman pengguna yang optimal.

Ingatlah untuk selalu mempertimbangkan performa dan UX dalam setiap keputusan implementasi pagination, terutama saat bekerja dengan dataset yang besar.
