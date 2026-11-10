---
slug: "tipe-data-dalam-typescript"
title: "Tipe Data Dalam TypeScript"
date: "2025-03-18"
published: "2025-03-18T13:17:00.000-07:00"
summary: "TypeScript, sebagai superset dari JavaScript, menambahkan fitur static typing. Ini berarti setiap variabel, parameter fungsi, dan nilai kembalian fungsi memiliki tipe data yang jelas...."
sourceUrl: "https://blog.programinglive.com/2025/03/tipe-data-dalam-typescript.html"
image: "/img/posts/tipe-data-dalam-typescript/5ebef8cc54_Tipe_20Data_20Dalam_20TypeScript.png"
categories:
  - "Frontend"
wordCount: 1450
---

![](/img/posts/tipe-data-dalam-typescript/5ebef8cc54_Tipe_20Data_20Dalam_20TypeScript.png)

## Pendahuluan

TypeScript, sebagai superset dari JavaScript, menambahkan fitur static typing. Ini berarti setiap variabel, parameter fungsi, dan nilai kembalian fungsi memiliki tipe data yang jelas. Pendefinisian tipe data ini membantu mencegah kesalahan saat runtime, meningkatkan code readability, dan memfasilitasi refactoring. Memahami berbagai tipe data dalam TypeScript adalah kunci untuk menulis kode yang lebih robust dan mudah dipelihara.

## Tipe Data Dasar

TypeScript menyediakan beberapa tipe data dasar yang mirip dengan JavaScript, tetapi dengan penambahan beberapa tipe yang lebih spesifik.

### Boolean

Tipe data `boolean` mewakili nilai kebenaran, yaitu `true` atau `false`.

```
let isDone: boolean = false;
let isEnabled: boolean = true;
```

### Number

Tipe data `number` mewakili angka, baik integer maupun floating-point. TypeScript, seperti JavaScript, tidak membedakan antara integer dan floating-point.

```
let decimal: number = 6;
let integer: number = 7;
let floatingPoint: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### String

Tipe data `string` mewakili teks. String dapat dideklarasikan menggunakan tanda kutip tunggal (`'`), tanda kutip ganda (`"`), atau template literals (``).

```
let color: string = "blue";
let fullName: string = 'John Doe';
let sentence: string = `Hello, my name is ${ fullName }.`;
```

### Array

Tipe data `array` mewakili kumpulan nilai dengan tipe data yang sama. Ada dua cara untuk mendeklarasikan tipe array:

- Menggunakan tipe data elemen diikuti dengan `[]`.
- Menggunakan generic type `Array`.

```
let list1: number[] = [1, 2, 3];
let list2: Array = [1, 2, 3];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### Tuple

Tipe data `tuple` mewakili array dengan jumlah elemen yang tetap dan tipe data elemen yang mungkin berbeda. Tuple berguna ketika Anda ingin merepresentasikan struktur data yang memiliki urutan dan tipe data yang spesifik.

```
let person: [string, number] = ["John", 30];
// person[0] akan bertipe string
// person[1] akan bertipe number
```

Perhatikan bahwa TypeScript akan memberikan error jika Anda mencoba mengakses elemen di luar panjang tuple atau memberikan nilai dengan tipe data yang salah.

### Enum

Tipe data `enum` mewakili kumpulan nilai bernama (enumerasi). Enum berguna untuk mendefinisikan set konstanta yang terkait satu sama lain.

```
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green; // c bernilai 1 (secara default, dimulai dari 0)

enum StatusCode {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}

let status: StatusCode = StatusCode.NotFound; // status bernilai 404
```

### Any

Tipe data `any` mewakili tipe data apa pun. Menggunakan `any` akan menonaktifkan type checking untuk variabel tersebut. Gunakan `any` dengan hati-hati, karena dapat mengurangi manfaat dari menggunakan TypeScript.

```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

`any` berguna dalam situasi di mana Anda tidak tahu tipe data variabel pada saat kompilasi, atau ketika Anda bermigrasi dari JavaScript ke TypeScript secara bertahap.

### Void

Tipe data `void` mewakili tidak adanya nilai. Biasanya digunakan sebagai tipe kembalian fungsi yang tidak mengembalikan nilai apa pun.

```
function warnUser(): void {
  console.log("This is a warning message");
}
```

Anda juga dapat mendeklarasikan variabel bertipe `void`, tetapi hanya dapat diberikan nilai `null` atau `undefined` (hanya jika `--strictNullChecks` tidak diaktifkan).

### Null dan Undefined

Tipe data `null` dan `undefined` masing-masing mewakili nilai null dan undefined. Secara default, `null` dan `undefined` adalah subtype dari semua tipe data lain. Namun, dengan mengaktifkan opsi `--strictNullChecks`, `null` dan `undefined` hanya dapat diberikan ke tipe data `any` dan tipe data mereka sendiri.

```
let u: undefined = undefined;
let n: null = null;

// Dengan --strictNullChecks diaktifkan:
let x: number | undefined = undefined; // OK
let y: number = null; // Error
```

### Never

Tipe data `never` mewakili tipe data yang tidak pernah terjadi. Biasanya digunakan sebagai tipe kembalian fungsi yang selalu melempar error atau tidak pernah selesai dieksekusi.

```
// Fungsi yang selalu melempar error
function error(message: string): never {
  throw new Error(message);
}

// Fungsi yang tidak pernah selesai dieksekusi
function infiniteLoop(): never {
  while (true) {}
}
```

### Object

Tipe data `object` mewakili tipe non-primitif, yaitu segala sesuatu yang bukan `number`, `string`, `boolean`, `symbol`, `null`, atau `undefined`.

```
let obj: object = { name: "John", age: 30 };
```

Perhatikan bahwa `object` hanya menyatakan bahwa variabel adalah objek, tetapi tidak memberikan informasi lebih lanjut tentang properti objek tersebut. Untuk mendefinisikan struktur objek yang lebih spesifik, gunakan interface atau type aliases (akan dibahas di bagian selanjutnya).

## Tipe Data Lanjutan

Selain tipe data dasar, TypeScript juga menyediakan beberapa tipe data lanjutan yang memungkinkan Anda mendefinisikan tipe data yang lebih kompleks dan fleksibel.

### Union Types

Union types memungkinkan sebuah variabel atau parameter fungsi untuk memiliki beberapa tipe data yang berbeda.

```
let code: string | number = 123;
code = "ABC";
```

Dalam contoh di atas, variabel `code` dapat bertipe `string` atau `number`. Anda dapat menggunakan operator `|` untuk menggabungkan beberapa tipe data menjadi union type.

### Intersection Types

Intersection types menggabungkan beberapa tipe data menjadi satu tipe data baru yang memiliki semua properti dari tipe data yang digabungkan.

```
interface Person {
  name: string;
}

interface Loggable {
  log(): void;
}

type LoggablePerson = Person & Loggable;

let person: LoggablePerson = {
  name: "John",
  log: () => console.log("Name: John"),
};
```

Dalam contoh di atas, tipe data `LoggablePerson` memiliki properti `name` dari interface `Person` dan method `log` dari interface `Loggable`. Anda dapat menggunakan operator `&` untuk menggabungkan beberapa tipe data menjadi intersection type.

### Literal Types

Literal types memungkinkan Anda menentukan nilai spesifik yang dapat diberikan ke variabel atau parameter fungsi.

```
type Direction = "North" | "East" | "South" | "West";

let direction: Direction = "North"; // OK
// let direction: Direction = "Northeast"; // Error
```

Dalam contoh di atas, variabel `direction` hanya dapat diberikan nilai "North", "East", "South", atau "West". Literal types berguna untuk membatasi nilai yang valid untuk variabel atau parameter fungsi.

### Type Aliases

Type aliases memungkinkan Anda memberikan nama alias untuk tipe data yang sudah ada. Type aliases berguna untuk menyederhanakan tipe data yang kompleks atau untuk memberikan nama yang lebih deskriptif.

```
type StringOrNumber = string | number;

let code: StringOrNumber = 123;
code = "ABC";
```

Dalam contoh di atas, tipe alias `StringOrNumber` mendefinisikan union type yang dapat bertipe `string` atau `number`. Anda dapat menggunakan keyword `type` untuk mendefinisikan type alias.

## Type Inference (Inferensi Tipe)

TypeScript memiliki fitur type inference, yang memungkinkan compiler untuk menyimpulkan tipe data variabel atau parameter fungsi secara otomatis berdasarkan nilai yang diberikan atau konteks penggunaannya.

```
let message = "Hello, TypeScript!"; // TypeScript akan menyimpulkan bahwa message bertipe string

function add(x: number, y: number) {
  return x + y; // TypeScript akan menyimpulkan bahwa tipe kembalian fungsi add adalah number
}
```

Meskipun type inference dapat mengurangi boilerplate code, disarankan untuk secara eksplisit mendeklarasikan tipe data untuk variabel dan parameter fungsi, terutama dalam kode yang kompleks. Ini akan meningkatkan code readability dan mencegah kesalahan yang tidak terduga.

## Type Assertions (Asersi Tipe)

Type assertions memungkinkan Anda untuk memberitahu compiler TypeScript tentang tipe data variabel atau ekspresi secara manual. Type assertions berguna ketika Anda tahu lebih banyak tentang tipe data variabel daripada yang diketahui oleh compiler.

```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

let strLength2: number = (someValue).length; // Sintaks alternatif
```

Ada dua cara untuk melakukan type assertions:

- Menggunakan keyword `as`.
- Menggunakan sudut kurung (`<>`).

Perhatikan bahwa type assertions tidak mengubah tipe data variabel pada saat runtime. Type assertions hanya memberitahu compiler untuk memperlakukan variabel seolah-olah memiliki tipe data tertentu.

## Tips Penggunaan Tipe Data

Berikut adalah beberapa tips untuk menggunakan tipe data dalam TypeScript secara efektif:

- **Gunakan tipe data eksplisit:** Meskipun type inference dapat membantu, sebaiknya deklarasikan tipe data secara eksplisit untuk variabel, parameter fungsi, dan nilai kembalian fungsi.
- **Manfaatkan interface dan type aliases:** Gunakan interface dan type aliases untuk mendefinisikan struktur data yang kompleks dan untuk memberikan nama yang lebih deskriptif untuk tipe data.
- **Gunakan union types dan intersection types:** Gunakan union types dan intersection types untuk mendefinisikan tipe data yang lebih fleksibel dan untuk merepresentasikan hubungan antara tipe data yang berbeda.
- **Gunakan literal types:** Gunakan literal types untuk membatasi nilai yang valid untuk variabel atau parameter fungsi.
- **Gunakan type assertions dengan hati-hati:** Hanya gunakan type assertions ketika Anda yakin bahwa Anda tahu lebih banyak tentang tipe data variabel daripada yang diketahui oleh compiler.

## Penutup

Memahami berbagai tipe data dalam TypeScript adalah kunci untuk menulis kode yang lebih robust, mudah dibaca, dan mudah dipelihara. Dengan memanfaatkan fitur-fitur static typing yang ditawarkan oleh TypeScript, Anda dapat mencegah kesalahan saat runtime, meningkatkan code readability, dan memfasilitasi refactoring. Teruslah berlatih dan bereksperimen dengan berbagai tipe data dalam TypeScript untuk memperdalam pemahaman Anda.
