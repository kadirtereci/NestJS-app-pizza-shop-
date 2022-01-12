create schema pizza_shop;

create table if not exists ingredients
(
    id   tinyint auto_increment
        primary key,
    name varchar(50) not null
);

INSERT INTO `ingredients`
VALUES (1, 'Tomato'),
       (2, 'Mozzarella'),
       (3, 'Mozarella Di Bufala'),
       (4, 'Anchovies'),
       (5, 'Oregano'),
       (6, 'Oil'),
       (7, 'Spicy Salami');

create table if not exists orders
(
    id          int auto_increment
        primary key,
    total_price decimal(6, 2)                      not null,
    create_date datetime default CURRENT_TIMESTAMP not null
);

INSERT INTO `orders`
VALUES (1, 2551.00, '2021-04-13 20:37:21');

create table if not exists pizzas
(
    id    tinyint auto_increment
        primary key,
    name  varchar(50)   not null,
    price decimal(4, 2) not null
);


INSERT INTO `pizzas`
VALUES (1, 'Margherita', 5.00),
       (2, 'Bufala', 6.00),
       (3, 'Romana', 5.00),
       (4, 'Diavola', 7.50),
       (5, 'Pizza Bianca', 5.00);

create table if not exists order_items
(
    order_id   int           not null,
    pizza_id   tinyint       not null,
    quantity   int           not null,
    unit_price decimal(5, 2) not null,
    primary key (order_id, pizza_id),
    constraint order_item_orders_id_fk
        foreign key (order_id) references orders (id),
    constraint order_item_pizzas_id_fk
        foreign key (pizza_id) references pizzas (id)
);

INSERT INTO `order_items`
VALUES (1, 1, 21, 5.00),
       (1, 2, 43, 6.00),
       (1, 3, 54, 5.00),
       (1, 4, 234, 7.00),
       (1, 5, 54, 5.00);

create table if not exists pizza_ingredients
(
    pizza_id      tinyint not null,
    ingredient_id tinyint not null,
    primary key (pizza_id, ingredient_id),
    constraint pizza_ingredients_ingredients_id_fk
        foreign key (ingredient_id) references ingredients (id),
    constraint pizza_ingredients_pizzas_id_fk
        foreign key (pizza_id) references pizzas (id)
);


INSERT INTO `pizza_ingredients`
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (4, 1),
       (5, 1),
       (1, 2),
       (3, 2),
       (4, 2),
       (2, 3),
       (3, 4),
       (3, 5),
       (3, 6),
       (5, 6),
       (4, 7);