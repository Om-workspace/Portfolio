# 🚀 DevOps Portfolio – Full Stack Production Deployment

## 📌 Overview

This project is a production-style full-stack portfolio application built using:

- React (Frontend)
- Node.js + Express (Backend API)
- PostgreSQL (Database)
- Nginx (Reverse Proxy)
- Docker & Docker Compose (Containerization)

The application demonstrates real-world DevOps practices including multi-container architecture, reverse proxy configuration, environment-based configuration, and scalable deployment strategy.

---

## 🏗 Architecture

User → Nginx → React → Node API → PostgreSQL

All services are containerized and orchestrated using Docker Compose.

---

## 🛠 Features

- Dynamic project data served from backend
- Contact form storing messages in PostgreSQL
- Reverse proxy routing via Nginx
- Environment variable configuration
- Production-ready folder structure

---

## 🚀 Deployment Strategy

- Local development using Docker Compose
- Production deployment on AWS EC2
- Nginx reverse proxy for traffic management
- HTTPS configuration (planned)

---

## 📈 Future Enhancements

- CI/CD pipeline (GitHub Actions)
- Infrastructure as Code (Terraform)
- Monitoring & logging integration