-- Write a query to find the ride with the highest and lowest fare.

SELECT *
FROM Rides
ORDER by fare DESC
LIMIT 1

SELECT *
FROM Rides
ORDER by fare ASC
LIMIT 1

-- Write a query to find the average fare and distance for each driver_id
SELECT AVG(fare) AS avrg_fare , AVG(fare) AS distance
FROM Rides
WHERE driver_id = 2;

-- Write a query to find driver_id that have completed more than 5 rides.
SELECT driver_id, COUNT(*) AS ride_count
FROM Rides
GROUP BY driver_id
HAVING COUNT(*) > 5;

-- Assuming there is another collection/table called Drivers with driver_id and name fields, write a query to find the name of the driver with the highest fare.
SELECT d.name
FROM Rides r
INNER JOIN Drivers d ON r.driver_id = d.driver_id
ORDER BY r.fare DESC
LIMIT 1;


-- Write a query to find the top 3 drivers who have earned the most from fares. Return the drivers' ids and total earnings.
SELECT d.driver_id, SUM(r.fare) AS total_earnings
FROM Rides r
INNER JOIN Drivers d ON r.driver_id = d.driver_id
GROUP BY d.driver_id
ORDER BY total_earnings DESC
LIMIT 3;

-- Assuming there's a ride_date field of date type in the Rides table / collection, write a query to find all rides that happened in the last 7 days.
SELECT *
FROM Rides
WHERE ride_date >= DATE_SUB(CURRENT_DATE, INTERVAL 7 DAY);

-- Write a query to find all rides where the end_location is not set.
SELECT *
FROM Rides
WHERE end_location = None OR end_location = '';

-- Write a query to find all rides where the end_location is not set.
SELECT *
FROM Rides
WHERE end_location IS NULL;

-- Write a query to calculate the fare per mile for each ride and return the ride ids and their fare per mile, ordered by fare per mile in descending order.
SELECT ride_id, fare / distance AS fare_per_mile
FROM Rides
ORDER BY fare_per_mile DESC;

-- Assuming there's another collection/table Passengers with passenger_id and name fields, write a query to return a list of all rides including the driver's name and passenger's name.
SELECT Rides.ride_id, Drivers.name AS driver_name, Passengers.name AS passenger_name
FROM Rides
JOIN Drivers ON Rides.driver_id = Drivers.driver_id
JOIN Passengers ON Rides.passenger_id = Passengers.passenger_id;


-- Write a query to add a tip field to the Rides table / collection.
ALTER TABLE Rides
ADD tip DECIMAL(10, 2);