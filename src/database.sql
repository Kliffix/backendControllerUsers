CREATE TABLE users (
    Id SERIAL PRIMARY KEY,
    firstname CHARACTER VARYING(30),
    lastname CHARACTER VARYING(30),
    email CHARACTER VARYING(30),
    age int
);