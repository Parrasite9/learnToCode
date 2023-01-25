-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it


-- Create a televisions table


--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url

CREATE TABLE televisions(id INT, model_name VARCHAR(20), screen_size INT, resolution VARCHAR(20), price INT, release_date TIMESTAMP, photo_url VARCHAR(20));

-- Insert 4 televisions into the tv_models table
INSERT INTO televisions(model_name, screen_size, resolution, price) VALUES ('VIZIO', 32, '4k', 300);
INSERT INTO televisions(model_name, screen_size, resolution, price) VALUES ('Samsung', 65, '8K', 2200);
INSERT INTO televisions(model_name, screen_size, resolution, price) VALUES ('LG', 45, '4k', 600);
INSERT INTO televisions(model_name, screen_size, resolution, price) VALUES ('Apple', 65, '4k', 1500);

-- Select all entries from the tv_models table
SELECT model_name FROM televisions;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns
