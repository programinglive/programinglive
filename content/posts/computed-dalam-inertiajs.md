---
slug: "computed-dalam-inertiajs"
title: "Computed dalam InertiaJS"
date: "2025-03-20"
published: "2025-03-20T10:34:00.000-07:00"
summary: "InertiaJS telah mengubah cara kita membangun aplikasi modern dengan menggabungkan kenyamanan pengembangan server-side dengan kekuatan client-side rendering. Sebagai jembatan antara backend..."
sourceUrl: "https://blog.programinglive.com/2025/03/computed-dalam-inertiajs.html"
image: "/img/posts/computed-dalam-inertiajs/da5100e036_Computed_20dalam_20InertiaJS.png"
categories:
  - "Backend"
wordCount: 1739
---

![](/img/posts/computed-dalam-inertiajs/da5100e036_Computed_20dalam_20InertiaJS.png)

## Pendahuluan

InertiaJS telah mengubah cara kita membangun aplikasi modern dengan menggabungkan kenyamanan pengembangan server-side dengan kekuatan client-side rendering. Sebagai jembatan antara backend (seperti Laravel) dan frontend JavaScript (seperti Vue atau React), InertiaJS memungkinkan kita membangun aplikasi SPA (Single Page Application) tanpa kompleksitas pembuatan API secara manual.

Salah satu fitur penting dalam ekosistem InertiaJS yang sering kali kurang dimanfaatkan adalah Computed Properties. Konsep ini, yang dipinjam dari framework frontend seperti Vue.js, memberikan cara elekan untuk mentransformasikan dan memanipulasi data sebelum dikirim ke komponen frontend.

## Apa itu Computed Properties?

Secara konsep, Computed Properties adalah nilai turunan yang dihitung berdasarkan properti data lain. Mereka memungkinkan kita untuk:

- Mentransformasikan data mentah menjadi format yang lebih berguna
- Menggabungkan beberapa nilai data menjadi satu nilai turunan
- Melakukan perhitungan kompleks tanpa membebani komponen tampilan
- Menerapkan logika bisnis pada data sebelum ditampilkan

Computed Properties adalah fungsi yang bertindak seperti properti biasa ketika diakses, namun nilai mereka dihitung secara dinamis sesuai kebutuhan. Keuntungan utama mereka adalah caching—hasil perhitungan disimpan dan hanya dihitung ulang ketika nilai dependensinya berubah.

## Computed Properties dalam InertiaJS

Dalam konteks InertiaJS, Computed Properties bisa diimplementasikan di dua sisi:

### 1. Server-Side (Backend)

Di sisi server, kita dapat menggunakan fitur seperti Eloquent Accessors dalam Laravel atau metode khusus dalam controller untuk menghitung nilai sebelum dikirim ke frontend. Ini berguna untuk transformasi data yang lebih cocok dilakukan di server.

```
// Model dengan accessor
class User extends Model
{
    protected $appends = ['full_name'];
    
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
}

// Atau dalam controller
return Inertia::render('Users/Index', [
    'users' => User::all(),
    'total_users' => User::count(),
    'active_percentage' => User::where('active', true)->count() / User::count() * 100
]);
```

### 2. Client-Side (Frontend)

Di sisi klien, kita dapat menggunakan fitur Computed Properties bawaan dari framework frontend seperti Vue.js. Ini ideal untuk transformasi data yang tergantung pada interaksi pengguna atau status komponen.

```
// Contoh Vue 3 Composition API
const fullName = computed(() => {
    return `${props.user.first_name} ${props.user.last_name}`;
});

// Contoh Vue 2 Options API
export default {
    props: ['user'],
    computed: {
        fullName() {
            return `${this.user.first_name} ${this.user.last_name}`;
        }
    }
};
```

## Implementasi Computed Properties

### Laravel + Inertia + Vue

Untuk contoh implementasi lengkap, mari kita lihat aplikasi daftar tugas (todo list) sederhana:

#### Backend (Laravel)

```
// TaskController.php
public function index()
{
    $tasks = Task::with('category')->get();
    
    return Inertia::render('Tasks/Index', [
        'tasks' => $tasks,
        'statsData' => [
            'total' => $tasks->count(),
            'completed' => $tasks->where('is_completed', true)->count(),
            'pending' => $tasks->where('is_completed', false)->count(),
        ],
    ]);
}
```

#### Frontend (Vue 3 dengan Composition API)

```
// Tasks/Index.vue
<script setup>
import { computed } from 'vue';

const props = defineProps({
    tasks: Array,
    statsData: Object
});

// Computed properties
const completionRate = computed(() => {
    return props.statsData.completed / props.statsData.total * 100;
});

const sortedTasks = computed(() => {
    return [...props.tasks].sort((a, b) => {
        // Pending tasks first, then by creation date
        if (a.is_completed !== b.is_completed) {
            return a.is_completed ? 1 : -1;
        }
        return new Date(b.created_at) - new Date(a.created_at);
    });
});

const tasksByCategory = computed(() => {
    return props.tasks.reduce((acc, task) => {
        const categoryName = task.category ? task.category.name : 'Uncategorized';
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(task);
        return acc;
    }, {});
});
</script>
```

#### Laravel + Inertia + React

Jika Anda menggunakan React dengan InertiaJS, implementasinya akan sedikit berbeda:

```
// Tasks/Index.jsx
import React, { useMemo } from 'react';

export default function Index({ tasks, statsData }) {
    // Computed properties menggunakan useMemo
    const completionRate = useMemo(() => {
        return statsData.completed / statsData.total * 100;
    }, [statsData.completed, statsData.total]);
    
    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => {
            if (a.is_completed !== b.is_completed) {
                return a.is_completed ? 1 : -1;
            }
            return new Date(b.created_at) - new Date(a.created_at);
        });
    }, [tasks]);
    
    const tasksByCategory = useMemo(() => {
        return tasks.reduce((acc, task) => {
            const categoryName = task.category ? task.category.name : 'Uncategorized';
            if (!acc[categoryName]) {
                acc[categoryName] = [];
            }
            acc[categoryName].push(task);
            return acc;
        }, {});
    }, [tasks]);
    
    // Render component
    return (
        // ... JSX component rendering
    );
}
```

## Kasus Penggunaan

Computed Properties dalam InertiaJS sangat berguna untuk berbagai skenario:

### 1. Transformasi Format Data

```
// Mengubah format tanggal
const formattedDate = computed(() => {
    return new Date(props.task.due_date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});
```

### 2. Filtering dan Sorting

```
// Memfilter data berdasarkan kriteria
const activeUsers = computed(() => {
    return props.users.filter(user => user.status === 'active');
});

// Mengurutkan data
const sortedByPriority = computed(() => {
    return [...props.tasks].sort((a, b) => b.priority - a.priority);
});
```

### 3. Agregasi dan Kalkulasi

```
// Menghitung total dari array
const cartTotal = computed(() => {
    return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// Statistik
const statistics = computed(() => {
    const values = props.dataPoints.map(point => point.value);
    return {
        average: values.reduce((sum, val) => sum + val, 0) / values.length,
        min: Math.min(...values),
        max: Math.max(...values)
    };
});
```

### 4. Pemformatan untuk UI

```
// Memformat angka sebagai mata uang
const formattedPrice = computed(() => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(props.product.price);
});
```

## Optimasi Performa

Computed Properties menawarkan beberapa manfaat performa dalam aplikasi InertiaJS:

### 1. Caching Otomatis

Di Vue, Computed Properties menyimpan hasil mereka dalam cache dan hanya dihitung ulang ketika dependensi mereka berubah. Di React, `useMemo` berperilaku serupa, menghitung ulang nilai hanya ketika dependensi dalam array berubah.

### 2. Mengurangi Beban Rendering

Dengan memindahkan logika komputasi dari template rendering, kita mencegah perhitungan berulang saat setiap render dan memastikan UI tetap responsif.

```
// Pendekatan yang buruk (dihitung pada setiap render)
return (
    <div>
        {props.items.filter(item => item.active).map(item => (
            <Item key={item.id} data={item} />
        ))}
    </div>
);

// Pendekatan yang lebih baik (dihitung hanya ketika items berubah)
const activeItems = useMemo(() => {
    return props.items.filter(item => item.active);
}, [props.items]);

return (
    <div>
        {activeItems.map(item => (
            <Item key={item.id} data={item} />
        ))}
    </div>
);
```

### 3. Membagi Beban Antara Server dan Klien

Dalam InertiaJS, keputusan penting adalah menentukan di mana melakukan kalkulasi—di server atau di klien:

- Server: Ideal untuk operasi database yang kompleks atau perhitungan yang tidak berubah berdasarkan interaksi pengguna.
- Klien: Cocok untuk transformasi data yang tergantung pada UI, seperti filtering, sorting, atau format tampilan.

Memilih dengan bijak akan membantu mendistribusikan beban komputasi dan menjaga responsifitas aplikasi.

## Praktik Terbaik

### 1. Dekomposisi ke Computed Properties yang Lebih Kecil

Lebih baik memiliki beberapa computed properties kecil yang terfokus daripada satu computed property kompleks. Ini meningkatkan keterbacaan dan memungkinkan caching yang lebih efisien.

```
// Kurang optimal: satu computed property kompleks
const dashboardStats = computed(() => {
    const activeUsers = props.users.filter(u => u.active);
    const premiumUsers = props.users.filter(u => u.plan === 'premium');
    const totalRevenue = premiumUsers.reduce((sum, u) => sum + u.payments, 0);
    
    return { activeUsers, premiumUsers, totalRevenue };
});

// Lebih baik: dipisahkan menjadi computed properties yang lebih kecil
const activeUsers = computed(() => props.users.filter(u => u.active));
const premiumUsers = computed(() => props.users.filter(u => u.plan === 'premium'));
const totalRevenue = computed(() => 
    premiumUsers.value.reduce((sum, u) => sum + u.payments, 0)
);
```

### 2. Hindari Side Effects dalam Computed

Computed Properties seharusnya murni menghitung dan mengembalikan nilai, tanpa menyebabkan perubahan keadaan atau efek samping lainnya.

```
// Jangan lakukan ini:
const processedData = computed(() => {
    const result = processData(props.rawData);
    saveToLocalStorage(result); // Side effect!
    return result;
});

// Sebaiknya:
const processedData = computed(() => processData(props.rawData));

// Dan kemudian gunakan watcher untuk side effect
watch(processedData, (newValue) => {
    saveToLocalStorage(newValue);
});
```

### 3. Pertimbangkan Kapan Menggunakan Methods vs Computed

Dalam Vue, perbedaan antara methods dan computed cukup signifikan:

- **Computed Properties:** Ideal untuk transformasi data yang dibaca dari state dan di-cache. Hanya dihitung ulang saat dependensi berubah.
- **Methods:** Lebih cocok untuk aksi yang dipicu oleh pengguna atau membutuhkan parameter.

```
// Computed: Ideal untuk transformasi data dengan caching
const fullName = computed(() => `${user.firstName} ${user.lastName}`);

// Method: Lebih cocok untuk aksi dengan parameter
function formatCurrency(amount, currency = 'IDR') {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency
    }).format(amount);
}
```

### 4. Memisahkan Logika Bisnis dari Komponen

Untuk aplikasi yang lebih besar, pertimbangkan untuk memindahkan computed properties kompleks ke composables (Vue) atau custom hooks (React):

```
// useTaskStats.js (Vue Composable)
import { computed } from 'vue';

export function useTaskStats(tasks) {
    const completed = computed(() => tasks.value.filter(t => t.completed).length);
    const pending = computed(() => tasks.value.filter(t => !t.completed).length);
    const completionRate = computed(() => {
        return tasks.value.length > 0 ? (completed.value / tasks.value.length * 100) : 0;
    });
    
    return { completed, pending, completionRate };
}

// Penggunaan dalam komponen
const { tasks } = defineProps(['tasks']);
const { completed, pending, completionRate } = useTaskStats(computed(() => tasks));
```

## Debugging Computed Properties

Debugging Computed Properties dapat dilakukan dengan beberapa pendekatan:

### 1. Vue DevTools

Untuk Vue, gunakan Vue DevTools untuk memeriksa nilai computed property saat runtime:

- Instal ekstensi browser Vue DevTools
- Inspect komponen di panel Components
- Lihat computed values di panel sidebar

### 2. Console Logging dengan Watcher

```
// Mengawasi perubahan dalam computed property
watch(myComputedValue, (newVal, oldVal) => {
    console.log('myComputedValue changed:', { newVal, oldVal });
});
```

### 3. Debugging React dengan useMemo

Untuk React, pastikan dependensi array berisi semua nilai yang digunakan dalam kalkulasi:

```
// Debugging useMemo
console.log('Dependencies:', [props.value1, props.value2]);
const computedValue = useMemo(() => {
    console.log('Computing value...');
    return expensiveCalculation(props.value1, props.value2);
}, [props.value1, props.value2]);
```

### 4. Reaktivitas yang Hilang

Masalah umum adalah kehilangan reaktivitas ketika dependensi tidak dilacak dengan benar:

```
// Vue: Jika destructuring props di luar computed, reaktivitas akan hilang
const { user } = props; // JANGAN lakukan ini
const fullName = computed(() => `${user.firstName} ${user.lastName}`);

// Sebaiknya, gunakan props langsung dalam computed
const fullName = computed(() => `${props.user.firstName} ${props.user.lastName}`);
```

## Kesimpulan

Computed Properties adalah alat yang ampuh dalam ekosistem InertiaJS yang menggabungkan kelebihan dari pendekatan server-side dan client-side. Dengan menggunakan Computed Properties secara efektif, kita dapat:

- Mengorganisasi kode dengan lebih baik dengan memisahkan logika bisnis dari tampilan
- Meningkatkan kinerja dengan memanfaatkan caching dan komputasi lazily (hanya saat dibutuhkan)
- Membuat kode lebih mudah dibaca dan dipelihara dengan abstraksi logika kompleks
- Mendistribusikan beban pemrosesan secara optimal antara server dan klien

Garis besar penting yang perlu diingat:

- Di sisi server (Laravel), gunakan accessors, custom methods, atau resources untuk transformasi data sebelum dikirim ke Inertia
- Di sisi klien, manfaatkan computed properties (Vue) atau useMemo (React) untuk transformasi data berbasis UI
- Fokus pada pembuatan computed properties yang murni, kecil, dan terfokus
- Pisahkan logika bisnis kompleks ke composables atau hooks yang dapat digunakan kembali

Dengan menguasai Computed Properties dalam InertiaJS, Anda akan dapat membangun aplikasi yang lebih efisien, mudah dipelihara, dan responsif terhadap interaksi pengguna.
