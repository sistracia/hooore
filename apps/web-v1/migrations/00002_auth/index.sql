CREATE TABLE "user" (
    id varchar NOT NULL PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    password_hash varchar NOT NULL
);

CREATE TABLE session (
    id varchar NOT NULL PRIMARY KEY,
    expires_at integer NOT NULL,
    user_id varchar NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);