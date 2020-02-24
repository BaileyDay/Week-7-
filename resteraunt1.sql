CREATE TABLE resteraunt (
    id SERIAL PRIMARY KEY,
    resteraunt_name text,
    resteraunt_address varchar,
    stars int,
    category text
);

CREATE TABLE reviewer (
    id SERIAL PRIMARY KEY,
    reviewer_name text,
    reviewer_email varchar,
    karma int NOT NULL CHECK (karma <= 7)
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    reviewer_id int,
    stars int NOT NULL CHECK (stars <= 5),
    title text,
    review text,
    resteraunt_id int,
    FOREIGN KEY (reviewer_id) REFERENCES reviewer(id),
    FOREIGN KEY (resteraunt_id) REFERENCES resteraunt(id)
);


