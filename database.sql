DROP DATABASE IF EXISTS traz_meu_pedaco
CREATE TABLE traz_meu_pedaco

USE traz_meu_pedaco

CREATE TABLE customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    password VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cellphone VARCHAR(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    available BOOLEAN NOT NULL,
    description VARCHAR(200) NOT NULL UNIQUE,
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL FOREIGN KEY REFERENCES customer(customer_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders_products (
    order_product_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL FOREIGN KEY REFERENCES orders(order_id),
    product_id INT NOT NULL FOREIGN KEY REFERENCES products(product_id),
    quantity INT NOT NULL,

);