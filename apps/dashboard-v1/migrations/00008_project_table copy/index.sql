CREATE TABLE project (
    id varchar NOT NULL PRIMARY KEY,
    business_name varchar NOT NULL DEFAULT '',
    business_logo varchar NOT NULL DEFAULT '',
    template_code varchar NOT NULL DEFAULT '',
    social jsonb NOT NULL DEFAULT '[]',
    domain varchar NOT NULL DEFAULT '' UNIQUE,
    user_id varchar NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);