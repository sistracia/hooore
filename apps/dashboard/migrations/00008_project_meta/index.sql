CREATE TABLE project_meta (
    id varchar NOT NULL PRIMARY KEY,
    type varchar NOT NULL DEFAULT '',
    varchar varchar NOT NULL DEFAULT '',
    project_id varchar NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project(id)
);