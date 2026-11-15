export interface PrivacyPolicySection {
  id: string
  number: number
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export const PRIVACY_POLICY_META = {
  title: 'Kebijakan Privasi',
  lastUpdated: '16 November 2026',
  contactEmail: 'creative@programinglive.com',
  websiteUrl: 'https://programinglive.com',
} as const

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    id: 'pendahuluan',
    number: 1,
    title: 'Pendahuluan',
    paragraphs: [
      'ProgramingLive ("kami") mengelola situs web https://programinglive.com serta layanan integrasi teknis terkait untuk mendukung kegiatan pembelajaran teknologi, kolaborasi komunitas, dan komunikasi operasional. Kebijakan Privasi ini menjelaskan secara transparan bagaimana informasi diproses saat Anda mengakses situs web kami atau berinteraksi melalui saluran WhatsApp Business resmi ProgramingLive.',
      'Kami menyusun kebijakan ini berdasarkan praktik pemrosesan data aktual yang berjalan pada sistem kami, tanpa klaim yang melebihi kemampuan teknis yang telah diverifikasi.',
    ],
  },
  {
    id: 'informasi-yang-kami-proses',
    number: 2,
    title: 'Informasi yang Kami Proses',
    paragraphs: [
      'Jenis informasi yang diproses bergantung pada bagaimana Anda berinteraksi dengan layanan ProgramingLive:',
    ],
    bullets: [
      'Interaksi melalui situs web programinglive.com: permintaan HTTP standar yang diperlukan oleh penyedia hosting untuk menyajikan halaman web secara aman melalui HTTPS. Kami tidak menambahkan skrip pelacakan analitik pihak ketiga atau iklan pada halaman kebijakan ini.',
      'Interaksi melalui WhatsApp Business Platform: saat pesan atau pembaruan status pengiriman dikirim melalui Meta WhatsApp Cloud API, payload webhook dari Meta dapat memuat pengenal pesan (message ID), jenis peristiwa (pesan atau status), stempel waktu, serta metadata akun WhatsApp Business.',
      'Korespondensi email: jika Anda menghubungi kami melalui creative@programinglive.com, kami menerima alamat email, subjek, dan isi pesan yang Anda kirimkan secara sukarela.',
    ],
  },
  {
    id: 'tujuan-penggunaan-informasi',
    number: 3,
    title: 'Tujuan Penggunaan Informasi',
    paragraphs: [
      'Informasi yang diproses digunakan secara terbatas untuk tujuan berikut:',
    ],
    bullets: [
      'Menyajikan halaman informasi, materi pembelajaran, dan dokumentasi publik di programinglive.com.',
      'Menerima, memverifikasi keaslian, dan memantau kesehatan teknis peristiwa webhook dari WhatsApp Business Platform.',
      'Mencegah pemrosesan peristiwa duplikat serta menjaga keandalan dan keamanan infrastruktur layanan.',
      'Menanggapi pertanyaan pembelajaran, kolaborasi, atau permintaan terkait privasi yang dikirimkan ke kontak resmi kami.',
    ],
  },
  {
    id: 'integrasi-whatsapp-business-platform',
    number: 4,
    title: 'Integrasi WhatsApp Business Platform',
    paragraphs: [
      'ProgramingLive menggunakan integrasi resmi Meta WhatsApp Business Platform (Cloud API) untuk menerima peristiwa webhook pada titik akhir HTTPS khusus. Penerima webhook kami memproses peristiwa secara pasif dan tidak mengirimkan balasan otomatis atau pesan pemasaran massal.',
      'Pada tingkat penerima webhook, sistem kami melakukan ekstraksi metadata diagnostik minimal berupa jenis peristiwa (pesan atau status pengiriman), bidang langganan, ID peristiwa, tipe pesan atau status, dan stempel waktu. Sistem penerima webhook kami tidak mencatat isi lengkap pesan pelanggan maupun nomor telepon pengirim ke dalam log aplikasi.',
    ],
  },
  {
    id: 'penyimpanan-dan-keamanan-data',
    number: 5,
    title: 'Penyimpanan dan Keamanan Data',
    paragraphs: [
      'Kami menerapkan langkah-langkah pengamanan teknis berikut sesuai arsitektur yang terpasang:',
    ],
    bullets: [
      'Seluruh komunikasi publik menuju situs web dan titik akhir webhook dilindungi enkripsi transport HTTPS.',
      'Setiap permintaan POST ke webhook WhatsApp wajib lolos verifikasi tanda tangan kriptografis HMAC-SHA256 (header X-Hub-Signature-256) menggunakan perbandingan waktu konstan sebelum payload diproses.',
      'Layanan webhook dijalankan di server infrastruktur terisolasi sebagai layanan sistem (systemd) dengan identitas pengguna khusus yang tidak memiliki hak root, terikat pada antarmuka lokal (localhost) di balik terowongan aman Cloudflare.',
      'Rahasia konfigurasi (token verifikasi dan app secret) disimpan terpisah dalam berkas lingkungan dengan izin akses terbatas dan tidak pernah dicatat ke dalam log.',
      'Pencatatan log webhook bersifat terstruktur dan teredaksi (hanya metadata diagnostik non-sensitif). Untuk mencegah duplikasi, ID peristiwa disimpan sementara di memori (in-memory) selama maksimal 15 menit (dibatasi hingga 10.000 entri) dan tidak disimpan ke dalam basis data permanen oleh layanan penerima webhook.',
    ],
  },
  {
    id: 'berbagi-informasi-dengan-pihak-ketiga',
    number: 6,
    title: 'Berbagi Informasi dengan Pihak Ketiga',
    paragraphs: [
      'ProgramingLive tidak menjual, menyewakan, atau memperdagangkan data pribadi kepada pihak ketiga. Pemrosesan teknis dapat melibatkan penyedia infrastruktur berikut sesuai fungsi layanannya:',
    ],
    bullets: [
      'Meta Platforms, Inc. — sebagai penyedia WhatsApp Business Platform (Cloud API) yang mengirimkan dan memproses lalu lintas pesan WhatsApp.',
      'Netlify — sebagai penyedia hosting untuk situs web publik programinglive.com.',
      'Cloudflare — sebagai penyedia jaringan DNS dan terowongan HTTPS aman untuk konektivitas layanan.',
      'Google Cloud Platform — sebagai penyedia infrastruktur mesin virtual yang menjalankan layanan penerima webhook.',
    ],
  },
  {
    id: 'penyimpanan-dan-penghapusan-data',
    number: 7,
    title: 'Penyimpanan dan Penghapusan Data',
    paragraphs: [
      'Layanan penerima webhook ProgramingLive tidak menyimpan riwayat percakapan WhatsApp ke dalam basis data permanen. Data deduplikasi peristiwa hanya berada di memori sementara selama jendela waktu 15 menit.',
      'Log layanan sistem pada infrastruktur server hanya memuat metadata diagnostik teredaksi (tanpa isi pesan atau nomor telepon) dan mengikuti rotasi log sistem standar infrastruktur. Jika Anda pernah mengirimkan korespondensi melalui email resmi kami dan ingin meminta penghapusan arsip email tersebut, Anda dapat mengajukan permintaan ke creative@programinglive.com.',
    ],
  },
  {
    id: 'hak-pengguna',
    number: 8,
    title: 'Hak Pengguna',
    paragraphs: [
      'Anda memiliki hak untuk meminta penjelasan mengenai pemrosesan data yang terkait dengan interaksi Anda bersama ProgramingLive, meminta koreksi atas informasi korespondensi yang tidak akurat, atau meminta penghapusan data korespondensi yang kami simpan.',
      'Untuk mengajukan permintaan tersebut, silakan hubungi kami melalui email resmi di creative@programinglive.com dengan menyertakan informasi yang cukup agar kami dapat memverifikasi dan menindaklanjuti permintaan Anda secara wajar.',
    ],
  },
  {
    id: 'privasi-anak',
    number: 9,
    title: 'Privasi Anak',
    paragraphs: [
      'Materi pembelajaran publik di programinglive.com dapat diakses tanpa pembuatan akun wajib. Layanan integrasi WhatsApp Business ProgramingLive tidak ditujukan untuk mengumpulkan data pribadi anak di bawah umur secara sengaja. Jika Anda mengetahui adanya informasi pribadi anak yang dikirimkan kepada kami tanpa persetujuan orang tua atau wali yang sah, hubungi creative@programinglive.com agar kami dapat menindaklanjuti penghapusannya.',
    ],
  },
  {
    id: 'perubahan-kebijakan-privasi',
    number: 10,
    title: 'Perubahan Kebijakan Privasi',
    paragraphs: [
      'Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu apabila terjadi perubahan pada sistem teknis, integrasi layanan, atau ketentuan operasional ProgramingLive. Setiap pembaruan akan dipublikasikan langsung pada halaman ini disertai tanggal pembaruan terakhir di bagian atas dokumen.',
    ],
  },
  {
    id: 'hubungi-kami',
    number: 11,
    title: 'Hubungi Kami',
    paragraphs: [
      'Jika Anda memiliki pertanyaan, masukan, atau permintaan terkait Kebijakan Privasi ini maupun praktik perlindungan data di ProgramingLive, silakan hubungi kami melalui saluran resmi berikut:',
    ],
    bullets: [
      'Email: creative@programinglive.com',
      'Situs web: https://programinglive.com/contact',
    ],
  },
]
