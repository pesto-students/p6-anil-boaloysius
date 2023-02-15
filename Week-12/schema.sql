DROP DATABASE IF EXISTS boby_warehouse;
CREATE DATABASE boby_warehouse;

USE boby_warehouse;

CREATE TABLE IF NOT EXISTS cities(
    city_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	city CHAR(20) NOT NULL,
    state CHAR(20) NOT NULL,
    UNIQUE (city, state)
);

INSERT INTO cities (city, state) VALUES('Delhi', 'Delhi');
INSERT INTO cities (city, state) VALUES('Surat', 'Gujarat');
INSERT INTO cities (city, state) VALUES('Mumbai', 'Maharashtra');
INSERT INTO cities (city, state) VALUES('Bengaluru', 'Karnataka');
INSERT INTO cities (city, state) VALUES('Jammu', 'Jammu and Kashmir');
INSERT INTO cities (city, state) VALUES('Indore', 'Madhya Pradesh');
INSERT INTO cities (city, state) VALUES('Pune', 'Maharashtra');
INSERT INTO cities (city, state) VALUES('Kolkata', 'West Bengal');
INSERT INTO cities (city, state) VALUES('Ranchi', 'Jharkhand');
INSERT INTO cities (city, state) VALUES('Goa', 'Goa');
INSERT INTO cities (city, state) VALUES('Ludhiana', 'Punjab');

CREATE TABLE IF NOT EXISTS warehouses(
    wid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    wname CHAR(30),
    location CHAR(20),
    extra_context json,
    city_id INTEGER,
    FOREIGN KEY(city_id) REFERENCES cities(city_id) ON DELETE SET NULL
);

INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Delhi North', 'Delhi', '{"info": "some extra info"}',1);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Surat West', 'Surat', '{"info": "some extra info"}',2);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Delhi East', 'Delhi', '{"info": "some extra info"}',1);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Indore South', 'Indore', '{"info": "some extra info"}',6);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Pune West', 'Pune', '{"info": "some extra info"}',7);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Surat North', 'Surat', '{"info": "some extra info"}',2);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Ranchi Central', 'Ranchi', '{"info": "some extra info"}',9);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Goa Hub', 'Goa', '{"info": "some extra info"}',10);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Kolkata West', 'Kolkata', '{"info": "some extra info"}',8);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Pune East', 'Pune', '{"info": "some extra info"}',7);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Mumbai South', 'Mumbai', '{"info": "some extra info"}',3);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Jammu Main', 'Jammu', '{"info": "some extra info"}',5);
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES('Bengaluru Hosur', 'Bengaluru', '{"info": "some extra info"}', 4);

CREATE TABLE IF NOT EXISTS stores(
    sid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    store_name CHAR(20), 
    location_city CHAR(20),
    warehouse_id INTEGER REFERENCES warehouses(wid) ON DELETE SET NULL
);

INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'Raj Confectionery', 'Delhi', 1);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'Gupta stores', 'Pune', 5);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'Super store ', 'Surat', 6);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( '24x7 store', 'Bengaluru', 13);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'Aggarwal Sweets ', 'Ranchi', 7);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'All needs store ', 'Goa', 8);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES( 'Krishna super store', 'Delhi', 1);

CREATE TABLE IF NOT EXISTS customers(
    cno INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    cname CHAR(50),
    addr VARCHAR(50),
    cu_city CHAR(20),
    city_id INTEGER,
    FOREIGN KEY(city_id) REFERENCES cities(city_id) ON DELETE SET NULL
);

INSERT INTO customers (cname, addr, cu_city, city_id) VALUES( 'Raju sah', '989 North delhi', 'Delhi',1 );
INSERT INTO customers (cname, addr, cu_city, city_id) VALUES( 'Mr Patil', '1032 lavendar street pune', 'Pune',7 );
INSERT INTO customers (cname, addr, cu_city, city_id) VALUES( 'Ankit khurana', 'Pushpanjali enclave delhi', 'Delhi',1);
INSERT INTO customers (cname, addr, cu_city, city_id) VALUES( 'Mr Arora', '007 park street goa', 'Goa', 10);

CREATE TABLE IF NOT EXISTS items(
    itemno INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    weight DECIMAL(5,2),
    cost DECIMAL(5,2) 
);

INSERT INTO items (description, weight, cost) VALUES( 'Foam Dinner Plate', 300, 10);
INSERT INTO items (description, weight, cost) VALUES( 'Lettuce - Romaine, Heart', 200, 500);
INSERT INTO items (description, weight, cost) VALUES( 'Brocolinni - Gaylan, Chinese',100, 11);
INSERT INTO items (description, weight, cost) VALUES( 'Sweet Pea Sprouts', 400, 12);

CREATE TABLE IF NOT EXISTS orders(
    ono INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    odate DATE,
    customer_id INTEGER,
    item_id INTEGER,
    quantity DECIMAL(5,2),
    FOREIGN KEY(customer_id) REFERENCES customers(cno),
    FOREIGN KEY(item_id) REFERENCES items(itemno)
);

INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-05-21',1,1,5);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-07-24',1,2,3);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-08-02',1,3,1);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-03-20',2,1,4);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-06-12',2,2,4);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-06-02',3,3,1);
INSERT INTO orders (odate, customer_id, item_id, quantity) VALUES('2022-05-05',4,1,4);

CREATE TABLE IF NOT EXISTS stores_items(
    store_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(sid),
    FOREIGN KEY (item_id) REFERENCES items(itemno)
);

INSERT INTO stores_items (store_id, item_id) VALUES(1,1);
INSERT INTO stores_items (store_id, item_id) VALUES(1,2);
INSERT INTO stores_items (store_id, item_id) VALUES(1,3);
INSERT INTO stores_items (store_id, item_id) VALUES(1,4);
INSERT INTO stores_items (store_id, item_id) VALUES(2,1);
INSERT INTO stores_items (store_id, item_id) VALUES(2,2);
INSERT INTO stores_items (store_id, item_id) VALUES(2,3);
INSERT INTO stores_items (store_id, item_id) VALUES(2,4);
INSERT INTO stores_items (store_id, item_id) VALUES(3,1);
INSERT INTO stores_items (store_id, item_id) VALUES(3,2);
INSERT INTO stores_items (store_id, item_id) VALUES(3,3);
INSERT INTO stores_items (store_id, item_id) VALUES(3,4);
