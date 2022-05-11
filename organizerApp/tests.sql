-- seleccionar db
USE organizerapp;

-- insertar datos
INSERT INTO users (nombre, age, birthday, email, password, city, active)
 VALUES(
	1,
    "Rodrigo",
    "28",
    "1993-05-07",
    "testmail@gmail.com",
    "testpassword",
    "cosquin",
    true
);
INSERT INTO users (nombre, age, birthday, email, password, city, active) 
VALUES(
    "kelo",
    "28",
    "1993-05-07",
    "testmail@gmail.com",
    "testpassword",
    "cosquin",
    true
);

-- get a los datos
SELECT * FROM users;

-- update 
UPDATE users SET active = false WHERE id = 2;

-- delete
DELETE FROM users WHERE id = 2;

