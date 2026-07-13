# Apps Assignment: CI/CD Integrated Web Application

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitLab CI](https://img.shields.io/badge/gitlab%20ci-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

🌎 **Language:** [Bahasa Indonesia](#bahasa-indonesia) | [English](#english)

---

<a id="bahasa-indonesia"></a>
## Tentang Repository

Selamat datang di repositori **Apps Assignment**. Repositori ini berisi kode sumber untuk aplikasi web yang dikerjakan pada proyek **Pipeline Optimization & Secret Management**. Proyek ini mendemonstrasikan proses deployment aplikasi web sederhana secara otomatis pada klaster Kubernetes menggunakan GitLab CI dengan pipeline CI/CD terpusat, serta best practice manajemen secret menggunakan GitLab CI/CD Variables.

### 📋 Daftar Isi
- [Gambaran Proyek](#gambaran-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Kubernetes Manifests](#kubernetes-manifests)
- [Integrasi CI/CD Terpusat](#integrasi-cicd-terpusat)
- [Pengembangan Lokal](#pengembangan-lokal)

### 🚀 Gambaran Proyek
Proyek ini adalah aplikasi web sederhana yang dirancang untuk memvalidasi alur deployment (pipeline). Tujuannya adalah agar setiap pembaruan (*push*) pada repositori ini akan secara otomatis di-*build*, dikemas dalam container, dan di-deploy ke klaster Kubernetes tanpa perlu mengelola script pipeline secara lokal di repositori ini.

### 🛠 Teknologi yang Digunakan
- **Aplikasi Frontend:** HTML, Node.js (untuk tooling), TailwindCSS
- **Web Server:** Nginx (dikonfigurasi melalui `nginx.conf`)
- **Containerization:** Docker (`Dockerfile` *multi-stage build*)
- **Orkestrasi:** Kubernetes (K3s)

### ☸️ Kubernetes Manifests
Konfigurasi *deployment* disimpan secara aman di dalam folder `k8s-manifest/`. Nilai-nilai di dalam file YAML ini akan diisi secara otomatis dengan Environment Variables selama eksekusi pipeline CI/CD menggunakan command `envsubst`, sehingga menghindari risiko penulisan *credentials* secara permanen (*hardcoded*).

- `deployment.yaml`: Mendefinisikan status/bentuk *Pods* aplikasi (Jumlah Replicas, Image yang digunakan, Ports).
- `services.yaml`: Mengekspos aplikasi secara internal di dalam klaster Kubernetes sebagai layanan jaringan (network service).
- `ingress.yaml`: Mengatur rute HTTP agar aplikasi dapat diakses publik melalui domain tertentu.
- `secret.yaml`: Menginjeksikan environment variables yang bersifat rahasia ke dalam *Pods* aplikasi secara aman.

### 🔄 Integrasi CI/CD Terpusat
> [!IMPORTANT]
> **Pemberitahuan:** Anda tidak akan menemukan file `.gitlab-ci.yml` di dalam repositori ini.

Repositori ini mengimplementasikan pendekatan **Centralized CI/CD (CI/CD Terpusat)**. Logika CI/CD diatur sepenuhnya oleh repositori [General Pipeline](https://gitlab.com/tutorial-ci-dibimbing/aditya-assignment-group/general-pipeline).

**Cara Kerja:**
1. Jalur Konfigurasi CI/CD untuk repositori ini pada setelan GitLab (Settings > CI/CD > General Pipelines) diarahkan ke file `.gitlab-ci.yml` milik repositori `general-pipeline`.
2. Setiap kali ada **push** ke branch `alpha`, GitLab akan memicu pipeline terpusat tersebut. Pipeline akan secara otomatis membuat docker image, mengunggahnya ke **GitLab Container Registry**, dan memperbarui penerapan Kubernetes manifests ke cluster.

### 💻 Pengembangan Lokal
Jika Anda ingin menjalankan aplikasi secara lokal di komputer tanpa Kubernetes:

#### Menggunakan Docker
1. **Install dependensi:**
   ```bash
   npm install
   ```
2. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```
3. **Build Docker container:**
   ```bash
   docker build -t apps-assignment:latest .
   ```
4. **Jalankan container:**
   ```bash
   docker run -p 8080:8080 apps-assignment:latest
   ```
   Aplikasi dapat diakses di http://localhost:8080
---

<a id="english"></a>
## About Repository

Welcome to the **Apps Assignment** repository. This project contains the source code for a web application assigned during the **Pipeline Optimization & Secret Management** project. This project demonstrates the process of automated deployment of a simple web application on a Kubernetes cluster using GitLab CI with a centralized CI/CD pipeline, as well as best practice secret management using GitLab CI/CD Variables.

### 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Kubernetes Manifests](#kubernetes-manifests-1)
- [Centralized CI/CD Integration](#centralized-cicd-integration)
- [Local Development](#local-development)

### 🚀 Project Overview
This project is a streamlined web application engineered to validate the deployment pipeline. The objective is to push updates to this repository and have them automatically built, containerized, and deployed to a Kubernetes cluster without managing the pipeline scripts locally.

### 🛠 Tech Stack
- **Frontend / Application:** HTML, Node.js tooling, TailwindCSS
- **Web Server:** Nginx (configured via `nginx.conf`)
- **Containerization:** Docker (`Dockerfile` multi-stage build)
- **Orchestration:** Kubernetes (K3s)

### ☸️ Kubernetes Manifests
The deployment configurations are securely kept within the `k8s-manifest/` directory. These YAML files are dynamically populated with Environment Variables during the CI/CD pipeline execution using `envsubst`, avoiding the risk of hardcoded credentials.

- `deployment.yaml`: Defines the desired state of the application's Pods (Replicas, Image reference, Ports).
- `services.yaml`: Exposes the deployment internally within the Kubernetes cluster as a network service.
- `ingress.yaml`: Configures HTTP routing to expose the application to the internet via a specific domain.
- `secret.yaml`: Securely mounts confidential environment variables to the application pods.

### 🔄 Centralized CI/CD Integration
> [!IMPORTANT]
> **Notice:** You will not find a `.gitlab-ci.yml` file in this repository.

This repository implements a **Centralized CI/CD approach**. The CI/CD logic is strictly governed by the [General Pipeline](../general-pipeline) repository. 

**How it works:**
1. The CI/CD Configuration File path for this repository in GitLab (Settings > CI/CD > General Pipelines) is pointed to the `.gitlab-ci.yml` in the `general-pipeline` project.
2. Whenever a push is made to the `alpha` branch, GitLab triggers the centralized pipeline, automatically building the docker image, pushing it to the registry, and applying and updating the Kubernetes manifests to the cluster.

### 💻 Local Development
If you wish to run the application locally without Kubernetes:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```
3. **Build the Docker container:**
   ```bash
   docker build -t apps-assignment:local .
   ```
4. **Run the container:**
   ```bash
   docker run -p 8080:8080 apps-assignment:local
   ```
   The app will be accessible at http://localhost:8080