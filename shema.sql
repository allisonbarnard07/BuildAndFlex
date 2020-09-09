DROP database if exists buildAndFlex_db;

CREATE DATABASE buildAndFlex_db;

USE buildAndFlex_db;

<<<<<<< HEAD:shema.sql
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
=======
CREATE TABLE user (
>>>>>>> 857b9acfa3aade1773c75db32dd95679f23edfd0:db/shema.sql
    id INT AUTO_INCREMENT,
    email varchar(150) not null,
    password varchar(150) not null,
    age INT,
<<<<<<< HEAD:shema.sql
    startingWeight INT,
    endWeight INT,
    goal varchar (150) NOT NULL,
    duration INT NOT NULL,
    miles INT NOT NULL,
    team VARCHAR (150) DEFAULT NULL,
=======
    firstName varchar(150),
    lastName varchar(150),
>>>>>>> 857b9acfa3aade1773c75db32dd95679f23edfd0:db/shema.sql
    PRIMARY KEY (id)
)
