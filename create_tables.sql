
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL,
    name VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(200) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    PRIMARY KEY (id)
);