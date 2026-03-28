# 🚀 Deployment Instructions

## ✅ What's Done

1. ✅ Dynamic page titles added to all pages
2. ✅ Database credentials updated for InfinityFree
3. ✅ Code pushed to GitHub
4. ✅ Database created and imported

## 📋 Next Steps to Go Live

### Step 1: Upload Backend to InfinityFree

1. Login to InfinityFree control panel
2. Go to "File Manager"
3. Navigate to `htdocs` folder
4. Upload the `backend` folder (3 PHP files)
5. Your backend will be at: `https://yoursite.infinityfreeapp.com/backend/`

### Step 2: Get Your Database Password

1. In InfinityFree, go to "MySQL Databases"
2. Click the eye icon to reveal your password
3. Copy the password

### Step 3: Update PHP Files with Password

Edit all 3 PHP files in InfinityFree File Manager and add your password:

```php
$password = "YOUR_PASSWORD_HERE";
```

Files to update:
- `backend/get_products.php`
- `backend/get_product.php`
- `backend/checkout.php`

### Step 4: Update React API URLs

Before deploying frontend, update `src/config.js`:

```javascript
const API_BASE_URL = 'https://yoursite.infinityfreeapp.com/backend';
```

Replace `yoursite` with your actual InfinityFree subdomain.

### Step 5: Update React Components

Update these files to use the config:

**src/pages/Home.jsx:**
```javascript
import { API_ENDPOINTS } from '../config';

const response = await fetch(API_ENDPOINTS.GET_PRODUCTS);
```

**src/pages/Products.jsx:**
```javascript
import { API_ENDPOINTS } from '../config';

const response = await fetch(API_ENDPOINTS.GET_PRODUCTS);
```

**src/pages/ProductDetails.jsx:**
```javascript
import { API_ENDPOINTS } from '../config';

const response = await fetch(`${API_ENDPOINTS.GET_PRODUCT}?id=${id}`);
```

**src/pages/Checkout.jsx:**
```javascript
import { API_ENDPOINTS } from '../config';

const response = await fetch(API_ENDPOINTS.CHECKOUT, {
```

### Step 6: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `Onsite-5-Badr-Hassan-3D` repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. Your site will be live at: `your-project.vercel.app`

### Step 7: Test Your Live Site

1. Visit your Vercel URL
2. Browse products
3. Add items to cart
4. Complete checkout
5. Check orders in phpMyAdmin

## 🔗 Your Live URLs

- **Frontend:** `https://your-project.vercel.app`
- **Backend:** `https://yoursite.infinityfreeapp.com/backend/`
- **Database:** Access via InfinityFree phpMyAdmin

## 🐛 Troubleshooting

**Products not loading?**
- Check backend URL in `src/config.js`
- Verify PHP files have correct password
- Test backend directly: `yoursite.infinityfreeapp.com/backend/get_products.php`

**CORS errors?**
- InfinityFree should handle CORS automatically
- If issues persist, add to PHP files:
```php
header("Access-Control-Allow-Origin: https://your-project.vercel.app");
```

**Database connection failed?**
- Double-check database credentials in PHP files
- Verify database name matches exactly
- Check password is correct

## 📊 Project Complete!

Your e-commerce website is now:
- ✅ Fully functional locally
- ✅ Code on GitHub
- ✅ Database ready on InfinityFree
- ✅ Ready to deploy frontend to Vercel

**Total Time to Deploy:** ~10 minutes

**Cost:** $0 (100% Free)

---

**Need help?** Check the README.md for detailed instructions.
