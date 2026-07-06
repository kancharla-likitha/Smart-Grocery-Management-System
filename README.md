# 🛒 Smart Grocery Management System

A full-stack Smart Grocery Management System developed using the MERN stack. This application helps users manage grocery items by adding, updating, deleting, and tracking stock quantities. It is designed for smart refrigerator inventory management where users can increase or decrease item quantities using simple controls.



## 📌 Features

- 🔐 User Login & Registration
- ➕ Add Grocery Items
- 📋 View Grocery List
- ✏️ Update Item Quantity
- ➕ Increase Stock
- ➖ Decrease Stock
- 🗑 Delete Grocery Items
- ⚠️ Low Stock Indicator
- 📦 Unit Selection (Kg, Litre, Packet, Piece)
- 📱 Responsive User Interface



## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
Smart-Grocery-Management-System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/Smart-Grocery-Management-System.git
```

### Navigate to Project

```bash
cd Smart-Grocery-Management-System
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

or

```bash
node server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

```
http://localhost:5173
```

The backend runs at:

```
http://localhost:5000
```

---

## 📷 Screens

- Login Page
- Register Page
- Dashboard
- Add Grocery Item
- Grocery List
- Low Stock Status

---

## 📌 Future Enhancements

- Barcode Scanner Integration
- QR Code Support
- Expiry Date Tracking
- Refrigerator Sensor Integration
- Email Notifications for Low Stock
- Voice Assistant Support
- Shopping List Generation
- Mobile Application

---

## 🎯 Project Objective

The Smart Grocery Management System helps users efficiently monitor and manage grocery stock. It provides a simple interface to add, update, and track grocery items, reducing food wastage and ensuring essential items are always available.

---

## 👩‍💻 Author

**Kancharla Likitha**

B.Tech – Computer Science and Business Systems (CSBS)

RMK Engineering College

GitHub: https://github.com/kancharla-likitha
