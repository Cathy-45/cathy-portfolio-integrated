# Cathy Portfolio Integrated

![Project Banner Image](https://github.com/Cathy-45/cathy-portfolio-integrated/blob/9710ad8aa10e850ef6a0507642b163db78cd9f08/Image%20Projects.jpg)
![Project Banner](https://github.com/Cathy-45/cathy-portfolio-integrated/blob/9710ad8aa10e850ef6a0507642b163db78cd9f08/Services.jpg)

A full-stack personal portfolio website for Catherine Sichone, integrating a React frontend with a Node.js/Express backend for consultations, payments (Stripe), analytics, and visit tracking (MySQL).

## Features
- **Frontend**: React app with routing (React Router), responsive design, and Tailwind CSS styling.
- **Backend**: Express server with API routes for consultations (email notifications via Nodemailer), payments (Stripe Checkout), analytics (password-protected visitor stats), and webhook handling.
- **Database**: MySQL for storing consultations and visits, with connection pooling for reliability.
- **Security**: Password-protected analytics, CORS, and Stripe webhook verification.
- **Deployment**: Ready for Render (or similar PaaS) with Vite build and Node.js server.

## Tech Stack
- **Frontend**: React 18, Vite 5, Tailwind CSS 4, React Router 6.
- **Backend**: Node.js 20, Express 4, MySQL 8, Stripe 15, Nodemailer 6.
- **Other**: dotenv for env vars, axios for geolocation.

## Prerequisites
- Node.js v20+.
- MySQL database (or Railway.app proxy).
- Stripe account (test keys for development).
- Gmail account with app password for emails (generate at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
- Git for version control.

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/cathy-portfolio-integrated.git
   cd cathy-portfolio-integrated
