---
slug: "shared-data-dalam-inertiajs"
title: "Shared Data dalam InertiaJS"
date: "2025-03-20"
published: "2025-03-20T10:29:00.000-07:00"
summary: "InertiaJS telah mengubah cara kita membangun aplikasi web modern, dengan menjembatani kesenjangan antara backend monolitik seperti Laravel dan frontend JavaScript seperti Vue atau React. Salah..."
sourceUrl: "https://blog.programinglive.com/2025/03/shared-data-dalam-inertiajs.html"
image: "/img/posts/shared-data-dalam-inertiajs/1bf5762817_Shared_20Data_20dalam_20InertiaJS.png"
categories:
  - "Backend"
wordCount: 1655
---

![](/img/posts/shared-data-dalam-inertiajs/1bf5762817_Shared_20Data_20dalam_20InertiaJS.png)

## Pendahuluan

InertiaJS telah mengubah cara kita membangun aplikasi web modern, dengan menjembatani kesenjangan antara backend monolitik seperti Laravel dan frontend JavaScript seperti Vue atau React. Salah satu fitur yang sangat berguna namun sering terlupakan adalah "Shared Data".

Dalam artikel ini, kita akan mendalami konsep Shared Data, bagaimana cara mengimplementasikannya, dan kasus-kasus penggunaan yang umum. Pemahaman yang baik tentang fitur ini akan membantu Anda membangun aplikasi yang lebih efisien dan terstruktur.

## Apa itu Shared Data?

Shared Data dalam InertiaJS adalah mekanisme untuk berbagi data global dari server ke semua komponen di frontend. Tidak seperti data halaman biasa yang dikirim khusus untuk satu request, Shared Data tersedia di semua halaman dan komponen tanpa perlu memintanya lagi pada setiap navigasi.

Bayangkan Shared Data sebagai wadah informasi yang konsisten yang selalu ada di tangan Anda, tidak peduli di halaman mana Anda berada dalam aplikasi. Ini sangat ideal untuk data yang dibutuhkan secara global seperti informasi user yang sedang login, pengaturan aplikasi, atau notifikasi yang perlu tampil di seluruh aplikasi.

## Kenapa Menggunakan Shared Data?

Ada beberapa alasan kuat untuk memanfaatkan Shared Data:

- **Efisiensi:** Menghindari pengiriman data yang sama berulang kali pada setiap request
- **Konsistensi:** Menjamin konsistensi data di seluruh aplikasi
- **Kemudahan akses:** Data tersedia di semua komponen tanpa perlu prop drilling
- **Performa:** Mengurangi ukuran payload pada navigasi halaman setelah initial load
- **Pemeliharaan:** Memusatkan pengelolaan data global di satu tempat

Dengan Shared Data, Anda dapat menghindari anti-pattern umum seperti menyimpan data pengguna di localStorage atau membuat request terpisah hanya untuk mendapatkan data yang sama berulang kali.

## Cara Implementasi Shared Data

Implementasi Shared Data melibatkan dua sisi: backend dan frontend. Mari kita lihat masing-masing dengan detail.

### Setup di Backend (Laravel)

Jika Anda menggunakan Laravel, setup Shared Data cukup sederhana. Ini biasanya dilakukan di dalam middleware atau service provider.

Berikut contoh implementasi di middleware:

```
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HandleInertiaRequests
{
    public function handle(Request $request, Closure $next)
    {
        Inertia::share([
            'auth' => function () use ($request) {
                return [
                    'user' => $request->user() ? [
                        'id' => $request->user()->id,
                        'name' => $request->user()->name,
                        'email' => $request->user()->email,
                        'role' => $request->user()->role,
                    ] : null,
                ];
            },
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
            'appName' => config('app.name'),
            'appVersion' => '1.0.0',
        ]);

        return $next($request);
    }
}
```

Perhatikan penggunaan fungsi callback (closure) untuk data 'auth' dan 'flash'. Ini memastikan data hanya dievaluasi ketika diperlukan, bukan pada setiap request. Pendekatan ini sangat efisien, terutama jika data tersebut melibatkan query database.

Anda juga bisa menambahkan middleware ini ke kernel HTTP Anda:

```
// app/Http/Kernel.php
protected $middlewareGroups = [
    'web' => [
        // ...
        \App\Http\Middleware\HandleInertiaRequests::class,
    ],
];
```

Alternatif lain, Anda bisa menggunakan Service Provider:

```
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Inertia::share('app', [
            'name' => config('app.name'),
            'environment' => app()->environment(),
        ]);
        
        // Data yang memerlukan evaluasi lambat
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => auth()->user() ? auth()->user()->only('id', 'name', 'email') : null,
                ];
            },
        ]);
    }
}
```

### Setup di Frontend (Vue/React)

Setelah mengatur Shared Data di backend, Anda perlu mengaksesnya di frontend. Cara melakukannya berbeda sedikit tergantung apakah Anda menggunakan Vue atau React.

**Untuk Vue:**

```
<template>
  <div>
    <p v-if="$page.props.auth.user">
      Hello, {{ $page.props.auth.user.name }}!
    </p>
    
    <p>{{ $page.props.appName }} v{{ $page.props.appVersion }}</p>
    
    <div v-if="$page.props.flash.success" class="alert-success">
      {{ $page.props.flash.success }}
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    getUserInfo() {
      return this.$page.props.auth.user;
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.$page.props.auth.user;
    },
    userName() {
      return this.$page.props.auth.user?.name;
    }
  }
}
</script>
```

**Untuk React:**

```
import { usePage } from '@inertiajs/inertia-react';

function Header() {
  const { auth, appName, appVersion } = usePage().props;
  
  return (
    <header>
      {auth.user && (
        <p>Hello, {auth.user.name}!</p>
      )}
      
      <p>{appName} v{appVersion}</p>
    </header>
  );
}

// Akses dengan hook custom
function useAuth() {
  const { auth } = usePage().props;
  
  return {
    user: auth.user,
    isLoggedIn: !!auth.user,
    check: (ability) => auth.user?.abilities?.includes(ability) || false,
  };
}

// Penggunaan hook custom
function SomeComponent() {
  const { user, isLoggedIn, check } = useAuth();
  
  return (
    <div>
      {isLoggedIn && check('edit-posts') && (
        <button>Edit Post</button>
      )}
    </div>
  );
}
```

## Tips Penggunaan Shared Data

Berikut beberapa tips untuk memaksimalkan manfaat Shared Data:

- **Bedakan antara data statis dan dinamis:** Gunakan fungsi callback hanya untuk data yang perlu dievaluasi secara dinamis (seperti user atau flash messages). Untuk data statis (seperti nama aplikasi), cukup berikan nilai langsungnya.
- **Jangan share terlalu banyak data:** Hanya bagikan data yang benar-benar dibutuhkan secara global. Terlalu banyak data akan memperbesar payload awal dan mungkin mempengaruhi performa.
- **Gunakan transformasi data:** Jangan share seluruh model Eloquent. Selalu filter dan transformasikan data sebelum membagikannya untuk mengurangi ukuran payload dan menghindari eksposur data sensitif.
- **Buat helper/composables:** Untuk membuat kode lebih bersih, buatlah helper function atau composables yang membungkus akses ke Shared Data. Contoh untuk Vue: ` // resources/js/Composables/useAuth.js import { computed } from 'vue'; import { usePage } from '@inertiajs/inertia-vue3'; export function useAuth() { const page = usePage(); return { user: computed(() => page.props.value.auth.user), isLoggedIn: computed(() => !!page.props.value.auth.user), hasRole: (role) => { return page.props.value.auth.user?.role === role; } }; } // Penggunaan di komponen import { useAuth } from '@/Composables/useAuth'; export default { setup() { const { user, isLoggedIn, hasRole } = useAuth(); return { user, isLoggedIn, isAdmin: hasRole('admin') }; } } `
- **Update dengan bijak:** Jika data shared perlu diupdate di frontend (misalnya setelah operasi AJAX), gunakan Inertia.setProps untuk memastikan konsistensi. ` // Vue import { Inertia } from '@inertiajs/inertia'; Inertia.setProps({ auth: { user: { ...usePage().props.value.auth.user, preferences: updatedPreferences } } }); // React import { Inertia } from '@inertiajs/inertia'; import { usePage } from '@inertiajs/inertia-react'; Inertia.setProps({ auth: { user: { ...usePage().props.auth.user, preferences: updatedPreferences } } }); `

## Kasus Penggunaan

Shared Data sangat cocok untuk berbagai kasus penggunaan umum. Berikut beberapa contoh:

### 1. Informasi User

Menyimpan informasi user yang sedang login adalah kasus penggunaan paling umum. Ini memungkinkan semua komponen untuk memeriksa status otentikasi dan menampilkan konten yang sesuai.

```
// Backend (Laravel)
Inertia::share([
    'auth' => function () {
        return [
            'user' => auth()->user() ? [
                'id' => auth()->user()->id,
                'name' => auth()->user()->name,
                'avatar' => auth()->user()->avatar_url,
                'permissions' => auth()->user()->getAllPermissions()->pluck('name'),
            ] : null,
        ];
    },
]);

// Frontend (Vue)
<template>
  <nav>
    <div v-if="$page.props.auth.user">
      <img :src="$page.props.auth.user.avatar" alt="Avatar" />
      <span>{{ $page.props.auth.user.name }}</span>
      
      <div v-if="hasPermission('manage-users')">
        <inertia-link href="/admin/users">Manage Users</inertia-link>
      </div>
    </div>
    <div v-else>
      <inertia-link href="/login">Login</inertia-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    hasPermission(permission) {
      return this.$page.props.auth.user.permissions.includes(permission);
    }
  }
}
</script>
```

### 2. Flash Messages

Menampilkan pesan sukses atau error di seluruh aplikasi:

```
// Backend (Laravel)
Inertia::share([
    'flash' => function () use ($request) {
        return [
            'success' => $request->session()->get('success'),
            'error' => $request->session()->get('error'),
            'warning' => $request->session()->get('warning'),
        ];
    },
]);

// Frontend (Vue component global)
<template>
  <div class="flash-messages">
    <div v-if="$page.props.flash.success" class="alert alert-success">
      {{ $page.props.flash.success }}
    </div>
    
    <div v-if="$page.props.flash.error" class="alert alert-danger">
      {{ $page.props.flash.error }}
    </div>
    
    <div v-if="$page.props.flash.warning" class="alert alert-warning">
      {{ $page.props.flash.warning }}
    </div>
  </div>
</template>
```

### 3. Pengaturan Aplikasi

Menyediakan konfigurasi global yang digunakan di seluruh aplikasi:

```
// Backend (Laravel)
Inertia::share([
    'app' => [
        'name' => config('app.name'),
        'version' => config('app.version'),
        'theme' => setting('site.theme', 'light'),
        'features' => [
            'comments' => feature_enabled('comments'),
            'premium' => feature_enabled('premium'),
        ]
    ],
]);

// Frontend (Vue)
<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <header>
      <h1>{{ $page.props.app.name }}</h1>
      <span class="version">v{{ $page.props.app.version }}</span>
    </header>
    
    <div v-if="$page.props.app.features.comments">
      <comments-section />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$page.props.app.theme === 'dark';
    }
  }
}
</script>
```

### 4. Notifikasi

Menampilkan notifikasi dan hitungan yang belum dibaca:

```
// Backend (Laravel)
Inertia::share([
    'notifications' => function () {
        if (!auth()->check()) {
            return null;
        }
        
        return [
            'unread_count' => auth()->user()->unreadNotifications()->count(),
            'recent' => auth()->user()->notifications()
                ->latest()
                ->take(5)
                ->map(function ($notification) {
                    return [
                        'id' => $notification->id,
                        'type' => $notification->type,
                        'message' => $notification->data['message'],
                        'read' => !is_null($notification->read_at),
                        'time' => $notification->created_at->diffForHumans(),
                    ];
                }),
        ];
    },
]);

// Frontend (Vue component)
<template>
  <div class="notification-area" v-if="hasNotifications">
    <button class="notification-bell" @click="toggleDropdown">
      <span class="count">{{ unreadCount }}</span>
    </button>
    
    <div v-if="showDropdown" class="dropdown">
      <div v-for="notification in notifications" :key="notification.id"
           :class="{ 'unread': !notification.read }">
        <p>{{ notification.message }}</p>
        <small>{{ notification.time }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    hasNotifications() {
      return !!this.$page.props.notifications;
    },
    unreadCount() {
      return this.$page.props.notifications?.unread_count || 0;
    },
    notifications() {
      return this.$page.props.notifications?.recent || [];
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
}
</script>
```

## Pertimbangan Performa

Meskipun Shared Data sangat berguna, ada beberapa pertimbangan performa yang perlu diperhatikan:

- **Ukuran Payload Initial:** Shared Data ditransfer pada request awal, jadi data yang terlalu besar dapat memperlambat waktu loading awal. Pertimbangkan untuk lazy-loading data yang besar atau jarang digunakan.
- **Evaluasi Lambat (Lazy Evaluation):** Gunakan fungsi callback untuk data yang memerlukan query database atau operasi berat lainnya. Ini memastikan data hanya dievaluasi jika benar-benar dibutuhkan. ` // Baik: Menggunakan callback untuk evaluasi lambat Inertia::share([ 'unreadMessages' => function () { if (auth()->check()) { return auth()->user()->unreadMessages()->count(); } }, ]); // Kurang baik: Mengevaluasi pada setiap request Inertia::share([ 'unreadMessages' => auth()->check() ? auth()->user()->unreadMessages()->count() : null, ]); `
- **Caching:** Untuk data yang jarang berubah, pertimbangkan untuk menggunakan caching di server: ` Inertia::share([ 'settings' => function () { return Cache::remember('app-settings', now()->addHour(), function () { return Settings::all()->pluck('value', 'key')->toArray(); }); }, ]); `
- **Partial Reloads:** Jika Anda perlu memperbarui hanya sebagian dari Shared Data, gunakan Inertia.reload() dengan parameter only dan data: ` // Hanya memuat ulang data notifikasi Inertia.reload({ only: ['notifications'] }); `

## Kesimpulan

Shared Data adalah fitur InertiaJS yang sangat powerful untuk berbagi data global antara backend dan frontend. Dengan menggunakannya secara efektif, Anda dapat membuat aplikasi yang lebih konsisten, efisien, dan mudah dipelihara.

Ingatlah untuk selalu mempertimbangkan keseimbangan antara kenyamanan dan performa. Bagikan hanya data yang benar-benar diperlukan secara global, dan gunakan teknik seperti evaluasi lambat, caching, dan transformasi data untuk mengoptimalkan pengalaman pengguna.

InertiaJS terus berkembang, jadi selalu periksa dokumentasi resmi untuk fitur dan praktik terbaru terkait Shared Data. Dengan memahami dan menerapkan fitur ini dengan baik, Anda telah selangkah lebih maju dalam membangun aplikasi modern yang menjembatani dunia backend dan frontend dengan mulus.

Selamat mencoba dan semoga artikel ini bermanfaat untuk pengembangan aplikasi InertiaJS Anda selanjutnya!
