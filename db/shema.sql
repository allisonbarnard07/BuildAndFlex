DROP database if exists buildAndFlex_db;

CREATE DATABASE buildAndFlex_db;

USE buildAndFlex_db;

CREATE TABLE walkingChallenge (
id INT NOT NULL auto_increment,
username VARCHAR(100) NOT NULL,
age INT NOT NULL,
startingWeight INT DEFAULT NULL,
endWeight INT DEFAULT NULL,
goal VARCHAR(150) NOT NULL,
duration INT NOT NULL,
miles INT NOT NULL,
team VARCHAR(150) DEFAULT NULL,
steps INT,
PRIMARY KEY(id)
);

CREATE TABLE swimChallenge (
id INT NOT NULL auto_increment,
username VARCHAR(80) NOT NULL,
age INT NOT NULL,
goal VARCHAR (150) NOT NULL,
startingWeight INT DEFAULT NULL,
endWeight INT DEFAULT NULL,
duration INT NOT NULL,
miles INT NOT NULL,
team VARCHAR(150) DEFAULT NULL,
PRIMARY KEY(id)
);

CREATE TABLE hikeChallenge (
id INT NOT NULL auto_increment,
username VARCHAR(100) NOT NULL,
age INT NOT NULL,
startingWeight INT DEFAULT NULL,
endWeight INT DEFAULT NULL,
goal VARCHAR(150) NOT NULL,
duration INT NOT NULL,
miles INT NOT NULL,
team VARCHAR(150) DEFAULT NULL,
PRIMARY KEY(id)
);

CREATE TABLE pullupChallenge (
    id INT AUTO_INCREMENT,
    username VARCHAR (100) NOT NULL,
    age INT,
    startingWeight INT,
    endWeight INT,
    goal varchar (150) NOT NULL,
    duration INT NOT NULL,
    reps INT NOT NULL,
    team VARCHAR (150) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE runningChallenge (
    id INT AUTO_INCREMENT,
    username VARCHAR (100) NOT NULL,
    age INT,
    startingWeight INT,
    endWeight INT,
    goal varchar (150) NOT NULL,
    duration INT NOT NULL,
    miles INT NOT NULL,
    team VARCHAR (150) DEFAULT NULL,
    PRIMARY KEY (id)
)
