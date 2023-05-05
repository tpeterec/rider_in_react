DROP TABLE IF EXISTS rider_profiles;

CREATE TABLE rider_profiles(
    id SERIAL PRIMARY KEY,
    name varchar,
    age integer,
    motorcycle varchar,
    riding_style varchar,
    biography text,
    images text
)