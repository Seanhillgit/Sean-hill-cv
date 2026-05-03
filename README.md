# Cloud-Hosted Professional CV
**A high-availability, secure web server project hosted on AWS and protected by Cloudflare.**

## 🚀 Project Overview
This project moves beyond a simple PDF resume by hosting a live, web-accessible CV on a cloud-based Linux server. It demonstrates core competencies in **Cloud Infrastructure (AWS)**, **DNS Management (Cloudflare)**, and **Linux System Administration**.

*   **Live Demo:** [http://sean-hill.com](http://sean-hill.com)
*   **Host:** AWS EC2 (Ubuntu 24.04 LTS)
*   **Web Server:** Python 3 `http.server`
*   **DNS & Security:** Cloudflare Global Edge Network

---

## 🛠 Tech Stack
*   **Compute:** AWS EC2 (t3.micro)
*   **OS:** Ubuntu Server
*   **Networking:** IPv4, TCP/IP, DNS
*   **Security:** AWS Security Groups, Cloudflare Proxy, WHOIS Privacy Protection
*   **Language:** Python 3

---

## 🔧 Deployment Steps
1.  **Server Provisioning:** Launched an EC2 instance and configured SSH access.
2.  **Environment Setup:** Cloned CV repository and organized assets.
3.  **Domain Acquisition:** Registered a custom domain and pointed Name Servers to Cloudflare.
4.  **DNS Configuration:** Created an **A Record** pointing to the EC2 Elastic/Public IP.
5.  **Service Launch:** Used `nohup` to run a persistent background Python process on Port 80.

---

## 🛠 Troubleshooting & Lessons Learned (The "DevOps" Log)
The most valuable part of this project was navigating real-world networking hurdles. Below are the issues encountered and the solutions implemented:

### 1. The Cloudflare 522 Timeout
*   **Issue:** After pointing the domain, the browser showed a Cloudflare 522 error.
*   **Analysis:** Cloudflare was attempting to connect to the server, but the "handshake" was being ignored by the host.
*   **Fix:** Identified that the **AWS Inbound Rules** were missing a rule for HTTP (Port 80). Updated the Security Group to allow traffic from `0.0.0.0/0`.

### 2. CNAME Conflict
*   **Issue:** Received an "Invalid CNAME" error when setting up the `www` subdomain.

### 3. Background Process Management
*   **Issue:** The web server would shut down whenever the SSH terminal was closed.
*   **Fix:** Implemented `nohup` (No Hang Up) and the `&` operator to detach the process from the terminal session, ensuring 24/7 uptime.

---

## 🔒 Security Best Practices Implemented
*   **Proxy Protection:** Enabled Cloudflare Proxy to mask the backend EC2 IP address, preventing direct DDoS attacks.
*   **Least Privilege:** Configured AWS Security Groups to only expose Port 80 (HTTP) and Port 22 (SSH), keeping all other ports closed.
*   **Privacy:** Utilized Cloudflare’s free WHOIS privacy to protect personal contact information associated with the domain registration.

---

