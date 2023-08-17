CREATE TABLE Rides (
    id INT PRIMARY KEY,
    driver_id INT,
    passenger_id INT,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    distance DECIMAL(5,2),
    ride_time DECIMAL(5,2),
    fare DECIMAL(6,2)
)

-- Insert five rows / documents into the Rides table / collection with data of your choice.
INSERT INTO Rides (driver_id, passenger_id, start_location, end_location, distance, ride_time, fare)
VALUES
    (1, 101, '123 Main St', '456 Elm St', 5.2, 15, 12.50),
    (2, 102, '789 Oak St', '987 Maple Ave', 8.7, 25, 18.75),
    (3, 103, '555 Pine Rd', '777 Cedar Ln', 3.0, 10, 8.00),
    (4, 104, '222 Birch Ave', '333 Spruce St', 1.5, 5, 5.50),
    (5, 105, '444 Willow Ct', '666 Juniper Rd', 7.9, 20, 14.25);

-- Write a query to fetch all rides, ordered by fare in descending order.
SELECT driver_id, passenger_id, start_location, end_location, distance, ride_time, fare
FROM Rides
ORDER BY fare DESC

-- Write a query to calculate the total distance and total fare for all rides.
SELECT SUM(distance) AS total_distance, SUM(fare) AS total_fare
FROM Rides;


SELECT AVG(ride_time) AS Average_ride_time
FROM Rides;

-- Write a query to fetch all rides whose start_location or end_location contains 'st'.
SELECT *
FROM Rides
WHERE start_location LIKE "%st%" OR end_location LIKE "%st%"

-- Write a query to count the number of rides for a given driver_id.
SELECT COUNT(*) AS ride_count
FROM Rides
WHERE driver_id = 2;

-- Write a query to update the fare of the ride with id 4.
UPDATE fare
set fare = 13.6
WHERE id = 4;