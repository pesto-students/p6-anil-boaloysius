-- Q1) Find the item that has minimum weight.

select * from items where weight = (select min(weight) from items);

-- Result
-- +--------+------------------------------+--------+-------+
-- | itemno | description                  | weight | cost  |
-- +--------+------------------------------+--------+-------+
-- |      3 | Brocolinni - Gaylan, Chinese | 100.00 | 11.00 |
-- +--------+------------------------------+--------+-------+

-- Q2) Find the different warehouses in “Pune”
select * from warehouses where city_id = (select city_id from cities where city='Pune');

-- Result
-- +-----+-----------+----------+-----------------------------+---------+
-- | wid | wname     | location | extra_context               | city_id |
-- +-----+-----------+----------+-----------------------------+---------+
-- |   5 | Pune West | Pune     | {"info": "some extra info"} |       7 |
-- |  10 | Pune East | Pune     | {"info": "some extra info"} |       7 |
-- +-----+-----------+----------+-----------------------------+---------+

-- Q3) Find the details of items ordered by a customer “Mr. Patil”.

select * from items where itemno in (
    select item_id 
    from orders 
    where customer_id = (
        select cno from customers where cname= "Mr Patil"
    )
);

-- +--------+--------------------------+--------+--------+
-- | itemno | description              | weight | cost   |
-- +--------+--------------------------+--------+--------+
-- |      1 | Foam Dinner Plate        | 300.00 |  10.00 |
-- |      2 | Lettuce - Romaine, Heart | 200.00 | 500.00 |
-- +--------+--------------------------+--------+--------+

-- Q4) Find a Warehouse which has maximum stores.

select * 
from warehouses a
inner join (
    select warehouse_id, count(*) as cnt
    from stores
    group by warehouse_id
    order by cnt desc limit 1 
) b
where a.wid = b.warehouse_id;

-- Q5) Find an item which is ordered for a minimum number of times.

select * 
from items a
inner join (
    select item_id, count(*) as cnt
    from orders 
    group by item_id
    order by cnt desc
    limit 1
) as b
on a.itemno = b.item_id;

-- Q6) Find the detailed orders given by each customer.

select * 
from customers inner join
(
    select * 
    from orders o
    inner join items 
    on o.item_id=items.itemno
) oi
on customers.cno=oi.customer_id;

-- +-----+---------------+---------------------------+---------+---------+-----+------------+-------------+---------+----------+--------+------------------------------+--------+--------+
-- | cno | cname         | addr                      | cu_city | city_id | ono | odate      | customer_id | item_id | quantity | itemno | description                  | weight | cost   |
-- +-----+---------------+---------------------------+---------+---------+-----+------------+-------------+---------+----------+--------+------------------------------+--------+--------+
-- |   1 | Raju sah      | 989 North delhi           | Delhi   |       1 |   1 | 2022-05-21 |           1 |       1 |     5.00 |      1 | Foam Dinner Plate            | 300.00 |  10.00 |
-- |   1 | Raju sah      | 989 North delhi           | Delhi   |       1 |   2 | 2022-07-24 |           1 |       2 |     3.00 |      2 | Lettuce - Romaine, Heart     | 200.00 | 500.00 |
-- |   1 | Raju sah      | 989 North delhi           | Delhi   |       1 |   3 | 2022-08-02 |           1 |       3 |     1.00 |      3 | Brocolinni - Gaylan, Chinese | 100.00 |  11.00 |
-- |   2 | Mr Patil      | 1032 lavendar street pune | Pune    |       7 |   4 | 2022-03-20 |           2 |       1 |     4.00 |      1 | Foam Dinner Plate            | 300.00 |  10.00 |
-- |   2 | Mr Patil      | 1032 lavendar street pune | Pune    |       7 |   5 | 2022-06-12 |           2 |       2 |     4.00 |      2 | Lettuce - Romaine, Heart     | 200.00 | 500.00 |
-- |   3 | Ankit khurana | Pushpanjali enclave delhi | Delhi   |       1 |   6 | 2022-06-02 |           3 |       3 |     1.00 |      3 | Brocolinni - Gaylan, Chinese | 100.00 |  11.00 |
-- |   4 | Mr Arora      | 007 park street goa       | Goa     |      10 |   7 | 2022-05-05 |           4 |       1 |     4.00 |      1 | Foam Dinner Plate            | 300.00 |  10.00 |
-- +-----+---------------+---------------------------+---------+---------+-----+------------+-------------+---------+----------+--------+------------------------------+--------+--------+