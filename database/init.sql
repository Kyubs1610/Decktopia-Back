CREATE DATABASE decktopia_db;
CREATE TABLE public.users (id serial PRIMARY KEY, username character varying(255) NOT NULL, email character varying(255) NOT NULL, password character varying(255) NOT NULL);
CREATE TABLE cards (cards_id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), card_name VARCHAR(255), card_value VARCHAR(255), card_exp VARCHAR(255));
CREATE TABLE collection_per_user (collection_id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), collection_name VARCHAR(255), creation_date DATE);
