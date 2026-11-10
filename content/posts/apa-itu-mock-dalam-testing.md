---
slug: "apa-itu-mock-dalam-testing"
title: "Apa itu Mock dalam Testing"
date: "2025-04-13"
published: "2025-04-13T13:02:00.000-07:00"
summary: "**Mock** adalah objek tiruan (simulasi) yang dibuat untuk meniru perilaku objek asli dalam pengujian perangkat lunak. Mock digunakan dalam pengujian unit (unit testing) untuk menggantikan..."
sourceUrl: "https://blog.programinglive.com/2025/04/apa-itu-mock-dalam-testing.html"
image: "/img/posts/apa-itu-mock-dalam-testing/3ada4f648e_Apa_20itu_20Mock_20dalam_20Testing.png"
categories:
  - "Backend"
wordCount: 451
---

![](/img/posts/apa-itu-mock-dalam-testing/3ada4f648e_Apa_20itu_20Mock_20dalam_20Testing.png)

## 1. Pengertian Mock dalam Testing

**Mock** adalah objek tiruan (simulasi) yang dibuat untuk meniru perilaku objek asli dalam pengujian perangkat lunak. Mock digunakan dalam pengujian unit (unit testing) untuk menggantikan dependensi eksternal atau bagian lain dari sistem yang tidak sedang diuji secara langsung.

## 2. Tujuan Penggunaan Mock

- **Mengisolasi kode yang diuji**: Fokus hanya pada satu bagian logika tanpa melibatkan dependensi nyata.
- **Meningkatkan kecepatan testing**: Karena tidak perlu memanggil database, API, atau komponen lain yang lambat.
- **Mencegah efek samping**: Seperti insert ke database, kirim email, atau request ke layanan pihak ketiga.
- **Memudahkan simulasi skenario ekstrem**: Seperti error dari server, timeout API, dll.

## 3. Mock vs Real Object

| Aspek | Real Object | Mock Object |
|---|---|---|
| Asli / Tiruan | Objek nyata yang berinteraksi dengan sistem lain | Tiruan yang dibuat untuk testing saja |
| Kecepatan | Lambat (bisa akses database, API) | Cepat karena hanya simulasi |
| Kontrol Output | Output tergantung kondisi nyata | Output bisa ditentukan sesuai kebutuhan test |

## 4. Contoh Penggunaan Mock

Misalnya kita punya class untuk mengirim email, dan kita ingin menguji metode `registerUser` tanpa benar-benar mengirim email:

```
// Kode asli
class EmailService {
    public function sendWelcome($email) {
        // Mengirim email sungguhan
    }
}

class UserService {
    protected $emailService;

    public function __construct(EmailService $emailService) {
        $this->emailService = $emailService;
    }

    public function registerUser($user) {
        // Simpan user ke DB
        $this->emailService->sendWelcome($user->email);
    }
}
```

Kode testing dengan mock (misalnya pakai PHPUnit):

```
$mockEmailService = $this->createMock(EmailService::class);
$mockEmailService->expects($this->once())
                 ->method('sendWelcome')
                 ->with('user@example.com');

$userService = new UserService($mockEmailService);
$user = (object)['email' => 'user@example.com'];
$userService->registerUser($user);
```

Pada contoh di atas, kita tidak benar-benar mengirim email — hanya mengecek apakah method `sendWelcome` dipanggil dengan parameter yang benar.

## 5. Framework Testing yang Mendukung Mock

- **PHPUnit** – Paling populer untuk PHP, termasuk fitur built-in untuk mocking.
- **Mockery** – Library mocking tambahan yang lebih fleksibel untuk PHP.
- **Jest** – Untuk JavaScript/Node.js.
- **Mockito** – Untuk Java dan Kotlin.
- **Sinon.js** – Untuk mocking dan spy di JavaScript.

## 6. Penggunaan Mock dalam Laravel

Laravel memiliki dukungan mock yang sangat baik, terutama jika kamu menggunakan **Pest** atau **PHPUnit**. Selain itu, Laravel juga mendukung:

- `Http::fake()` – Untuk mock HTTP request.
- `Mail::fake()` – Untuk mock pengiriman email.
- `Queue::fake()` – Untuk mock job antrian.
- `Event::fake()` – Untuk testing event listener tanpa benar-benar menjalankannya.

Contoh:

```
Mail::fake();

$user = User::factory()->create();
Notification::route('mail', $user->email)->notify(new WelcomeNotification());

Mail::assertSent(WelcomeNotification::class);
```

## 7. Kesimpulan

Mock adalah teknik penting dalam testing untuk mensimulasikan bagian dari sistem yang tidak sedang diuji secara langsung. Dengan menggunakan mock, pengujian bisa lebih cepat, lebih aman, dan lebih fokus. Laravel dan PHPUnit menyediakan alat yang sangat powerful untuk membuat dan mengelola mock dalam testing aplikasi.
