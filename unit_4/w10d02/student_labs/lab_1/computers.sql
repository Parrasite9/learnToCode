-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it

-- Create a computers table


-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports

CREATE TABLE computers(id SERIAL, make VARCHAR(20), model VARCHAR(20), cpu_speed INT, memory_size INT, price INT, release_date TIMESTAMP, photo_url TEXT, storage_amount INT, number_usb_ports INT, number_firewire_ports INT, number_thunderbolt_ports INT);

-- Insert 4 computers into the computers table
INSERT INTO computers (make, model, cpu_speed, price) VALUES ('Alienware', 'rxt300', 23, 900);
INSERT INTO computers (make, model, price) VALUES ('HP', 'r1500', 1900);
INSERT INTO computers (make, model, price, storage_amount) VALUES ('Dell', 'ZXA', 800, 500);
INSERT INTO computers (make, model, price, number_firewire_ports) VALUES ('ASUS', 'Omega-3', 1200, 3);

-- Select all entries from the computers table
SELECT * FROM computers

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
