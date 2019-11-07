DROP TABLE IF EXISTS people;

CREATE TABLE people(
  id SERIAL PRIMARY KEY,
  fist_name VARCHAR(225),
  last_name VARCHAR(225)
);