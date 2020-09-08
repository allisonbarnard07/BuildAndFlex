DROP database if exists buildAndFlex_db;

CREATE DATABASE buildAndFlex_db;

USE buildAndFlex_db;

CREATE TABLE user (
    id INT AUTO_INCREMENT,
    email varchar(150) not null,
    password varchar(150) not null,
    age INT,
    firstName varchar(150),
    lastName varchar(150),
    PRIMARY KEY (id)
)
