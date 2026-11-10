---
slug: "mengenal-vuejs"
title: "Mengenal Vue.js"
date: "2025-03-16"
published: "2025-03-16T10:00:00.000-07:00"
summary: "Vue.js adalah framework JavaScript progresif untuk membangun antarmuka pengguna (UI). Tidak seperti framework monolitik lainnya, Vue dirancang dari awal untuk dapat diadopsi secara bertahap...."
sourceUrl: "https://blog.programinglive.com/2025/03/mengenal-vuejs.html"
image: "/img/posts/mengenal-vuejs/95b25533fb_Mengenal_20Vue.js.png"
categories:
  - "Backend"
wordCount: 954
---

![](/img/posts/mengenal-vuejs/95b25533fb_Mengenal_20Vue.js.png)

## Pengenalan Vue.js

Vue.js adalah framework JavaScript progresif untuk membangun antarmuka pengguna (UI). Tidak seperti framework monolitik lainnya, Vue dirancang dari awal untuk dapat diadopsi secara bertahap. Pustaka intinya berfokus pada layer tampilan saja, sehingga mudah diintegrasikan dengan proyek dan pustaka lain.

Vue.js juga mampu menangani aplikasi single-page (SPA) yang kompleks ketika dikombinasikan dengan alat modern dan pustaka pendukung.

## Fitur Utama Vue.js

- **Reaktivitas:** Sistem reaktivitas yang efisien untuk pelacakan dependensi dan pengoptimalan rendering.
- **Component-Based:** Antarmuka pengguna dikembangkan dalam bentuk komponen yang dapat digunakan kembali.
- **Direktif:** Ekstensi HTML spesial dengan awalan "v-" yang memberikan fungsi tambahan pada DOM.
- **Transisi:** Sistem transisi bawaan untuk mengelola animasi UI.
- **Ringan:** Ukuran file kecil (~30KB) sehingga cepat dimuat dan dijalankan.
- **Dokumentasi:** Memiliki dokumentasi komprehensif yang mudah dipahami.
- **Ekosistem:** Dukungan untuk routing, state management, dan alat pengembangan.

## Cara Instalasi Vue.js

Ada beberapa cara untuk menginstal Vue.js:

### 1. Menggunakan CDN

```
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

### 2. Menggunakan NPM

```
npm install vue@3
```

### 3. Menggunakan Vue CLI

```
npm install -g @vue/cli
vue create my-project
```

## Konsep Dasar Vue.js

### Instance Vue

Setiap aplikasi Vue dimulai dengan membuat instance Vue baru:

```
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})

app.mount('#app')
```

### Template Sintaks

Vue menggunakan sintaks template berbasis HTML yang memungkinkan Anda untuk mengikat DOM yang dirender dengan data instance Vue:

```
<div id="app">
  {{ message }}
</div>
```

### Direktif

Direktif adalah atribut spesial yang dimulai dengan "v-". Beberapa direktif penting:

- **v-bind:** Mengikat atribut elemen atau komponen ke nilai reaktif
- **v-model:** Membuat binding dua arah pada elemen input
- **v-if/v-else:** Merender elemen berdasarkan kondisi
- **v-for:** Merender daftar elemen berdasarkan array
- **v-on:** Mendengarkan event DOM

### Computed Properties

Computed properties menyediakan cara untuk mendefinisikan properti yang bergantung pada properti lain:

```
const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

## Komponen dalam Vue.js

Komponen adalah salah satu fitur utama Vue yang memungkinkan Anda membuat elemen UI yang dapat digunakan kembali:

```
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      Kamu sudah mengklik saya {{ count }} kali.
    </button>
  `
})
```

Komponen dapat digunakan dalam template dengan tag kustom:

```
<div id="app">
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

### Single-File Components (SFC)

Vue mendukung Single-File Components dengan ekstensi .vue yang memungkinkan Anda menulis template, logika, dan style dalam satu file:

```
<template>
  <button @click="count++">
    Kamu sudah mengklik saya {{ count }} kali.
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

## Vue Router

Vue Router adalah pustaka resmi untuk routing dalam aplikasi Vue.js. Ini memungkinkan Anda untuk mengembangkan aplikasi single-page dengan navigasi yang mulus.

```
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')
```

Kemudian di template Anda dapat menggunakan komponen router-link dan router-view:

```
<div id="app">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>
</div>
```

## Manajemen State dengan Vuex

Vuex adalah pustaka state management pola dan pustaka untuk aplikasi Vue.js. Ini berfungsi sebagai store terpusat untuk semua komponen:

```
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

const app = Vue.createApp({})
app.use(store)
app.mount('#app')
```

Kemudian di komponen Anda dapat mengakses state:

```
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    doubleCount() {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
}
```

## Studi Kasus: Aplikasi Todo List

Berikut adalah contoh implementasi sederhana aplikasi Todo List menggunakan Vue.js:

```
<!-- App.vue -->
<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Tambahkan tugas baru">
      <button type="submit">Tambah</button>
    </form>
    
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Hapus</button>
      </li>
    </ul>
    
    <div>
      <button @click="clearCompleted">Hapus Selesai</button>
      <span>{{ activeCount }} item tersisa</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  computed: {
    activeCount() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>
```

Aplikasi Todo List ini mencakup fitur-fitur dasar seperti:

- Menambahkan tugas baru
- Menandai tugas sebagai selesai
- Menghapus tugas
- Menghapus semua tugas yang telah selesai
- Menampilkan jumlah tugas yang tersisa

Aplikasi ini mendemonstrasikan konsep-konsep penting dalam Vue seperti:

- Binding data dengan v-model
- Rendering list dengan v-for
- Binding class secara kondisional
- Event handling dengan v-on/@
- Computed properties
- Methods

## Kesimpulan

Vue.js adalah framework JavaScript yang sangat fleksibel dan mudah dipelajari. Kekuatan utamanya terletak pada kemampuannya untuk diadopsi secara bertahap, sistem reaktivitas yang efisien, dan pendekatan berbasis komponen yang modular.

Dengan Vue.js, Anda dapat membangun aplikasi web kecil hingga aplikasi kompleks berkat ekosistem dan dukungan dari komunitas yang terus berkembang. Baik untuk pengembang pemula maupun yang berpengalaman, Vue.js menawarkan kurva belajar yang ramah dan pengalaman pengembangan yang menyenangkan.

Jika Anda mencari framework JavaScript untuk proyek Anda berikutnya, Vue.js patut untuk dipertimbangkan karena fleksibilitas, kinerja, dan kemudahan penggunaannya.
