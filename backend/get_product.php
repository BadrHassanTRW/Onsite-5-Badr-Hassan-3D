<?php
// Fetch single product API

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$db_name = "ecommerce_store";
$username = "root";
$password = "";

try {
    if (!isset($_GET['id']) || empty($_GET['id'])) {
        echo json_encode([
            "success" => false,
            "message" => "Product ID is required"
        ]);
        exit;
    }
    
    $product_id = $_GET['id'];
    
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $query = "SELECT * FROM products WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':id', $product_id);
    $stmt->execute();
    
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($product) {
        echo json_encode([
            "success" => true,
            "data" => $product
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Product not found"
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
