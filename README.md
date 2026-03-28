# ShopEasy - Full E-commerce Website

A complete, responsive e-commerce website built with React.js, PHP, and MySQL. This project demonstrates a fully functional online store with product browsing, shopping cart, and checkout functionality.

## 🚀 Technologies Used

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **React Router DOM** - For page navigation and routing
- **Bootstrap 5** - CSS framework for responsive design
- **Context API** - For global state management (shopping cart)

### Backend
- **PHP** - Server-side scripting language
- **MySQL** - Relational database management system
- **XAMPP** - Local development environment (Apache + MySQL + PHP)

### Version Control
- **Git** - Version control system
- **GitHub** - Code hosting platform

## ✨ Features

### Core Functionality
- ✅ Browse all products with images, names, and prices
- ✅ View detailed product information
- ✅ Add products to shopping cart
- ✅ Update cart quantities and remove items
- ✅ Complete checkout with customer information form
- ✅ Responsive design (works on mobile, tablet, and desktop)

### Extra Features
- Search products by name or description
- Filter products by category
- Toast notifications when adding items to cart
- Cart persists in localStorage (survives page refresh)
- Smooth animations and hover effects
- Real-time cart count badge in navbar

## 🛠️ Setup Instructions

Follow these steps carefully to run the project on your local machine.

### Step 1: Install XAMPP

1. Download XAMPP from: https://www.apachefriends.org/
2. Install XAMPP (choose default settings)
3. Open XAMPP Control Panel
4. Start **Apache** and **MySQL** services

### Step 2: Set Up the Database

1. Open your web browser and go to: `http://localhost/phpmyadmin`
2. Click on "Import" tab
3. Click "Choose File" and select the `database.sql` file from the project
4. Click "Go" button at the bottom
5. You should see a success message and a new database called `ecommerce_store`


### Step 3: Install Node.js and npm

1. Download Node.js from: https://nodejs.org/
2. Install Node.js (this also installs npm)
3. Verify installation by opening terminal/command prompt and typing:
   ```bash
   node --version
   npm --version
   ```

### Step 4: Install React Dependencies

1. Open terminal/command prompt
2. Navigate to the `react-app` folder:
   ```bash
   cd path/to/react-app
   ```
3. Install all required packages:
   ```bash
   npm install
   ```
4. Install additional dependencies:
   ```bash
   npm install react-router-dom bootstrap
   ```

### Step 5: Run the React Application

1. Make sure you're in the `react-app` folder
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to: `http://localhost:5173`
4. You should see the ShopEasy homepage!

## 🔧 Troubleshooting

### Problem: "Cannot connect to database"
**Solution:** Make sure XAMPP's Apache and MySQL services are running

### Problem: "Products not loading"
**Solution:** 
- Check XAMPP Apache and MySQL are running
- Check browser console for errors

### Problem: "npm command not found"
**Solution:** Install Node.js from nodejs.org

### Problem: "Port 5173 already in use"
**Solution:** Close other applications using that port or change the port in `vite.config.js`


**Created by:** Badr Hassan  
**Project:** Full E-commerce Website  
**Year:** 2026 
**Repository:** https://github.com/BadrHassanTRW/Onsite-5-Badr-Hassan-3D.git
