-- E-commerce database schema

CREATE DATABASE IF NOT EXISTS ecommerce_store;
USE ecommerce_store;

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(100),
    stock INT DEFAULT 100,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(50),
    total_amount DECIMAL(10, 2) NOT NULL,
    order_items TEXT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample product data
INSERT INTO products (name, description, price, image_url, category) VALUES
-- Electronics
('Wireless Headphones', 'Premium Bluetooth headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.', 79.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),
('Smart Watch Pro', 'Advanced fitness tracker with heart rate monitor, GPS tracking, sleep analysis, and waterproof design. Track your health goals with style.', 199.99, 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),
('Bluetooth Speaker', 'Portable waterproof speaker with 360-degree sound, deep bass, and 12-hour battery life. Perfect for outdoor adventures and parties.', 59.99, 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),
('Wireless Mouse', 'Ergonomic wireless mouse with adjustable DPI, silent clicks, and long battery life. Compatible with all devices and operating systems.', 19.99, 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),
('USB-C Hub', '7-in-1 USB-C hub with HDMI, USB 3.0 ports, SD card reader, and power delivery. Essential for modern laptops and tablets.', 34.99, 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),
('Webcam HD', '1080p HD webcam with auto-focus, built-in microphone, and wide-angle lens. Perfect for video calls and streaming.', 49.99, 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=500', 'Electronics'),

-- Fashion
('Running Shoes', 'Lightweight running shoes with cushioned sole, breathable mesh upper, and excellent grip. Available in multiple colors and sizes.', 119.99, 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500', 'Fashion'),
('Sunglasses Classic', 'Polarized sunglasses with 100% UV protection, durable frame, and stylish design. Includes protective case and cleaning cloth.', 39.99, 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500', 'Fashion'),
('Leather Watch', 'Classic analog watch with genuine leather strap, stainless steel case, and water resistance. Timeless elegance for any occasion.', 89.99, 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500', 'Fashion'),
('Canvas Sneakers', 'Comfortable canvas sneakers with rubber sole and classic design. Perfect for casual everyday wear and weekend outings.', 44.99, 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500', 'Fashion'),
('Baseball Cap', 'Adjustable baseball cap with embroidered logo, breathable fabric, and curved brim. One size fits all with snapback closure.', 24.99, 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=500', 'Fashion'),

-- Home
('Coffee Maker', 'Programmable coffee maker with thermal carafe, brew strength control, auto shut-off, and 12-cup capacity. Start your day right.', 89.99, 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),
('Desk Lamp LED', 'Modern LED desk lamp with adjustable brightness levels, flexible arm, USB charging port, and energy-efficient design.', 34.99, 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),
('Plant Pot Set', 'Set of 3 ceramic plant pots with drainage holes, saucers, and modern design. Perfect for indoor plants, succulents, and herbs.', 27.99, 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),
('Wall Clock', 'Silent wall clock with large numbers, modern design, and accurate quartz movement. Battery operated and easy to install.', 29.99, 'https://images.pexels.com/photos/1537268/pexels-photo-1537268.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),
('Throw Pillow Set', 'Set of 2 decorative throw pillows with soft covers, hidden zippers, and premium filling. Add comfort and style to any room.', 32.99, 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),
('Scented Candles', 'Set of 3 aromatherapy candles with natural soy wax, essential oils, and 40-hour burn time. Create a relaxing atmosphere.', 24.99, 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500', 'Home'),

-- Sports
('Yoga Mat Premium', 'Extra thick yoga mat with non-slip surface, carrying strap, and eco-friendly material. Perfect for yoga, pilates, and stretching.', 29.99, 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500', 'Sports'),
('Water Bottle', 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid and wide mouth opening.', 24.99, 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=500', 'Sports'),
('Resistance Bands', 'Set of 5 resistance bands with different strength levels, door anchor, handles, and carrying bag. Complete home workout solution.', 19.99, 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=500', 'Sports'),
('Jump Rope', 'Speed jump rope with adjustable length, comfortable handles, and smooth ball bearings. Perfect for cardio and fitness training.', 14.99, 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=500', 'Sports'),
('Gym Bag', 'Spacious gym bag with shoe compartment, water bottle holder, and multiple pockets. Durable and stylish for all your workout gear.', 39.99, 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=500', 'Sports'),

-- Accessories
('Laptop Backpack', 'Durable laptop backpack with padded compartment for 15.6" laptops, USB charging port, water-resistant material, and multiple pockets.', 49.99, 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500', 'Accessories'),
('Phone Case', 'Protective phone case with shock absorption, raised edges, and slim design. Available for all major phone models.', 14.99, 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500', 'Accessories'),
('Wallet Leather', 'Genuine leather wallet with RFID blocking, multiple card slots, and bill compartment. Slim design fits comfortably in pocket.', 34.99, 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500', 'Accessories'),
('Keychain Multi-tool', 'Compact multi-tool keychain with bottle opener, screwdrivers, and ruler. Made from stainless steel and perfect for everyday carry.', 12.99, 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500', 'Accessories'),
('Travel Adapter', 'Universal travel adapter with 4 USB ports, works in 150+ countries, and includes surge protection. Essential for international travel.', 29.99, 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=500', 'Accessories');
