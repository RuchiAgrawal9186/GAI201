CREATE TABLE Customers (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20)
);

INSERT INTO Customers (id, name, email, address, phone_number)
VALUES
    (1, 'John Doe', 'john@example.com', '123 Main St, City', '123-456-7890'),
    (2, 'Jane Smith', 'jane@example.com', '456 Elm St, Town', '987-654-3210'),
    (3, 'Michael Johnson', 'michael@example.com', '789 Oak Ave, Village', '555-123-4567'),
    (4, 'Emily Brown', 'emily@example.com', '987 Pine Rd, Suburb', '111-222-3333'),
    (5, 'David Wilson', 'david@example.com', '345 Maple Ln, Countryside', '444-555-6666');
    
SELECT * from Customers

SELECT name, email
FROM Customers;

SELECT *
FROM Customers
WHERE id = 3;

SELECT *
FROM Customers
WHERE name LIKE 'A%';

SELECT *
FROM Customers
ORDER BY name DESC;

UPDATE Customers
SET address = 'gugash road fatepura'
WHERE id = 4;

-- Write a query to fetch the top 3 customers when ordered by id in ascending order.
SELECT id, name, email, address, phone_number
FROM Customers
ORDER BY id ASC
LIMIT 3;

-- Write a query to delete the customer with id 2.
DELETE FROM Customers
WHERE id = 2;

-- Write a query to count the number of customers.

SELECT COUNT(*) as Customers_count
FROM Customers


-- Write a query to fetch all customers except the first two when ordered by id in ascending order.
SELECT id, name, email, address, phone_number
FROM Customers
ORDER BY id ASC
LIMIT -1 OFFSET 2;

-- Write a query to fetch all customers whose id is greater than 2 and name starts with 'B'.
SELECT id, name, email, address, phone_number
FROM Customers
WHERE id > 2 AND name LIKE 'S%';

-- Write a query to fetch all customers whose id is less than 3 or name ends with 's'.
SELECT id, name, email, address, phone_number
FROM Customers
WHERE id < 3 OR name LIKE '%s';

-- Write a query to fetch all customers where the phone_number field is not set or is null.
SELECT id, name, email, address, phone_number
FROM Customers
WHERE phone_number IS NULL OR phone_number = '';

-- Write a query to update the fare of the ride with id 4.
UPDATE Rides
set fare = 13.6
WHERE driver_id = 1;

-- Write a query to calculate the total fare for each driver_id.
SELECT driver_id, SUM(fare) AS total_fare
FROM Rides
GROUP BY driver_id;