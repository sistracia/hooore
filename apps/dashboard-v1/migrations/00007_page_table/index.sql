CREATE TABLE page (
    id varchar NOT NULL PRIMARY KEY,
    name varchar NOT NULL DEFAULT '',
    slug varchar NOT NULL DEFAULT '',
    published boolean NOT NULL DEFAULT TRUE,
    last_edited timestamp with time zone NOT NULL,
    create_date timestamp with time zone NOT NULL,
    type varchar NOT NULL DEFAULT '',
    project_id varchar NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project(id)
);