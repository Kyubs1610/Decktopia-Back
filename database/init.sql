CREATE DATABASE decktopia_db;
\c decktopia_db;
CREATE TABLE public.users (id serial PRIMARY KEY,
username character varying(255) NOT NULL,
email character varying(255) NOT NULL,
password character varying(255) NOT NULL);
CREATE TABLE cards (cards_id SERIAL PRIMARY KEY,
 card_name VARCHAR(255),
 card_value VARCHAR(255),
 card_filename VARCHAR(255));
CREATE TABLE collection_per_user (collection_id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
card_id INTEGER NOT NULL);
