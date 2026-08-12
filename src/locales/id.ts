/**
 * Indonesian (ID) translations for the portfolio.
 * Istilah teknis (nama tools, nama project, CLI commands) tetap dalam Bahasa Inggris
 * untuk menjaga profesionalisme dan akurasi teknis.
 */

import type { Translations } from './en'

export const id: Translations = {
  // ─── Global UI ────────────────────────────────────────────────────────────
  portfolioLabel: 'Portofolio',
  activePanel: 'Panel aktif',

  // ─── Section labels ───────────────────────────────────────────────────────
  sectionLabels: {
    home: 'Halaman Utama',
    about: 'Identitas',
    stack: 'Keahlian & Teknologi',
    experience: 'Personal Branding',
    projects: 'Showcase Proyek',
    contact: 'Kontak & Tautan',
    reflection: 'Refleksi',
  },

  // ─── CommandDock navigation labels ───────────────────────────────────────
  dock: {
    home: 'Beranda',
    experience: 'Branding',
    about: 'Tentang Saya',
    stack: 'Keahlian & Teknologi',
    projects: 'Proyek',
    reflection: 'Refleksi',
    contact: 'Kontak',
  },

  // ─── HeroSection ─────────────────────────────────────────────────────────
  hero: {
    statusBadge: 'Terbuka untuk Peluang',
    greeting: 'Selamat datang di portofolio',
    title: 'DevOps Engineer',
    tagline:
      'Membangun infrastruktur yang andal melalui otomasi, container, dan continuous delivery. Jelajahi proyek, keahlian, dan personal branding saya.',
    quickNav: [
      {
        label: 'Personal Branding',
        description: 'Arah karir, keahlian, dan nilai-nilai dalam satu tampilan.',
      },
      {
        label: 'Showcase Proyek',
        description: 'Proyek nyata yang dibangun dengan tooling DevOps modern.',
      },
    ],
    ctaExplore: 'Mulai Eksplorasi',
    ctaContact: 'Hubungi Saya',
    exploreLink: 'Jelajahi',
  },

  // ─── AboutSection ─────────────────────────────────────────────────────────
  about: {
    sectionTag: 'Tentang Saya',
    sectionTitle: 'Engineer di balik proyek ini.',
    cards: {
      whoIAm: {
        title: 'Siapa Saya',
        body: [
          'Halo, saya Aditya Indra Wisnu, seorang lulusan sarjana Informatika dan penggemar DevOps Engineering. Perjalanan saya ke dunia DevOps dimulai dari rasa ingin tahu. Saya mengikuti kursus online dan Bootcamp untuk memahami bagaimana sistem nyata di-deploy, dipantau, dan diskalakan. Tanpa pengalaman kerja formal, saya mengandalkan eksperimentasi langsung dengan membangun cluster Kubernetes lokal, merancang pipeline CI/CD, dan mengotomasi infrastruktur untuk membangun keterampilan praktis yang sesuai dengan kebutuhan industri.',
          'Saya sangat bersemangat dalam CI/CD engineering, container orchestration, dan Infrastructure as Code. Tujuan saya adalah menjadi DevOps Engineer profesional yang menjembatani kesenjangan antara development dan operations, memastikan pengiriman perangkat lunak yang efisien, cepat, aman, dan andal. Saya percaya bahwa cara terbaik belajar adalah dengan membangun, merusak, dan membangun kembali. Saya juga sangat tertarik membangun sistem cerdas yang terintegrasi dengan AI.',
        ],
      },
      careerGoals: {
        title: 'Target Karir',
        body: 'Target jangka pendek saya adalah mendapatkan posisi Junior DevOps Engineer di mana saya dapat menerapkan dan mengembangkan pengalaman pembelajaran dan eksperimen homelab saya di lingkungan produksi. Jangka panjang, saya bercita-cita menjadi DevOps Automation Solution Architect, berfokus pada otomasi lanjutan dan integrasi AI untuk merancang infrastruktur yang tangguh, skalabel, cerdas, dan andal.',
      },
      interests: {
        title: 'Minat & Filosofi',
        body: 'Saya terpesona oleh arsitektur cloud-native, alur kerja GitOps, dan integrasi AI dalam ekosistem DevSecOps. Filosofi saya sederhana: "Otomasi yang rutin, fokus pada yang bermakna." Ketika tidak sedang mengonfigurasi pipeline atau men-debug sesuatu, saya mengeksplorasi tools open-source untuk DevOps dan AIOps, bereksperimen di homelab, atau membaca tentang sistem terdistribusi berbasis AI.',
      },
      background: {
        title: 'Latar Belakang & Pengalaman',
        body: 'Saya memiliki background pendidikan sarjana informatika yang memberikan fondasi kuat dalam algoritma dan arsitektur perangkat lunak. Untuk menjembatani kesenjangan antara teori akademis dan praktik industri, saya mengikuti kursus online khusus dan bootcamp DevOps. Selain itu, saya mendedikasikan diri pada rekayasa hands-on melalui homelab, memperlakukannya sebagai lingkungan produksi untuk membangun infrastruktur nyata dan pipeline CI/CD.',
      },
      coreSkills: {
        title: 'Keahlian Teknis Utama',
      },
    },
  },

  // ─── ExperienceSection (Personal Branding) ────────────────────────────────
  experience: {
    sectionTag: 'Personal Branding',
    sectionTitle: 'Pemetaan Strategis Karier dan Kompetensi',
    sectionDescription:
      'Sebelum menjelajahi implementasi teknis, membangun identitas profesional yang jelas sangatlah penting. Bagian ini mendefinisikan trajektori karir, keahlian inti, minat bidang, dan nilai-nilai fundamental yang mendorong pekerjaan saya.',
    cards: [
      {
        title: 'Target Peran / Karir',
        description:
          'DevOps Engineer dengan jalur pertumbuhan menuju peran Platform Engineer dan Site Reliability Engineer.',
      },
      {
        title: 'Keahlian Utama',
        description:
          'Merancang alur kerja CI/CD, mengelola platform Docker & Kubernetes, dan mengotomasi infrastruktur dengan Linux dan scripting (Bash, Python).',
      },
      {
        title: 'Kekuatan Utama',
        description:
          'Pola pikir otomasi yang kuat menghilangkan pekerjaan manual, membangun proses yang dapat diulang, dan terus meningkatkan pipeline pengiriman.',
      },
      {
        title: 'Minat dan Fokus',
        description:
          'Teknologi cloud-native, arsitektur Microservices, DevSecOps, dan AIOps untuk membangun dan mengoperasikan sistem yang andal, aman, skalabel, serta mendukung otomatisasi operasional.',
      },
      {
        title: 'Nilai yang Dijunjung Tinggi',
        description:
          'Pembelajaran berkelanjutan, keandalan & kualitas, efisiensi & kecepatan, serta kolaborasi transparan antar tim.',
      },
    ],
  },

  // ─── TechStackSection ────────────────────────────────────────────────────
  techStack: {
    sectionTag: 'Keahlian & Teknologi',
    sectionTitle: 'Toolkit yang mendukung proyek-proyek saya.',
    sectionDescription:
      'Kumpulan platform, tools, dan keahlian yang saya gunakan untuk membangun, men-deploy, dan mengoperasikan proyek.',
    levels: {
      Basic: 'Dasar',
      Intermediate: 'Menengah',
      Learning: 'Sedang Dipelajari',
    },
    clusters: [
      {
        title: 'Container & Orkestrasi',
        description: 'Workload terkontainerisasi, orkestrasi, dan deployment cloud-native.',
      },
      {
        title: 'CI/CD & Otomasi',
        description: 'Continuous integration, pipeline pengiriman, dan alur kerja otomatis.',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Provisioning dan manajemen konfigurasi melalui kode deklaratif.',
      },
      {
        title: 'Platform Cloud',
        description: 'Layanan cloud publik untuk komputasi, penyimpanan, dan jaringan.',
      },
      {
        title: 'Scripting & OS',
        description: 'Administrasi sistem, skrip otomasi, dan lingkungan runtime.',
      },
      {
        title: 'Observability & Monitoring',
        description: 'Melacak kesehatan sistem, metrik kinerja, dan log.',
      },
      {
        title: 'Soft Skills',
        description: 'Kekuatan non-teknis yang melengkapi pekerjaan engineering.',
        items: ['Pemecahan Masalah', 'Pembelajaran Berkelanjutan', 'Komunikatif', 'Kolaboratif', 'Adaptif'],
      },
    ],
  },

  // ─── ProjectsSection ─────────────────────────────────────────────────────
  projects: {
    sectionTag: 'Showcase Proyek',
    sectionTitle: 'Membangun sistem andal dari awal.',
    sectionDescription:
      'Pembahasan mendalam tentang proyek-proyek pilihan, mencakup tantangan yang muncul, arsitektur yang dipakai, dan dampak yang dirasakan.',
    labels: {
      background: 'Latar Belakang',
      challenge: 'Tantangan',
      solution: 'Solusi & Proses',
      impact: 'Dampak & Hasil',
      technologies: 'Teknologi yang Digunakan',
      viewRepo: 'Lihat Repository',
      role: 'Peran',
      featuredBadge: 'Spotlight Project',
    },
    items: [
      {
        background:
          'Di awal perjalanan saya, saya pernah mengalami sendiri masalah klasik "works on my machine". Aplikasi jalan mulus di lokal, tapi crash di lingkungan lain karena database belum siap saat aplikasi mulai berjalan. Cukup frustasi, dan jujur sedikit memalukan. Proyek ini saya bangun untuk benar-benar memahami Docker dengan serius, bukan sekadar dasarnya, tapi apa yang dibutuhkan agar setup terkontainerisasi bisa diandalkan di produksi. Saya pilih skenario yang nyata: layanan web Python dengan PostgreSQL, dan saya telusuri setiap edge case sampai semuanya berjalan bersih.',
        problem:
          'Masalah "berjalan di mesin saya" dan race condition, seperti aplikasi crash karena database belum siap saat booting, sering menyebabkan deployment gagal dan waktu henti.',
        role: 'DevOps Engineer: Merancang strategi kontainerisasi, menerapkan keamanan, dan mengatur orkestrasi menggunakan Docker Compose.',
        solution:
          'Saya menulis Dockerfile siap produksi menggunakan non-root user untuk meminimalkan ukuran image dan meningkatkan keamanan. Untuk orkestrasi, saya menggunakan Docker Compose dengan healthchecks (`pg_isready`) untuk memastikan urutan boot berjalan benar, sehingga aplikasi baru berjalan setelah database siap. Konfigurasi dan kredensial dipisahkan menggunakan file `.env` dan isolated bridge networks.',
        result:
          'Aplikasi kini berjalan konsisten di lokal maupun produksi. Race condition saat startup hilang karena database harus lulus healthcheck dulu sebelum aplikasi ikut berjalan. Kredensial dan konfigurasi tidak pernah masuk ke dalam image, dikelola lewat file `.env` dan jaringan yang terisolasi.',
      },
      {
        background:
          'Pernah suatu waktu saya mengelola lima repositori GitLab, masing-masing punya file CI/CD sendiri. Logika pipeline yang sama, disalin dan ditempel lima kali. Saat perlu memperbarui langkah security scan, saya harus masuk ke tiap repo satu per satu, berharap tidak ada yang terlewat. Kalau ada microservice baru, berarti menulis salinan lagi dari awal. Sampai di titik di mana memelihara pipeline menyita lebih banyak waktu daripada mengembangkannya. Akhirnya saya berhenti menyalin dan mulai memperlakukan pipeline seperti shared library, satu repositori yang didelegasikan oleh semua aplikasi.',
        problem:
          'Menduplikasi logika CI/CD di berbagai repository menyebabkan inkonsistensi, sehingga menambah aplikasi baru membutuhkan penyalinan pipeline yang rawan kesalahan. Selain itu, kredensial sering ditulis langsung di dalam manifest Kubernetes, yang menciptakan risiko bocornya kredensial rahasia di riwayat Git.',
        role: 'DevOps Engineer: Merancang arsitektur pipeline terpusat di repository `general-pipeline`, membuat template manifest Kubernetes dengan injeksi `envsubst`, mendelegasikan kepemilikan pipeline di pengaturan GitLab CI/CD, dan membuat multi-stage Docker build dengan Nginx non-root.',
        solution:
          'Saya memanfaatkan pengaturan "CI/CD Configuration File Path" di GitLab yang memungkinkan repository menggunakan `.gitlab-ci.yml` eksternal. Dengan menghubungkan CI/CD aplikasi ke repository `general-pipeline` pusat, setiap perubahan ke branch `alpha` langsung memicu pipeline tanpa menyimpan kode pipeline di dalam repository aplikasi itu sendiri. Manifest Kubernetes memuat variabel placeholder `${}` yang diisi oleh `envsubst` saat runtime melalui GitLab CI/CD Variables, sehingga kredensial tidak pernah menyentuh source code.',
        result:
          'Pipeline menjadi skalabel tanpa duplikasi kode. Menambahkan microservice baru hanya membutuhkan penyesuaian pengaturan GitLab tanpa perlu membuat file CI baru. Arsitektur terpusat ini mempercepat alur deployment hingga 70% dengan menghilangkan waktu pembuatan dan pemeliharaan skrip di tiap repo. Selain itu, injeksi dinamis `envsubst` dari GitLab CI/CD Variables saat runtime berhasil menghapus 100% hardcode kredensial rahasia dari manifest Kubernetes.',
      },
      {
        background:
          'Dulu menyiapkan server cloud artinya login ke AWS Console dan klik-klik wizard. Terasa cepat. Tapi begitu saya harus membangun ulang satu instance (setelah instansi diterminasi, atau konfigurasi berubah tanpa jejak) saya sadar tidak tahu persis konfigurasi awalnya seperti apa. Tidak ada catatan, tidak ada jaminan bisa direproduksi. Dari situlah saya mulai menulis infrastruktur sebagai kode, menggabungkan Terraform dan Ansible sehingga membangun ulang server tidak lebih dari dua perintah.',
        problem:
          'Penyiapan server manual sangat lambat dan tidak dapat diandalkan dalam skala besar. Tanpa kode, tim tidak bisa melakukan ulasan, tidak punya riwayat perubahan, dan tidak bisa menjamin replikasi server yang identik. Hal ini menyebabkan configuration drift, di mana perubahan kecil yang menumpuk membuat server mustahil direproduksi saat terjadi insiden.',
        role: 'DevOps Engineer: Membuat struktur file Terraform modular, menulis playbook Ansible yang idempoten, dan mengintegrasikan kedua tool tersebut melalui pembuatan inventory secara dinamis.',
        solution:
          'Saya memisahkan berbagai fungsi dalam 7 langkah otomatis. Terraform mengatur AWS Security Group, instance EC2 Ubuntu 22.04, dan kunci SSH RSA 4096-bit secara langsung dari kode. Saya menggunakan fungsi `local_file` dan `templatefile()` pada Terraform untuk menghasilkan `inventory.ini` yang memuat alamat IP publik tanpa intervensi manual segera setelah EC2 aktif. Selanjutnya, Ansible membaca inventory tersebut, masuk melalui SSH, menginstal Docker, lalu menjalankan container aplikasi Flask dari Docker Hub. Penggunaan variabel untuk pengaturan memastikan kode ini dapat digunakan di berbagai lingkungan.',
        result:
          'Membangun ulang server sekarang cukup dua perintah: `terraform apply` untuk menyiapkan sumber daya cloud dan `ansible-playbook` untuk mengonfigurasi host. Proses yang dulu memakan 30 menit dengan banyak klik manual kini selesai dalam kurang dari 8 menit, konsisten setiap kali.',
      },
      {
        background:
          'Codebase sudah berkembang jadi beberapa microservices (frontend, API gateway, autentikasi, analitik) dan di satu titik saya menyadari bahwa proses deployment-lah yang jadi bagian paling lemah. Setiap orang push perubahan dengan caranya sendiri. Tidak ada versioning yang konsisten, tidak ada sumber kebenaran tunggal. Cluster selalu berjarak satu hotfix manual dari kondisi yang tidak sinkron dengan Git. Saya tahu kami perlu berhenti mengandalkan pipeline untuk push dan mulai membiarkan Git yang menentukan kondisi produksi.',
        problem:
          'Pipeline CI/CD tradisional sering memerlukan akses tulis langsung ke cluster Kubernetes, yang menimbulkan risiko keamanan. Masalah lainnya adalah perbedaan antara kode dan server hidup yang terjadi ketika teknisi melakukan perbaikan kilat langsung ke cluster tanpa melalui Git. Ketidaksesuaian ini mengubah pemulihan bencana menjadi masalah yang sulit diprediksi.',
        role: 'DevOps Engineer: Merancang pipeline CI/CD terpusat, membuat Helm charts, dan menerapkan deployment GitOps berbasis pull dengan  untuk memastikan sinkronisasi berkelanjutan.',
        solution:
          'Saya membangun pipeline tunggal di GitLab CI/CD dengan Semantic Release sehingga semua microservices berbagi sistem pembuatan versi yang sama. Daripada mendorong (push) perubahan ke server, saya menggunakan pendekatan pull dengan ArgoCD yang memantau repository berisi Helm charts. ArgoCD bertindak sebagai pusat kebenaran dan memanfaatkan fitur Auto-Sync serta Self-Heal untuk memastikan cluster Kubernetes selalu selaras dengan kode di Git.',
        result:
          'Beralih ke model berbasis pull mencabut 100% akses tulis pipeline CI ke cluster, menutup vektor serangan utama. Fitur Self-Heal ArgoCD menghilangkan 100% perbedaan konfigurasi dengan mengembalikan perubahan langsunf pada cluster yang tidak sah dalam hitungan detik, sekaligus mempercepat pemulihan (MTTR) hingga 80% karena adanya fitur rollback instan.',
      },
      {
        background:
          'Setup manual di GCP awalnya terasa tidak masalah, sampai saya harus mengulanginya. Setiap kali prosesnya diulang untuk lingkungan baru atau setelah insiden, hasilnya sedikit berbeda dari sebelumnya. Saya mulai bertanya-tanya bagaimana orang bisa menjamin konsistensi antar lingkungan tanpa kode. Akhirnya saya membangun ulang seluruh setup menggunakan Terraform, dibagi ke beberapa modul untuk jaringan, komputasi, dan storage. Untuk mereproduksi lingkungan penuh sekarang cukup satu perintah.',
        problem:
          'Penyediaan sumber daya manual tidak memiliki jejak audit dan tidak dapat diulas oleh tim. Perbedaan konfigurasi sekecil apapun akan terakumulasi dari waktu ke waktu, sehingga lingkungan staging dan produksi berbeda dan menghambat skalabilitas.',
        role: 'DevOps Engineer: Menyusun struktur modular Terraform, membuat aturan firewall menggunakan iterator, dan memastikan kredensial terisolasi dengan aman.',
        solution:
          'Saya merancang Terraform dalam beberapa modul terpisah untuk jaringan, komputasi, dan penyimpanan. Alih-alih menulis aturan firewall satu per satu, saya memanfaatkan fungsi `for_each` Terraform untuk membentuk aturan akses secara rapi. Saya juga membangun VPC kustom dan Compute Engine yang mengeksekusi skrip startup untuk menjalankan server web Nginx saat booting. Data sensitif dan ID proyek dikelola terpisah di file `.tfvars`.',
        result:
          'Yang dulu membutuhkan serangkaian klik manual di konsol GCP sekarang berjalan dari satu perintah `terraform apply`. Waktu setup turun 80%, dan setiap lingkungan hasilnya identik karena kodenya tidak berubah antar-eksekusi. Configuration drift, yang jadi alasan utama proyek ini dibuat, bukan lagi jadi kekhawatiran.',
      },
      {
        background:
          'Core Banking Syariah (CBS) adalah sistem perbankan inti yang mengelola transaksi keuangan sensitif. Domain ini menuntut standar teknis yang ketat: zero downtime saat deployment, auditabilitas penuh pada setiap rilis, keamanan berlapis (shift-left security), dan konsistensi lintas lingkungan (DEV, UAT, PROD). Saya merancang dan membangun proyek mandiri ini untuk memenuhi tuntutan tingkat enterprise tersebut pada ekosistem microservices (Go, Java, Node.js, frontend) yang kompleks.',
        problem:
          'Membangun arsitektur platform DevOps dari nol untuk ekosistem multi-stack (Go, Java, Node.js, frontend) berarti harus memenuhi beberapa constraint secara bersamaan: keamanan harus diterapkan di setiap tahapan sejak awal bukan ditambahkan belakangan, setiap environment harus identik dan dapat direproduksi dari satu sumber, setiap rilis membutuhkan jejak audit yang lengkap, dan seluruh sistem harus berjalan tanpa langkah manual yang bisa dilewati atau terlupakan. Memenuhi semua itu sekaligus, bukan hanya satu atau dua, adalah inti dari tantangan arsitektur ini.',
        role: 'DevOps Engineer: Merancang dan mengimplementasikan arsitektur DevOps end-to-end untuk deployment microservices CBS, dengan fokus pada otomatisasi proses delivery, standardisasi deployment, dan pembangunan observability yang komprehensif.',
        solution:
          'Saya mempermudah pengelolaan siklus aplikasi, mulai dari pembuatan container hingga pemantauan saat berjalan. Layanan dari beragam bahasa pemrograman seperti Go, Java, Node.js, dan frontend kini memiliki standar pembuatan Docker yang seragam. Saya mengonfigurasi pipeline GitLab CI/CD terpusat untuk menjalankan pengujian otomatis, pemindaian keamanan, serta penerapan ke server. Untuk memudahkan kontrol perubahan, saya menerapkan alur kerja GitOps dan mengemas aplikasi dengan Helm yang disesuaikan untuk setiap lingkungan Kubernetes. Terakhir, saya membangun sistem observasi menggunakan Prometheus, Grafana, Loki, OpenTelemetry, dan Grafana Beyla yang memberi tim laporan kesehatan aplikasi secara menyeluruh.',
        result:
          'Dengan satu pipeline GitLab CI/CD yang menangani semua tahapan dari build hingga rilis, release lead time (waktu dari commit kode hingga deployment ke produksi) turun 60%. Setiap tahapan menjalankan pemindaian keamanan shift-left dan membutuhkan approval gate sebelum bisa lanjut ke tahap berikutnya. Helm dan GitOps menyelesaikan masalah konsistensi, setiap environment mengambil konfigurasinya dari Git, sehingga staging dan produksi selalu sinkron tanpa rekonsiliasi manual. Di sisi monitoring, Prometheus, Grafana Beyla, dan Loki memastikan bahwa saat insiden dilaporkan, datanya sudah tersedia. Mendiagnosis masalah cukup dengan membuka dashboard, dan MTTR turun 50%.',
      },
    ],
  },

  // ─── ContactSection ───────────────────────────────────────────────────────
  contact: {
    sectionTag: 'Kontak',
    sectionTitle: 'Mari membangun sesuatu bersama.',
    sectionDescription:
      'Punya pertanyaan, ide proyek, atau sekadar ingin membahas infrastruktur dan otomatisasi? Kotak masuk saya selalu terbuka.',
  },

  // ─── ReflectionSection ────────────────────────────────────────────────────
  reflection: {
    sectionTag: 'Refleksi',
    sectionTitle: 'Menoleh ke Belakang, Melangkah ke Depan.',
    sectionDescription:
      'Refleksi singkat tentang perjalanan belajar saya, tantangan yang saya hadapi, dan ke mana saya akan melangkah selanjutnya.',
    items: [
      {
        question: 'Tantangan Terbesar',
        answer:
          'Tantangan utamanya adalah mengemas pekerjaan DevOps berupa skrip terminal, pipeline CI/CD, dan observabilitas kompleks ke dalam visualisasi serta narasi teknis yang mudah dipahami oleh audiens.',
      },
      {
        question: 'Proyek yang Paling Representatif',
        answer:
          'Proyek End-to-End DevOps & Observability for Core Banking System (CBS) adalah proyek yang paling mewakili kemampuan saya. Proyek ini mengintegrasikan seluruh rantai teknologi DevOps modern mulai dari otomatisasi CI/CD, GitOps berbasis Helm, pemindaian DevSecOps (SonarQube & Trivy), hingga observabilitas mendalam dengan Prometheus, Grafana, Loki, dan eBPF (Grafana Beyla).',
      },
      {
        question: 'Keahlian yang Paling Berkembang',
        answer:
          'Keahlian saya dalam analisis sistem, troubleshooting, dan observabilitas meningkat pesat. Membangun pipeline terintegrasi serta memantau metrik dan trace secara real-time menggunakan OpenTelemetry & eBPF membuat saya jauh lebih percaya diri dalam mendiagnosis masalah infrastruktur kompleks.',
      },
      {
        question: 'Area Pertumbuhan ke Depan',
        answer:
          'Ke depannya, saya ingin mendalami AIOps (integrasi AI untuk otomatisasi operasional), Advanced Cloud & Container Security (CKS), serta Service Mesh (Istio). Saya juga membidik sertifikasi profesional seperti AWS Certified Solutions Architect dan CKA untuk memvalidasi pengetahuan praktis saya.',
      },
      {
        question: 'Mengapa Portofolio Ini Penting',
        answer:
          'Resume saya berisi daftar keahlian, sedangkan portofolio ini mendemonstrasikan secara langsung cara saya menerapkan kemampuan itu di dunia nyata. Sebagai fresh graduate, portofolio ini menunjukkan bahwa pengalaman praktis saya sejalan dengan standar industri, dan saya siap berkontribusi secara langsung.',
      },
    ],
  },
}
