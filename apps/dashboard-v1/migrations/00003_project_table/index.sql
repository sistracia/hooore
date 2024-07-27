CREATE TABLE template (
    id varchar NOT NULL PRIMARY KEY,
    code varchar NOT NULL DEFAULT '',
    name varchar NOT NULL DEFAULT '',
    thumbnail_url varchar NOT NULL DEFAULT ''
);

CREATE TABLE project (
    id varchar NOT NULL PRIMARY KEY,
    business_name varchar NOT NULL DEFAULT '',
    business_logo varchar NOT NULL DEFAULT '',
    template_id varchar NOT NULL DEFAULT NULL,
    social jsonb NOT NULL DEFAULT '[]',
    domain varchar NOT NULL DEFAULT '' UNIQUE,
    user_id varchar NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (template_id) REFERENCES "template"(id)
);