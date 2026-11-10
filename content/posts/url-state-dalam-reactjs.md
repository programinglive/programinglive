---
slug: "url-state-dalam-reactjs"
title: "URL State dalam ReactJS"
date: "2025-04-18"
published: "2025-04-18T21:32:00.000-07:00"
summary: "URL State adalah state yang disimpan dalam URL browser, seperti query parameters dan path, yang memungkinkan pengguna untuk berbagi, menyimpan, dan menavigasi data dalam aplikasi React."
sourceUrl: "https://blog.programinglive.com/2025/04/url-state-dalam-reactjs.html"
image: "/img/posts/url-state-dalam-reactjs/5a05a346a4_URL_20State_20dalam_20ReactJS.png"
categories:
  - "Frontend"
wordCount: 364
---

![](/img/posts/url-state-dalam-reactjs/5a05a346a4_URL_20State_20dalam_20ReactJS.png)

## Pengertian URL State

URL State adalah state yang disimpan dalam URL browser, seperti query parameters dan path, yang memungkinkan pengguna untuk berbagi, menyimpan, dan menavigasi data dalam aplikasi React.

## Perbedaan URL State dengan State Lainnya

| URL State | Local/Global/Server State |
|---|---|
| Data tersimpan dalam URL browser. | Data tersimpan dalam memori aplikasi. |
| Bisa diakses dan dibagikan melalui URL. | Hanya dapat diakses dalam aplikasi. |
| Digunakan untuk navigasi, filter, dan pencarian. | Digunakan untuk state yang tidak perlu dibagikan melalui URL. |

## Cara Mengelola URL State

### Menggunakan `window.location`

Metode sederhana untuk membaca URL.

```
const currentURL = window.location.href;
console.log("Current URL:", currentURL);
```

### Menggunakan URLSearchParams

Digunakan untuk membaca dan mengubah query parameters.

```
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("q");
console.log("Search Query:", searchQuery);
```

### Menggunakan React Router

React Router menyediakan cara yang lebih baik untuk mengelola URL state.

```
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  const updateQuery = (newQuery) => {
    navigate(`?q=${newQuery}`);
  };

  return (
    
       updateQuery(e.target.value)}
      />
      Search for: {query}
    
  );
};
```

## Manfaat URL State

- **Dapat dibagikan:** Pengguna dapat menyimpan dan membagikan URL dengan state yang tetap.
- **Meningkatkan navigasi:** Pengguna dapat kembali ke halaman sebelumnya dengan state yang sama.
- **Memudahkan filter dan pencarian:** Parameter URL dapat digunakan untuk menyimpan filter pencarian.

## Contoh Penerapan

URL State sering digunakan dalam:

- Pencarian dan filter dalam aplikasi e-commerce.
- Menampilkan halaman berdasarkan ID di aplikasi berbasis konten.
- Melacak navigasi dalam aplikasi berbasis multi-step form.

## Kesalahan yang Sering Terjadi

- **Tidak menangani perubahan URL dengan baik:** Pastikan komponen dapat merespons perubahan query parameters.
- **Tidak meng-encode data dalam URL:** Gunakan `encodeURIComponent` untuk mencegah karakter tidak valid dalam URL.
- **Mengubah URL secara langsung tanpa React Router:** Gunakan `useNavigate` untuk memastikan UI tetap sinkron.

## Kesimpulan

URL State dalam ReactJS memungkinkan pengelolaan data dalam URL agar dapat dibagikan, disimpan, dan dinavigasi dengan mudah. Dengan menggunakan React Router dan `URLSearchParams`, pengembang dapat meningkatkan pengalaman pengguna dalam mengelola state berbasis URL secara efisien.
