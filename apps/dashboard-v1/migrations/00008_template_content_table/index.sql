CREATE TABLE template_content (
    id varchar NOT NULL PRIMARY KEY,
    name varchar NOT NULL DEFAULT '',
    content_schema jsonb NOT NULL DEFAULT '{}',
    template_id varchar NOT NULL,
    FOREIGN KEY (template_id) REFERENCES template(id)
);