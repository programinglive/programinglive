---
slug: "kenapa-perlu-mock-dalam-testing"
title: "Kenapa Perlu Mock dalam Testing"
date: "2025-04-13"
published: "2025-04-13T13:14:00.000-07:00"
summary: "Saat menulis **unit test**, kita hanya ingin menguji satu bagian logika saja — bukan keseluruhan sistem. Masalahnya, kadang logika itu bergantung pada service lain seperti database, email, atau..."
sourceUrl: "https://blog.programinglive.com/2025/04/kenapa-perlu-mock-dalam-testing.html"
image: "/img/posts/kenapa-perlu-mock-dalam-testing/6e1d7f6730_apa_20Perlu_20Mock_20dalam_20Testing.png"
categories:
  - "Backend"
wordCount: 340
---

![](/img/posts/kenapa-perlu-mock-dalam-testing/6e1d7f6730_apa_20Perlu_20Mock_20dalam_20Testing.png)

## 1. Pengantar

Saat menulis **unit test**, kita hanya ingin menguji satu bagian logika saja — bukan keseluruhan sistem. Masalahnya, kadang logika itu bergantung pada service lain seperti database, email, atau API. Nah, di sinilah **mock** berperan.

## 2. Alasan Kenapa Mock Diperlukan

- **Menghindari ketergantungan eksternal**: Misalnya server API sedang down, testing tetap jalan.
- **Menguji skenario khusus**: Seperti respon gagal dari payment gateway.
- **Lebih cepat**: Tidak butuh koneksi database, API, atau filesystem.
- **Lebih aman**: Tidak akan mengirim email sungguhan atau menyimpan file asli saat testing.
- **Isolasi logika**: Fokus pada satu fungsi/metode tanpa efek samping dari class lain.

## 3. Contoh Kasus Tanpa Mock

```
// Service Asli
class PaymentService {
    public function charge($user, $amount) {
        // Terhubung ke payment gateway
    }
}

class OrderController {
    public function checkout(Request $request) {
        $payment = new PaymentService();
        $payment->charge(auth()->user(), 100000);
    }
}
```

Kalau kamu test class `OrderController` seperti ini, kamu akan benar-benar menjalankan transaksi ke payment gateway — tidak efisien dan berisiko.

## 4. Contoh Kasus Dengan Mock

```
$mock = \Mockery::mock(PaymentService::class);
$mock->shouldReceive('charge')->once()->with($user, 100000);

$this->app->instance(PaymentService::class, $mock);

$response = $this->actingAs($user)->post('/checkout');
$response->assertStatus(200);
```

Dengan mock, kamu bisa menguji bahwa fungsi `charge()` dipanggil dengan benar, tanpa benar-benar membayar.

## 5. Manfaat Menggunakan Mock

- **Mengontrol alur testing** dengan prediksi hasil dari method yang dimock.
- **Mengetahui apakah fungsi dipanggil**, berapa kali, dan dengan argumen apa.
- **Menghindari dependensi mahal** seperti database, API, filesystem, email server, dll.

## 6. Mock di Laravel

Laravel punya banyak fitur untuk mocking secara built-in, contohnya:

- `Mail::fake()` – Cegah email asli terkirim
- `Http::fake()` – Mock HTTP request
- `Event::fake()` – Cegah event listener dijalankan
- `Queue::fake()` – Cegah job dikirim ke queue

Contoh Mocking Email:

```
Mail::fake();

$this->post('/register', [
    'name' => 'Test',
    'email' => 'test@example.com',
]);

Mail::assertSent(WelcomeMail::class);
```

## 7. Kesimpulan

Mock sangat penting dalam unit testing karena membantu kita menguji bagian kecil dari sistem tanpa tergantung pada hal-hal eksternal. Dengan mock, testing jadi lebih cepat, stabil, dan mudah dikontrol. Laravel sudah menyediakan berbagai fitur mock siap pakai untuk mempercepat pengembangan dan pengujian aplikasi.
