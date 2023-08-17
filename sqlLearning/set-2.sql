CREATE TABLE Restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cuisine_type VARCHAR(100),
    location VARCHAR(255),
    average_rating DECIMAL(3,2),
    delivery_available BOOLEAN
);


INSERT INTO Restaurants (id, name, cuisine_type, location, average_rating, delivery_available)
VALUES
    (1, 'Pizza Palace', 'Italian', '123 Main St', 4.5, true),
    (2, 'Noodle House', 'Chinese', '456 Elm St', 4.2, true),
    (3, 'Burger Joint', 'American', '789 Oak Ave', 3.8, true),
    (4, 'Sushi Spot', 'Japanese', '101 Pine St', 4.0, true),
    (5, 'Taco Town', 'Mexican', '555 Maple Rd', 4.6, true);

-- Write a query to fetch all restaurants, ordered by average_rating in descending order.
SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
ORDER BY average_rating DESC

-- Write a query to fetch all restaurants that offer delivery_available and have an average_rating of more than 4.

SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
WHERE average_rating > 4 AND delivery_available = true

-- Write a query to fetch all restaurants where the cuisine_type field is not set or is null.
SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
WHERE cuisine_type IS NULL OR cuisine_type = '';

-- Write a query to count the number of restaurants that have delivery_available.
SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
WHERE delivery_available = true

-- Write a query to fetch all restaurants whose location contains 'New York'.
SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
WHERE location LIKE '%New York%';


SELECT AVG(average_rating) AS avg_rating
FROM Restaurants;

--  Write a query to fetch the top 5 restaurants when ordered by average_rating in descending order.
SELECT id, name, cuisine_type, location, average_rating, delivery_available
FROM Restaurants
ORDER BY average_rating DESC
LIMIT 5;


-- Write a query to delete the ride with id 2.
DELETE FROM Restaurants
WHERE id = 2;