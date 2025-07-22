# 📊 Xelytics — Excel Analytics Platform

**Xelytics** is a modern Excel file analytics platform that allows users to securely upload Excel files, visualize data smartly, and export clean charts. Built with the latest web technologies and designed to be fast, beautiful, and responsive.

---

## 🚀 Features to add

- 🔒 **Secure Uploads** — Upload Excel files securely using Cloudinary
- 📊 **Smart Visualization** — Auto-generate clean charts by selecting columns
- 🖼️ **Export Options** — Download charts as PNG or PDF in one click
- 🔍 **Search & History** — Easily track previously uploaded files
- 💡 **AI Insights** (coming soon) — Get smart summaries and pattern recognition
- 🔐 **Authentication** — Clerk-powered sign in and user management
- 📅 **Analytics Dashboard** — User activity stats and heatmaps
- 🌐 **Responsive Design** — Mobile and desktop friendly UI

---

## 🛠️ Tech Stack

| Layer        | Tech                              |
|--------------|-----------------------------------|
| Frontend     | React 19 + TypeScript + Vite      |
| Styling      | Tailwind CSS + Framer Motion      |
| Auth         | Clerk                             |
| File Upload  | Cloudinary                        |
| Charts       | Chart.js + HTML2Canvas + jsPDF    |
| Backend      | Node.js + Express + MongoDB       |
| Dev Tools    | ESLint, Prettier, GitHub, Vercel  |

---

## 📦 Installation

```bash
# Clone the project
git clone https://github.com/your-username/xelytics.git
cd xelytics

# Install frontend dependencies
cd client
npm install 
npm dev