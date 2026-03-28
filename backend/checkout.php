<?php
// Checkout order API

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// InfinityFree database credentials
$host = "sql103.infinityfree.com";
$db_name = "if0_41499513_ecommerce_store";
$username = "if0_41499513";
$password = ""; // Add your password here

try {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);
    
    if (!isset($data['customer_name']) || !isset($data['email']) || 
        !isset($data['address']) || !isset($data['total_amount']) || 
        !isset($data['cart_items'])) {
        echo json_encode([
            "success" => false,
            "message" => "Missing required fields"
        ]);
        exit;
    }
    
    $customer_name = $data['customer_name'];
    $email = $data['email'];
    $address = $data['address'];
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $total_amount = $data['total_amount'];
    $cart_items = json_encode($data['cart_items']);
    
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $query = "INSERT INTO orders (customer_name, email, address, phone, total_amount, order_items) 
              VALUES (:customer_name, :email, :address, :phone, :total_amount, :order_items)";
    
    $stmt = $conn->prepare($query);
    
    $stmt->bindParam(':customer_name', $customer_name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':total_amount', $total_amount);
    $stmt->bindParam(':order_items', $cart_items);
    
    if ($stmt->execute()) {
        $order_id = $conn->lastInsertId();
        
        echo json_encode([
            "success" => true,
            "message" => "Order placed successfully!",
            "order_id" => $order_id
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to place order"
        ]);
    }
    
} catch(PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database Error: " . $e->getMessage()
    ]);
}

$conn = null;
?>
